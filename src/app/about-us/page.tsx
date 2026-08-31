import type { Metadata } from "next";
import Image from "next/image";
import { Handshake, MapPinned, ShieldCheck, Zap } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about IndiaB2BData.com — India's trusted partner for verified B2B mobile number, email and company databases across 700+ cities.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Accuracy First",
    description: "Every record is verified and deduplicated before it reaches you.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Most requests are delivered within 2–6 working hours.",
  },
  {
    icon: MapPinned,
    title: "Pan-India Reach",
    description: "Coverage across 700+ cities, every state and pincode cluster.",
  },
  {
    icon: Handshake,
    title: "Fair Practice",
    description:
      "DND-scrubbed, permission-conscious data, sold for legitimate marketing use only.",
  },
];

const STATS = [
  { value: 50, suffix: "L+", label: "Verified Records" },
  { value: 700, suffix: "+", label: "Cities Covered" },
  { value: 500, suffix: "+", label: "Industry Categories" },
  { value: 10, suffix: "K+", label: "Businesses Served" },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About IndiaB2BData.com"
        title="Helping Indian Businesses Reach the Right Customers"
        description="We build verified B2B databases so sales and marketing teams across India can spend their time selling — not chasing dead numbers."
      />

      <section className="py-20 md:py-28 max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
            Our Story
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
            Built by People Who Understand Sales Teams
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            IndiaB2BData.com started with a simple observation: sales and marketing teams across
            India were losing hours every week dialling outdated numbers and chasing inactive
            leads. We set out to fix that — by building clean, verified, and regularly refreshed
            B2B databases covering every industry, city and state in the country.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Today, we work with real estate firms, EdTech companies, finance and insurance
            agencies, manufacturers, healthcare providers and e-commerce brands — helping them
            connect with genuine decision-makers instead of wasting budget on guesswork.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
            alt="Team working on B2B sales data"
            width={1200}
            height={900}
            className="w-full h-[380px] md:h-[440px] object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-14 mx-auto text-center">
            <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
              What We Stand For
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
              Our Mission &amp; Values
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full bg-bgsoft rounded-2xl p-7 border border-slate-100 transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(11,43,78,0.18)] hover:border-teal">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5 text-teal">
                    <value.icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-navy">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
