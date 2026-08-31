"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useModal } from "@/components/modal-context";

const PLANS = [
  {
    id: "pricing-starter",
    name: "Starter",
    tagline: "For small businesses testing a new market",
    price: "₹2,999",
    period: "/list",
    features: ["Up to 5,000 records", "1 city or district", "Excel/CSV format"],
    cta: "Choose Starter",
    highlight: false,
  },
  {
    id: "pricing-business",
    name: "Business",
    tagline: "For growing sales & marketing teams",
    price: "₹8,999",
    period: "/list",
    features: [
      "Up to 25,000 records",
      "Up to 5 cities/states",
      "Industry + role filters",
      "Free 1 data refresh",
    ],
    cta: "Choose Business",
    highlight: true,
  },
  {
    id: "pricing-enterprise",
    name: "Enterprise",
    tagline: "For agencies & pan-India campaigns",
    price: "Custom",
    period: "",
    features: [
      "Unlimited records",
      "Pan-India coverage",
      "Dedicated account manager",
      "Monthly refresh included",
    ],
    cta: "Get Custom Quote",
    highlight: false,
  },
];

export function Pricing() {
  const { openModal } = useModal();

  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-14 mx-auto text-center">
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
            Packages
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
            Simple Pricing, No Hidden Costs
          </h2>
          <p className="mt-4 text-muted">
            Exact pricing depends on filters — these are starting packages. Get a custom quote
            in the popup form.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1}>
              <div
                className={
                  plan.highlight
                    ? "rounded-2xl p-8 bg-navy text-white relative shadow-2xl md:scale-[1.03]"
                    : "h-full rounded-2xl p-8 border border-slate-200 transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(11,43,78,0.18)] hover:border-teal"
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 right-8 bg-amber text-navy text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`font-display font-bold text-lg ${plan.highlight ? "text-white" : "text-navy"}`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.highlight ? "text-slate-300" : "text-muted"}`}>
                  {plan.tagline}
                </p>
                <p
                  className={`font-display font-extrabold text-3xl mt-5 ${plan.highlight ? "text-white" : "text-navy"}`}
                >
                  {plan.price}
                  <span
                    className={`text-sm font-normal ${plan.highlight ? "text-slate-300" : "text-muted"}`}
                  >
                    {plan.period}
                  </span>
                </p>
                <ul
                  className={`mt-6 space-y-3 text-sm ${plan.highlight ? "text-slate-100" : "text-navy/80"}`}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-teal-light" : "text-teal"}`}
                        strokeWidth={2.4}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(plan.id)}
                  className={
                    plan.highlight
                      ? "w-full mt-8 bg-teal hover:bg-teal-dark text-white font-semibold py-3 rounded-full transition"
                      : "w-full mt-8 border-2 border-navy text-navy font-semibold py-3 rounded-full hover:bg-navy hover:text-white transition"
                  }
                >
                  {plan.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
