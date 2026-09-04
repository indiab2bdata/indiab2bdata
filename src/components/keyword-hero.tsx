"use client";

import { MessageCircle } from "lucide-react";
import { DataNetwork } from "@/components/data-network";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";
import { useModal } from "@/components/modal-context";
import { siteConfig } from "@/lib/site-config";

export function KeywordHero({
  eyebrow,
  title,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  const { openModal } = useModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-light pt-28 md:pt-36 pb-16 md:pb-20">
      <DataNetwork variant="cta" className="opacity-60" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <Breadcrumbs items={breadcrumbs} />

        <span className="inline-block text-teal-light text-xs font-semibold uppercase tracking-[0.16em] mt-5 mb-5 border border-teal-light/40 rounded-full px-3 py-1">
          {eyebrow}
        </span>
        <h1 className="font-display font-extrabold text-white text-3xl md:text-5xl leading-[1.15] tracking-tight">
          {title}
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => openModal("keyword-hero")}
            className="bg-teal hover:bg-teal-dark text-white font-semibold px-7 py-3.5 rounded-full transition shadow-lg shadow-teal/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            Request Free Sample Data
          </button>
          <a
            href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 font-medium border border-white/25 hover:border-white/60 px-6 py-3.5 rounded-full transition"
          >
            <MessageCircle className="w-5 h-5 text-whats" fill="#25D366" strokeWidth={0} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
