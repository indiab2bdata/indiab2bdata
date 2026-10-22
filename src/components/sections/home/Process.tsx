import { Reveal } from "@/components/ui/Reveal";
import { HOME } from "@/content/pages/home";

const COPY = HOME.process;

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 max-w-7xl mx-auto px-5 md:px-8">
      <Reveal className="max-w-2xl mb-14 mx-auto text-center">
        <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">
          {COPY.eyebrow}
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
          {COPY.title}
        </h2>
      </Reveal>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div
          className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#DCEAF3]"
          aria-hidden="true"
        />
        {COPY.steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.08}>
            <div className="relative h-full bg-white rounded-2xl p-7 border border-[#DCEAF3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="font-display font-extrabold text-teal/20 text-6xl leading-none tracking-tight">
                {step.number}
              </span>
              <h3 className="font-display font-bold text-navy mt-4">{step.title}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
