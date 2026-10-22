import { isHeldFromIndex } from "@/config/indexing";
import { siteConfig } from "@/config/site";
import { cityPath, getAllCities, getAllStates, liveCategories } from "@/content";
import { ABOUT } from "@/content/pages/about";
import { BLOG } from "@/content/pages/blog";
import { CONTACT } from "@/content/pages/contact";
import { COMPLIANCE_PAGE } from "@/content/pages/data-sourcing-compliance";
import { DATABASE_HUB } from "@/content/pages/database";
import { HOME } from "@/content/pages/home";
import { PRIVACY_PAGE } from "@/content/pages/privacy-policy";
import { TERMS_PAGE } from "@/content/pages/terms-and-conditions";

type Entry = { url: string; lastModified: string };

const entry = (path: string, lastModified: string): Entry => ({ url: `${siteConfig.url}${path}`, lastModified });
/** A one-off page: its path and lastmod come from its content file's `meta`. */
const page = (meta: { path: string; updated: string }) => entry(meta.path === "/" ? "" : meta.path, meta.updated);

/**
 * Sitemap groups, each served as its own file (see app/sitemap-*.xml/route.ts) and listed in the
 * /sitemap.xml index. Every <lastmod> comes from the page's content file (`updated`); pages held from
 * indexing (config/indexing.ts) are left out. priority & changefreq are omitted on purpose (Google ignores them).
 */
export const SITEMAPS = {
  /** Homepage, the /database hub and every category page. */
  core: (): Entry[] => [
    page(HOME.meta),
    page(DATABASE_HUB.meta),
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
  guides: (): Entry[] => [BLOG, ABOUT, CONTACT, COMPLIANCE_PAGE, PRIVACY_PAGE, TERMS_PAGE].map((p) => page(p.meta)),
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

