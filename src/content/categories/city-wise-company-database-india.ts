import { Filter, MapPinned, RefreshCcw, Target } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "city-wise-company-database-india",
    keyword: "city wise company database India",
    title: "City-Wise Company Database India | Location Selections",
    metaDescription:
      "Discuss a company-record selection for a target city or region. Confirm current location coverage, available filters and a dated count before purchase.",
    eyebrow: "City Wise Company Database India",
    h1: "City Wise Company Database India - Plan City by City",
    answer:
      "A city-wise company database is intended to organize company records by location for market research, territory planning or local prospecting. State the cities or areas you need and ask which can be supported by the available dataset.",
    intro: [
      "Launching in a new city works best with a list built for that city specifically - not a nationwide list you then filter down. City-wise segmentation means you get exactly the companies located in your target city from the start.",
      "This is especially useful for phased expansion: start with one city, measure results, then move to the next using the same filtered approach.",
    ],
    highlights: [
      { icon: MapPinned, title: "Location Scope", description: "Name the cities or areas and confirm availability." },
      { icon: Filter, title: "One City at a Time", description: "Built for phased, city-by-city rollouts." },
      { icon: RefreshCcw, title: "Update Information", description: "Ask for the source date and any checks applied to the selected records." },
      { icon: Target, title: "Higher Local Relevance", description: "No out-of-city records diluting your list." },
    ],
    useCases: [
      "Planning a new city launch",
      "Running city-specific marketing campaigns",
      "Comparing opportunity across candidate cities",
      "Assigning territory-based lists to local sales reps",
    ],
    faqs: [
      {
        question: "Can I get data for just one city?",
        answer: "Ask whether the city or district is represented in the current selection, and request a dated count.",
      },
      {
        question: "Can I order multiple cities at once?",
        answer: "List the cities or regions in your brief and confirm the covered areas and total count before purchase.",
      },
      {
        question: "Does this include smaller cities, not just metros?",
        answer: "Ask which smaller cities are represented in the current dataset; do not infer coverage from the page examples.",
      },
      {
        question: "Can I combine city and industry filters?",
        answer: "Ask whether the requested city and industry filters can be combined, and confirm the matching count.",
      },
    ],
  },
} satisfies CategoryContent;
