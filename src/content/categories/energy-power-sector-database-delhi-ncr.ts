import { Filter, MapPinned, Users, Zap } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "energy-power-sector-database-delhi-ncr",
    keyword: "energy and power sector database Delhi NCR",
    title: "Energy & Power Database Delhi NCR",
    metaDescription:
      "Energy and power sector database for Delhi NCR - power utilities, solar EPC firms, electrical contractors, PSU offices and energy professionals in Delhi, Noida, Gurgaon and Faridabad.",
    eyebrow: "Delhi NCR Energy & Power Database",
    h1: "Energy & Power Sector Database - Delhi NCR",
    answer:
      "A Delhi NCR energy and power sector database lists companies and professionals in power generation, transmission, distribution, renewable energy and electrical services across Delhi, Noida, Greater Noida, Gurgaon, Ghaziabad and Faridabad - with company name, segment, decision-maker, designation and contact details. IndiaB2BData.com supplies this data for equipment, services and recruitment outreach.",
    intro: [
      "Delhi NCR is the corporate and administrative centre of India's power sector. Head offices of major power PSUs, transmission and renewable-energy companies sit in New Delhi, Noida and Gurgaon, alongside distribution companies, solar EPC firms, electrical contractors and equipment dealers serving one of the country's largest electricity markets.",
      "Our energy and power sector database lets suppliers, consultants and recruiters target this ecosystem by segment, company type and city - from rooftop solar installers to project heads at utilities.",
    ],
    highlights: [
      { icon: Zap, title: "Whole Power Value Chain", description: "Generation, transmission, distribution, renewables." },
      { icon: MapPinned, title: "All of Delhi NCR", description: "Delhi, Noida, Gurgaon, Ghaziabad, Faridabad." },
      { icon: Users, title: "Decision-Makers", description: "Directors, project heads, procurement, engineers." },
      { icon: Filter, title: "Segment Filters", description: "Solar, EPC, utilities, equipment, consultants." },
    ],
    dataFields: [
      "Company name",
      "Segment: generation, transmission, distribution, solar/renewables, EPC or electrical services",
      "Company type: PSU, private, EPC contractor, dealer or consultant",
      "Decision-maker name and designation",
      "Mobile number and email ID",
      "Office address and city within Delhi NCR",
    ],
    sections: [
      {
        heading: "Segments Covered",
        paragraphs: [],
        subsections: [
          { heading: "Power Utilities & PSUs", text: "Corporate, regional and project offices of generation, transmission and distribution companies." },
          { heading: "Solar & Renewable Energy", text: "Solar EPC firms, rooftop installers, developers, and battery and inverter companies." },
          { heading: "Electrical Contractors & Equipment", text: "Licensed electrical contractors, switchgear, cable, transformer and meter suppliers and dealers." },
          { heading: "Energy Consultants & Services", text: "Energy auditors, project consultants, O&M and testing service providers." },
        ],
      },
      {
        heading: "Who Uses This Database?",
        paragraphs: [],
        bullets: [
          "Electrical equipment, cable and switchgear manufacturers",
          "Solar panel, inverter and battery suppliers",
          "Engineering staffing and recruitment firms",
          "Energy software, metering and IoT companies",
          "Power-sector conference and exhibition organisers",
        ],
      },
    ],
    useCases: [
      "Electrical and solar equipment sales",
      "EPC subcontracting and vendor registration",
      "Power-sector recruitment",
      "Energy software and metering solutions",
      "Exhibition and conference invitations",
    ],
    faqs: [
      { question: "What is a Delhi NCR energy and power sector database?", answer: "It is a list of power utilities, renewable energy companies, EPC firms, electrical contractors and energy professionals in Delhi NCR with segment, decision-maker and contact details." },
      { question: "Which cities are covered?", answer: "Delhi, Noida, Greater Noida, Gurgaon (Gurugram), Ghaziabad and Faridabad." },
      { question: "Does it include solar companies?", answer: "Yes. Solar EPC firms, rooftop installers, developers and solar equipment dealers are a dedicated segment." },
      { question: "Can I get procurement contacts?", answer: "Where available, records include directors, project heads, procurement managers and engineers." },
      { question: "Can I filter by segment?", answer: "Yes. You can choose generation, transmission, distribution, renewables, EPC, equipment or consultants." },
      { question: "Can I see a sample?", answer: "Yes. Download the sample format on this page or request real sample records." },
    ],
    related: [
      "engineers-service-engineers-database-india",
      "contractors-database-india",
      "manufacturer-database-india",
      "bank-employees-database-delhi-ncr",
      "civil-engineers-database-india",
      "industry-wise-company-database-india",
    ],
  },
} satisfies CategoryContent;
