import type { ReactNode } from "react";
import { DataNetwork } from "@/components/data-network";

export function PageHero({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-navy to-navy-light ${
        compact ? "pt-28 md:pt-36 pb-12 md:pb-16" : "pt-28 md:pt-36 pb-16 md:pb-20"
      }`}
    >
      <DataNetwork variant="cta" className="opacity-60" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <span className="inline-block text-teal-light text-xs font-semibold uppercase tracking-[0.16em] mb-5 border border-teal-light/40 rounded-full px-3 py-1">
          {eyebrow}
        </span>
        <h1 className="font-display font-extrabold text-white text-3xl md:text-5xl leading-[1.12] tracking-tight">
          {title}
        </h1>
        {description && (
          <div className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            {description}
          </div>
        )}
      </div>
    </section>
  );
}
