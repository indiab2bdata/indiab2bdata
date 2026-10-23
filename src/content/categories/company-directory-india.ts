import { BookOpen, Building2, MapPinned, Search } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "company-directory-india",
    keyword: "company directory India",
    title: "Company Directory India | Look Up Company Profiles",
    metaDescription:
      "Search a company directory for India - company name, category, city and contact details. Built for due-diligence and quick company look-ups.",
    eyebrow: "Company Directory India",
    h1: "Company Directory India - Look Up Any Company, Fast",
    answer:
      "A company directory is a searchable listing of companies organised by name, category and city, used to quickly look up a specific company's profile rather than pull a bulk list. IndiaB2BData.com's company directory covers 700+ cities and 500+ categories, with contact details on request.",
    intro: [
      "Sometimes you don't need a bulk export - you need to check one company. Before a meeting, a vendor onboarding, or a partnership call, it helps to quickly confirm who you're dealing with: their category, city and how to reach them.",
      "Our company directory is built for that lookup use case as much as bulk list-building - search by company name or narrow by category and city to find the exact profile you need.",
    ],
    highlights: [
      { icon: BookOpen, title: "Searchable Listings", description: "Look up companies by name, category or city." },
      { icon: Search, title: "Quick Company Lookup", description: "Confirm a company's details before you engage." },
      { icon: MapPinned, title: "700+ Cities", description: "Directory coverage across every major city cluster." },
      { icon: Building2, title: "500+ Categories", description: "Companies classified by industry and business type." },
    ],
    useCases: [
      "Verifying a company's details before a meeting or deal",
      "Vendor and partner due-diligence checks",
      "Building a shortlist within one category or city",
      "Cross-checking a company before onboarding",
    ],
    faqs: [
      {
        question: "Can I look up a single specific company?",
        answer: "Yes - search by company name, or narrow by category and city to find the profile you need.",
      },
      {
        question: "What details does a directory listing include?",
        answer: "Company name, category, city and available contact details, depending on the record.",
      },
      {
        question: "Is this different from the business directory product?",
        answer: "It's the same underlying data, oriented toward looking up individual companies rather than exporting bulk campaign lists.",
      },
      {
        question: "Can I still export a full list from the directory?",
        answer: "Yes - you can filter by category and city and export the matching set in Excel/CSV.",
      },
    ],
  },
} satisfies CategoryContent;
