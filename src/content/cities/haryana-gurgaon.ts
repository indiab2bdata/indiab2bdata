import { Briefcase, Building2, Car, Landmark, Laptop, Wrench } from "lucide-react";
import { cityContent } from "@/content/shared/city-template";

export default cityContent(
  { updated: "2026-10-28" },
  {
    slug: "gurgaon",
    city: "Gurgaon",
    state: "Haryana",
    stateSlug: "haryana",
    title: "Gurgaon & Gurugram Company Records by Location",
    metaDescription:
      "Discuss company-record selections for Gurgaon/Gurugram and named business areas. Ask which locations, roles and fields are currently available; the on-page rows are fictional.",
    lead:
      "Describe the company types, business areas and roles you need in Gurgaon/Gurugram. Ask which area, industry and contact filters can be supported and request a dated matching count.",
    segmentSummary:
      "Gurgaon and Gurugram are names used for this city. Areas such as Cyber City, Udyog Vihar, Golf Course Road, Sohna Road and IMT Manesar are examples a buyer may specify. Corporate offices and industrial sites can call for different selection rules; ask how location is recorded and whether these areas can be separated in the available data.",
    segmentCards: [
      { icon: Building2, title: "MNC & Corporate HQs", description: "Ask whether company records for these business areas are available and how office location is recorded." },
      { icon: Laptop, title: "IT, Consulting & Startups", description: "Specify the business types and areas you need; confirm the current categories and location fields." },
      { icon: Car, title: "IMT Manesar Industrial Units", description: "Ask whether industrial units in IMT Manesar can be identified separately from office locations." },
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
      { question: "Is Gurugram the same as Gurgaon in your data?", answer: "Gurgaon and Gurugram are names used for the same city. Ask which label the file uses and whether aliases are normalized or deduplicated before delivery." },
      { question: "Can I target Cyber City offices only?", answer: "Name the areas you need and ask whether the location data can support those filters. Confirm the matching count and how office versus operating-site addresses are handled." },
      { question: "Is Manesar included in a Gurgaon list?", answer: "Specify whether IMT Manesar should be included. Ask whether the source can distinguish industrial sites from corporate-office locations and request a dated count." },
      { question: "Do you have HR, procurement or CXO contacts?", answer: "Name the functions you need and ask which roles are recorded for the selected businesses. Request a dated count by role before purchase." },
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
      "Need Manesar industrial locations? Ask whether they can be separated from office-based selections.",
      "Ask whether a matching sample is available for the roles in your brief.",
    ],
  }
);
