"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useModal } from "@/components/modal-context";

export function InlineCta({
  text,
  buttonLabel = "Get Free Sample",
  id,
}: {
  text: string;
  buttonLabel?: string;
  id: string;
}) {
  const { openModal } = useModal();

  return (
    <section className="py-6 md:py-8 max-w-4xl mx-auto px-5 md:px-8">
      <Reveal>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-teal/5 border border-teal/20 rounded-2xl px-6 py-5">
          <p className="text-sm md:text-base text-navy font-medium text-center sm:text-left">
            {text}
          </p>
          <button
            onClick={() => openModal(id)}
            className="shrink-0 inline-flex items-center gap-1.5 bg-navy hover:bg-navy-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition whitespace-nowrap"
          >
            {buttonLabel}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
