import { Filter, ListChecks, MapPinned, Network } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "business-directory-india",
    keyword: "business directory India",
    title: "Business Directory India | Search by Industry & City",
    metaDescription:
      "A business directory selection organised around company category and location. Ask which categories, locations and export fields are available for your brief.",
    eyebrow: "Business Directory India",
    h1: "Business Directory India - Organised by Industry and City",
    answer:
      "A business directory organizes company records by category and location for supplier discovery, market mapping or prospecting. Request a list of supported categories, available location filters and a dated count for your selection.",
    intro: [
      "This page describes a possible category-and-location company selection; it is not a live online directory. Ask whether the chosen categories and regions are represented, then confirm the available fields, count and export format.",
      "It works well both ways: find suppliers and vendors in a category you need, or build a targeted local list of companies to reach with your own product or service.",
    ],
    highlights: [
      { icon: Network, title: "Category and Location Scope", description: "Describe the business types and regions relevant to your brief." },
      { icon: Filter, title: "Category Selection", description: "Specify the business types relevant to your brief." },
      { icon: MapPinned, title: "Location Selection", description: "Ask which cities or regions can be included." },
      { icon: ListChecks, title: "Export Format", description: "Confirm whether an export is available and which fields it can include." },
    ],
    useCases: [
      "Finding suppliers or vendors within a specific category",
      "Building a local company list for a city launch",
      "Competitor and market mapping by category",
      "Directory-style B2B prospecting at scale",
    ],
    faqs: [
      {
        question: "How is this different from a regular online business directory?",
        answer: "This page does not provide browsable live listings or a live search. Ask whether matching records are available and confirm the export fields and format.",
      },
      {
        question: "Can I search by both industry and city together?",
        answer: "Ask whether category and location filters can be combined for your selected records, and request a matching count.",
      },
      {
        question: "How many categories are covered?",
        answer: "Ask for the current category list and confirm which requested types have records in the locations you need.",
      },
      {
        question: "Can I get a sample list from a specific category first?",
        answer: "The CSV download is a fictional format preview. Ask whether a matching real sample is available for your selection, and confirm its fields and coverage.",
      },
    ],
  },
} satisfies CategoryContent;
