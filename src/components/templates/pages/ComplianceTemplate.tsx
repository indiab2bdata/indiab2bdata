import { legalCard, legalHero, legalJsonLd } from "@/components/templates/pages/legal-parts";
import type { LegalPageContent } from "@/types/landing";

/** /data-sourcing-compliance: compact hero + one card of numbered sections. */
export function ComplianceTemplate({ page }: { page: LegalPageContent }) {
  return (
    <>
      {legalJsonLd(page)}
      {legalHero(page)}
      {legalCard(page, "compliance")}
    </>
  );
}
