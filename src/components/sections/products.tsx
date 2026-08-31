import { Building2, Globe2, Layers, Mail, MessageSquareText, Smartphone } from "lucide-react";
import { Reveal } from "@/components/reveal";

const PRODUCTS = [
  {
    icon: Smartphone,
    title: "Mobile Number Database",
    description:
      "Direct-dial mobile numbers of decision-makers, filtered by city, pincode and job role.",
  },
  {
    icon: Mail,
    title: "Email Database",
    description:
      "Bounce-checked corporate email IDs, ready for your next outreach or newsletter campaign.",
  },
  {
    icon: Building2,
    title: "GST & Company Database",
    description:
      "Registered company details with GSTIN, turnover band and business category for B2B targeting.",
  },
  {
    icon: Layers,
    title: "Industry-Wise Leads",
    description:
      "Pre-segmented lists across 500+ industries — real estate, education, finance, healthcare and more.",
  },
  {
    icon: MessageSquareText,
    title: "Bulk WhatsApp/SMS Data",
    description: "DND-scrubbed number sets, formatted and ready for your bulk WhatsApp or SMS campaigns.",
  },
  {
    icon: Globe2,
    title: "Custom / Pan-India Data",
    description:
      "Tell us your exact target — state, city cluster or niche — we'll build a custom list for you.",
  },
];

export function Products() {
  return (
    <section id="offer" className="py-20 md:py-28 max-w-7xl mx-auto px-5 md:px-8">
      <Reveal className="max-w-2xl mb-14">
        <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
          What We Offer
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
          Data Products Built for Every Team
        </h2>
        <p className="mt-4 text-muted leading-relaxed">
          Pick a ready-made database or tell us exactly who you want to reach — we&apos;ll
          customise it by city, industry, turnover or designation.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.title} delay={(i % 3) * 0.08}>
            <div className="group h-full bg-white rounded-2xl p-7 border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(11,43,78,0.18)] hover:border-teal">
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 transition-colors group-hover:bg-teal/10">
                <product.icon className="w-6 h-6 text-navy group-hover:text-teal transition-colors" strokeWidth={1.6} />
              </div>
              <h3 className="font-display font-bold text-lg text-navy">{product.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{product.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
