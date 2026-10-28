import { shell } from "@/components/ui/styles";
import { CLAIMS } from "@/config/claims";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import { isPlaceholder, monthYear } from "@/lib/utils";
import type { LandingPage } from "@/types/landing";

const COPY = LANDING_COPY.stats;

/** Per-page stats. Placeholder figures are skipped, never shown as fake numbers. */
export function StatsBar({ page }: { page: LandingPage }) {
  const items = [
    !isPlaceholder(page.totalRecords) && { value: page.totalRecords, label: COPY.records },
    { value: String(page.coverageTable.rows.length), label: COPY.covered(page.coverageTable.segmentLabel) },
    { value: String(page.dataFields.length), label: COPY.fields },
    CLAIMS.showRefreshDates && { value: monthYear(page.lastUpdated), label: COPY.refreshed },
  ].filter(Boolean) as { value: string; label: string }[];

  return (
    <div className="border-b border-[#DCEAF3] bg-white">
      <dl className={`grid grid-cols-2 gap-y-6 py-7 ${["", "", "md:grid-cols-2", "md:grid-cols-3", "md:grid-cols-4"][items.length]} ${shell}`}>
        {items.map((s) => (
          <div key={s.label} className="text-center md:border-l md:border-[#DCEAF3] md:first:border-l-0">
            <dd className="font-display text-2xl font-extrabold text-navy md:text-3xl">{s.value}</dd>
            <dt className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
