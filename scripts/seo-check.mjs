/**
 * SEO regression check. Crawls every URL in /sitemap.xml on a running server and fails on:
 * non-200 status, missing/duplicate/wrong canonical, noindex, missing or duplicate title and
 * description, H1 count != 1, broken or redirecting internal links, duplicate sitemap entries,
 * and sitemap pages with no inbound link from another page (orphans).
 *
 *   npm run build && npm run start   (in another terminal)
 *   npm run seo:check -- http://localhost:3000 [--out report.json]
 */
import { writeFileSync } from "node:fs";

const ORIGIN = "https://www.indiab2bdata.com";
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const outIdx = process.argv.indexOf("--out");
const outFile = outIdx > -1 ? process.argv[outIdx + 1] : null;

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = (s) => decode(s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
const first = (re, html) => (html.match(re)?.[1] ?? "").trim();

const errors = [];
const fail = (url, msg) => errors.push(`${url}: ${msg}`);

const sitemapXml = await (await fetch(`${base}/sitemap.xml`)).text();
const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const pathOf = (u) => u.replace(ORIGIN, "") || "/";
const seen = new Set();
for (const loc of locs) {
  if (seen.has(loc)) fail(loc, "duplicate sitemap entry");
  seen.add(loc);
  if (!loc.startsWith(`${ORIGIN}/`) && loc !== ORIGIN) fail(loc, "sitemap URL not on canonical origin");
}

const pages = [];
const links = []; // { from, to, anchor }
for (const loc of locs) {
  const path = pathOf(loc);
  const res = await fetch(base + path, { redirect: "manual" });
  const html = res.status === 200 ? await res.text() : "";
  if (res.status !== 200) fail(path, `status ${res.status}`);

  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map((m) => m[1]);
  const robots = first(/<meta name="robots" content="([^"]*)"/, html);
  const title = decode(first(/<title>(.*?)<\/title>/s, html));
  const description = decode(first(/<meta name="description" content="([^"]*)"/, html));
  const h1s = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gs)].map((m) => strip(m[1]));

  if (canonicals.length !== 1) fail(path, `${canonicals.length} canonical tags`);
  else if (canonicals[0] !== loc) fail(path, `canonical ${canonicals[0]} != ${loc}`);
  if (/noindex/i.test(robots)) fail(path, `robots "${robots}"`);
  if (!title) fail(path, "missing title");
  if (!description) fail(path, "missing description");
  if (h1s.length !== 1) fail(path, `${h1s.length} H1 tags`);

  for (const m of html.matchAll(/<a[^>]*href="(\/[^"#?]*)[^"]*"[^>]*>(.*?)<\/a>/gs)) {
    const to = m[1].replace(/\/$/, "") || "/";
    if (/\.(png|jpe?g|svg|webp|ico|js|css|txt|xml)$/.test(to)) continue;
    const inFooter = html.indexOf("<footer") > -1 && m.index > html.indexOf("<footer");
    const inHeader = m.index < html.indexOf("<main");
    links.push({ from: path, to, anchor: strip(m[2]).slice(0, 80), area: inHeader ? "header" : inFooter ? "footer" : "content" });
  }
  pages.push({ url: loc, path, status: res.status, title, titleLength: title.length, description, canonical: canonicals[0] ?? "", robots, h1: h1s[0] ?? "", h1Count: h1s.length });
}

const dupes = (key) => {
  const by = new Map();
  for (const p of pages) by.set(p[key], [...(by.get(p[key]) ?? []), p.path]);
  for (const [v, ps] of by) if (v && ps.length > 1) fail(ps.join(", "), `duplicate ${key} "${v}"`);
};
dupes("title");
dupes("description");

// Every internal link target must answer 200 directly (no redirect hop, no 404).
const sitemapPaths = new Set(pages.map((p) => p.path));
for (const to of new Set(links.map((l) => l.to))) {
  if (sitemapPaths.has(to)) continue;
  const res = await fetch(base + to, { redirect: "manual" });
  if (res.status !== 200) fail(to, `internal link target returns ${res.status} (linked from ${links.find((l) => l.to === to).from})`);
}

for (const p of pages) {
  const inbound = new Set(links.filter((l) => l.to === p.path && l.from !== p.path).map((l) => l.from));
  const contextual = new Set(links.filter((l) => l.to === p.path && l.from !== p.path && l.area === "content").map((l) => l.from));
  p.inboundPages = inbound.size;
  p.contextualInboundPages = contextual.size;
  if (p.path !== "/" && inbound.size === 0) fail(p.path, "orphan: no inbound internal links");
}

if (outFile) writeFileSync(outFile, JSON.stringify({ base, checkedAt: new Date().toISOString(), pages, links, errors }, null, 2));
console.log(`Checked ${pages.length} sitemap URLs, ${links.length} internal links.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log("All SEO checks passed.");
