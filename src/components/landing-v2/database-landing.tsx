import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Faq } from "@/components/sections/faq";
import { ContactSplit } from "@/components/landing/sections";
import {
  ComplianceBlock,
  CoverageSection,
  CtaBand,
  Disclaimer,
  ExploreSection,
  GuideSection,
  LandingHero,
  SamplePreview,
  SegmentSection,
  StatsBar,
  Stepper,
  TestimonialsGrid,
  UseCaseSection,
} from "@/components/landing-v2/sections";
import { buildSampleCsv, buildSampleTable } from "@/lib/sample-data";
import { isPlaceholder } from "@/lib/landing/display";
import type { LandingProfile } from "@/lib/landing/types";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbJsonLd, databaseServiceJsonLd, faqJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

export function landingMetadata(profile: LandingProfile): Metadata {
  return pageMetadata({
    title: profile.title,
    description: profile.metaDescription,
    path: profile.path,
    image: { url: `${siteConfig.url}${profile.image.src}`, width: 1200, height: 800, alt: profile.image.alt },
  });
}

/** The single template behind every category, state and city database page. */
export function DatabaseLanding({ profile }: { profile: LandingProfile }) {
  const url = `${siteConfig.url}${profile.path}`;
  const source = profile.path.replace(/^\//, "").replace(/\//g, "-");
  const place = { city: profile.sample.city, state: profile.sample.state };
  const preview = buildSampleTable(profile.sample.profile, 5, place);
  const csv = buildSampleCsv(profile.sample.profile, 20, place);
  const price = Number(profile.pricingHint.from.replace(/[^\d.]/g, ""));

  const schema = [
    breadcrumbJsonLd([{ name: "Home", url: siteConfig.url }, ...profile.breadcrumbs.map((b) => ({ name: b.label, url: `${siteConfig.url}${b.href}` }))]),
    { ...webPageJsonLd({ name: profile.title, description: profile.metaDescription, url, about: profile.name }), dateModified: `${profile.lastUpdated}-01` },
    databaseServiceJsonLd({
      name: profile.name,
      description: profile.metaDescription,
      url,
      areaServed: profile.areaServed,
      priceFrom: !isPlaceholder(profile.pricingHint.from) && price > 0 ? price : undefined,
    }),
    faqJsonLd(profile.buyerFaqs),
  ];
  const band = (i: 0 | 1 | 2) => <CtaBand text={profile.cta.bands[i]} source={`${source}-band-${i + 1}`} whatsappMessage={profile.cta.whatsappMessage} />;

  return (
    <>
      <JsonLd data={schema} />
      <LandingHero profile={profile} source={source} />
      <StatsBar profile={profile} />
      <SegmentSection profile={profile} />
      <SamplePreview profile={profile} headers={preview.headers} rows={preview.rows} csv={csv} />
      {band(0)}
      <CoverageSection profile={profile} />
      <UseCaseSection profile={profile} />
      {band(1)}
      {profile.guide && <GuideSection guide={profile.guide} />}
      <Stepper />
      <ComplianceBlock />
      {band(2)}
      <TestimonialsGrid items={profile.testimonials} />
      <Faq items={profile.buyerFaqs} id={`${source}-faq`} eyebrow="Buyer FAQs" heading={`${profile.name}: Buyer Questions`} background="white" />
      <ExploreSection related={profile.relatedLinks} locations={profile.locationLinks} />
      <ContactSplit
        title={profile.cta.footerTitle}
        text={profile.cta.footerText}
        source={`${source}-footer-form`}
        requirement={profile.name}
        formTitle={profile.cta.formTitle}
        formButtonLabel={profile.cta.buttonLabel}
      />
      <Disclaimer text={profile.disclaimer} lastUpdated={profile.lastUpdated} />
    </>
  );
}
