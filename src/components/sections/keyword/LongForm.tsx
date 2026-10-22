import { LinkedText } from "@/components/ui/LinkedText";
import { Reveal } from "@/components/ui/Reveal";
import type { KeywordContentLink, KeywordSection } from "@/types/landing";

/** Long-form H2 sections (paragraphs, H3 subsections, bullets, closing paragraphs) with in-copy links. */
export function LongForm({ sections, links }: { sections: KeywordSection[]; links?: KeywordContentLink[] }) {
  return (
    <section className="mx-auto max-w-5xl space-y-14 px-5 py-20 md:px-8 md:py-24">
      {sections.map((section) => (
        <Reveal key={section.heading}>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl">{section.heading}</h2>
          <div className="mt-5 space-y-4">
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                <LinkedText text={paragraph} links={links} />
              </p>
            ))}
            {section.subsections && (
              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                {section.subsections.map((sub) => (
                  <div key={sub.heading} className="rounded-2xl border border-[#DCEAF3] bg-white p-5">
                    <h3 className="font-display text-base font-bold text-navy">{sub.heading}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted"><LinkedText text={sub.text} links={links} /></p>
                  </div>
                ))}
              </div>
            )}
            {section.bullets && (
              <ul className="grid gap-3 sm:grid-cols-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 rounded-xl bg-bgsoft p-4 text-sm leading-relaxed text-navy/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    <LinkedText text={bullet} links={links} />
                  </li>
                ))}
              </ul>
            )}
            {section.closing?.map((paragraph, i) => (
              <p key={`closing-${i}`} className="leading-relaxed text-muted">
                <LinkedText text={paragraph} links={links} />
              </p>
            ))}
          </div>
        </Reveal>
      ))}
    </section>
  );
}
