import type { Metadata } from "next";
import { JsonLd } from "@/components/layout/JsonLd";
import { BrowseByCategory } from "@/components/sections/BrowseByCategory";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { Faq } from "@/components/sections/Faq";
import { InlineCta } from "@/components/sections/InlineCta";
import { HowItWorks } from "@/components/sections/keyword/HowItWorks";
import { Highlights } from "@/components/sections/keyword/Highlights";
import { LongForm } from "@/components/sections/keyword/LongForm";
import { NumberedCards } from "@/components/sections/keyword/NumberedCards";
import { RecordAnatomy } from "@/components/sections/keyword/RecordAnatomy";
import { SplitHero } from "@/components/sections/keyword/SplitHero";
import { StatStrip } from "@/components/sections/keyword/StatStrip";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { SampleDownload } from "@/components/sections/SampleDownload";
import { LinkedText } from "@/components/ui/LinkedText";
import { indexableLinks, isHeldFromIndex } from "@/config/indexing";
import { PRODUCT_GROUPS } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getKeywordPagesBySlug } from "@/content";
import { KEYWORD_COPY } from "@/content/shared/keyword-copy";
import { getKeywordImage } from "@/lib/keyword-images";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import type { KeywordPage } from "@/types/landing";

export function keywordMetadata(page: KeywordPage): Metadata {
  const visual = getKeywordImage(page.slug, page.keyword);
  const meta = pageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: [page.keyword],
    image: { url: `${siteConfig.url}${visual.src}`, width: visual.width, height: visual.height, alt: visual.alt },
  });
  return isHeldFromIndex(page.slug) ? { ...meta, robots: { index: false, follow: true } } : meta;
}

/** Legacy layout for category pages not yet migrated to the landing template. */
export function KeywordTemplate({ page }: { page: KeywordPage }) {
  const url = `${siteConfig.url}/${page.slug}`;
  const visual = getKeywordImage(page.slug, page.keyword);
  const relatedPages = getKeywordPagesBySlug(page.related ?? []);
  const contentLinks = page.contentLinks ? indexableLinks(page.contentLinks) : undefined;
  const productName = page.eyebrow.replace(/ India$/, "");

  const schema = [
    breadcrumbJsonLd([
      { name: "Home", url: siteConfig.url },
      { name: page.keyword, url },
    ]),
    webPageJsonLd({ name: page.title, description: page.metaDescription, url, about: page.keyword }),
    faqJsonLd(page.faqs),
    serviceJsonLd({ name: page.keyword, description: page.metaDescription }),
  ];

  return (
    <>
      <JsonLd data={schema} />

      <SplitHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: page.keyword }]}
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.answer}
        chips={[]}
        image={visual.src}
        imageAlt={visual.alt}
        source={`${page.slug}-hero-form`}
        requirement={productName}
        formTitle={page.cta?.heroTitle ?? KEYWORD_COPY.cta.heroTitle(productName)}
        formSubtitle={page.cta?.heroSubtitle}
        formButtonLabel={page.cta?.buttonLabel}
      />

      <StatStrip items={KEYWORD_COPY.stats} />

      <RecordAnatomy
        eyebrow={KEYWORD_COPY.overview.eyebrow}
        title={KEYWORD_COPY.overview.title(productName)}
        paragraphs={page.intro.map((text, index) => <LinkedText key={index} text={text} links={contentLinks} />)}
        fields={page.dataFields ?? page.highlights.map((h) => `${h.title} - ${h.description}`)}
      />

      <Highlights items={page.highlights} />

      {page.sections && <LongForm sections={page.sections} links={contentLinks} />}

      <SampleDownload slug={page.slug} label={page.keyword} />

      <NumberedCards
        eyebrow={KEYWORD_COPY.useCases.eyebrow}
        title={KEYWORD_COPY.useCases.title(productName)}
        text={page.useCasesIntro ?? KEYWORD_COPY.useCases.defaultIntro}
        items={page.useCases}
      />

      <HowItWorks title={KEYWORD_COPY.process.title(productName)} />

      <InlineCta
        id={`${page.slug}-process-cta`}
        text={page.cta?.text ?? KEYWORD_COPY.cta.text(page.keyword)}
        buttonLabel={page.cta?.buttonLabel ?? KEYWORD_COPY.cta.button}
        whatsappMessage={page.cta ? KEYWORD_COPY.cta.whatsapp(page.keyword) : undefined}
      />

      <Faq items={page.faqs} id={`${page.slug}-faq`} eyebrow={KEYWORD_COPY.faq.eyebrow} heading={KEYWORD_COPY.faq.heading(productName)} background="white" />

      <RelatedPages pages={relatedPages} eyebrow={KEYWORD_COPY.related.eyebrow} heading={KEYWORD_COPY.related.heading} />

      <section className="bg-bgsoft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <BrowseByCategory groups={PRODUCT_GROUPS.filter((g) => g.id !== "general" && g.id !== "channel")} />
        </div>
      </section>

      <ContactSplit
        title={page.cta?.footerTitle ?? KEYWORD_COPY.cta.footerTitle(productName)}
        text={page.cta?.footerText ?? KEYWORD_COPY.cta.footerText}
        source={`${page.slug}-footer-form`}
        requirement={productName}
        formTitle={page.cta?.heroTitle}
        formSubtitle={page.cta?.heroSubtitle}
        formButtonLabel={page.cta?.buttonLabel}
      />
    </>
  );
}
