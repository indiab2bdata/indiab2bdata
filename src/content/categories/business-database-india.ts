import { MapPinned, RefreshCcw, Target, Zap } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "business-database-india",
    keyword: "business database India",
    title: "Business Database India | Company & Contact Selections",
    metaDescription:
      "Discuss a company or business-contact selection for sales prospecting, market research or partner discovery. Confirm available fields, locations, source, date and count for your brief.",
    eyebrow: "Business Database India",
    h1: "Business Database India - Company and Contact Selections",
    answer:
      "A business database organizes company and contact records for prospecting, market research or partner discovery. State the business types, locations and fields you need, then confirm the source, available filters and dated count for the selected data.",
    intro: [
      "Business requirements vary by industry, location and role. Describe the audience you need, then confirm which filters and fields are available for the selected records.",
      "A brief can specify location, industry, company size or role. Ask which filters are available for the selected records and request a dated count before purchase.",
    ],
    highlights: [
      { icon: Target, title: "Selection Criteria", description: "Ask which industry, company and role fields can be used as filters." },
      { icon: MapPinned, title: "Location Scope", description: "Specify states, cities or pincodes and confirm matching coverage." },
      { icon: RefreshCcw, title: "Update Information", description: "Ask when the selected records were last sourced or checked." },
      { icon: Zap, title: "Delivery Terms", description: "Confirm file format and delivery timing in your written quote." },
    ],
    useCases: [
      "Sales prospecting and pipeline building",
      "Lead generation for marketing campaigns",
      "Market research before entering a new segment",
      "Investor, vendor and partner outreach",
    ],
    faqs: [
      {
        question: "What's included in the business database?",
        answer: "Potential fields include company name, business contact details, location and industry. Confirm which are available in the selected dataset.",
      },
      {
        question: "Can I get data for just one city or industry?",
        answer: "State the locations in your brief and ask which can be supported; confirm the matching count before purchase.",
      },
      {
        question: "Do you offer a free sample first?",
        answer: "The CSV download is a fictional format preview. Ask whether a matching real sample is available for your selection, and confirm its fields and coverage.",
      },
      {
        question: "How do I place an order?",
        answer:
          "Share your requirement, confirm the available fields and sample options, then request a written quote with the counting unit and delivery terms.",
      },
    ],
  },
} satisfies CategoryContent;
