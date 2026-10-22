import { Banknote, Building2, Calculator, ClipboardCheck, FileSearch, FileText, Filter, Landmark, Scale, ShieldCheck, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: Companies Act registry fields (CIN, ROC, capital, directors). */
export default {
  template: "landing",
  updated: "2026-10-22",
  keyword: {
    slug: "mca-company-database-india",
    keyword: "MCA company database India",
    title: "MCA Company Database India | Companies & LLPs",
    metaDescription:
      "A database of companies and LLPs registered with the Ministry of Corporate Affairs - incorporation details, company type and registered office.",
    eyebrow: "MCA Company Database India",
    h1: "MCA Company Database India - Registered Companies & LLPs",
    answer:
      "An MCA company database lists companies and LLPs incorporated under India's Companies Act and registered with the Ministry of Corporate Affairs, including company type, incorporation details and registered office. IndiaB2BData.com's MCA-linked records help you target formally incorporated businesses rather than unregistered entities.",
    intro: [
      "Not every business contact is a formally incorporated company - some are proprietorships or unregistered setups. When your outreach specifically needs Private Limited companies, LLPs or Public Limited entities, MCA-linked records narrow the field to exactly that.",
      "These records reflect a company's formal incorporation status - useful when a deal, partnership or compliance requirement depends on dealing with a properly registered legal entity.",
    ],
    highlights: [
      { icon: FileText, title: "Incorporation Details", description: "Company type and registration information." },
      { icon: Landmark, title: "Companies Act Registered", description: "Pvt Ltd, LLP and Public Ltd entities." },
      { icon: Building2, title: "Registered Office Data", description: "Formal company address on record." },
      { icon: ShieldCheck, title: "Verified Entity Status", description: "Target formally incorporated businesses." },
    ],
    useCases: [
      "Targeting only formally incorporated companies (Pvt Ltd/LLP)",
      "B2B partnerships that require a registered legal entity",
      "Investor or funding-related company research",
      "Filtering out unregistered or proprietorship-only contacts",
    ],
    faqs: [
      {
        question: "What company types are included?",
        answer: "Private Limited companies, LLPs and Public Limited companies registered under the Companies Act.",
      },
      {
        question: "Can I filter by company type?",
        answer: "Yes - tell us which entity types you need (e.g. only LLPs, or only Private Limited) and we'll build a matching list.",
      },
      {
        question: "Does this include the registered office address?",
        answer: "Yes, registered office details are included where available.",
      },
      {
        question: "Is this different from the GST database?",
        answer: "Yes - this reflects Companies Act incorporation status, while the GST database reflects GST registration; a company can appear in one, both, or neither.",
      },
    ],
    related: [
      "gst-database-india",
      "newly-registered-companies-india",
      "corporate-database-india",
      "company-database-india",
      "domain-whois-database",
      "b2b-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "mca-company-database-india",
      name: "MCA Company Database",
      title: "MCA Company Database India | CIN, ROC, Capital & Director Data",
      metaDescription:
        "MCA/ROC company database for India: CIN, company type, incorporation date, ROC, authorised and paid-up capital band, status and directors. Filter by state, ROC, age and capital. Sample rows on the page.",
      eyebrow: "Companies Act Registry Data",
      h1: "MCA Company Database: CIN, ROC, Capital & Directors",
      lead:
        "Companies Act registry data for private, public, one-person companies and LLPs. Filter by ROC, incorporation year, capital band and status, with director names and business contacts added.",
      segmentSummary:
        "The MCA registry tells you what kind of company you are dealing with: its legal form, its age, its capital and who runs it. Compliance-led sellers such as CA and CS firms, auditors, lenders and B2B fintechs filter on exactly these fields. This database turns the registry fields into a filterable, contactable list, so you can target, for example, five-year-old private limited companies in Maharashtra with more than ₹1 crore authorised capital.",
      segmentCards: [
        { icon: FileSearch, title: "Registry Fields", description: "CIN, company type, incorporation date, ROC, capital band and active status for every record." },
        { icon: Users, title: "Directors Included", description: "Director names on each company, so you can address the person who signs the filings." },
        { icon: Filter, title: "Compliance Filters", description: "Filter by ROC, incorporation year, capital band, company type and NIC industry code in the CIN." },
      ],
      segmentTabs: {
        heading: "Filter by what the registry tells you",
        tabs: [
          { id: "age", label: "Company Age", summary: "Incorporation year shows the stage: first-year companies are setting up, 3-7-year-old companies are scaling, and older ones have established vendors.", examples: ["Under 1 year","1-3 years","3-7 years","7+ years"], bestFor: "Compliance firms (young), lenders (established), software (scaling)." },
          { id: "capital", label: "Capital Band", summary: "Authorised and paid-up capital roughly indicate size and intent, so they work as a proxy when employee counts are missing.", examples: ["Up to ₹10 L","₹10 L-1 Cr","₹1-10 Cr","₹10 Cr+"], bestFor: "Credit products, audit firms, premium services." },
          { id: "type", label: "Company Type & ROC", summary: "Legal form and registrar decide which compliance applies and which regional office handles the company's filings.", examples: ["Private Limited","Public Limited","OPC","LLP"], bestFor: "CS firms, legal services, regional compliance providers." },
        ],
      },
      coverage: {
        heading: "Coverage by company type",
        label: "Company type",
        rows: [
          ["Private limited", "Most common incorporated form"],
          ["Public limited (listed & unlisted)", "Larger, widely held companies"],
          ["One-person companies (OPC)", "Single-member companies"],
          ["LLPs", "Limited liability partnerships (LLPIN)"],
          ["Section 8 companies", "Not-for-profit companies"],
        ],
      },
      dataFields: [
        "Company name",
        "CIN / LLPIN",
        "Company type and category",
        "Date of incorporation",
        "Registrar of Companies (ROC)",
        "Authorised / paid-up capital band",
        "Company status",
        "Director names",
        "Registered office address",
        "Business phone and email, where available",
      ],
      sample: "mca",
      useCases: [
        { icon: Calculator, title: "CA & CS Compliance Services", description: "Offer ROC filings, audits and secretarial compliance to companies by age, type and ROC." },
        { icon: Banknote, title: "Business Lending", description: "Shortlist established private limited companies by capital band and age for credit products." },
        { icon: ClipboardCheck, title: "Vendor Due-Diligence", description: "Check a supplier's legal form, incorporation date and status before onboarding." },
        { icon: Scale, title: "Legal & Trademark Services", description: "Reach directors of young companies with IP, contract and legal services." },
      ],
      faqs: [
        { question: "What does the CIN tell me?", answer: "The 21-character CIN encodes whether the company is listed, its NIC industry code, the state, the year of incorporation, its ownership type (for example PTC or PLC) and its registration number. We let you filter on those parts." },
        { question: "Are LLPs included?", answer: "Yes. LLPs are listed with their LLPIN and can be bought alongside or separately from companies." },
        { question: "Can I filter by ROC or state?", answer: "Yes. Filter by Registrar of Companies, such as ROC-Mumbai, ROC-Delhi or ROC-Bangalore, or by registered-office state." },
        { question: "Is this the same as the GST database?", answer: "No. MCA data covers Companies Act entities. GST data covers every GST-registered business, including proprietorships and partnerships. A business can appear in one, both or neither." },
      ],
      pricingNote: "Priced by record and fields. Director names and contact fields add to the base registry record.",
      related: [
        L("GST Database", "gst-database-india"),
        L("Newly Registered Companies", "newly-registered-companies-india"),
        L("Company Database", "company-database-india"),
        L("Company MD, Chairman & Secretary Database", "company-md-chairman-secretary-database-india"),
        L("Chartered Accountants Database", "chartered-accountants-database-india"),
        L("Corporate Database", "corporate-database-india"),
      ],
      disclaimer: `Registry information is compiled from public MCA filings and enriched with business contacts. IndiaB2BData.com is not affiliated with the Ministry of Corporate Affairs.${dnd}`,
      formTitle: "Get a Free MCA Data Sample",
      bands: [
        "Targeting companies of a certain age or capital band? Ask for a filtered MCA sample.",
        "Need only LLPs, or only one ROC? We split by type and registrar.",
        "Get registry data with director names and contacts.",
      ],
      footerTitle: "Filter Companies by Registry Data",
    },
    { subjects: "MCA-registered company", kind: "business", notIncluded: "Proprietorships and partnerships are not Companies Act entities, so they are not in it; see the GST database for those." }
  ),
} satisfies CategoryContent;
