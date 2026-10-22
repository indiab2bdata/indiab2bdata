"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { useModal } from "@/components/modal-context";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig } from "@/lib/site-config";
import type { SegmentTab } from "@/lib/landing/types";

/** Primary "Get Free Sample" button - opens the enquiry modal. */
export function SampleButton({ source, label = "Get Free Sample", className = "" }: { source: string; label?: string; className?: string }) {
  const { openModal } = useModal();
  return (
    <button
      type="button"
      onClick={() => openModal(source)}
      className={`group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(11,120,208,0.8)] transition-all hover:-translate-y-0.5 hover:bg-teal-dark ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

export function WhatsAppButton({ message, label = "WhatsApp Us", className = "" }: { message: string; label?: string; className?: string }) {
  return (
    <a
      href={siteConfig.whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#CFE3F0] bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-whats hover:text-[#128c4b] ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4 text-whats" />
      {label}
    </a>
  );
}

/** Accessible tablist (arrow keys move between tabs). Every panel stays in the HTML, so all tab copy is indexable. */
export function SegmentTabs({ tabs, label }: { tabs: SegmentTab[]; label: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  function onKey(e: KeyboardEvent, i: number) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div className="rounded-2xl border border-[#DCEAF3] bg-white shadow-sm">
      <div role="tablist" aria-label={label} className="flex gap-1 overflow-x-auto border-b border-[#DCEAF3] p-2">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`${baseId}-tab-${tab.id}`}
            aria-selected={active === i}
            aria-controls={`${baseId}-panel-${tab.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`shrink-0 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
              active === i ? "bg-navy text-white" : "text-muted hover:bg-bgsoft hover:text-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={active !== i}
          className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-navy">{tab.label}</h3>
            <p className="mt-3 max-w-[70ch] leading-relaxed text-muted">{tab.summary}</p>
            <p className="mt-5 rounded-xl bg-bgsoft p-4 text-sm leading-relaxed text-navy">
              <span className="font-semibold">Best for: </span>
              {tab.bestFor}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-dark">Typical roles</p>
            <ul className="mt-3 space-y-2.5">
              {tab.examples.map((ex) => (
                <li key={ex} className="flex items-center gap-2.5 text-sm text-navy">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

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
      Download 20-Row Sample (CSV)
    </button>
  );
}
