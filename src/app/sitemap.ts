import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { keywordPages } from "@/lib/keyword-pages";
import { databaseStates } from "@/lib/database-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["", "/about", "/privacy-policy", "/terms-and-conditions", "/database", "/blog", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: 1,
    })
  );

  const keywordRoutes = keywordPages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  const databaseRoutes = databaseStates.map((state) => ({
    url: `${siteConfig.url}/database/${state.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  return [...staticRoutes, ...keywordRoutes, ...databaseRoutes];
}
