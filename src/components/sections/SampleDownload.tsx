"use client";

import { Download, FileSpreadsheet } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { buildSampleCsv, buildSampleTable, sampleProfileFor } from "@/lib/sample-data";
import { SITE_COPY } from "@/content/shared/site-copy";

const COPY = SITE_COPY.sampleDownload;

/** "Download Sample Data" block: generates a dummy CSV in the format of the page's product. */
export function SampleDownload({
  slug,
  label,
  city,
  state,
}: {
  slug: string;
  label: string;
  city?: string;
  state?: string;
}) {
  const profile = sampleProfileFor(slug);
  const csv = buildSampleCsv(profile, 20, { city, state });
  const preview = buildSampleTable(profile, 4, { city, state });
  const headers = csv.slice(1, csv.indexOf("\r\n")).split(",");
  const displayCols = preview.headers.slice(0, 5);

  function download() {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug}-sample-data.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="py-10 md:py-14 max-w-6xl mx-auto px-5 md:px-8">
      <Reveal>
        <div className="bg-white rounded-2xl border border-[#DCEAF3] shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
              <FileSpreadsheet className="w-7 h-7" strokeWidth={1.8} />
            </div>
            <div className="flex-1">
              <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">{COPY.eyebrow}</span>
              <h2 className="font-display font-extrabold text-xl md:text-2xl text-navy mt-2 tracking-tight">
                {COPY.titlePrefix}
                {label}
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {COPY.text}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {headers.map((h) => (
                  <span key={h} className="text-xs font-medium text-navy bg-bgsoft border border-[#DCEAF3] rounded-full px-3 py-1">
                    {h}
                  </span>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={download}
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-teal hover:bg-navy text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              {COPY.button}
            </button>
          </div>

          {/* On-page preview table tailored to this specific category */}
          <div className="mt-6 overflow-hidden rounded-xl border border-[#DCEAF3] bg-bgsoft/40">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-xs">
                <thead className="bg-navy text-white">
                  <tr>
                    {displayCols.map((h) => (
                      <th key={h} scope="col" className="whitespace-nowrap px-4 py-2.5 font-semibold text-xs tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF4F8] bg-white">
                  {preview.rows.map((row, r) => (
                    <tr key={r} className="odd:bg-white even:bg-[#f8fbfd]">
                      {row.slice(0, displayCols.length).map((cell, c) => (
                        <td key={c} className="whitespace-nowrap px-4 py-2.5 text-navy/85 font-mono text-[11px]">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-[#EEF4F8] px-4 py-2 text-[11px] text-muted bg-[#f8fbfd]">
              Illustrative format preview with masked dummy values for {label}. Request a custom quote to review confirmed real records.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
