import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: BreadcrumbItem[]; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-1.5 text-xs ${light ? "text-muted" : "text-slate-300"}`}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" strokeWidth={2} />}
            {item.href && !isLast ? (
              <Link href={item.href} className={`transition ${light ? "hover:text-teal" : "hover:text-white"}`}>
                {item.href === "/" ? "India B2B Data Home" : item.label}
              </Link>
            ) : (
              <span aria-current={isLast ? "page" : undefined} className={isLast ? (light ? "font-medium text-navy" : "text-white") : ""}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
