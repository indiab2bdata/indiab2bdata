import { SegmentTabs } from "@/components/sections/SegmentTabs";
import { IconCardItem } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { shell } from "@/components/ui/styles";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import type { LandingPage } from "@/types/landing";

/** Segment summary + 3 segment cards + (optional) segment tabs. */
export function SegmentCards({ page }: { page: LandingPage }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className={shell}>
        <SectionHead eyebrow={LANDING_COPY.segments.eyebrow} title={LANDING_COPY.segments.title(page.name)} text={page.segmentSummary} />
        <div className="grid gap-5 md:grid-cols-3">
          {page.segmentCards.map((card, i) => (
            <IconCardItem key={card.title} card={card} index={i} />
          ))}
        </div>
        {page.segmentTabs && (
          <div className="mt-14">
            <Reveal>
              <h3 className="mb-5 font-display text-xl font-bold text-navy md:text-2xl">{page.segmentTabs.heading}</h3>
              <SegmentTabs tabs={page.segmentTabs.tabs} label={page.segmentTabs.heading} />
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
