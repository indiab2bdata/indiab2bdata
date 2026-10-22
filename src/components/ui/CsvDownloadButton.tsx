"use client";

import { Download } from "lucide-react";
import { FORM_COPY } from "@/content/shared/forms";

/** Downloads the full 20-row fictional CSV (built on the server, passed in as a string). */
export function CsvDownloadButton({ csv, filename }: { csv: string; filename: string }) {
  function download() {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  return (
    <button
      type="button"
      onClick={download}
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
    >
      <Download className="h-4 w-4" />
      {FORM_COPY.cta.downloadCsv}
    </button>
  );
}
