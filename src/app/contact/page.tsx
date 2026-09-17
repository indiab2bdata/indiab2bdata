import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { RelatedLinks } from "@/components/related-links";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { JsonLd } from "@/components/json-ld";
import { keywordPages } from "@/lib/keyword-pages";
import { siteConfig } from "@/lib/site-config";
import { DEFAULT_FAQS } from "@/lib/faq-data";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd, faqJsonLd } from "@/lib/seo";

const TITLE = "Contact Us";
const DESCRIPTION =
  "Get in touch with IndiaB2BData.com — call, WhatsApp or email us for a free sample of verified B2B mobile number, email and company data across India.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Contact Us" },
];

const breadcrumbSchema = breadcrumbJsonLd([
  { name: "Home", url: siteConfig.url },
  { name: "Contact Us", url: `${siteConfig.url}/contact` },
]);

const webPageSchema = webPageJsonLd({
  type: "ContactPage",
  name: `${TITLE} | ${siteConfig.name}`,
  description: DESCRIPTION,
  url: `${siteConfig.url}/contact`,
});

const faqSchema = faqJsonLd(DEFAULT_FAQS);

const relatedPages = keywordPages.filter((k) =>
  ["b2b-database-india", "business-leads-india", "verified-business-database-india"].includes(k.slug)
);

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Call Us",
    detail: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
    cta: "Call now",
  },
  {
    icon: WhatsAppIcon,
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
      <JsonLd data={[breadcrumbSchema, webPageSchema, faqSchema]} />

      <PageHero
        eyebrow="Contact Us"
        title="Let's Get You the Right Data"
        description="Call, WhatsApp or email us with your requirement — most teams get a free sample within a few hours."
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CONTACT_METHODS.map((method, i) => (
            <Reveal key={method.title} delay={i * 0.08}>
              <a
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="group h-full flex flex-col bg-white rounded-2xl p-7 border border-[#DCEAF3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal/40"
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

      <RelatedLinks pages={relatedPages} eyebrow="Explore" heading="Related Data Products" />

      <ContactCta />
    </>
  );
}
