"use client";

import { ArrowRight } from "lucide-react";
import { useModal } from "@/components/layout/ModalContext";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { FORM_COPY } from "@/content/shared/forms";

/** Primary "Get Free Sample" button - opens the enquiry modal. */
export function SampleButton({ source, label = FORM_COPY.cta.sample, className = "" }: { source: string; label?: string; className?: string }) {
  const { openModal } = useModal();
  return (
    <button
      type="button"
      onClick={() => openModal(source)}
      className={`group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(11,120,208,0.8)] transition-all hover:-translate-y-0.5 hover:bg-teal-dark ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

export function WhatsAppButton({ message, label = FORM_COPY.cta.whatsapp, className = "" }: { message: string; label?: string; className?: string }) {
  return (
    <a
      href={siteConfig.whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#CFE3F0] bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-whats hover:text-[#128c4b] ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4 text-whats" />
      {label}
    </a>
  );
}
