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
import { getKeywordPagesBySlug, liveKeywordPages } from "@/lib/keyword-pages";
import { PRODUCT_GROUPS } from "@/lib/product-groups";
import { DirectoryBrowser } from "@/components/directory-browser";
import { isHeldFromIndex } from "@/lib/indexing";
import { PopularCities } from "@/components/popular-cities";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd, faqJsonLd } from "@/lib/seo";
import { DATABASE_HUB_FAQS } from "@/lib/faq-data";
import { Faq } from "@/components/sections/faq";
import { SampleDownload } from "@/components/sample-download";

const TITLE = "B2B Database Directory India | All Categories & States";
const DESCRIPTION =
  "Every IndiaB2BData database in one place: professionals, companies, registry, trade, consumer and education data, plus state databases for Maharashtra, Gujarat, Delhi, Karnataka and more.";

/** Footer groups, limited to live pages - with any live page missing from a group collected under "More Databases". */
const liveHrefs = new Set(liveKeywordPages.filter((p) => !isHeldFromIndex(p.slug)).map((p) => `/${p.slug}`));
const groupedHrefs = new Set(PRODUCT_GROUPS.flatMap((g) => g.links.map((l) => l.href)));
const directoryGroups = [
  ...PRODUCT_GROUPS.map((g) => ({ ...g, links: g.links.filter((l) => liveHrefs.has(l.href)) })),
  {
    id: "more",
    heading: "More Databases",
    description: "Specialist lists that don't fit a single category.",
    links: liveKeywordPages.filter((p) => !groupedHrefs.has(`/${p.slug}`) && !isHeldFromIndex(p.slug)).map((p) => ({ href: `/${p.slug}`, label: p.keyword.replace(/ India$/, "") })),
  },
].filter((g) => g.links.length > 0);

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/database",
  image: { url: `${siteConfig.url}/images/keywords/city-skyline.jpg`, width: 1200, height: 800, alt: "City skyline representing pan-India business coverage" },
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Database Directory" },
];

const breadcrumbSchema = breadcrumbJsonLd([
  { name: "Home", url: siteConfig.url },
  { name: "Database Directory", url: `${siteConfig.url}/database` },
]);

const webPageSchema = webPageJsonLd({
  type: "CollectionPage",
  name: `${TITLE} | ${siteConfig.name}`,
  description: DESCRIPTION,
  url: `${siteConfig.url}/database`,
});

const stateListSchema = itemListJsonLd(
  [
    ...databaseStates.map((state) => ({ name: `${state.name} Business Database`, url: `${siteConfig.url}/database/${state.slug}` })),
    ...directoryGroups.flatMap((g) => g.links.map((l) => ({ name: l.label, url: `${siteConfig.url}${l.href}` }))),
  ],
  "IndiaB2BData Database Directory"
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
        eyebrow="Database Directory"
        title="Every B2B Database We Offer, in One Place"
        description={`Browse ${directoryGroups.reduce((n, g) => n + g.links.length, 0)} category databases and ${databaseStates.length} state databases. Search by audience, or tell us your requirement and we'll build a custom list.`}
        breadcrumbs={breadcrumbItems}
        chips={[]}
        source="database-hub-hero-form"
        requirement="State-Wise Business Database"
        formTitle="Get Your State-Wise Data"
      />

      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-6">
          <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">Browse by Category</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">Find Your Audience</h2>
        </Reveal>
        <DirectoryBrowser groups={directoryGroups} />
      </section>

      <section id="locations" className="scroll-mt-24 py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10">
          <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">Browse by Location</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
            State Databases
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Each state page breaks down coverage by city and lists the industries that state is strongest in.
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

      <PopularCities eyebrow="Browse by Location" heading="City Databases" />

      <SampleDownload slug="state-wise-business-database" label="State-Wise Business Database" />

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
