import {
  BadgeCheck,
  Banknote,
  Briefcase,
  Building,
  Building2,
  Calculator,
  CalendarPlus,
  ClipboardCheck,
  Factory,
  FileSearch,
  Filter,
  Handshake,
  Headphones,
  Layers,
  Mail,
  MapPinned,
  Megaphone,
  Network,
  Package,
  Phone,
  Receipt,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Target,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { CLAIMS, deliveryPhrase, removalSentence } from "@/lib/claims";
import type { CoverageRow, IconCard, LandingFaq, LandingProfile, LinkItem, SegmentTab } from "@/lib/landing/types";
import type { SampleProfile } from "@/lib/sample-data";

/**
 * The 9 core category pages. They overlap in topic, so each one is written around a different buyer intent:
 *   b2b          - the hub: every kind of business, any role, any location
 *   company      - firmographic, account-level company lists
 *   corporate    - mid/large corporates and their department heads
 *   mca          - Companies Act registry fields (CIN, ROC, capital, directors)
 *   gst          - GST registration fields (GSTIN, type, status)
 *   b2b-leads    - campaign-ready decision-maker contacts
 *   industry     - browse and buy by industry taxonomy
 *   newly-reg    - recent incorporations as a recurring feed
 *   manufacturer - by product category and plant location
 */
export type CoreInput = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  segmentSummary: string;
  segmentCards: [IconCard, IconCard, IconCard];
  segmentTabs?: { heading: string; tabs: SegmentTab[] };
  coverage: { heading: string; label: string; rows: [string, string][] };
  dataFields: string[];
  sample: SampleProfile;
  useCases: IconCard[];
  faqs: LandingFaq[];
  pricingNote: string;
  related: LinkItem[];
  disclaimer: string;
  formTitle: string;
  bands: [string, string, string];
  footerTitle: string;
};

export function coreProfile(c: CoreInput): LandingProfile {
  const path = `/${c.slug}`;
  const rows: CoverageRow[] = c.coverage.rows.map(([segment, detail]) => ({ segment, detail, records: "{{COUNT}}", fillRate: "{{FILL}}" }));
  return {
    path,
    name: c.name,
    title: c.title,
    metaDescription: c.metaDescription,
    eyebrow: c.eyebrow,
    h1: c.h1,
    lead: c.lead,
    breadcrumbs: [
      { label: "Databases", href: "/database" },
      { label: c.name, href: path },
    ],
    segmentSummary: c.segmentSummary,
    segmentCards: c.segmentCards,
    segmentTabs: c.segmentTabs,
    coverageTable: { heading: c.coverage.heading, segmentLabel: c.coverage.label, rows },
    dataFields: c.dataFields,
    sample: { profile: c.sample, csvSlug: c.slug },
    useCases: c.useCases,
    buyerFaqs: [
      ...c.faqs,
      {
        question: `How fast is a ${c.name.toLowerCase()} order delivered?`,
        answer: `You receive an Excel or CSV file by email or WhatsApp, ${deliveryPhrase()} after you approve the sample and quote. The columns match the preview table on this page.`,
      },
      {
        question: "How can a business or person be removed?",
        answer: `Use the removal process on our Data Sourcing & Compliance page. ${removalSentence()}`,
      },
    ],
    pricingHint: { from: "{{PRICE}}", unit: "per record", note: c.pricingNote },
    relatedLinks: c.related,
    lastUpdated: "2026-10",
    totalRecords: "{{COUNT}}",
    disclaimer: c.disclaimer,
    image: { src: `/images/topics/${c.slug}.jpg`, alt: `${c.name} - IndiaB2BData.com` },
    cta: {
      formTitle: c.formTitle,
      formSubtitle: "Tell us the industries, locations and roles you need. We'll reply with sample rows, a record count and a quote.",
      buttonLabel: "Get Free Sample",
      whatsappMessage: `Hi, I need a ${c.name} sample. Industries / locations / roles:`,
      bands: c.bands,
      footerTitle: c.footerTitle,
      footerText: "Send your industries, locations, company size, roles and quantity. You'll get matching sample rows, a record count and a quote.",
    },
  };
}

const L = (label: string, slug: string): LinkItem => ({ label, href: `/${slug}` });
const dnd = CLAIMS.dndScrubbing ? " Mobile numbers are DND-checked before delivery." : "";

const core: CoreInput[] = [
  {
    slug: "b2b-database-india",
    name: "B2B Database",
    title: "B2B Database India | Business Contacts by Industry, Role & City",
    metaDescription:
      "India's B2B database across every industry, role and city: companies, owners and decision-makers with business phone, email and address. Filter by segment and preview sample rows on the page.",
    eyebrow: "All-India B2B Data",
    h1: "B2B Database India: Every Industry, Role and City in One Place",
    lead:
      "Start here if your buyers are businesses. Combine industry, company size, decision-maker role and location into one list, then go deeper with our specialist databases when you need to.",
    segmentSummary:
      "Most B2B campaigns mix filters that specialist lists keep apart: \"IT heads at 200+ employee manufacturers in Pune\" or \"owners of trading firms in Gujarat\". This database is the full cross-section of Indian businesses, from proprietors and MSMEs to corporates, so you can combine industry, size, role and geography in one brief. Use it when your ideal customer isn't one category.",
    segmentCards: [
      { icon: Layers, title: "Every Industry", description: "Manufacturing, trading, services, IT, healthcare, education, real estate and more, with industry tags on every record." },
      { icon: Users, title: "Owners to CXOs", description: "Proprietors, partners, directors and department heads, so one list can reach the person who signs." },
      { icon: MapPinned, title: "700+ Cities", description: "Metros, Tier-2 and Tier-3 towns, filtered by state, city or pincode." },
    ],
    segmentTabs: {
      heading: "Pick the business type you sell to",
      tabs: [
        { id: "msme", label: "MSMEs & Proprietors", summary: "Owner-run businesses where the owner decides on everything, from software to suppliers to loans. Short sales cycles, and price matters.", examples: ["Proprietors","Managing Partners","Owner-Directors","Family-business heads"], bestFor: "Lenders, accounting tools, local services, telecom and insurance." },
        { id: "midmarket", label: "Mid-Market Companies", summary: "Firms with 50-500 employees and the first specialist managers. Purchases involve 2-3 people and a basic approval process.", examples: ["Directors","Finance Managers","Operations Heads","IT Managers"], bestFor: "SaaS, HR services, logistics and B2B supplies." },
        { id: "channel", label: "Traders & Channel", summary: "Wholesalers, dealers and distributors that move goods into regional markets. They buy on margin, credit terms and brand pull.", examples: ["Owners","Purchase Managers","Branch Heads","Sales Managers"], bestFor: "FMCG and consumer-durable brands, distribution finance, trade software." },
      ],
    },
    coverage: {
      heading: "Coverage by business type",
      label: "Business type",
      rows: [
        ["MSMEs & proprietorships", "Owner-run firms across trade and services"],
        ["Private & public limited companies", "Registered companies of all sizes"],
        ["Manufacturers", "Producers and processing units"],
        ["Traders, dealers & distributors", "Wholesale and channel businesses"],
        ["Service firms", "IT, consulting, professional and local services"],
      ],
    },
    dataFields: [
      "Company / business name",
      "Contact person and designation",
      "Business mobile number",
      "Business email ID",
      "Industry and business type",
      "Company size band, where recorded",
      "Full address, city, state, pincode",
      "Website, where available",
    ],
    sample: "business",
    useCases: [
      { icon: Headphones, title: "Outbound Tele-Sales", description: "Build calling lists of owners and decision-makers filtered by industry and city, so reps reach someone who can buy." },
      { icon: Mail, title: "Email & WhatsApp Campaigns", description: "Run multi-channel outreach with business email and mobile fields in one file." },
      { icon: Target, title: "ICP Testing", description: "Compare industries and company sizes in small test batches before you commit to a large segment." },
      { icon: Handshake, title: "Channel Partner Recruitment", description: "Find dealers, resellers and service partners in the regions you're expanding into." },
      { icon: Network, title: "CRM Enrichment", description: "Fill gaps in your existing accounts with industry, location and contact fields." },
    ],
    faqs: [
      { question: "How is this different from your company database?", answer: "The B2B database is the broadest list: any business type and any role, built around your campaign filters. The company database is account-level, with one record per company and firmographic fields for account-based selling." },
      { question: "Can I combine industry, city and role filters?", answer: "Yes. That is what this database is for. For example: purchase heads at engineering firms in Pune, or owners of retail businesses in Tier-2 Gujarat." },
      { question: "Do you cover small businesses and proprietors?", answer: "Yes. MSMEs and proprietorships make up a large share of Indian B2B buyers, and they are included with owner-level contacts." },
      { question: "Which specialist databases should I look at instead?", answer: "If your audience is one category, a specialist page is more precise. Examples are the Manufacturer, GST, MCA and CEO/CFO databases, all linked below." },
    ],
    pricingNote: "The price depends on filters, fields and volume. Broad multi-industry lists cost less per record than narrow role-specific pulls.",
    related: [
      L("Company Database", "company-database-india"),
      L("B2B Leads Database", "b2b-leads-database-india"),
      L("Industry-Wise Company Database", "industry-wise-company-database-india"),
      L("Manufacturer Database", "manufacturer-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("Dealers & Distributors Database", "dealers-distributors-database-india"),
    ],
    disclaimer: `Business contact data for lawful B2B outreach only.${dnd} Any business or person can request removal at any time.`,
    formTitle: "Get a Free B2B Data Sample",
    bands: [
      "Not sure which industries convert best? Ask for a split sample across two or three segments.",
      "Need owners for small firms but department heads for larger ones? We mix roles by company size.",
      "Tell us your ideal customer and we'll match the list to it.",
    ],
    footerTitle: "Describe Your Ideal B2B Customer",
  },
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
  {
    slug: "corporate-database-india",
    name: "Corporate Database",
    title: "Corporate Database India | Mid & Large Company Decision-Makers",
    metaDescription:
      "Corporate database of India's mid-size and large companies (200+ employees) with department heads in HR, IT, finance, procurement and admin. Filter by function and city. Sample rows on the page.",
    eyebrow: "Mid & Large Corporates",
    h1: "Corporate Database India: Department Heads at Mid & Large Companies",
    lead:
      "Reach HR, IT, finance, procurement and admin heads at India's mid-size and large corporates. Several contacts per company, organised by function, for enterprise selling.",
    segmentSummary:
      "Selling to corporates means selling to departments. A ₹50-lakh software deal at a 2,000-person company is decided by the CIO and procurement, while an employee-benefits programme goes through HR and finance. This database covers companies with roughly 200 or more employees and maps several department heads at each one, so enterprise teams can multi-thread their accounts from day one.",
    segmentCards: [
      { icon: Building, title: "Mid & Large Companies", description: "Corporates with roughly 200+ employees: Indian groups, MNC subsidiaries and listed companies." },
      { icon: Users, title: "Several Contacts per Account", description: "HR, IT, finance, procurement, admin and business heads at the same company." },
      { icon: Briefcase, title: "Function & Seniority", description: "Filter by department and level (CXO, VP/GM, manager) to reach the actual buying committee." },
    ],
    segmentTabs: {
      heading: "Pick the department you sell to",
      tabs: [
        { id: "hr", label: "HR & People", summary: "CHROs, HR heads, talent-acquisition and L&D managers who buy hiring, payroll, benefits and training.", examples: ["CHRO / VP HR", "Talent Acquisition Head", "L&D Manager", "Payroll Manager"], bestFor: "Staffing firms, HRMS vendors, insurers, training providers." },
        { id: "it", label: "IT & Technology", summary: "CIOs, CTOs, IT heads and infrastructure managers who evaluate software, cloud, security and hardware.", examples: ["CIO / CTO", "IT Head", "Infrastructure Manager", "Information Security Lead"], bestFor: "SaaS, cloud, cybersecurity and IT-services companies." },
        { id: "finance", label: "Finance", summary: "CFOs, finance controllers and treasury heads who decide on banking, credit, audit and finance software.", examples: ["CFO", "Finance Controller", "Treasury Head", "Accounts Manager"], bestFor: "Banks, fintech, audit and tax firms, ERP vendors." },
        { id: "procurement", label: "Procurement & Admin", summary: "Purchase heads and admin managers who buy facilities, travel, office supplies and services.", examples: ["Procurement Head", "Purchase Manager", "Admin Head", "Facilities Manager"], bestFor: "Facility management, corporate travel, office supplies, gifting." },
      ],
    },
    coverage: {
      heading: "Coverage by department",
      label: "Department",
      rows: [
        ["HR & People", "CHRO, HR heads, TA, L&D"],
        ["IT & Technology", "CIO, CTO, IT and security heads"],
        ["Finance", "CFO, controllers, treasury"],
        ["Procurement & Admin", "Purchase, admin, facilities"],
        ["Sales & Marketing", "CMO, sales and marketing heads"],
      ],
    },
    dataFields: [
      "Contact name",
      "Designation and department",
      "Seniority level",
      "Company name",
      "Company size band and industry",
      "Business mobile number",
      "Business email ID",
      "Office city and state",
    ],
    sample: "executive",
    useCases: [
      { icon: Network, title: "Multi-Threaded Enterprise Deals", description: "Reach IT, finance and procurement at the same account so a deal doesn't stall on one champion." },
      { icon: Users, title: "HR Tech & Benefits Sales", description: "Target CHROs and HR heads at large employers with HRMS, insurance and wellness programmes." },
      { icon: ShieldCheck, title: "Cybersecurity & Cloud", description: "Reach CIOs and security leads at companies big enough to need enterprise-grade tools." },
      { icon: ShoppingCart, title: "Corporate Procurement", description: "Get on approved-vendor lists by reaching purchase and admin heads directly." },
    ],
    faqs: [
      { question: "Can I get contacts only at companies in my target account list?", answer: "Yes. Send your named accounts and the departments you need, and we return the matching decision-makers at those companies, with a match rate in the quote." },
      { question: "What counts as a corporate in this database?", answer: "Companies with roughly 200 or more employees, including Indian business groups, MNC subsidiaries and listed companies. For smaller firms, use the Company or B2B database." },
      { question: "Can I get several contacts at the same company?", answer: "Yes. That is the main difference from the company database. Choose the departments you need and each account comes with one contact per function, where available." },
      { question: "Can I filter by seniority?", answer: "Yes. Filter by CXO, VP/GM or manager level within each department." },
      { question: "Do you cover MNC subsidiaries in India?", answer: "Yes. Indian offices of multinational companies are included and can be filtered by industry and city." },
    ],
    pricingNote: "Priced per contact. Senior CXO contacts and multi-department packs per account are quoted by volume.",
    related: [
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("HR Professionals Database", "hr-human-resources-database-india"),
      L("General & Senior Managers Database", "general-senior-managers-database-india"),
      L("Company Database", "company-database-india"),
      L("Company MD, Chairman & Secretary Database", "company-md-chairman-secretary-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
    ],
    disclaimer: `Work-context contact data for lawful B2B outreach to professionals in their business role.${dnd} Any person can request removal at any time.`,
    formTitle: "Get a Free Corporate Data Sample",
    bands: [
      "Selling to one department? Ask for a sample of HR, IT, finance or procurement heads.",
      "Need the whole buying committee at each account? We map several functions per company.",
      "Get corporate decision-maker samples for your target industries.",
    ],
    footerTitle: "Reach the Buying Committee at Large Companies",
  },
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
  {
    slug: "b2b-leads-database-india",
    name: "B2B Leads Database",
    title: "B2B Leads Database India | Campaign-Ready Decision-Maker Contacts",
    metaDescription:
      "B2B leads database for India: decision-makers with a direct mobile and business email, filtered by industry, role and city and formatted for tele-calling, email and CRM import. Sample rows on the page.",
    eyebrow: "Campaign-Ready Leads",
    h1: "B2B Leads Database: Decision-Makers Ready for Your Next Campaign",
    lead:
      "Contacts filtered to the people who buy, with a direct mobile and business email on each lead, formatted for your dialler, email tool or CRM. Built to start a campaign, not to research a market.",
    segmentSummary:
      "A lead list is judged by the share of rows your team can actually work. This database is selected for contactability: decision-maker roles, a direct mobile and a business email together, and columns ready for import into diallers, email platforms and CRMs. Use it when you know who you sell to and need the next 5,000 conversations, not when you're still mapping the market.",
    segmentCards: [
      { icon: Phone, title: "Mobile + Email on Every Lead", description: "Leads are selected for having both channels, so tele-calling and email can run on the same list." },
      { icon: Target, title: "Decision-Maker Roles", description: "Owners, directors and functional heads, not general staff." },
      { icon: Network, title: "Import-Ready Format", description: "Clean columns mapped for diallers, Mailchimp/Brevo-style tools and Zoho, HubSpot or Salesforce." },
    ],
    segmentTabs: {
      heading: "Choose leads by how you'll work them",
      tabs: [
        { id: "call", label: "Calling Campaigns", summary: "Leads prioritised for a direct mobile and a named decision-maker, sorted by city so calling teams can work in language batches.", examples: ["Owner","Director","Purchase Head","Branch Manager"], bestFor: "Inside sales teams, telecalling agencies, appointment setting." },
        { id: "email", label: "Email Sequences", summary: "Leads prioritised for a business email on the company domain, with role and industry for personalisation tokens.", examples: ["Founder","Marketing Head","IT Head","HR Head"], bestFor: "SaaS outbound, webinar promotion, content syndication." },
        { id: "field", label: "Field Sales", summary: "Leads clustered by pincode and locality, so reps can plan routes and visit several prospects in a day.", examples: ["Shop Owner","Plant Manager","Clinic Owner","Office Admin"], bestFor: "Distribution, equipment sales, local B2B services." },
      ],
    },
    coverage: {
      heading: "Coverage by campaign channel",
      label: "Channel",
      rows: [
        ["Tele-calling", "Direct mobile + name + role"],
        ["Email campaigns", "Business email + company + role"],
        ["WhatsApp business messaging", "Mobile numbers for opted-in flows"],
        ["Field sales", "Address and pincode for route planning"],
      ],
    },
    dataFields: [
      "Contact name",
      "Designation / role",
      "Direct mobile number",
      "Business email ID",
      "Company name and industry",
      "City, state and pincode",
      "Lead segment tag (your campaign filter)",
    ],
    sample: "business",
    useCases: [
      { icon: Headphones, title: "Tele-Calling Teams", description: "Load a dialler with role-filtered decision-makers and measure connect rate by segment." },
      { icon: Mail, title: "Cold Email Sequences", description: "Run segmented email sequences with consistent, CRM-ready fields." },
      { icon: Megaphone, title: "Event & Webinar Invites", description: "Fill seats by inviting the right roles in the right cities." },
      { icon: Users, title: "Agency Lead Generation", description: "Agencies running outbound for clients can buy lead batches segment by segment." },
    ],
    faqs: [
      { question: "How is a leads database different from a B2B database?", answer: "The B2B database is the full cross-section of businesses. Leads are a campaign-ready subset: decision-maker roles with both a direct mobile and a business email, formatted for import." },
      { question: "Are these leads interested in my product?", answer: "No. These are contact leads, not intent or inbound leads. They match your filters for industry, role and city. Your campaign creates the interest." },
      { question: "Can you format the file for my CRM or dialler?", answer: "Yes. Tell us the tool and we'll map the columns, for example for Zoho, HubSpot, Salesforce or a CSV for your dialler." },
      { question: "Can I buy in batches?", answer: "Yes. Many teams buy in weekly or monthly batches by segment, so the data stays fresh and each campaign result can be compared." },
    ],
    pricingNote: "Priced per lead. Leads with both a mobile and an email cost more than single-channel records, and batch subscriptions are discounted.",
    related: [
      L("B2B Database", "b2b-database-india"),
      L("Mobile Number Database", "mobile-number-database-india"),
      L("Email Database", "email-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("Business Development & Sales Professionals Database", "business-development-sales-professionals-database-india"),
      L("Company Proprietors Database", "company-proprietors-database-india"),
    ],
    disclaimer: `Contact leads for lawful B2B outreach. Follow TRAI and DND rules when calling or messaging.${dnd} Any person can request removal at any time.`,
    formTitle: "Get Free Sample Leads",
    bands: [
      "Want to test a segment before you scale? Start with a small batch.",
      "Need the file mapped to your CRM or dialler? Just tell us which one.",
      "Get sample leads for your next campaign.",
    ],
    footerTitle: "Start Your Next Outbound Campaign",
  },
  {
    slug: "industry-wise-company-database-india",
    name: "Industry-Wise Company Database",
    title: "Industry-Wise Company Database India | Company Lists by Sector",
    metaDescription:
      "Industry-wise company database for India: buy company lists by sector and sub-industry, such as manufacturing, IT, healthcare, real estate, logistics, education and retail. Compare sectors and preview sample rows on the page.",
    eyebrow: "Sector-Wise Company Lists",
    h1: "Industry-Wise Company Database: Pick Your Sectors",
    lead:
      "Choose sectors and sub-industries, from auto components to private hospitals to logistics, and get only the companies in them. Mix several industries into one file, each clearly tagged.",
    segmentSummary:
      "Many sellers serve a handful of verticals and want nothing outside them. This database is organised around an industry taxonomy, with broad sectors broken into sub-industries, so a packaging supplier can buy food processing and pharma, and an ERP vendor can buy auto components and textiles, each tagged so results can be compared by vertical. If you sell to one specific category, our specialist pages go deeper.",
    segmentCards: [
      { icon: Layers, title: "Sector + Sub-Industry", description: "Broad sectors broken into specific sub-industries, so you buy textiles processing rather than \"manufacturing\"." },
      { icon: Filter, title: "Mix Verticals in One File", description: "Combine several industries and keep each one tagged for campaign reporting." },
      { icon: MapPinned, title: "Sector Clusters by Region", description: "Pair an industry with its hub cities, such as auto in Pune and Chennai or textiles in Surat and Tiruppur." },
    ],
    segmentTabs: {
      heading: "Popular sector combinations",
      tabs: [
        { id: "industrial", label: "Industrial Bundle", summary: "Manufacturing sub-industries that share suppliers: engineering, auto components, plastics and electricals.", examples: ["Auto components","Castings & forgings","Plastics","Electricals"], bestFor: "Machinery, MRO supplies, industrial software." },
        { id: "services", label: "Services Bundle", summary: "Knowledge and service businesses with office-based buyers: IT, consulting, staffing and finance.", examples: ["IT services","Consulting","Staffing","Financial services"], bestFor: "Workspace, HR tech, corporate travel." },
        { id: "consumer", label: "Consumer-Facing Bundle", summary: "Businesses that sell to consumers through stores and outlets: retail, hospitality, healthcare clinics and education.", examples: ["Retail chains","Hotels & restaurants","Clinics","Coaching institutes"], bestFor: "POS, payments, local marketing and supplies." },
      ],
    },
    coverage: {
      heading: "Coverage by sector",
      label: "Sector",
      rows: [
        ["Manufacturing", "Auto, engineering, chemicals, textiles, food"],
        ["IT & Technology", "IT services, software, hardware"],
        ["Healthcare", "Hospitals, clinics, pharma, diagnostics"],
        ["Real Estate & Construction", "Developers, contractors, materials"],
        ["Logistics & Trade", "Transport, warehousing, distributors"],
        ["Education", "Schools, colleges, institutes"],
        ["Retail & Hospitality", "Stores, hotels, restaurants"],
      ],
    },
    dataFields: [
      "Company name",
      "Sector and sub-industry tag",
      "Contact person and designation",
      "Business mobile number",
      "Business email ID",
      "Address, city, state, pincode",
      "Company size band, where recorded",
      "Website, where available",
    ],
    sample: "business",
    useCases: [
      { icon: Layers, title: "Vertical SaaS Go-to-Market", description: "Launch into one or two verticals with a list of every company in them, tagged by sub-industry." },
      { icon: Package, title: "Industrial Suppliers", description: "Packaging, chemicals and component suppliers can buy only the industries that use their products." },
      { icon: FileSearch, title: "Vertical Comparison", description: "Run the same campaign on three sectors and double down where conversion is best." },
      { icon: Megaphone, title: "Trade Shows & Associations", description: "Invite every company in a sector to an expo, webinar or association drive." },
    ],
    faqs: [
      { question: "Can you exclude industries I don't serve?", answer: "Yes. Exclusions work like inclusions: name the sectors or sub-industries to leave out, such as trading firms within a manufacturing pull, and they are removed before the count is quoted." },
      { question: "How many industries can I combine?", answer: "As many as you need. Each record carries its sector and sub-industry tag, so a mixed file can still be split for reporting." },
      { question: "How do you classify industries?", answer: "Each company is tagged with a broad sector and a specific sub-industry based on its primary business activity. Tell us your own vertical names and we'll map ours to them." },
      { question: "When should I use a specialist page instead?", answer: "If you sell to a single category, such as manufacturers, IT companies or doctors, the specialist database is deeper and has category-specific fields. Use this page for multi-vertical lists." },
      { question: "Can I pair industries with cities?", answer: "Yes. Industry and location filters combine, for example auto components in Pune and Chennai, or textiles in Surat, Tiruppur and Ludhiana." },
    ],
    pricingNote: "Priced by sector, fields and volume. Niche sub-industries can cost more per record than broad sectors.",
    related: [
      L("Manufacturer Database", "manufacturer-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
      L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
      L("Logistics Service Providers Database", "logistics-management-service-providers-database-india"),
      L("Educational Institutes Database", "educational-institutes-database-india"),
      L("Company Database", "company-database-india"),
    ],
    disclaimer: `Company and business-contact data for lawful B2B outreach.${dnd} Any business can request removal at any time.`,
    formTitle: "Get a Free Industry-Wise Sample",
    bands: [
      "Comparing two or three verticals? Ask for a split sample tagged by sector.",
      "Need a sector in specific hub cities only? We combine industry and location.",
      "Get a sample for the industries you sell to.",
    ],
    footerTitle: "Tell Us Which Industries You Sell To",
  },
  {
    slug: "newly-registered-companies-india",
    name: "Newly Registered Companies Database",
    title: "Newly Registered Companies India | Weekly & Monthly New Company Lists",
    metaDescription:
      "Newly registered companies in India, delivered as a weekly or monthly feed: CIN, incorporation date, company type, ROC, directors and contacts. Reach new companies in their first weeks. Sample rows on the page.",
    eyebrow: "New Incorporations",
    h1: "Newly Registered Companies in India: Reach Them in Week One",
    lead:
      "Get companies incorporated in the last few weeks, with CIN, incorporation date, ROC, directors and contacts. Buy it once, or subscribe to a weekly or monthly feed of new registrations.",
    segmentSummary:
      "A new company needs almost everything in its first 90 days: a bank account, an accountant, an auditor, office space, a website, insurance, software and a trademark. The founders are making those decisions now and haven't picked vendors yet. This database tracks fresh incorporations and delivers them while that window is open, so you are early instead of competing with every other vendor a year later.",
    segmentCards: [
      { icon: CalendarPlus, title: "Fresh Incorporations", description: "Companies and LLPs incorporated in the last weeks, filtered by incorporation date." },
      { icon: Users, title: "Founders & Directors", description: "Director names with contact details, so you reach the people setting up the business." },
      { icon: Truck, title: "Recurring Feed", description: "Weekly or monthly delivery of the latest registrations for your states and company types." },
    ],
    segmentTabs: {
      heading: "What new companies buy, and when",
      tabs: [
        { id: "w1", label: "First 30 Days", summary: "Bank account, GST registration, the commencement-of-business filing and the first auditor appointment.", examples: ["Current account","GST registration","Auditor appointment","Registered office"], bestFor: "Banks, CA and CS firms, co-working spaces." },
        { id: "w2", label: "Days 30-90", summary: "Setting up operations: website and domain, accounting software, payroll for the first hires and business insurance.", examples: ["Website & domain","Accounting software","Payroll setup","Insurance"], bestFor: "Web agencies, SaaS, insurers, HR services." },
        { id: "w3", label: "Months 3-12", summary: "Growth and protection: trademarks, contracts, hiring, office expansion and working capital.", examples: ["Trademark filing","Legal contracts","Recruitment","Working capital"], bestFor: "IP lawyers, staffing firms, lenders, office providers." },
      ],
    },
    coverage: {
      heading: "Coverage by incorporation window",
      label: "Window",
      rows: [
        ["Last 7 days", "Newest incorporations"],
        ["Last 30 days", "The month's registrations"],
        ["Last 90 days", "Companies still setting up"],
        ["Last 12 months", "First-year companies"],
      ],
    },
    dataFields: [
      "Company name",
      "CIN / LLPIN",
      "Date of incorporation",
      "Company type and ROC",
      "Authorised capital band",
      "Director names",
      "Registered address, city, state",
      "Director / company phone and email, where available",
    ],
    sample: "newCompanies",
    useCases: [
      { icon: Calculator, title: "CA, CS & Compliance Firms", description: "New companies must appoint their first auditor and file their first ROC forms early. Be the firm they call." },
      { icon: Banknote, title: "Business Banking", description: "Offer current accounts, payment gateways and credit cards to companies that are opening accounts now." },
      { icon: Building2, title: "Office Space & Co-Working", description: "Reach founders looking for a registered office or first workspace." },
      { icon: Wrench, title: "Software, Web & Branding", description: "Pitch accounting software, websites, domains and trademarks before the stack is chosen." },
      { icon: ShieldCheck, title: "Business Insurance", description: "Introduce group health, liability and key-person cover as the first employees join." },
    ],
    faqs: [
      { question: "How recent are the companies?", answer: "Choose your window: the last 7, 30 or 90 days, or the first year. Subscribers get each week's or month's new registrations as they are published." },
      { question: "Can I subscribe to a recurring feed?", answer: "Yes. Pick your states, company types and frequency, and you receive only the new incorporations since your last delivery, with no repeats." },
      { question: "Do new companies have phone numbers and emails?", answer: "Contact fields are taken from filings and enriched where possible. Coverage is lower in the first days after incorporation and improves over the following weeks. The quote shows the fill rate." },
      { question: "Are LLPs and OPCs included?", answer: "Yes. Private limited companies, OPCs and LLPs are covered, and you can include or exclude each type." },
    ],
    pricingNote: "One-off lists are priced per record. Weekly or monthly feeds are priced as a subscription by state and volume.",
    related: [
      L("MCA Company Database", "mca-company-database-india"),
      L("GST Database", "gst-database-india"),
      L("Company Database", "company-database-india"),
      L("Chartered Accountants Database", "chartered-accountants-database-india"),
      L("Company Proprietors Database", "company-proprietors-database-india"),
      L("Commercial & Residential Properties Database", "commercial-residential-properties-database-india"),
    ],
    disclaimer: `Incorporation details come from public MCA filings and are enriched with business contacts. Not affiliated with the Ministry of Corporate Affairs.${dnd}`,
    formTitle: "Get This Week's New Companies",
    bands: [
      "Want new incorporations every week for your states? Ask about a recurring feed.",
      "Only private limited companies, or LLPs too? Pick your types and window.",
      "Get a sample of the latest registrations.",
    ],
    footerTitle: "Reach New Companies Before Your Competitors",
  },
  {
    slug: "manufacturer-database-india",
    name: "Manufacturer Database",
    title: "Manufacturer Database India | Manufacturers by Product & Plant Location",
    metaDescription:
      "Manufacturer database for India organised by product category and plant location: auto parts, chemicals, textiles, food, electrical, plastics and more, with owners, plant heads and purchase managers. Sample rows on the page.",
    eyebrow: "Manufacturers by Product",
    h1: "Manufacturer Database India: Find Makers by Product & Plant",
    lead:
      "Find manufacturers by what they make and where their plants are. Reach owners, plant heads and purchase managers for supply, sourcing, machinery and services.",
    segmentSummary:
      "Buyers of manufacturer data usually fall into two groups. Sourcing teams look for who makes a product. Sellers to factories want plants that consume their product, such as raw materials, machinery, packaging or maintenance. Both need the product category and the plant location rather than just a head-office address. This database tags each manufacturer by product line and operating unit, and keeps manufacturers separate from traders who only resell.",
    segmentCards: [
      { icon: Package, title: "By Product Category", description: "Tagged by what the plant actually makes, from auto parts and castings to snacks and plastics." },
      { icon: Factory, title: "Plant Locations", description: "Operating units in MIDC, GIDC, SIPCOT and other industrial areas, not just HQ addresses." },
      { icon: Users, title: "Plant & Purchase Contacts", description: "Owners, plant heads and purchase managers: the people who buy for the factory." },
    ],
    segmentTabs: {
      heading: "Two ways buyers use manufacturer data",
      tabs: [
        { id: "sell", label: "Selling to Factories", summary: "Find plants that consume your product or service, filtered by the product they make and the industrial area they operate in.", examples: ["Plant Head","Purchase Manager","Maintenance Manager","Owner"], bestFor: "Raw materials, machinery, packaging, MRO and safety." },
        { id: "source", label: "Sourcing from Factories", summary: "Find manufacturers of a product to request quotes, qualify new suppliers or build a vendor shortlist.", examples: ["Owner","Sales Head","Export Manager","Marketing Manager"], bestFor: "Procurement teams, importers, private-label brands." },
        { id: "cluster", label: "Cluster Targeting", summary: "Indian manufacturing is clustered. Go deep into one hub instead of going wide across India.", examples: ["Ludhiana (hosiery, cycles)","Rajkot (engineering)","Coimbatore (pumps)","Morbi (ceramics)"], bestFor: "Field sales teams and regional distributors." },
      ],
    },
    coverage: {
      heading: "Coverage by product category",
      label: "Product category",
      rows: [
        ["Auto & engineering components", "Castings, forgings, machined parts"],
        ["Chemicals & pharma", "Specialty chemicals, dyes, APIs"],
        ["Textiles & apparel", "Yarn, fabric, processing, garments"],
        ["Food & beverage", "Processing, packaged foods, beverages"],
        ["Electrical & electronics", "Cables, switchgear, components"],
        ["Plastics, rubber & packaging", "Moulded parts, films, corrugation"],
      ],
    },
    dataFields: [
      "Manufacturer name",
      "Product category and main products",
      "Plant / operating-unit address",
      "Industrial area, city, state",
      "Contact person and designation",
      "Business mobile number",
      "Business email ID",
      "Website, where available",
    ],
    sample: "trade",
    useCases: [
      { icon: Truck, title: "Raw Material Supply", description: "Find plants that consume your material, such as steel, polymers, chemicals or yarn, by product category." },
      { icon: Wrench, title: "Machinery & Maintenance", description: "Reach plant heads with machinery, spares, automation and AMC services." },
      { icon: Package, title: "Packaging Suppliers", description: "Target manufacturers whose products ship in your kind of packaging." },
      { icon: FileSearch, title: "Sourcing & Vendor Discovery", description: "Find manufacturers of a product to request quotes or develop new suppliers." },
    ],
    faqs: [
      { question: "Can I find manufacturers that export?", answer: "Yes. Manufacturers with recorded export activity are flagged. Combine that flag with product category and cluster to build an export-focused supplier or prospect list." },
      { question: "Do you separate manufacturers from traders?", answer: "Yes. Records are tagged by business activity, so you get companies that make products, not resellers. Ask for traders separately if you need them." },
      { question: "Do you give plant addresses or head offices?", answer: "Plant and operating-unit addresses wherever they are recorded. That is the key difference for field sales and service visits." },
      { question: "Can I filter by industrial area?", answer: "Yes. Filter by MIDC, GIDC, SIPCOT or other industrial estates and pincodes, combined with product category." },
      { question: "How is this different from the Manufacturing Companies database?", answer: "This page is organised around products and plants for sourcing and supply. The Manufacturing Companies database is company-level, for corporate and account-based selling to manufacturers." },
    ],
    pricingNote: "Priced by product category, location and fields. Plant-level contacts in niche categories cost more per record.",
    related: [
      L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
      L("Machinery Suppliers Database", "machinery-suppliers-services-database-india"),
      L("Metals & Minerals Industries Database", "metals-minerals-industries-database-india"),
      L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
      L("Importers & Exporters Database", "importers-exporters-database-india"),
      L("Industry-Wise Company Database", "industry-wise-company-database-india"),
    ],
    disclaimer: `Business contact data for lawful B2B outreach to manufacturers.${dnd} Any business can request removal at any time.`,
    formTitle: "Get a Free Manufacturer Sample",
    bands: [
      "Looking for makers of one product, or plants that use your material? Tell us which.",
      "Need plant-level contacts in specific industrial areas? We filter by estate.",
      "Get a sample of manufacturers in your category.",
    ],
    footerTitle: "Find the Manufacturers You Need",
  },
];

export const coreProfiles: Record<string, LandingProfile> = Object.fromEntries(core.map((c) => [c.slug, coreProfile(c)]));
