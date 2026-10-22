"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";

type Group = { id: string; heading: string; description: string; links: { href: string; label: string }[] };

/**
 * Grouped, searchable list of every indexable database page. All links are rendered on the
 * server; search only hides non-matching ones, so crawlers always see the full directory.
 */
export function DirectoryBrowser({ groups }: { groups: Group[] }) {
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
  const pill = (on: boolean) =>
    `shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${on ? "bg-navy text-white" : "bg-white text-muted ring-1 ring-[#DCEAF3] hover:text-navy"}`;

  return (
    <div>
      <div className="sticky top-16 z-10 -mx-5 space-y-3 bg-bgsoft/95 px-5 py-4 backdrop-blur md:top-20 md:mx-0 md:rounded-2xl md:px-0">
        <label className="relative block">
          <span className="sr-only">Search databases</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a database, e.g. doctors, GST, exporters"
            className="w-full rounded-full border border-[#DCEAF3] bg-white py-3 pl-11 pr-4 text-sm text-navy placeholder:text-slate-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </label>
        <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by category">
          <button type="button" onClick={() => setActive("all")} className={pill(active === "all")} aria-pressed={active === "all"}>
            All
          </button>
          {groups.map((g) => (
            <button key={g.id} type="button" onClick={() => setActive(g.id)} className={pill(active === g.id)} aria-pressed={active === g.id}>
              {g.heading}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        {total} {total === 1 ? "database" : "databases"}
      </p>

      <div className="mt-6 space-y-12">
        {visible.map((g) => (
          <section key={g.id} id={g.id} className="scroll-mt-40">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy">{g.heading}</h2>
            <p className="mt-1.5 max-w-[70ch] text-muted">{g.description}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex h-full items-center justify-between gap-3 rounded-xl border border-[#DCEAF3] bg-white px-4 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md"
                  >
                    {/database|data\b|leads|records|lists?\b/i.test(l.label) ? l.label : `${l.label} Database`}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted group-hover:text-teal" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {total === 0 && (
          <p className="rounded-xl bg-white p-6 text-center text-muted ring-1 ring-[#DCEAF3]">
            No match. Tell us your audience and we&apos;ll check coverage, using the form below.
          </p>
        )}
      </div>
    </div>
  );
}
