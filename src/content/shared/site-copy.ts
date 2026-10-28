/** Site chrome copy: header, footer, mobile bar, floating buttons and small shared blocks used on many pages. */
export const SITE_COPY = {
  logoAlt: "IndiaB2BData.com",
  /** Default alt text for the photo behind inner-page heroes. */
  heroImageAlt: "Sales team working with B2B business data",
  header: {
    sampleCta: "Ask About a Sample",
    menuLabel: "Menu",
  },
  footer: {
    taglineLead: "B2B business data across India",
    tagline: " - business-contact and company-data selections for sales and research teams.",
    quickLinks: "Quick Links",
    states: "Database by State",
    coreDatabases: "Core Databases",
    categories: "Browse by Category",
    followX: "Follow IndiaB2BData on X",
    contact: "Get in Touch",
    copyright: "© 2026 IndiaB2BData.com - All rights reserved.",
    legalNote: "Review the published usage terms before outreach.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
  mobileBar: { label: "Quick contact", call: "Call", whatsapp: "WhatsApp", sample: "Ask About a Sample" },
  floating: { call: "Call us", whatsapp: "Chat on WhatsApp" },
  inlineCta: { button: "Ask About a Sample", whatsapp: "Discuss on WhatsApp" },
  sampleDownload: {
    eyebrow: "Fictional Sample Format",
    /** "{titlePrefix}{product}" */
    titlePrefix: "Download Sample Data - ",
    text: "This fictional, masked CSV demonstrates possible columns only; it does not confirm available inventory or fields for a paid selection:",
    button: "Download Sample (CSV)",
  },
  popularCities: { heading: "Popular Cities", eyebrow: "City Databases" },
  relatedPages: { heading: "Related Searches", eyebrow: "Explore More" },
  coverageLinks: {
    eyebrow: "Pan-India Coverage",
    /** "{topic}{titleSuffix}" */
    titleSuffix: " by State & City",
    /** "{morePrefix}{group}{moreSuffix}" and "{link}{chipSuffix}" for the optional sibling-category block. */
    morePrefix: "More ",
    moreSuffix: " Databases",
    chipSuffix: " Database",
    text: "Browse the state and city pages published on this site for location context. The pages do not establish inventory availability; ask us to confirm your target areas and fields, or",
    link: "view every state database",
  },
  directory: {
    searchLabel: "Search databases",
    searchPlaceholder: "Search a database, e.g. doctors, GST, exporters",
    filterLabel: "Filter by category",
    all: "All",
    unit: (n: number) => (n === 1 ? "database" : "databases"),
    noMatch: "No match. Tell us your audience and we'll check coverage, using the form below.",
  },
};
