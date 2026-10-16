import Link from "next/link";
import { Building2, Globe2, Layers, Mail, MessageSquareText, Smartphone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PRODUCT_GROUPS } from "@/lib/product-groups";

const PRODUCTS = [
  {
    href: "/mobile-number-database-india",
    icon: Smartphone,
    title: "Mobile Number Database",
    description:
      "Direct-dial mobile numbers of decision-makers, filtered by city, pincode and job role.",
  },
  {
    href: "/email-database-india",
    icon: Mail,
    title: "Email Database",
    description:
      "Bounce-checked corporate email IDs, ready for your next outreach or newsletter campaign.",
  },
  {
    href: "/gst-database-india",
    icon: Building2,
    title: "GST & Company Database",
    description:
      "Registered company details with GSTIN, turnover band and business category for B2B targeting.",
  },
  {
    href: "/industry-wise-company-database-india",
    icon: Layers,
    title: "Industry-Wise Leads",
    description:
      "Pre-segmented lists across 500+ industries - real estate, education, finance, healthcare and more.",
  },
  {
    href: "/bulk-sms-database-india",
    icon: MessageSquareText,
    title: "Bulk WhatsApp/SMS Data",
    description: "DND-scrubbed number sets, formatted and ready for your bulk WhatsApp or SMS campaigns.",
  },
  {
    href: "/contact",
    icon: Globe2,
    title: "Custom / Pan-India Data",
    description:
      "Tell us your exact target - state, city cluster or niche - we'll build a custom list for you.",
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
          Pick a ready-made database or tell us exactly who you want to reach - we&apos;ll
          customise it by city, industry, turnover or designation.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.title} delay={(i % 3) * 0.08}>
            <Link
              href={product.href}
              className="group relative block h-full bg-white rounded-2xl p-7 border border-[#DCEAF3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal/40 overflow-hidden">
              <div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-teal/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
              <div className="relative w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 transition-colors group-hover:bg-teal group-hover:text-white">
                <product.icon className="w-6 h-6" strokeWidth={1.6} />
              </div>
              <h3 className="relative font-display font-bold text-lg text-navy">{product.title}</h3>
              <p className="relative mt-2 text-sm text-muted leading-relaxed">{product.description}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <nav aria-label="All data products" className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8">
        {PRODUCT_GROUPS.map((group) => (
          <div key={group.heading}>
            <h3 className="font-display font-bold text-navy text-sm mb-3">{group.heading}</h3>
            <ul className="space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-teal hover:underline underline-offset-4 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </section>
  );
}
