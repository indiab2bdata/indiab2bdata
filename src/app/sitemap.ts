import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { keywordPages } from "@/lib/keyword-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["", "/about-us", "/privacy-policy", "/terms-and-conditions"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : 0.6,
  }));

  const keywordRoutes = keywordPages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...keywordRoutes];
}
