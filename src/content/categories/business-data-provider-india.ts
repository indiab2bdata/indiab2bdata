import { ListChecks, RefreshCcw, Search, UserCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "business-data-provider-india",
    keyword: "business data provider India",
    title: "Business Data Provider India | Data Quality Checks",
    metaDescription:
      "A business data provider in India with a transparent verification pipeline - collection, verification and deduplication before delivery.",
    eyebrow: "Business Data Provider India",
    h1: "Business Data Provider India - How Our Data Pipeline Works",
    answer:
      "A business data provider supplies contact and company data for sales and marketing use, typically on a one-time or recurring basis. IndiaB2BData.com operates a three-stage pipeline - collection, verification and deduplication - before any business data reaches a client.",
    intro: [
      "Agencies, call centres and internal sales teams all need a steady, reliable feed of business data - not just a single list. As a business data provider, our focus is on the pipeline behind the data, not just the export file you receive.",
      "Every batch goes through the same three steps: records are collected from public and permission-based sources, cross-checked for accuracy, and deduplicated against our existing database before delivery.",
    ],
    highlights: [
      { icon: Search, title: "Multi-Source Collection", description: "Records gathered from public and permission-based channels." },
      { icon: UserCheck, title: "Verification Pipeline", description: "Manual and automated checks before delivery." },
      { icon: ListChecks, title: "Deduplication", description: "Cross-checked against our existing database." },
      { icon: RefreshCcw, title: "Monthly Refresh Cycle", description: "Inactive contacts identified and replaced regularly." },
    ],
    useCases: [
      "Agencies needing a white-label data supply for clients",
      "Sales teams needing a steady, recurring data feed",
      "Marketing agencies managing multiple campaigns at once",
      "Call centres needing dialer-ready, deduplicated lists",
    ],
    faqs: [
      {
        question: "Can you supply data on a recurring basis, not just once?",
        answer: "Yes - Business and Enterprise packages include periodic refreshes so you get a continuing feed, not a one-off list.",
      },
      {
        question: "Do you support white-label or agency use?",
        answer: "Yes, agencies regularly use our data to service their own clients under their own branding.",
      },
      {
        question: "Who is responsible for DND compliance?",
        answer: "The sender. Before calling or sending promotional messages, check numbers against the DND (NCPR) registry and follow TRAI's commercial-communication rules.",
      },
      {
        question: "What's the typical turnaround for a bulk order?",
        answer: "Delivery timelines are confirmed in the quote for each order. Timing depends on volume and filter complexity.",
      },
    ],
  },
} satisfies CategoryContent;
