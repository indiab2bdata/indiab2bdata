import { Building2, Cpu, Factory, Laptop, Truck } from "lucide-react";
import { cityContent } from "@/content/shared/city-template";

export default cityContent(
  { updated: "2026-10-22" },
  {
    slug: "noida",
    city: "Noida",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    title: "Noida Company Database | IT, Electronics & Corporate Contacts by Sector",
    metaDescription:
      "Noida company database by sector: IT parks in Sectors 62-63 and 125-136, electronics plants in Phase 2 and Sector 80s, and corporate offices along the Expressway. 5 sample rows on the page.",
    lead:
      "Reach IT companies, electronics manufacturers and corporate offices across Noida's numbered sectors. Filter by sector, industry and role so your list matches the area your team actually covers.",
    segmentSummary:
      "Noida is planned in numbered sectors, which makes it one of the easiest Indian cities to target precisely. Sectors 62-63 and 125-136 along the Expressway hold IT, ITES and corporate offices. Phase 2, Sector 80-83 and the Hosiery Complex are manufacturing and export zones, and the city is now one of India's largest mobile-phone and electronics production hubs. Choose sectors, and the list follows your territory.",
    segmentCards: [
      { icon: Laptop, title: "IT & Corporate Offices", description: "Software, ITES, media and corporate offices in Sectors 16-18, 62-63, 125-136 and along the Noida-Greater Noida Expressway." },
      { icon: Cpu, title: "Electronics Manufacturing", description: "Mobile-phone, consumer-electronics and component plants in Phase 2, the Sector 60s and the Sector 80s." },
      { icon: Factory, title: "Garments & MSMEs", description: "Garment exporters in the Hosiery Complex and Phase 2, plus engineering MSMEs in Sectors 57-60 and 63." },
    ],
    segmentTabs: {
      heading: "Noida segments by buyer",
      tabs: [
        { id: "it", label: "IT & Corporate", summary: "Offices in the Expressway and Sector 62 belts. Decisions are made by HR, admin and IT heads, often with a parent office in Delhi or abroad.", examples: ["HR Head","Admin Manager","IT Manager","Centre Head"], bestFor: "SaaS, staffing, facilities, corporate transport." },
        { id: "mfg", label: "Electronics & Manufacturing", summary: "Assembly plants and component makers in Phase 2 and the Sector 80s, run by plant heads and purchase teams with vendor approval processes.", examples: ["Plant Head","Purchase Manager","Quality Head","Maintenance Lead"], bestFor: "Components, tooling, contract staffing, industrial services." },
        { id: "export", label: "Garment Exporters", summary: "Exporters in the Hosiery Complex and NSEZ, owner-led and with seasonal order peaks.", examples: ["Owner","Merchandising Head","Production Manager","Export Executive"], bestFor: "Trims, compliance audits, freight forwarding." },
      ],
    },
    areas: [
      { area: "Sectors 62-63", detail: "IT/ITES, institutes, MSME units" },
      { area: "Sectors 125-136 (Expressway)", detail: "Corporate offices, IT parks, SEZs" },
      { area: "Sectors 16-18", detail: "Media, retail, commercial offices" },
      { area: "Phase 2 & Hosiery Complex", detail: "Garment exports, electronics, NSEZ" },
      { area: "Sectors 57-60 & 80-83", detail: "Engineering, electronics, auto parts" },
    ],
    useCases: [
      { icon: Laptop, title: "SaaS & IT Services to Noida Offices", description: "Reach CTOs, HR and admin heads at IT and corporate offices in Sector 62 and along the Expressway." },
      { icon: Cpu, title: "Components for Electronics Plants", description: "Pitch components, tooling and contract services to mobile and electronics assemblers in Phase 2 and the Sector 80s." },
      { icon: Truck, title: "Export Logistics for Garment Units", description: "Offer freight, compliance audits and trims to exporters in the Hosiery Complex and NSEZ." },
      { icon: Building2, title: "Facilities & Office Services", description: "Sell housekeeping, security, cafeteria and fit-out services to offices sector by sector." },
    ],
    faqs: [
      { question: "Can I target specific Noida sectors?", answer: "Yes. Every record carries its sector and pincode, so you can buy only Sectors 62-63, only the Expressway belt, or any list of sectors you name." },
      { question: "Is Greater Noida included in a Noida list?", answer: "No. Greater Noida has its own database page. Order both together if you need them, and the file labels each city separately." },
      { question: "Can I get only electronics or garment manufacturers?", answer: "Yes. Filter by industry to get electronics and component makers, or garment exporters, without IT and corporate offices." },
      { question: "Do you have HR and admin contacts at Noida IT companies?", answer: "Yes, where the role is recorded. Name the functions you need (HR, admin, IT or procurement) and the quote shows how many matching records are available." },
    ],
    related: [
      { label: "IT Companies Database", href: "/it-companies-database-india" },
      { label: "IT Professionals Database", href: "/it-professionals-database-india" },
      { label: "Apparel & Garments Exporters Database", href: "/apparel-garments-exporters-database-india" },
      { label: "Manufacturer Database", href: "/manufacturer-database-india" },
      { label: "HR Professionals Database", href: "/hr-human-resources-database-india" },
      { label: "Computer & IT Telecom Services Database", href: "/computer-it-telecom-services-database-india" },
    ],
    siblings: [{ label: "Greater Noida Company Database", href: "/database/uttar-pradesh/greater-noida" }, { label: "Gurgaon Company Database", href: "/database/haryana/gurgaon" }, { label: "Delhi Business Database", href: "/database/delhi" }],
    bands: [
      "Selling only to the Expressway IT parks, or only to Phase 2 manufacturers? Ask for a sector-wise sample.",
      "Need HR or admin heads at Noida offices? Name the role and the sectors.",
      "Get Noida sample rows for the sectors your team actually covers.",
    ],
  }
);
