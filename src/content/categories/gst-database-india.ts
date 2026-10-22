import { BadgeCheck, Banknote, Building2, Calculator, FileText, Landmark, Receipt, ShieldCheck, ShoppingCart } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: GST registration fields (GSTIN, type, status). */
export default {
  template: "landing",
  updated: "2026-10-22",
  keyword: {
    slug: "gst-database-india",
    keyword: "GST database India",
    title: "GST Database India | GSTIN-Linked Business Records",
    metaDescription:
      "A GST database for India with GSTIN, registration status and state code. Useful for compliance checks, vendor eligibility and B2B verification.",
    eyebrow: "GST Database India",
    h1: "GST Database India - GSTIN-Linked Business Records",
    answer:
      "A GST database is a set of business records linked to their GST Identification Number (GSTIN), including registration status and the state code embedded in the GSTIN. IndiaB2BData.com's GST database helps you verify a business's GST registration before onboarding it as a vendor or customer.",
    intro: [
      "For many B2B transactions, confirming GST registration matters before money or goods change hands - it affects invoicing, input tax credit and basic trust in a new vendor or buyer. A GST database puts that information alongside the rest of a company's contact details.",
      "Records include the GSTIN itself, registration status and the state code it encodes, so you can quickly sanity-check a business before treating it as GST-compliant.",
    ],
    highlights: [
      { icon: Landmark, title: "GSTIN-Linked Records", description: "Business records tied to their GST number." },
      { icon: ShieldCheck, title: "Registration Status", description: "Check whether a business is GST-registered." },
      { icon: FileText, title: "State Code Reference", description: "State information embedded in the GSTIN." },
      { icon: BadgeCheck, title: "Compliance-Ready", description: "Useful for vendor and buyer eligibility checks." },
    ],
    useCases: [
      "Verifying a vendor's GST registration before onboarding",
      "Compliance checks before a B2B transaction",
      "Segmenting companies by GST-registration status",
      "Building a GST-compliant vendor shortlist",
    ],
    faqs: [
      {
        question: "What does a GST database record include?",
        answer: "GSTIN, registration status and the state code embedded in the GST number, alongside standard company details.",
      },
      {
        question: "Can I use this to verify a vendor before onboarding?",
        answer: "Yes, many clients use GST records specifically for pre-onboarding compliance checks.",
      },
      {
        question: "Is this the same as the GST & Company Database product?",
        answer: "Yes - this is the same underlying GSTIN-linked dataset, with turnover band and industry classification included.",
      },
      {
        question: "Can I filter by state using the GSTIN?",
        answer: "Yes, the state code embedded in the GSTIN can be used as a filter.",
      },
    ],
    related: [
      "mca-company-database-india",
      "newly-registered-companies-india",
      "company-database-india",
      "importers-exporters-database-india",
      "manufacturer-database-india",
      "b2b-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "gst-database-india",
      name: "GST Database",
      title: "GST Database India | GSTIN, Registration Type & Status by State",
      metaDescription:
        "GST database for India: GSTIN, legal and trade name, registration type (regular or composition), constitution, registration date, status and state code. Filter by state and type. Sample rows on the page.",
      eyebrow: "GST Registration Data",
      h1: "GST Database India: GSTIN, Registration Type & Status",
      lead:
        "Every record is tied to a GSTIN, with legal and trade name, registration type, constitution, registration date and status. Filter by state code, regular or composition registration, and business type.",
      segmentSummary:
        "A GSTIN is the most reliable sign that an Indian business is actively trading, and it covers far more businesses than the MCA registry, including the proprietorships and partnerships that make up most of Indian commerce. Tax-tech vendors, accountants, B2B marketplaces and lenders use GST fields to tell regular taxpayers (who need invoicing and return-filing tools) from composition dealers (smaller, simpler compliance).",
      segmentCards: [
        { icon: Receipt, title: "GSTIN on Every Record", description: "The 15-character GSTIN, with the state code and the embedded PAN of the business." },
        { icon: BadgeCheck, title: "Registration Type & Status", description: "Regular or composition, registration date and current status, so you target active taxpayers." },
        { icon: Building2, title: "All Business Forms", description: "Proprietorships, partnerships, LLPs and companies, not just registered companies." },
      ],
      segmentTabs: {
        heading: "Segment GST registrants the way tax buyers do",
        tabs: [
          { id: "regular", label: "Regular Taxpayers", summary: "Businesses filing regular returns and claiming input tax credit. They need invoicing, e-way bills and reconciliation, so they are the core market for GST software.", examples: ["GSTR-1 / 3B filers","E-invoice users","Multi-state registrants","Exporters"], bestFor: "GST and ERP software, CA firms, invoice-finance lenders." },
          { id: "composition", label: "Composition Dealers", summary: "Smaller businesses on the simplified scheme, with quarterly payments and no input credit. They want simple, low-cost compliance.", examples: ["Small traders","Restaurants","Small manufacturers","Local retailers"], bestFor: "Low-cost accounting services, billing apps, micro-loans." },
          { id: "state", label: "By State Code", summary: "The first two digits of every GSTIN identify the state, so state-wise targeting works even when addresses are incomplete.", examples: ["27 Maharashtra","24 Gujarat","29 Karnataka","07 Delhi"], bestFor: "Regional sales teams and state-specific compliance services." },
        ],
      },
      coverage: {
        heading: "Coverage by registration type",
        label: "Registration type",
        rows: [
          ["Regular taxpayers", "File monthly or quarterly returns, claim input credit"],
          ["Composition dealers", "Smaller businesses on a simplified scheme"],
          ["Proprietorships", "Owner-run GST-registered firms"],
          ["Partnerships & LLPs", "Multi-owner businesses"],
          ["Companies", "Private and public limited GST registrants"],
        ],
      },
      dataFields: [
        "Legal name and trade name",
        "GSTIN",
        "Registration type (regular / composition)",
        "Constitution of business",
        "Registration date",
        "GST status",
        "State code and principal place of business",
        "Contact person, business phone and email",
      ],
      sample: "gst",
      useCases: [
        { icon: Receipt, title: "GST & Accounting Software", description: "Reach regular taxpayers who file returns and need invoicing, e-way bill and reconciliation tools." },
        { icon: Calculator, title: "Tax & Accounting Services", description: "Offer return filing and GST advisory to newly registered and composition-scheme businesses." },
        { icon: Banknote, title: "GST-Based Lending", description: "Target active GST registrants for invoice finance and working-capital products." },
        { icon: ShoppingCart, title: "B2B Marketplace Onboarding", description: "Recruit GST-registered sellers and suppliers by state and business type." },
      ],
      faqs: [
        { question: "What does a GSTIN contain?", answer: "The first 2 digits are the state code, the next 10 are the business's PAN, then an entity number, the default letter Z and a check digit. We use the state code and PAN for filtering and deduplication." },
        { question: "Can I filter regular taxpayers and composition dealers separately?", answer: "Yes. Registration type is a standard filter. Regular taxpayers suit invoicing and filing software, while composition dealers suit simpler accounting services." },
        { question: "Are proprietorships included?", answer: "Yes. Unlike MCA data, GST data includes proprietorships and partnerships, which are most of India's trading businesses." },
        { question: "How is this different from the MCA database?", answer: "MCA covers Companies Act entities and registry fields such as CIN and capital. GST covers every GST-registered business. A company usually appears in both, but most proprietors appear only in GST." },
      ],
      pricingNote: "Priced by record and fields. A filter on active regular taxpayers in specific states is the most popular configuration.",
      related: [
        L("MCA Company Database", "mca-company-database-india"),
        L("Newly Registered Companies", "newly-registered-companies-india"),
        L("Company Proprietors Database", "company-proprietors-database-india"),
        L("Chartered Accountants Database", "chartered-accountants-database-india"),
        L("Dealers & Distributors Database", "dealers-distributors-database-india"),
        L("B2B Database", "b2b-database-india"),
      ],
      disclaimer: `GST registration details come from public GST records and are enriched with business contacts. IndiaB2BData.com is not affiliated with GSTN or CBIC.${dnd}`,
      formTitle: "Get a Free GST Data Sample",
      bands: [
        "Want only active regular taxpayers in your states? Ask for a filtered GST sample.",
        "Selling to composition dealers instead? We split by registration type.",
        "Get GST-registered businesses with contacts for your segment.",
      ],
      footerTitle: "Target GST-Registered Businesses",
    },
    { subjects: "GST-registered business", kind: "business" }
  ),
} satisfies CategoryContent;
