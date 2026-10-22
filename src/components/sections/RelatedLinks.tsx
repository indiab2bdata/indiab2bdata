import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { indexableLinks } from "@/config/indexing";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import type { LinkItem } from "@/types/landing";

const card =
  "group flex items-center justify-between gap-3 rounded-xl border border-[#DCEAF3] bg-white px-5 py-4 text-sm font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md";

/** Max 6 related pages ("Often Bought Together"). Links to pages held from indexing are dropped. */
export function RelatedLinks({ links }: { links: LinkItem[] }) {
  return (
    <div>
      <SectionHead eyebrow={LANDING_COPY.related.eyebrow} title={LANDING_COPY.related.title} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {indexableLinks(links).slice(0, 6).map((l) => (
          <Link key={l.href} href={l.href} className={card}>
            {l.label}
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-teal" />
          </Link>
        ))}
      </div>
    </div>
  );
}
