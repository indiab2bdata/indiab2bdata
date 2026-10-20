import type { MetadataRoute } from "next";
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
  "/database": "2026-10-07",
  "/blog": "2026-10-07",
  "/contact": "2026-09-30",
  keywordPages: "2026-10-16",
  statePages: "2026-10-07",
  cityPages: "2026-10-07",
} as const;

const KEYWORD_CONTENT_UPDATED: Record<string, string> = {
  "metals-minerals-industries-database-india": "2026-10-20",
  "medical-representatives-database-india": "2026-10-19",
  "chemical-pharma-companies-database-india": "2026-10-19",
  "business-development-sales-professionals-database-india": "2026-10-19",
  "media-planning-companies-database-india": "2026-10-19",
  "entertainment-media-database-india": "2026-10-19",
  "manufacturing-companies-database-india": "2026-10-20",
  "male-gents-database-india": "2026-10-19",
  "lic-agents-emails-database-india": "2026-10-19",
  "logistics-management-service-providers-database-india": "2026-10-19",
  "machinery-suppliers-services-database-india": "2026-10-20",
  "agents-database-india": "2026-10-19",
  "manufacturer-database-india": "2026-10-19",
  "jewellers-database-india": "2026-10-18",
  "lecturers-professors-database-india": "2026-10-18",
  "legal-firms-database-india": "2026-10-18",
  "teachers-database-india": "2026-10-18",
  "advocates-lawyers-database-india": "2026-10-18",
  "importers-database-india": "2026-10-19",
  "it-companies-database-india": "2026-10-18",
  "it-professionals-database-india": "2026-10-18",
  "importers-exporters-database-india": "2026-10-18",
  "computer-it-telecom-services-database-india": "2026-10-18",
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
  "government-employees-database-india": "2026-10-17",
  "chief-managers-database-india": "2026-10-17",
  "general-senior-managers-database-india": "2026-10-18",
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
  "gems-jewellery-shops-database-india": "2026-10-18",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = (
    ["", "/about", "/privacy-policy", "/terms-and-conditions", "/database", "/blog", "/contact"] as const
  ).map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: CONTENT_UPDATED[route],
  }));

  const keywordRoutes = liveKeywordPages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified: KEYWORD_CONTENT_UPDATED[page.slug] ?? CONTENT_UPDATED.keywordPages,
  }));

  const databaseRoutes = databaseStates.map((state) => ({
    url: `${siteConfig.url}/database/${state.slug}`,
    lastModified: CONTENT_UPDATED.statePages,
  }));

  const cityRoutes = Object.values(cities).map((city) => ({
    url: `${siteConfig.url}${cityPath(city)}`,
    lastModified: CONTENT_UPDATED.cityPages,
  }));

  return [...staticRoutes, ...keywordRoutes, ...databaseRoutes, ...cityRoutes];
}
