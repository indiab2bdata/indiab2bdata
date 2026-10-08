import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { liveKeywordPages } from "@/lib/keyword-pages";
import { databaseStates } from "@/lib/database-pages";
import { cities, cityPath } from "@/components/city-pages/city-data.mjs";

/**
 * Date each page's main content last changed. Bump the matching entry when you edit that
 * page's copy — not for header/footer/styling changes. priority & changefreq are omitted
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
  keywordPages: "2026-10-09",
  statePages: "2026-10-07",
  cityPages: "2026-10-07",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = (
    ["", "/about", "/privacy-policy", "/terms-and-conditions", "/database", "/blog", "/contact"] as const
  ).map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: CONTENT_UPDATED[route],
  }));

  const keywordRoutes = liveKeywordPages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified: CONTENT_UPDATED.keywordPages,
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
