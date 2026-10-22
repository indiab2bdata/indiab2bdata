import { Reveal } from "@/components/ui/Reveal";
import { KeywordSectionHead } from "@/components/ui/SectionHead";

/** Numbered use-case cards (01, 02, ...). */
export function NumberedCards({ eyebrow, title, text, items }: { eyebrow: string; title: string; text?: string; items: string[] }) {
  return (
    <section className="bg-bgsoft py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <KeywordSectionHead eyebrow={eyebrow} title={title} text={text} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-[#DCEAF3] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <span className="font-display text-3xl font-extrabold text-teal/20">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-display text-base font-bold leading-snug text-navy">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
