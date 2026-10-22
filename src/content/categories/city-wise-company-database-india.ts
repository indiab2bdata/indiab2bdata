import { Filter, MapPinned, RefreshCcw, Target } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "city-wise-company-database-india",
    keyword: "city wise company database India",
    title: "City Wise Company Database India | 700+ Cities",
    metaDescription:
      "A company database segmented by city across India - 700+ cities covered. Perfect for city launches, local campaigns and regional sales planning.",
    eyebrow: "City Wise Company Database India",
    h1: "City Wise Company Database India - Plan City by City",
    answer:
      "A city-wise company database segments company records by city, so you can run or plan a campaign one city at a time instead of buying a generic pan-India list. IndiaB2BData.com covers 700+ Indian cities, from major metros to tier-2 and tier-3 towns.",
    intro: [
      "Launching in a new city works best with a list built for that city specifically - not a nationwide list you then filter down. City-wise segmentation means you get exactly the companies located in your target city from the start.",
      "This is especially useful for phased expansion: start with one city, measure results, then move to the next using the same filtered approach.",
    ],
    highlights: [
      { icon: MapPinned, title: "700+ Cities", description: "From major metros to tier-2 and tier-3 towns." },
      { icon: Filter, title: "One City at a Time", description: "Built for phased, city-by-city rollouts." },
      { icon: RefreshCcw, title: "Regularly Refreshed", description: "Local lists updated on a monthly cycle." },
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
        answer: "Yes - our Starter package is built for a single city or district.",
      },
      {
        question: "Can I order multiple cities at once?",
        answer: "Yes, our Business and Enterprise packages cover multiple cities or full pan-India coverage.",
      },
      {
        question: "Does this include smaller cities, not just metros?",
        answer: "Yes - coverage spans 700+ cities including tier-2 and tier-3 towns.",
      },
      {
        question: "Can I combine city and industry filters?",
        answer: "Yes, city and industry filters can be combined in the same order.",
      },
    ],
  },
} satisfies CategoryContent;
