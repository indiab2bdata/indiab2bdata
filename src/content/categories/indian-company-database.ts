import { Filter, MapPinned, RefreshCcw, ShieldCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "indian-company-database",
    keyword: "Indian company database",
    title: "Indian Company Database | Pan-India Coverage",
    metaDescription:
      "A pan-India company database covering every major state and city. Verified, permission-based sourcing with city, state and pincode-level filters.",
    eyebrow: "Indian Company Database",
    h1: "Indian Company Database - Every State, Every City",
    answer:
      "An Indian company database is a nationwide collection of registered company and contact records covering businesses across India's states, cities and pincode clusters. IndiaB2BData.com's Indian company database spans 700+ cities, sourced from publicly available and permission-based channels and filterable down to the pincode level.",
    intro: [
      "Expanding across India means dealing with huge regional variation - what works in Mumbai doesn't automatically translate to Lucknow or Coimbatore. An Indian company database that only covers a handful of metros isn't enough for a genuinely pan-India rollout.",
      "Our database is built for exactly this: filter by state, city or pincode cluster to plan a phased rollout, or pull the full pan-India set for a nationwide campaign - all from the same verified source.",
    ],
    highlights: [
      { icon: MapPinned, title: "700+ Cities", description: "Coverage across every major state and city cluster." },
      { icon: ShieldCheck, title: "Public & Permission-Based Sourcing", description: "Compiled from lawful, permission-based channels." },
      { icon: Filter, title: "State/City/Pincode Filters", description: "Plan rollouts region by region." },
      { icon: RefreshCcw, title: "Monthly Refresh", description: "Inactive contacts replaced on a regular cycle." },
    ],
    useCases: [
      "Pan-India market expansion planning",
      "Franchise and distributor scouting by region",
      "State-wise or city-wise campaign sequencing",
      "Regional competitor and market mapping",
    ],
    faqs: [
      {
        question: "Does the database cover smaller cities, not just metros?",
        answer: "Yes - coverage spans 700+ cities including tier-2 and tier-3 towns, not just the major metros.",
      },
      {
        question: "Can I get data for specific states only?",
        answer: "Yes, you can filter by state, city or pincode cluster to match your rollout plan.",
      },
      {
        question: "Where does the data come from?",
        answer: "It's compiled from publicly available and permission-based channels, then verified and deduplicated.",
      },
      {
        question: "What if I need the whole country at once?",
        answer: "Our Enterprise package covers unlimited records with full pan-India coverage.",
      },
    ],
  },
} satisfies CategoryContent;
