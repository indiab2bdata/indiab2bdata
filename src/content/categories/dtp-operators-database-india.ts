import { BookOpen, FileText, Filter, MapPinned } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "dtp-operators-database-india",
    keyword: "DTP operators database India",
    title: "DTP Operators Database India",
    metaDescription:
      "DTP operators database in India - desktop publishing operators, typesetters, layout artists and DTP centres with contact details, city-wise. Fictional sample format preview; ask whether a matching real sample is available.",
    eyebrow: "DTP Operators Database",
    h1: "DTP Operators Database in India",
    answer:
      "A DTP operators database lists desktop publishing professionals and DTP centres in India - DTP operators, typesetters, layout artists and pre-press staff in printing presses, publishers and design studios - with name, skills, employer, city and contact details. IndiaB2BData.com supplies DTP data for recruiters, software vendors and printing suppliers.",
    intro: [
      "DTP operators prepare almost everything India prints - books, newspapers, wedding cards, packaging, banners and office stationery. They work in printing presses, publishing houses, newspaper offices, design studios and neighbourhood DTP and xerox centres, often in English plus regional languages.",
      "Our DTP operators database covers individual operators and DTP centres, filterable by software skills, languages and city - useful for hiring, training and selling to the pre-press market.",
    ],
    highlights: [
      { icon: FileText, title: "DTP & Pre-Press", description: "Operators, typesetters and layout artists." },
      { icon: Filter, title: "Skill Filters", description: "CorelDRAW, InDesign, Photoshop, PageMaker." },
      { icon: BookOpen, title: "Regional Languages", description: "Hindi, Marathi, Tamil and more typing skills." },
      { icon: MapPinned, title: "City-Wise", description: "Printing hubs and district towns." },
    ],
    dataFields: [
      "Operator or DTP centre name",
      "Role: DTP operator, typesetter, layout artist or centre owner",
      "Software skills, where available",
      "Languages, where available",
      "Employer type: press, publisher, studio or own centre",
      "Mobile number and email, where available",
      "City and state",
    ],
    sections: [
      {
        heading: "Who Uses a DTP Operators Database?",
        paragraphs: [],
        bullets: [
          "Printing presses and publishers hiring DTP staff",
          "Design and publishing software resellers",
          "Printer, paper and consumables suppliers",
          "Computer training institutes",
          "Translation and typesetting outsourcing companies",
        ],
      },
    ],
    useCases: [
      "DTP and pre-press recruitment",
      "Design software and font sales",
      "Printing consumables marketing",
      "Computer course promotion",
      "Typesetting and translation outsourcing",
    ],
    faqs: [
      { question: "What is a DTP operators database?", answer: "It is a list of desktop publishing operators, typesetters, layout artists and DTP centres in India with skills, employer, city and contact details." },
      { question: "Does it include DTP centres?", answer: "Yes. You can choose individual operators, DTP and xerox centre owners, or both." },
      { question: "Can I filter by software skills?", answer: "Where recorded, yes - for example CorelDRAW, Adobe InDesign, Photoshop or PageMaker." },
      { question: "Are regional language DTP operators included?", answer: "Yes. Operators with Hindi, Marathi, Tamil, Telugu, Bengali and other language typing skills are included where recorded." },
      { question: "Who buys DTP operator data?", answer: "Printing presses, publishers, software resellers, consumables suppliers and training institutes." },
      { question: "Can I see a sample?", answer: "Ask whether a real sample for the DTP-operator role selection is available. The public CSV is fictional and demonstrates possible layout only; check any supplied rows for required fields and selected coverage." },
    ],
    related: [
      "designers-database-india",
      "digital-photography-studios-database-india",
      "computer-laptop-dealers-database-india",
      "job-seekers-database",
      "company-proprietors-database-india",
      "students-database",
    ],
  },
} satisfies CategoryContent;
