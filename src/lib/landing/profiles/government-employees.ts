import {
  Building2,
  Calculator,
  GraduationCap,
  Landmark,
  Laptop,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LandingProfile } from "@/lib/landing/types";
import { CLAIMS, deliveryPhrase, removalSentence } from "@/lib/claims";

/** Reference page for the new landing template - copy every other profile's structure from here. */
export const governmentEmployees: LandingProfile = {
  path: "/government-employees-database-india",
  name: "Government Employees Database",
  title: "Government Employees Database India | Central, State & PSU Staff",
  metaDescription:
    "Government employees database for India, segmented into central, state, PSU and local-body staff by department, designation and city. Preview 5 masked sample rows on the page.",
  eyebrow: "Public Sector Audience Data",
  h1: "Government Employees Database in India",
  lead:
    "Reach central, state, PSU and municipal staff by department, designation and city. Every list is built for the roles your offer serves, with work contact fields and a free sample before you pay.",
  breadcrumbs: [
    { label: "Databases", href: "/database" },
    { label: "Government Employees Database", href: "/government-employees-database-india" },
  ],
  segmentSummary:
    "India's public sector is not one audience. A section officer in a central ministry, an accounts clerk in a district collectorate, an engineer at a power PSU and a ward officer at a municipal corporation differ in how they buy, what they need and the time they have for you. This database keeps those four employer types apart, so a training institute, a salary-account bank or a GovTech vendor reaches the right desk.",
  segmentCards: [
    {
      icon: Landmark,
      title: "Ministries & Departments",
      description: "Central and state secretariat staff, directorates and attached offices, tagged by department and grade.",
    },
    {
      icon: Building2,
      title: "PSUs & Public Banks",
      description: "Officers and staff at central and state public-sector undertakings, kept separate from ministry employees.",
    },
    {
      icon: Users,
      title: "Local Bodies",
      description: "Municipal corporations, councils and district-level offices for city-specific outreach.",
    },
  ],
  segmentTabs: {
    heading: "Pick the employer type that fits your offer",
    tabs: [
      {
        id: "central",
        label: "Central Government",
        summary:
          "Ministries, attached and subordinate offices, and central departments with offices across states, such as railways, posts, income tax and customs.",
        examples: ["Section Officers", "Assistant Section Officers", "Accounts Officers", "Technical Assistants", "Administrative Officers"],
        bestFor: "Exam-prep and upskilling academies, salary-account and loan products, insurance and pension advisory.",
      },
      {
        id: "state",
        label: "State Government",
        summary:
          "State secretariats, directorates and district collectorates. These are best bought state by state because departments and designations vary across states.",
        examples: ["Deputy Secretaries", "Tehsildars & Revenue Staff", "Clerks & Assistants", "District Officers", "Treasury Staff"],
        bestFor: "Regional banks and NBFCs, state-focused training providers, local real-estate and housing projects.",
      },
      {
        id: "psu",
        label: "PSUs & Public Banks",
        summary:
          "Central and state public-sector undertakings in energy, heavy industry, transport and finance. They have corporate-style roles and plant-based locations.",
        examples: ["Managers & Deputy Managers", "Engineers (E1-E4)", "Finance & HR Officers", "Plant Supervisors", "Bank Officers (Scale I-III)"],
        bestFor: "Wealth and insurance advisers, engineering certifications, enterprise software and B2B services.",
      },
      {
        id: "local",
        label: "Local Bodies",
        summary:
          "Municipal corporations, councils, panchayat-level offices and development authorities. Use this when your offer is tied to one city.",
        examples: ["Ward Officers", "Municipal Engineers", "Health & Sanitation Inspectors", "Accounts Staff", "Town Planning Staff"],
        bestFor: "Civic-tech and e-governance vendors, city-level events, facility and waste-management services.",
      },
    ],
  },
  coverageTable: {
    heading: "Coverage by employer type",
    segmentLabel: "Employer type",
    rows: [
      { segment: "Central Government", detail: "Ministries, attached & field offices", records: "{{COUNT}}", fillRate: "{{FILL}}" },
      { segment: "State Government", detail: "Secretariats, directorates, collectorates", records: "{{COUNT}}", fillRate: "{{FILL}}" },
      { segment: "PSUs & Public Banks", detail: "Central & state undertakings", records: "{{COUNT}}", fillRate: "{{FILL}}" },
      { segment: "Local Bodies", detail: "Municipal & district offices", records: "{{COUNT}}", fillRate: "{{FILL}}" },
    ],
  },
  dataFields: [
    "Employee name",
    "Designation and grade",
    "Department or ministry",
    "Office / organisation name",
    "Employer type (Central / State / PSU / Local)",
    "Work mobile number",
    "Work email ID",
    "Office location, city, state, pincode",
  ],
  sample: { profile: "governmentEmployee", csvSlug: "government-employees-database-india" },
  useCases: [
    {
      icon: GraduationCap,
      title: "Promotion & Exam Coaching",
      description: "Departmental exams and promotion tests have a set calendar. Reach eligible grades in the months before each exam.",
    },
    {
      icon: Calculator,
      title: "Salary Accounts & Loans",
      description: "Government salaries are stable, so these buyers score well for personal loans, home loans and salary accounts. Filter by grade and city.",
    },
    {
      icon: ShieldCheck,
      title: "Insurance & Pension Advisory",
      description: "NPS and OPS questions, health top-ups and term cover are frequent needs. Target employees by age-linked grade and state.",
    },
    {
      icon: Laptop,
      title: "GovTech & Office Software",
      description: "Introduce e-office, records and workflow tools to the administrative and IT cells that evaluate them.",
    },
    {
      icon: Megaphone,
      title: "Seminars & Training Events",
      description: "Fill department-specific workshops on audit, procurement or cybersecurity by inviting the relevant designations directly.",
    },
  ],
  buyerFaqs: [
    {
      question: "Which government employees are covered?",
      answer:
        "Staff in central ministries and their field offices, state secretariats and district offices, central and state PSUs, public-sector banks, and municipal and local bodies. Every record is tagged with its employer type, so you buy only the groups you need.",
    },
    {
      question: "Can I filter by department, designation or grade?",
      answer:
        "Yes. Filter by department or ministry, by designation (for example Section Officer, Accounts Officer or Engineer) and by state, city or pincode. Grade is available where the source records it.",
    },
    {
      question: "Are these personal or work contact details?",
      answer:
        "The database holds work-context records: name, designation, office and the work mobile and email linked to that role. We do not sell home addresses, family details, salary slips or service-book data.",
    },
    {
      question: "How fresh is the data?",
      answer: `Government staff transfer often, ${CLAIMS.showRefreshDates ? "so we refresh this database on a rolling basis and show the refresh month at the top of this page" : "so your quote states when the records in your segment were last updated"}. Each order is re-checked for invalid numbers${CLAIMS.dndScrubbing ? " and DND status" : ""} before delivery.`,
    },
    {
      question: "Is this an official government database?",
      answer:
        "No. IndiaB2BData.com is an independent B2B data provider and is not affiliated with any ministry or department. Records are compiled from the sources described on our Data Sourcing & Compliance page.",
    },
    {
      question: "Can I use this data to bid for government tenders?",
      answer:
        "No. Tenders go through official portals such as GeM and CPPP. Our buyers use this database to promote personal-finance, training and professional services to employees, and to introduce products to department teams.",
    },
    {
      question: "What format do I receive and how fast?",
      answer: `You receive an Excel or CSV file by email or WhatsApp, ${deliveryPhrase()} after you approve the sample and quote. The columns match the preview table on this page.`,
    },
    {
      question: "How do I get removed from this database?",
      answer: `Email us or use the removal request process on our Data Sourcing & Compliance page. ${removalSentence()}`,
    },
  ],
  pricingHint: {
    from: "{{PRICE}}",
    unit: "per record",
    note: "The price depends on the employer types, fields and volume you choose. Bigger state-wise orders get a lower rate per record.",
  },
  relatedLinks: [
    { label: "Teachers Database", href: "/teachers-database-india" },
    { label: "Bank Employees Database (Delhi NCR)", href: "/bank-employees-database-delhi-ncr" },
    { label: "Chief Managers Database", href: "/chief-managers-database-india" },
    { label: "General & Senior Managers Database", href: "/general-senior-managers-database-india" },
    { label: "Schools & Colleges Database", href: "/school-colleges-database" },
    { label: "Educational Institutes Database", href: "/educational-institutes-database-india" },
  ],
  lastUpdated: "2026-10",
  totalRecords: "{{COUNT}}",
  disclaimer:
    "IndiaB2BData.com is an independent provider and is not affiliated with the Government of India or any state government. Use this data for lawful B2B and professional outreach only, and honour opt-out requests.",
  areaServed: undefined,
  image: { src: "/images/keywords/office-team.jpg", alt: "Government office staff working at their desks" },
  cta: {
    formTitle: "Get a Free Government Data Sample",
    formSubtitle: "Tell us the employer type, departments and cities. We'll send matching sample rows and a quote.",
    buttonLabel: "Get Free Sample",
    whatsappMessage: "Hi, I need a Government Employees Database sample. Employer type / departments / cities:",
    bands: [
      "Need only central ministries, or only one state's collectorates? We build the list to your exact department brief.",
      "Want PSU engineers or bank officers instead of ministry staff? Ask for a split sample covering each employer type.",
      "Planning around a departmental exam or a pay-commission update? Lock your list in early.",
    ],
    footerTitle: "Ready to Reach the Right Government Desk?",
    footerText:
      "Send the employer types, departments, designations and cities you need. You'll get sample rows, a record count and a quote, usually within a few working hours.",
  },
};
