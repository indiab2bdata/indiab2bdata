import { PriorityEvidence } from "@/components/sections/PriorityEvidence";
import { JsonLd } from "@/components/layout/JsonLd";
import { ContactCta } from "@/components/sections/ContactCta";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/home/HomeHero";
import { Process } from "@/components/sections/home/Process";
import { SelectionGuide } from "@/components/sections/home/SelectionGuide";
import { ProviderDirectory } from "@/components/sections/home/ProviderDirectory";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { InlineCta } from "@/components/sections/InlineCta";
import { SampleDownload } from "@/components/sections/SampleDownload";
import { siteConfig } from "@/config/site";
import { HOME_FAQS } from "@/content/pages/faqs";
import { HOME } from "@/content/pages/home";
import { faqJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";

/** Homepage. Keep the section order stable: React's useId (FAQ ids) depends on each child's position. */
export function HomeTemplate() {
  const schema = [
    webPageJsonLd({ name: HOME.meta.title, description: HOME.meta.description, url: siteConfig.url, about: HOME.meta.about }),
    faqJsonLd(HOME_FAQS),
    itemListJsonLd(
      HOME.directory.groups[0].links.map((page) => ({ name: page.label, url: `${siteConfig.url}${page.href}` })),
      HOME.meta.itemListName
    ),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Hero />
      <ProviderDirectory />
      <SelectionGuide />
      <PriorityEvidence path="/" />
      <InlineCta {...HOME.ctas.products} />
      <SampleDownload {...HOME.sample} />
      <WhyUs />
      <Process />
      <InlineCta {...HOME.ctas.process} />
      <Faq items={HOME_FAQS} />
      <InlineCta {...HOME.ctas.faq} />
      <ContactCta />
    </>
  );
}
