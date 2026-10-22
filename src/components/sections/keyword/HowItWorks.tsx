import { KeywordSectionHead } from "@/components/ui/SectionHead";
import { KEYWORD_PROCESS, STEP_PREFIX } from "@/content/shared/process-steps";

/** Four-step process strip on legacy keyword-template pages. */
export function HowItWorks({ title = KEYWORD_PROCESS.title }: { title?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <KeywordSectionHead eyebrow={KEYWORD_PROCESS.eyebrow} title={title} />
      <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#DCEAF3] lg:block" />
        {KEYWORD_PROCESS.steps.map((s, i) => (
          <li key={s.title} className="relative text-center">
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white ring-8 ring-white">
              <s.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
              {STEP_PREFIX}
              {i + 1}
            </p>
            <p className="mt-1 font-display font-bold text-navy">{s.title}</p>
            <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
