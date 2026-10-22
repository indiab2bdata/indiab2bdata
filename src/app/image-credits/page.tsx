import type { Metadata } from "next";
import { ImageCreditsTemplate } from "@/components/templates/pages/ImageCreditsTemplate";
import { IMAGE_CREDITS } from "@/content/pages/image-credits";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(IMAGE_CREDITS.meta),
  robots: { index: false, follow: true },
};

export default function ImageCreditsPage() {
  return <ImageCreditsTemplate />;
}
