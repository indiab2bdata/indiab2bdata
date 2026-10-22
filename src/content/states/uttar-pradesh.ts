import { Cpu, Gem, Landmark, Laptop, Package, Store, Truck } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-22", hubCities: ["Noida", "Ghaziabad", "Lucknow", "Kanpur", "Agra", "Meerut", "Varanasi", "Greater Noida", "Aligarh", "Moradabad"], moreCities: 15 },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    title: "Uttar Pradesh Business Database | Noida, Lucknow, Kanpur B2B Contacts",
    metaDescription:
      "Uttar Pradesh B2B database: Noida electronics and IT, Kanpur leather, Agra footwear, Moradabad brassware, Varanasi silk and Lucknow businesses by city and industry.",
    lead:
      "Reach Noida's electronics and IT companies, Kanpur's leather units, Agra's footwear makers, Moradabad's brass exporters and Lucknow's trading and services firms, filtered city by city.",
    segmentSummary:
      "Uttar Pradesh pairs one modern corporate hub with dozens of traditional craft clusters. Noida and Greater Noida host mobile and electronics plants, IT parks and corporate offices. Further east, the cities are known for their products: Kanpur for leather and tanneries, Agra for footwear, Moradabad for brassware, Aligarh for locks and hardware, Varanasi for silk and Firozabad for glass. Most buyers pick either the Noida corporate audience or a specific product cluster.",
    segmentCards: [
      { icon: Cpu, title: "Noida Electronics & IT", description: "Mobile and electronics manufacturers, IT firms and corporate offices across Noida, Greater Noida and the Expressway." },
      { icon: Gem, title: "Craft & Export Clusters", description: "Leather (Kanpur), footwear (Agra), brassware (Moradabad), locks (Aligarh), silk (Varanasi), glass (Firozabad)." },
      { icon: Store, title: "Trade & Services Hubs", description: "Distributors, traders and service firms in Lucknow, Ghaziabad, Meerut and Prayagraj." },
    ],
    cities: [
      { city: "Noida & Greater Noida", detail: "Electronics, IT/ITES, corporate offices" },
      { city: "Ghaziabad", detail: "Engineering, steel, distribution" },
      { city: "Lucknow", detail: "Trading, services, chikankari, education" },
      { city: "Kanpur", detail: "Leather, tanneries, textiles" },
      { city: "Agra", detail: "Footwear, handicrafts, tourism" },
      { city: "Moradabad & Aligarh", detail: "Brassware exports, locks & hardware" },
    ],
    useCases: [
      { icon: Landmark, title: "MSME Credit Across UP", description: "Reach owners of trading and manufacturing MSMEs in Kanpur, Lucknow and Ghaziabad with working-capital and equipment-finance products." },
      { icon: Cpu, title: "Components for Noida Electronics", description: "Reach procurement teams at mobile and electronics assembly plants across Noida and Greater Noida." },
      { icon: Package, title: "Export Services for Craft Clusters", description: "Offer packaging, compliance and freight to brassware, leather and footwear exporters." },
      { icon: Laptop, title: "Office Tech in Noida's IT Parks", description: "Target admin, IT and HR heads at companies in Sector 62, 63, 125-136 and along the Expressway." },
      { icon: Truck, title: "Distribution Across Eastern UP", description: "Find stockists and wholesalers in Lucknow, Kanpur and Prayagraj for regional expansion." },
    ],
    faqs: [
      { question: "Do you cover Yamuna Expressway and YEIDA sectors?", answer: "Yes. Businesses along the Yamuna Expressway and in YEIDA sectors are covered and tagged by sector, so you can include or exclude them." },
      { question: "Can I buy Varanasi silk or Firozabad glass units?", answer: "Yes. Varanasi silk weavers and traders and Firozabad glass and bangle makers are tagged by product, so each cluster can be bought on its own." },
      { question: "Is Noida data available separately?", answer: "Yes. Noida and Greater Noida each have their own city database pages, and you can buy either on its own or as part of a UP-wide file." },
      { question: "Can I get only Moradabad brass exporters?", answer: "Yes. Filter by city and industry to get only brassware and metal-handicraft manufacturers and exporters in Moradabad." },
      { question: "Do you cover Kanpur's leather industry?", answer: "Yes. Tanneries, finished-leather makers and leather-goods manufacturers in Kanpur and Unnao are covered and tagged by activity." },
      { question: "Does this include government offices in Lucknow?", answer: "No. This is business data. For public-sector staff, see our Government Employees database." },
    ],
    related: [
      L("Manufacturer Database", "manufacturer-database-india"),
      L("Importers & Exporters Database", "importers-exporters-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
      L("Government Employees Database", "government-employees-database-india"),
      L("Dealers & Distributors Database", "dealers-distributors-database-india"),
      L("Computer & IT Telecom Services Database", "computer-it-telecom-services-database-india"),
    ],
    cityPages: [
      { label: "Noida Company Database", href: "/database/uttar-pradesh/noida" },
      { label: "Greater Noida Company Database", href: "/database/uttar-pradesh/greater-noida" },
    ],
    bands: [
      "Want only Noida's corporate offices, or a single craft cluster? Ask for a targeted sample.",
      "Selling export services to Moradabad, Agra or Kanpur? We filter by product cluster.",
      "Get Uttar Pradesh sample rows for your exact cities and industries.",
    ],
  }
);
