import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { CsvDownloadButton } from "@/components/ui/CsvDownloadButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { shell } from "@/components/ui/styles";
import { COMPLIANCE_PATH } from "@/config/navigation";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import type { LandingPage } from "@/types/landing";

const COPY = LANDING_COPY.sample;

/** Live sample table (5 masked rows) + CSV download + compliance link right beside it. Never collapsed. */
export function SampleTable({ page, headers, rows, csv }: { page: LandingPage; headers: string[]; rows: string[][]; csv: string }) {
  return (
    <section id="sample" className="scroll-mt-24 bg-bgsoft py-16 md:py-24">
      <div className={shell}>
        <SectionHead eyebrow={COPY.eyebrow} title={COPY.title} text={COPY.text} />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[#DCEAF3] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <caption className="sr-only">
                  {COPY.captionPrefix}
                  {page.name}
                  {COPY.captionSuffix}
                </caption>
                <thead className="bg-navy text-white">
                  <tr>
                    {headers.map((h) => (
                      <th key={h} scope="col" className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF4F8]">
                  {rows.map((row, r) => (
                    <tr key={r} className="odd:bg-white even:bg-[#f8fbfd]">
                      {row.map((cell, c) => (
                        <td key={c} className="whitespace-nowrap px-4 py-3 text-navy/85">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-4 border-t border-[#DCEAF3] p-5 md:flex-row md:items-center md:justify-between">
              <p className="flex items-start gap-2 text-sm text-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#17784a]" />
                <span>
                  {COPY.complianceLead}{" "}
                  <Link href={COMPLIANCE_PATH} className="font-semibold text-teal hover:underline">
                    {COPY.complianceLink}
                  </Link>
                </span>
              </p>
              <CsvDownloadButton csv={csv} filename={COPY.csvFilename(page.sample.csvSlug)} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
