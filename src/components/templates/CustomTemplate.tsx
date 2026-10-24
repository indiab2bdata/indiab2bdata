import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/layout/JsonLd";
import { ContactSplit } from "@/components/sections/ContactSplit";
import { Blocks } from "@/components/sections/custom/Blocks";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { Faq } from "@/components/sections/Faq";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { SampleButton, WhatsAppButton } from "@/components/ui/Button";
import { CUSTOM_COPY } from "@/content/shared/custom-copy";
import { customJsonLd } from "@/lib/seo/jsonld";
import type { CustomPage } from "@/types/landing";

/**
 * A hand-built category page: shared hero, then the page's own blocks in its own order, then FAQs,
 * related links and the closing form. Structure differs per page by design (see content/categories).
 */
export function CustomTemplate({ page, updated }: { page: CustomPage; updated: string }) {
  const source = page.path.slice(1);
  return (
    <>
      <JsonLd data={customJsonLd(page, updated)} />

      <section className="relative overflow-hidden border-b border-[#DCEAF3] bg-[linear-gradient(180deg,#f2f9fd_0%,#ffffff_70%)] pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: CUSTOM_COPY.breadcrumbHub, href: "/database" }, { label: page.name }]} tone="light" />
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              {page.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-navy md:text-5xl">{page.h1}</h1>
            <p className="mt-5 max-w-[62ch] text-[1.05rem] leading-relaxed text-muted">{page.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SampleButton source={`${source}-hero`} label={page.cta.buttonLabel} />
              <WhatsAppButton message={page.cta.whatsappMessage} />
            </div>
          </div>
          <div className="lg:w-full lg:max-w-[460px] lg:justify-self-end">
            <LeadForm source={`${source}-hero-form`} requirement={page.name} title={page.cta.formTitle} subtitle={page.cta.formSubtitle} buttonLabel={page.cta.buttonLabel} />
          </div>
        </div>
      </section>

      <Blocks page={page} />

      <Faq items={page.faqs} id={`${source}-faq`} eyebrow={CUSTOM_COPY.faqEyebrow} heading={CUSTOM_COPY.faqHeading(page.name)} background="white" />

      <section className="bg-bgsoft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <RelatedLinks links={page.related} />
        </div>
      </section>

      <ContactSplit
        title={page.cta.footerTitle}
        text={page.cta.footerText}
        source={`${source}-footer-form`}
        requirement={page.name}
        formTitle={page.cta.formTitle}
        formButtonLabel={page.cta.buttonLabel}
      />

      <Disclaimer text={page.disclaimer} lastUpdated={updated.slice(0, 7)} />
    </>
  );
}
