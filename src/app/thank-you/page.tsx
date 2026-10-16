import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ThankYouContent } from "./thank-you-content";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Thank You",
    description: "Your request has been received. Our team will share sample records and a quote shortly.",
    path: "/thank-you",
  }),
  // a confirmation page has no search value, and indexing it would inflate conversion tracking
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
