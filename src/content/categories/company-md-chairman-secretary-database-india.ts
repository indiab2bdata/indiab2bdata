import { Banknote, Briefcase, Filter, Landmark, Laptop, MapPinned, Scale, ShieldCheck, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, work } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-23",
  keyword: {
    slug: "company-md-chairman-secretary-database-india",
    keyword: "company MD, chairman and secretary database India",
    title: "MD, Chairman & Company Secretary Database India",
    metaDescription:
      "Database of managing directors, chairmen, directors and company secretaries of Indian companies - with company, designation and contact details. Free sample.",
    eyebrow: "Board & Directors Database",
    h1: "Company MD, Chairman & Company Secretary Database in India",
    answer:
      "A company MD, chairman and secretary database lists the top officers of Indian companies - managing directors, chairmen, whole-time directors and company secretaries - with name, designation, company, CIN, industry, city and contact details. IndiaB2BData.com supplies these board-level contacts for enterprise sales, compliance services and investor outreach.",
    intro: [
      "Board-level officers make the final call on major purchases, partnerships, funding and compliance. Managing directors and chairmen set direction, while company secretaries handle statutory filings, board meetings and governance - making them the key contact for compliance, legal and corporate-services firms.",
      "Our database draws on MCA company records and other lawful sources to give you directors and company secretaries by industry, company size and location. For CXOs below board level, see our CEO, CFO, CMO and IT heads database.",
    ],
    highlights: [
      { icon: Briefcase, title: "Board-Level Contacts", description: "MDs, chairmen, directors and CS." },
      { icon: Landmark, title: "MCA-Linked", description: "Company name and CIN where available." },
      { icon: Filter, title: "Industry & Size", description: "Private, public and listed companies." },
      { icon: MapPinned, title: "Pan-India", description: "Filter by city, state or region." },
    ],
    dataFields: [
      "Name and designation (MD, chairman, director or company secretary)",
      "Company name and CIN, where available",
      "Company type: private, public or listed",
      "Industry",
      "Mobile number and email ID, where available",
      "Registered office city, state and pincode",
    ],
    sections: [
      {
        heading: "Who Uses a Directors & Company Secretary Database?",
        paragraphs: [],
        bullets: [
          "Compliance, secretarial audit and ROC filing service providers",
          "Enterprise software and IT companies selling to the top",
          "Banks, NBFCs and investment firms offering corporate finance",
          "Business clubs, chambers and conference organisers",
          "Board-advisory, legal and CSR consulting firms",
        ],
      },
      {
        heading: "Why Company Secretaries Matter",
        paragraphs: [
          "Every listed company and larger private company in India must appoint a whole-time company secretary under the Companies Act, 2013. They manage board meetings, statutory registers and MCA filings, so they are the first contact for compliance software, governance training and secretarial services.",
        ],
      },
    ],
    useCases: [
      "Board-level enterprise selling",
      "Compliance and secretarial services marketing",
      "Corporate finance and investment outreach",
      "Governance training and event invitations",
      "Account-based marketing to top companies",
    ],
    faqs: [
      { question: "What is a company MD and chairman database?", answer: "It is a list of managing directors, chairmen, directors and company secretaries of Indian companies with company details and contact information." },
      { question: "Where does director data come from?", answer: "Director names and company details are compiled from MCA company records and other lawful public and permission-based sources, then checked." },
      { question: "Can I get only company secretaries?", answer: "Yes. You can order company secretaries separately, filtered by industry, company type and location." },
      { question: "Does it include listed companies?", answer: "Yes. Records cover private, public and listed companies where data is available." },
      { question: "How is this different from the CEO/CFO database?", answer: "This database focuses on board-level officers - MDs, chairmen, directors and company secretaries. The CEO, CFO, CMO and IT heads database covers functional CXOs." },
      { question: "Can I see a sample?", answer: "Yes. Download the sample format on this page or request real sample records." },
    ],
    related: [
      "ceo-cfo-cmo-it-heads-database-india",
      "mca-company-database-india",
      "chief-managers-database-india",
      "corporate-database-india",
      "company-proprietors-database-india",
      "chartered-accountants-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "company-md-chairman-secretary-database-india",
      name: "MD, Chairman & Company Secretary Database",
      title: "MD, Chairman & Company Secretary Database India | Board & Statutory Roles",
      metaDescription: "Database of managing directors, chairpersons, directors and company secretaries of Indian companies, by company type and size. For governance, compliance and board-level services. Sample rows on the page.",
      eyebrow: "Board & Statutory Roles",
      h1: "MD, Chairman & Company Secretary Database India",
      lead: "Managing directors, chairpersons, whole-time and independent directors, and company secretaries. These are the board and statutory roles behind governance, compliance and big decisions.",
      segmentSummary: "Board roles buy differently from operational executives. Company secretaries handle statutory filings, board meetings and compliance calendars. Listed and larger companies must appoint a whole-time CS. Managing directors and chairpersons approve strategic partnerships and capital decisions. Governance-software vendors, CS and legal firms, board-education providers and wealth managers sell to exactly these people.",
      segmentCards: [
        { icon: Landmark, title: "Managing Directors & Chairpersons", description: "Top statutory roles at private and public companies." },
        { icon: Scale, title: "Company Secretary Contacts", description: "Compliance and governance officers." },
        { icon: Users, title: "Whole-Time & Independent Directors", description: "Board members by company type." },
      ],
      segmentTabs: { heading: "Pick the board role", tabs: [
        T("md", "Managing Directors", "Run the company and approve major spending and partnerships.", ["Managing Director", "Joint MD", "Whole-Time Director", "Executive Director"], "Wealth management, strategic consulting, M&A advisory."),
        T("cs", "Company Secretaries", "Handle filings, board processes and compliance calendars.", ["Company Secretary", "Compliance Officer", "Assistant CS", "Head - Secretarial"], "Board-portal software, compliance tools, CS firms."),
        T("board", "Chairpersons & Independent Directors", "Oversee governance on listed and large companies.", ["Chairperson", "Independent Director", "Non-Executive Director", "Board Member"], "Board education, D&O insurance, governance advisory."),
      ] },
      coverage: { heading: "Coverage by role", label: "Role", rows: [
        ["Managing directors", "Private and public companies"], ["Chairpersons", "Mainly public and listed companies"], ["Company secretaries", "Listed and larger companies"], ["Whole-time directors", "Executive board members"], ["Independent directors", "Listed company boards"],
      ] },
      dataFields: ["Name", "Board / statutory role", "Company name and type", "Company size band, where recorded", "Business phone, where available", "Business email ID", "City, state", "Listed / unlisted flag"],
      sample: "director",
      useCases: [
        { icon: Laptop, title: "Governance & Compliance Software", description: "Sell board portals and compliance tools to company secretaries." },
        { icon: Banknote, title: "Wealth & Private Banking", description: "Reach promoters and MDs with wealth products." },
        { icon: ShieldCheck, title: "D&O Insurance", description: "Offer directors' and officers' liability cover." },
        { icon: Scale, title: "Legal & Secretarial Services", description: "Pitch secretarial audit and legal advisory." },
      ],
      faqs: [
        { question: "Can I target companies preparing to list?", answer: "Filter for large unlisted public companies by capital band. These are the companies that typically engage IPO advisers, auditors and governance consultants." },
        { question: "Are nominee and independent directors separated?", answer: "Independent and non-executive directors are tagged separately from executive directors where the role is recorded." },
        { question: "How is this different from the CEO, CFO, CMO & IT Heads database?", answer: "That page covers operational C-suite roles by function. This page covers board and statutory roles: MDs, chairpersons, directors and company secretaries." },
        { question: "Can I get listed companies only?", answer: "Yes. Filter by listed or unlisted, combined with role and size." },
        { question: "Do you have company secretaries at private companies?", answer: "Yes, where a CS is appointed. That is mandatory for listed and larger companies and common at mid-size ones." },
        { question: "Is this linked to MCA director data?", answer: "Board roles are cross-checked against public company filings where possible. For full registry fields, see the MCA database." },
      ],
      pricingNote: "Priced per person. Listed-company board members are quoted separately.",
      related: [L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"), L("MCA Company Database", "mca-company-database-india"), L("Chartered Accountants Database", "chartered-accountants-database-india"), L("Advocates & Lawyers Database", "advocates-lawyers-database-india"), L("Corporate Database", "corporate-database-india"), L("Company Proprietors Database", "company-proprietors-database-india")],
      disclaimer: work,
      formTitle: "Get a Free Board-Level Sample",
      bands: ["Selling compliance tools? Ask for a company-secretary sample.", "Need MDs at listed companies only? We filter by listing.", "Get board-level samples for your offer."],
      footerTitle: "Reach India's Boardrooms",
    },
    { subjects: "MD, chairman and company secretary", kind: "people" }
  ),
} satisfies CategoryContent;
