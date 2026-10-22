import type { ReactNode } from "react";
import { CheckCircle2, ClipboardList } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHead";
import { KEYWORD_COPY } from "@/content/shared/keyword-copy";

/** "What is it" copy on the left, a dark "what's in every record" spec card on the right. */
export function RecordAnatomy({
  eyebrow,
  title,
  paragraphs,
  fields,
  cardTitle = KEYWORD_COPY.record.cardTitle,
}: {
  eyebrow: string;
  title: string;
  paragraphs: ReactNode[];
  fields: string[];
  cardTitle?: string;
}) {
  return (
    <section className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-14">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{title}</h2>
        <div className="mt-5 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="rounded-2xl bg-navy-dark p-7 text-white shadow-xl md:p-8">
          <p className="flex items-center gap-2 text-sm font-semibold text-teal-light">
            <ClipboardList className="h-4 w-4" />
            {cardTitle}
          </p>
          <ul className="mt-5 divide-y divide-white/10">
            {fields.map((f) => (
              <li key={f} className="flex items-start gap-3 py-3 text-sm text-white/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
            {KEYWORD_COPY.record.tiles.map(([a, b]) => (
              <div key={a}>
                <p className="font-display text-sm font-bold text-white">{a}</p>
                <p className="mt-0.5 text-[11px] text-white/60">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
