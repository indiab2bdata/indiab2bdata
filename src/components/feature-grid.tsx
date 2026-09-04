import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";

export type FeatureGridItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureGrid({
  items,
  columns = 4,
}: {
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
}) {
  const colsClass =
    columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid ${colsClass} gap-6`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 4) * 0.08}>
          <div className="h-full bg-white rounded-2xl p-7 border border-slate-100 transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(11,43,78,0.18)] hover:border-teal">
            <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 text-navy">
              <item.icon className="w-6 h-6" strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-bold text-lg text-navy">{item.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
