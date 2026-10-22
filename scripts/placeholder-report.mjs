// Lists every {{PLACEHOLDER}} still waiting for a real value (record counts, prices, compliance details).
// Usage: npm run content:placeholders
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["src/lib/landing", "src/lib/site-config.ts"];
const files = roots.flatMap(function walk(p) {
  return statSync(p).isDirectory() ? readdirSync(p).flatMap((f) => walk(join(p, f))) : [p];
});
const isComment = (line) => /^\s*(\/\/|\*|\/\*)/.test(line);

let total = 0;
for (const file of files) {
  const counts = {};
  const code = readFileSync(file, "utf8").split("\n").filter((l) => !isComment(l)).join("\n");
  for (const m of code.matchAll(/\{\{([A-Z_]+)\}\}/g)) counts[m[1]] = (counts[m[1]] ?? 0) + 1;
  const entries = Object.entries(counts);
  if (!entries.length) continue;
  console.log(file);
  for (const [name, n] of entries) console.log(`  {{${name}}} x${n}`), (total += n);
}
console.log(total ? `\n${total} placeholders to fill.` : "No placeholders left.");
