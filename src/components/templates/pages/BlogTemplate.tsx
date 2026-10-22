import { JsonLd } from "@/components/layout/JsonLd";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { Faq } from "@/components/sections/Faq";
import { InlineCta } from "@/components/sections/InlineCta";
import { SplitHero } from "@/components/sections/keyword/SplitHero";
import { PopularCities } from "@/components/sections/PopularCities";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { SampleDownload } from "@/components/sections/SampleDownload";
import { siteConfig } from "@/config/site";
import { getKeywordPagesBySlug } from "@/content";
import { BLOG } from "@/content/pages/blog";
import { GUIDES_FAQS } from "@/content/pages/faqs";
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/seo";

export function BlogTemplate() {
  const url = `${siteConfig.url}${BLOG.meta.path}`;
  const guides = getKeywordPagesBySlug(BLOG.guides.slugs);
  const schema = [
    breadcrumbJsonLd([
      { name: "Home", url: siteConfig.url },
      { name: BLOG.breadcrumb, url },
    ]),
    webPageJsonLd({ type: "CollectionPage", name: BLOG.schemaName, description: BLOG.meta.description, url }),
    itemListJsonLd(
      guides.map((page) => ({ name: page.keyword, url: `${siteConfig.url}/${page.slug}` })),
      BLOG.guides.listName
    ),
    faqJsonLd(GUIDES_FAQS),
  ];

  return (
    <>
      <JsonLd data={schema} />

      <SplitHero
        eyebrow={BLOG.hero.eyebrow}
        title={BLOG.hero.title}
        description={BLOG.hero.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: BLOG.breadcrumb }]}
        chips={BLOG.hero.chips}
        source={BLOG.hero.source}
        requirement={BLOG.hero.requirement}
        formTitle={BLOG.hero.formTitle}
      />

      <RelatedPages pages={guides} eyebrow={BLOG.guides.eyebrow} heading={BLOG.guides.heading} />

      <SampleDownload {...BLOG.sample} />

      <InlineCta {...BLOG.cta} />

      <PopularCities {...BLOG.cities} />

      <Faq items={GUIDES_FAQS} {...BLOG.faq} background="white" />

      <ContactSplit {...BLOG.footer} />
    </>
  );
}
