import type { Metadata } from "next";
import { AboutTemplate } from "@/components/templates/pages/AboutTemplate";
import { ABOUT } from "@/content/pages/about";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata(ABOUT.meta);

export default function AboutPage() {
  return <AboutTemplate />;
}
