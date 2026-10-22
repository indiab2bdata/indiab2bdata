import type { Metadata } from "next";
import { ContactTemplate } from "@/components/templates/pages/ContactTemplate";
import { CONTACT } from "@/content/pages/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(CONTACT.meta);

export default function ContactPage() {
  return <ContactTemplate />;
}
