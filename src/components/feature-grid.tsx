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
    <div className={`grid ${colsClass} gap-6 md:gap-8`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 4) * 0.08}>
          <div className="group h-full bg-white rounded-2xl p-7 border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal/40">
            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
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
