import { Briefcase, Car, GraduationCap, Laptop, Wrench } from "lucide-react";
import { cityContent } from "@/content/shared/city-template";

export default cityContent(
  { updated: "2026-10-28" },
  {
    slug: "pune",
    city: "Pune",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    title: "Pune Company Database: IT & Auto",
    metaDescription:
      "Pune company database: IT and GCC offices in Hinjewadi, Kharadi and Magarpatta, auto and engineering units in Chakan, Bhosari and Pimpri-Chinchwad. Filter by area and preview sample rows on the page.",
    lead:
      "Describe the Pune office areas or industrial estates you need. Ask which business and site-type fields can be confirmed for that selection.",
    segmentSummary:
      "Pune briefs can distinguish office areas such as Hinjewadi, Kharadi and Magarpatta from industrial locations such as Pimpri-Chinchwad, Bhosari and Chakan. These are useful selection terms, not confirmation of current inventory or site-type tags. Ask which locations and office, factory or operating-unit fields are available, then review a matching sample.",
    segmentCards: [
      { icon: Laptop, title: "IT Parks & GCCs", description: "IT services firms, product companies and GCCs in Hinjewadi Phases 1-3, Kharadi EON, Magarpatta and Baner." },
      { icon: Car, title: "Auto & Engineering Belt", description: "OEM suppliers and engineering units in Chakan, Bhosari, Pimpri-Chinchwad, Talegaon and Ranjangaon MIDC." },
      { icon: GraduationCap, title: "Education & Services", description: "Colleges, training institutes and service firms across Shivajinagar, Kothrud and Viman Nagar." },
    ],
    segmentTabs: {
      heading: "Pune segments by buyer",
      tabs: [
        { id: "it", label: "IT & GCCs", summary: "IT services firms and capability centres in Hinjewadi and Kharadi, with HR, IT and admin as separate buying centres.", examples: ["Delivery Head","CTO / IT Head","HR Head","Admin Manager"], bestFor: "Enterprise SaaS, hiring, employee services." },
        { id: "auto", label: "Auto & Engineering", summary: "OEM suppliers in Chakan and Bhosari, where plant and purchase heads work to OEM quality standards.", examples: ["Plant Head","Purchase Manager","Quality Head","Tool Room Head"], bestFor: "Tooling, automation, raw material, calibration." },
        { id: "edu", label: "Education", summary: "Colleges and training institutes across the city, buying through directors and placement offices.", examples: ["Director","Principal","Placement Officer","Admin Head"], bestFor: "Ed-tech, labs, campus recruitment." },
      ],
    },
    areas: [
      { area: "Hinjewadi Phases 1-3", detail: "IT services, GCCs, product companies" },
      { area: "Kharadi, Viman Nagar & Magarpatta", detail: "IT parks, BPO, corporate offices" },
      { area: "Pimpri-Chinchwad & Bhosari", detail: "Auto components, engineering MSMEs" },
      { area: "Chakan & Talegaon", detail: "OEM plants, tier-1 suppliers" },
      { area: "Shivajinagar, Kothrud & Baner", detail: "Education, services, SMEs" },
    ],
    useCases: [
      { icon: Laptop, title: "Enterprise Software to Pune IT", description: "Reach CTOs and delivery heads at IT services firms and GCCs in Hinjewadi and Kharadi." },
      { icon: Wrench, title: "Tooling & Automation for Chakan", description: "Pitch automation, tooling and raw material to auto-component makers in Chakan and Bhosari MIDC." },
      { icon: Briefcase, title: "Hiring & HR Services", description: "Offer staffing, payroll and campus-hiring services to HR heads in the IT parks." },
      { icon: GraduationCap, title: "Ed-Tech & Institute Partnerships", description: "Approach colleges and training institutes with labs, placement and course partnerships." },
    ],
    faqs: [
      { question: "Can I get only Hinjewadi IT companies?", answer: "Request Hinjewadi Phases 1-3, Kharadi or Magarpatta as named areas. Ask whether each filter can be applied and confirm available locations in the sample." },
      { question: "Are Pimpri-Chinchwad and Chakan included in a Pune list?", answer: "Ask how the requested Pune boundary treats Pimpri-Chinchwad and Chakan. Request separate area counts and confirm whether those locations can be supplied as distinct segments." },
      { question: "Can I separate offices from factories?", answer: "Ask whether office, factory or operating-unit fields are available for the selected areas, and confirm their definitions and completeness in a matching sample." },
      { question: "Do you have plant-head or purchase contacts at auto suppliers?", answer: "Ask which plant, maintenance or purchase roles are available in Chakan and Bhosari. Request a dated count and a sample showing how roles and locations are recorded." },
    ],
    related: [
      { label: "IT Companies Database", href: "/it-companies-database-india" },
      { label: "IT Professionals Database", href: "/it-professionals-database-india" },
      { label: "Manufacturing Companies Database", href: "/manufacturing-companies-database-india" },
      { label: "Machinery Suppliers Database", href: "/machinery-suppliers-services-database-india" },
      { label: "Engineers & Service Engineers Database", href: "/engineers-service-engineers-database-india" },
      { label: "Educational Institutes Database", href: "/educational-institutes-database-india" },
    ],
    siblings: [{ label: "Mumbai Company Database", href: "/database/maharashtra/mumbai" }],
    bands: [
      "IT belt or industrial belt? Ask for a Pune sample split the way you sell.",
      "Need purchase heads at Chakan auto suppliers? Name the role and the MIDC area.",
      "Get Pune sample rows for your exact areas.",
    ],
  }
);
