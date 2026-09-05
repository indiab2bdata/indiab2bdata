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
import { keywordPages } from "@/lib/keyword-pages";

export default function Home() {
  return (
    <>
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
