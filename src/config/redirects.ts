/**
 * Permanent (301/308) redirects. Imported by next.config.ts, so keep this file free of
 * React / lucide imports.
 */

/** Keyword pages merged into a stronger page (consolidations to eliminate near-duplicate thin pages). */
export const retiredKeywordRedirects: Record<string, string> = {
  "b2b-data-provider-india": "/",
  "business-data-provider-india": "/",
  "business-database-india": "/b2b-database-india",
  "verified-business-database-india": "/b2b-database-india",
  "b2b-companies-database-india": "/b2b-database-india",
  "company-contact-database-india": "/company-database-india",
  "indian-company-database": "/company-database-india",
  "business-directory-india": "/company-database-india",
  "company-directory-india": "/company-database-india",
  "city-wise-company-database-india": "/database",
  "state-wise-company-database-india": "/database",
  "registered-companies-database-india": "/company-database-india",
  "business-leads-india": "/b2b-leads-database-india",
  "service-providers-database-india": "/industry-wise-company-database-india",

  // Ultra-similar keyword pages merged into their primary pillar counterpart:
  "importers-database-india": "/importers-exporters-database-india",
  "manufacturing-companies-database-india": "/manufacturer-database-india",
  "jewellers-database-india": "/gems-jewellery-shops-database-india",
  "school-colleges-database": "/educational-institutes-database-india",
};

/** Keyword pages moved to a new slug (content unchanged). */
const renamedKeywordRedirects: Record<string, string> = {
  "/doctors-database-india": "/doctors-database",
  "/dealers-database-india": "/dealers-distributors-database-india",
  "/dealers-database": "/dealers-distributors-database-india",
  "/exporters-database-india": "/importers-exporters-database-india",
  "/exporters-database": "/importers-exporters-database-india",
  "/d-mat-account-holders-database-india": "/demat-account-holders-database-india",
};

/** URLs from the old static site that Google still has indexed or requests. */
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
  "/database.html": "/database",
  "/b2b-database-india.html": "/b2b-database-india",
  "/company-database-india.html": "/company-database-india",
  "/sitemap": "/sitemap.xml",
};

export const permanentRedirects = [
  ...Object.entries(retiredKeywordRedirects).map(([slug, destination]) => ({
    source: `/${slug}`,
    destination,
    permanent: true,
  })),
  ...Object.entries(renamedKeywordRedirects).map(([source, destination]) => ({
    source,
    destination,
    permanent: true,
  })),
  ...Object.entries(legacyRedirects).map(([source, destination]) => ({
    source,
    destination,
    permanent: true,
  })),
  // Catch-all: redirect any other .html page to clean URL
  {
    source: "/:slug((?!api|_next|images).+).html",
    destination: "/:slug",
    permanent: true,
  },
];
