import type { Metadata } from "next";
import { PolicyTemplate } from "@/components/templates/pages/PolicyTemplate";
import { METHODOLOGY_PAGE } from "@/content/pages/data-sourcing-methodology";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata(METHODOLOGY_PAGE.meta);

export default function DataSourcingMethodologyPage() {
  return <PolicyTemplate page={METHODOLOGY_PAGE} contactSource="data-sourcing-methodology" />;
}
