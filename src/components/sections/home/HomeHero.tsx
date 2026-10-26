"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useModal } from "@/components/layout/ModalContext";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { siteConfig } from "@/config/site";
import { HOME } from "@/content/pages/home";

const COPY = HOME.hero;

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
        alt={COPY.imageAlt}
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
        style={{ objectFit: "cover" }}
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
          {COPY.badge}
        </span>

        {/* Headline - tightened tracking, brighter accent */}
        <h1 className="font-display font-extrabold text-white text-[2.15rem] sm:text-5xl xl:text-[3.75rem] leading-[1.08] tracking-[-0.02em] max-w-3xl">
          {COPY.h1.lead}{" "}
          <span className="relative inline-block text-teal-light">
            {COPY.h1.accent}
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-light/70 to-transparent" />
          </span>{" "}
          {COPY.h1.and}
          <span className="text-teal-light">{COPY.h1.accent2}</span>
        </h1>

        {/* Subheadline - better contrast & rhythm */}
        <p className="mt-7 text-slate-200/85 text-base md:text-lg max-w-2xl leading-relaxed font-light">
          {COPY.subhead}
        </p>

        {/* CTA buttons - elevated, refined */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={() => openModal("hero")}
            className="group relative w-full sm:w-auto bg-gradient-to-b from-teal to-teal-dark hover:from-teal-light hover:to-teal active:scale-[0.98] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(22,184,232,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(22,184,232,0.75)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5 cursor-pointer overflow-hidden"
          >
            {/* soft sheen */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">{COPY.sampleCta}</span>
            <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href={siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#1fb355] hover:bg-[#18a04a] text-white font-semibold shadow-lg shadow-[#1fb355]/35 hover:shadow-xl hover:shadow-[#1fb355]/45 hover:-translate-y-0.5 active:scale-[0.98] ring-1 ring-white/20 transition-all duration-300"
          >
            <WhatsAppIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
            {COPY.whatsappCta}
          </a>
        </div>

        {/* Trust divider */}
      </Reveal>
    </section>
  );
}