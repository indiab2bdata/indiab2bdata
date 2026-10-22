import type { Metadata } from "next";
import { HomeTemplate } from "@/components/templates/pages/HomeTemplate";
import { HOME } from "@/content/pages/home";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata(HOME.meta);

export default function Home() {
  return <HomeTemplate />;
}
