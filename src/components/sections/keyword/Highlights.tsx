import { FeatureGrid } from "@/components/sections/keyword/FeatureGrid";
import { Reveal } from "@/components/ui/Reveal";
import { KEYWORD_COPY } from "@/content/shared/keyword-copy";
import type { KeywordHighlight } from "@/types/landing";

/** "Why IndiaB2BData" highlight grid. */
export function Highlights({ items }: { items: KeywordHighlight[] }) {
  return (
    <section className="bg-bgsoft py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-dark">{KEYWORD_COPY.why.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            {KEYWORD_COPY.why.title}
          </h2>
        </Reveal>
        <FeatureGrid items={items} />
      </div>
    </section>
  );
}
