import type { Metadata } from "next";
import { DatabaseHubTemplate } from "@/components/templates/pages/DatabaseHubTemplate";
import { DATABASE_HUB } from "@/content/pages/database";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(DATABASE_HUB.meta);

export default function DatabaseHubPage() {
  return <DatabaseHubTemplate />;
}
