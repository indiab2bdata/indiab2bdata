import { siteConfig } from "@/lib/site-config";
import { liveKeywordPages } from "@/lib/keyword-pages";
import { databaseStates } from "@/lib/database-pages";
import { PRODUCT_GROUPS } from "@/lib/product-groups";
import { cities, cityPath } from "@/components/city-pages/city-data.mjs";

/**
 * /llms.txt — built from the same sources as sitemap.ts, so it can never list a retired
 * or renamed slug. Prerendered at build time.
 */
export const dynamic = "force-static";

const link = (label: string, path: string, note?: string) =>
  `- [${label}](${siteConfig.url}${path})${note ? `: ${note}` : ""}`;

export function GET() {
  const pagesByPath = new Map(liveKeywordPages.map((page) => [`/${page.slug}`, page]));

  const productSections = PRODUCT_GROUPS.map((group) => {
    const lines = group.links.flatMap((item) => {
      const page = pagesByPath.get(item.href);
      return page ? [link(item.label, item.href, page.metaDescription)] : [];
    });
    return `### ${group.heading}\n\n${lines.join("\n")}`;
  });

  const lines = [
    `# ${siteConfig.name}`,
    "",
    "> IndiaB2BData.com provides verified B2B and B2C contact databases across India, including company records, mobile numbers, business emails and segment lists for sales and marketing.",
    "",
    "## About and Contact",
    "",
    link("Home", "/", "Overview of IndiaB2BData.com and its data services."),
    link("About", "/about", "Company information."),
    link("Contact", "/contact", "Contact details and enquiry options."),
    "",
    "## Data Products",
    "",
    productSections.join("\n\n"),
    "",
    "## Database by State",
    "",
    link("All states", "/database", "Browse B2B database coverage by state."),
    ...databaseStates.map((state) => link(state.name, `/database/${state.slug}`)),
    "",
    "## Database by City",
    "",
    ...Object.values(cities).map((city) => link(`${city.city}, ${city.state}`, cityPath(city))),
    "",
    "## Guides",
    "",
    link("Blog", "/blog", "Guides on B2B data and business databases."),
    "",
    "## Policies",
    "",
    link("Privacy policy", "/privacy-policy"),
    link("Terms and conditions", "/terms-and-conditions"),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
