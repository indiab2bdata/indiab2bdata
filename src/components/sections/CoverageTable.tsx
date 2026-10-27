import Link from "next/link";
import { CheckCircle2, ClipboardList } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { shell } from "@/components/ui/styles";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import { isPlaceholder, shown } from "@/lib/utils";
import type { CoverageRow, LandingPage } from "@/types/landing";

const COPY = LANDING_COPY.coverage;

/** Coverage table + fields included + pricing hint. Primary content: never collapsed. */
export function CoverageTable({ page }: { page: LandingPage }) {
  const { coverageTable: t, pricingHint } = page;
  const showFigures = t.showFigures !== false;
  return (
    <section className="bg-white py-16 md:py-24">
      <div className={shell}>
        <SectionHead eyebrow={COPY.eyebrow} title={t.heading} text={COPY.text(t.segmentLabel)} />
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-[#DCEAF3]">
              <table className="min-w-full text-left text-sm">
                <caption className="sr-only">{t.heading}</caption>
                <thead className="bg-bgsoft text-navy">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-semibold">{t.segmentLabel}</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">{COPY.includes}</th>
                    {showFigures && <th scope="col" className="px-5 py-3.5 text-right font-semibold">{COPY.records}</th>}
                    {showFigures && <th scope="col" className="px-5 py-3.5 text-right font-semibold">{COPY.fill}</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF4F8]">
                  {t.rows.map((row: CoverageRow) => (
                    <tr key={row.segment}>
                      <th scope="row" className="px-5 py-3.5 font-semibold text-navy">{row.href ? <Link href={row.href} className="text-teal-dark underline underline-offset-4">{row.segment}</Link> : row.segment}</th>
                      <td className="px-5 py-3.5 text-muted">{row.detail}</td>
                      {showFigures && <td className="px-5 py-3.5 text-right font-medium text-navy">{shown(row.records)}</td>}
                      {showFigures && <td className="px-5 py-3.5 text-right text-muted">{shown(row.fillRate)}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl bg-navy-dark p-6 text-white md:p-7">
              <p className="flex items-center gap-2 text-sm font-semibold text-teal-light">
                <ClipboardList className="h-4 w-4" />
                {COPY.fieldsHeading}
              </p>
              <ul className="mt-4 grid gap-2.5">
                {page.dataFields.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{COPY.pricingLabel}</p>
                <p className="mt-1 font-display text-2xl font-extrabold">
                  {isPlaceholder(pricingHint.from) ? COPY.customQuote : COPY.from(pricingHint.from)}
                  {!isPlaceholder(pricingHint.from) && <span className="ml-1 text-sm font-medium text-white/70">{pricingHint.unit}</span>}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{pricingHint.note}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
