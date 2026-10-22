import { Handshake, MapPinned, ShieldCheck, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

const TITLE = "About Us";
const DESCRIPTION =
  "Learn about IndiaB2BData.com - India's trusted partner for verified B2B mobile number, email and company databases across 700+ cities.";

/** /about copy. FAQs are ABOUT_FAQS in content/pages/faqs.ts. */
export const ABOUT = {
  meta: {
    title: TITLE,
    description: DESCRIPTION,
    path: "/about",
    image: { url: `${siteConfig.url}/images/about/team.jpg`, width: 1600, height: 1067, alt: "IndiaB2BData.com team" },
  },
  /** WebPage schema name. */
  schemaName: `${TITLE} | ${siteConfig.name}`,
  breadcrumb: "About Us",
  hero: {
    eyebrow: "About IndiaB2BData.com",
    title: "Helping Indian Businesses Reach the Right Customers",
    description: "We build verified B2B databases so sales and marketing teams across India can spend their time selling - not chasing dead numbers.",
    chips: ["50L+ Verified Records", "700+ Cities", "500+ Industries"],
    source: "about-hero-form",
    requirement: "B2B Business Database",
    formTitle: "Get Your Free Sample",
  },
  story: {
    eyebrow: "Our Story",
    title: "Built by People Who Understand Sales Teams",
    paragraphs: [
      "IndiaB2BData.com started with a simple observation: sales and marketing teams across India were losing hours every week dialling outdated numbers and chasing inactive leads. We set out to fix that - by building clean, verified, and regularly refreshed B2B databases covering every industry, city and state in the country.",
      "Today, we work with real estate firms, EdTech companies, finance and insurance agencies, manufacturers, healthcare providers and e-commerce brands - helping them connect with genuine decision-makers instead of wasting budget on guesswork.",
    ],
    imageAlt: "Team working on B2B sales data",
  },
  values: {
    eyebrow: "What We Stand For",
    title: "Our Mission & Values",
    items: [
      { icon: ShieldCheck, title: "Accuracy First", description: "Every record is verified and deduplicated before it reaches you." },
      { icon: Zap, title: "Speed", description: "Free sample first, then delivery on a timeline agreed with your quote." },
      { icon: MapPinned, title: "Pan-India Reach", description: "Coverage across 700+ cities, every state and pincode cluster." },
      {
        icon: Handshake,
        title: "Fair Practice",
        description: "Permission-conscious data, sold for legitimate B2B marketing use only, with removal on request.",
      },
    ],
  },
  stats: [
    { value: 50, suffix: "L+", label: "Verified Records" },
    { value: 700, suffix: "+", label: "Cities Covered" },
    { value: 500, suffix: "+", label: "Industry Categories" },
    { value: 10, suffix: "K+", label: "Businesses Served" },
  ],
  ctas: {
    story: { id: "about-story-cta", text: "Want to see the quality of our data before you commit?" },
    values: { id: "about-values-cta", text: "Ready to reach genuine decision-makers across India?", buttonLabel: "Talk to Our Team" },
  },
  sample: { slug: "b2b-database-india", label: "B2B Business Database" },
  coverageTopic: "B2B Business Data",
  faq: { id: "about-faq", eyebrow: "FAQs", heading: "About IndiaB2BData.com - FAQs" },
  related: {
    eyebrow: "Explore",
    heading: "Related Data Products",
    slugs: ["b2b-database-india", "company-database-india", "b2b-leads-database-india", "gst-database-india", "manufacturer-database-india", "mobile-number-database-india"],
  },
  footer: {
    title: "Ready to Reach Genuine Decision-Makers?",
    text: "Share your target audience, location and quantity - we'll send free sample records and a custom quote.",
    source: "about-footer-form",
    requirement: "B2B Business Database",
  },
};
