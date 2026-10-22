"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useModal } from "@/components/layout/ModalContext";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { SITE_COPY } from "@/content/shared/site-copy";

export function InlineCta({
  text,
  buttonLabel = SITE_COPY.inlineCta.button,
  id,
  whatsappMessage,
}: {
  text: string;
  buttonLabel?: string;
  id: string;
  whatsappMessage?: string;
}) {
  const { openModal } = useModal();

  return (
    <section className="py-6 md:py-8 max-w-6xl mx-auto px-5 md:px-8">
      <Reveal>
        <div className={`group flex flex-col ${whatsappMessage ? "lg:flex-row" : "sm:flex-row"} items-center justify-between gap-4 bg-teal/5 border border-teal/20 rounded-2xl px-6 py-5`}>
          <p className="text-sm md:text-base text-navy font-medium text-center sm:text-left">
            {text}
          </p>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3 lg:justify-end">
            <button
              type="button"
              onClick={() => openModal(id)}
              className="inline-flex items-center justify-center gap-1.5 bg-navy hover:bg-navy-light active:scale-[0.98] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              {buttonLabel}
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            {whatsappMessage && (
              <a
                href={siteConfig.whatsappHref(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal/30 bg-white px-5 py-2.5 text-sm font-semibold text-teal transition-colors hover:bg-teal/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                {SITE_COPY.inlineCta.whatsapp}
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
