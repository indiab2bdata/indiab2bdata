import { Briefcase, Building2, Car, Landmark, Laptop, Wrench } from "lucide-react";
import { cityContent } from "@/content/shared/city-template";

export default cityContent(
  { updated: "2026-10-22" },
  {
    slug: "gurgaon",
    city: "Gurgaon",
    state: "Haryana",
    stateSlug: "haryana",
    title: "Gurgaon Company Database | Gurugram Corporate, MNC & Industrial Contacts",
    metaDescription:
      "Gurgaon (Gurugram) company database: MNC and corporate offices in Cyber City, Udyog Vihar and Golf Course Road, plus Manesar industry. Filter by area and role, and see 5 sample rows on the page.",
    lead:
      "Reach MNC and corporate offices in Cyber City, Udyog Vihar and Golf Course Road, plus the industrial units around IMT Manesar. Filter by area, industry and decision-maker role.",
    segmentSummary:
      "Gurgaon (officially Gurugram) has more Fortune 500 and MNC offices than almost any Indian city outside Mumbai and Bengaluru. Cyber City and Udyog Vihar hold IT, consulting and corporate HQs. Golf Course Road and Sohna Road add newer towers and startups. IMT Manesar to the south-west is an auto and engineering belt. Corporate buyers and industrial buyers want very different lists, so this one is split by area.",
    segmentCards: [
      { icon: Building2, title: "MNC & Corporate HQs", description: "Corporate offices and regional HQs in DLF Cyber City, Cyber Hub and Golf Course Road." },
      { icon: Laptop, title: "IT, Consulting & Startups", description: "IT services, consulting firms and funded startups across Udyog Vihar, Sohna Road and Golf Course Extension." },
      { icon: Car, title: "Manesar Industry", description: "Auto-component and engineering units in IMT Manesar, available as a separate segment." },
    ],
    segmentTabs: {
      heading: "Gurgaon segments by buyer",
      tabs: [
        { id: "mnc", label: "MNC & Corporate Offices", summary: "Large offices in Cyber City and on Golf Course Road, with formal procurement and several stakeholders.", examples: ["CHRO","Admin Head","CFO","Procurement Lead"], bestFor: "Benefits, transport, workspace, enterprise software." },
        { id: "startup", label: "Startups & SMEs", summary: "Funded startups and growing SMEs on Sohna Road and Golf Course Extension, where founders still decide quickly.", examples: ["Founder","COO","Head of People","Finance Manager"], bestFor: "SaaS, payroll, co-working, legal and compliance." },
        { id: "manesar", label: "Manesar Industry", summary: "Auto and engineering plants in IMT Manesar, with plant-led buying and vendor approvals.", examples: ["Plant Head","Vendor Development Manager","Tool Room In-charge","EHS Manager"], bestFor: "Tooling, automation, raw material, industrial staffing." },
      ],
    },
    areas: [
      { area: "Cyber City & Cyber Hub", detail: "MNC offices, corporate HQs, consulting" },
      { area: "Udyog Vihar", detail: "IT/ITES, BPO, manufacturing offices" },
      { area: "Golf Course Road & Extension", detail: "Corporate towers, startups, real estate" },
      { area: "Sohna Road", detail: "SME offices, startups, retail" },
      { area: "IMT Manesar", detail: "Auto components, engineering" },
    ],
    useCases: [
      { icon: Building2, title: "Corporate & Employee Services", description: "Reach HR, admin and facility heads at MNC offices with benefits, transport, travel and workspace services." },
      { icon: Briefcase, title: "B2B SaaS & Consulting", description: "Target CXOs and department heads at corporate HQs and consulting firms in Cyber City." },
      { icon: Landmark, title: "Wealth & Insurance for Senior Staff", description: "Approach senior managers at Gurgaon corporates with wealth-management and group-insurance products." },
      { icon: Wrench, title: "Industrial Supply to Manesar", description: "Pitch tooling, automation and raw material to auto-component makers in IMT Manesar." },
    ],
    faqs: [
      { question: "Is Gurugram the same as Gurgaon in your data?", answer: "Yes. Both names refer to the same city. Every record uses one consistent city label, so your CRM won't end up with two copies of the same city." },
      { question: "Can I target Cyber City offices only?", answer: "Yes. Filter by area and pincode to get only Cyber City, Udyog Vihar, Golf Course Road or Sohna Road offices." },
      { question: "Is Manesar included in a Gurgaon list?", answer: "Only if you ask for it. IMT Manesar is tagged as a separate industrial segment, because corporate and factory buyers rarely want both." },
      { question: "Do you have HR, procurement or CXO contacts?", answer: "Yes, where the role is recorded. Name the functions you need, and the quote shows the matching count for each role." },
    ],
    related: [
      { label: "CEO, CFO, CMO & IT Heads Database", href: "/ceo-cfo-cmo-it-heads-database-india" },
      { label: "General & Senior Managers Database", href: "/general-senior-managers-database-india" },
      { label: "HR Professionals Database", href: "/hr-human-resources-database-india" },
      { label: "IT Companies Database", href: "/it-companies-database-india" },
      { label: "Consultants & Consulting Services Database", href: "/consultants-consulting-services-database-india" },
      { label: "Manufacturing Companies Database", href: "/manufacturing-companies-database-india" },
    ],
    siblings: [{ label: "Delhi Business Database", href: "/database/delhi" }, { label: "Noida Company Database", href: "/database/uttar-pradesh/noida" }],
    bands: [
      "Need only Cyber City MNC offices? Ask for an area-wise sample.",
      "Selling to Manesar's auto belt instead? We split it out as its own segment.",
      "Get Gurgaon sample rows with the roles you sell to.",
    ],
  }
);
