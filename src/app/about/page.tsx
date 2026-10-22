import type { Metadata } from "next";
import { AboutTemplate } from "@/components/templates/pages/AboutTemplate";
import { ABOUT } from "@/content/pages/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(ABOUT.meta);

export default function AboutPage() {
  return <AboutTemplate />;
}
