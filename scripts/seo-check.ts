/**
 * SEO regression check against a running build.
 *
 *   npm run build && npm run start            (in another terminal)
 *   npm run seo:check -- [baseUrl] [--strict] [--out report.json]
 *
 * Fails on: non-200 status, missing / duplicate / non-self canonical, noindex on a sitemap page, missing or
 * duplicate title / description, H1 count != 1, broken or redirecting internal links, duplicate sitemap
 * entries, orphan pages, held (noindex) pages that are indexable or listed, and any drift between the
 * sitemap and the prerendered indexable routes.
 * Title > 60 / description > 155 characters are warnings (errors with --strict).
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { CONSUMER_NOINDEX, CONSUMER_PAGE_SLUGS } from "@/config/indexing";
import { siteConfig } from "@/config/site";

const ORIGIN = siteConfig.url;
const args = process.argv.slice(2);
const base = (args.find((a) => /^https?:\/\//.test(a)) ?? "http://localhost:3000").replace(/\/$/, "");
const strict = args.includes("--strict");
const outIdx = args.indexOf("--out");
const outFile = outIdx > -1 ? args[outIdx + 1] : null;

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;
/** Utility routes that must stay out of the index and the sitemap. */
const NOINDEX_ROUTES = ["/thank-you"];

const decode = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = (s: string) => decode(s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
const first = (re: RegExp, html: string) => (html.match(re)?.[1] ?? "").trim();

const errors: string[] = [];
const warnings: string[] = [];
const fail = (where: string, msg: string) => errors.push(`${where}: ${msg}`);
const warn = (where: string, msg: string) => (strict ? errors : warnings).push(`${where}: ${msg}`);

async function get(path: string) {
  const res = await fetch(base + path, { redirect: "manual" });
  return { status: res.status, html: res.status === 200 ? await res.text() : "" };
}

// ---- sitemap index -> child sitemaps -> URLs
const index = (await get("/sitemap.xml")).html;
const childSitemaps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, ""));
const locs: string[] = [];
for (const child of childSitemaps) {
  const xml = (await get(child)).html;
  if (!xml) fail(child, "child sitemap did not return 200");
  locs.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
}
const pathOf = (u: string) => u.replace(ORIGIN, "") || "/";
const seen = new Set<string>();
for (const loc of locs) {
  if (seen.has(loc)) fail(loc, "duplicate sitemap entry");
  seen.add(loc);
  if (!loc.startsWith(`${ORIGIN}/`) && loc !== ORIGIN) fail(loc, "sitemap URL not on canonical origin");
}

type Page = { url: string; path: string; status: number; title: string; description: string; canonical: string; robots: string; h1: string; h1Count: number; inboundPages?: number; contextualInboundPages?: number };
const pages: Page[] = [];
const links: { from: string; to: string; anchor: string; area: string }[] = [];

for (const loc of locs) {
  const path = pathOf(loc);
  const { status, html } = await get(path);
  if (status !== 200) fail(path, `status ${status}`);

  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map((m) => m[1]);
  const robots = first(/<meta name="robots" content="([^"]*)"/, html);
  const title = decode(first(/<title>([\s\S]*?)<\/title>/, html));
  const description = decode(first(/<meta name="description" content="([^"]*)"/, html));
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]));

  if (canonicals.length !== 1) fail(path, `${canonicals.length} canonical tags`);
  else if (canonicals[0] !== loc) fail(path, `canonical ${canonicals[0]} != ${loc}`);
  if (/noindex/i.test(robots)) fail(path, `robots "${robots}" on a sitemap page`);
  if (!title) fail(path, "missing title");
  else if (title.length > TITLE_MAX) warn(path, `title is ${title.length} chars (max ${TITLE_MAX}): "${title}"`);
  if (!description) fail(path, "missing description");
  else if (description.length > DESCRIPTION_MAX) warn(path, `description is ${description.length} chars (max ${DESCRIPTION_MAX})`);
  if (h1s.length !== 1) fail(path, `${h1s.length} H1 tags`);

  const mainStart = html.indexOf("<main");
  const footerStart = html.indexOf("<footer");
  for (const m of html.matchAll(/<a[^>]*href="(\/[^"#?]*)[^"]*"[^>]*>([\s\S]*?)<\/a>/g)) {
    const to = m[1].replace(/\/$/, "") || "/";
    if (/\.(png|jpe?g|svg|webp|ico|js|css|txt|xml|csv)$/.test(to)) continue;
    const at = m.index ?? 0;
    const area = at < mainStart ? "header" : footerStart > -1 && at > footerStart ? "footer" : "content";
    links.push({ from: path, to, anchor: strip(m[2]).slice(0, 80), area });
  }
  pages.push({ url: loc, path, status, title, description, canonical: canonicals[0] ?? "", robots, h1: h1s[0] ?? "", h1Count: h1s.length });
}

const dupes = (key: "title" | "description") => {
  const by = new Map<string, string[]>();
  for (const p of pages) by.set(p[key], [...(by.get(p[key]) ?? []), p.path]);
  for (const [v, ps] of by) if (v && ps.length > 1) fail(ps.join(", "), `duplicate ${key} "${v}"`);
};
dupes("title");
dupes("description");

// ---- every internal link target answers 200 directly (no redirect hop, no 404)
const sitemapPaths = new Set(pages.map((p) => p.path));
for (const to of new Set(links.map((l) => l.to))) {
  if (sitemapPaths.has(to)) continue;
  const { status } = await get(to);
  if (status !== 200) fail(to, `internal link target returns ${status} (linked from ${links.find((l) => l.to === to)?.from})`);
}

// ---- orphans
for (const p of pages) {
  const inbound = new Set(links.filter((l) => l.to === p.path && l.from !== p.path).map((l) => l.from));
  p.inboundPages = inbound.size;
  p.contextualInboundPages = new Set(links.filter((l) => l.to === p.path && l.from !== p.path && l.area === "content").map((l) => l.from)).size;
  if (p.path !== "/" && inbound.size === 0) fail(p.path, "orphan: no inbound internal links");
}

// ---- noindex rules: held consumer pages and utility pages are noindex and never in the sitemap
const held = CONSUMER_NOINDEX ? CONSUMER_PAGE_SLUGS.map((s) => `/${s}`) : [];
for (const path of [...held, ...NOINDEX_ROUTES]) {
  if (sitemapPaths.has(path)) fail(path, "noindex page is listed in the sitemap");
  const { status, html } = await get(path);
  if (status !== 200) continue;
  if (!/noindex/i.test(first(/<meta name="robots" content="([^"]*)"/, html))) fail(path, "should be noindex");
}
const heldLinks = links.filter((l) => held.includes(l.to));
for (const l of heldLinks) fail(l.from, `links to held page ${l.to}`);

// ---- sitemap = prerendered indexable routes (needs .next from the same build)
const manifestPath = ".next/prerender-manifest.json";
if (existsSync(manifestPath)) {
  const routes = Object.keys(JSON.parse(readFileSync(manifestPath, "utf8")).routes as Record<string, unknown>).filter(
    (r) => !/^\/(_|api\/)|\.(xml|txt|png|ico|webmanifest)$|^\/(manifest|robots)/.test(r) && !r.startsWith("/_")
  );
  const redirectSources = new Set((JSON.parse(readFileSync(".next/routes-manifest.json", "utf8")).redirects as { source: string }[]).map((r) => r.source));
  const expected = routes.filter((r) => !held.includes(r) && !NOINDEX_ROUTES.includes(r) && !redirectSources.has(r));
  for (const r of expected) if (!sitemapPaths.has(r)) fail(r, "indexable route missing from the sitemap");
  for (const p of sitemapPaths) if (!routes.includes(p)) fail(p, "sitemap URL has no prerendered route");
} else {
  warnings.push(`${manifestPath} not found - sitemap/route comparison skipped (run npm run build first)`);
}

if (outFile) writeFileSync(outFile, JSON.stringify({ base, checkedAt: new Date().toISOString(), pages, links, errors, warnings }, null, 2));
console.log(`Checked ${pages.length} sitemap URLs, ${links.length} internal links.`);
if (warnings.length) console.log(`\n${warnings.length} warning(s):\n- ${warnings.join("\n- ")}`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log("\nAll SEO checks passed.");
