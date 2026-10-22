import type { Metadata } from "next";
import { ComplianceTemplate } from "@/components/templates/pages/ComplianceTemplate";
import { COMPLIANCE_PAGE } from "@/content/pages/data-sourcing-compliance";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(COMPLIANCE_PAGE.meta);

export default function DataSourcingCompliancePage() {
  return <ComplianceTemplate page={COMPLIANCE_PAGE} />;
}
