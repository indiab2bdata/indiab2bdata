import { ListChecks, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "verified-business-database-india",
    keyword: "business database India",
    title: "Business Database India | Accuracy You Can Trust",
    metaDescription:
      "A business database for India - manually and automatically checked and deduplicated. Free sample before you buy.",
    eyebrow: "Business Database India",
    h1: "Business Database India - Accuracy Before Anything Else",
    answer:
      "A business database is one where every record has been checked for accuracy and deduplicated before it's delivered. IndiaB2BData.com verifies every record in its database this way, and offers a free sample so you can confirm accuracy before you buy.",
    intro: [
      "\"Verified\" is a word a lot of data sellers use loosely. For us it means a specific process: every record is checked and deduplicated against our existing database - every single time, not just on request.",
      "That process is what keeps connect rates high and protects your sender reputation on WhatsApp and email - nobody wants to burn a campaign on numbers that were never real to begin with.",
    ],
    highlights: [
      { icon: UserCheck, title: "Manual + Automated Checks", description: "Records checked before they ever reach a client." },
      { icon: ShieldCheck, title: "Deduplicated Records", description: "Duplicates and invalid numbers removed before delivery." },
      { icon: ListChecks, title: "Deduplicated", description: "No repeat records inflating your list count." },
      { icon: Sparkles, title: "Free Sample First", description: "See real records before you commit to a package." },
    ],
    useCases: [
      "Reducing wasted calls on a telesales floor",
      "Improving WhatsApp/SMS connect and open rates",
      "Planning DND/TRAI-compliant outreach",
      "Protecting sender reputation on bulk campaigns",
    ],
    faqs: [
      {
        question: "How exactly do you verify the data?",
        answer:
          "Records go through source verification and deduplication against our existing database before delivery.",
      },
      {
        question: "What is the DND registry?",
        answer:
          "The National Customer Preference Register (NCPR), often called DND, lists numbers that have opted out of promotional calls and messages. Buyers must check numbers against it and follow TRAI rules before promotional outreach.",
      },
      {
        question: "Can I verify the quality myself before paying?",
        answer: "Yes - every enquiry includes 15–20 free sample records to check before you commit.",
      },
      {
        question: "What happens if a number turns out to be inactive?",
        answer: "Business and Enterprise packages include periodic refreshes that replace inactive contacts at no extra cost.",
      },
    ],
  },
} satisfies CategoryContent;
