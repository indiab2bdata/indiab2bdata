import type { Metadata } from "next";
import { ComplianceTemplate } from "@/components/templates/pages/ComplianceTemplate";
import { COMPLIANCE_PAGE } from "@/content/pages/data-sourcing-compliance";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata(COMPLIANCE_PAGE.meta);

export default function DataSourcingCompliancePage() {
  return <ComplianceTemplate page={COMPLIANCE_PAGE} />;
}
