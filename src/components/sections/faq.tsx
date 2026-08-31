"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";

const FAQS = [
  {
    question: "Is the data legally compliant to use?",
    answer:
      "Yes, all data is sourced from publicly available and permission-based channels, and DND numbers are scrubbed before delivery.",
  },
  {
    question: "Can I get a free sample before buying?",
    answer:
      "Absolutely — every enquiry gets 15–20 free sample records so you can verify quality before payment.",
  },
  {
    question: "In what format is the data delivered?",
    answer:
      "You'll receive a clean Excel (.xlsx) or CSV file over email/WhatsApp, ready to import into your CRM or dialer.",
  },
  {
    question: "Do you offer a data refresh if numbers go inactive?",
    answer:
      "Yes, Business and Enterprise packages include periodic refreshes to replace inactive contacts at no extra cost.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
            FAQs
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
            Common Questions
          </h2>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="bg-bgsoft rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-navy text-sm md:text-base"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-[18px] h-[18px] shrink-0 text-navy transition-transform ${isOpen ? "rotate-180" : ""}`}
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
