import { Building2, FileText, Filter, MapPinned } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "legal-firms-database-india",
    keyword: "Legal Firms Database India",
    title: "Legal Firms Database India",
    metaDescription: "Explore legal firms database options in India. Specify law-firm practice areas, locations and business contact roles, then request a sample and quote.",
    eyebrow: "Legal Firms Database",
    h1: "Legal Firms Database in India",
    answer: "A legal firms database helps you shortlist law practices as organisations, with available firm, practice-area, location and business contact details. Share the types of firms and contact roles you need so we can check relevant coverage and sample options for your business enquiry.",
    intro: [
      "A firm considering document management software needs a different conversation from a practice reviewing training or administrative services. Start with the workflow your offer supports, then describe the kind of legal practice you want to approach.",
      "Specify your preferred practice areas, cities and contact roles. Ask which firm-level and professional contact details are recorded so a general office listing is not treated as a named purchasing contact.",
      "For individual practitioners rather than firm-level records, compare the advocates and lawyers database. For advisory businesses across several sectors, explore the consulting firms database and define the service category you need."
    ],
    contentLinks: [
      {
        text: "advocates and lawyers database",
        href: "/advocates-lawyers-database-india"
      },
      {
        text: "consulting firms database",
        href: "/consultants-consulting-services-database-india"
      },
      {
        text: "corporate database",
        href: "/corporate-database-india"
      },
      {
        text: "HR and human resources database",
        href: "/hr-human-resources-database-india"
      },
      {
        text: "IT companies database",
        href: "/it-companies-database-india"
      },
      {
        text: "database directory",
        href: "/database"
      }
    ],
    highlights: [
      {
        icon: Building2,
        title: "Firm-Level Focus",
        description: "Describe the legal practices and organisation contacts relevant to your offer."
      },
      {
        icon: Filter,
        title: "Practice-Area Context",
        description: "Ask which service and practice categories are recorded in the available segment."
      },
      {
        icon: MapPinned,
        title: "Relevant Office Locations",
        description: "Check firm and branch coverage in the cities your team can serve."
      },
      {
        icon: FileText,
        title: "Review the Sample First",
        description: "Look at firm details, office records and available business contact fields."
      }
    ],
    dataFields: [
      "Law firm or legal practice name",
      "Practice areas, where recorded",
      "Business contact person and role, where available",
      "Business phone number and email, where available",
      "Office address, city, state and pincode",
      "Website, where available"
    ],
    sections: [
      {
        heading: "Choose the practice and office context you need",
        paragraphs: [
          "Explain the business need your offer addresses. Ask which practice-area and firm-role distinctions are recorded before selecting a segment."
        ],
        subsections: [
          {
            heading: "Practice-area requirements",
            text: "Name relevant areas such as corporate advisory, litigation, intellectual property or employment work. Treat recorded labels as a starting point and confirm the practice’s current services directly."
          },
          {
            heading: "Partners and operational contacts",
            text: "Specify whether you need a partner, practice manager, administrator or general office contact. A professional title does not establish who evaluates suppliers or approves spending."
          },
          {
            heading: "Single-office and multiple-office practices",
            text: "Say whether you need firms or individual office locations. Ask how branches and repeated contacts are organised so the file supports your territory plan."
          }
        ]
      },
      {
        heading: "Connect the offer to a firm workflow",
        paragraphs: [
          "Document handling, research tools, training and office services each support different needs. Make your introduction specific to the practice and avoid assuming every firm uses the same systems.",
          "For employers outside legal practice, compare the corporate database. For employer-side learning or staffing tools, explore the HR and human resources database and specify the sectors you want to serve."
        ]
      },
      {
        heading: "Keep business partnerships distinct from legal advice",
        paragraphs: [
          "This page supports enquiries about firm-level business contacts. A listing does not establish expertise, suitability for a matter or an endorsement of the practice. Assess any professional engagement directly with the firm.",
          "For technology-service partnerships, compare the IT companies database as a separate business category. The database directory can help you identify other organisation-level audiences."
        ]
      },
      {
        heading: "Check a matching firm sample before ordering",
        paragraphs: [
          "Send your practice-area requirements, locations, contact roles, fields and approximate quantity. Ask about available records, field completeness, format, delivery timing and pricing.",
          "The public CSV contains fictional, masked firm examples to demonstrate the layout. It does not include client lists or case files. Confirm current practice details and the appropriate business contact directly with the organisation."
        ]
      }
    ],
    useCasesIntro: "Focus the introduction on a practical firm need and the person responsible for evaluating it.",
    useCases: [
      "Introduce legal research and document workflow tools",
      "Discuss office technology and administrative services",
      "Invite relevant firms to professional events and training",
      "Explore business-service and technology partnerships",
      "Build a firm-level prospect shortlist by practice context and location"
    ],
    faqs: [
      {
        question: "How is this different from the advocates and lawyers database?",
        answer: "This page focuses on legal practices as organisations. The advocates and lawyers category supports individual-practitioner enquiries. Specify whether you need firm records, office listings or named professionals."
      },
      {
        question: "Can I request firms by practice area?",
        answer: "State the practice categories and locations you need. Ask which service labels are recorded and confirm their availability in a matching sample."
      },
      {
        question: "Are partner or practice-manager contacts included?",
        answer: "Contact-role availability depends on the selected segment. Tell us which roles you need and review the populated fields before ordering."
      },
      {
        question: "Does a listing recommend a firm or confirm expertise?",
        answer: "No. A business listing is not a professional endorsement. Confirm the firm’s current services, credentials and suitability for any engagement directly."
      },
      {
        question: "How do I request a sample and price?",
        answer: "Name the practice areas, locations and contact roles you need. Ask which filters and fields are available, whether a matching sample can be shared, and what count basis, total price and terms the quote covers."
      }
    ],
    related: [
      "advocates-lawyers-database-india",
      "consultants-consulting-services-database-india",
      "corporate-database-india",
      "hr-human-resources-database-india",
      "it-companies-database-india"
    ],
    showTestimonials: true,
    cta: {
      heroTitle: "Find Legal Firms That Fit Your Business Brief",
      heroSubtitle: "Share your practice categories, target cities and contact requirements. Ask for a matching firm sample and quote.",
      buttonLabel: "Request Legal Firm Sample",
      text: "Which legal practices and business roles fit your offer? Tell us the services and locations you want to explore.",
      footerTitle: "Build Your Legal Firm Shortlist",
      footerText: "Send your preferred practice areas, office locations, contact roles and approximate quantity. We will confirm available coverage, sample options and pricing."
    }
  },
} satisfies CategoryContent;
