import { BadgeCheck, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "b2b-data-provider-india",
    keyword: "B2B data provider India",
    title: "B2B Data Provider India | Compliant Data",
    metaDescription:
      "Looking for a trusted B2B data provider in India? Compare what to check for - accuracy, compliance, delivery speed - and see why teams choose IndiaB2BData.com.",
    eyebrow: "B2B Data Provider India",
    h1: "B2B Data Provider India - What to Look For, and Why Teams Choose Us",
    answer:
      "A B2B data provider is a company that compiles, verifies and licenses business contact data for sales and marketing use. When choosing a B2B data provider in India, prioritise accuracy checks, DND/TRAI compliance, industry breadth and delivery speed - IndiaB2BData.com covers all four across 700+ cities.",
    intro: [
      "Not every B2B data provider is built the same. Some resell stale, unverified lists; others lock you into large minimum orders before you've even seen a sample. The difference shows up fast once your team starts dialling - either you reach real decision-makers, or you burn hours on dead numbers.",
      "As a B2B data provider in India, we check and deduplicate records before delivery and let you request a free sample before you commit to a package - so you can judge quality before you pay.",
    ],
    highlights: [
      { icon: BadgeCheck, title: "Accuracy Checks", description: "Every record checked and deduplicated before delivery." },
      { icon: ShieldCheck, title: "Compliance-Conscious", description: "Supplied for lawful B2B use, with DND/TRAI guidance for buyers." },
      { icon: Sparkles, title: "Sample Before You Buy", description: "15–20 free sample records on every enquiry." },
      { icon: Users, title: "Dedicated Support", description: "A real team to help you scope the right filters." },
    ],
    useCases: [
      "Evaluating providers before switching from an existing data source",
      "Sourcing a one-time list for a specific campaign or launch",
      "Setting up a recurring monthly data feed for a sales team",
      "White-labelling data for an agency's own clients",
    ],
    faqs: [
      {
        question: "What should I check before picking a B2B data provider?",
        answer:
          "Ask for a free sample, confirm how recently the data was verified, check DND/compliance practices, and clarify delivery format and turnaround time before paying.",
      },
      {
        question: "Is IndiaB2BData.com's data compliant to use?",
        answer:
          "Yes - data is sourced from publicly available and permission-based channels, and DND numbers are scrubbed before delivery.",
      },
      {
        question: "In what format is the data delivered?",
        answer: "As a clean Excel (.xlsx) or CSV file, sent over email or WhatsApp, ready for your CRM or dialer.",
      },
      {
        question: "Can I request a custom filter combination?",
        answer:
          "Yes - tell us the city, industry, turnover band or designation you need and we'll build a custom list for you.",
      },
    ],
  },
} satisfies CategoryContent;
