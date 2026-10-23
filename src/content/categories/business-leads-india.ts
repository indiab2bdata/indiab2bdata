import { ShieldCheck, Target, TrendingUp, Zap } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "business-leads-india",
    keyword: "business leads India",
    title: "Business Leads India | Sales-Ready Contacts",
    metaDescription:
      "Get sales-ready business leads across India, matched to your target industry, city and company profile. Business contacts, delivered fast.",
    eyebrow: "Business Leads India",
    h1: "Business Leads India - Sales-Ready Contacts for Your Pipeline",
    answer:
      "Business leads are contact records matched to a specific target profile - industry, city, company size - and intended to go straight into a sales pipeline rather than serve as a generic reference list. IndiaB2BData.com builds business leads to your ideal customer profile, checked and deduplicated before delivery.",
    intro: [
      "A lead is different from a generic contact - it's meant to be dialled or messaged today, not stored as reference data. That means accuracy and relevance matter more than raw volume.",
      "We build business leads against your specific ideal customer profile - industry, city, company size, designation - so what lands in your CRM is ready for outreach, not a list that still needs heavy filtering.",
    ],
    highlights: [
      { icon: Target, title: "Matched to Your ICP", description: "Built around your ideal customer profile." },
      { icon: TrendingUp, title: "Sales-Ready", description: "Meant for immediate outreach, not just reference." },
      { icon: ShieldCheck, title: "Checked & Deduplicated", description: "Reduces wasted calls on duplicate or invalid numbers." },
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
        answer: "Yes - tell us industry, city, company size or designation and we'll build leads matching that profile.",
      },
      {
        question: "Are the leads verified before delivery?",
        answer: "Yes, every lead list is checked and deduplicated before it reaches you. Check numbers against the DND registry before promotional calls or messages.",
      },
      {
        question: "Can I get a sample of leads before ordering in bulk?",
        answer: "Yes, every enquiry includes 15–20 free sample records to check quality first.",
      },
    ],
  },
} satisfies CategoryContent;
