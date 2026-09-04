import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Checklist({ items }: { items: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <Reveal key={item} delay={(i % 2) * 0.08}>
          <div className="flex items-start gap-3 bg-bgsoft rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-sm text-navy/85 leading-relaxed">{item}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
