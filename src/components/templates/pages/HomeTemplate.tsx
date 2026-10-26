import { JsonLd } from "@/components/layout/JsonLd";
import { ContactCta } from "@/components/sections/ContactCta";
import { Faq } from "@/components/sections/Faq";
import { DataFolders } from "@/components/sections/home/DataFolders";
import { Hero } from "@/components/sections/home/HomeHero";
import { Process } from "@/components/sections/home/Process";
import { Products } from "@/components/sections/home/Products";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { ProviderDirectory } from "@/components/sections/home/ProviderDirectory";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { InlineCta } from "@/components/sections/InlineCta";
import { SampleDownload } from "@/components/sections/SampleDownload";
import { isHeldFromIndex } from "@/config/indexing";
import { siteConfig } from "@/config/site";
import { liveKeywordPages } from "@/content";
import { DEFAULT_FAQS } from "@/content/pages/faqs";
import { HOME } from "@/content/pages/home";
import { faqJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";

/** Homepage. Keep the section order stable: React's useId (FAQ ids) depends on each child's position. */
export function HomeTemplate() {
  const schema = [
    webPageJsonLd({ name: HOME.meta.title, description: HOME.meta.description, url: siteConfig.url, about: HOME.meta.about }),
    faqJsonLd(DEFAULT_FAQS),
    itemListJsonLd(
      liveKeywordPages.filter((page) => !isHeldFromIndex(page.slug)).map((page) => ({ name: page.keyword, url: `${siteConfig.url}/${page.slug}` })),
      HOME.meta.itemListName
    ),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Hero />
      <TrustStrip />
      <ProviderDirectory />
      <Products />
      <DataFolders />
      <InlineCta {...HOME.ctas.products} />
      <SampleDownload {...HOME.sample} />
      <WhyUs />
      <Process />
      <InlineCta {...HOME.ctas.process} />
      <Testimonials />
      <InlineCta {...HOME.ctas.testimonials} />
      <Faq />
      <InlineCta {...HOME.ctas.faq} />
      <ContactCta />
    </>
  );
}
