"use client";

import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { DataNetwork } from "@/components/data-network";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { useModal } from "@/components/modal-context";
import { siteConfig } from "@/lib/site-config";

const STATS = [
  { value: 50, suffix: "L+", label: "Verified Records" },
  { value: 700, suffix: "+", label: "Cities Covered" },
  { value: 500, suffix: "+", label: "Industry Categories" },
  { value: 10, suffix: "K+", label: "Businesses Served" },
];

export function Hero() {
  const { openModal } = useModal();

  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-navy to-navy-light"
    >
      <DataNetwork variant="hero" className="opacity-70" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-teal-light text-xs font-semibold uppercase tracking-[0.16em] mb-5 border border-teal-light/40 rounded-full px-3 py-1">
            India&apos;s Trusted B2B Data Partner
          </span>
          <h1 className="font-display font-extrabold text-white text-4xl md:text-5xl xl:text-[3.4rem] leading-[1.12] tracking-tight">
            B2B Data That Actually <span className="text-teal-light">Reaches</span> &amp;{" "}
            <span className="text-teal-light">Converts</span>
          </h1>
          <p className="mt-6 text-slate-200/90 text-base md:text-lg max-w-xl leading-relaxed">
            Verified mobile numbers, emails and company records for every industry, city and
            state in India — built for sales teams who can&apos;t afford to waste a single call.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => openModal("hero")}
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

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl md:text-3xl font-extrabold text-white">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-slate-300 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <Image
              src="/images/home/hero.jpg"
              alt="Sales team reviewing B2B data analytics"
              width={1200}
              height={900}
              className="w-full h-[420px] md:h-[480px] object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 max-w-[240px]">
            <span className="w-10 h-10 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <Check className="w-5 h-5" strokeWidth={2.2} />
            </span>
            <p className="text-sm font-medium text-navy leading-snug">
              Fresh data, refreshed every 30 days
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
