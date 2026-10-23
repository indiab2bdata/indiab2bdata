import { Filter, Landmark, ListChecks, MapPinned } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "state-wise-company-database-india",
    keyword: "state wise company database India",
    title: "State Wise Company Database India | Every Major State",
    metaDescription:
      "A company database segmented by state across India. Plan region-by-region rollouts with company records for every major state.",
    eyebrow: "State Wise Company Database India",
    h1: "State Wise Company Database India - Plan Region by Region",
    answer:
      "A state-wise company database groups company records by state, useful for planning a regional rollout or comparing opportunity across different parts of India before committing to a full national campaign. IndiaB2BData.com's state-wise data covers every major state, filterable down to the city or pincode level.",
    intro: [
      "India's markets vary enormously state to state - regulatory context, language, buying behaviour and competitive density all shift. A state-wise company database lets you plan around that variation instead of treating the whole country as one market.",
      "Use it to sequence a rollout state by state, or to compare a handful of candidate states side by side before deciding where to focus first.",
    ],
    highlights: [
      { icon: Landmark, title: "State-Level Segmentation", description: "Plan rollouts region by region." },
      { icon: MapPinned, title: "Every Major State", description: "Coverage across India's states and union territories." },
      { icon: Filter, title: "Drill Down to City/Pincode", description: "Narrow further within a chosen state." },
      { icon: ListChecks, title: "Compare Regions", description: "Order a few states side by side before scaling." },
    ],
    useCases: [
      "Sequencing a state-by-state market rollout",
      "Comparing opportunity across candidate states",
      "Planning region-specific regulatory or compliance outreach",
      "Assigning state-based territories to a sales team",
    ],
    faqs: [
      {
        question: "Can I order data for just one or two states?",
        answer: "Yes - tell us which states you need and we'll build a matching list.",
      },
      {
        question: "Can I filter further by city within a state?",
        answer: "Yes, state, city and pincode filters can be combined in the same order.",
      },
      {
        question: "Do you cover every state, including smaller ones?",
        answer: "Yes, coverage spans every major state and union territory.",
      },
      {
        question: "Is this useful for a phased national rollout?",
        answer: "Yes, many clients use state-wise data specifically to sequence a phased expansion plan.",
      },
    ],
  },
} satisfies CategoryContent;
