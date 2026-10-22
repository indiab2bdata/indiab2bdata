"use client";

import { useId } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { LinkedText } from "@/components/ui/LinkedText";
import { Reveal } from "@/components/ui/Reveal";
import { DEFAULT_FAQS, FAQ_DEFAULTS } from "@/content/pages/faqs";
import type { Faq as FaqEntry } from "@/types/landing";

/**
 * FAQ section. The visible question/answer text is exactly what faqJsonLd() puts in FAQPage schema,
 * so always pass the same array to both. Called with no props on the homepage and /contact.
 */
export function Faq({
  items = DEFAULT_FAQS,
  id = "faq",
  eyebrow = FAQ_DEFAULTS.eyebrow,
  heading = FAQ_DEFAULTS.heading,
  background = "white",
}: {
  items?: FaqEntry[];
  id?: string;
  eyebrow?: string;
  heading?: string;
  background?: "white" | "bgsoft";
}) {
  const baseId = useId();
  const sectionBg = background === "white" ? "bg-white" : "bg-bgsoft";
  const cardBg = background === "white" ? "bg-bgsoft" : "bg-white";

  return (
    <section id={id} className={`${sectionBg} py-20 md:py-28`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">{eyebrow}</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
            {heading}
          </h2>
        </Reveal>

        <Accordion
          idPrefix={baseId}
          closedClassName={`${cardBg} border-l-2 border-transparent`}
          items={items.map((faq) => ({
            key: faq.question,
            title: faq.question,
            content: (
              <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                <LinkedText text={faq.answer} links={faq.link ? [faq.link] : []} />
              </p>
            ),
          }))}
        />
      </div>
    </section>
  );
}
