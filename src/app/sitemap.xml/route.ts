import { sitemapIndexResponse } from "@/lib/seo/sitemap";

/** Sitemap index - points to sitemap-core.xml, sitemap-states.xml and sitemap-guides.xml. */
export const dynamic = "force-static";

export function GET() {
  return sitemapIndexResponse();
}
