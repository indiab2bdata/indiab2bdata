import { BrowseByCategory } from "@/components/sections/BrowseByCategory";
import { LocationLinks } from "@/components/sections/LocationLinks";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { shell } from "@/components/ui/styles";
import { PRODUCT_GROUPS } from "@/config/navigation";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import type { LinkItem } from "@/types/landing";

/** Related pages + (optional) location links + compact category browser, closing every landing page. */
export function Explore({ related, locations, showBrowse = true }: { related: LinkItem[]; locations?: { heading: string; links: LinkItem[] }; showBrowse?: boolean }) {
  const topGroups = LANDING_COPY.browse.groups
    .map((id) => PRODUCT_GROUPS.find((g) => g.id === id))
    .filter((g): g is (typeof PRODUCT_GROUPS)[number] => Boolean(g));

  return (
    <section className="bg-bgsoft py-16 md:py-24">
      <div className={`space-y-14 ${shell}`}>
        <RelatedLinks links={related} />
        {locations && locations.links.length > 0 && <LocationLinks heading={locations.heading} links={locations.links} />}
        {showBrowse && <BrowseByCategory groups={topGroups} />}
      </div>
    </section>
  );
}
