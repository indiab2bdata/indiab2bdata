import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StateLandmarkIcon, stateLandmarkColor, stateLandmarkName } from "@/components/icons/state-landmarks";
import { Reveal } from "@/components/reveal";
import { RelatedLinks } from "@/components/related-links";
import { InlineCta } from "@/components/inline-cta";
import { SplitHero, ContactSplit } from "@/components/landing/sections";
import { JsonLd } from "@/components/json-ld";
import { databaseStates } from "@/lib/database-pages";
import { getKeywordPagesBySlug } from "@/lib/keyword-pages";
import { PopularCities } from "@/components/popular-cities";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd, faqJsonLd } from "@/lib/seo";
import { DATABASE_HUB_FAQS } from "@/lib/faq-data";
import { Faq } from "@/components/sections/faq";
import { SampleDownload } from "@/components/sample-download";

const TITLE = "Business Database by State | India-Wide Coverage";
const DESCRIPTION =
  "Browse verified B2B business databases state by state - Maharashtra, Gujarat, Tamil Nadu, Delhi, Uttar Pradesh, Karnataka, Haryana and Telangana. Mobile numbers, emails and company records.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/database",
  image: { url: `${siteConfig.url}/images/keywords/city-skyline.jpg`, width: 1200, height: 800, alt: "City skyline representing pan-India business coverage" },
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Database by State" },
];

const breadcrumbSchema = breadcrumbJsonLd([
  { name: "Home", url: siteConfig.url },
  { name: "Database by State", url: `${siteConfig.url}/database` },
]);

const webPageSchema = webPageJsonLd({
  type: "CollectionPage",
  name: `${TITLE} | ${siteConfig.name}`,
  description: DESCRIPTION,
  url: `${siteConfig.url}/database`,
});

const stateListSchema = itemListJsonLd(
  databaseStates.map((state) => ({ name: `${state.name} B2B Database`, url: `${siteConfig.url}/database/${state.slug}` })),
  "B2B Database by State"
);

export default function DatabaseHubPage() {
  const relatedKeywordPages = getKeywordPagesBySlug([
    "b2b-database-india",
    "company-database-india",
    "industry-wise-company-database-india",
    "gst-database-india",
    "mca-company-database-india",
    "newly-registered-companies-india",
    "manufacturer-database-india",
    "b2b-leads-database-india",
    "dealers-distributors-database-india",
  ]);

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema, stateListSchema, faqJsonLd(DATABASE_HUB_FAQS)]} />

      <SplitHero
        eyebrow="Database by State"
        title="Verified B2B Business Database, State by State"
        description="Pick a state to see coverage, major cities and industries - or tell us your exact requirement and we'll build a custom list."
        breadcrumbs={breadcrumbItems}
        chips={["8 State Hubs","700+ Cities","Industry Filters","DND-Scrubbed"]}
        source="database-hub-hero-form"
        requirement="State-Wise Business Database"
        formTitle="Get Your State-Wise Data"
      />

      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10">
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">Browse States</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
            Choose Your State
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Every state database is verified, deduplicated and DND-scrubbed - filterable further by city,
            industry or company size once you get in touch.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {databaseStates.map((state, i) => (
            <Reveal key={state.slug} delay={(i % 4) * 0.08}>
              <Link
                href={`/database/${state.slug}`}
                style={{ "--sc": stateLandmarkColor(state.slug) } as React.CSSProperties}
                className="group relative h-full flex flex-col bg-white rounded-2xl p-7 border border-[#DCEAF3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_var(--sc)] hover:border-[color-mix(in_srgb,var(--sc)_45%,white)] overflow-hidden"
              >
                {/* each state carries its own accent colour: top bar, glow, icon tile, caption and link */}
                <span className="absolute inset-x-0 top-0 h-1 bg-[var(--sc)]" aria-hidden="true" />
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[color-mix(in_srgb,var(--sc)_22%,transparent)] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <div className="relative w-14 h-14 rounded-xl bg-[color-mix(in_srgb,var(--sc)_13%,white)] text-[var(--sc)] ring-1 ring-[color-mix(in_srgb,var(--sc)_25%,white)] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[var(--sc)] group-hover:text-white">
                  <StateLandmarkIcon state={state.slug} className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="relative font-display font-bold text-lg text-navy">{state.name}</h3>
                {stateLandmarkName(state.slug) && (
                  <p className="relative mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--sc)]">{stateLandmarkName(state.slug)}</p>
                )}
                <p className="relative mt-2 text-sm text-muted leading-relaxed flex-1">
                  {state.cities.slice(0, 3).join(", ")}
                  {state.moreCities > 0 ? ` +${state.cities.length - 3 + state.moreCities} more` : ""}
                </p>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--sc)]">
                  View Database
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SampleDownload slug="state-wise-business-database" label="State-Wise Business Database" />

      <PopularCities heading="Popular City Databases" />

      <InlineCta id="database-hub-cta" text="Don't see your state listed? We cover all of India - tell us what you need." buttonLabel="Talk to Our Team" />

      <Faq items={DATABASE_HUB_FAQS} id="database-hub-faq" eyebrow="FAQs" heading="State-Wise Database FAQs" background="white" />

      <RelatedLinks pages={relatedKeywordPages} eyebrow="Related Databases" heading="Explore More Data Products" />

      <ContactSplit
        title="Need Data for a Specific State or City?"
        text="Share your target audience, location and quantity - we'll send free sample records and a custom quote."
        source="database-hub-footer-form"
        requirement="State-Wise Business Database"
      />
    </>
  );
}
