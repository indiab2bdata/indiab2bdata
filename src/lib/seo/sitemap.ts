import { isHeldFromIndex } from "@/config/indexing";
import { siteConfig } from "@/config/site";
import { cityPath, getAllCities, getAllStates, liveCategories } from "@/content";

/**
 * Date each non-category page's main content last changed (category, state and city pages
 * carry their own `updated` date in src/content). Bump the matching entry when you edit that
 * page's copy - not for header/footer/styling changes. priority & changefreq are omitted
 * on purpose (Google ignores them).
 */
const CONTENT_UPDATED = {
  "": "2026-10-07",
  "/about": "2026-09-30",
  "/privacy-policy": "2026-09-24",
  "/terms-and-conditions": "2026-09-24",
  "/database": "2026-10-22",
  "/blog": "2026-10-07",
  "/contact": "2026-09-30",
  "/data-sourcing-compliance": "2026-10-22",
} as const;

type Entry = { url: string; lastModified: string };

const entry = (path: string, lastModified: string): Entry => ({ url: `${siteConfig.url}${path}`, lastModified });

/**
 * Sitemap groups, each served as its own file (see app/sitemap-*.xml/route.ts) and listed in the
 * /sitemap.xml index. Pages held from indexing (lib/indexing.ts) are left out.
 */
export const SITEMAPS = {
  /** Homepage, the /database hub and every category page. */
  core: (): Entry[] => [
    entry("", CONTENT_UPDATED[""]),
    entry("/database", CONTENT_UPDATED["/database"]),
    ...liveCategories
      .filter((c) => !isHeldFromIndex(c.keyword.slug))
      .map((c) => entry(`/${c.keyword.slug}`, c.updated)),
  ],
  /** State and city databases. */
  states: (): Entry[] => [
    ...getAllStates().map((state) => entry(`/database/${state.slug}`, state.updated)),
    ...getAllCities().map((city) => entry(cityPath(city), city.updated)),
  ],
  /** Blog, company, trust and legal pages. */
  guides: (): Entry[] =>
    (["/blog", "/about", "/contact", "/data-sourcing-compliance", "/privacy-policy", "/terms-and-conditions"] as const).map((route) =>
      entry(route, CONTENT_UPDATED[route])
    ),
};

export type SitemapName = keyof typeof SITEMAPS;

const xml = (body: string) =>
  new Response(`<?xml version="1.0" encoding="UTF-8"?>\n${body}\n`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });

export function sitemapResponse(name: SitemapName) {
  const urls = SITEMAPS[name]()
    .map((e) => `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${e.lastModified}</lastmod>\n  </url>`)
    .join("\n");
  return xml(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
}

/** The index's lastmod for each file is the newest lastmod inside it. */
export function sitemapIndexResponse() {
  const items = (Object.keys(SITEMAPS) as SitemapName[])
    .map((name) => {
      const newest = SITEMAPS[name]().reduce((max, e) => (e.lastModified > max ? e.lastModified : max), "");
      return `  <sitemap>\n    <loc>${siteConfig.url}/sitemap-${name}.xml</loc>\n    <lastmod>${newest}</lastmod>\n  </sitemap>`;
    })
    .join("\n");
  return xml(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>`);
}

