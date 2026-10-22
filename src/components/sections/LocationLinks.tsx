import Link from "next/link";
import { MapPin } from "lucide-react";
import type { LinkItem } from "@/types/landing";

/** Max 8 contextual location links (state -> its cities, city -> its state and neighbours). */
export function LocationLinks({ heading, links }: { heading: string; links: LinkItem[] }) {
  return (
    <div>
      <h2 className="mb-5 font-display text-xl font-bold text-navy md:text-2xl">{heading}</h2>
      <div className="flex flex-wrap gap-3">
        {links.slice(0, 8).map((l) => (
          <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 rounded-full border border-[#DCEAF3] bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition-colors hover:border-teal/50 hover:text-teal">
            <MapPin className="h-3.5 w-3.5 text-teal" />
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
