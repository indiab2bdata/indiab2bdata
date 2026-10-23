import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { METHODOLOGY_PATH } from "@/config/navigation";
import { METHODOLOGY_NOTE } from "@/content/shared/compliance";

/** Short, honest note on where the data comes from, linking to the full methodology page. */
export function MethodologyNote() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-16 md:px-8 md:pb-20">
      <Reveal>
        <div className="flex flex-col gap-5 rounded-2xl border border-[#DCEAF3] bg-white p-6 shadow-sm md:flex-row md:items-start md:p-8">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
            <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-dark">{METHODOLOGY_NOTE.eyebrow}</span>
            <h2 className="mt-2 font-display text-xl font-extrabold tracking-tight text-navy md:text-2xl">{METHODOLOGY_NOTE.title}</h2>
            <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted md:text-base">{METHODOLOGY_NOTE.text}</p>
            <Link href={METHODOLOGY_PATH} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
              {METHODOLOGY_NOTE.link}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
