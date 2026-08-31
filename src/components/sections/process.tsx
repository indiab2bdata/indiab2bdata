import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    number: "01",
    title: "Share Your Requirement",
    description: "Tell us the industry, city and role you want to target.",
  },
  {
    number: "02",
    title: "Get a Free Sample",
    description: "Review 15–20 sample records before you commit.",
  },
  {
    number: "03",
    title: "Confirm & Pay",
    description: "Choose a package that fits your budget and volume.",
  },
  {
    number: "04",
    title: "Receive Your Data",
    description: "Get a clean Excel/CSV file, ready to import and use.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 max-w-7xl mx-auto px-5 md:px-8">
      <Reveal className="max-w-2xl mb-14 mx-auto text-center">
        <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
          How It Works
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
          From Request to Ready List in Four Steps
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.08}>
            <div className="relative h-full bg-white rounded-2xl p-7 border border-slate-100 transition-shadow hover:shadow-lg">
              <span className="font-display font-extrabold text-teal/25 text-5xl">
                {step.number}
              </span>
              <h3 className="font-display font-bold text-navy mt-3">{step.title}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
