import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { databaseStates, getDatabaseState } from "@/lib/database-pages";
import { keywordPages } from "@/lib/keyword-pages";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/json-ld";
import { KeywordHero } from "@/components/keyword-hero";
import { AnswerBox } from "@/components/answer-box";
import { FeatureGrid } from "@/components/feature-grid";
import { KeywordVisual } from "@/components/keyword-visual";
import { Faq } from "@/components/sections/faq";
import { RelatedLinks } from "@/components/related-links";
import { ContactCta } from "@/components/sections/contact-cta";
import { InlineCta } from "@/components/inline-cta";
import { Reveal } from "@/components/reveal";
import { MapPin } from "lucide-react";

export const dynamicParams = false;

type Params = Promise<{ state: string }>;

export function generateStaticParams() {
  return databaseStates.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { state } = await params;
  const page = getDatabaseState(state);
  if (!page) return {};

  const url = `${siteConfig.url}/database/${page.slug}`;

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: [`${page.name} B2B database`, `${page.name} business database`],
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.metaDescription,
    },
  };
}

export default async function DatabaseStatePage({ params }: { params: Params }) {
  const { state } = await params;
  const page = getDatabaseState(state);
  if (!page) notFound();

  const url = `${siteConfig.url}/database/${page.slug}`;
  const otherStates = databaseStates.filter((s) => s.slug !== page.slug).slice(0, 6);
  const relatedKeywordPages = keywordPages.filter((k) =>
    ["state-wise-company-database-india", "city-wise-company-database-india", "b2b-database-india"].includes(k.slug)
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Database by State", item: `${siteConfig.url}/database` },
      { "@type": "ListItem", position: 3, name: page.name, item: url },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.metaDescription,
    url,
    inLanguage: "en-IN",
    about: `${page.name} B2B database`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${page.name} B2B Database`,
    name: `${page.name} B2B Database`,
    description: page.metaDescription,
    areaServed: { "@type": "State", name: page.name },
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd, webPageJsonLd, faqJsonLd, serviceJsonLd]} />

      <KeywordHero
        eyebrow={page.eyebrow}
        title={page.h1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Database by State", href: "/database" },
          { label: page.name },
        ]}
      />

      <AnswerBox answer={page.answer} />

      <section className="pt-12 md:pt-16 pb-4 max-w-3xl mx-auto px-5 md:px-8 space-y-4">
        {page.intro.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className="text-muted leading-relaxed">{paragraph}</p>
          </Reveal>
        ))}
      </section>

      <InlineCta id={`database-${page.slug}-intro-cta`} text={`See real sample records for ${page.name} — free, no obligation.`} />

      <section className="py-12 md:py-16 max-w-7xl mx-auto px-5 md:px-8">
        <FeatureGrid items={page.highlights} />
      </section>

      <KeywordVisual
        image="/images/keywords/city-skyline.jpg"
        alt={`City skyline representing business coverage across ${page.name}`}
        keyword={`${page.name} B2B Database`}
        ctaId={`database-${page.slug}-visual-cta`}
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
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal className="mb-8">
            <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">Cities Covered</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
              Business Database Across {page.name}
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {page.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 text-navy/80 text-sm font-medium bg-white border border-slate-200/70 rounded-full px-4 py-2 shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-teal" strokeWidth={2} />
                {city}
              </span>
            ))}
            {page.moreCities > 0 && (
              <span className="inline-flex items-center text-muted text-sm font-medium bg-white border border-dashed border-slate-300 rounded-full px-4 py-2">
                +{page.moreCities} more cities
              </span>
            )}
          </div>
        </div>
      </section>

      <InlineCta
        id={`database-${page.slug}-cities-cta`}
        text={`Need ${page.name} data filtered to a specific city or industry?`}
        buttonLabel="Talk to Our Team"
      />

      <Faq
        items={page.faqs}
        id={`database-${page.slug}-faq`}
        eyebrow="FAQs"
        heading={`Frequently Asked Questions — ${page.name}`}
        background="white"
      />

      <InlineCta id={`database-${page.slug}-faq-cta`} text="Still have questions? Get a free sample and see the data for yourself." />

      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10">
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">More States</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
            Browse Other State Databases
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherStates.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/database/${s.slug}`}
                className="group flex items-center justify-between gap-3 bg-white rounded-xl px-5 py-4 border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-lg"
              >
                <span className="text-sm font-medium text-navy">{s.name} B2B Database</span>
                <MapPin className="w-4 h-4 text-muted shrink-0 transition-colors group-hover:text-teal" strokeWidth={2} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <RelatedLinks pages={relatedKeywordPages} eyebrow="Related Databases" heading="Explore More Data Products" />

      <ContactCta />
    </>
  );
}
