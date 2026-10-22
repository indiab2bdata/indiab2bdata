import type { Metadata } from "next";
import { PolicyTemplate } from "@/components/templates/pages/PolicyTemplate";
import { TERMS_PAGE } from "@/content/pages/terms-and-conditions";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata(TERMS_PAGE.meta);

export default function TermsAndConditionsPage() {
  return <PolicyTemplate page={TERMS_PAGE} contactSource="terms-and-conditions" />;
}
