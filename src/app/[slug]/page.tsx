import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getKeywordPage, getOtherKeywordPages, keywordPages } from "@/lib/keyword-pages";
import { getKeywordImage } from "@/lib/keyword-images";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { KeywordHero } from "@/components/keyword-hero";
import { AnswerBox } from "@/components/answer-box";
import { FeatureGrid } from "@/components/feature-grid";
import { KeywordVisual } from "@/components/keyword-visual";
import { Checklist } from "@/components/checklist";
import { Faq } from "@/components/sections/faq";
import { RelatedLinks } from "@/components/related-links";
import { ContactCta } from "@/components/sections/contact-cta";
import { InlineCta } from "@/components/inline-cta";
import { Reveal } from "@/components/reveal";

export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return keywordPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const page = getKeywordPage(slug);
  if (!page) return {};

  const visual = getKeywordImage(page.slug, page.keyword);

  return pageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: [page.keyword],
    image: { url: `${siteConfig.url}${visual.src}`, width: 1200, height: 800, alt: visual.alt },
  });
}

export default async function KeywordPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = getKeywordPage(slug);
  if (!page) notFound();

  const url = `${siteConfig.url}/${page.slug}`;
  const otherPages = getOtherKeywordPages(page.slug, 6);
  const visual = getKeywordImage(page.slug, page.keyword);

  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", url: siteConfig.url },
    { name: page.keyword, url },
  ]);

  const webPageSchema = webPageJsonLd({
    name: page.title,
    description: page.metaDescription,
    url,
    about: page.keyword,
  });

  const faqSchema = faqJsonLd(page.faqs);

  const productServiceSchema = serviceJsonLd({
    name: page.keyword,
    description: page.metaDescription,
  });

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema, faqSchema, productServiceSchema]} />

      <KeywordHero
        eyebrow={page.eyebrow}
        title={page.h1}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: page.keyword }]}
      />

      <AnswerBox answer={page.answer} />

      <section className="pt-12 md:pt-16 pb-4 max-w-3xl mx-auto px-5 md:px-8 space-y-4">
        {page.intro.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className="text-muted leading-relaxed">{paragraph}</p>
          </Reveal>
        ))}
      </section>

      <InlineCta id={`${page.slug}-intro-cta`} text={`See real sample records for ${page.keyword} — free, no obligation.`} />

      <section className="py-12 md:py-16 max-w-7xl mx-auto px-5 md:px-8">
        <FeatureGrid items={page.highlights} />
      </section>

      <KeywordVisual
        image={visual.src}
        alt={visual.alt}
        keyword={page.keyword}
        ctaId={`${page.slug}-visual-cta`}
        benefits={page.highlights.slice(0, 3).map((point) => (
          <div key={point.title} className="flex gap-3">
            <span className="w-9 h-9 shrink-0 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
              <point.icon className="w-[18px] h-[18px]" strokeWidth={2} />
            </span>
            <div>
              <p className="font-semibold text-navy text-sm">{point.title}</p>
              <p className="text-muted text-sm mt-1">{point.description}</p>
            </div>
          </div>
        ))}
      />

      <section className="bg-bgsoft py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Reveal className="mb-8">
            <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">Common Use Cases</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
              Who Uses This Data
            </h2>
          </Reveal>
          <Checklist items={page.useCases} />
        </div>
      </section>

      <InlineCta id={`${page.slug}-usecases-cta`} text={`Need ${page.keyword} filtered to your city or industry?`} buttonLabel="Talk to Our Team" />

      <Faq
        items={page.faqs}
        id={`${page.slug}-faq`}
        eyebrow="FAQs"
        heading="Frequently Asked Questions"
        background="white"
      />

      <InlineCta id={`${page.slug}-faq-cta`} text="Still have questions? Get a free sample and see the data for yourself." />

      <RelatedLinks pages={otherPages} />

      <ContactCta />
    </>
  );
}
