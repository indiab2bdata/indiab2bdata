import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig } from "@/lib/site-config";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={siteConfig.phoneHref}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy-light transition shadow-[0_10px_25px_-6px_rgba(0,0,0,0.35)]"
      >
        <Phone className="w-6 h-6" strokeWidth={1.8} />
      </a>
      <a
        href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-whats text-white flex items-center justify-center hover:brightness-105 transition shadow-[0_10px_25px_-6px_rgba(0,0,0,0.35)]"
      >
        <WhatsAppIcon className="w-[26px] h-[26px] text-white" />
      </a>
    </div>
  );
}
