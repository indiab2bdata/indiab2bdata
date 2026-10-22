import Link from "next/link";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import { LANDING_COPY } from "@/content/shared/landing-copy";

const COPY = LANDING_COPY.browse;

/** Compact card linking to product groups on the /database hub. */
export function BrowseByCategory({ groups }: { groups: { id: string; heading: string; description: string; links: unknown[] }[] }) {
  return (
    <div className="rounded-2xl border border-[#DCEAF3] bg-white p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-dark">
            <LayoutGrid className="h-4 w-4" />
            {COPY.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-xl font-bold text-navy md:text-2xl">{COPY.title}</h2>
        </div>
        <Link href="/database" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
          {COPY.viewAll}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <Link key={g.id} href={`/database#${g.id}`} className="group rounded-xl border border-[#EEF4F8] p-4 transition-colors hover:border-teal/40 hover:bg-bgsoft">
            <span className="flex items-center justify-between font-semibold text-navy">
              {g.heading}
              <span className="text-xs font-medium text-muted">
                {g.links.length}
                {COPY.listsSuffix}
              </span>
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-muted">{g.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
