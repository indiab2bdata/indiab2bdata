import { ListChecks, RefreshCcw, Search, UserCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "business-data-provider-india",
    keyword: "business data provider India",
    title: "Business Data Provider India | Compare Data Terms",
    metaDescription:
      "Compare business-data providers by documented sources, record dates, fields, checks, duplicate handling and delivery terms for the dataset you need.",
    eyebrow: "Business Data Provider India",
    h1: "Business Data Provider India - How Our Data Pipeline Works",
    answer:
      "A business data provider supplies company or contact records for a defined business use. Before purchase, ask for the source, extract date, included fields, duplicate-handling method, price basis and any recurring-delivery terms. This page does not certify a particular dataset.",
    intro: [
      "A buyer considering a one-time or recurring selection should confirm the source and date of each extract, what changes between deliveries, how duplicate records are handled, and whether the agreed fields can be supplied in the requested format.",
      "Request a written description of the collection sources, checks and duplicate handling applied to the specific selection. Do not treat a general process statement as evidence about a particular field or record.",
    ],
    highlights: [
      { icon: Search, title: "Source Details", description: "Ask for the source information for the proposed selection." },
      { icon: UserCheck, title: "Checks to Confirm", description: "Ask which checks were applied to which fields and when." },
      { icon: ListChecks, title: "Duplicate Handling", description: "Confirm the deduplication basis and counting unit." },
      { icon: RefreshCcw, title: "Repeat Deliveries", description: "Ask whether repeat extracts are available and what changes between them." },
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
        answer: "Ask whether recurring delivery is available for your selection. Confirm the frequency, snapshot basis, duplicate handling, price and replacement terms in writing.",
      },
      {
        question: "Do you support white-label or agency use?",
        answer: "Ask whether agency or white-label terms are available and confirm permitted use, attribution, support and resale restrictions in the written agreement.",
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
