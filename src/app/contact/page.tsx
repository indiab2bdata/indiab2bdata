import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with IndiaB2BData.com — call, WhatsApp or email us for a free sample of verified B2B mobile number, email and company data across India.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Call Us",
    detail: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
    cta: "Call now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat for a quick response",
    href: siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage),
    cta: "Start chat",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: "Send email",
  },
  {
    icon: MapPin,
    title: "Coverage",
    detail: "Serving all of India",
    href: "/database",
    cta: "Browse by state",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Get You the Right Data"
        description="Call, WhatsApp or email us with your requirement — most teams get a free sample within a few hours."
      />

      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CONTACT_METHODS.map((method, i) => (
            <Reveal key={method.title} delay={i * 0.08}>
              <a
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="group h-full flex flex-col bg-white rounded-2xl p-7 border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal/40"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 transition-colors group-hover:bg-teal group-hover:text-white">
                  <method.icon className="w-6 h-6" strokeWidth={1.6} />
                </div>
                <h3 className="font-display font-bold text-lg text-navy">{method.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{method.detail}</p>
                <span className="mt-4 text-sm font-semibold text-teal">{method.cta} →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <Faq
        id="contact-faq"
        eyebrow="FAQs"
        heading="Common Questions Before You Reach Out"
        background="bgsoft"
      />

      <ContactCta />
    </>
  );
}
