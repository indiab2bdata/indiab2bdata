import { ShieldCheck, Target, TrendingUp, Zap } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "business-leads-india",
    keyword: "business leads India",
    title: "Business Leads India | Contact-Level Selections",
    metaDescription:
      "Discuss business-contact selections by industry, location and company profile. Confirm available fields, coverage, sample options and delivery terms for your brief.",
    eyebrow: "Business Leads India",
    h1: "Business Leads India - Contact-Level Records for Outreach",
    answer:
      "Business leads are contact records requested around a target profile, such as industry, location or company size. A contact record does not establish buying intent. Ask which filters and contact fields are available, and which checks and duplicate-handling steps apply to the selected data.",
    intro: [
      "A business-lead selection is intended for outbound planning. It describes contact data, not an enquiry or a signal that the person is currently buying. Confirm the source, field availability and record date before using it.",
      "Describe your ideal customer profile, including industry, location, company size or role. Ask which filters can be supported and confirm the available fields and format in writing.",
    ],
    highlights: [
      { icon: Target, title: "Brief Your ICP", description: "Specify the audience and confirm available filters." },
      { icon: TrendingUp, title: "Contact-Level", description: "A contact record is not evidence of interest or intent." },
      { icon: ShieldCheck, title: "Checks to Confirm", description: "The published methodology says checks vary by dataset; ask which apply here." },
      { icon: Zap, title: "Fast Turnaround", description: "Delivery timeline confirmed in your quote." },
    ],
    useCases: [
      "Filling a telesales pipeline with fresh leads",
      "Feeding a CRM for a new outbound campaign",
      "Testing a new market segment before scaling spend",
      "Supplementing inbound leads with targeted outbound ones",
    ],
    faqs: [
      {
        question: "What's the difference between 'leads' and a general database?",
        answer: "Leads are built to your specific target profile and meant for immediate outreach, while a database is broader reference data.",
      },
      {
        question: "Can I define my ideal customer profile for the leads?",
        answer: "State the industry, location, company size or role you need. Ask which filters are available and request a dated count.",
      },
      {
        question: "Are the leads verified before delivery?",
        answer: "The published methodology describes deduplication and removal of invalid number formats before delivery; other checks vary by dataset and do not establish that every field is current. Ask which checks and dates apply to your selection.",
      },
      {
        question: "Can I get a sample of leads before ordering in bulk?",
        answer: "The CSV download is a fictional format preview. Ask whether a matching real sample is available for your selection, and confirm its fields and coverage.",
      },
    ],
  },
} satisfies CategoryContent;
