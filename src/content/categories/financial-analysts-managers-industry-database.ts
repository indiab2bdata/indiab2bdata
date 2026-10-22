import { Briefcase, Building2, FileText, MapPinned } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-17",
  keyword: {
    slug: "financial-analysts-managers-industry-database",
    keyword: "Financial Analysts/ Managers/ Industry Database",
    title: "Financial Analysts & Finance Managers Database India",
    metaDescription: "Find finance professionals by role, employer sector and city. Scope analyst, FP&A, treasury or finance-manager contacts and request a relevant sample.",
    eyebrow: "Financial Analysts & Managers Database",
    showTestimonials: true,
    h1: "Financial Analysts & Finance Managers Database in India",
    answer: "Get your offer in front of the right finance function. A treasury manager, an FP&A analyst and a research specialist handle different problems. Tell us the roles, employer sectors and cities you need so we can check a shortlist that fits your product, event or hiring brief.",
    intro: [
      "A budgeting tool needs a different conversation from a market-data subscription. Start by naming the finance task your offer helps with, then choose the people likely to own that task.",
      "Use the brief to separate finance managers, financial analysts, controllers, treasury teams and research roles. Add the type of employer you want, such as a manufacturing company, consulting firm or financial-services business.",
      "For senior decision-makers, compare the CEO and CFO database. For accounting and tax practices rather than in-house teams, explore the chartered accountants database.",
      "If your offer also serves operations, HR, procurement or IT teams, compare the general and senior managers database for a broader department-based requirement.",
    ],
    contentLinks: [
      {
        text: "CEO and CFO database",
        href: "/ceo-cfo-cmo-it-heads-database-india"
      },
      {
        text: "chartered accountants database",
        href: "/chartered-accountants-database-india"
      },
      {
        text: "economic analysts database",
        href: "/economic-analysts-database-india"
      },
      {
        text: "business analysts database",
        href: "/business-analysts-database-india"
      },
      {
        text: "bank employees database",
        href: "/bank-employees-database-delhi-ncr"
      },
      {
        text: "consulting services database",
        href: "/consultants-consulting-services-database-india"
      },
      { text: "general and senior managers database", href: "/general-senior-managers-database-india" },
    ],
    highlights: [
      {
        icon: Briefcase,
        title: "Role-Level Targeting",
        description: "Specify the finance function, designation and seniority you need."
      },
      {
        icon: Building2,
        title: "Employer Context",
        description: "Separate corporate finance teams from financial-services firms."
      },
      {
        icon: MapPinned,
        title: "Location Filters",
        description: "Request the cities your sales or recruitment team covers."
      },
      {
        icon: FileText,
        title: "Sample Before Scope",
        description: "Check titles, employer fields and contact completeness."
      }
    ],
    dataFields: [
          "Professional name",
          "Designation and finance function",
          "Employer or organisation name",
          "Industry and organisation type",
          "Specialisation or experience band, where available",
          "Professional email and business contact number, where available and permitted",
          "City and state",
        ],
    sections: [
      {
        heading: "Choose the finance team that owns the problem",
        paragraphs: [
          "A broad “finance professionals” list can mix several audiences. A clearer role brief gives your sales team a better reason to start a conversation."
        ],
        subsections: [
          {
            heading: "Financial planning & analysis",
            text: "For budgeting, forecasting, management reporting and planning products."
          },
          {
            heading: "Finance managers & controllers",
            text: "For accounting workflows, reporting systems, controls and departmental tools."
          },
          {
            heading: "Treasury & working capital",
            text: "For cash-management, treasury software and relevant business services."
          },
          {
            heading: "Research & risk",
            text: "For financial research, market information and specialist analytical tools."
          }
        ]
      },
      {
        heading: "Keep adjacent roles separate",
        paragraphs: [
          "For economists, policy researchers and market research, see the economic analysts database. For process, requirements and systems work, compare the business analysts database.",
          "If your requirement is specifically banking professionals in Delhi NCR, use the bank employees database. For advisory firms rather than individual employees, explore the consulting services database."
        ]
      },
      {
        heading: "Turn the shortlist into a useful outreach plan",
        paragraphs: [
          "Tell us what you sell or the role you are hiring for, which employer sectors matter and the seniority you want. Include any organisations you already serve or need to exclude.",
          "Review a sample for job-title fit, employer context and the business contact fields you require. Ask for record counts and the delivery scope to be agreed before choosing a quantity."
        ],
        bullets: [
          "For sales: state the finance workflow your product improves.",
          "For events: explain the topic and intended professional audience.",
          "For hiring: share the role, experience and location requirements.",
          "For research: specify the function and employer categories you need."
        ]
      }
    ],
    useCases: [
      "Introduce budgeting and forecasting software",
      "Demonstrate finance and accounting tools",
      "Invite finance teams to a specialist event",
      "Discuss research and market-data products",
      "Source candidates for finance management roles"
    ],
    faqs: [
      {
        question: "Can I request finance managers outside banking?",
        answer: "Yes. Specify the employer sectors you want, such as manufacturing, IT services, retail or consulting, and ask for current matching coverage."
      },
      {
        question: "Can financial analysts and CFOs be separated?",
        answer: "They should be separate requirements when seniority matters. Use the finance brief for analyst and manager roles and discuss the executive category for CFOs."
      },
      {
        question: "Which fields should I expect?",
        answer: "Ask for name, designation, employer, sector, city and the available business contact fields. Specialisation and experience information should be checked in the sample."
      },
      {
        question: "Does this include personal financial information?",
        answer: "No. This is a professional-contact requirement, not a source of bank accounts, balances, investments or transaction histories."
      },
      {
        question: "How do I get a relevant sample?",
        answer: "Send the role names, employer sectors, cities and purpose of your enquiry. Ask for sample records that reflect those filters, followed by a quote for the agreed scope."
      }
    ],
    related: [
      "ceo-cfo-cmo-it-heads-database-india",
      "chartered-accountants-database-india",
      "economic-analysts-database-india",
      "business-analysts-database-india",
      "bank-employees-database-delhi-ncr",
      "consultants-consulting-services-database-india"
    ],
    useCasesIntro: "Give each outreach message a professional reason to exist, tied to the recipient’s function.",
    cta: {
      heroTitle: "Find the Finance Roles You Need",
      heroSubtitle: "Send the functions, employer sectors and cities you want. Ask for a role-matched sample and quote.",
      buttonLabel: "Request Finance Sample",
      text: "Selling to FP&A, treasury or finance heads? Tell us the function and employer type so we can narrow your brief.",
      footerTitle: "Let’s Build Your Finance Contact Shortlist",
      footerText: "Share the designations and industries you want to reach. We’ll confirm available coverage, populated fields and sample options."
    },
  },
} satisfies CategoryContent;
