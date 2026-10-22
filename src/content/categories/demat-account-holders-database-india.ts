import { Filter, MapPinned, ShieldCheck, TrendingUp } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "demat-account-holders-database-india",
    keyword: "demat account holders database India",
    title: "Demat Account Holders Database India | Investor Audience",
    metaDescription:
      "Demat account holders audience data in India - retail investors and traders by city and investor band, for financial marketing. No DP IDs, holdings or account details.",
    eyebrow: "Demat Account Holders Audience Data",
    h1: "Demat (D-Mat) Account Holders Database in India",
    answer:
      "A demat account holders database is investor audience data for people in India who hold demat (D-Mat) accounts and invest or trade in shares and mutual funds, with name, mobile number, city and investor band where available. IndiaB2BData.com provides it as marketing audience data only: it never contains demat or DP IDs, PAN, holdings, portfolio values or trading details.",
    intro: [
      "Demat accounts in India now run into crores, and new investors from tier-2 and tier-3 cities make up a fast-growing share of them. Retail investors are an active audience for financial education, advisory, insurance, mutual fund and wealth products.",
      "Our demat account holders audience data helps financial brands reach investors by city and investor band, compiled from lawful, permission-based sources.",
    ],
    highlights: [
      { icon: TrendingUp, title: "Investor Audience", description: "Retail investors and active traders." },
      { icon: MapPinned, title: "Metro to Tier-3", description: "Filter by state, city and pincode." },
      { icon: Filter, title: "Investor Bands", description: "New, regular and active traders, where available." },
      { icon: ShieldCheck, title: "No Account Details", description: "Never DP IDs, PAN or holdings." },
    ],
    dataFields: [
      "Name",
      "Mobile number",
      "Email ID, where available",
      "Investor type band (new investor, long-term, active trader), where available",
      "Age band, where available",
      "City, state and pincode",
    ],
    sections: [
      {
        heading: "What This Data Never Includes",
        paragraphs: [
          "This is marketing audience data, not brokerage or depository data. It never contains demat account numbers, DP or client IDs, PAN, bank details, holdings, portfolio values or trade history. Anyone offering those details is selling leaked data, and using it is illegal.",
        ],
      },
      {
        heading: "Who Markets to Demat Account Holders?",
        paragraphs: [],
        bullets: [
          "SEBI-registered investment advisers and research analysts",
          "Mutual fund distributors and wealth managers",
          "Insurance companies",
          "Stock market education and training providers",
          "Fintech and investment apps",
        ],
      },
      {
        heading: "Responsible Use",
        paragraphs: [
          "Financial promotions in India are regulated. Never promise guaranteed returns, never share unregistered tips, and follow SEBI advertising rules, the Digital Personal Data Protection Act, 2023 and TRAI telemarketing rules. Honour every opt-out request.",
        ],
      },
    ],
    useCases: [
      "Investment advisory and research marketing",
      "Mutual fund and SIP campaigns",
      "Stock market course promotion",
      "Insurance and wealth product outreach",
    ],
    faqs: [
      { question: "What is a demat account holders database?", answer: "It is investor audience data for people in India who hold demat accounts and invest in shares or mutual funds, with name, mobile number, city and investor band where available." },
      { question: "Does it include demat account numbers or holdings?", answer: "No. It never includes demat or DP IDs, PAN, bank details, holdings, portfolio values or trade history." },
      { question: "How many demat accounts are there in India?", answer: "Demat accounts in India now run into crores, with strong growth from tier-2 and tier-3 cities." },
      { question: "Can I target investors in a specific city?", answer: "Yes. Audience data can be filtered by state, city and pincode." },
      { question: "Who uses investor audience data?", answer: "SEBI-registered advisers, mutual fund distributors, wealth managers, insurers and stock market education providers." },
      { question: "Can I see a sample?", answer: "Yes. Download the sample format on this page or request sample records." },
    ],
    related: [
      "credit-card-holders-database-india",
      "debit-card-holders-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
      "chartered-accountants-database-india",
      "commercial-residential-properties-database-india",
      "mobile-number-database-india",
    ],
  },
} satisfies CategoryContent;
