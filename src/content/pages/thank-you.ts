import { ClipboardCheck, FileSpreadsheet, Phone } from "lucide-react";

/** /thank-you (noindex confirmation page). Rich lines are split where the visitor's name / requirement is inserted. */
export const THANK_YOU = {
  meta: {
    title: "Thank You",
    description: "Your request has been received. Review related products or use WhatsApp to discuss your brief.",
    path: "/thank-you",
  },
  /** "{prefix}{, Name}{suffix}" */
  title: { prefix: "Thank you", suffix: "!" },
  /** "{prefix}{ for <strong>requirement</strong>}{suffix}" */
  received: {
    prefix: "We've received your request",
    forWord: " for ",
    suffix: ".",
  },
  whatsappCta: "Get a faster reply on WhatsApp",
  whatsappText: (requirement?: string, firstName?: string) =>
    `Hi, I just submitted a request${requirement ? ` for ${requirement}` : ""} on IndiaB2BData. My name is ${firstName || ""}.`,
  nextLabel: "What happens next",
  steps: [
    { icon: ClipboardCheck, title: "We review your requirement", text: "A data specialist checks your target audience, location and filters." },
    { icon: Phone, title: "Discuss the requirement", text: "Use the published phone or WhatsApp details if you want to clarify your audience, fields or quantity." },
    { icon: FileSpreadsheet, title: "Ask about sample options", text: "Public downloads are fictional format examples. Confirm whether a matching real-data sample is available before ordering." },
  ],
  exploreLabel: "While you wait, explore more databases",
  popular: [
    { href: "/b2b-database-india", label: "B2B Database" },
    { href: "/gst-database-india", label: "GST Data" },
    { href: "/mobile-number-database-india", label: "Mobile Numbers" },
    { href: "/ceo-cfo-cmo-it-heads-database-india", label: "CXO Contacts" },
    { href: "/database", label: "Database by State" },
  ],
  back: "← Back to homepage",
};
