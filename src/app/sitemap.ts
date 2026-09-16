import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { keywordPages } from "@/lib/keyword-pages";
import { databaseStates } from "@/lib/database-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const LOW_PRIORITY_ROUTES = new Set(["/privacy-policy", "/terms-and-conditions"]);

  const staticRoutes = ["", "/about-us", "/privacy-policy", "/terms-and-conditions", "/database", "/blog", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : LOW_PRIORITY_ROUTES.has(route) ? 0.6 : 0.8,
    })
  );

  const keywordRoutes = keywordPages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const databaseRoutes = databaseStates.map((state) => ({
    url: `${siteConfig.url}/database/${state.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...keywordRoutes, ...databaseRoutes];
}
