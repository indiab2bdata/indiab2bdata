import { Briefcase, Filter, MapPinned, Users } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "engineers-service-engineers-database-india",
    keyword: "engineers and service engineers database India",
    title: "Engineers & Service Engineers Database",
    metaDescription:
      "Engineers and service engineers database in India - mechanical, electrical, electronics, HVAC and field service engineers by skill, experience and city. Free sample.",
    eyebrow: "Engineers Database",
    h1: "Engineers & Service Engineers Database in India",
    answer:
      "An engineers and service engineers database lists engineering professionals in India - mechanical, electrical, electronics, instrumentation, HVAC, IT hardware and field service engineers - with name, discipline, designation, employer industry, experience, city and contact details. IndiaB2BData.com supplies this data for recruitment, training, tools and equipment marketing.",
    intro: [
      "Service engineers keep India's machines running - installing, maintaining and repairing everything from factory equipment, lifts and air-conditioners to medical devices, telecom towers and IT hardware. Alongside design and plant engineers, they form one of the country's largest technical workforces.",
      "Our engineers database covers field service, maintenance, plant and project engineers across disciplines, filterable by skill, experience and city. For civil and construction engineers, see our civil engineers database.",
    ],
    highlights: [
      { icon: Users, title: "All Disciplines", description: "Mechanical, electrical, electronics, HVAC, IT." },
      { icon: Briefcase, title: "Service & Field Roles", description: "Installation, maintenance and repair engineers." },
      { icon: Filter, title: "Skill & Experience", description: "Freshers to senior service managers." },
      { icon: MapPinned, title: "Pan-India", description: "Industrial clusters and metros." },
    ],
    dataFields: [
      "Engineer name",
      "Discipline: mechanical, electrical, electronics, instrumentation, HVAC or IT hardware",
      "Designation, such as service engineer, field engineer or maintenance engineer",
      "Employer industry, where available",
      "Experience band",
      "Mobile number and email, where available and permitted",
      "City and state",
    ],
    sections: [
      {
        heading: "Engineer Types Covered",
        paragraphs: [],
        bullets: [
          "Field service and installation engineers",
          "Maintenance and plant engineers",
          "Electrical and electronics engineers",
          "HVAC, lift and elevator engineers",
          "Medical equipment and biomedical service engineers",
          "IT hardware, networking and telecom engineers",
        ],
      },
      {
        heading: "Who Uses an Engineers Database?",
        paragraphs: [],
        bullets: [
          "Engineering recruiters and manpower agencies",
          "Tools, testing instrument and spare-parts suppliers",
          "Technical training and certification institutes",
          "Field-service management software companies",
          "OEMs building authorised service networks",
        ],
      },
      {
        heading: "Responsible Use",
        paragraphs: [
          "Contact engineers only for relevant purposes such as genuine job openings, training or professional tools, and honour every opt-out request in line with the Digital Personal Data Protection Act, 2023.",
        ],
      },
    ],
    useCases: [
      "Service and maintenance engineer hiring",
      "Tools and testing equipment sales",
      "Technical training and certification promotion",
      "Field-service software marketing",
      "Authorised service partner recruitment",
    ],
    faqs: [
      { question: "What is an engineers and service engineers database?", answer: "It is a list of mechanical, electrical, electronics, HVAC, IT and field service engineers in India with discipline, designation, experience, city and contact details." },
      { question: "How is this different from the civil engineers database?", answer: "This database covers mechanical, electrical, electronics and service engineers. The civil engineers database covers construction, site and structural engineers." },
      { question: "Can I filter by discipline?", answer: "Yes. Records can be filtered by discipline, such as mechanical, electrical, electronics, HVAC or IT hardware." },
      { question: "Can I target experienced engineers only?", answer: "Yes, where experience is recorded - for example 5+ or 10+ years." },
      { question: "Who buys engineer data?", answer: "Recruiters, tool and equipment suppliers, training institutes, field-service software companies and OEMs." },
      { question: "Can I see a sample?", answer: "Yes. Download the sample format on this page or request real sample records." },
    ],
    related: [
      "civil-engineers-database-india",
      "energy-power-sector-database-delhi-ncr",
      "computer-it-telecom-services-database-india",
      "manufacturer-database-india",
      "job-seekers-database",
      "customer-support-executives-database-india",
    ],
  },
} satisfies CategoryContent;
