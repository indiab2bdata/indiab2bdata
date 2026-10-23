import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HOME } from "@/content/pages/home";

const COPY = HOME.testimonials;

/** Client testimonials, each shown once. Add `company` to an item in content/pages/home.ts to show it. */
export function Testimonials() {
  return (
    <section className="bg-bgsoft py-20 md:py-28">
      <Reveal className="mx-auto mb-12 max-w-2xl px-5 text-center md:px-8">
        <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">{COPY.eyebrow}</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
          {COPY.title}
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3 md:px-8">
        {COPY.items.map((card, i) => (
          <Reveal key={card.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-[#DCEAF3] bg-white p-6 shadow-sm">
              <Quote className="h-6 w-6 text-teal/25" strokeWidth={1.5} fill="currentColor" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy/80">&ldquo;{card.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white ring-2 ring-teal/20 ring-offset-2 ${card.color}`}
                >
                  {card.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy">{card.name}</span>
                  <span className="block text-xs text-muted">
                    {card.company ? `${card.role}, ${card.company}` : card.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
