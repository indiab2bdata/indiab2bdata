"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

/**
 * Accessible tabs (role=tablist/tab/tabpanel, roving tabindex, arrow keys move between tabs).
 * Every panel is always rendered ("force-mounted") and inactive ones are hidden with the `hidden`
 * attribute, so all panel text is in the server HTML and indexable.
 *
 * `idPrefix` comes from the caller's useId(), so ids stay stable between server and client render.
 */
export function Tabs<T extends { id: string; label: string }>({
  items,
  label,
  idPrefix,
  renderPanel,
}: {
  items: T[];
  /** Accessible name of the tablist. */
  label: string;
  idPrefix: string;
  renderPanel: (item: T) => ReactNode;
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: KeyboardEvent, i: number) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + items.length) % items.length;
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div className="rounded-2xl border border-[#DCEAF3] bg-white shadow-sm">
      <div role="tablist" aria-label={label} className="flex gap-1 overflow-x-auto border-b border-[#DCEAF3] p-2">
        {items.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`${idPrefix}-tab-${item.id}`}
            aria-selected={active === i}
            aria-controls={`${idPrefix}-panel-${item.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`shrink-0 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
              active === i ? "bg-navy text-white" : "text-muted hover:bg-bgsoft hover:text-navy"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${idPrefix}-panel-${item.id}`}
          aria-labelledby={`${idPrefix}-tab-${item.id}`}
          hidden={active !== i}
          className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8"
        >
          {renderPanel(item)}
        </div>
      ))}
    </div>
  );
}
