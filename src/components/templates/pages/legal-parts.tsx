import { JsonLd } from "@/components/layout/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/config/site";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import type { LegalPageContent } from "@/types/landing";

/**
 * Building blocks shared by the legal templates. They return elements (not wrapper components), so each
 * template's top-level children stay exactly what the page has always rendered.
 */
export function legalJsonLd(page: LegalPageContent) {
  const url = `${siteConfig.url}${page.meta.path}`;
  return (
    <JsonLd
      data={[
        breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: page.breadcrumb, url },
        ]),
        webPageJsonLd({ name: page.schemaName, description: page.meta.description, url }),
      ]}
    />
  );
}

export function legalHero(page: LegalPageContent) {
  return (
    <PageHero
      eyebrow={page.hero.eyebrow}
      title={page.hero.title}
      description={page.hero.description}
      compact
      breadcrumbs={[{ label: "Home", href: "/" }, { label: page.breadcrumb }]}
    />
  );
}

/** The two card styles in use: same utilities, in the order each page has always used. */
export function legalCard(page: LegalPageContent, variant: "compliance" | "policy") {
  return variant === "compliance" ? (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="space-y-9 rounded-2xl border border-[#DCEAF3] bg-white p-7 text-sm leading-relaxed text-navy/85 md:p-12 md:text-base">
        {page.body}
      </div>
    </section>
  ) : (
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-5 md:px-8">
      <div className="bg-white rounded-2xl border border-[#DCEAF3] p-7 md:p-12 space-y-9 text-sm md:text-base text-navy/85 leading-relaxed">
        {page.body}
      </div>
    </section>
  );
}
