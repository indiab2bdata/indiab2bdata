import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { InlineCta } from "@/components/inline-cta";
import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { getKeywordPagesBySlug } from "@/lib/keyword-pages";
import { PopularCities } from "@/components/popular-cities";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd } from "@/lib/seo";

const TITLE = "B2B Data Insights & Guides";
const DESCRIPTION =
  "Guides on B2B databases, GST & company data, business directories and lead generation in India — from the team at IndiaB2BData.com.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/blog",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides" },
];

const breadcrumbSchema = breadcrumbJsonLd([
  { name: "Home", url: siteConfig.url },
  { name: "Guides", url: `${siteConfig.url}/blog` },
]);

const webPageSchema = webPageJsonLd({
  type: "CollectionPage",
  name: `${TITLE} | ${siteConfig.name}`,
  description: DESCRIPTION,
  url: `${siteConfig.url}/blog`,
});

const GUIDE_SLUGS = [
  "gst-database-india",
  "mca-company-database-india",
  "newly-registered-companies-india",
  "manufacturer-database-india",
  "industry-wise-company-database-india",
  "b2b-leads-database-india",
  "bulk-sms-database-india",
];

export default function BlogHubPage() {
  const guides = getKeywordPagesBySlug(GUIDE_SLUGS);

  const guideListSchema = itemListJsonLd(
    guides.map((page) => ({ name: page.keyword, url: `${siteConfig.url}/${page.slug}` })),
    "Data & Compliance Guides"
  );

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema, guideListSchema]} />

      <PageHero
        eyebrow="Insights & Guides"
        title="B2B Data Insights & Guides"
        description="Practical guides on B2B databases, GST & company records, business directories and lead generation — written for Indian sales and marketing teams."
        breadcrumbs={breadcrumbItems}
      />

      <RelatedLinks pages={guides} eyebrow="Popular Guides" heading="Data & Compliance Guides" />

      <InlineCta id="blog-guides-cta" text="Want data matched to a guide above? Tell us your exact requirement." />

      <PopularCities eyebrow="Coverage Guides" heading="City-Wise Company Databases" />

      <ContactCta />
    </>
  );
}
