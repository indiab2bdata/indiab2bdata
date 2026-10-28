import { BadgeCheck, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "b2b-data-provider-india",
    keyword: "B2B data provider India",
    title: "B2B Data Provider India | Buyer Checklist",
    metaDescription:
      "Looking for a trusted B2B data provider in India? Compare what to check for - accuracy, compliance, delivery speed - and see why teams choose IndiaB2BData.com.",
    eyebrow: "B2B Data Provider India",
    h1: "B2B Data Provider India - What to Look For, and Why Teams Choose Us",
    answer:
      "A B2B data provider supplies company or contact selections for business use. Compare the source, record date, fields, duplicate handling, sample options and written use terms for the specific selection; this page does not certify a provider or dataset.",
    intro: [
      "Before selecting a B2B data provider, ask what the records describe, which fields are available, what checks were applied and when, how duplicates are handled, and how the price and delivery unit are defined. A sample can help assess format and a limited set of rows, but it does not prove the quality of an entire dataset.",
      "For any proposed B2B selection, request the source information, field list, dated count, duplicate-handling description and written delivery terms before deciding.",
    ],
    highlights: [
      { icon: BadgeCheck, title: "Checks to Ask About", description: "Confirm which checks were applied, to which fields and on what date." },
      { icon: ShieldCheck, title: "Use Terms", description: "Review the stated source, permitted purpose and channel-specific requirements." },
      { icon: Sparkles, title: "Sample Options", description: "Ask whether a matching sample is available; the public CSV is fictional." },
      { icon: Users, title: "Define Your Brief", description: "Describe the audience, locations, fields and file format you need." },
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
          "Ask whether a matching sample is available. Confirm its scope, the source and date of the selected data, relevant use terms, file format and delivery terms before purchase.",
      },
      {
        question: "Is IndiaB2BData.com's data compliant to use?",
        answer:
          "This page does not make a dataset-specific sourcing or DND-screening claim. Request the source information and ask which communication checks, if any, apply to the selected records.",
      },
      {
        question: "In what format is the data delivered?",
        answer: "Ask which file format and delivery method are available for your selection, and confirm field order before purchase.",
      },
      {
        question: "Can I request a custom filter combination?",
        answer:
          "State the cities, industries, turnover bands or roles you need. Ask which filters can be supported and confirm the matching count in writing.",
      },
    ],
  },
} satisfies CategoryContent;
