import type { Metadata } from "next";
import { RelatedLinks } from "@/components/related-links";
import { InlineCta } from "@/components/inline-cta";
import { SplitHero, ContactSplit } from "@/components/landing/sections";
import { JsonLd } from "@/components/json-ld";
import { getKeywordPagesBySlug } from "@/lib/keyword-pages";
import { PopularCities } from "@/components/popular-cities";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd, faqJsonLd } from "@/lib/seo";
import { GUIDES_FAQS } from "@/lib/faq-data";
import { Faq } from "@/components/sections/faq";
import { SampleDownload } from "@/components/sample-download";

const TITLE = "B2B Data Insights & Guides";
const DESCRIPTION =
  "Guides on B2B databases, GST & company data, business directories and lead generation in India - from the team at IndiaB2BData.com.";

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
  "email-database-india",
  "whatsapp-number-database-india",
  "importers-exporters-database-india",
  "dealers-distributors-database-india",
  "ceo-cfo-cmo-it-heads-database-india",
];

export default function BlogHubPage() {
  const guides = getKeywordPagesBySlug(GUIDE_SLUGS);

  const guideListSchema = itemListJsonLd(
    guides.map((page) => ({ name: page.keyword, url: `${siteConfig.url}/${page.slug}` })),
    "Data & Compliance Guides"
  );

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema, guideListSchema, faqJsonLd(GUIDES_FAQS)]} />

      <SplitHero
        eyebrow="Insights & Guides"
        title="B2B Data Insights & Guides"
        description="Practical guides on B2B databases, GST & company records, business directories and lead generation - written for Indian sales and marketing teams."
        breadcrumbs={breadcrumbItems}
        chips={["Practical Guides","Compliance Tips","Free Sample Data"]}
        source="guides-hero-form"
        requirement="B2B Data Consultation"
        formTitle="Not Sure Which Data You Need?"
      />

      <RelatedLinks pages={guides} eyebrow="Popular Guides" heading="Data & Compliance Guides" />

      <SampleDownload slug="b2b-leads-database-india" label="B2B Leads Database" />

      <InlineCta id="blog-guides-cta" text="Want data matched to a guide above? Tell us your exact requirement." />

      <PopularCities eyebrow="Coverage Guides" heading="City-Wise Company Databases" />

      <Faq items={GUIDES_FAQS} id="guides-faq" eyebrow="FAQs" heading="B2B Data Questions, Answered" background="white" />

      <ContactSplit
        title="Talk to a B2B Data Specialist"
        text="Share your target audience, location and quantity - we'll send free sample records and a custom quote."
        source="guides-footer-form"
        requirement="B2B Data Consultation"
      />
    </>
  );
}
