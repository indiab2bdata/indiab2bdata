import { Reveal } from "@/components/ui/Reveal";
import type { IconCard } from "@/types/landing";

/** Icon + title + description card, staggered in rows of three. */
export function IconCardItem({ card, index }: { card: IconCard; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-[#DCEAF3] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_20px_40px_-24px_rgba(11,120,208,0.55)]">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
          <card.icon className="h-5 w-5" strokeWidth={1.9} />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy">{card.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
      </div>
    </Reveal>
  );
}
