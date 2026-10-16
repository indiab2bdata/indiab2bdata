"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { useModal } from "@/components/modal-context";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig } from "@/lib/site-config";

const STATS = [
  { value: 50, suffix: "L+", label: "Verified Records" },
  { value: 700, suffix: "+", label: "Cities Covered" },
  { value: 500, suffix: "+", label: "Industry Categories" },
  { value: 10, suffix: "K+", label: "Businesses Served" },
];

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

/**
 * Mounts a single background video (desktop or mobile, never both) once the window has loaded,
 * so it never competes with first paint. Skipped for reduced motion, data saver and slow connections.
 */
function HeroVideo() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: NetworkInfo }).connection;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (conn?.saveData || (conn?.effectiveType && /(^|-)2g$|^3g$/.test(conn.effectiveType))) return;

    const pick = () =>
      setSrc(window.matchMedia("(min-width: 768px)").matches ? "/images/hero/hero-desktop.mp4" : "/images/hero/hero-mob.mp4");
    const start = () => {
      const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
      if (idle) idle(pick);
      else window.setTimeout(pick, 300);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  if (!src) return null;
  return (
    <video
      key={src}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  const { openModal } = useModal();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-navy"
    >
      {/* Poster paints immediately (LCP); the video is layered on top only after the page has loaded. */}
      <Image
        src="/images/home/hero.jpg"
        alt="Sales team working with verified B2B business data"
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <HeroVideo />

      {/* Layered gradient overlay - deeper, richer, more luxurious */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy-dark/65 to-navy-dark/95"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,184,232,0.10)_0%,_transparent_65%)] pointer-events-none"
        aria-hidden="true"
      />
      {/* Subtle bottom fade for seamless transition into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <Reveal className="relative max-w-4xl mx-auto px-5 md:px-8 flex flex-col items-center text-center">
        {/* Badge - glassmorphism with soft glow */}
        <span className="inline-flex items-center gap-2 text-teal-light text-[11px] font-semibold uppercase tracking-[0.22em] mb-7 rounded-full px-4 py-1.5 border border-teal-light/30 bg-teal-light/[0.06] backdrop-blur-md shadow-[0_0_24px_-8px_rgba(22,184,232,0.45)]">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-light shadow-[0_0_8px_2px_rgba(22,184,232,0.7)] animate-pulse" />
          India&apos;s Trusted B2B Data Partner
        </span>

        {/* Headline - tightened tracking, brighter accent */}
        <h1 className="font-display font-extrabold text-white text-[2.15rem] sm:text-5xl xl:text-[3.75rem] leading-[1.08] tracking-[-0.02em] max-w-3xl">
          B2B Data That Actually{" "}
          <span className="relative inline-block text-teal-light">
            Reaches
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-light/70 to-transparent" />
          </span>{" "}
          &amp; <span className="text-teal-light">Converts</span>
        </h1>

        {/* Subheadline - better contrast & rhythm */}
        <p className="mt-7 text-slate-200/85 text-base md:text-lg max-w-2xl leading-relaxed font-light">
          Verified mobile numbers, emails and company records for every industry, city and state
          in India - built for sales teams who can&apos;t afford to waste a single call.
        </p>

        {/* CTA buttons - elevated, refined */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={() => openModal("hero")}
            className="group relative w-full sm:w-auto bg-gradient-to-b from-teal to-teal-dark hover:from-teal-light hover:to-teal active:scale-[0.98] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(22,184,232,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(22,184,232,0.75)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5 cursor-pointer overflow-hidden"
          >
            {/* soft sheen */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Request Free Sample Data</span>
            <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#1fb355] hover:bg-[#18a04a] text-white font-semibold shadow-lg shadow-[#1fb355]/35 hover:shadow-xl hover:shadow-[#1fb355]/45 hover:-translate-y-0.5 active:scale-[0.98] ring-1 ring-white/20 transition-all duration-300"
          >
            <WhatsAppIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust divider */}
        <div className="mt-12 flex items-center gap-3 w-full max-w-md">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-slate-400/70 font-medium">
            Trusted by sales teams
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </div>

        {/* Stats grid - refined glass cards */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-teal-light/30 px-4 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* top accent line */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-8 bg-gradient-to-r from-transparent via-teal-light/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-display text-2xl md:text-[1.65rem] font-extrabold text-white tracking-tight leading-none">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-slate-300/75 text-[11px] mt-2 tracking-wide font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}