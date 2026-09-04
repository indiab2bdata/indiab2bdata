import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { KeywordPage } from "@/lib/keyword-pages";

export function RelatedLinks({
  pages,
  heading = "Related Searches",
  eyebrow = "Explore More",
}: {
  pages: KeywordPage[];
  heading?: string;
  eyebrow?: string;
}) {
  if (pages.length === 0) return null;

  return (
    <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
      <Reveal className="max-w-2xl mb-10">
        <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">{eyebrow}</span>
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
          {heading}
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page, i) => (
          <Reveal key={page.slug} delay={(i % 3) * 0.06}>
            <Link
              href={`/${page.slug}`}
              className="group flex items-center justify-between gap-3 bg-white rounded-xl px-5 py-4 border border-slate-100 transition-all hover:-translate-y-0.5 hover:border-teal hover:shadow-[0_12px_28px_-10px_rgba(11,43,78,0.18)]"
            >
              <span className="text-sm font-medium text-navy">{page.keyword}</span>
              <ArrowUpRight
                className="w-4 h-4 text-muted shrink-0 transition-colors group-hover:text-teal"
                strokeWidth={2}
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
