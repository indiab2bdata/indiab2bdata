import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import type { LandingGuide } from "@/types/landing";

/** Page-specific long-form guide: H2 + H3 sections, readable line length. */
export function Guide({ guide }: { guide: LandingGuide }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHead eyebrow={LANDING_COPY.guide.eyebrow} title={guide.heading} text={guide.intro} />
        <div className="space-y-10">
          {guide.sections.map((sec) => (
            <Reveal key={sec.heading}>
              <h3 className="font-display text-xl font-bold text-navy md:text-2xl">{sec.heading}</h3>
              {sec.paragraphs?.map((p, i) => (
                <p key={i} className="mt-3 max-w-[70ch] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              {sec.bullets && (
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 rounded-xl bg-bgsoft p-3.5 text-sm leading-relaxed text-navy/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
