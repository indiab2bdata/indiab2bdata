import { Building2, FlaskConical, Laptop, Pill, ShoppingBag, Warehouse } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-28", hubCities: ["Hyderabad", "Secunderabad", "Warangal", "Karimnagar", "Khammam", "Rangareddy", "Medak"], moreCities: 0 },
  {
    slug: "telangana",
    name: "Telangana",
    title: "Telangana Business Database by City",
    metaDescription:
      "Telangana B2B database: Hyderabad IT and GCCs in HITEC City, pharma and bulk-drug makers in Genome Valley and Jeedimetla, and Warangal businesses by city and industry.",
    lead:
      "Reach Hyderabad's IT companies and GCCs in HITEC City and Gachibowli, bulk-drug and pharma manufacturers across Genome Valley and Jeedimetla, and traders in Warangal and Karimnagar.",
    segmentSummary:
      "Telangana's economy is concentrated in Hyderabad, which has two distinct buyer worlds. HITEC City, Gachibowli and the Financial District house IT services firms and fast-growing global capability centres. Pharma, bulk-drug and life-sciences companies sit in Genome Valley, Jeedimetla, Pashamylaram and Bollaram, making Hyderabad a major bulk-drug hub. Warangal and Karimnagar add textiles, granite and agri trade.",
    segmentCards: [
      { icon: Laptop, title: "Hyderabad IT & GCCs", description: "IT services, product companies and GCCs across HITEC City, Gachibowli, Madhapur and the Financial District." },
      { icon: Pill, title: "Pharma & Life Sciences", description: "Bulk-drug, formulation, CRO and biotech companies in Genome Valley, Jeedimetla and Pashamylaram." },
      { icon: Warehouse, title: "Trade & Regional Industry", description: "Distributors and traders in Secunderabad, plus granite, textiles and agri businesses in Warangal and Karimnagar." },
    ],
    cities: [
      { city: "Hyderabad", detail: "IT/ITES, GCCs, pharma, real estate" },
      { city: "Secunderabad", detail: "Trading, distribution, defence suppliers" },
      { city: "Rangareddy & Medak", detail: "Pharma parks, industrial estates" },
      { city: "Warangal", detail: "Textiles, agri trade, education" },
      { city: "Karimnagar & Khammam", detail: "Granite, rice mills, agri inputs" },
    ],
    useCases: [
      { icon: Building2, title: "Real Estate in West Hyderabad", description: "Reach companies and senior employees in Gachibowli, Kokapet and Kondapur with office leasing and residential projects." },
      { icon: FlaskConical, title: "Lab & Process Equipment for Pharma", description: "Reach plant, QA and procurement heads at bulk-drug and formulation units around Hyderabad." },
      { icon: Building2, title: "GCC Setup & Hiring Services", description: "Offer workspace, recruitment and payroll services to new and expanding capability centres." },
      { icon: Laptop, title: "Enterprise SaaS for IT Firms", description: "Target CTOs and delivery heads at mid-size IT services companies in Madhapur and Gachibowli." },
      { icon: ShoppingBag, title: "Regional Distribution", description: "Find stockists and dealers in Warangal, Karimnagar and Khammam for Tier-2 expansion." },
    ],
    faqs: [
      { question: "Do you cover Genome Valley and the Jeedimetla pharma clusters?", answer: "Yes. Genome Valley, Jeedimetla, Bollaram, Pashamylaram and IDA Patancheru units are covered and tagged by activity (API, formulation, CRO or biotech)." },
      { question: "Can I target Warangal and Karimnagar without Hyderabad?", answer: "Yes. Tier-2 Telangana cities are tagged separately and can be bought without Hyderabad records, which suits regional distribution campaigns." },
      { question: "Can I get only Hyderabad pharma companies?", answer: "Yes. Filter by industry (bulk drugs, formulations, CRO/CDMO, biotech) and area (Genome Valley, Jeedimetla, Pashamylaram, Bollaram)." },
      { question: "Do you cover GCCs in Hyderabad?", answer: "Yes. Global capability centres and large IT employers in HITEC City and the Financial District are covered, with admin, HR and technology contacts where recorded." },
      { question: "Is Andhra Pradesh included?", answer: "No. This page covers Telangana only. Andhra Pradesh cities such as Visakhapatnam and Vijayawada can be quoted separately." },
      { question: "Are Secunderabad businesses part of the Hyderabad list?", answer: "They are tagged separately, so you can include or exclude them. Most buyers combine the two." },
    ],
    related: [
      L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
      L("IT Professionals Database", "it-professionals-database-india"),
      L("Medical Representatives Database", "medical-representatives-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("Commercial & Residential Properties Database", "commercial-residential-properties-database-india"),
    ],
    bands: [
      "Selling to Hyderabad pharma plants, or to IT firms in HITEC City? Ask for a targeted sample.",
      "Need Genome Valley or Jeedimetla units only? We filter by industrial area.",
      "Get Telangana sample rows for your exact cities and industries.",
    ],
  }
);
