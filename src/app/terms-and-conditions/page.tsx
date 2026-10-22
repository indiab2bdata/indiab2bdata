import type { Metadata } from "next";
import { PolicyTemplate } from "@/components/templates/pages/PolicyTemplate";
import { TERMS_PAGE } from "@/content/pages/terms-and-conditions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(TERMS_PAGE.meta);

export default function TermsAndConditionsPage() {
  return <PolicyTemplate page={TERMS_PAGE} contactSource="terms-and-conditions" />;
}
