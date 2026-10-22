/**
 * Lighthouse on three baseline pages (one per template), always with the same settings, so runs are
 * comparable before and after a change.
 *
 *   npm run build && npm run start          (in another terminal)
 *   npm run lh -- [baseUrl] [--desktop]
 *
 * Reports are written to .lighthouse/<page>.json (git-ignored) and a score table is printed.
 * Uses `npx lighthouse` (downloaded on first run) and a local Chrome / Chromium.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";

const args = process.argv.slice(2);
const base = (args.find((a) => /^https?:\/\//.test(a)) ?? "http://localhost:3000").replace(/\/$/, "");
const desktop = args.includes("--desktop");
const OUT = ".lighthouse";

/** Homepage, a landing-template category page and a city page. */
const PAGES = [
  { name: "home", path: "/" },
  { name: "category", path: "/government-employees-database-india" },
  { name: "city", path: "/database/maharashtra/mumbai" },
];

const SETTINGS = [
  "--only-categories=performance,accessibility,best-practices,seo",
  "--output=json",
  "--quiet",
  "--chrome-flags=--headless=new --no-sandbox",
  "--throttling-method=simulate",
  ...(desktop ? ["--preset=desktop"] : ["--form-factor=mobile"]),
];

mkdirSync(OUT, { recursive: true });
const rows: string[] = [];
for (const page of PAGES) {
  const file = `${OUT}/${page.name}${desktop ? "-desktop" : ""}.json`;
  execFileSync("npx", ["--yes", "lighthouse@12", base + page.path, ...SETTINGS, `--output-path=${file}`], { stdio: "inherit", shell: process.platform === "win32" });
  const report = JSON.parse(readFileSync(file, "utf8"));
  const score = (id: string) => Math.round((report.categories[id]?.score ?? 0) * 100);
  const lcp = report.audits["largest-contentful-paint"]?.displayValue ?? "-";
  const cls = report.audits["cumulative-layout-shift"]?.displayValue ?? "-";
  rows.push(`${page.name.padEnd(9)} perf ${score("performance")}  a11y ${score("accessibility")}  bp ${score("best-practices")}  seo ${score("seo")}  LCP ${lcp}  CLS ${cls}`);
}
console.log(`\nLighthouse (${desktop ? "desktop" : "mobile"}, ${base}):\n${rows.join("\n")}`);
