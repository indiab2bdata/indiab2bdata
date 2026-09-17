import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Products } from "@/components/sections/products";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { RelatedLinks } from "@/components/related-links";
import { InlineCta } from "@/components/inline-cta";
import { JsonLd } from "@/components/json-ld";
import { keywordPages } from "@/lib/keyword-pages";
import { siteConfig } from "@/lib/site-config";
import { DEFAULT_FAQS } from "@/lib/faq-data";
import { pageMetadata, webPageJsonLd, faqJsonLd, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: siteConfig.defaultTitle,
  titleTag: null,
  description: siteConfig.defaultDescription,
  path: "/",
});

const webPageSchema = webPageJsonLd({
  name: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  url: siteConfig.url,
  about: "B2B database India",
});

const faqSchema = faqJsonLd(DEFAULT_FAQS);

const productListSchema = itemListJsonLd(
  keywordPages.map((page) => ({ name: page.keyword, url: `${siteConfig.url}/${page.slug}` })),
  "B2B & Company Databases"
);

export default function Home() {
  return (
    <>
      <JsonLd data={[webPageSchema, faqSchema, productListSchema]} />
      <Hero />
      <TrustStrip />
      <Products />
      <InlineCta id="home-products-cta" text="Not sure which data product fits? Tell us what you need." buttonLabel="Talk to Our Team" />
      <WhyUs />
      <Process />
      <InlineCta id="home-process-cta" text="Ready to start? Get your free sample within a few hours." />
      <Pricing />
      <Testimonials />
      <InlineCta id="home-testimonials-cta" text="Join hundreds of teams already reaching real decision-makers." />
      <Faq />
      <InlineCta id="home-faq-cta" text="Still have questions? Get a free sample and see the data for yourself." />
      <RelatedLinks
        pages={keywordPages}
        eyebrow="Browse by Category"
        heading="Explore Our B2B & Company Databases"
      />
      <ContactCta />
    </>
  );
}
