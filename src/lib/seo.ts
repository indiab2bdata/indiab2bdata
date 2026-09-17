import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type OgImage = { url: string; width?: number; height?: number; alt?: string };

const DEFAULT_OG_IMAGE: OgImage = {
  url: `${siteConfig.url}/images/home/hero.jpg`,
  width: 1200,
  height: 900,
  alt: `${siteConfig.name} — Verified B2B business data across India`,
};

/** Resolves a site-relative path to an absolute https://... URL. */
export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Builds the full title/description/canonical/OG/Twitter block for a page.
 * Every route should call this so canonical + social previews are never
 * silently missing (Next.js metadata is only shallow-merged from the root
 * layout, so a page that skips `openGraph` entirely loses it — see
 * node_modules/next/dist/docs/.../generate-metadata.md#merging).
 */
export function pageMetadata({
  title,
  titleTag = title,
  description,
  path,
  keywords,
  image,
}: {
  title: string;
  /** Overrides the <title> tag independently of the OG/Twitter title — pass
   * `null` to skip the <title> tag entirely and let it inherit the layout's
   * default (used on the homepage, which shouldn't get the title template
   * applied twice). */
  titleTag?: string | null;
  description: string;
  path: string;
  keywords?: string[];
  image?: OgImage;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    ...(titleTag ? { title: titleTag } : {}),
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

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

/** Sitewide entity — included once via the root layout. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/favicon.png`,
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Verified B2B mobile number, email and company databases across 700+ Indian cities and 500+ industries.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneDisplay,
    contactType: "sales",
    email: siteConfig.email,
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-IN",
};
