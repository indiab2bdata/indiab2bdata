import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPinned } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { RelatedLinks } from "@/components/related-links";
import { InlineCta } from "@/components/inline-cta";
import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { databaseStates } from "@/lib/database-pages";
import { keywordPages } from "@/lib/keyword-pages";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata, breadcrumbJsonLd, webPageJsonLd, itemListJsonLd } from "@/lib/seo";

const TITLE = "Business Database by State | India-Wide Coverage";
const DESCRIPTION =
  "Browse verified B2B business databases state by state — Maharashtra, Gujarat, Tamil Nadu, Delhi, Uttar Pradesh, Karnataka, Haryana and Telangana. Mobile numbers, emails and company records.";

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
  const relatedKeywordPages = keywordPages.filter((k) =>
    ["state-wise-company-database-india", "city-wise-company-database-india", "b2b-database-india"].includes(k.slug)
  );

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema, stateListSchema]} />

      <PageHero
        eyebrow="Database by State"
        title="Verified B2B Business Database, State by State"
        description="Pick a state to see coverage, major cities and industries — or tell us your exact requirement and we'll build a custom list."
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10">
          <span className="text-teal text-xs font-semibold uppercase tracking-[0.16em]">Browse States</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
            Choose Your State
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Every state database is verified, deduplicated and DND-scrubbed — filterable further by city,
            industry or company size once you get in touch.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {databaseStates.map((state, i) => (
            <Reveal key={state.slug} delay={(i % 4) * 0.08}>
              <Link
                href={`/database/${state.slug}`}
                className="group relative h-full flex flex-col bg-white rounded-2xl p-7 border border-[#DCEAF3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal/40 overflow-hidden"
              >
                <div
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-teal/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <div className="relative w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 transition-colors group-hover:bg-teal group-hover:text-white">
                  <MapPinned className="w-6 h-6" strokeWidth={1.6} />
                </div>
                <h3 className="relative font-display font-bold text-lg text-navy">{state.name}</h3>
                <p className="relative mt-2 text-sm text-muted leading-relaxed flex-1">
                  {state.cities.slice(0, 3).join(", ")}
                  {state.moreCities > 0 ? ` +${state.cities.length - 3 + state.moreCities} more` : ""}
                </p>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  View Database
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <InlineCta id="database-hub-cta" text="Don't see your state listed? We cover all of India — tell us what you need." buttonLabel="Talk to Our Team" />

      <RelatedLinks pages={relatedKeywordPages} eyebrow="Related Databases" heading="Explore More Data Products" />

      <ContactCta />
    </>
  );
}
