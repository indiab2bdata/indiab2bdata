import { siteConfig } from "@/config/site";

const TITLE = "Contact Us";
const DESCRIPTION =
  "Get in touch with IndiaB2BData.com - call, WhatsApp or email us for a free sample of B2B mobile number, email and company data across India.";

/** /contact copy. Its FAQ section shows the homepage set (DEFAULT_FAQS in content/pages/faqs.ts). */
export const CONTACT = {
  meta: { title: TITLE, description: DESCRIPTION, path: "/contact", updated: "2026-09-30" },
  schemaName: `${TITLE} | ${siteConfig.name}`,
  breadcrumb: "Contact Us",
  hero: {
    eyebrow: "Contact Us",
    title: "Let's Get You the Right Data",
    description: "Call, WhatsApp or email us with your requirement - most teams get a free sample within a few hours.",
  },
  /** `kind` picks the icon; "email" renders through <ProtectedEmail> so the address never sits in the static HTML. */
  methods: [
    { kind: "phone", title: "Call Us", detail: siteConfig.phoneDisplay, href: siteConfig.phoneHref, cta: "Call now" },
    {
      kind: "whatsapp",
      title: "WhatsApp",
      detail: "Chat for a quick response",
      href: siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage),
      cta: "Start chat",
      external: true,
    },
    { kind: "email", title: "Email", detail: "Send your requirement by email - we reply within working hours.", href: "", cta: "Send email" },
    { kind: "office", title: "Office", detail: siteConfig.address.display, href: siteConfig.mapsHref, cta: "Get directions", external: true },
  ] as { kind: "phone" | "whatsapp" | "email" | "office"; title: string; detail: string; href: string; cta: string; external?: boolean }[],
  nap: {
    eyebrow: "NAP Details",
    title: "Talk to Our Sales Team",
    phone: "Phone",
    email: "Email",
    address: "Office Address",
    responseLabel: "Response Time",
    response:
      "Most enquiries get a reply within 15–30 minutes on WhatsApp or email, and free sample data is shared once your requirement is confirmed.",
  },
  map: {
    title: "IndiaB2BData.com office location",
    src: "https://www.google.com/maps?q=T-10%2C+Sai+Mandir+St%2C+Mamledarwadi%2C+Malad+West%2C+Mumbai%2C+Maharashtra&z=14&output=embed",
  },
  sample: { slug: "b2b-database-india", label: "B2B Business Database" },
  faq: { id: "contact-faq", eyebrow: "FAQs", heading: "Common Questions Before You Reach Out" },
  related: {
    eyebrow: "Explore",
    heading: "Related Data Products",
    slugs: ["b2b-database-india", "company-database-india", "b2b-leads-database-india"],
  },
};
