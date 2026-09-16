import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { InlineCta } from "@/components/inline-cta";
import { ContactCta } from "@/components/sections/contact-cta";
import { keywordPages } from "@/lib/keyword-pages";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "B2B Data Insights & Guides",
  description:
    "Guides on B2B databases, GST & company data, business directories and lead generation in India — from the team at IndiaB2BData.com.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

const GUIDE_SLUGS = [
  "gst-database-india",
  "mca-company-database-india",
  "registered-companies-database-india",
  "newly-registered-companies-india",
  "business-directory-india",
  "manufacturer-database-india",
  "service-providers-database-india",
  "b2b-leads-database-india",
  "verified-business-database-india",
];

const STATE_SLUGS = ["state-wise-company-database-india", "city-wise-company-database-india"];

export default function BlogHubPage() {
  const guides = keywordPages.filter((k) => GUIDE_SLUGS.includes(k.slug));
  const stateGuides = keywordPages.filter((k) => STATE_SLUGS.includes(k.slug));

  return (
    <>
      <PageHero
        eyebrow="Insights & Guides"
        title="B2B Data Insights & Guides"
        description="Practical guides on B2B databases, GST & company records, business directories and lead generation — written for Indian sales and marketing teams."
      />

      <RelatedLinks pages={guides} eyebrow="Popular Guides" heading="Data & Compliance Guides" />

      <InlineCta id="blog-guides-cta" text="Want data matched to a guide above? Tell us your exact requirement." />

      <RelatedLinks pages={stateGuides} eyebrow="Coverage Guides" heading="State & City-Wise Coverage" />

      <ContactCta />
    </>
  );
}
