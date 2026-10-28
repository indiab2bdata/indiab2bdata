import { Building2, Landmark, MapPinned, ShieldCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "contractors-database-india",
    keyword: "contractors database India",
    title: "Contractors Database India | Civil, Electrical & Govt",
    metaDescription:
      "Contractors database in India - civil, electrical, plumbing, interior, road and government contractors with owner contacts, trade and city. Fictional sample format preview; ask whether a matching real sample is available.",
    eyebrow: "Contractors Database",
    h1: "Contractors Database in India",
    answer:
      "A contractors database lists civil, building, electrical, plumbing, HVAC, interior, road and government (PWD/CPWD-registered) contractors in India, with firm name, owner name, contractor type, mobile number, GSTIN where available and location. IndiaB2BData.com supplies city-wise contractor data for building material, equipment, finance and staffing companies.",
    intro: [
      "Contractors are the buyers on almost every construction, infrastructure and fit-out project in India. They purchase cement, steel, cables, pipes, tools and equipment, hire labour and machinery, and need working capital and insurance - often at short notice.",
      "Our contractors database covers small local contractors as well as larger registered firms working on government tenders, filterable by trade, registration class, city and state.",
    ],
    highlights: [
      { icon: Building2, title: "All Major Trades", description: "Civil, electrical, plumbing, HVAC, interiors, roads." },
      { icon: Landmark, title: "Govt-Registered Firms", description: "PWD, CPWD and municipal contractors where available." },
      { icon: MapPinned, title: "City & District-Wise", description: "Metros, tier-2 cities and district towns." },
      { icon: ShieldCheck, title: "Business Contacts", description: "The published methodology describes deduplication before delivery; ask which other checks apply to the selected records." },
    ],
    dataFields: [
      "Contractor / firm name",
      "Owner or contact person name",
      "Contractor type: civil, electrical, plumbing, HVAC, interior, road, etc.",
      "Registration class or department, where available",
      "GSTIN, where available",
      "Mobile number and email, where available",
      "City, state and pincode",
    ],
    sections: [
      {
        heading: "Contractor Types Covered",
        paragraphs: [],
        subsections: [
          { heading: "Civil & Building Contractors", text: "Residential, commercial and industrial building contractors and labour contractors." },
          { heading: "Electrical, Plumbing & HVAC Contractors", text: "MEP contractors handling wiring, panels, plumbing, fire-fighting and air-conditioning." },
          { heading: "Government & Infrastructure Contractors", text: "Road, bridge, water and PWD/CPWD-registered contractors bidding on public tenders." },
          { heading: "Interior & Fit-Out Contractors", text: "Office, retail and residential interior and turnkey fit-out firms." },
        ],
      },
      {
        heading: "Who Uses a Contractors Database?",
        paragraphs: [],
        bullets: [
          "Cement, steel, cable, pipe and paint brands",
          "Construction equipment rental and sales companies",
          "Banks and NBFCs offering working capital and bank guarantees",
          "Tender information and construction software providers",
          "Labour staffing and safety equipment suppliers",
        ],
      },
    ],
    useCases: [
      "Building material and electrical product sales",
      "Equipment rental and machinery marketing",
      "Working capital and bank guarantee outreach",
      "Tender and project software promotion",
      "Contractor meets and site events",
    ],
    faqs: [
      { question: "What is a contractors database?", answer: "It is a list of civil, electrical, plumbing, interior, road and government contractors in India with owner contacts, contractor type and location." },
      { question: "Does it include government-registered contractors?", answer: "Yes. PWD, CPWD and other department-registered contractors are included where registration details are available." },
      { question: "Can I filter by contractor type?", answer: "Yes. You can choose civil, electrical, plumbing, HVAC, interior, road or other trades." },
      { question: "Can I get contractors in a specific district?", answer: "Yes. Records can be filtered by city, district and pincode." },
      { question: "How is this different from the civil engineers database?", answer: "This database covers contracting firms and their owners. The civil engineers database covers individual engineers, project managers and consultants." },
      { question: "Can I see a sample?", answer: "Ask whether a real sample for the contractor type and location selection is available. The public CSV is fictional and demonstrates possible layout only; check any supplied rows for required fields and selected coverage." },
    ],
    related: [
      "civil-engineers-database-india",
      "building-material-database-india",
      "architect-interior-designers-database-india",
      "commercial-residential-properties-database-india",
      "company-proprietors-database-india",
      "gst-database-india",
    ],
  },
} satisfies CategoryContent;
