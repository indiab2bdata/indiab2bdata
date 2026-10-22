import { MapPinned, RefreshCcw, Target, Zap } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "business-database-india",
    keyword: "business database India",
    title: "Business Database India | 50L+ Verified Contacts",
    metaDescription:
      "Access a verified business database across India - 50L+ contacts, 700+ cities, every major industry. Built for sales prospecting and marketing outreach.",
    eyebrow: "Business Database India",
    h1: "Business Database India - Reach Every Industry, Every City",
    answer:
      "A business database is a verified collection of company and contact records - names, phone numbers, emails and industry classification - used to identify and reach potential customers or partners. IndiaB2BData.com's business database spans 50L+ records across real estate, EdTech, finance, manufacturing, healthcare, e-commerce and 500+ other industries.",
    intro: [
      "Growing a business in India means reaching prospects across a huge range of cities, languages and industries. A generic contact list rarely fits - you need a business database that can be filtered down to exactly who you're trying to reach.",
      "Our business database covers 700+ cities and lets you filter by city, pincode, industry, turnover band or job role, so every list you receive is built for your specific outreach - not a one-size-fits-all export.",
    ],
    highlights: [
      { icon: Target, title: "Precisely Filtered", description: "Narrow by city, industry, turnover or designation." },
      { icon: MapPinned, title: "Pan-India Reach", description: "Every state, city and pincode cluster covered." },
      { icon: RefreshCcw, title: "Regularly Refreshed", description: "De-duplicated and refreshed on a monthly cycle." },
      { icon: Zap, title: "Quick Turnaround", description: "Delivery timeline confirmed in your quote." },
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
        answer: "Company name, mobile number, email (where available), city/location and industry category, filtered to your requirement.",
      },
      {
        question: "Can I get data for just one city or industry?",
        answer: "Yes - the Starter package covers a single city or district; larger packages cover multiple cities or states.",
      },
      {
        question: "Do you offer a free sample first?",
        answer: "Yes, every enquiry gets 15–20 free sample records so you can verify quality before paying.",
      },
      {
        question: "How do I place an order?",
        answer:
          "Share your requirement, review the free sample, choose a package and confirm payment. Delivery timelines are confirmed in the quote for each order.",
      },
    ],
  },
} satisfies CategoryContent;
