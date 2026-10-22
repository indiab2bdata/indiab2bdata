import type { Metadata } from "next";
import { HomeTemplate } from "@/components/templates/pages/HomeTemplate";
import { HOME } from "@/content/pages/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(HOME.meta);

export default function Home() {
  return <HomeTemplate />;
}
