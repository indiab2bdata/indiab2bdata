import { BadgeCheck, Factory, Filter, MapPinned } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "chemical-pharma-companies-database-india",
    keyword: "chemical and pharma companies database India",
    title: "Chemical & Pharma Companies Database India",
    metaDescription:
      "Chemical and pharmaceutical companies database in India - manufacturers, API makers, formulators and traders with contacts. Gujarat, Maharashtra, Telangana and more.",
    eyebrow: "Chemical & Pharma Companies Database",
    h1: "Chemical & Pharma Companies Database in India",
    answer:
      "A chemical and pharma companies database lists Indian chemical manufacturers, API and bulk-drug makers, pharma formulators and chemical traders with company name, contact person, product category, GSTIN and location. IndiaB2BData.com covers major clusters such as Ahmedabad-Vapi-Ankleshwar, Hyderabad, Mumbai-Thane and Baddi.",
    intro: [
  "India is the world's largest supplier of generic medicines and a major global chemicals producer. The industry is highly clustered: Gujarat (Ankleshwar, Vapi, Dahej, Vadodara) for chemicals and dyes, Hyderabad for APIs and bulk drugs, Baddi in Himachal Pradesh for formulations, and Maharashtra for both.",
  "Our chemical and pharma companies database lets suppliers of raw materials, packaging, lab equipment, machinery and services reach these manufacturers by cluster, product segment and company size.",
  "For pharmaceutical field-sales professionals rather than company accounts, explore the medical representatives database."
],
    contentLinks: [{"text":"medical representatives database","href":"/medical-representatives-database-india"}],
    highlights: [
      { icon: Factory, title: "Manufacturers & Traders", description: "API, formulation, specialty and bulk chemicals." },
      { icon: MapPinned, title: "Cluster Coverage", description: "Gujarat, Hyderabad, Baddi, Maharashtra and more." },
      { icon: Filter, title: "Segment Filters", description: "Pharma, agrochemicals, dyes, petrochemicals." },
      { icon: BadgeCheck, title: "GST-Linked Records", description: "GSTIN and company details where available." },
    ],
    dataFields: [
      "Company name and GSTIN / CIN, where available",
      "Contact person and designation (owner, plant head, purchase manager)",
      "Mobile number and email ID",
      "Product segment, such as API, formulation, specialty or bulk chemicals",
      "Plant / office address, city, state and pincode",
      "Company size and website, where available",
    ],
    sections: [
      {
        heading: "Segments Covered",
        paragraphs: [],
        subsections: [
          { heading: "Pharmaceutical Manufacturers", text: "API and bulk-drug makers, formulators, contract manufacturers (CMOs) and third-party manufacturing units." },
          { heading: "Chemical Manufacturers", text: "Specialty, fine, bulk, dyes and pigments, agrochemical and petrochemical producers." },
          { heading: "Traders & Distributors", text: "Chemical traders, pharma distributors and C&F agents." },
        ],
      },
      {
        heading: "Who Uses This Database?",
        paragraphs: [],
        bullets: [
          "Raw material, solvent and excipient suppliers",
          "Packaging, lab equipment and process machinery companies",
          "Regulatory, testing and validation service providers",
          "Logistics and cold-chain companies",
        ],
      },
    ],
    useCases: [
      "Raw material and intermediate sales",
      "Machinery and lab equipment marketing",
      "Contract manufacturing partnerships",
      "Export and distribution tie-ups",
      "Market research on pharma and chemical clusters",
    ],
    faqs: [
      { question: "What is a chemical and pharma companies database?", answer: "It is a list of chemical and pharmaceutical manufacturers, formulators and traders in India with contact details, product segment and location." },
      { question: "Which states have the most pharma and chemical companies?", answer: "Gujarat and Maharashtra are the largest hubs for chemicals and pharma, followed by Telangana (Hyderabad), Himachal Pradesh (Baddi), Andhra Pradesh and Tamil Nadu." },
      { question: "Can I get only API manufacturers?", answer: "Yes. Records can be filtered by segment such as API/bulk drugs, formulations, specialty chemicals or agrochemicals, where recorded." },
      { question: "Does it include purchase manager contacts?", answer: "Where available, records include decision-makers such as owners, directors, plant heads and purchase managers." },
      { question: "Is the data available for a single industrial area like Vapi or Ankleshwar?", answer: "Yes. You can order by city, district or pincode cluster." },
      { question: "Can I see a sample?", answer: "Ask whether a real sample for the chemical or pharmaceutical company activity selection is available. The public CSV is fictional and demonstrates possible layout only; check any supplied rows for required fields and selected coverage." },
    ],
    related: [
      "manufacturer-database-india",
      "chemists-medical-stores-database-india",
      "industry-wise-company-database-india",
      "importers-exporters-database-india",

      "gst-database-india",
      "gas-petroleum-companies-database-india",
    ],
  },
} satisfies CategoryContent;
