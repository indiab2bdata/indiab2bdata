import { siteConfig } from "@/config/site";

const TITLE = "Business Database Selection Resources";
const DESCRIPTION =
  "Compare business-data products and location pages for Indian markets. Review each page's audience, sample format and fields to confirm before requesting a quote.";

/** /blog (guides hub) copy. FAQs are GUIDES_FAQS in content/pages/faqs.ts. */
export const BLOG = {
  meta: { title: TITLE, description: DESCRIPTION, path: "/blog", updated: "2026-10-28" },
  schemaName: `${TITLE} | ${siteConfig.name}`,
  breadcrumb: "Selection Resources",
  hero: {
    eyebrow: "Product Selection",
    title: "Compare Business Database Selections",
    description: "This page collects product and location pages. They describe different business-data selections; use them to compare audiences, fields to confirm and geographic scope.",
    chips: ["Compare Products", "Explore Locations", "Review Sample Formats"],
    source: "guides-hero-form",
    requirement: "B2B Data Consultation",
    formTitle: "Not Sure Which Data You Need?",
  },
  guides: {
    eyebrow: "Product Pages",
    heading: "Business Data Products to Compare",
    /** ItemList schema name. */
    listName: "Business Data Product Pages",
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
  cta: { id: "blog-guides-cta", text: "Want to discuss one of these product selections? Describe your audience and requested fields." },
  cities: { eyebrow: "Location Pages", heading: "City-Wise Company Databases" },
  faq: { id: "guides-faq", eyebrow: "FAQs", heading: "B2B Data Questions, Answered" },
  footer: {
    title: "Talk to a B2B Data Specialist",
    text: "Share your target audience, location and requested fields; ask about sample options and a written quote.",
    source: "guides-footer-form",
    requirement: "B2B Data Consultation",
  },
};
