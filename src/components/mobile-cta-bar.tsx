"use client";

import { FileSpreadsheet, Phone } from "lucide-react";
import { useModal } from "@/components/modal-context";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig } from "@/lib/site-config";

/** Sticky bottom bar on phones (Call / WhatsApp / Get Sample). Desktop keeps the floating buttons. */
export function MobileCtaBar() {
  const { openModal } = useModal();
  const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-semibold";

  return (
    <nav
      aria-label="Quick contact"
      className="site-mobile-cta fixed inset-x-0 bottom-0 z-40 flex border-t border-[#DCEAF3] bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgba(16,42,67,0.25)] backdrop-blur md:hidden"
    >
      <a href={siteConfig.phoneHref} className={`${item} text-navy`}>
        <Phone className="h-5 w-5" strokeWidth={1.8} />
        Call
      </a>
      <a
        href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} text-[#0b6b39]`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
      <button type="button" onClick={() => openModal("mobile-cta-bar")} className={`${item} m-1.5 cursor-pointer rounded-xl bg-teal text-white`}>
        <FileSpreadsheet className="h-5 w-5" strokeWidth={1.8} />
        Get Sample
      </button>
    </nav>
  );
}
