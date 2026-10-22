import { Star } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { shell } from "@/components/ui/styles";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import type { LandingTestimonial } from "@/types/landing";

/** Real, category-specific reviews only - renders nothing when there are none. */
export function Testimonials({ items }: { items?: LandingTestimonial[] }) {
  if (!items?.length) return null;
  return (
    <section className="bg-white py-16 md:py-20">
      <div className={shell}>
        <SectionHead eyebrow={LANDING_COPY.testimonials.eyebrow} title={LANDING_COPY.testimonials.title} />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-2xl border border-[#DCEAF3] bg-bgsoft p-6">
              <div className="flex gap-0.5 text-amber" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-navy">{t.name}</span>
                <span className="text-muted"> - {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
