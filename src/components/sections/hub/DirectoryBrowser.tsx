"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { SITE_COPY } from "@/content/shared/site-copy";
import styles from "./DirectoryBrowser.module.css";

const COPY = SITE_COPY.directory;

type Group = { id: string; heading: string; description: string; href?: string; links: { href: string; label: string }[] };

/**
 * Searchable directory. The hub shows short previews with crawlable category links;
 * category pages render their full lists so every database remains discoverable.
 */
export function DirectoryBrowser({ groups, previewLimit }: { groups: Group[]; previewLimit?: number }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");
  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      groups
        .filter((g) => active === "all" || g.id === active)
        .map((g) => ({ ...g, links: q ? g.links.filter((l) => l.label.toLowerCase().includes(q)) : g.links }))
        .filter((g) => g.links.length > 0),
    [groups, active, q]
  );
  const total = visible.reduce((n, g) => n + g.links.length, 0);
  const shown = visible.reduce((n, g) => n + Math.min(g.links.length, previewLimit ?? g.links.length), 0);
  const pill = (on: boolean) =>
    `shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${on ? "bg-navy text-white" : "bg-white text-muted ring-1 ring-[#DCEAF3] hover:text-navy"}`;

  return (
    <div>
      <div className="sticky top-16 z-10 -mx-5 space-y-3 bg-bgsoft/95 px-5 py-4 backdrop-blur md:top-20 md:mx-0 md:rounded-2xl md:px-0">
        <label className="relative block">
          <span className="sr-only">{COPY.searchLabel}</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={COPY.searchPlaceholder}
            className="w-full rounded-full border border-[#DCEAF3] bg-white py-3 pl-11 pr-4 text-sm text-navy placeholder:text-slate-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </label>
        <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label={COPY.filterLabel}>
          <button type="button" onClick={() => setActive("all")} className={pill(active === "all")} aria-pressed={active === "all"}>
            {COPY.all}
          </button>
          {groups.map((g) => (
            <button key={g.id} type="button" onClick={() => setActive(g.id)} className={pill(active === g.id)} aria-pressed={active === g.id}>
              {g.heading}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        {shown < total ? `Showing ${shown} of ${total}` : total} {COPY.unit(total)}
      </p>

      <div className="mt-6 space-y-12">
        {visible.map((g) => (
          <section key={g.id} id={g.id} className="scroll-mt-40">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy">{g.heading}</h2>
            <p className="mt-1.5 max-w-[70ch] text-muted">{g.description}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.links.slice(0, previewLimit).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={styles.link}
                  >
                    {/database|data\b|leads|records|lists?\b/i.test(l.label) ? l.label : `${l.label} Database`}
                    <span className={styles.arrow} aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
            {previewLimit && g.href && (
              <Link href={g.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark hover:underline underline-offset-4">
                View all {g.heading.toLowerCase()} databases ({g.links.length})
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </Link>
            )}
          </section>
        ))}
        {total === 0 && (
          <p className="rounded-xl bg-white p-6 text-center text-muted ring-1 ring-[#DCEAF3]">
            {COPY.noMatch}
          </p>
        )}
      </div>
    </div>
  );
}
