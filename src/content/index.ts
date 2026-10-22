import { retiredKeywordRedirects } from "@/config/redirects";
import { isHeldFromIndex } from "@/config/indexing";
import { categories } from "@/content/categories";
import { states } from "@/content/states";
import { cities } from "@/content/cities";
import { date, keywordPageSchema, landingPageSchema, validate } from "@/schemas/landing.schema";
import type { CategoryContent, CityContent, KeywordPage, LandingPage, StateContent } from "@/types/landing";

/**
 * Content registry: the one place app/ routes, sitemaps and listings read page content from.
 * Page files are registered in content/{categories,states,cities}/index.ts, in display order.
 *
 * Every file is validated against src/schemas/landing.schema.ts when this module loads, so `next build`
 * fails on missing fields, wrong shapes or a {{PLACEHOLDER}} in published copy.
 *
 * Category intents (they overlap in topic, so each is pinned to one buyer intent):
 *   manufacturing-companies (company-level) vs manufacturer (products/plants)
 *   importers (import buyers) vs importers-exporters (IEC trade houses) vs apparel exporters (one vertical)
 *   jewellers (retail showrooms) vs gems-jewellery-shops (wholesale & gem trade)
 *   it-companies (software firms) vs computer-it-telecom (infra/channel providers) vs it-professionals (people)
 *   ceo-cfo (C-suite by function) vs md-chairman-cs (board & statutory) vs chief-managers (bank/PSU grade) vs gm/senior managers (operations)
 *   company-proprietors (sole-proprietor owners) vs b2b-b2c-companies (by customer model)
 */

function unique(kind: string, keys: string[]) {
  const seen = new Set<string>();
  for (const k of keys) {
    if (seen.has(k)) throw new Error(`Duplicate ${kind} "${k}" registered twice`);
    seen.add(k);
  }
}

for (const c of categories) {
  const label = `content/categories/${c.keyword.slug}.ts`;
  validate(keywordPageSchema, c.keyword, label);
  validate(date, c.updated, `${label} (updated)`);
  if ((c.template === "landing") !== Boolean(c.landing)) throw new Error(`${label}: template "${c.template}" does not match whether \`landing\` is set`);
  if (c.landing) {
    validate(landingPageSchema, c.landing, label);
    if (c.landing.path !== `/${c.keyword.slug}`) throw new Error(`${label}: landing.path must be /${c.keyword.slug}`);
  }
}
for (const s of states) {
  const label = `content/states/${s.slug}.ts`;
  validate(date, s.updated, `${label} (updated)`);
  validate(landingPageSchema, s.landing, label);
}
for (const c of cities) {
  const label = `content/cities/${c.stateSlug}-${c.slug}.ts`;
  validate(date, c.updated, `${label} (updated)`);
  validate(landingPageSchema, c.landing, label);
  if (!states.some((s) => s.slug === c.stateSlug)) throw new Error(`${label}: no state page for "${c.stateSlug}"`);
}
unique("category slug", categories.map((c) => c.keyword.slug));
unique("state slug", states.map((s) => s.slug));
unique("city path", cities.map(cityPath));

/* ---------- Categories ---------- */

/** Every category file, including retired slugs that now 301 (see config/redirects.ts). */
export function getAllCategories(): CategoryContent[] {
  return categories;
}

/** Categories still served. */
export const liveCategories = categories.filter((c) => !(c.keyword.slug in retiredKeywordRedirects));

export function getCategory(slug: string): CategoryContent | undefined {
  return liveCategories.find((c) => c.keyword.slug === slug);
}

/** New-template page for a slug, if it has been migrated. */
export function getCategoryLanding(slug: string): LandingPage | undefined {
  return categories.find((c) => c.keyword.slug === slug)?.landing;
}

/** Keyword-template data for every live category (also used for listings: homepage, llms.txt, related links). */
export const liveKeywordPages: KeywordPage[] = liveCategories.map((c) => c.keyword);

export function getKeywordPage(slug: string): KeywordPage | undefined {
  return getCategory(slug)?.keyword;
}

/** Live, indexable keyword pages for a list of slugs (unknown or held slugs are dropped). */
export function getKeywordPagesBySlug(slugs: string[]): KeywordPage[] {
  return slugs
    .map((slug) => getKeywordPage(slug))
    .filter((page): page is KeywordPage => Boolean(page) && !isHeldFromIndex(page!.slug));
}

/* ---------- States & cities ---------- */

export function getAllStates(): StateContent[] {
  return states;
}

export function getState(slug: string): StateContent | undefined {
  return states.find((s) => s.slug === slug);
}

export function getAllCities(): CityContent[] {
  return cities;
}

export function getCity(stateSlug: string, slug: string): CityContent | undefined {
  return cities.find((c) => c.stateSlug === stateSlug && c.slug === slug);
}

export function cityPath(city: Pick<CityContent, "stateSlug" | "slug">) {
  return `/database/${city.stateSlug}/${city.slug}`;
}
