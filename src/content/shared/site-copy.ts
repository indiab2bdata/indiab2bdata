/** Site chrome copy: header, footer, mobile bar, floating buttons and small shared blocks used on many pages. */
export const SITE_COPY = {
  logoAlt: "IndiaB2BData.com",
  /** Default alt text for the photo behind inner-page heroes. */
  heroImageAlt: "Sales team working with B2B business data",
  header: {
    sampleCta: "Get Free Sample",
    menuLabel: "Menu",
  },
  footer: {
    tagline: "B2B business data across India - mobile numbers, emails and company records for smarter sales & marketing.",
    quickLinks: "Quick Links",
    states: "Database by State",
    coreDatabases: "Core Databases",
    contact: "Get in Touch",
    copyright: "© 2026 IndiaB2BData.com - All rights reserved.",
    legalNote: "Data provided for legitimate marketing use only.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    credits: "Image Credits",
  },
  mobileBar: { label: "Quick contact", call: "Call", whatsapp: "WhatsApp", sample: "Get Sample" },
  floating: { call: "Call us", whatsapp: "Chat on WhatsApp" },
  inlineCta: { button: "Get Free Sample", whatsapp: "Discuss on WhatsApp" },
  sampleDownload: {
    eyebrow: "Free Sample Format",
    /** "{titlePrefix}{product}" */
    titlePrefix: "Download Sample Data - ",
    text: "See exactly how your file will look. The sample has 20 dummy records (masked, for format preview only) with these columns:",
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
    text: "This data is available across all Indian states and 700+ cities. Browse our state and city hubs to see local coverage, key industries and business clusters, or",
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
