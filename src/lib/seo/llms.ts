import { PRODUCT_GROUPS } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cityPath, getAllCities, getAllStates, liveKeywordPages } from "@/content";
import { LLMS } from "@/content/pages/llms";

const link = (label: string, path: string, note?: string) => `- [${label}](${siteConfig.url}${path})${note ? `: ${note}` : ""}`;

/**
 * /llms.txt - built from the same sources as the sitemaps, so it can never list a retired or renamed slug.
 */
export function llmsTxt() {
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
    `> ${LLMS.summary}`,
    "",
    `## ${LLMS.about.heading}`,
    "",
    ...LLMS.about.links.map((l) => link(l.label, l.path, l.note)),
    "",
    `## ${LLMS.products.heading}`,
    "",
    productSections.join("\n\n"),
    "",
    `## ${LLMS.states.heading}`,
    "",
    link(LLMS.states.all.label, LLMS.states.all.path, LLMS.states.all.note),
    ...getAllStates().map((state) => link(state.name, `/database/${state.slug}`)),
    "",
    `## ${LLMS.cities.heading}`,
    "",
    ...getAllCities().map((city) => link(`${city.city}, ${city.state}`, cityPath(city))),
    "",
    `## ${LLMS.guides.heading}`,
    "",
    ...LLMS.guides.links.map((l) => link(l.label, l.path, l.note)),
    "",
    `## ${LLMS.policies.heading}`,
    "",
    ...LLMS.policies.links.map((l) => link(l.label, l.path)),
    "",
  ];
  return lines.join("\n");
}
