import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/layout/JsonLd";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { Faq } from "@/components/sections/Faq";
import { DirectoryBrowser } from "@/components/sections/hub/DirectoryBrowser";
import { InlineCta } from "@/components/sections/InlineCta";
import { SplitHero } from "@/components/sections/keyword/SplitHero";
import { PopularCities } from "@/components/sections/PopularCities";
import { SampleDownload } from "@/components/sections/SampleDownload";
import { StateLandmarkIcon, stateLandmarkName } from "@/components/ui/icons/StateLandmarks";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { getAllStates } from "@/content";
import { DATABASE_HUB } from "@/content/pages/database";
import { DATABASE_HUB_FAQS } from "@/content/pages/faqs";
import { DIRECTORY_PREVIEW_LIMIT, getDatabaseDirectoryGroups } from "@/lib/database-directory";
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import styles from "./DatabaseHubTemplate.module.css";

export function DatabaseHubTemplate() {
  const H = DATABASE_HUB;
  const url = `${siteConfig.url}${H.meta.path}`;
  const groups = getDatabaseDirectoryGroups();
  const states = getAllStates();
  const schema = [
    breadcrumbJsonLd([
      { name: "IndiaB2BData Home", url: siteConfig.url },
      { name: H.breadcrumb, url },
    ]),
    webPageJsonLd({ type: "CollectionPage", name: H.schemaName, description: H.meta.description, url }),
    itemListJsonLd(
      [
        ...states.map((state) => ({ name: H.stateSchemaName(state.name), url: `${siteConfig.url}/database/${state.slug}` })),
        ...groups.map((g) => ({ name: `${g.heading} Databases`, url: `${siteConfig.url}${g.href}` })),
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
        breadcrumbs={[{ label: "IndiaB2BData Home", href: "/" }, { label: H.breadcrumb }]}
        chips={[]}
        source={H.hero.source}
        requirement={H.hero.requirement}
        formTitle={H.hero.formTitle}
      />

      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-6">
          <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">{H.categories.eyebrow}</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy mt-3 tracking-tight">{H.categories.title}</h2>
          <p className="mt-4 text-muted leading-relaxed">{H.categories.text}</p>
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
                data-state={state.slug}
                className={styles.state}
              >
                <div className={styles.icon}>
                  <StateLandmarkIcon state={state.slug} className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="relative font-display font-bold text-lg text-navy">{state.name}</h3>
                {stateLandmarkName(state.slug) && (
                  <p className={styles.landmark}>{stateLandmarkName(state.slug)}</p>
                )}
                <p className={styles.cities}>
                  {state.hubCities.slice(0, 3).join(", ")}
                  {state.moreCities > 0 ? H.states.more(state.hubCities.length - 3 + state.moreCities) : ""}
                </p>
                <span className={styles.cta}>
                  {H.states.cta}
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <PopularCities {...H.cities} />

      <SampleDownload {...H.sample} />

      <section className={styles.guide} aria-labelledby="database-selection-guide">
        <h2 id="database-selection-guide">{H.guide.heading}</h2>
        <p><strong>{H.guide.emphasis}</strong> {H.guide.intro}</p>
        <div className={styles.guideGrid}>
          {H.guide.sections.map((section) => (
            <div key={section.heading}>
              <h3>{section.heading}</h3>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          ))}
        </div>
      </section>

      <InlineCta {...H.cta} />

      <Faq items={DATABASE_HUB_FAQS} {...H.faq} background="white" />

      <ContactSplit {...H.footer} />
    </>
  );
}
