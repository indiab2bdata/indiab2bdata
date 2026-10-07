/**
 * Permanent (301/308) redirects. Imported by next.config.ts, so keep this file free of
 * React / lucide imports.
 */

/** Keyword pages merged into a stronger page (30 -> 16 consolidation). */
export const retiredKeywordRedirects: Record<string, string> = {
  "b2b-data-provider-india": "/",
  "business-data-provider-india": "/",
  "business-database-india": "/b2b-database-india",
  "verified-business-database-india": "/b2b-database-india",
  "b2b-companies-database-india": "/b2b-database-india",
  "company-contact-database-india": "/b2b-database-india",
  "indian-company-database": "/company-database-india",
  "business-directory-india": "/company-database-india",
  "company-directory-india": "/company-database-india",
  "city-wise-company-database-india": "/database",
  "state-wise-company-database-india": "/database",
  "registered-companies-database-india": "/mca-company-database-india",
  "business-leads-india": "/b2b-leads-database-india",
  "service-providers-database-india": "/industry-wise-company-database-india",
};

/** URLs from the old static site that Google still has indexed. */
const legacyRedirects: Record<string, string> = {
  "/about-us": "/about",
  "/about-us.html": "/about",
  "/about.html": "/about",
  "/index.html": "/",
  "/contact.html": "/contact",
  "/contact-us": "/contact",
  "/contact-us.html": "/contact",
  "/privacy-policy.html": "/privacy-policy",
  "/terms-and-conditions.html": "/terms-and-conditions",
};

export const permanentRedirects = [
  ...Object.entries(retiredKeywordRedirects).map(([slug, destination]) => ({
    source: `/${slug}`,
    destination,
    permanent: true,
  })),
  ...Object.entries(legacyRedirects).map(([source, destination]) => ({
    source,
    destination,
    permanent: true,
  })),
];
