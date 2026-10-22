import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getKeywordPage, getKeywordPagesBySlug, liveKeywordPages } from "@/lib/keyword-pages";
import { getKeywordImage } from "@/lib/keyword-images";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { FeatureGrid } from "@/components/feature-grid";
import { Faq } from "@/components/sections/faq";
import { RelatedLinks } from "@/components/related-links";
import { InlineCta } from "@/components/inline-cta";
import { Reveal } from "@/components/reveal";
import { LinkedText } from "@/components/linked-text";
import { BrowseByCategory } from "@/components/landing-v2/sections";
import { DatabaseLanding, landingMetadata } from "@/components/landing-v2/database-landing";
import { getCategoryProfile } from "@/lib/landing";
import { PRODUCT_GROUPS } from "@/lib/product-groups";
import { indexableLinks, isHeldFromIndex } from "@/lib/indexing";
import { SampleDownload } from "@/components/sample-download";
import { SplitHero, StatStrip, RecordAnatomy, NumberedCards, HowItWorks, ContactSplit } from "@/components/landing/sections";

export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

/** Site-wide figures already stated on the homepage and About page. */
const STATS = [
  { value: "50L+", label: "Verified Records" },
  { value: "700+", label: "Cities Covered" },
  { value: "Free", label: "Sample Before You Buy" },
];

export function generateStaticParams() {
  return liveKeywordPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const profile = getCategoryProfile(slug);
  if (profile) return landingMetadata(profile);
  const page = getKeywordPage(slug);
  if (!page) return {};

  const visual = getKeywordImage(page.slug, page.keyword);

  const held = isHeldFromIndex(page.slug);
  const meta = pageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: [page.keyword],
    image: { url: `${siteConfig.url}${visual.src}`, width: visual.width, height: visual.height, alt: visual.alt },
  });
  return held ? { ...meta, robots: { index: false, follow: true } } : meta;
}

export default async function KeywordPage({ params }: { params: Params }) {
  const { slug } = await params;
  const profile = getCategoryProfile(slug);
  if (profile) return <DatabaseLanding profile={profile} />;
  const page = getKeywordPage(slug);
  if (!page) notFound();

  const url = `${siteConfig.url}/${page.slug}`;
  const visual = getKeywordImage(page.slug, page.keyword);
  const relatedPages = getKeywordPagesBySlug(page.related ?? []);
  const contentLinks = page.contentLinks ? indexableLinks(page.contentLinks) : undefined;
  const productName = page.eyebrow.replace(/ India$/, "");

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
        formTitle={page.cta?.heroTitle ?? `Get Your ${productName}`}
        formSubtitle={page.cta?.heroSubtitle}
        formButtonLabel={page.cta?.buttonLabel}
      />

      <StatStrip items={STATS} />

      <RecordAnatomy
        eyebrow="Overview"
        title={`What You Get with Our ${productName}`}
        paragraphs={page.intro.map((text, index) => <LinkedText key={index} text={text} links={contentLinks} />)}
        fields={page.dataFields ?? page.highlights.map((h) => `${h.title} - ${h.description}`)}
      />

      <section className="bg-bgsoft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-dark">Why IndiaB2BData</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Built for Accurate, Targeted Outreach
            </h2>
          </Reveal>
          <FeatureGrid items={page.highlights} />
        </div>
      </section>

      {page.sections && (
        <section className="mx-auto max-w-5xl space-y-14 px-5 py-20 md:px-8 md:py-24">
          {page.sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy md:text-3xl">{section.heading}</h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-muted">
                    <LinkedText text={paragraph} links={contentLinks} />
                  </p>
                ))}
                {section.subsections && (
                  <div className="grid gap-4 pt-2 sm:grid-cols-2">
                    {section.subsections.map((sub) => (
                      <div key={sub.heading} className="rounded-2xl border border-[#DCEAF3] bg-white p-5">
                        <h3 className="font-display text-base font-bold text-navy">{sub.heading}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted"><LinkedText text={sub.text} links={contentLinks} /></p>
                      </div>
                    ))}
                  </div>
                )}
                {section.bullets && (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 rounded-xl bg-bgsoft p-4 text-sm leading-relaxed text-navy/85">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                        <LinkedText text={bullet} links={contentLinks} />
                      </li>
                    ))}
                  </ul>
                )}
                {section.closing?.map((paragraph, i) => (
                  <p key={`closing-${i}`} className="leading-relaxed text-muted">
                    <LinkedText text={paragraph} links={contentLinks} />
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </section>
      )}

      <SampleDownload slug={page.slug} label={page.keyword} />

      <NumberedCards
        eyebrow="Use Cases"
        title={`How Businesses Use Our ${productName}`}
        text={page.useCasesIntro ?? "Teams across India use this data to reach the right people faster - by phone, email, WhatsApp or SMS."}
        items={page.useCases}
      />

      <HowItWorks title={`How We Build & Deliver Your ${productName}`} />

      <InlineCta
        id={`${page.slug}-process-cta`}
        text={page.cta?.text ?? `Need ${page.keyword} filtered to your city or industry?`}
        buttonLabel={page.cta?.buttonLabel ?? "Talk to Our Team"}
        whatsappMessage={page.cta ? `Hi, I would like to discuss the ${page.keyword}. Please help me check coverage and sample options.` : undefined}
      />

      <Faq items={page.faqs} id={`${page.slug}-faq`} eyebrow="FAQs" heading={`Frequently Asked Questions - ${productName}`} background="white" />

      <RelatedLinks pages={relatedPages} eyebrow="Explore More" heading="Related Databases" />

      <section className="bg-bgsoft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <BrowseByCategory groups={PRODUCT_GROUPS.filter((g) => g.id !== "general" && g.id !== "channel")} />
        </div>
      </section>

      <ContactSplit
        title={page.cta?.footerTitle ?? `Ready to Get Your ${productName}?`}
        text={page.cta?.footerText ?? "Share your target audience, location and quantity - we'll send free sample records and a custom quote."}
        source={`${page.slug}-footer-form`}
        requirement={productName}
        formTitle={page.cta?.heroTitle}
        formSubtitle={page.cta?.heroSubtitle}
        formButtonLabel={page.cta?.buttonLabel}
      />
    </>
  );
}
