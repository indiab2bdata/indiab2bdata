import Image from "next/image";
import { JsonLd } from "@/components/layout/JsonLd";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { CoverageLinks } from "@/components/sections/CoverageLinks";
import { Faq } from "@/components/sections/Faq";
import { InlineCta } from "@/components/sections/InlineCta";
import { SplitHero } from "@/components/sections/keyword/SplitHero";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { SampleDownload } from "@/components/sections/SampleDownload";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { getKeywordPagesBySlug } from "@/content";
import { ABOUT } from "@/content/pages/about";
import { ABOUT_FAQS } from "@/content/pages/faqs";
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";

export function AboutTemplate() {
  const url = `${siteConfig.url}${ABOUT.meta.path}`;
  const schema = [
    breadcrumbJsonLd([
      { name: "Home", url: siteConfig.url },
      { name: ABOUT.breadcrumb, url },
    ]),
    webPageJsonLd({ type: "AboutPage", name: ABOUT.schemaName, description: ABOUT.meta.description, url }),
    faqJsonLd(ABOUT_FAQS),
  ];

  return (
    <>
      <JsonLd data={schema} />

      <SplitHero
        eyebrow={ABOUT.hero.eyebrow}
        title={ABOUT.hero.title}
        description={ABOUT.hero.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: ABOUT.breadcrumb }]}
        chips={ABOUT.hero.chips}
        source={ABOUT.hero.source}
        requirement={ABOUT.hero.requirement}
        formTitle={ABOUT.hero.formTitle}
      />

      <section className="py-20 md:py-28 max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">
            {ABOUT.story.eyebrow}
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
            {ABOUT.story.title}
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            {ABOUT.story.paragraphs[0]}
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            {ABOUT.story.paragraphs[1]}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/about/team.jpg"
            alt={ABOUT.story.imageAlt}
            width={1600}
            height={1067}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-[380px] md:h-[440px] object-cover"
            style={{ objectFit: "cover" }}
          />
        </Reveal>
      </section>

      <InlineCta {...ABOUT.ctas.story} />

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-14 mx-auto text-center">
            <span className="text-teal-dark text-xs font-semibold uppercase tracking-[0.16em]">
              {ABOUT.values.eyebrow}
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy mt-3 tracking-tight">
              {ABOUT.values.title}
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.values.items.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full bg-bgsoft rounded-2xl p-7 border border-[#DCEAF3] transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(11,43,78,0.18)] hover:border-teal">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5 text-teal">
                    <value.icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InlineCta {...ABOUT.ctas.values} />

      <section className="py-20 md:py-24 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {ABOUT.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-navy">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <SampleDownload {...ABOUT.sample} />

      <CoverageLinks topic={ABOUT.coverageTopic} />

      <Faq items={ABOUT_FAQS} {...ABOUT.faq} background="white" />

      <RelatedPages pages={getKeywordPagesBySlug(ABOUT.related.slugs)} eyebrow={ABOUT.related.eyebrow} heading={ABOUT.related.heading} />

      <ContactSplit {...ABOUT.footer} />
    </>
  );
}
