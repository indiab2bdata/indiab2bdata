import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { databaseStates, getDatabaseState } from "@/lib/database-pages";
import { getKeywordPagesBySlug } from "@/lib/keyword-pages";
import { siteConfig } from "@/lib/site-config";
import { cities } from "@/components/city-pages/city-data.mjs";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { FeatureGrid } from "@/components/feature-grid";
import { Faq } from "@/components/sections/faq";
import { RelatedLinks } from "@/components/related-links";
import { SplitHero, StatStrip, RecordAnatomy, HowItWorks, ContactSplit } from "@/components/landing/sections";
import { InlineCta } from "@/components/inline-cta";
import { Reveal } from "@/components/reveal";
import { MapPin } from "lucide-react";
import { SampleDownload } from "@/components/sample-download";

export const dynamicParams = false;

type Params = Promise<{ state: string }>;

export function generateStaticParams() {
  return databaseStates.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { state } = await params;
  const page = getDatabaseState(state);
  if (!page) return {};

  return pageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/database/${page.slug}`,
    keywords: [`${page.name} B2B database`, `${page.name} business database`],
    image: {
      url: `${siteConfig.url}/images/keywords/city-skyline.jpg`,
      width: 1200,
      height: 800,
      alt: `City skyline representing business coverage across ${page.name}`,
    },
  });
}

export default async function DatabaseStatePage({ params }: { params: Params }) {
  const { state } = await params;
  const page = getDatabaseState(state);
  if (!page) notFound();

  const cityPages = Object.values(cities).filter((city) => city.stateSlug === page.slug);
  const cityPageByName = new Map(cityPages.map((city) => [city.city, city]));
  const unlistedCityPages = cityPages.filter((city) => !page.cities.includes(city.city));
  const url = `${siteConfig.url}/database/${page.slug}`;
  const otherStates = databaseStates.filter((s) => s.slug !== page.slug);
  const relatedKeywordPages = getKeywordPagesBySlug([
    "b2b-database-india",
    "company-database-india",
    "industry-wise-company-database-india",
    "manufacturer-database-india",
    "gst-database-india",
    "mca-company-database-india",
    "b2b-leads-database-india",
    "mobile-number-database-india",
    "email-database-india",
    "dealers-distributors-database-india",
    "importers-exporters-database-india",
    "ceo-cfo-cmo-it-heads-database-india",
  ]);

  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", url: siteConfig.url },
    { name: "Database by State", url: `${siteConfig.url}/database` },
    { name: page.name, url },
  ]);

  const webPageSchema = webPageJsonLd({
    name: page.title,
    description: page.metaDescription,
    url,
    about: `${page.name} B2B database`,
  });

  const faqSchema = faqJsonLd(page.faqs);

  const stateServiceSchema = serviceJsonLd({
    name: `${page.name} B2B Database`,
    description: page.metaDescription,
    areaServed: page.name,
  });

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema, faqSchema, stateServiceSchema]} />

      <SplitHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Database by State", href: "/database" },
          { label: page.name },
        ]}
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.answer}
        chips={page.highlights.map((h) => h.title)}
        image="/images/keywords/city-skyline.jpg"
        imageAlt={`City skyline representing business coverage across ${page.name}`}
        source={`database-${page.slug}-hero-form`}
        requirement={`${page.name} B2B Database`}
        formTitle={`Get Your ${page.name} Business Data`}
      />

      <StatStrip
        items={[
          { value: `${page.cities.length + page.moreCities}+`, label: `Cities in ${page.name}` },
          { value: "500+", label: "Industry Categories" },
          { value: "2-6 hrs", label: "Typical Delivery" },
        ]}
      />

      <RecordAnatomy
        eyebrow="Overview"
        title={`Business Contacts Across ${page.name}`}
        paragraphs={page.intro}
        fields={[
          "Company / business name",
          "Contact person and designation",
          "Mobile number (DND-scrubbed)",
          "Email ID, where available",
          "Industry and business category",
          `Address, city and pincode across ${page.name}`,
          "GSTIN, where available",
        ]}
      />

      <section className="bg-bgsoft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FeatureGrid items={page.highlights} />
        </div>
      </section>

      <section className="bg-bgsoft py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="mb-8">
            <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">Cities Covered</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
              Business Database Across {page.name}
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {page.cities.map((city) => {
              const cityPage = cityPageByName.get(city);
              return cityPage ? (
                <Link
                  key={city}
                  href={`/database/${cityPage.stateSlug}/${cityPage.slug}`}
                  className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold bg-white border border-teal/40 rounded-full px-4 py-2 shadow-sm transition-colors hover:border-teal hover:text-teal"
                >
                  <MapPin className="w-3.5 h-3.5 text-teal" strokeWidth={2} />
                  {city} company database
                </Link>
              ) : (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 text-navy/80 text-sm font-medium bg-white border border-[#DCEAF3] rounded-full px-4 py-2 shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-teal" strokeWidth={2} />
                  {city}
                </span>
              );
            })}
            {page.moreCities > 0 && (
              <span className="inline-flex items-center text-muted text-sm font-medium bg-white border border-dashed border-[#DCEAF3] rounded-full px-4 py-2">
                +{page.moreCities} more cities
              </span>
            )}
          </div>
          {unlistedCityPages.length > 0 && (
            <div className="mt-8 border-t border-[#DCEAF3] pt-6">
              <h3 className="font-display font-bold text-lg text-navy">Browse company databases by city</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {unlistedCityPages.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/database/${city.stateSlug}/${city.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#DCEAF3] bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-teal/50 hover:text-teal"
                  >
                    <MapPin className="h-4 w-4 text-teal" strokeWidth={2} />
                    {city.city} company database
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <InlineCta
        id={`database-${page.slug}-cities-cta`}
        text={`Need ${page.name} data filtered to a specific city or industry?`}
        buttonLabel="Talk to Our Team"
      />

      <SampleDownload slug={`${page.slug}-b2b-database`} label={`${page.name} B2B Database`} state={page.name} />

      <Faq
        items={page.faqs}
        id={`database-${page.slug}-faq`}
        eyebrow="FAQs"
        heading={`Frequently Asked Questions - ${page.name}`}
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
                className="group flex items-center justify-between gap-3 bg-white rounded-xl px-5 py-4 border border-[#DCEAF3] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-lg"
              >
                <span className="text-sm font-medium text-navy">{s.name} B2B Database</span>
                <MapPin className="w-4 h-4 text-muted shrink-0 transition-colors group-hover:text-teal" strokeWidth={2} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <RelatedLinks pages={relatedKeywordPages} eyebrow="Related Databases" heading="Explore More Data Products" />

      <HowItWorks title={`How We Build Your ${page.name} Database`} />

      <ContactSplit
        title={`Ready to Reach Businesses in ${page.name}?`}
        text="Share your target city, industry and quantity - we'll send free sample records and a custom quote."
        source={`database-${page.slug}-footer-form`}
        requirement={`${page.name} B2B Database`}
      />
    </>
  );
}
