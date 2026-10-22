import type { Metadata } from "next";
import { ThankYouContent } from "@/components/templates/pages/ThankYouTemplate";
import { THANK_YOU } from "@/content/pages/thank-you";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...buildMetadata(THANK_YOU.meta),
  // a confirmation page has no search value, and indexing it would inflate conversion tracking
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
