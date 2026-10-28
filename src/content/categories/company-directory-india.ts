import { BookOpen, Building2, MapPinned, Search } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "company-directory-india",
    keyword: "company directory India",
    title: "Company Directory Database India | Company Records for Lookups",
    metaDescription:
      "Discuss company records for named-company research, category and location needs. Ask which records, profile fields and formats are available for your brief.",
    eyebrow: "Company Directory India",
    h1: "Company Directory Database India - Company Records for Lookups",
    answer:
      "A company directory organizes company records by name, category or location for individual lookups and shortlists. Ask whether a named-company lookup is available and confirm the fields and locations represented in the current dataset.",
    intro: [
      "Some buyers need to research a named company or build a shortlist rather than request a large market segment. Ask whether a named-company selection is available and what profile fields can be confirmed.",
      "This page describes company-name lookups and shortlists. It does not provide an interactive search tool; confirm the available company, category and location fields before ordering.",
    ],
    highlights: [
      { icon: BookOpen, title: "Company Records", description: "Ask which company-name and profile fields are available." },
      { icon: Search, title: "Company-Name Selection", description: "Ask whether a named company can be checked in the available records." },
      { icon: MapPinned, title: "Location Fields", description: "Confirm which locations are represented in the selected data." },
      { icon: Building2, title: "Company Categories", description: "Ask how company types are classified in the selected records." },
    ],
    useCases: [
      "Researching a named company before a meeting or vendor discussion",
      "Preparing a company shortlist for internal review",
      "Building a shortlist within one category or city",
      "Cross-checking a company before onboarding",
    ],
    faqs: [
      {
        question: "Can I look up a single specific company?",
        answer: "Ask whether the requested company name is represented and which profile fields are available; this page does not provide a live lookup tool.",
      },
      {
        question: "What details does a directory listing include?",
        answer: "Company name, category, city and available contact details, depending on the record.",
      },
      {
        question: "Is this different from the business directory product?",
        answer: "This page focuses on company-name lookups and shortlists. The Business Directory page focuses on category and location discovery; confirm the output format for either request.",
      },
      {
        question: "Can I still export a full list from the directory?",
        answer: "Ask whether a category-and-location export is available for your selection and confirm the format in the written quote.",
      },
    ],
  },
} satisfies CategoryContent;
