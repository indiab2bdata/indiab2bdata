import { Headphones, MapPinned, Network, Users } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "service-providers-database-india",
    keyword: "service providers database India",
    title: "Service Providers Database India | IT, Consulting & Agencies",
    metaDescription:
      "A database of service-sector companies across India - IT services, consulting, agencies and professional services, filtered by category and city.",
    eyebrow: "Service Providers Database India",
    h1: "Service Providers Database India - IT, Consulting & Professional Services",
    answer:
      "A service providers database lists companies in the service sector - IT services, consulting, agencies and other professional services - as opposed to product or manufacturing businesses. IndiaB2BData.com's service providers database is filtered by service category and city.",
    intro: [
      "Selling to service-sector companies is different from selling to manufacturers or retailers - different buying cycles, different decision-makers, different pain points. A service providers database keeps that segment separate from the rest.",
      "Whether you're targeting IT services firms, consultancies, agencies or other professional service companies, filtering by service category and city gets you a list built for that specific segment.",
    ],
    highlights: [
      { icon: Headphones, title: "Service-Sector Focus", description: "IT services, consulting, agencies and more." },
      { icon: Network, title: "By Service Category", description: "Segmented across professional service types." },
      { icon: Users, title: "Decision-Maker Contacts", description: "Reach relevant roles within service companies." },
      { icon: MapPinned, title: "City-Level Coverage", description: "Filter service providers by city or region." },
    ],
    useCases: [
      "Selling software or tools to IT services and agencies",
      "Partnering with consulting firms for referral pipelines",
      "Targeting professional service firms for B2B outreach",
      "Mapping service-sector competitors within a category",
    ],
    faqs: [
      {
        question: "What kinds of service providers are covered?",
        answer: "IT services, consulting firms, agencies and other professional service companies.",
      },
      {
        question: "Can I filter by a specific service category?",
        answer: "Yes - tell us the service category you need (e.g. IT services, marketing agencies) and we'll build a matching list.",
      },
      {
        question: "Can I combine service category and city filters?",
        answer: "Yes, both filters can be applied together in the same order.",
      },
      {
        question: "Is a free sample available before I order?",
        answer: "The CSV download is a fictional format preview. Ask whether a matching real sample is available for your selection, and confirm its fields and coverage.",
      },
    ],
  },
} satisfies CategoryContent;
