import type { Metadata } from "next";
import { ImageCreditsTemplate } from "@/components/templates/pages/ImageCreditsTemplate";
import { IMAGE_CREDITS } from "@/content/pages/image-credits";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...buildMetadata(IMAGE_CREDITS.meta),
  robots: { index: false, follow: true },
};

export default function ImageCreditsPage() {
  return <ImageCreditsTemplate />;
}
