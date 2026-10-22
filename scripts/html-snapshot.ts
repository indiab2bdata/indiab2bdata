/**
 * Snapshot every prerendered route from the last `next build`, then diff two snapshots.
 *
 *   node scripts/html-snapshot.ts save .snapshots/before
 *   node scripts/html-snapshot.ts diff .snapshots/before .snapshots/after
 *
 * Captures each page's HTML, every route handler body (sitemaps, robots, llms.txt, manifest) and the
 * redirect table. Build-volatile tokens (asset hashes, module ids, build id) are normalised so only
 * real output differences show up.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";

const NEXT = ".next";
const APP = join(NEXT, "server", "app");

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function normalise(text: string, buildId: string) {
  return text
    .split(buildId).join("BUILD_ID")
    .replace(/\/_next\/static\/(chunks|media|css)\/[^"'\\)\s]+/g, "/_next/static/$1/ASSET")
    .replace(/\/_next\/static\/[A-Za-z0-9_-]{10,}\//g, "/_next/static/BUILD/")
    .replace(/\bI\[\d+,/g, "I[MODULE,")
    .replace(/\?v=\d+/g, "")
    // How many chunk files a client component needs depends on how modules are split, not on page content.
    .replace(/(\\*"\/_next\/static\/chunks\/ASSET\\*",?)+/g, "CHUNKS")
    .replace(/(<script src="\/_next\/static\/chunks\/ASSET" async=""><\/script>)+/g, "<script CHUNKS></script>")
    .replace(/(<link rel="preload" as="script" fetchPriority="low" href="\/_next\/static\/chunks\/ASSET"\/>)+/g, "<link CHUNKS/>");
}

/** Apply the current normalisation to an already-saved snapshot (after normalise() gains a rule). */
function renormalise(dir: string) {
  for (const f of walk(dir)) writeFileSync(f, normalise(readFileSync(f, "utf8"), "BUILD_ID"));
  console.log(`Re-normalised ${dir}`);
}

function save(out: string) {
  const buildId = readFileSync(join(NEXT, "BUILD_ID"), "utf8").trim();
  if (existsSync(out)) rmSync(out, { recursive: true });
  let count = 0;
  for (const file of walk(APP)) {
    const isPage = file.endsWith(".html");
    const isBody = file.endsWith(".body") && !/\.(png|ico)\.body$/.test(file);
    if (!isPage && !isBody) continue;
    const target = join(out, relative(APP, file));
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, normalise(readFileSync(file, "utf8"), buildId));
    count++;
  }
  const routes = JSON.parse(readFileSync(join(NEXT, "routes-manifest.json"), "utf8"));
  const redirects = routes.redirects.map((r: { source: string; destination: string; statusCode: number }) => `${r.statusCode} ${r.source} -> ${r.destination}`);
  writeFileSync(join(out, "_redirects.txt"), redirects.join("\n") + "\n");
  // Compiled CSS, sorted by content so chunk naming/order can't cause noise. Catches Tailwind class-scan changes.
  const css = walk(join(NEXT, "static"))
    .filter((f) => f.endsWith(".css"))
    .map((f) => normalise(readFileSync(f, "utf8"), buildId))
    .sort();
  writeFileSync(join(out, "_styles.css"), css.join("\n/* --- */\n"));
  console.log(`Saved ${count} routes + ${redirects.length} redirects + ${css.length} stylesheets to ${out}`);
}

function diff(a: string, b: string) {
  const files = (dir: string) => new Set(walk(dir).map((f) => relative(dir, f)));
  const fa = files(a);
  const fb = files(b);
  let problems = 0;
  for (const f of fa) {
    if (!fb.has(f)) {
      problems++;
      console.log(`MISSING  ${f}`);
    }
  }
  for (const f of fb) {
    if (!fa.has(f)) {
      problems++;
      console.log(`ADDED    ${f}`);
    }
  }
  for (const f of fa) {
    if (!fb.has(f)) continue;
    const x = readFileSync(join(a, f), "utf8");
    const y = readFileSync(join(b, f), "utf8");
    if (x === y) continue;
    if (x.replace(/\s+/g, "") === y.replace(/\s+/g, "")) {
      console.log(`WHITESPACE ${f}`);
      continue;
    }
    problems++;
    let i = 0;
    while (i < x.length && x[i] === y[i]) i++;
    console.log(`CHANGED  ${f} @${i}\n  before: ${JSON.stringify(x.slice(Math.max(0, i - 80), i + 120))}\n  after:  ${JSON.stringify(y.slice(Math.max(0, i - 80), i + 120))}`);
  }
  console.log(problems ? `${problems} file(s) differ` : `Identical (${fa.size} files)`);
  process.exitCode = problems ? 1 : 0;
}

const [cmd, a, b] = process.argv.slice(2);
if (cmd === "save" && a) save(a);
else if (cmd === "diff" && a && b) diff(a, b);
else if (cmd === "renormalise" && a) renormalise(a);
else {
  console.error("Usage: node scripts/html-snapshot.ts save <dir> | diff <before> <after> | renormalise <dir>");
  process.exitCode = 2;
}
