"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { DEFAULT_FAQS, type FaqItem } from "@/lib/faq-data";

export type { FaqItem };

export function Faq({
  items = DEFAULT_FAQS,
  id = "faq",
  eyebrow = "FAQs",
  heading = "Common Questions",
  background = "white",
}: {
  items?: FaqItem[];
  id?: string;
  eyebrow?: string;
  heading?: string;
  background?: "white" | "bgsoft";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionBg = background === "white" ? "bg-white" : "bg-bgsoft";
  const cardBg = background === "white" ? "bg-bgsoft" : "bg-white";

  return (
    <section id={id} className={`${sectionBg} py-20 md:py-28`}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">{eyebrow}</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
            {heading}
          </h2>
        </Reveal>

        <div className="space-y-3">
          {items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`${isOpen ? "bg-teal/[0.04] border-l-2 border-teal" : `${cardBg} border-l-2 border-transparent`} rounded-xl overflow-hidden transition-colors duration-300`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-navy text-sm md:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-[18px] h-[18px] shrink-0 text-teal transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
