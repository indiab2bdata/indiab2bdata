"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Accessible accordion: each trigger is <h3><button aria-expanded aria-controls>, each panel is
 * role="region" aria-labelledby. Every panel is always rendered ("force-mounted"); closed panels are
 * collapsed with CSS and made `inert`, never unmounted, so all answer text is in the server HTML.
 *
 * `idPrefix` comes from the caller's useId(), so ids stay stable between server and client render.
 */
export function Accordion({
  items,
  idPrefix,
  defaultOpen = 0,
  closedClassName,
}: {
  items: { key: string; title: ReactNode; content: ReactNode }[];
  idPrefix: string;
  /** Index open on first render, or null for all closed. */
  defaultOpen?: number | null;
  /** Background/border classes for a closed item (open items get the highlight style). */
  closedClassName: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const triggerId = `${idPrefix}-q${i}`;
        const panelId = `${idPrefix}-a${i}`;
        return (
          <div
            key={item.key}
            className={`${isOpen ? "bg-teal/[0.04] border-l-2 border-teal" : closedClassName} rounded-xl overflow-hidden transition-colors duration-300`}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={triggerId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-navy text-sm md:text-base cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                {item.title}
                <ChevronDown
                  aria-hidden="true"
                  className={`w-[18px] h-[18px] shrink-0 text-teal transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
