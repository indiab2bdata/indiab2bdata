/**
 * Fixed copy used by the landing template (category, state and city pages). Page-specific copy lives in
 * each content file; anything here appears on every landing page, so change it with care.
 */
export const LANDING_COPY = {
  hero: {
    complianceBadge: "Review sourcing details",
    sampleBadge: "Fictional format preview",
    refreshedPrefix: "Refreshed ",
  },
  stats: {
    records: "Count for your filters",
    covered: (segmentLabel: string) => `${segmentLabel} segments listed`,
    fields: "Potential fields to confirm",
    refreshed: "Data Last Refreshed",
  },
  segments: {
    eyebrow: "Who's in this database",
    title: (name: string) => `Inside the ${name}`,
    bestFor: "Best for: ",
    roles: "Typical roles",
  },
  sample: {
    eyebrow: "Sample data preview",
    title: "Illustrative Sample Format",
    text: "These five rows are fictional and masked. They illustrate possible columns only; they do not represent available inventory or confirm that a field can be supplied. Confirm the fields and coverage for your selection before purchase.",
    /** Screen-reader caption: prefix + page name + suffix. */
    captionPrefix: "Sample ",
    captionSuffix: " records (fictional, masked)",
    complianceLead: "Review sourcing, limitations and the removal process:",
    complianceLink: "Data Sourcing & Compliance",
    csvFilename: (csvSlug: string) => `${csvSlug}-sample-data.csv`,
  },
  coverage: {
    eyebrow: "Coverage & fields",
    text: (segmentLabel: string) => `The ${segmentLabel.toLowerCase()} examples on this page describe possible selection dimensions; they do not confirm current inventory or field availability. Ask for a dated count and a sample matching your filters.`,
    includes: "Market context",
    records: "Approx. records",
    fill: "Field availability",
    fieldsHeading: "Potential fields to confirm",
    pricingLabel: "Written quote",
    customQuote: "Ask for quote",
    from: (price: string) => `From ${price}`,
  },
  useCases: {
    eyebrow: "Use cases",
    title: (name: string) => `What Teams Do With the ${name}`,
  },
  guide: { eyebrow: "Buyer's guide" },
  testimonials: {
    eyebrow: "Client feedback",
    title: "What Buyers of This Data Say",
  },
  related: {
    eyebrow: "Related databases",
    title: "Often Bought Together",
  },
  browse: {
    eyebrow: "Browse by category",
    title: "Explore Other Database Categories",
    viewAll: "View all databases",
    listsSuffix: " lists",
    /** Product groups shown in the "Browse by category" card on landing pages, in order. */
    groups: ["professionals", "company-records", "trade-industry", "consumer", "education-web", "registry"],
  },
  faq: {
    eyebrow: "Buyer FAQs",
    heading: (name: string) => `${name}: Buyer Questions`,
  },
  disclaimer: {
    refreshedPrefix: "Data last refreshed: ",
  },
};
