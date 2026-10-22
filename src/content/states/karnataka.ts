import { Anchor, Building2, Factory, Laptop, Pill, Truck, Wrench } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-22", hubCities: ["Bengaluru", "Mysore", "Mangalore", "Hubli", "Belgaum", "Davanagere", "Tumkur", "Shimoga", "Gulbarga", "Udupi"], moreCities: 5 },
  {
    slug: "karnataka",
    name: "Karnataka",
    title: "Karnataka Business Database | Bengaluru, Mysuru, Mangaluru Contacts",
    metaDescription:
      "Karnataka B2B database: Bengaluru IT, startups and GCCs, Mysuru manufacturing, Mangaluru port and banking, Belagavi foundries and Hubli-Dharwad businesses by city.",
    lead:
      "Reach Bengaluru's IT companies, startups and global capability centres, plus manufacturers and traders in Mysuru, Mangaluru, Hubli-Dharwad and Belagavi. Filter by city, industry and role.",
    segmentSummary:
      "Most buyers come to Karnataka for Bengaluru, which has India's densest mix of IT services firms, product startups and GCCs, plus aerospace and electronics manufacturing. The rest of the state is different. Mysuru has auto and silk, Mangaluru has its port, refineries and cashew processing, Belagavi has foundries, and Hubli-Dharwad is North Karnataka's trading hub. Choose a tech audience in Bengaluru or a manufacturing and trade audience elsewhere.",
    segmentCards: [
      { icon: Laptop, title: "Bengaluru Tech & GCCs", description: "IT services, SaaS startups and global capability centres in Whitefield, Outer Ring Road, Electronic City and Koramangala." },
      { icon: Factory, title: "Industrial Karnataka", description: "Aerospace, machine tools and electronics in Peenya and Bommasandra, and foundries in Belagavi." },
      { icon: Anchor, title: "Coastal & North Hubs", description: "Mangaluru port, cashew and banking businesses, and Hubli-Dharwad traders and distributors." },
    ],
    cities: [
      { city: "Bengaluru", detail: "IT/ITES, startups, GCCs, aerospace" },
      { city: "Mysuru", detail: "Auto, silk, incense, tourism" },
      { city: "Mangaluru", detail: "Port, refinery, cashew, banking" },
      { city: "Hubli-Dharwad", detail: "Trading, distribution, engineering" },
      { city: "Belagavi", detail: "Foundries, auto castings, aerospace parts" },
    ],
    useCases: [
      { icon: Pill, title: "Biotech & Pharma Supply", description: "Pitch lab supplies, CRO services and equipment to biotech and pharma companies in Bengaluru's Biocon Park and Electronic City." },
      { icon: Laptop, title: "Selling SaaS to Bengaluru Startups", description: "Reach founders, CTOs and finance heads at funded startups and mid-size IT firms." },
      { icon: Building2, title: "GCC Facilities & HR Services", description: "Offer workspace, hiring and employee-benefit services to global capability centres." },
      { icon: Wrench, title: "Industrial Supply to Peenya & Belagavi", description: "Target purchase managers at machine-tool, aerospace and foundry units." },
      { icon: Truck, title: "Distribution in North Karnataka", description: "Find stockists and dealers in Hubli-Dharwad for regional consumer and B2B products." },
    ],
    faqs: [
      { question: "Do you cover Karnataka's aerospace and defence suppliers?", answer: "Yes. Aerospace, defence and precision-engineering suppliers around Bengaluru's HAL and Devanahalli aerospace belt, Peenya and Belagavi are tagged, and you can buy them as their own segment." },
      { question: "Can I filter Bengaluru by area?", answer: "Yes. Filter by pincode or area, such as Whitefield, Outer Ring Road, Electronic City, Koramangala, Peenya or Hebbal, to match your sales territory." },
      { question: "Are Hubli-Dharwad and Belagavi sold separately?", answer: "Yes. North Karnataka cities are tagged individually, so you can buy Hubli-Dharwad, Belagavi or both without paying for Bengaluru records." },
      { question: "Can I get only Bengaluru IT companies?", answer: "Yes. Filter Bengaluru by industry (IT services, product companies, GCCs) and by area, such as Whitefield, ORR or Electronic City." },
      { question: "Do you have startup founder contacts?", answer: "Yes, for Bengaluru companies where founder or director details are recorded. Specify company age or funding stage in your brief and we'll check coverage." },
      { question: "Is Peenya industrial area covered?", answer: "Yes. Peenya, Bommasandra, Jigani and Bidadi manufacturers are covered and tagged by industry." },
      { question: "Do you cover Mangaluru and coastal Karnataka?", answer: "Yes. Mangaluru, Udupi and Karwar businesses are covered, including port services, cashew processors and the trading community." },
    ],
    related: [
      L("IT Companies Database", "it-companies-database-india"),
      L("IT Professionals Database", "it-professionals-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("HR Professionals Database", "hr-human-resources-database-india"),
      L("Business Analysts Database", "business-analysts-database-india"),
      L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
    ],
    bands: [
      "Selling to Bengaluru tech companies? Ask for a sample filtered by area and company size.",
      "Need Peenya or Belagavi manufacturers instead? We filter by industrial area.",
      "Get Karnataka sample rows for your exact cities and industries.",
    ],
  }
);
