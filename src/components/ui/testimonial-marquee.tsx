"use client";

import React from "react";
import { Quote } from "lucide-react";

export type TestimonialCard = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  /** Tailwind background class for the initials avatar. */
  color?: string;
};

const Card = ({ card }: { card: TestimonialCard }) => (
  <figure className="mx-3 w-80 shrink-0 rounded-2xl border border-[#DCEAF3] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
    <Quote className="h-6 w-6 text-teal/25" strokeWidth={1.5} fill="currentColor" aria-hidden="true" />
    <blockquote className="mt-3 text-sm leading-relaxed text-navy/80">&ldquo;{card.quote}&rdquo;</blockquote>
    <figcaption className="mt-5 flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white ring-2 ring-teal/20 ring-offset-2 ${card.color ?? "bg-navy"}`}
      >
        {card.initials}
      </span>
      <span>
        <span className="block text-sm font-semibold text-navy">{card.name}</span>
        <span className="block text-xs text-muted">{card.role}</span>
      </span>
    </figcaption>
  </figure>
);

function MarqueeRow({ data, reverse = false, speed = 30 }: { data: TestimonialCard[]; reverse?: boolean; speed?: number }) {
  // Enough copies to overflow wide screens, then doubled so the -50% loop is seamless.
  const loop = React.useMemo(() => {
    const base: TestimonialCard[] = [];
    while (base.length < 6) base.push(...data);
    return [...base, ...base];
  }, [data]);

  return (
    <div className="tm-row relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-bgsoft to-transparent md:w-32" />
      <div
        className="tm-track flex w-max transform-gpu py-3"
        style={{ animation: `tmScroll ${speed}s linear infinite`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {loop.map((c, i) => (
          // Only the first copy is exposed to assistive tech; the rest are visual repeats.
          <div key={i} aria-hidden={i >= data.length || undefined}>
            <Card card={c} />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-bgsoft to-transparent md:w-32" />
    </div>
  );
}

export default function TestimonialMarquee({
  row1,
  row2,
  speed = 30,
}: {
  row1: TestimonialCard[];
  row2?: TestimonialCard[];
  speed?: number;
}) {
  return (
    <>
      <style>{`
        @keyframes tmScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .tm-row:hover .tm-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .tm-track { animation: none !important; } }
      `}</style>
      <div className="flex flex-col gap-4">
        <MarqueeRow data={row1} speed={speed} />
        {row2 && row2.length > 0 && <MarqueeRow data={row2} reverse speed={speed} />}
      </div>
    </>
  );
}
