import { Banknote, Cpu, Filter, Globe, Handshake, MapPinned, Network, Package, Router, Store, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-23",
  keyword: {
    slug: "computer-it-telecom-services-database-india",
    keyword: "computer, IT and telecom services database India",
    title: "IT & Telecom Services Companies Database India",
    metaDescription:
      "Computer, IT and telecom services companies database in India - software firms, IT services, ISPs and telecom service providers with decision-maker contacts.",
    eyebrow: "IT & Telecom Services Database",
    h1: "Computer, IT & Telecom Services Companies Database in India",
    answer:
      "A computer, IT and telecom services database lists Indian software development firms, IT services and managed-services companies, internet service providers, telecom service providers and IT consultants, with company name, decision-maker, service category, size and location. IndiaB2BData.com covers hubs like Bengaluru, Hyderabad, Pune, Noida, Gurgaon and Chennai.",
    intro: [
      "India's IT and telecom services industry ranges from global IT majors to lakhs of small software firms, web agencies, local ISPs and telecom franchises. They buy cloud, hardware, software licences, office space, recruitment and financial services - and they partner with each other constantly.",
      "Our IT and telecom services database lets you target these companies by service category, company size and city, reaching founders, CTOs, IT heads and procurement contacts.",
      "For a software and IT business brief, compare the IT companies database. If your audience is individual developers, testers or technical specialists, explore the IT professionals database as a separate requirement."
    ],
    contentLinks: [
      {
        text: "IT companies database",
        href: "/it-companies-database-india"
      },
      {
        text: "IT professionals database",
        href: "/it-professionals-database-india"
      }
    ],
    highlights: [
      { icon: Globe, title: "IT & Telecom Firms", description: "Software, IT services, ISPs and telecom." },
      { icon: MapPinned, title: "Tech Hub Coverage", description: "Bengaluru, Hyderabad, Pune, NCR, Chennai." },
      { icon: Filter, title: "Service Filters", description: "Development, cloud, networking, BPO, ISP." },
      { icon: Users, title: "Decision-Makers", description: "Founders, CTOs, IT and procurement heads." },
    ],
    dataFields: [
      "Company name and website",
      "Decision-maker name and designation",
      "Mobile number and email ID",
      "Service category, such as software development, cloud, networking or ISP",
      "Company size / employee band, where available",
      "City, state and pincode",
    ],
    sections: [
      {
        heading: "Segments Covered",
        paragraphs: [],
        subsections: [
          { heading: "Software & IT Services", text: "Custom software, web and app development, SaaS, cloud and managed IT services firms." },
          { heading: "Telecom & Internet Providers", text: "Internet service providers, broadband and leased-line operators, telecom franchises and VAS companies." },
          { heading: "IT Infrastructure & Networking", text: "Networking, data centre, security and AMC service companies." },
        ],
      },
      {
        heading: "Who Uses This Database?",
        paragraphs: [],
        bullets: [
          "Cloud, SaaS and software licence resellers",
          "Hardware and networking equipment suppliers",
          "Tech recruiters and staffing companies",
          "Co-working and office space providers",
          "IT partnership and outsourcing teams",
        ],
      },
    ],
    useCases: [
      "Cloud and software partner programmes",
      "IT staffing and recruitment",
      "Hardware and networking sales",
      "White-label and outsourcing partnerships",
      "Tech event and webinar invitations",
    ],
    faqs: [
      { question: "What is an IT and telecom services companies database?", answer: "It is a list of Indian software, IT services, ISP and telecom service companies with decision-maker contacts, service category, size and location." },
      { question: "Which cities have the most IT companies?", answer: "Bengaluru, Hyderabad, Pune, Chennai, Noida, Gurgaon and Mumbai are India's largest IT services hubs." },
      { question: "Can I target only ISPs or telecom companies?", answer: "Yes. Records can be filtered by service category, such as ISP, telecom, software development or managed services." },
      { question: "Can I filter by company size?", answer: "Yes, where employee band is recorded - from small agencies to large IT companies." },
      { question: "Does it include CTO and IT head contacts?", answer: "Where available, records include founders, CTOs, IT heads and procurement contacts." },
      { question: "Can I see a sample?", answer: "Yes. Download the sample format on this page or request real sample records." },
    ],
    related: [
      "computer-laptop-dealers-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
      "domain-whois-database",
      "bpo-call-centre-employees-database-india",
      "consultants-consulting-services-database-india",
      "industry-wise-company-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "computer-it-telecom-services-database-india",
      name: "IT & Telecom Services Database",
      title: "IT & Telecom Services Database India | System Integrators, Resellers & ISPs",
      metaDescription: "IT and telecom services database for India: system integrators, hardware resellers, networking and CCTV installers, ISPs, AMC and cloud resellers by city, with owner contacts. Sample rows on the page.",
      eyebrow: "IT Infrastructure & Channel",
      h1: "IT & Telecom Services Database: Integrators, Resellers & ISPs",
      lead: "The IT channel: system integrators, hardware and software resellers, networking and CCTV installers, AMC providers, ISPs and cloud resellers. Recruit partners or sell distribution.",
      segmentSummary: "Most IT hardware, networking and telecom in India reaches businesses through a local channel of thousands of resellers, integrators and service providers in every city. OEMs and distributors recruit them as partners, and vendors sell them tools, finance and stock. This database covers that channel. It is not software companies (see IT Companies) or individual engineers.",
      segmentCards: [
        { icon: Network, title: "System Integrators", description: "SI firms delivering networking, data-centre and security projects." },
        { icon: Router, title: "Networking & Telecom", description: "ISPs, telecom resellers, CCTV and structured-cabling installers." },
        { icon: Store, title: "Resellers & AMC", description: "Hardware and software resellers and maintenance providers." },
      ],
      segmentTabs: { heading: "Pick the channel type", tabs: [
        T("si", "System Integrators", "Project-based firms for networking, security and data-centre builds.", ["Owner / MD", "Sales Head", "Technical Head", "Pre-Sales"], "OEM partner programmes, distribution, project finance."),
        T("isp", "ISPs & Telecom", "Local internet providers, telecom resellers and enterprise connectivity firms.", ["Owner", "Network Head", "Sales Manager", "Operations"], "Bandwidth, equipment, billing software."),
        T("reseller", "Resellers & AMC", "Hardware and software resellers and AMC companies serving SMEs.", ["Owner", "Sales Manager", "Service Head", "Accounts"], "Distributor credit, licensing, service tools."),
      ] },
      coverage: { heading: "Coverage by provider type", label: "Provider type", rows: [
        ["System integrators", "Networking, security, data-centre"], ["Hardware resellers", "PCs, servers, peripherals"], ["Networking & CCTV", "Cabling, surveillance installers"], ["ISPs & telecom", "Broadband, leased lines"], ["Cloud & software resellers", "Licensing, cloud partners"],
      ] },
      dataFields: ["Business name", "Provider type and specialisation", "Brands / OEM partnerships, where recorded", "Owner / manager name", "Business mobile number", "Business email ID", "City, state, pincode", "Website, where available"],
      sample: "itServices",
      useCases: [
        { icon: Handshake, title: "OEM Partner Recruitment", description: "Recruit resellers and integrators city by city." },
        { icon: Package, title: "Distribution & Stock", description: "Distributors can reach resellers by product line." },
        { icon: Banknote, title: "Channel Finance", description: "Offer credit lines to resellers and SIs." },
        { icon: Cpu, title: "Tools & Software for Installers", description: "Sell service-management and billing tools." },
      ],
      faqs: [
        { question: "Can I find CCTV and security installers?", answer: "Yes. CCTV, access-control and fire-alarm installers are tagged as a separate provider type, by city." },
        { question: "Do you cover cloud resellers and Microsoft or Google partners?", answer: "Cloud and software resellers are included, and partner programmes are noted where recorded." },
        { question: "How is this different from IT Companies?", answer: "IT Companies covers software firms. This page covers the infrastructure channel: integrators, resellers, installers, ISPs and AMC providers." },
        { question: "Can I filter by brand partnership?", answer: "Where recorded, yes. Tell us the OEMs and we check which partners list them." },
        { question: "Do you cover Tier-2 cities?", answer: "Yes. The IT channel reaches every district town, and coverage includes Tier-2 and Tier-3 resellers." },
        { question: "Are computer shops included?", answer: "Retail computer and laptop shops are on the Computer & Laptop Dealers database. This page covers service-led businesses." },
      ],
      pricingNote: "Priced by provider type, city and fields.",
      related: [L("Computer & Laptop Dealers Database", "computer-laptop-dealers-database-india"), L("IT Companies Database", "it-companies-database-india"), L("Dealers & Distributors Database", "dealers-distributors-database-india"), L("Engineers & Service Engineers Database", "engineers-service-engineers-database-india"), L("Mobile Accessories Shops Database", "mobile-accessories-shops-database-india"), L("Business Development & Sales Professionals Database", "business-development-sales-professionals-database-india")],
      disclaimer: legal,
      formTitle: "Get a Free IT Channel Sample",
      bands: ["Recruiting partners in new cities? Ask for a city-wise channel sample.", "Need SIs only, or ISPs? We filter by provider type.", "Get IT channel samples for your programme."],
      footerTitle: "Reach India's IT & Telecom Channel",
    },
    { subjects: "IT and telecom service provider", kind: "business" }
  ),
} satisfies CategoryContent;
