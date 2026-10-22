"use client";

import { useId } from "react";
import { CheckCircle2 } from "lucide-react";
import { Tabs } from "@/components/ui/Tabs";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import type { SegmentTab } from "@/types/landing";

const COPY = LANDING_COPY.segments;

/** Segment breakdown as tabs (e.g. Central / State / PSU / Local bodies). Every panel stays in the HTML. */
export function SegmentTabs({ tabs, label }: { tabs: SegmentTab[]; label: string }) {
  const baseId = useId();
  return (
    <Tabs
      items={tabs}
      label={label}
      idPrefix={baseId}
      renderPanel={(tab) => (
        <>
          <div>
            <h3 className="font-display text-xl font-bold text-navy">{tab.label}</h3>
            <p className="mt-3 max-w-[70ch] leading-relaxed text-muted">{tab.summary}</p>
            <p className="mt-5 rounded-xl bg-bgsoft p-4 text-sm leading-relaxed text-navy">
              <span className="font-semibold">{COPY.bestFor}</span>
              {tab.bestFor}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-dark">{COPY.roles}</p>
            <ul className="mt-3 space-y-2.5">
              {tab.examples.map((ex) => (
                <li key={ex} className="flex items-center gap-2.5 text-sm text-navy">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    />
  );
}
