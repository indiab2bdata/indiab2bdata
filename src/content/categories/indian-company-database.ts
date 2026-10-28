import { Filter, MapPinned, RefreshCcw, ShieldCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "indian-company-database",
    keyword: "Indian company database",
    title: "Indian Company Database | Pan-India Coverage",
    metaDescription:
      "A pan-India company database covering every major state and city. Permission-based sourcing with city, state and pincode-level filters.",
    eyebrow: "Indian Company Database",
    h1: "Indian Company Database - Every State, Every City",
    answer:
      "An Indian company database is a selection of company and contact records for defined markets. State, city or pincode can be included in a brief; ask for the locations currently represented, the source and a dated matching count.",
    intro: [
      "Expanding across India means dealing with huge regional variation - what works in Mumbai doesn't automatically translate to Lucknow or Coimbatore. An Indian company database that only covers a handful of metros isn't enough for a genuinely pan-India rollout.",
      "Our database is built for exactly this: filter by state, city or pincode cluster to plan a phased rollout, or pull the full pan-India set for a nationwide campaign - all from the same source.",
    ],
    highlights: [
      { icon: MapPinned, title: "Location Scope", description: "Specify states, cities or pincodes and confirm coverage." },
      { icon: ShieldCheck, title: "Source Details", description: "Request the source information for the specific selection." },
      { icon: Filter, title: "State/City/Pincode Filters", description: "Plan rollouts region by region." },
      { icon: RefreshCcw, title: "Record Dates", description: "Ask for the extract date and any checks applied." },
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
        answer: "Ask which cities are represented in the current data, including any smaller locations, and request a dated count.",
      },
      {
        question: "Can I get data for specific states only?",
        answer: "Share the locations you need and ask which can be supported in the current selection.",
      },
      {
        question: "Where does the data come from?",
        answer: "Ask for the source and collection context of the selected records, and confirm which checks or duplicate-handling steps were applied.",
      },
      {
        question: "What if I need the whole country at once?",
        answer: "Request a written quote for the agreed locations, fields and volume. Confirm the counting unit and total price.",
      },
    ],
  },
} satisfies CategoryContent;
