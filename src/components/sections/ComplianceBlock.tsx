import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { shell } from "@/components/ui/styles";
import { COMPLIANCE_PATH } from "@/config/navigation";
import { COMPLIANCE_BLOCK } from "@/content/shared/compliance";

/** Sitewide trust block - the page's one dark section. Points (and their claims) live in content/shared. */
export function ComplianceBlock() {
  const { points } = COMPLIANCE_BLOCK;
  return (
    <section className="relative overflow-hidden bg-navy-dark py-16 md:py-20">
      <div className={shell}>
        <SectionHead dark eyebrow={COMPLIANCE_BLOCK.eyebrow} title={COMPLIANCE_BLOCK.title} text={COMPLIANCE_BLOCK.text} />
        <div className={`grid gap-5 sm:grid-cols-2 ${points.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p.icon className="h-5 w-5 text-teal-light" />
                <p className="mt-3 font-display font-bold text-white">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link
          href={COMPLIANCE_PATH}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          {COMPLIANCE_BLOCK.link}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
