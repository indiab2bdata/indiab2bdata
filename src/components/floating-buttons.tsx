import { Phone } from "lucide-react";
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
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4A9.9 9.9 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4L9.5 8c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.1 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
        </svg>
      </a>
    </div>
  );
}
