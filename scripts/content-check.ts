/**
 * Content checks that need no running server.
 *
 *   npm run content:check                    report + fail on new problems
 *   npm run content:check -- --update-baseline   accept the current set of known problems
 *
 * 1. Schema: importing the content registry validates every file with zod (src/schemas/landing.schema.ts).
 * 2. Placeholders: lists every {{PLACEHOLDER}} still waiting for a real figure (info only).
 * 3. Claims: published copy must not make a claim whose switch in config/claims.ts is off.
 * 4. Duplicate FAQ answers: no rendered answer may be reused verbatim on another page.
 * 5. Related links: at most 6 per page.
 * 6. Link targets: every content link must point to a live route.
 *
 * Problems that already exist are recorded in scripts/baselines/content-check.json; only new ones fail
 * (a ratchet). Fix a known problem and the next --update-baseline removes it for good.
 * Claims are also checked in the built HTML when .next exists, which covers the JSX legal pages.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { CLAIMS } from "@/config/claims";
import { indexableLinks } from "@/config/indexing";
import { FOOTER_CORE_DATABASES, FOOTER_QUICK_LINKS, HEADER_LINKS, PRODUCT_GROUPS } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cityPath, getAllCategories, getAllCities, getAllStates, liveCategories } from "@/content";
import { ABOUT_FAQS, DATABASE_HUB_FAQS, DEFAULT_FAQS, GUIDES_FAQS } from "@/content/pages/faqs";
import { faq as faqSchema } from "@/schemas/landing.schema";
import type { Faq, LandingPage } from "@/types/landing";

const BASELINE = "scripts/baselines/content-check.json";
const update = process.argv.includes("--update-baseline");
const problems: { key: string; message: string }[] = [];
const report = (key: string, message: string) => problems.push({ key, message });

/* ---------- every string inside a value, with its path ---------- */
function* strings(value: unknown, path: string): Generator<[string, string]> {
  if (typeof value === "string") yield [path, value];
  else if (Array.isArray(value)) for (const [i, v] of value.entries()) yield* strings(v, `${path}[${i}]`);
  else if (value && typeof value === "object" && !("$$typeof" in value)) for (const [k, v] of Object.entries(value)) if (typeof v !== "function") yield* strings(v, `${path}.${k}`);
}

/* ---------- what is actually rendered ---------- */
type Rendered = { path: string; file: string; data: unknown; faqs: Faq[]; related: { href: string }[]; links: { href: string }[] };
const rendered: Rendered[] = [];
for (const c of liveCategories) {
  const file = `content/categories/${c.keyword.slug}.ts`;
  if (c.landing) rendered.push(fromLanding(c.landing, file));
  else
    rendered.push({
      path: `/${c.keyword.slug}`,
      file,
      data: c.keyword,
      faqs: c.keyword.faqs,
      related: (c.keyword.related ?? []).map((s) => ({ href: `/${s}` })),
      links: [...(c.keyword.contentLinks ?? []), ...c.keyword.faqs.flatMap((f) => (f.link ? [f.link] : []))],
    });
}
for (const s of getAllStates()) rendered.push(fromLanding(s.landing, `content/states/${s.slug}.ts`));
for (const c of getAllCities()) rendered.push(fromLanding(c.landing, `content/cities/${c.stateSlug}-${c.slug}.ts`));
const pageFaqs: [string, string, Faq[]][] = [
  ["/", "content/pages/faqs.ts (DEFAULT_FAQS)", DEFAULT_FAQS],
  ["/contact", "content/pages/faqs.ts (DEFAULT_FAQS)", DEFAULT_FAQS],
  ["/about", "content/pages/faqs.ts (ABOUT_FAQS)", ABOUT_FAQS],
  ["/blog", "content/pages/faqs.ts (GUIDES_FAQS)", GUIDES_FAQS],
  ["/database", "content/pages/faqs.ts (DATABASE_HUB_FAQS)", DATABASE_HUB_FAQS],
];
for (const [path, file, faqs] of pageFaqs) rendered.push({ path, file, data: faqs, faqs, related: [], links: faqs.flatMap((f) => (f.link ? [f.link] : [])) });

function fromLanding(p: LandingPage, file: string): Rendered {
  return {
    path: p.path,
    file,
    data: p,
    faqs: p.buyerFaqs,
    related: p.relatedLinks,
    links: [...(p.locationLinks?.links ?? []), ...p.breadcrumbs, ...p.buyerFaqs.flatMap((f) => (f.link ? [f.link] : []))],
  };
}

/* 1. page-level FAQ sets are not in the registry, so validate them here */
for (const [, file, faqs] of pageFaqs) for (const f of faqs) {
  const r = faqSchema.safeParse(f);
  if (!r.success) report(`schema:${file}:${f.question}`, `${file}: invalid FAQ "${f.question}"`);
}

/* 2. placeholders (info) */
const placeholders = new Map<string, number>();
for (const r of rendered) for (const [, v] of strings(r.data, "")) for (const m of v.matchAll(/\{\{([A-Z_]+)\}\}/g)) placeholders.set(m[1], (placeholders.get(m[1]) ?? 0) + 1);
for (const [, v] of strings(siteConfig.compliance, "compliance")) for (const m of v.matchAll(/\{\{([A-Z_]+)\}\}/g)) placeholders.set(m[1], (placeholders.get(m[1]) ?? 0) + 1);

/* 3. claims */
const CLAIM_RULES: { on: boolean; name: string; re: RegExp }[] = [
  { on: CLAIMS.dndScrubbing, name: "dndScrubbing", re: /\bDND[- ](scrub|check|filter|verif|clean)\w*|scrubbed against (the )?(DND|NCPR)|DND-free|NDNC[- ]?(scrub|check|filter)\w*/i },
  { on: CLAIMS.suppressionList, name: "suppressionList", re: /suppression list/i },
  { on: Boolean(CLAIMS.deliveryTime), name: "deliveryTime", re: /\b(delivered|delivery|shared|sent|ready)\b[^.]{0,40}\bwithin \d+\s*(?:[-–]\s*\d+\s*)?(working )?(hours?|hrs)\b|same[- ]day delivery|delivered in \d+/i },
  { on: CLAIMS.showRefreshDates, name: "showRefreshDates", re: /\brefreshed (monthly|weekly|daily|every)|\bupdated (monthly|weekly|daily|every \w+)|\bmonthly refresh/i },
];
const claimHit = (text: string) => CLAIM_RULES.filter((r) => !r.on && r.re.test(text)).map((r) => r.name);
for (const r of rendered)
  for (const [where, v] of strings(r.data, "")) for (const name of claimHit(v)) report(`claim:${name}:${r.path}:${where}`, `${r.file}${where}: claims "${name}" while the switch is off: "${v.slice(0, 110)}"`);

if (existsSync(".next/server/app")) {
  const walk = (d: string): string[] => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? walk(join(d, n)) : [join(d, n)]));
  for (const f of walk(".next/server/app").filter((f) => f.endsWith(".html"))) {
    const html = readFileSync(f, "utf8");
    const main = html.slice(Math.max(0, html.indexOf("<main")), html.indexOf("</main>") > -1 ? html.indexOf("</main>") : undefined);
    const text = main.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ");
    const route = "/" + f.replace(/\\/g, "/").replace(/^\.next\/server\/app\/?/, "").replace(/\.html$/, "").replace(/^index$/, "");
    for (const rule of CLAIM_RULES) {
      if (rule.on) continue;
      for (const m of text.matchAll(new RegExp(rule.re.source, "gi"))) {
        const at = m.index ?? 0;
        report(`html-claim:${rule.name}:${route}:${m[0].toLowerCase()}`, `${route} (built HTML): claims "${rule.name}": "...${text.slice(Math.max(0, at - 50), at + 60).trim()}..."`);
      }
    }
  }
}

/* 4. duplicate FAQ answers across rendered pages (/ and /contact share one set by design) */
const byAnswer = new Map<string, string[]>();
for (const r of rendered) for (const f of r.faqs) byAnswer.set(f.answer, [...(byAnswer.get(f.answer) ?? []), r.path]);
for (const [answer, paths] of byAnswer) {
  const unique = [...new Set(paths)].filter((p) => p !== "/contact");
  if (unique.length > 1) report(`dup-faq:${answer.slice(0, 60)}`, `FAQ answer used on ${unique.length} pages (${unique.slice(0, 4).join(", ")}${unique.length > 4 ? ", ..." : ""}): "${answer.slice(0, 90)}"`);
}

/* 5. related links */
for (const r of rendered) {
  const n = indexableLinks(r.related).length;
  if (n > 6) report(`related:${r.path}`, `${r.file}: ${n} related links (max 6)`);
}

/* 6. link targets */
const routes = new Set<string>([
  "/", "/about", "/contact", "/blog", "/database", "/data-sourcing-compliance", "/privacy-policy", "/terms-and-conditions", "/image-credits",
  ...liveCategories.map((c) => `/${c.keyword.slug}`),
  ...getAllStates().map((s) => `/database/${s.slug}`),
  ...getAllCities().map(cityPath),
]);
const targetOk = (href: string) => /^(https?:|mailto:|tel:)/.test(href) || routes.has(href.replace(/[#?].*$/, "") || "/");
const allLinks: [string, string][] = [
  ...rendered.flatMap((r) => [...r.related, ...r.links].map((l): [string, string] => [r.file, l.href])),
  ...[...HEADER_LINKS, ...FOOTER_QUICK_LINKS, ...FOOTER_CORE_DATABASES, ...PRODUCT_GROUPS.flatMap((g) => g.links)].map((l): [string, string] => ["config/navigation.ts", l.href]),
];
for (const [file, href] of allLinks) if (!targetOk(href)) report(`link:${file}:${href}`, `${file}: link to ${href} - no such live page`);

/* ---------- ratchet against the baseline ---------- */
const known = new Set<string>(existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, "utf8")) : []);
const current = new Map(problems.map((p) => [p.key, p.message]));
const fresh = [...current].filter(([k]) => !known.has(k));
const fixed = [...known].filter((k) => !current.has(k));

console.log(`Validated ${getAllCategories().length} category files (${liveCategories.length} live), ${getAllStates().length} states, ${getAllCities().length} cities (schema OK).`);
console.log(`Placeholders still to fill: ${[...placeholders].map(([k, n]) => `{{${k}}} x${n}`).join(", ") || "none"}`);
console.log(`Known problems (baseline): ${known.size - fixed.length}, fixed since baseline: ${fixed.length}, new: ${fresh.length}`);

if (update) {
  mkdirSync(dirname(BASELINE), { recursive: true });
  writeFileSync(BASELINE, JSON.stringify([...current.keys()].sort(), null, 2) + "\n");
  console.log(`Baseline written: ${current.size} known problem(s) in ${BASELINE}`);
} else if (fresh.length) {
  console.error(`\n${fresh.length} new problem(s):\n- ${fresh.map(([, m]) => m).join("\n- ")}`);
  process.exit(1);
} else {
  if (fixed.length) console.log(`(${fixed.length} known problem(s) are fixed - run with --update-baseline to lock that in)`);
  console.log("\nAll content checks passed.");
}
