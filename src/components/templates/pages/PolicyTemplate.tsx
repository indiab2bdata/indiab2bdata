import { ContactCta } from "@/components/sections/ContactCta";
import { legalCard, legalHero, legalJsonLd } from "@/components/templates/pages/legal-parts";
import type { LegalPageContent } from "@/types/landing";

/** Privacy policy and terms: compact hero + one card of numbered sections + the contact form. */
export function PolicyTemplate({ page, contactSource }: { page: LegalPageContent; contactSource: string }) {
  return (
    <>
      {legalJsonLd(page)}
      {legalHero(page)}
      {legalCard(page, "policy")}
      <ContactCta source={contactSource} />
    </>
  );
}
