import { IconCardItem } from "@/components/ui/Card";
import { SectionHead } from "@/components/ui/SectionHead";
import { shell } from "@/components/ui/styles";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import type { LandingPage } from "@/types/landing";

export function UseCases({ page }: { page: LandingPage }) {
  return (
    <section className="bg-bgsoft py-16 md:py-24">
      <div className={shell}>
        <SectionHead eyebrow={LANDING_COPY.useCases.eyebrow} title={LANDING_COPY.useCases.title(page.name)} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.useCases.map((card, i) => (
            <IconCardItem key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
