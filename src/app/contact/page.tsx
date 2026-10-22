import type { Metadata } from "next";
import { ContactTemplate } from "@/components/templates/pages/ContactTemplate";
import { CONTACT } from "@/content/pages/contact";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata(CONTACT.meta);

export default function ContactPage() {
  return <ContactTemplate />;
}
