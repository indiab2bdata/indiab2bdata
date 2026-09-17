"use client";

import { useState, type FormEvent } from "react";
import { Phone } from "lucide-react";
import { DataNetwork } from "@/components/data-network";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig } from "@/lib/site-config";

type Status = { state: "idle" | "sending" | "success" | "error"; message?: string };

export function ContactCta({ source = "contact-cta-inline" }: { source?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({ success: false }));

      if (data.success) {
        setStatus({ state: "success", message: "Thank you! Our team will contact you shortly." });
        form.reset();
      } else {
        setStatus({
          state: "error",
          message: data.message || "Something went wrong. Please call or WhatsApp us directly.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Could not connect. Please call or WhatsApp us directly.",
      });
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 mesh-navy overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <DataNetwork variant="cta" className="opacity-40" />

      <Reveal className="relative max-w-xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
          Ready to Reach the Right Businesses?
        </h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Share your name and number — we&apos;ll send a free sample within a few hours, no
          obligation, no hidden charges.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input type="hidden" name="source" value={source} />
          <input type="hidden" name="requirement" value="Custom / Pan-India Data" />
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            aria-label="Your name"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal/60 focus:border-teal"
          />
          <input
            required
            type="tel"
            name="phone"
            placeholder="Phone / WhatsApp number"
            aria-label="Phone / WhatsApp number"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal/60 focus:border-teal"
          />
          <button
            type="submit"
            disabled={status.state === "sending"}
            className="bg-teal hover:bg-teal-dark disabled:opacity-60 active:scale-[0.98] text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-teal/30 hover:shadow-xl hover:shadow-teal/40 whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
          >
            {status.state === "sending" ? "Sending..." : "Get Free Sample"}
          </button>
        </form>

        {status.state !== "idle" && status.message && (
          <p
            className={`mt-3 text-sm ${
              status.state === "success"
                ? "text-teal-light font-medium"
                : status.state === "error"
                  ? "text-red-300"
                  : "text-slate-300"
            }`}
          >
            {status.message}
          </p>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-white/90 text-sm font-medium border border-white/25 hover:border-white/60 hover:bg-white/5 px-6 py-3 rounded-full transition-all duration-200 active:scale-[0.98]"
          >
            <Phone className="w-[18px] h-[18px]" strokeWidth={1.8} />
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 text-sm font-medium border border-white/25 hover:border-white/60 hover:bg-white/5 px-6 py-3 rounded-full transition-all duration-200 active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-[18px] h-[18px] text-whats" />
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
