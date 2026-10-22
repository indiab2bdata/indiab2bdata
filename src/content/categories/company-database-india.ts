import { Building2, FileSearch, Filter, Landmark, ListChecks, MapPinned, Network, Target } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: firmographic, account-level company lists. */
export default {
  template: "landing",
  updated: "2026-10-22",
  keyword: {
    slug: "company-database-india",
    keyword: "company database India",
    title: "Company Database India | GSTIN & Company Records",
    metaDescription:
      "Verified company database for India with GSTIN, turnover band, industry classification and contact details. Built for B2B targeting and credit screening.",
    eyebrow: "Company Database India",
    h1: "Company Database India - Registered Company Records with GSTIN",
    answer:
      "A company database contains registered company-level details - legal/trade name, GSTIN, turnover band, industry classification and contact information - rather than just individual phone numbers. IndiaB2BData.com's company database is built for B2B targeting, vendor screening and tender research across India.",
    intro: [
      "Sometimes a contact number isn't enough - you need to know which company you're dealing with, how big it is, and what it's registered to do. Our company database adds that layer: GSTIN-linked records, turnover bands and business categories alongside contact details.",
      "This makes it useful for more than outreach alone - teams use it for vendor due-diligence, credit-risk screening and identifying companies that match a specific size or category before making first contact.",
    ],
    highlights: [
      { icon: Landmark, title: "GSTIN-Linked Records", description: "Registered company details tied to GST numbers." },
      { icon: Filter, title: "Turnover & Size Filters", description: "Narrow by turnover band or company size." },
      { icon: Building2, title: "Industry Classification", description: "Companies categorised by business type and sector." },
      { icon: ListChecks, title: "Bulk Export Formats", description: "Clean Excel/CSV exports ready for your CRM." },
    ],
    useCases: [
      "B2B lead scoring by company size or turnover",
      "Vendor and supplier discovery",
      "Credit and risk screening before onboarding",
      "Tender and bid research",
    ],
    faqs: [
      {
        question: "What details are included per company?",
        answer: "Company/trade name, GSTIN, turnover band, industry category, city and available contact details.",
      },
      {
        question: "Can I filter companies by turnover or size?",
        answer: "Yes, turnover band and company size are available filters on our GST & Company Database product.",
      },
      {
        question: "Is this data useful for vendor screening?",
        answer: "Yes - many clients use it as a first-pass check on a vendor's registration and business category before onboarding.",
      },
      {
        question: "How current is the company data?",
        answer: "Records are periodically refreshed; Business and Enterprise packages include scheduled refresh cycles.",
      },
    ],
    related: [
      "corporate-database-india",
      "mca-company-database-india",
      "gst-database-india",
      "b2b-b2c-companies-database",
      "school-colleges-database",
      "b2b-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "company-database-india",
      name: "Company Database",
      title: "Company Database India | Firmographic Company Lists for Account Selling",
      metaDescription:
        "Company database for India with one record per company: industry, size band, ownership type, HQ address, website and key contact. Built for account-based selling. See 5 sample rows on the page.",
      eyebrow: "Account-Level Company Data",
      h1: "Company Database India: Account Lists with Firmographics",
      lead:
        "One clean record per company, with industry, size band, ownership type, headquarters, website and a key contact. It's built for account-based sales teams that target companies before people.",
      segmentSummary:
        "Account-based selling starts with the right companies, not the right names. This database is deduplicated to one record per company and carries firmographic fields (industry, employee band, ownership type and HQ location), so you can score and tier accounts before anyone picks up the phone. Add contacts at those accounts afterwards from our role-based databases.",
      segmentCards: [
        { icon: Building2, title: "One Record per Company", description: "Deduplicated at company level, with branches rolled up to the HQ, so account counts are real." },
        { icon: Filter, title: "Firmographic Filters", description: "Industry, employee band, ownership (Pvt Ltd, LLP, partnership, proprietorship) and location." },
        { icon: Target, title: "Built for ABM", description: "Tier accounts by size and industry, then import into your CRM as accounts rather than leads." },
      ],
      segmentTabs: {
        heading: "Choose the account tier you're building",
        tabs: [
          { id: "smb", label: "SMB Accounts", summary: "Companies with up to 50 employees. High volume and low deal size, so the list is usually worked by inside sales or self-serve funnels.", examples: ["Owner","Director","Partner","Office Manager"], bestFor: "Self-serve SaaS, payments, telecom bundles." },
          { id: "mid", label: "Mid-Market Accounts", summary: "Companies with 51-1,000 employees and dedicated functions. This is the core of most ABM programmes in India.", examples: ["Managing Director","Function Heads","Finance Controller","IT Manager"], bestFor: "Vertical SaaS, managed services, HR and payroll." },
          { id: "ent", label: "Enterprise Accounts", summary: "Companies with 1,000+ employees and several sites, where account mapping matters more than list size.", examples: ["CXOs","Business Unit Heads","Procurement","Regional Heads"], bestFor: "Enterprise software, consulting, large services contracts." },
        ],
      },
      coverage: {
        heading: "Coverage by company size",
        label: "Size band",
        rows: [
          ["Micro (1-10 employees)", "Proprietors and small firms"],
          ["Small (11-50)", "Growing SMEs"],
          ["Mid (51-200)", "Established mid-market"],
          ["Upper-mid (201-1,000)", "Regional leaders"],
          ["Large (1,000+)", "Enterprises and corporates"],
        ],
      },
      dataFields: [
        "Company name",
        "Industry and sub-industry",
        "Employee size band",
        "Ownership / constitution type",
        "Headquarters address, city, state",
        "Website and domain",
        "Key contact name and designation",
        "Company phone and email",
      ],
      sample: "business",
      useCases: [
        { icon: Target, title: "Account-Based Marketing", description: "Build tiered target-account lists by industry and size for ABM campaigns and ad audiences." },
        { icon: Network, title: "CRM Account Import", description: "Load clean, deduplicated company records into Salesforce, HubSpot or Zoho as accounts." },
        { icon: MapPinned, title: "Territory Planning", description: "Count accounts by city and size band to split territories fairly between reps." },
        { icon: FileSearch, title: "Market Sizing", description: "Estimate how many companies match your ICP before you commit to a launch or a hire." },
      ],
      faqs: [
        { question: "Can I match the list against my existing CRM accounts?", answer: "Yes. Send your current account list, by domain or company name, and we exclude companies you already have, so you pay only for net-new accounts." },
        { question: "Is each company listed only once?", answer: "Yes. Records are deduplicated at company level, and branches roll up to the headquarters. Ask for branch-level records separately if your field team visits locations." },
        { question: "Can I filter by employee size?", answer: "Yes. Choose one or more size bands, from micro (1-10) to large (1,000+), combined with industry and location." },
        { question: "Does it include decision-maker contacts?", answer: "Each record has one key contact. For several contacts per account (HR, IT, finance), add our role-based databases, such as CEO/CFO/IT Heads or HR Professionals." },
        { question: "How is this different from the MCA database?", answer: "The MCA database is registry data: CIN, ROC and capital, for Companies Act entities only. The company database also covers LLPs, partnerships and proprietorships, with firmographic and contact fields." },
      ],
      pricingNote: "Priced per company record. Adding extra contacts per account or branch-level records is quoted separately.",
      related: [
        L("B2B Database", "b2b-database-india"),
        L("Corporate Database", "corporate-database-india"),
        L("MCA Company Database", "mca-company-database-india"),
        L("Industry-Wise Company Database", "industry-wise-company-database-india"),
        L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
        L("Company Proprietors Database", "company-proprietors-database-india"),
      ],
      disclaimer: `Company and business-contact data for lawful B2B use.${dnd} Any business can request correction or removal at any time.`,
      formTitle: "Get a Free Company Data Sample",
      bands: [
        "Building an ABM tier list? Ask for a sample split by size band.",
        "Need branch-level records for field sales instead of HQs? Tell us and we'll quote both.",
        "Get a company-level sample matched to your ICP.",
      ],
      footerTitle: "Build Your Target Account List",
    },
    { subjects: "company", kind: "business" }
  ),
} satisfies CategoryContent;
