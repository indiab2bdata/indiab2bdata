"use client";

import { Phone } from "lucide-react";
import { DataNetwork } from "@/components/data-network";
import { Reveal } from "@/components/reveal";
import { useModal } from "@/components/modal-context";
import { siteConfig } from "@/lib/site-config";

export function ContactCta() {
  const { openModal } = useModal();

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 mesh-navy overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <DataNetwork variant="cta" className="opacity-40" />

      <Reveal className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
          Ready to Reach the Right Businesses?
        </h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Tell us your requirement and get a free sample within a few hours — no obligation, no
          hidden charges.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => openModal("contact-cta")}
            className="bg-teal hover:bg-teal-dark active:scale-[0.98] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-teal/30 hover:shadow-xl hover:shadow-teal/40 hover:scale-[1.02]"
          >
            Get Free Sample Data
          </button>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-white/90 font-medium border border-white/25 hover:border-white/60 hover:bg-white/5 px-7 py-3.5 rounded-full transition-all duration-200 active:scale-[0.98]"
          >
            <Phone className="w-[18px] h-[18px]" strokeWidth={1.8} />
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
