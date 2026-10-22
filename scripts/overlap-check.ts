/**
 * Duplicate-wording check on the built site (run `npm run build` first).
 *
 *   npm run overlap:check                      compare with the baseline, fail on regressions
 *   npm run overlap:check -- --update-baseline accept the current scores
 *
 * For every indexable page, the visible text inside <main> is split into five-word sequences
 * ("shingles"). A page's unique-wording score is the share of its shingles that appear on no other
 * page. Shared template copy lowers every page's score a little; copy pasted between pages lowers it a lot.
 *
 * The check fails when a page's score drops below its value in scripts/baselines/overlap.json (minus a
 * 0.5-point tolerance), so new pages and edits can only keep or raise uniqueness.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";

const APP = ".next/server/app";
const BASELINE = "scripts/baselines/overlap.json";
const TOLERANCE = 0.005;
const update = process.argv.includes("--update-baseline");

if (!existsSync(APP)) {
  console.error("No build found - run `npm run build` first.");
  process.exit(1);
}

const walk = (d: string): string[] => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? walk(join(d, n)) : [join(d, n)]));
const routeOf = (file: string) => "/" + relative(APP, file).replace(/\\/g, "/").replace(/\.html$/, "").replace(/^index$/, "");

/** Lower-cased words of the visible text inside <main>. */
function mainText(html: string): string[] {
  const start = html.indexOf("<main");
  const end = html.indexOf("</main>");
  if (start < 0 || end < 0) return [];
  return html
    .slice(start, end)
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

const pages = new Map<string, Set<string>>();
for (const file of walk(APP).filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue;
  const route = routeOf(file);
  if (route.startsWith("/_")) continue;
  const words = mainText(html);
  const shingles = new Set<string>();
  for (let i = 0; i + 5 <= words.length; i++) shingles.add(words.slice(i, i + 5).join(" "));
  if (shingles.size) pages.set(route, shingles);
}

const seenOn = new Map<string, number>();
for (const shingles of pages.values()) for (const s of shingles) seenOn.set(s, (seenOn.get(s) ?? 0) + 1);

const scores: Record<string, number> = {};
for (const [route, shingles] of pages) {
  let unique = 0;
  for (const s of shingles) if (seenOn.get(s) === 1) unique++;
  scores[route] = Math.round((unique / shingles.size) * 1000) / 1000;
}

const sorted = Object.entries(scores).sort((a, b) => a[1] - b[1]);
console.log(`Scored ${sorted.length} indexable pages. Lowest unique-wording share:`);
for (const [route, score] of sorted.slice(0, 8)) console.log(`  ${(score * 100).toFixed(1).padStart(5)}%  ${route}`);

if (update || !existsSync(BASELINE)) {
  mkdirSync(dirname(BASELINE), { recursive: true });
  writeFileSync(BASELINE, JSON.stringify(Object.fromEntries(Object.entries(scores).sort()), null, 2) + "\n");
  console.log(`\nBaseline written to ${BASELINE}.`);
  process.exit(0);
}

const baseline: Record<string, number> = JSON.parse(readFileSync(BASELINE, "utf8"));
const regressions = Object.entries(scores).filter(([route, score]) => route in baseline && score < baseline[route] - TOLERANCE);
const added = Object.keys(scores).filter((r) => !(r in baseline));
if (added.length) console.log(`\nNew pages (no baseline yet - run with --update-baseline after review): ${added.join(", ")}`);
if (regressions.length) {
  console.error(`\n${regressions.length} page(s) lost unique wording:`);
  for (const [route, score] of regressions) console.error(`  ${route}: ${(baseline[route] * 100).toFixed(1)}% -> ${(score * 100).toFixed(1)}%`);
  process.exit(1);
}
console.log("\nNo page lost unique wording.");
