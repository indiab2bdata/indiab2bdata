import type { Metadata } from "next";
import { DatabaseHubTemplate } from "@/components/templates/pages/DatabaseHubTemplate";
import { DATABASE_HUB } from "@/content/pages/database";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata(DATABASE_HUB.meta);

export default function DatabaseHubPage() {
  return <DatabaseHubTemplate />;
}
