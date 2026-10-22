import { siteConfig } from "@/config/site";

const TITLE = "B2B Database Directory India | All Categories & States";
const DESCRIPTION =
  "Every IndiaB2BData database in one place: professionals, companies, registry, trade, consumer and education data, plus state databases for Maharashtra, Gujarat, Delhi, Karnataka and more.";

/** /database hub copy. FAQs are DATABASE_HUB_FAQS in content/pages/faqs.ts. */
export const DATABASE_HUB = {
  meta: {
    title: TITLE,
    description: DESCRIPTION,
    path: "/database",
    image: { url: `${siteConfig.url}/images/keywords/city-skyline.jpg`, width: 1200, height: 800, alt: "City skyline representing pan-India business coverage" },
  },
  schemaName: `${TITLE} | ${siteConfig.name}`,
  /** ItemList schema name. */
  listName: "IndiaB2BData Database Directory",
  breadcrumb: "Database Directory",
  /** Directory group for live pages that are not in any navigation group. */
  moreGroup: { id: "more", heading: "More Databases", description: "Specialist lists that don't fit a single category." },
  stateSchemaName: (state: string) => `${state} Business Database`,
  hero: {
    eyebrow: "Database Directory",
    title: "Every B2B Database We Offer, in One Place",
    description: (categories: number, states: number) =>
      `Browse ${categories} category databases and ${states} state databases. Search by audience, or tell us your requirement and we'll build a custom list.`,
    source: "database-hub-hero-form",
    requirement: "State-Wise Business Database",
    formTitle: "Get Your State-Wise Data",
  },
  categories: { eyebrow: "Browse by Category", title: "Find Your Audience" },
  states: {
    eyebrow: "Browse by Location",
    title: "State Databases",
    text: "Each state page breaks down coverage by city and lists the industries that state is strongest in.",
    more: (n: number) => ` +${n} more`,
    cta: "View Database",
  },
  cities: { eyebrow: "Browse by Location", heading: "City Databases" },
  sample: { slug: "state-wise-business-database", label: "State-Wise Business Database" },
  cta: { id: "database-hub-cta", text: "Don't see your state listed? We cover all of India - tell us what you need.", buttonLabel: "Talk to Our Team" },
  faq: { id: "database-hub-faq", eyebrow: "FAQs", heading: "State-Wise Database FAQs" },
  related: {
    eyebrow: "Related Databases",
    heading: "Explore More Data Products",
    slugs: [
      "b2b-database-india",
      "company-database-india",
      "industry-wise-company-database-india",
      "gst-database-india",
      "mca-company-database-india",
      "newly-registered-companies-india",
      "manufacturer-database-india",
      "b2b-leads-database-india",
      "dealers-distributors-database-india",
    ],
  },
  footer: {
    title: "Need Data for a Specific State or City?",
    text: "Share your target audience, location and quantity - we'll send free sample records and a custom quote.",
    source: "database-hub-footer-form",
    requirement: "State-Wise Business Database",
  },
};
