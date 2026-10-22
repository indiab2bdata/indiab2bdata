import { ClipboardCheck, FileSpreadsheet, Phone } from "lucide-react";

/** /thank-you (noindex confirmation page). Rich lines are split where the visitor's name / requirement is inserted. */
export const THANK_YOU = {
  meta: {
    title: "Thank You",
    description: "Your request has been received. Our team will share sample records and a quote shortly.",
    path: "/thank-you",
  },
  /** "{prefix}{, Name}{suffix}" */
  title: { prefix: "Thank you", suffix: "!" },
  /** "{prefix}{ for <strong>requirement</strong>}{suffix}" */
  received: {
    prefix: "We've received your request",
    forWord: " for ",
    suffix: ". Our team will reach out shortly with free sample records and a custom quote.",
  },
  whatsappCta: "Get a faster reply on WhatsApp",
  whatsappText: (requirement?: string, firstName?: string) =>
    `Hi, I just submitted a request${requirement ? ` for ${requirement}` : ""} on IndiaB2BData. My name is ${firstName || ""}.`,
  nextLabel: "What happens next",
  steps: [
    { icon: ClipboardCheck, title: "We review your requirement", text: "A data specialist checks your target audience, location and filters." },
    { icon: Phone, title: "We call or WhatsApp you", text: "Usually within a few working hours, to confirm details and quantity." },
    { icon: FileSpreadsheet, title: "You get free sample records", text: "Check the quality yourself before you pay for anything." },
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
