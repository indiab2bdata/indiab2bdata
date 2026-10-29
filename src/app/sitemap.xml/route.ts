import { flatSitemapResponse } from "@/lib/seo/sitemap";

/** Single flat XML sitemap - lists all clean 200 OK canonical URLs directly. */
export const dynamic = "force-static";

export function GET() {
  return flatSitemapResponse();
}
