/**
 * Fixed copy used by the legacy keyword template (category pages not yet migrated to the landing template).
 * Page-specific copy lives in each content/categories file's `keyword` object.
 */
export const KEYWORD_COPY = {
  /** Site-wide inventory figures are omitted unless supported by current evidence. */
  stats: [],
  overview: {
    eyebrow: "Overview",
    title: (product: string) => `What You Get with Our ${product}`,
  },
  record: {
    cardTitle: "Fields to discuss for this selection",
    tiles: [
      ["Format", "Confirm in quote"],
      ["Fields", "Confirm availability"],
      ["Preview", "Fictional rows"],
    ],
  },
  why: {
    eyebrow: "Why IndiaB2BData",
    title: "Built for Accurate, Targeted Outreach",
  },
  useCases: {
    eyebrow: "Use Cases",
    title: (product: string) => `How Businesses Use Our ${product}`,
    defaultIntro: "Teams across India use this data to reach the right people faster - by phone, email, WhatsApp or SMS.",
  },
  process: {
    title: (product: string) => `How We Build & Deliver Your ${product}`,
  },
  cta: {
    text: (keyword: string) => `Need ${keyword} filtered to your city or industry?`,
    button: "Talk to Our Team",
    whatsapp: (keyword: string) => `Hi, I would like to discuss the ${keyword}. Please help me check coverage and sample options.`,
    heroTitle: (product: string) => `Get Your ${product}`,
    footerTitle: (product: string) => `Ready to Get Your ${product}?`,
    footerText: "Share your target audience, location and quantity. Ask which sample options and fields can be confirmed, and request a written quote.",
  },
  faq: {
    eyebrow: "FAQs",
    heading: (product: string) => `Frequently Asked Questions - ${product}`,
  },
  related: {
    eyebrow: "Explore More",
    heading: "Related Databases",
  },
};
