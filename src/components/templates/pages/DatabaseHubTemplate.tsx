import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/layout/JsonLd";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { Faq } from "@/components/sections/Faq";
import { DirectoryBrowser } from "@/components/sections/hub/DirectoryBrowser";
import { InlineCta } from "@/components/sections/InlineCta";
import { SplitHero } from "@/components/sections/keyword/SplitHero";
import { PopularCities } from "@/components/sections/PopularCities";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { SampleDownload } from "@/components/sections/SampleDownload";
import { StateLandmarkIcon, stateLandmarkColor, stateLandmarkName } from "@/components/ui/icons/StateLandmarks";
import { Reveal } from "@/components/ui/Reveal";
import { isHeldFromIndex } from "@/config/indexing";
import { PRODUCT_GROUPS } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getAllStates, getKeywordPagesBySlug, liveKeywordPages } from "@/content";
import { DATABASE_HUB } from "@/content/pages/database";
import { DATABASE_HUB_FAQS } from "@/content/pages/faqs";
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";

/** Navigation groups limited to live, indexable pages - any live page missing from a group is collected under "More Databases". */
function directoryGroups() {
  const liveHrefs = new Set(liveKeywordPages.filter((p) => !isHeldFromIndex(p.slug)).map((p) => `/${p.slug}`));
  const groupedHrefs = new Set(PRODUCT_GROUPS.flatMap((g) => g.links.map((l) => l.href)));
  return [
    ...PRODUCT_GROUPS.map((g) => ({ ...g, links: g.links.filter((l) => liveHrefs.has(l.href)) })),
    {
      ...DATABASE_HUB.moreGroup,
      links: liveKeywordPages.filter((p) => !groupedHrefs.has(`/${p.slug}`) && !isHeldFromIndex(p.slug)).map((p) => ({ href: `/${p.slug}`, label: p.keyword.replace(/ India$/, "") })),
    },
  ].filter((g) => g.links.length > 0);
}

export function DatabaseHubTemplate() {
  const H = DATABASE_HUB;
  const url = `${siteConfig.url}${H.meta.path}`;
  const groups = directoryGroups();
  const states = getAllStates();
  const schema = [
    breadcrumbJsonLd([
      { name: "Home", url: siteConfig.url },
      { name: H.breadcrumb, url },
    ]),
    webPageJsonLd({ type: "CollectionPage", name: H.schemaName, description: H.meta.description, url }),
    itemListJsonLd(
      [
        ...states.map((state) => ({ name: H.stateSchemaName(state.name), url: `${siteConfig.url}/database/${state.slug}` })),
        ...groups.flatMap((g) => g.links.map((l) => ({ name: l.label, url: `${siteConfig.url}${l.href}` }))),
      ],
      H.listName
    ),
    faqJsonLd(DATABASE_HUB_FAQS),
  ];

  return (
    <>
      <JsonLd data={schema} />

      <SplitHero
        eyebrow={H.hero.eyebrow}
        title={H.hero.title}
        description={H.hero.description(groups.reduce((n, g) => n + g.links.length, 0), states.length)}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: H.breadcrumb }]}
        chips={[]}
        source={H.hero.source}
        requirement={H.hero.requirement}
        formTitle={H.hero.formTitle}
      />

      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-6">
          <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">{H.categories.eyebrow}</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">{H.categories.title}</h2>
        </Reveal>
        <DirectoryBrowser groups={groups} />
      </section>

      <section id="locations" className="scroll-mt-24 py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10">
          <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">{H.states.eyebrow}</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">
            {H.states.title}
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            {H.states.text}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {states.map((state, i) => (
            <Reveal key={state.slug} delay={(i % 4) * 0.08}>
              <Link
                href={`/database/${state.slug}`}
                style={{ "--sc": stateLandmarkColor(state.slug) } as CSSProperties}
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
                  {state.hubCities.slice(0, 3).join(", ")}
                  {state.moreCities > 0 ? H.states.more(state.hubCities.length - 3 + state.moreCities) : ""}
                </p>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--sc)]">
                  {H.states.cta}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <PopularCities {...H.cities} />

      <SampleDownload {...H.sample} />

      <InlineCta {...H.cta} />

      <Faq items={DATABASE_HUB_FAQS} {...H.faq} background="white" />

      <RelatedPages pages={getKeywordPagesBySlug(H.related.slugs)} eyebrow={H.related.eyebrow} heading={H.related.heading} />

      <ContactSplit {...H.footer} />
    </>
  );
}
