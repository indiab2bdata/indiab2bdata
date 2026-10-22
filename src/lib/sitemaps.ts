import { isHeldFromIndex } from "@/lib/indexing";
import { siteConfig } from "@/lib/site-config";
import { liveKeywordPages } from "@/lib/keyword-pages";
import { databaseStates } from "@/lib/database-pages";
import { cities, cityPath } from "@/components/city-pages/city-data.mjs";

/**
 * Date each page's main content last changed. Bump the matching entry when you edit that
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
  keywordPages: "2026-10-16",
  statePages: "2026-10-22",
  cityPages: "2026-10-22",
} as const;

const KEYWORD_CONTENT_UPDATED: Record<string, string> = {
  "manufacturing-companies-database-india": "2026-10-23",
  "importers-database-india": "2026-10-23",
  "importers-exporters-database-india": "2026-10-23",
  "apparel-garments-exporters-database-india": "2026-10-23",
  "jewellers-database-india": "2026-10-23",
  "gems-jewellery-shops-database-india": "2026-10-23",
  "it-companies-database-india": "2026-10-23",
  "computer-it-telecom-services-database-india": "2026-10-23",
  "it-professionals-database-india": "2026-10-23",
  "ceo-cfo-cmo-it-heads-database-india": "2026-10-23",
  "company-md-chairman-secretary-database-india": "2026-10-23",
  "chief-managers-database-india": "2026-10-23",
  "general-senior-managers-database-india": "2026-10-23",
  "company-proprietors-database-india": "2026-10-23",
  "b2b-b2c-companies-database": "2026-10-23",
  "b2b-database-india": "2026-10-22",
  "company-database-india": "2026-10-22",
  "corporate-database-india": "2026-10-22",
  "mca-company-database-india": "2026-10-22",
  "gst-database-india": "2026-10-22",
  "b2b-leads-database-india": "2026-10-22",
  "industry-wise-company-database-india": "2026-10-22",
  "newly-registered-companies-india": "2026-10-22",
  "manufacturer-database-india": "2026-10-22",
  "metals-minerals-industries-database-india": "2026-10-20",
  "medical-representatives-database-india": "2026-10-19",
  "chemical-pharma-companies-database-india": "2026-10-19",
  "business-development-sales-professionals-database-india": "2026-10-19",
  "media-planning-companies-database-india": "2026-10-19",
  "entertainment-media-database-india": "2026-10-19",
  "male-gents-database-india": "2026-10-19",
  "lic-agents-emails-database-india": "2026-10-19",
  "logistics-management-service-providers-database-india": "2026-10-19",
  "machinery-suppliers-services-database-india": "2026-10-20",
  "agents-database-india": "2026-10-19",
  "lecturers-professors-database-india": "2026-10-18",
  "legal-firms-database-india": "2026-10-18",
  "teachers-database-india": "2026-10-18",
  "advocates-lawyers-database-india": "2026-10-18",
  "hr-human-resources-database-india": "2026-10-18",
  "consultants-consulting-services-database-india": "2026-10-18",
  "hotels-restaurants-bars-database-india": "2026-10-18",
  "event-management-organisers-database-india": "2026-10-18",
  "home-garden-pets-suppliers-database-india": "2026-10-18",
  "dealers-distributors-database-india": "2026-10-18",
  "hni-high-income-employees-database-india": "2026-10-17",
  "graphic-designers-database-india": "2026-10-19",
  "gymnasiums-database-india": "2026-10-17",
  "health-beauty-shops-business-database-india": "2026-10-17",
  "designers-database-india": "2026-10-17",
  "beauty-parlours-salons-spa-database-india": "2026-10-17",
  "government-employees-database-india": "2026-10-22",
  "facebook-users-database-india": "2026-10-17",
  "females-database-india": "2026-10-19",
  "fabric-clothing-stores-database-india": "2026-10-19",
  "female-consumer-bangalore-database": "2026-10-17",
  "financial-analysts-managers-industry-database": "2026-10-17",
  "food-beverage-stores-database-india": "2026-10-18",
  "freelancers-database-india": "2026-10-17",
  "frequent-flyer-database-india": "2026-10-17",
  "furniture-stores-dealers-database-india": "2026-10-18",
  "gas-petroleum-companies-database-india": "2026-10-17",
};

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
    ...liveKeywordPages
      .filter((page) => !isHeldFromIndex(page.slug))
      .map((page) => entry(`/${page.slug}`, KEYWORD_CONTENT_UPDATED[page.slug] ?? CONTENT_UPDATED.keywordPages)),
  ],
  /** State and city databases. */
  states: (): Entry[] => [
    ...databaseStates.map((state) => entry(`/database/${state.slug}`, CONTENT_UPDATED.statePages)),
    ...Object.values(cities).map((city) => entry(cityPath(city), CONTENT_UPDATED.cityPages)),
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

