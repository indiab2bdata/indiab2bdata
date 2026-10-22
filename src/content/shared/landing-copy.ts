/**
 * Fixed copy used by the landing template (category, state and city pages). Page-specific copy lives in
 * each content file; anything here appears on every landing page, so change it with care.
 */
export const LANDING_COPY = {
  hero: {
    complianceBadge: "DPDP Act 2023 aligned",
    sampleBadge: "Free sample before you pay",
    refreshedPrefix: "Refreshed ",
  },
  stats: {
    records: (name: string) => `${name.replace(/ Database$/, "")} Records`,
    covered: (segmentLabel: string) => `${segmentLabel}s Covered`,
    fields: "Data Fields per Record",
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
    title: "See the Exact Columns You'll Receive",
    text: "These 5 rows are fictional and masked. They show the format only. Your paid file has the same columns, filled with real records that match your filters.",
    /** Screen-reader caption: prefix + page name + suffix. */
    captionPrefix: "Sample ",
    captionSuffix: " records (fictional, masked)",
    complianceLead: "How we source, scrub and remove records:",
    complianceLink: "Data Sourcing & Compliance",
    csvFilename: (csvSlug: string) => `${csvSlug}-sample-data.csv`,
  },
  coverage: {
    eyebrow: "Coverage & fields",
    text: (segmentLabel: string) =>
      `Each record is tagged by ${segmentLabel.toLowerCase()}, so you pay only for the slices you need. Record counts for your exact filters come with your quote.`,
    includes: "Includes",
    records: "Approx. records",
    fill: "Mobile / email fill",
    fieldsHeading: "Fields in every record",
    pricingLabel: "Indicative pricing",
    customQuote: "Custom quote",
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
