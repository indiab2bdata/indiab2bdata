"use client";

import { Download, FileSpreadsheet } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { buildSampleCsv, sampleProfileFor } from "@/lib/sample-data";

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
  const csv = buildSampleCsv(sampleProfileFor(slug), 20, { city, state });
  const headers = csv.slice(1, csv.indexOf("\r\n")).split(",");

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
        <div className="bg-white rounded-2xl border border-[#DCEAF3] shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-14 h-14 shrink-0 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
            <FileSpreadsheet className="w-7 h-7" strokeWidth={1.8} />
          </div>
          <div className="flex-1">
            <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">Free Sample Format</span>
            <h2 className="font-display font-extrabold text-xl md:text-2xl text-navy mt-2 tracking-tight">
              Download Sample Data - {label}
            </h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              See exactly how your file will look. The sample has 20 dummy records (masked, for format preview only)
              with these columns:
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
            Download Sample (CSV)
          </button>
        </div>
      </Reveal>
    </section>
  );
}
