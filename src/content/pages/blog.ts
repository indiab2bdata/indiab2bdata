import { siteConfig } from "@/config/site";

const TITLE = "B2B Data Insights & Guides";
const DESCRIPTION =
  "Guides on B2B databases, GST & company data, business directories and lead generation in India - from the team at IndiaB2BData.com.";

/** /blog (guides hub) copy. FAQs are GUIDES_FAQS in content/pages/faqs.ts. */
export const BLOG = {
  meta: { title: TITLE, description: DESCRIPTION, path: "/blog" },
  schemaName: `${TITLE} | ${siteConfig.name}`,
  breadcrumb: "Guides",
  hero: {
    eyebrow: "Insights & Guides",
    title: "B2B Data Insights & Guides",
    description: "Practical guides on B2B databases, GST & company records, business directories and lead generation - written for Indian sales and marketing teams.",
    chips: ["Practical Guides", "Compliance Tips", "Free Sample Data"],
    source: "guides-hero-form",
    requirement: "B2B Data Consultation",
    formTitle: "Not Sure Which Data You Need?",
  },
  guides: {
    eyebrow: "Popular Guides",
    heading: "Data & Compliance Guides",
    /** ItemList schema name. */
    listName: "Data & Compliance Guides",
    slugs: [
      "gst-database-india",
      "mca-company-database-india",
      "newly-registered-companies-india",
      "manufacturer-database-india",
      "industry-wise-company-database-india",
      "b2b-leads-database-india",
      "bulk-sms-database-india",
      "email-database-india",
      "whatsapp-number-database-india",
      "importers-exporters-database-india",
      "dealers-distributors-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
    ],
  },
  sample: { slug: "b2b-leads-database-india", label: "B2B Leads Database" },
  cta: { id: "blog-guides-cta", text: "Want data matched to a guide above? Tell us your exact requirement." },
  cities: { eyebrow: "Coverage Guides", heading: "City-Wise Company Databases" },
  faq: { id: "guides-faq", eyebrow: "FAQs", heading: "B2B Data Questions, Answered" },
  footer: {
    title: "Talk to a B2B Data Specialist",
    text: "Share your target audience, location and quantity - we'll send free sample records and a custom quote.",
    source: "guides-footer-form",
    requirement: "B2B Data Consultation",
  },
};
