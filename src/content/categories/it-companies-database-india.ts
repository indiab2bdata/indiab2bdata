import { Building, Building2, FileText, Filter, Handshake, Laptop, MapPinned, Network, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-23",
  keyword: {
    slug: "it-companies-database-india",
    keyword: "IT Companies Database India",
    title: "IT Companies Database India",
    metaDescription: "Explore IT companies database options in India. Discuss software, SaaS, cloud and IT service businesses by location, then request a sample and quote.",
    eyebrow: "IT Companies Database",
    h1: "IT Companies Database in India",
    answer: "An IT companies database helps you shortlist software businesses and IT service providers using available company, service-category, location and contact details. Describe the types of firms you want to approach so we can check suitable business coverage and sample options.",
    intro: [
      "A software product business and an IT services firm can look similar in a company directory but buy and partner differently. Start with the business model your offer supports, then add the service categories and locations you need.",
      "Tell us whether your brief concerns development agencies, software product companies, cloud services or managed IT providers. Ask which categories, company-size bands and contact roles are recorded in the available file.",
      "For a broader brief including internet and telecom providers, compare the IT and telecom services database. If you need individual technical contacts rather than company records, explore the IT professionals database."
    ],
    contentLinks: [
      {
        text: "IT and telecom services database",
        href: "/computer-it-telecom-services-database-india"
      },
      {
        text: "IT professionals database",
        href: "/it-professionals-database-india"
      },
      {
        text: "executive contacts database",
        href: "/ceo-cfo-cmo-it-heads-database-india"
      },
      {
        text: "HR and human resources database",
        href: "/hr-human-resources-database-india"
      },
      {
        text: "corporate database",
        href: "/corporate-database-india"
      },
      {
        text: "database directory",
        href: "/database"
      }
    ],
    highlights: [
      {
        icon: Building2,
        title: "Company-Level Focus",
        description: "Discuss firms and business models relevant to your sales or partnership brief."
      },
      {
        icon: Filter,
        title: "Service-Category Selection",
        description: "Specify software, product, cloud or managed IT requirements."
      },
      {
        icon: MapPinned,
        title: "Your Target Markets",
        description: "Check available coverage for the cities your team wants to approach."
      },
      {
        icon: FileText,
        title: "Review Before Ordering",
        description: "Look at company context, size fields and business contact completeness."
      }
    ],
    dataFields: [
      "Company name and website",
      "IT business or service category, where recorded",
      "Company size or employee band, where available",
      "Contact person and designation, where available",
      "Business phone number and email, where available",
      "Business address, city, state and pincode"
    ],
    sections: [
      {
        heading: "Start with the type of IT business",
        paragraphs: [
          "Describe what a suitable company builds or delivers. This helps separate businesses that could use your product from firms that merely share an IT label."
        ],
        subsections: [
          {
            heading: "Software development and digital services",
            text: "For briefs involving project-based development firms and agencies. Specify the service specialisations important to the relationship and ask which labels are available."
          },
          {
            heading: "Software products and SaaS",
            text: "For product-business partnerships, tooling or related services. Ask whether product companies can be identified separately from firms building software for clients."
          },
          {
            heading: "Cloud and managed IT providers",
            text: "For relevant infrastructure, support and service partnerships. Confirm the recorded service categories rather than assuming certifications or vendor relationships."
          }
        ]
      },
      {
        heading: "Match the business contact to your offer",
        paragraphs: [
          "A founder, technical leader, HR manager and procurement contact evaluate different needs. Explain what your offer supports and ask which roles are populated for the selected company segment.",
          "For leadership-specific enquiries, compare the executive contacts database. For hiring tools, learning programmes or staffing partnerships, explore the HR and human resources database and specify the employer sectors you need."
        ]
      },
      {
        heading: "Build a company brief around a workable territory",
        paragraphs: [
          "Share your preferred cities and any recorded size or service criteria that matter. A local support provider and a nationwide software vendor may need different company coverage.",
          "For employers across several industries, compare the corporate database. The database directory can help you find other business categories when your offer extends beyond IT companies."
        ]
      },
      {
        heading: "Check a sample against your business criteria",
        paragraphs: [
          "Send your business models, service categories, locations, desired contact roles and approximate quantity. Ask about available records, company-size fields, completeness, format, delivery timing and pricing.",
          "The public CSV contains fictional, masked company examples. A listing does not establish technology adoption, certifications, current projects or purchasing intent. Check the details important to your partnership directly with the company."
        ]
      }
    ],
    useCasesIntro: "Choose the business model and contact role most relevant to the product or partnership you want to introduce.",
    useCases: [
      "Introduce relevant software and business tools",
      "Explore development and service-delivery partnerships",
      "Discuss cloud and managed IT channel relationships",
      "Offer staffing, learning and business support services",
      "Invite suitable companies to technology trade events"
    ],
    faqs: [
      {
        question: "How is this different from the IT and telecom services database?",
        answer: "This page focuses on software and IT businesses. The broader category also supports internet and telecom service briefs. Specify your exact business models and review the category labels in a sample."
      },
      {
        question: "Can SaaS companies and development agencies be separated?",
        answer: "State the business models you need. Availability depends on the categories recorded, so confirm the distinction and sample options before ordering."
      },
      {
        question: "Can I select companies by city or employee band?",
        answer: "Share your preferred cities and size criteria. Ask which location and employee-band fields are available and how complete they are for your chosen segment."
      },
      {
        question: "Does the list confirm technologies or certifications?",
        answer: "Do not assume it does. Request the field list and verify technology, certification or vendor-partner details directly with the business when they matter to your brief."
      },
      {
        question: "How do I get a sample and quote?",
        answer: "Send your business models, service categories, cities, contact roles and approximate quantity through the enquiry form. The public download is a fictional format preview; ask our team for matching sample options, coverage and pricing."
      }
    ],
    related: [
      "computer-it-telecom-services-database-india",
      "it-professionals-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
      "hr-human-resources-database-india",
      "corporate-database-india"
    ],
    showTestimonials: true,
    cta: {
      heroTitle: "Find IT Companies That Fit Your Offer",
      heroSubtitle: "Share the business models, services, cities and contact roles you need. Ask for a matching company sample.",
      buttonLabel: "Request IT Company Sample",
      text: "Software products, development firms or managed IT providers? Tell us which businesses you want to reach.",
      footerTitle: "Build Your IT Company Shortlist",
      footerText: "Send your company categories, locations, contact roles and approximate quantity. We will confirm available coverage, sample options and pricing."
    }
  },
  landing: categoryLanding(
    {
      slug: "it-companies-database-india",
      name: "IT Companies Database",
      title: "IT Companies Database India: SaaS & IT",
      metaDescription: "IT companies database for India: software product, SaaS, IT services and GCC companies by size, specialisation and city, with CXO, HR and delivery contacts. Sample rows on the page.",
      eyebrow: "Software & IT Services Firms",
      h1: "IT Companies Database India: Software, SaaS & IT Services",
      lead: "Software product companies, SaaS startups, IT services firms and GCCs, filtered by size, specialisation and tech hub. Reach founders, CTOs, HR and delivery heads.",
      segmentSummary: "Indian IT companies range from 10-person SaaS startups to 50,000-person services firms, and they buy very differently. Startups buy fast from founders. Services firms buy through HR, delivery and procurement. GCCs follow their parent's processes. This database covers companies whose product is software or software services. For hardware resellers, system integrators and telecom providers, see IT & Telecom Services.",
      segmentCards: [
        { icon: Laptop, title: "Product & SaaS", description: "Software product companies and SaaS startups by stage and size." },
        { icon: Building, title: "IT Services & GCCs", description: "Services firms and global capability centres." },
        { icon: Users, title: "Founders to Delivery Heads", description: "CXO, HR, delivery and admin contacts." },
      ],
      segmentTabs: { heading: "Pick the IT company type", tabs: [
        T("saas", "SaaS & Product", "Product companies, many founder-led and funded, building for India or global markets.", ["Founder / CEO", "CTO", "Head of Growth", "Finance Head"], "Cloud, dev tools, payroll, workspace."),
        T("services", "IT Services", "Outsourcing and consulting firms from 50 to 50,000+ employees.", ["Delivery Head", "HR Head", "Procurement", "CFO"], "Hiring, training, benefits, facilities."),
        T("gcc", "GCCs", "Captive tech centres of global companies in Bengaluru, Hyderabad, Pune and NCR.", ["Centre Head", "HR Head", "Admin Head", "IT Head"], "Workspace, staffing, employee services."),
      ] },
      coverage: { heading: "Coverage by tech hub", label: "Hub", rows: [
        ["Bengaluru", "Product, SaaS, GCCs"], ["Hyderabad", "Services, GCCs"], ["Pune", "Services, product engineering"], ["Delhi NCR", "Services, startups"], ["Chennai", "Services, SaaS"],
      ] },
      dataFields: ["Company name", "Company type (product / services / GCC)", "Specialisation", "Employee size band", "Decision-maker name and designation", "Business phone and email", "City and office area", "Website"],
      sample: "itCompany",
      useCases: [
        { icon: Users, title: "Tech Hiring & Staffing", description: "Reach HR heads at services firms and GCCs." },
        { icon: Network, title: "Cloud & Dev Tools", description: "Sell to CTOs at SaaS and product companies." },
        { icon: Building2, title: "Workspace & Facilities", description: "Pitch offices to growing tech firms." },
        { icon: Handshake, title: "Partnerships & Outsourcing", description: "Find IT partners by specialisation for white-label or overflow work." },
      ],
      faqs: [
        { question: "Can I filter by funding stage?", answer: "Where recorded, yes. Seed, Series A and later-stage startups can be targeted, which suits vendors selling to fast-growing teams." },
        { question: "How is this different from IT & Telecom Services?", answer: "This page covers software companies. IT & Telecom Services covers infrastructure and channel businesses: system integrators, hardware resellers, networking and telecom providers." },
        { question: "Can I filter by specialisation?", answer: "Yes, for example SaaS, fintech, AI, ERP, mobile or cloud services, where recorded." },
        { question: "Do you cover startups?", answer: "Yes. Product startups are included, with founder contacts where recorded." },
        { question: "Is this a list of IT employees?", answer: "No, it lists companies. For individual tech professionals by skill, see the IT Professionals database." },
      ],
      pricingNote: "Priced by hub, size band and contacts per company.",
      related: [L("IT Professionals Database", "it-professionals-database-india"), L("Computer & IT Telecom Services Database", "computer-it-telecom-services-database-india"), L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"), L("HR Professionals Database", "hr-human-resources-database-india"), L("Karnataka Business Database", "database/karnataka"), L("Telangana Business Database", "database/telangana")],
      disclaimer: legal,
      formTitle: "Get a Free IT Companies Sample",
      bands: ["Selling to SaaS startups or services giants? Ask for a split sample.", "Need HR heads at GCCs? We filter by company type and role.", "Get IT company samples for your hubs."],
      footerTitle: "Reach India's IT Companies",
    },
    { subjects: "IT company", kind: "business", notIncluded: "It lists companies, not individual tech professionals by skill." }
  ),
} satisfies CategoryContent;
