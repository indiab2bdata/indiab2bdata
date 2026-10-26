import { PriorityEvidence } from "@/components/sections/PriorityEvidence";
import Link from "next/link";
import { JsonLd } from "@/components/layout/JsonLd";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { Faq } from "@/components/sections/Faq";
import { SplitHero } from "@/components/sections/keyword/SplitHero";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { LinkedText } from "@/components/ui/LinkedText";
import { ProtectedEmail } from "@/components/ui/ProtectedEmail";
import { siteConfig } from "@/config/site";
import { getKeywordPagesBySlug } from "@/content";
import { ABOUT } from "@/content/pages/about";
import { ABOUT_FAQS } from "@/content/pages/faqs";
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";

export function AboutTemplate() {
  const url = siteConfig.url + ABOUT.meta.path;
  const identity = ABOUT.identity;
  return <>
    <JsonLd data={[
      breadcrumbJsonLd([{name:"Home",url:siteConfig.url},{name:ABOUT.breadcrumb,url}]),
      webPageJsonLd({type:"AboutPage",name:ABOUT.schemaName,description:ABOUT.meta.description,url}),
      faqJsonLd(ABOUT_FAQS),
    ]} />
    <SplitHero {...ABOUT.hero} breadcrumbs={[{label:"Home",href:"/"},{label:ABOUT.breadcrumb}]} />
    <section className="bg-white py-16 md:py-20" aria-labelledby="about-business-details">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <h2 id="about-business-details" className="font-display text-3xl font-extrabold text-navy">{identity.heading}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{identity.intro}</p>
        <dl className="mt-8 grid gap-6 rounded-2xl border border-slate-200 bg-bgsoft p-6 sm:grid-cols-2 md:p-8">
          <div><dt className="text-sm font-semibold text-navy">{identity.brandLabel}</dt><dd className="mt-2 text-muted">{siteConfig.name}</dd></div>
          <div><dt className="text-sm font-semibold text-navy">{identity.addressLabel}</dt><dd className="mt-2 leading-relaxed text-muted">{siteConfig.address.display}</dd></div>
          <div><dt className="text-sm font-semibold text-navy">{identity.phoneLabel}</dt><dd className="mt-2"><a href={siteConfig.phoneHref} className="font-semibold text-teal-dark underline underline-offset-4">{siteConfig.phoneDisplay}</a></dd></div>
          <div><dt className="text-sm font-semibold text-navy">{identity.emailLabel}</dt><dd className="mt-2"><ProtectedEmail className="font-semibold text-teal-dark underline underline-offset-4" /></dd></div>
        </dl>
        <div className="mt-5 flex flex-wrap gap-5 text-sm font-semibold text-teal-dark">
          <a href={siteConfig.mapsHref} className="underline underline-offset-4">{identity.mapLabel}</a>
          <Link href="/contact" className="underline underline-offset-4">{identity.contactLabel}</Link>
        </div>
      </div>
    </section>
    {ABOUT.sections.map(section=><section key={section.heading} className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
      <h2 className="font-display text-2xl font-extrabold text-navy md:text-3xl">{section.heading}</h2>
      {section.paragraphs.map((p,i)=><p key={i} className="mt-4 max-w-[72ch] leading-relaxed text-muted"><LinkedText text={p} links={ABOUT.links} /></p>)}
    </section>)}
    <PriorityEvidence path="/about" />
    <Faq items={ABOUT_FAQS} {...ABOUT.faq} background="white" />
    <RelatedPages pages={getKeywordPagesBySlug(ABOUT.related.slugs)} eyebrow={ABOUT.related.eyebrow} heading={ABOUT.related.heading} />
    <ContactSplit {...ABOUT.footer} />
  </>;
}
