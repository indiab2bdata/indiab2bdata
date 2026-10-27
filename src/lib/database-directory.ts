import { isHeldFromIndex } from "@/config/indexing";
import { PRODUCT_GROUPS } from "@/config/navigation";
import { liveKeywordPages } from "@/content";
import { DATABASE_HUB } from "@/content/pages/database";

export const DIRECTORY_PREVIEW_LIMIT = 4;

/** Every live database stays reachable through its category's crawlable directory page. */
export function getDatabaseDirectoryGroups() {
  const liveHrefs = new Set(liveKeywordPages.filter((p) => !isHeldFromIndex(p.slug)).map((p) => `/${p.slug}`));
  const groupedHrefs = new Set(PRODUCT_GROUPS.flatMap((g) => g.links.map((l) => l.href)));
  return [
    ...PRODUCT_GROUPS.map((g) => ({ ...g, links: g.links.filter((l) => liveHrefs.has(l.href)) })),
    {
      ...DATABASE_HUB.moreGroup,
      links: liveKeywordPages.filter((p) => !groupedHrefs.has(`/${p.slug}`) && !isHeldFromIndex(p.slug)).map((p) => ({ href: `/${p.slug}`, label: p.keyword.replace(/ India$/, "") })),
    },
  ]
    .filter((g) => g.links.length > 0)
    .map((g) => ({ ...g, href: `/database/categories/${g.id}` }));
}

export function databaseGroupMetadata(group: ReturnType<typeof getDatabaseDirectoryGroups>[number]) {
  return {
    title: `${group.heading} Database Directory India`,
    description: `Browse ${group.heading.toLowerCase()} databases in India. ${group.description}`,
    path: group.href,
  };
}
