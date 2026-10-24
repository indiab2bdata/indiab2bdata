import { Filter, Landmark, MapPinned, TrendingUp } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "economic-analysts-database-india",
    keyword: "economic analysts database India",
    title: "Economic Analysts Database India",
    metaDescription:
      "Economic analysts database in India - economists, research analysts, policy and market analysts in banks, think tanks, consultancies and government bodies. Free sample.",
    eyebrow: "Economic Analysts Database",
    h1: "Economic Analysts Database in India",
    answer:
      "An economic analysts database lists economists and analysts in India - economic and policy analysts, equity and credit research analysts, market research analysts and economic consultants - with name, designation, organisation type, specialisation, city and contact details. IndiaB2BData.com supplies this data for data-platform, publishing, events and recruitment outreach.",
    intro: [
      "Economic analysts work across banks, NBFCs, brokerages, rating agencies, think tanks, consultancies, research firms, universities and government bodies. They track GDP, inflation, credit, markets and sector trends, and they buy data terminals, research reports, statistical software and conference passes.",
      "Our economic analysts database covers these professionals by specialisation, organisation type and city, with Mumbai, Delhi NCR and Bengaluru as the largest hubs. For business analysts working on processes and IT systems, see our business analysts database.",
    ],
    highlights: [
      { icon: TrendingUp, title: "Economists & Analysts", description: "Economic, policy, equity, credit and market research." },
      { icon: Landmark, title: "All Organisation Types", description: "Banks, think tanks, consultancies, government." },
      { icon: Filter, title: "Specialisation Filters", description: "Macro, sector, credit, equity, policy." },
      { icon: MapPinned, title: "Hub Coverage", description: "Mumbai, Delhi NCR, Bengaluru and more." },
    ],
    dataFields: [
      "Analyst name",
      "Designation, such as economist, research analyst or policy analyst",
      "Organisation and organisation type",
      "Specialisation, such as macroeconomics, credit or equity research",
      "Experience band, where available",
      "Professional email or contact number, where available and permitted",
      "City and state",
    ],
    sections: [
      {
        heading: "Analyst Types Covered",
        paragraphs: [],
        subsections: [
          { heading: "Economists & Policy Analysts", text: "Chief economists, macroeconomists and policy analysts in banks, think tanks and government bodies." },
          { heading: "Equity & Credit Research Analysts", text: "Analysts in brokerages, AMCs and rating agencies covering companies, sectors and credit risk." },
          { heading: "Market & Industry Research Analysts", text: "Analysts in market research, consulting and data firms studying sectors and consumer trends." },
        ],
      },
      {
        heading: "Who Uses an Economic Analysts Database?",
        paragraphs: [],
        bullets: [
          "Financial data terminals and economic data platforms",
          "Research publishers and business media",
          "Economic summits, conferences and webinar organisers",
          "Statistical and analytics software companies",
          "Recruiters hiring economists and research analysts",
        ],
      },
      {
        heading: "Responsible Use",
        paragraphs: [
          "Contact analysts only for relevant professional purposes - data products, research, events or genuine job opportunities - and honour every opt-out request in line with the Digital Personal Data Protection Act, 2023.",
        ],
      },
    ],
    useCases: [
      "Economic data and research platform sales",
      "Conference and webinar invitations",
      "Research report and publication marketing",
      "Analytics software promotion",
      "Economist and analyst recruitment",
    ],
    faqs: [
      { question: "What is an economic analysts database?", answer: "It is a list of economists and analysts in India - economic, policy, equity, credit and market research analysts - with designation, organisation, specialisation and contact details." },
      { question: "Which organisations are covered?", answer: "Banks, NBFCs, brokerages, AMCs, rating agencies, think tanks, consultancies, research firms, universities and government bodies." },
      { question: "How is this different from the business analysts database?", answer: "Economic analysts study the economy, markets and sectors. Business analysts work inside companies on processes, requirements and IT systems." },
      { question: "Can I filter by specialisation?", answer: "Yes, where recorded - for example macroeconomics, policy, credit research, equity research or market research." },
      { question: "Which cities have the most economic analysts?", answer: "Mumbai is the largest hub because of banks, brokerages and rating agencies, followed by Delhi NCR for policy and think tanks, and Bengaluru for research and analytics firms." },
      { question: "Can I see a sample?", answer: "Yes. Download the sample format on this page or request real sample records." },
    ],
    related: [
      "financial-analysts-managers-industry-database",
      "business-analysts-database-india",
      "chief-managers-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
      "chartered-accountants-database-india",
      "consultants-consulting-services-database-india",
    ],
  },
} satisfies CategoryContent;
