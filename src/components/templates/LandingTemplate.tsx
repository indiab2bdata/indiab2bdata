import { JsonLd } from "@/components/layout/JsonLd";
import { ComplianceBlock } from "@/components/sections/ComplianceBlock";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { CoverageTable } from "@/components/sections/CoverageTable";
import { CtaBand } from "@/components/sections/CtaBand";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { Explore } from "@/components/sections/Explore";
import { Faq } from "@/components/sections/Faq";
import { Guide } from "@/components/sections/Guide";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SampleTable } from "@/components/sections/SampleTable";
import { SegmentCards } from "@/components/sections/SegmentCards";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { UseCases } from "@/components/sections/UseCases";
import { LANDING_COPY } from "@/content/shared/landing-copy";
import { buildSampleCsv, buildSampleTable } from "@/lib/sample-data";
import { landingJsonLd } from "@/lib/seo/jsonld";
import type { LandingPage } from "@/types/landing";

/**
 * The one layout behind every category, state and city database page. Sections render in a fixed order;
 * keep the child list stable (React's useId - used for FAQ ids - depends on each child's position).
 */
export function LandingTemplate({ page }: { page: LandingPage }) {
  const source = page.path.replace(/^\//, "").replace(/\//g, "-");
  const place = { city: page.sample.city, state: page.sample.state };
  const preview = buildSampleTable(page.sample.profile, 5, place);
  const csv = buildSampleCsv(page.sample.profile, 20, place);
  const schema = landingJsonLd(page);
  const band = (i: 0 | 1 | 2) => <CtaBand text={page.cta.bands[i]} source={`${source}-band-${i + 1}`} whatsappMessage={page.cta.whatsappMessage} />;

  return (
    <>
      <JsonLd data={schema} />
      <Hero page={page} source={source} />
      <StatsBar page={page} />
      <SegmentCards page={page} />
      <SampleTable page={page} headers={preview.headers} rows={preview.rows} csv={csv} />
      {band(0)}
      <CoverageTable page={page} />
      <UseCases page={page} />
      {band(1)}
      {page.guide && <Guide guide={page.guide} />}
      <ProcessSteps />
      <ComplianceBlock />
      {band(2)}
      <Testimonials items={page.testimonials} />
      <Faq items={page.buyerFaqs} id={`${source}-faq`} eyebrow={LANDING_COPY.faq.eyebrow} heading={LANDING_COPY.faq.heading(page.name)} background="white" />
      <Explore related={page.relatedLinks} locations={page.locationLinks} />
      <ContactSplit
        title={page.cta.footerTitle}
        text={page.cta.footerText}
        source={`${source}-footer-form`}
        requirement={page.name}
        formTitle={page.cta.formTitle}
        formButtonLabel={page.cta.buttonLabel}
      />
      <Disclaimer text={page.disclaimer} lastUpdated={page.lastUpdated} />
    </>
  );
}
