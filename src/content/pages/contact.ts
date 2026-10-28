import { siteConfig } from "@/config/site";

const TITLE = "Contact Us";
const DESCRIPTION =
  "Contact IndiaB2BData.com by phone, WhatsApp or email to discuss company and business-contact data selections, available fields and sample options.";

/** /contact copy. Its FAQ section shows the homepage set (DEFAULT_FAQS in content/pages/faqs.ts). */
export const CONTACT = {
  meta: { title: TITLE, description: DESCRIPTION, path: "/contact", updated: "2026-10-28" },
  schemaName: `${TITLE} | ${siteConfig.name}`,
  breadcrumb: "Contact Us",
  hero: {
    eyebrow: "Contact Us",
    title: "Let's Get You the Right Data",
    description: "Call, WhatsApp or email with your target audience, location and requested fields. Ask which coverage and sample options can be confirmed.",
  },
  /** `kind` picks the icon; "email" renders through <ProtectedEmail> so the address never sits in the static HTML. */
  methods: [
    { kind: "phone", title: "Call Us", detail: siteConfig.phoneDisplay, href: siteConfig.phoneHref, cta: "Call now" },
    {
      kind: "whatsapp",
      title: "WhatsApp",
      detail: "Message us to discuss fields, coverage and sample options",
      href: siteConfig.whatsappHref(siteConfig.defaultWhatsappMessage),
      cta: "Start chat",
      external: true,
    },
    { kind: "email", title: "Email", detail: "Email your target audience, location and requested fields.", href: "", cta: "Send email" },
    { kind: "office", title: "Office", detail: siteConfig.address.display, href: siteConfig.mapsHref, cta: "Get directions", external: true },
  ] as { kind: "phone" | "whatsapp" | "email" | "office"; title: string; detail: string; href: string; cta: string; external?: boolean }[],
  nap: {
    eyebrow: "NAP Details",
    title: "Talk to Our Sales Team",
    phone: "Phone",
    email: "Email",
    address: "Office Address",
    responseLabel: "Before You Order",
    response: "Ask for the available fields, geographic scope, sample options, counting unit and quote for your requirement. Confirm any delivery or refresh terms in writing.",

  },
  map: {
    title: "IndiaB2BData.com office location",
    eyebrow: "Office Location",
    heading: "Find our office",
    directionsLabel: "Open in Google Maps",
    src: "https://www.google.com/maps?q=19.1839318%2C72.844508&z=14&output=embed",
  },
  sample: { slug: "b2b-database-india", label: "B2B Business Database" },
  faq: { id: "contact-faq", eyebrow: "FAQs", heading: "Common Questions Before You Reach Out" },
  related: {
    eyebrow: "Explore",
    heading: "Related Data Products",
    slugs: ["b2b-database-india", "company-database-india", "b2b-leads-database-india"],
  },
};
