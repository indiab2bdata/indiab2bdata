import { SectionHead } from "@/components/ui/SectionHead";
import { shell } from "@/components/ui/styles";
import { LANDING_PROCESS, STEP_PREFIX } from "@/content/shared/process-steps";

/** Four-step "How it works" strip on landing pages. Step copy (and its claims) lives in content/shared. */
export function ProcessSteps() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className={shell}>
        <SectionHead eyebrow={LANDING_PROCESS.eyebrow} title={LANDING_PROCESS.title} center />
        <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#DCEAF3] lg:block" />
          {LANDING_PROCESS.steps.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white ring-8 ring-white">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-dark">
                {STEP_PREFIX}
                {i + 1}
              </p>
              <p className="mt-1 font-display font-bold text-navy">{s.title}</p>
              <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-muted">{s.text}</p>
              <span className="mt-3 inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-dark">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
