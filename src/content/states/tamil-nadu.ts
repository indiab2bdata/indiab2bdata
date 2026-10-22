import { Car, Cpu, Laptop, Shirt, Wrench } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-22", hubCities: ["Chennai", "Coimbatore", "Madurai", "Tiruppur", "Salem", "Erode", "Vellore", "Tiruchirappalli", "Thanjavur", "Hosur"], moreCities: 15 },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    title: "Tamil Nadu Business Database | Chennai, Coimbatore, Tiruppur Contacts",
    metaDescription:
      "Tamil Nadu B2B database: Chennai auto and electronics, Coimbatore pumps and textile machinery, Tiruppur knitwear, Hosur and Madurai businesses by city and industry.",
    lead:
      "From Chennai's auto and electronics plants to Coimbatore's pump makers and Tiruppur's knitwear exporters, Tamil Nadu has India's most diverse manufacturing base. Pick the cluster that fits your offer.",
    segmentSummary:
      "Tamil Nadu is the most industrialised state in South India, and its clusters are sharply defined. Chennai's Sriperumbudur-Oragadam belt makes cars and electronics. Coimbatore builds pumps, motors and textile machinery. Tiruppur exports most of India's knitwear, Hosur makes two-wheelers and components, and Salem and Erode handle textiles and agri-processing. Each record is tagged by cluster and industry.",
    segmentCards: [
      { icon: Car, title: "Chennai Auto & Electronics", description: "OEM suppliers, electronics assemblers and IT firms across Sriperumbudur, Oragadam, Guindy and OMR." },
      { icon: Wrench, title: "Coimbatore Engineering", description: "Pumps, motors, foundries and textile-machinery makers in Coimbatore and its SIDCO estates." },
      { icon: Shirt, title: "Tiruppur & Erode Textiles", description: "Knitwear exporters, processors and yarn traders across Tiruppur, Erode, Karur and Salem." },
    ],
    cities: [
      { city: "Chennai", detail: "Auto, electronics, IT/ITES, healthcare" },
      { city: "Coimbatore", detail: "Pumps, motors, foundries, textile machinery" },
      { city: "Tiruppur", detail: "Knitwear manufacturing & export" },
      { city: "Hosur", detail: "Two-wheelers, auto components" },
      { city: "Madurai", detail: "Trading, rubber, textiles, education" },
      { city: "Salem & Erode", detail: "Textiles, steel, agri-processing" },
    ],
    useCases: [
      { icon: Car, title: "EV & Auto Component Supply", description: "Reach EV makers and component suppliers in Hosur, Oragadam and Sriperumbudur with batteries, electronics and tooling." },
      { icon: Cpu, title: "Industrial Automation for Chennai Plants", description: "Reach plant heads and maintenance managers at auto and electronics units in the Sriperumbudur belt." },
      { icon: Shirt, title: "Compliance & Logistics for Tiruppur Exporters", description: "Offer audits, freight forwarding and trims supply to knitwear exporters by order volume." },
      { icon: Wrench, title: "Raw Material Supply to Coimbatore", description: "Pitch castings, steel and electrical components to pump and motor manufacturers." },
      { icon: Laptop, title: "B2B SaaS for Chennai SMEs", description: "Target owners and finance heads with ERP, HR and accounting software." },
    ],
    faqs: [
      { question: "Can I target Coimbatore SIDCO and SIPCOT estates?", answer: "Yes. Units in SIDCO and SIPCOT estates around Coimbatore, Hosur, Sriperumbudur and Oragadam are covered and can be filtered by estate or pincode." },
      { question: "Do you cover Chennai's IT corridor separately from manufacturing?", answer: "Yes. OMR, Guindy and Taramani IT and ITES companies are tagged separately from the Ambattur and Sriperumbudur manufacturing belts." },
      { question: "Can I target only Tiruppur knitwear exporters?", answer: "Yes. Tiruppur records are tagged by activity, so you can choose exporters, job-work processors or yarn traders separately." },
      { question: "Is Hosur included in the Tamil Nadu database?", answer: "Yes. Hosur's auto and component manufacturers are covered and can be bought on their own or combined with Krishnagiri district." },
      { question: "Do you have Tamil-speaking contact preferences?", answer: "Language preference is not a standard field. Most Tamil Nadu buyers filter by city and industry, and handle language in their own calling team." },
      { question: "Which Chennai areas are covered?", answer: "Industrial zones such as Ambattur, Guindy, Sriperumbudur and Oragadam, and commercial areas such as T. Nagar, Anna Salai and the OMR IT corridor. Filter by pincode." },
    ],
    related: [
      L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
      L("Apparel & Garments Exporters Database", "apparel-garments-exporters-database-india"),
      L("Machinery Suppliers Database", "machinery-suppliers-services-database-india"),
      L("Metals & Minerals Industries Database", "metals-minerals-industries-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
      L("Engineers & Service Engineers Database", "engineers-service-engineers-database-india"),
    ],
    bands: [
      "Selling to Coimbatore's pump makers or Tiruppur's exporters? Ask for a cluster sample.",
      "Need plant heads in the Sriperumbudur-Oragadam auto belt? We filter by industrial park.",
      "Get Tamil Nadu sample rows for your exact cities and industries.",
    ],
  }
);
