import { Briefcase, Car, GraduationCap, Laptop, Wrench } from "lucide-react";
import { cityContent } from "@/content/shared/city-template";

export default cityContent(
  { updated: "2026-10-22" },
  {
    slug: "pune",
    city: "Pune",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    title: "Pune Company Database | Hinjewadi IT, Chakan Auto & PCMC Industry Contacts",
    metaDescription:
      "Pune company database: IT and GCC offices in Hinjewadi, Kharadi and Magarpatta, auto and engineering units in Chakan, Bhosari and Pimpri-Chinchwad. Filter by area and preview sample rows on the page.",
    lead:
      "Reach IT and GCC offices in Hinjewadi, Kharadi and Magarpatta, and auto and engineering plants in Chakan, Bhosari and Pimpri-Chinchwad. Offices and factories come as separate segments.",
    segmentSummary:
      "Pune has two economies a few kilometres apart. The IT side, Hinjewadi, Kharadi, Magarpatta and Baner, is full of IT services firms, product companies and global capability centres. The industrial side, Pimpri-Chinchwad, Bhosari, Chakan, Talegaon and Ranjangaon, is one of India's largest auto and engineering belts. A software vendor and an industrial supplier need different lists, so every record is tagged as office-belt or industrial-belt.",
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
      { question: "Can I get only Hinjewadi IT companies?", answer: "Yes. Filter by area to get only Hinjewadi Phases 1-3, or combine it with Kharadi and Magarpatta for a full IT-corridor list." },
      { question: "Are Pimpri-Chinchwad and Chakan included in a Pune list?", answer: "Yes, but as separate industrial segments. You can buy the IT belt, the industrial belt, or both, and each is clearly labelled." },
      { question: "Can I separate offices from factories?", answer: "Yes. Records are tagged as office or operating unit where known, so a software vendor gets offices and an industrial supplier gets plants." },
      { question: "Do you have plant-head or purchase contacts at auto suppliers?", answer: "Yes, where the role is recorded. Ask for plant, maintenance or purchase roles in Chakan and Bhosari and the quote shows the matching count." },
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
