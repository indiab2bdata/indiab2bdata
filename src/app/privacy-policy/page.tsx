import type { Metadata } from "next";
import { PolicyTemplate } from "@/components/templates/pages/PolicyTemplate";
import { PRIVACY_PAGE } from "@/content/pages/privacy-policy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PRIVACY_PAGE.meta);

export default function PrivacyPolicyPage() {
  return <PolicyTemplate page={PRIVACY_PAGE} contactSource="privacy-policy" />;
}
