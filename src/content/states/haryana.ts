import { Building2, Car, Shirt, Sprout, Warehouse } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-28", hubCities: ["Gurgaon", "Faridabad", "Panipat", "Karnal", "Hisar", "Rohtak", "Ambala", "Sonipat", "Panchkula", "Yamuna Nagar"], moreCities: 14 },
  {
    slug: "haryana",
    name: "Haryana",
    title: "Haryana Business Database by City",
    metaDescription:
      "Haryana B2B database: Gurgaon corporate offices and MNCs, Manesar auto suppliers, Faridabad engineering, Panipat textiles and Karnal agri businesses by city and industry.",
    lead:
      "Reach Gurgaon's corporate and MNC offices, auto suppliers in Manesar and Bawal, engineering units in Faridabad, and textile and agri businesses in Panipat, Sonipat and Karnal.",
    segmentSummary:
      "Haryana sits around Delhi on three sides and splits into clear audiences. Gurgaon (Gurugram) has corporate headquarters, MNC offices and consulting firms along Cyber City and Golf Course Road. Manesar, Bawal and Dharuhera form one of India's biggest auto-component belts around the Maruti and Hero plants. Faridabad is an old engineering hub, Panipat leads in home textiles and textile recycling, and Karnal and Kurukshetra trade in rice and agri inputs.",
    segmentCards: [
      { icon: Building2, title: "Gurgaon Corporate", description: "MNC offices, corporate HQs, consulting and IT firms in Cyber City, Udyog Vihar and Golf Course Road." },
      { icon: Car, title: "Auto Belt", description: "Tier-1 and tier-2 auto suppliers in Manesar, Bawal, Dharuhera and Faridabad." },
      { icon: Sprout, title: "Textiles & Agri", description: "Home-textile exporters in Panipat, plus rice millers and agri-input traders in Karnal and Kurukshetra." },
    ],
    cities: [
      { city: "Gurgaon", detail: "Corporate HQs, MNCs, IT, consulting" },
      { city: "Faridabad", detail: "Engineering, auto parts, tractors" },
      { city: "Manesar & Bawal", detail: "Auto components, industrial parks" },
      { city: "Panipat", detail: "Home textiles, textile recycling, refinery" },
      { city: "Sonipat & Karnal", detail: "Industrial units, rice mills, agri trade" },
    ],
    useCases: [
      { icon: Warehouse, title: "Warehousing on the KMP Corridor", description: "Reach logistics, e-commerce and distribution companies in the warehousing parks along the KMP Expressway and in Bilaspur and Farrukhnagar." },
      { icon: Building2, title: "Corporate Services in Gurgaon", description: "Reach admin, HR and facility heads at MNC and corporate offices with workspace, travel and benefit services." },
      { icon: Car, title: "Tier-2 Supply to the Auto Belt", description: "Pitch tooling, raw material and automation to component makers in Manesar and Bawal." },
      { icon: Shirt, title: "Export Services for Panipat", description: "Offer logistics, compliance and yarn to home-textile manufacturers and exporters." },
      { icon: Sprout, title: "Agri Inputs & Machinery", description: "Find rice millers, dealers and agri traders in Karnal, Kurukshetra and Kaithal." },
    ],
    faqs: [
      { question: "Do you cover IMT Manesar and Bawal industrial areas?", answer: "Yes. Units in IMT Manesar, Bawal, Dharuhera and Rai are covered and tagged by industry, so you can target just the auto and engineering belt." },
      { question: "Can I get Gurgaon's Cyber City and Udyog Vihar offices only?", answer: "Yes. Filter Gurgaon by area and pincode to target Cyber City, Udyog Vihar, Golf Course Road or Sohna Road offices." },
      { question: "Is Gurgaon available as a separate list?", answer: "Yes. Gurgaon has its own city database page. You can buy Gurgaon alone, Gurgaon plus Manesar, or the whole state." },
      { question: "Can I target only auto-component manufacturers?", answer: "Yes. Filter by industry and the Manesar, Bawal, Dharuhera or Faridabad industrial areas to get auto suppliers only." },
      { question: "Is Faridabad part of Haryana or Delhi NCR data?", answer: "Faridabad is in Haryana and is included here. It can also be added to a combined Delhi NCR file." },
      { question: "Do you cover Panipat textile exporters?", answer: "Yes. Panipat's home-textile, blanket and recycled-yarn businesses are covered, and exporters are tagged where recorded." },
    ],
    related: [
      L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("General & Senior Managers Database", "general-senior-managers-database-india"),
      L("HR Professionals Database", "hr-human-resources-database-india"),
      L("Apparel & Garments Exporters Database", "apparel-garments-exporters-database-india"),
      L("Machinery Suppliers Database", "machinery-suppliers-services-database-india"),
    ],
    cityPages: [{ label: "Gurgaon Company Database", href: "/database/haryana/gurgaon" }],
    bands: [
      "Need only Gurgaon's corporate offices, or only the Manesar auto belt? Ask for a targeted sample.",
      "Selling to Panipat textile exporters? We filter by product and export activity.",
      "Get Haryana sample rows for your exact cities and industries.",
    ],
  }
);
