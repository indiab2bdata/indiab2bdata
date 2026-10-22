// Node module hooks used by scripts/lib/register.mjs: resolve the "@/..." alias to src/ and add the
// missing .ts / .tsx / index.ts extension, so check scripts can import content modules directly.
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const SRC = pathToFileURL(fileURLToPath(new URL("../../src/", import.meta.url))).href;

export async function resolve(specifier, context, next) {
  const spec = specifier.startsWith("@/") ? SRC + specifier.slice(2) : specifier;
  if ((spec.startsWith("file:") || spec.startsWith(".")) && !/\.[cm]?[jt]sx?$|\.json$/.test(spec)) {
    const base = new URL(spec, context.parentURL).href;
    for (const ext of [".ts", ".tsx", "/index.ts"]) {
      if (existsSync(fileURLToPath(base + ext))) return next(base + ext, context);
    }
  }
  return next(spec, context);
}
