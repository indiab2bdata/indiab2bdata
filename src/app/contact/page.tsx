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
    title: "Office",
    detail: siteConfig.address.display,
    href: siteConfig.mapsHref,
    cta: "Get directions",
    external: true,
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

      <section className="bg-white py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div className="rounded-2xl border border-[#DCEAF3] bg-bgsoft p-6 shadow-sm">
            <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">
              NAP Details
            </span>
            <h3 className="font-display font-extrabold text-2xl text-navy mt-3">
              Talk to Our Sales Team
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-teal shrink-0" strokeWidth={1.8} />
                <span>
                  <strong className="block text-navy">Phone</strong>
                  {siteConfig.phoneDisplay}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-teal shrink-0" strokeWidth={1.8} />
                <span>
                  <strong className="block text-navy">Email</strong>
                  {siteConfig.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-teal shrink-0" strokeWidth={1.8} />
                <span>
                  <strong className="block text-navy">Office Address</strong>
                  {siteConfig.address.display}
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-[#DCEAF3] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">Response Time</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Most enquiries get a reply within 15–30 minutes on WhatsApp or email, and free sample data is usually shared within 2–6 working hours.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#DCEAF3] bg-white shadow-sm">
            <iframe
              title="IndiaB2BData.com office location"
              src="https://www.google.com/maps?q=T-10%2C+Sai+Mandir+St%2C+Mamledarwadi%2C+Malad+West%2C+Mumbai%2C+Maharashtra&z=14&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
