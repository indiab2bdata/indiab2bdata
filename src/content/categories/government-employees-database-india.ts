import { Briefcase, Building2, Calculator, FileText, GraduationCap, Landmark, Laptop, MapPinned, Megaphone, ShieldCheck, Users } from "lucide-react";
import { trustFaqs } from "@/content/shared/trust-faqs";
import type { CategoryContent } from "@/types/landing";

const GOV_FIELDS = [
  "Employee name",
  "Designation and grade",
  "Department or ministry",
  "Office / organisation name",
  "Employer type (Central / State / PSU / Local)",
  "Work mobile number",
  "Work email ID",
  "Office location, city, state, pincode",
];

export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "government-employees-database-india",
    keyword: "Government Employees Database India",
    title: "Government Employees Database India",
    metaDescription: "Explore government employees database options in India. Discuss departments, roles and locations, check available fields, and request a sample and quote.",
    eyebrow: "Government Employees Database",
    h1: "Government Employees Database in India",
    answer: "A government employees database organises employee and workplace details by role, department and location. Tell us which public-sector audience you need so we can check available coverage, contact fields and sample options before you order.",
    intro: [
      "Government employees work across many different services and offices. A training programme for administrative staff needs a different shortlist from a workshop for teachers or a software demonstration for a department team. Start with the people your offer would help.",
      "Share the departments, designations and locations you want to reach. If your brief includes central government, state government, local bodies or public-sector undertakings, name those groups separately so we can confirm what is available rather than treating them as one audience.",
      "For teaching roles, compare the teachers database. If you need institution-level contacts instead of individual employees, explore the schools and colleges database and describe the ownership type you require."
    ],
    contentLinks: [
      {
        text: "teachers database",
        href: "/teachers-database-india"
      },
      {
        text: "schools and colleges database",
        href: "/school-colleges-database"
      },
      {
        text: "chief managers database",
        href: "/chief-managers-database-india"
      },
      {
        text: "general and senior managers database",
        href: "/general-senior-managers-database-india"
      },
      {
        text: "bank employees database for Delhi NCR",
        href: "/bank-employees-database-delhi-ncr"
      },
      {
        text: "database directory",
        href: "/database"
      }
    ],
    highlights: [
      {
        icon: Landmark,
        title: "Department Context",
        description: "Describe the government bodies and office types relevant to your brief."
      },
      {
        icon: Briefcase,
        title: "Role-Based Selection",
        description: "Specify designations and responsibilities before choosing a segment."
      },
      {
        icon: MapPinned,
        title: "Location Requirements",
        description: "Ask about coverage for the states and cities you want to serve."
      },
      {
        icon: FileText,
        title: "Review a Sample First",
        description: "Check the available fields, format and audience fit before ordering."
      }
    ],
    dataFields: [
      "Employee or contact person name, where available",
      "Designation and department, where recorded",
      "Organisation or office name",
      "Government body or organisation type, where recorded",
      "Available work contact number and email fields",
      "Office location, city, state and pincode, where available"
    ],
    sections: [
      {
        heading: "Define the government employee audience you need",
        paragraphs: [
          "A useful brief explains both the employer and the person’s function. Give us the departments or office types you need, then add the roles, locations and approximate quantity. Ask us to confirm each segment in the quote."
        ],
        subsections: [
          {
            heading: "Central and state government offices",
            text: "Name the departments and geographic area you need. Do not assume that availability in one office or state means complete coverage across every government service."
          },
          {
            heading: "Local bodies and public-sector organisations",
            text: "Specify municipal bodies or public-sector undertakings separately. Employer type matters when choosing a relevant audience and should be checked in the sample."
          },
          {
            heading: "Administrative and specialist roles",
            text: "Describe the function behind the designation, such as administration, accounts, technical work or education. This helps keep the shortlist aligned with your offer."
          }
        ]
      },
      {
        heading: "Choose a specialist list when the role matters most",
        paragraphs: [
          "For a brief centred on senior responsibilities, compare the chief managers database or the general and senior managers database. These are broader professional categories; ask which employer types and departments can be identified.",
          "For banking roles in that region, explore the bank employees database for Delhi NCR. Specify public-sector bank staff if that is your requirement, and confirm the employer mix rather than assuming every banking contact is a government employee."
        ]
      },
      {
        heading: "Make the first approach useful to the recipient",
        paragraphs: [
          "Explain the practical value of your programme, service or event in a few clear sentences. A role-specific training invitation or relevant product demonstration is easier to assess than a broad message sent to unrelated departments.",
          "Keep the contact’s role and office context visible when planning your approach. An employee listing does not establish purchasing authority, an open tender or interest in your offer. If your goal is supplying an organisation, confirm the appropriate procurement route directly."
        ]
      },
      {
        heading: "Check the sample, coverage and quote together",
        paragraphs: [
          "Tell us your preferred departments, roles, employer types and locations, plus the contact fields you need. Ask about field completeness, available record counts, update information, file format, delivery timing and pricing.",
          "The public CSV preview uses fictional names and masked details to demonstrate the layout. Request a matching sample to assess actual coverage. IndiaB2BData is an independent provider; this page is not an official government employee registry.",
          "Still deciding between employee, professional and organisation-level data? Use the database directory to compare categories before sending your enquiry."
        ]
      }
    ],
    useCasesIntro: "Select the roles that would benefit from your offer and confirm the contact context before starting outreach.",
    useCases: [
      "Invite relevant staff to professional training and workshops",
      "Introduce role-specific workflow or productivity tools",
      "Plan department-focused conference and seminar invitations",
      "Discuss services with the appropriate administrative function",
      "Compare office and location coverage for a focused campaign"
    ],
    faqs: [
      {
        question: "Does this cover every government employee in India?",
        answer: "Do not assume complete nationwide coverage. Share the departments, employer types, roles and locations you need, and ask us to confirm the available segments and record counts."
      },
      {
        question: "Can I request central or state government employees separately?",
        answer: "Specify those as separate requirements, along with your target departments and locations. We will check whether the available records support that selection."
      },
      {
        question: "Are public-sector banks and PSU employees included automatically?",
        answer: "No. Name public-sector banks, undertakings or local bodies explicitly in your brief. Confirm the employer mix and coverage in a matching sample and quote."
      },
      {
        question: "Which contact fields are available?",
        answer: "Ask about names, designations, departments, office details, locations and available work contact fields. Field availability and completeness depend on the selected segment."
      },
      {
        question: "Is this an official government database?",
        answer: "No. IndiaB2BData is an independent provider. A listing does not imply government endorsement, purchasing authority or a current procurement opportunity."
      },
      {
        question: "How do I request a sample and price?",
        answer: "Request a written quote for the agreed selection, locations, fields and volume. Confirm the counting unit, total price and delivery terms before purchase."
      }
    ],
    related: [
      "teachers-database-india",
      "school-colleges-database",
      "chief-managers-database-india",
      "general-senior-managers-database-india",
      "bank-employees-database-delhi-ncr",
      "educational-institutes-database-india"
    ],
    showTestimonials: true,
    cta: {
      heroTitle: "Find the Right Government Employee Segment",
      heroSubtitle: "Share your departments, roles and locations. Ask for available coverage, a matching sample and pricing.",
      buttonLabel: "Request Government Data Sample",
      text: "Which departments and roles fit your offer? Send your target locations and fields so we can check suitable coverage.",
      footerTitle: "Discuss Your Government Employee Data Requirement",
      footerText: "Tell us the employer types, departments, roles, locations and approximate quantity you need. We will confirm available fields, sample options, delivery timing and a quote."
    }
  },
  landing: {
    path: "/government-employees-database-india",
    name: "Government Employees Database",
    title: "Government Employees Database India | Central, State & PSU Staff",
    metaDescription:
      "Discuss a public-sector employee selection by employer type, department, role or location. Ask which fields and groups are available; the on-page rows are fictional.",
    eyebrow: "Public Sector Audience Data",
    h1: "Government Employees Database in India",
    lead:
      "Describe the public-sector audience and locations relevant to your brief. Confirm whether the requested role and work-contact fields are available, and ask about a matching sample before requesting a quote.",
    breadcrumbs: [
      { label: "Databases", href: "/database" },
      { label: "Government Employees Database", href: "/government-employees-database-india" },
    ],
    segmentSummary:
      "Public-sector organizations include different employer types and roles. If those distinctions matter to your offer, name the bodies, departments and designations in your brief, then confirm the source, fields, coverage and counts for each group. Examples on this page do not establish that a group or contact field is available.",
    segmentCards: [
      {
        icon: Landmark,
        title: "Ministries & Departments",
        description: "Ask whether selected records can be grouped by department or grade, and which offices are represented.",
      },
      {
        icon: Building2,
        title: "PSU & Public Bank Employees",
        description: "Specify the undertaking or public-bank scope and confirm whether it can be separated from ministry records.",
      },
      {
        icon: Users,
        title: "Local Body Employees",
        description: "Name the local bodies or districts you need and confirm whether they appear in the selected records.",
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
    dataFields: GOV_FIELDS,
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
          "Examples of possible groups include central and state offices, PSUs, public-sector banks and local bodies. Ask which groups appear in the selected data and whether employer type is recorded for those records.",
      },
      {
        question: "Can I filter by department, designation or grade?",
        answer:
          "Ask which department, role and location fields are present in the selected records, whether they can be used as filters, and request a dated count for each requested group.",
      },
      {
        question: "Are these personal or work contact details?",
        answer:
          "Ask which personal or work-context fields are included, how they are sourced and what is excluded from the proposed selection. The sample is fictional and does not establish inventory.",
      },
      ...trustFaqs({
        name: "Government Employees Database",
        subjects: "government employee",
        kind: "people",
        fields: GOV_FIELDS,
        segments: ["Central Government", "State Government", "PSUs & Public Banks", "Local Bodies"],
        segmentLabel: "Employer type",
        pricingNote: "Request a written quote for the agreed employer types, locations, fields and volume. Confirm the counting unit and total price.",
        notIncluded: "It is not an official government database, and it holds no service-book data.",
      }),
    ],
    pricingHint: {
      from: "{{PRICE}}",
      unit: "per record",
      note: "Request a written quote for the agreed employer types, locations, fields and volume. Confirm the counting unit and total price.",
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
      formTitle: "Ask About a Government Data Sample",
      formSubtitle: "Tell us the employer types, departments and cities. Ask whether a matching sample is available and request a written quote.",
      buttonLabel: "Ask About a Sample",
      whatsappMessage: "Hi, I need a Government Employees Database sample. Employer type / departments / cities:",
      bands: [
        "Need a specific ministry, state or district? Ask which departments are represented and request a dated count.",
        "Need PSU engineers or bank officers? Ask whether those groups can be separated and whether a matching sample is available.",
        "Planning a campaign around an event? Confirm the extract date and available fields before setting a schedule.",
      ],
      footerTitle: "Discuss a Public-Sector Selection",
      footerText:
        "Send the employer types, departments, roles and locations you need. Ask which fields and sample options can be confirmed, and request a dated count and written quote.",
    },
  },
} satisfies CategoryContent;
