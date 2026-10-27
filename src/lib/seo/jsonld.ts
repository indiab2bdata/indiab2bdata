import { siteConfig } from "@/config/site";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";
import { isPlaceholder } from "@/lib/utils";
import type { CustomPage, KeywordPage, LandingPage } from "@/types/landing";

/**
 * JSON-LD builders. Page-level schema is always built from the same content object the page renders,
 * so FAQ, breadcrumb and service text can never drift from what visitors see.
 */

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webPageJsonLd({
  type = "WebPage",
  name,
  description,
  url,
  about,
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  name: string;
  description: string;
  url: string;
  about?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    inLanguage: "en-IN",
    ...(about ? { about } : {}),
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    areaServed: areaServed ? { "@type": "State", name: areaServed } : { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}

export function itemListJsonLd(items: { name: string; url: string }[], name?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

/** Sitewide entity - included once via the root layout. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/favicon.png`,
  sameAs: Object.values(siteConfig.social),
  image: [`${siteConfig.url}/images/favicon.png`, DEFAULT_OG_IMAGE.url],
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Business account, registration and professional-contact database selections by industry and location in India.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneDisplay,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
};

/** Sitewide LocalBusiness entity (same real address/phone as the Organization) - included once via the root layout. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: DEFAULT_OG_IMAGE.url,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: organizationJsonLd.address,
  areaServed: { "@type": "Country", name: "India" },
  parentOrganization: { "@id": `${siteConfig.url}/#organization` },
};

/** Per-page Service schema for a database product. Adds an Offer only once a real price exists. */
export function databaseServiceJsonLd({
  name,
  description,
  url,
  areaServed,
  priceFrom,
}: {
  name: string;
  description: string;
  url: string;
  areaServed?: { type: "State" | "City"; name: string };
  /** Numeric INR price per record, or undefined while it's still a placeholder. */
  priceFrom?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: "B2B contact database",
    name,
    description,
    url,
    areaServed: areaServed ? { "@type": areaServed.type, name: areaServed.name } : { "@type": "Country", name: "India" },
    provider: { "@id": `${siteConfig.url}/#organization` },
    ...(priceFrom
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            priceSpecification: { "@type": "UnitPriceSpecification", price: priceFrom, priceCurrency: "INR", unitText: "record" },
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-IN",
};

/** Schema for a page on the landing template: breadcrumbs, WebPage, Service and FAQPage. */
export function landingJsonLd(page: LandingPage) {
  const url = `${siteConfig.url}${page.path}`;
  const price = Number(page.pricingHint.from.replace(/[^\d.]/g, ""));
  return [
    breadcrumbJsonLd([{ name: "Home", url: siteConfig.url }, ...page.breadcrumbs.map((b) => ({ name: b.label, url: `${siteConfig.url}${b.href}` }))]),
    { ...webPageJsonLd({ name: page.title, description: page.metaDescription, url, about: page.name }), dateModified: `${page.lastUpdated}-01` },
    databaseServiceJsonLd({
      name: page.name,
      description: page.metaDescription,
      url,
      areaServed: page.areaServed,
      priceFrom: !isPlaceholder(page.pricingHint.from) && price > 0 ? price : undefined,
    }),
    faqJsonLd(page.buyerFaqs),
  ];
}

/** Schema for a page on the legacy keyword template. */
export function keywordJsonLd(page: KeywordPage) {
  const url = `${siteConfig.url}/${page.slug}`;
  return [
    breadcrumbJsonLd([
      { name: "Home", url: siteConfig.url },
      { name: page.keyword, url },
    ]),
    webPageJsonLd({ name: page.title, description: page.metaDescription, url, about: page.keyword }),
    faqJsonLd(page.faqs),
    serviceJsonLd({ name: page.keyword, description: page.metaDescription }),
  ];
}

/** Schema for a custom (block-based) category page: breadcrumbs, WebPage, Service (no Offer: priced by quote) and FAQPage. */
export function customJsonLd(page: CustomPage, updated: string) {
  const url = `${siteConfig.url}${page.path}`;
  return [
    breadcrumbJsonLd([
      { name: "Home", url: siteConfig.url },
      { name: "Data Products", url: `${siteConfig.url}/database` },
      { name: page.name, url },
    ]),
    { ...webPageJsonLd({ name: page.title, description: page.metaDescription, url, about: page.name }), dateModified: updated },
    databaseServiceJsonLd({ name: page.name, description: page.metaDescription, url }),
    faqJsonLd(page.faqs),
  ];
}
