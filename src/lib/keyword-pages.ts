import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarClock,
  Contact,
  Factory,
  FileText,
  Filter,
  Headphones,
  Landmark,
  ListChecks,
  MapPinned,
  Network,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

export type KeywordFaq = { question: string; answer: string };
export type KeywordHighlight = { icon: LucideIcon; title: string; description: string };

export type KeywordPage = {
  slug: string;
  keyword: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** Short, direct, quotable answer for AEO/GEO — the first thing a reader (or an AI answer engine) sees. */
  answer: string;
  intro: string[];
  highlights: KeywordHighlight[];
  useCases: string[];
  faqs: KeywordFaq[];
};

export const keywordPages: KeywordPage[] = [
  {
    slug: "b2b-database-india",
    keyword: "B2B database India",
    title: "B2B Database India | Verified Business Contacts",
    metaDescription:
      "Get a verified B2B database in India — 50L+ business contacts, 700+ cities, 500+ industries. Mobile numbers, emails and company records, refreshed monthly.",
    eyebrow: "B2B Database India",
    h1: "B2B Database India — Verified Business Contacts for Every Industry",
    answer:
      "A B2B database is a structured collection of verified business contact records — company names, decision-maker mobile numbers, emails and GST/company details — used by sales and marketing teams to find and reach other businesses. IndiaB2BData.com maintains a B2B database of 50L+ verified records spanning 700+ Indian cities and 500+ industries.",
    intro: [
      "Whether you're a sales team cold-calling new prospects, a marketing agency running WhatsApp campaigns, or a startup entering a new city, a reliable B2B database is the foundation of every outbound effort. Bad data wastes hours on disconnected numbers and bounced emails; a verified B2B database puts your team in front of real decision-makers instead.",
      "Our B2B database India covers mobile numbers, corporate emails, GSTIN-linked company records and industry-wise segments — deduplicated, DND-scrubbed and refreshed every 30 days so you're always calling active contacts.",
    ],
    highlights: [
      { icon: ShieldCheck, title: "Verified & Fresh", description: "Every record checked and refreshed monthly." },
      { icon: MapPinned, title: "700+ Cities", description: "Pan-India coverage across every state and pincode cluster." },
      { icon: Network, title: "500+ Industries", description: "Segmented lists for real estate, EdTech, finance, healthcare and more." },
      { icon: Zap, title: "Fast Delivery", description: "Most orders delivered within 2–6 working hours." },
    ],
    useCases: [
      "Cold calling and telesales campaigns",
      "Email and WhatsApp marketing outreach",
      "New market entry and city expansion research",
      "Channel partner and distributor discovery",
    ],
    faqs: [
      {
        question: "What is a B2B database?",
        answer:
          "A B2B database is a compiled, verified set of business contact records — typically mobile numbers, emails, company names and GST details — that sales and marketing teams use to reach other businesses directly instead of cold-searching.",
      },
      {
        question: "How is IndiaB2BData.com's B2B database sourced?",
        answer:
          "Records are compiled from publicly available and permission-based channels, then verified, deduplicated and DND-scrubbed before delivery.",
      },
      {
        question: "Which industries does the database cover?",
        answer:
          "Over 500 industry categories, including real estate, EdTech, finance and insurance, manufacturing, healthcare and e-commerce.",
      },
      {
        question: "How fresh is the data?",
        answer:
          "Business and Enterprise packages include periodic refreshes, and the overall database is updated on a monthly cycle to remove inactive contacts.",
      },
    ],
  },
  {
    slug: "b2b-data-provider-india",
    keyword: "B2B data provider India",
    title: "B2B Data Provider India | Verified & Compliant Data",
    metaDescription:
      "Looking for a trusted B2B data provider in India? Compare what to check for — accuracy, compliance, delivery speed — and see why teams choose IndiaB2BData.com.",
    eyebrow: "B2B Data Provider India",
    h1: "B2B Data Provider India — What to Look For, and Why Teams Choose Us",
    answer:
      "A B2B data provider is a company that compiles, verifies and licenses business contact data for sales and marketing use. When choosing a B2B data provider in India, prioritise verified accuracy, DND/TRAI compliance, industry breadth and delivery speed — IndiaB2BData.com covers all four across 700+ cities.",
    intro: [
      "Not every B2B data provider is built the same. Some resell stale, unverified lists; others lock you into large minimum orders before you've even seen a sample. The difference shows up fast once your team starts dialling — either you reach real decision-makers, or you burn hours on dead numbers.",
      "As a B2B data provider in India, we verify and deduplicate every record before delivery, scrub against DND/NDNC lists, and let you request a free sample before you commit to a package — so you can judge quality before you pay.",
    ],
    highlights: [
      { icon: BadgeCheck, title: "Verified Accuracy", description: "Every record checked and deduplicated before delivery." },
      { icon: ShieldCheck, title: "Compliance-Conscious", description: "DND/NDNC scrubbed to keep your outreach compliant." },
      { icon: Sparkles, title: "Sample Before You Buy", description: "15–20 free sample records on every enquiry." },
      { icon: Users, title: "Dedicated Support", description: "A real team to help you scope the right filters." },
    ],
    useCases: [
      "Evaluating providers before switching from an existing data source",
      "Sourcing a one-time list for a specific campaign or launch",
      "Setting up a recurring monthly data feed for a sales team",
      "White-labelling verified data for an agency's own clients",
    ],
    faqs: [
      {
        question: "What should I check before picking a B2B data provider?",
        answer:
          "Ask for a free sample, confirm how recently the data was verified, check DND/compliance practices, and clarify delivery format and turnaround time before paying.",
      },
      {
        question: "Is IndiaB2BData.com's data compliant to use?",
        answer:
          "Yes — data is sourced from publicly available and permission-based channels, and DND numbers are scrubbed before delivery.",
      },
      {
        question: "In what format is the data delivered?",
        answer: "As a clean Excel (.xlsx) or CSV file, sent over email or WhatsApp, ready for your CRM or dialer.",
      },
      {
        question: "Can I request a custom filter combination?",
        answer:
          "Yes — tell us the city, industry, turnover band or designation you need and we'll build a custom list for you.",
      },
    ],
  },
  {
    slug: "business-database-india",
    keyword: "business database India",
    title: "Business Database India | 50L+ Verified Contacts",
    metaDescription:
      "Access a verified business database across India — 50L+ contacts, 700+ cities, every major industry. Built for sales prospecting and marketing outreach.",
    eyebrow: "Business Database India",
    h1: "Business Database India — Reach Every Industry, Every City",
    answer:
      "A business database is a verified collection of company and contact records — names, phone numbers, emails and industry classification — used to identify and reach potential customers or partners. IndiaB2BData.com's business database spans 50L+ records across real estate, EdTech, finance, manufacturing, healthcare, e-commerce and 500+ other industries.",
    intro: [
      "Growing a business in India means reaching prospects across a huge range of cities, languages and industries. A generic contact list rarely fits — you need a business database that can be filtered down to exactly who you're trying to reach.",
      "Our business database covers 700+ cities and lets you filter by city, pincode, industry, turnover band or job role, so every list you receive is built for your specific outreach — not a one-size-fits-all export.",
    ],
    highlights: [
      { icon: Target, title: "Precisely Filtered", description: "Narrow by city, industry, turnover or designation." },
      { icon: MapPinned, title: "Pan-India Reach", description: "Every state, city and pincode cluster covered." },
      { icon: RefreshCcw, title: "Regularly Refreshed", description: "De-duplicated and refreshed on a monthly cycle." },
      { icon: Zap, title: "Quick Turnaround", description: "Most lists delivered within 2–6 working hours." },
    ],
    useCases: [
      "Sales prospecting and pipeline building",
      "Lead generation for marketing campaigns",
      "Market research before entering a new segment",
      "Investor, vendor and partner outreach",
    ],
    faqs: [
      {
        question: "What's included in the business database?",
        answer: "Company name, mobile number, email (where available), city/location and industry category, filtered to your requirement.",
      },
      {
        question: "Can I get data for just one city or industry?",
        answer: "Yes — the Starter package covers a single city or district; larger packages cover multiple cities or states.",
      },
      {
        question: "Do you offer a free sample first?",
        answer: "Yes, every enquiry gets 15–20 free sample records so you can verify quality before paying.",
      },
      {
        question: "How do I place an order?",
        answer:
          "Share your requirement, review the free sample, choose a package and confirm payment — most orders are delivered within 2–6 working hours.",
      },
    ],
  },
  {
    slug: "company-database-india",
    keyword: "company database India",
    title: "Company Database India | GSTIN & Company Records",
    metaDescription:
      "Verified company database for India with GSTIN, turnover band, industry classification and contact details. Built for B2B targeting and credit screening.",
    eyebrow: "Company Database India",
    h1: "Company Database India — Registered Company Records with GSTIN",
    answer:
      "A company database contains registered company-level details — legal/trade name, GSTIN, turnover band, industry classification and contact information — rather than just individual phone numbers. IndiaB2BData.com's company database is built for B2B targeting, vendor screening and tender research across India.",
    intro: [
      "Sometimes a contact number isn't enough — you need to know which company you're dealing with, how big it is, and what it's registered to do. Our company database adds that layer: GSTIN-linked records, turnover bands and business categories alongside contact details.",
      "This makes it useful for more than outreach alone — teams use it for vendor due-diligence, credit-risk screening and identifying companies that match a specific size or category before making first contact.",
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
        answer: "Yes — many clients use it as a first-pass check on a vendor's registration and business category before onboarding.",
      },
      {
        question: "How current is the company data?",
        answer: "Records are periodically refreshed; Business and Enterprise packages include scheduled refresh cycles.",
      },
    ],
  },
  {
    slug: "indian-company-database",
    keyword: "Indian company database",
    title: "Indian Company Database | Pan-India Coverage",
    metaDescription:
      "A pan-India company database covering every major state and city. Verified, permission-based sourcing with city, state and pincode-level filters.",
    eyebrow: "Indian Company Database",
    h1: "Indian Company Database — Every State, Every City",
    answer:
      "An Indian company database is a nationwide collection of registered company and contact records covering businesses across India's states, cities and pincode clusters. IndiaB2BData.com's Indian company database spans 700+ cities, sourced from publicly available and permission-based channels and filterable down to the pincode level.",
    intro: [
      "Expanding across India means dealing with huge regional variation — what works in Mumbai doesn't automatically translate to Lucknow or Coimbatore. An Indian company database that only covers a handful of metros isn't enough for a genuinely pan-India rollout.",
      "Our database is built for exactly this: filter by state, city or pincode cluster to plan a phased rollout, or pull the full pan-India set for a nationwide campaign — all from the same verified source.",
    ],
    highlights: [
      { icon: MapPinned, title: "700+ Cities", description: "Coverage across every major state and city cluster." },
      { icon: ShieldCheck, title: "Public & Permission-Based Sourcing", description: "Compiled from lawful, permission-based channels." },
      { icon: Filter, title: "State/City/Pincode Filters", description: "Plan rollouts region by region." },
      { icon: RefreshCcw, title: "Monthly Refresh", description: "Inactive contacts replaced on a regular cycle." },
    ],
    useCases: [
      "Pan-India market expansion planning",
      "Franchise and distributor scouting by region",
      "State-wise or city-wise campaign sequencing",
      "Regional competitor and market mapping",
    ],
    faqs: [
      {
        question: "Does the database cover smaller cities, not just metros?",
        answer: "Yes — coverage spans 700+ cities including tier-2 and tier-3 towns, not just the major metros.",
      },
      {
        question: "Can I get data for specific states only?",
        answer: "Yes, you can filter by state, city or pincode cluster to match your rollout plan.",
      },
      {
        question: "Where does the data come from?",
        answer: "It's compiled from publicly available and permission-based channels, then verified and deduplicated.",
      },
      {
        question: "What if I need the whole country at once?",
        answer: "Our Enterprise package covers unlimited records with full pan-India coverage.",
      },
    ],
  },
  {
    slug: "business-data-provider-india",
    keyword: "business data provider India",
    title: "Business Data Provider India | Verified Data Pipeline",
    metaDescription:
      "A business data provider in India with a transparent verification pipeline — collection, verification, deduplication and DND scrubbing before delivery.",
    eyebrow: "Business Data Provider India",
    h1: "Business Data Provider India — How Our Data Pipeline Works",
    answer:
      "A business data provider supplies verified contact and company data for sales and marketing use, typically on a one-time or recurring basis. IndiaB2BData.com operates a four-stage pipeline — collection, verification, deduplication and DND scrubbing — before any business data reaches a client.",
    intro: [
      "Agencies, call centres and internal sales teams all need a steady, reliable feed of business data — not just a single list. As a business data provider, our focus is on the pipeline behind the data, not just the export file you receive.",
      "Every batch goes through the same four steps: records are collected from public and permission-based sources, cross-checked for accuracy, deduplicated against our existing database, and scrubbed against DND/NDNC lists before delivery.",
    ],
    highlights: [
      { icon: Search, title: "Multi-Source Collection", description: "Records gathered from public and permission-based channels." },
      { icon: UserCheck, title: "Verification Pipeline", description: "Manual and automated checks before delivery." },
      { icon: ListChecks, title: "Deduplication", description: "Cross-checked against our existing database." },
      { icon: RefreshCcw, title: "Monthly Refresh Cycle", description: "Inactive contacts identified and replaced regularly." },
    ],
    useCases: [
      "Agencies needing a white-label data supply for clients",
      "Sales teams needing a steady, recurring data feed",
      "Marketing agencies managing multiple campaigns at once",
      "Call centres needing dialer-ready, DND-scrubbed lists",
    ],
    faqs: [
      {
        question: "Can you supply data on a recurring basis, not just once?",
        answer: "Yes — Business and Enterprise packages include periodic refreshes so you get a continuing feed, not a one-off list.",
      },
      {
        question: "Do you support white-label or agency use?",
        answer: "Yes, agencies regularly use our data to service their own clients under their own branding.",
      },
      {
        question: "How do you keep the data DND-compliant?",
        answer: "Every batch is scrubbed against DND/NDNC lists as the final step before delivery.",
      },
      {
        question: "What's the typical turnaround for a bulk order?",
        answer: "Most orders are delivered within 2–6 working hours, depending on volume and filter complexity.",
      },
    ],
  },
  {
    slug: "corporate-database-india",
    keyword: "corporate database India",
    title: "Corporate Database India | Enterprise & CXO Contacts",
    metaDescription:
      "A corporate database of enterprise companies and senior decision-makers across India. Built for account-based marketing and enterprise B2B sales.",
    eyebrow: "Corporate Database India",
    h1: "Corporate Database India — Enterprise Companies & Decision-Makers",
    answer:
      "A corporate database focuses on larger enterprises and their senior decision-makers — CXOs, directors and department heads — rather than the full spectrum of small businesses. IndiaB2BData.com's corporate database is filtered by turnover band and designation, built for enterprise sales and account-based marketing.",
    intro: [
      "Enterprise sales cycles are different: fewer accounts, higher deal sizes, and a real need to reach the right senior contact rather than a generic front-desk number. A general-purpose business list isn't built for that.",
      "Our corporate database lets you filter down to larger companies by turnover band and industry, with contacts targeted at senior, decision-making roles — so your outreach reaches someone who can actually say yes.",
    ],
    highlights: [
      { icon: Users, title: "Senior Decision-Makers", description: "Contacts filtered toward CXO and department-head roles." },
      { icon: Building2, title: "Enterprise-Grade Companies", description: "Filtered by turnover band and company size." },
      { icon: Filter, title: "Industry Filters", description: "Segmented by sector for targeted account lists." },
      { icon: Users, title: "Dedicated Account Manager", description: "Included with our Enterprise package." },
    ],
    useCases: [
      "Enterprise sales and account-based marketing (ABM)",
      "Executive-level outreach for high-value deals",
      "RFP and tender targeting at larger companies",
      "B2B partnership and alliance development",
    ],
    faqs: [
      {
        question: "Can I get contacts for senior roles specifically?",
        answer: "Yes — records can be filtered toward CXO, director and department-head designations where available.",
      },
      {
        question: "Is this different from the standard business database?",
        answer: "Yes, it's filtered toward larger, higher-turnover companies rather than the full range of small and medium businesses.",
      },
      {
        question: "Do you support account-based marketing (ABM) lists?",
        answer: "Yes — tell us your target account list criteria (industry, size, region) and we'll build a matching list.",
      },
      {
        question: "Does the Enterprise package include support?",
        answer: "Yes, it includes a dedicated account manager plus monthly refreshes.",
      },
    ],
  },
  {
    slug: "verified-business-database-india",
    keyword: "verified business database India",
    title: "Verified Business Database India | Accuracy You Can Trust",
    metaDescription:
      "A verified business database for India — manually and automatically checked, deduplicated and DND-scrubbed. Free sample before you buy.",
    eyebrow: "Verified Business Database India",
    h1: "Verified Business Database India — Accuracy Before Anything Else",
    answer:
      "A verified business database is one where every record has been checked for accuracy, deduplicated and scrubbed against Do-Not-Disturb (DND) lists before it's delivered. IndiaB2BData.com verifies every record in its database this way, and offers a free sample so you can confirm accuracy before you buy.",
    intro: [
      "\"Verified\" is a word a lot of data sellers use loosely. For us it means a specific process: every record is checked, deduplicated against our existing database, and scrubbed against DND/NDNC lists — every single time, not just on request.",
      "That process is what keeps connect rates high and protects your sender reputation on WhatsApp and email — nobody wants to burn a campaign on numbers that were never real to begin with.",
    ],
    highlights: [
      { icon: UserCheck, title: "Manual + Automated Checks", description: "Records verified before they ever reach a client." },
      { icon: ShieldCheck, title: "DND/NDNC Scrubbed", description: "Reduces compliance risk on every campaign." },
      { icon: ListChecks, title: "Deduplicated", description: "No repeat records inflating your list count." },
      { icon: Sparkles, title: "Free Sample First", description: "See real records before you commit to a package." },
    ],
    useCases: [
      "Reducing wasted calls on a telesales floor",
      "Improving WhatsApp/SMS connect and open rates",
      "Keeping outreach DND/NDNC-compliant",
      "Protecting sender reputation on bulk campaigns",
    ],
    faqs: [
      {
        question: "How exactly do you verify the data?",
        answer:
          "Records go through source verification, deduplication against our existing database, and DND/NDNC scrubbing before delivery.",
      },
      {
        question: "What does 'DND-scrubbed' mean?",
        answer:
          "It means numbers registered on India's Do-Not-Disturb/NDNC list have been removed to reduce compliance risk in your outreach.",
      },
      {
        question: "Can I verify the quality myself before paying?",
        answer: "Yes — every enquiry includes 15–20 free sample records to check before you commit.",
      },
      {
        question: "What happens if a number turns out to be inactive?",
        answer: "Business and Enterprise packages include periodic refreshes that replace inactive contacts at no extra cost.",
      },
    ],
  },
  {
    slug: "business-directory-india",
    keyword: "business directory India",
    title: "Business Directory India | Search by Industry & City",
    metaDescription:
      "A B2B business directory for India, organised by industry and city. Filter 500+ categories across 700+ cities and export a ready-to-use contact list.",
    eyebrow: "Business Directory India",
    h1: "Business Directory India — Organised by Industry and City",
    answer:
      "A business directory lists companies organised by industry, city and category so buyers, sellers and marketers can discover the right businesses quickly. IndiaB2BData.com's directory-style database covers 500+ categories across 700+ Indian cities, filterable before you export a single record.",
    intro: [
      "Unlike a static online directory you browse one listing at a time, ours is built to be filtered and exported in bulk — pick your industry category and city, and get a ready-to-use contact list instead of scrolling through pages of listings.",
      "It works well both ways: find suppliers and vendors in a category you need, or build a targeted local list of companies to reach with your own product or service.",
    ],
    highlights: [
      { icon: Network, title: "Organised by Industry & City", description: "Structured for fast filtering, not endless scrolling." },
      { icon: Filter, title: "500+ Categories", description: "Granular business categories across every major sector." },
      { icon: MapPinned, title: "700+ City Coverage", description: "From major metros to tier-2 and tier-3 towns." },
      { icon: ListChecks, title: "Custom Filtered Exports", description: "Get a clean list, not a directory page to scroll." },
    ],
    useCases: [
      "Finding suppliers or vendors within a specific category",
      "Building a local company list for a city launch",
      "Competitor and market mapping by category",
      "Directory-style B2B prospecting at scale",
    ],
    faqs: [
      {
        question: "How is this different from a regular online business directory?",
        answer: "You get a filtered, exportable contact list in Excel/CSV instead of browsing individual listings one at a time.",
      },
      {
        question: "Can I search by both industry and city together?",
        answer: "Yes — combine industry category and city/pincode filters to get exactly the segment you need.",
      },
      {
        question: "How many categories are covered?",
        answer: "Over 500 business categories, spanning real estate, EdTech, finance, manufacturing, healthcare, e-commerce and more.",
      },
      {
        question: "Can I get a sample list from a specific category first?",
        answer: "Yes, every enquiry includes 15–20 free sample records from your chosen category and city.",
      },
    ],
  },
  {
    slug: "company-directory-india",
    keyword: "company directory India",
    title: "Company Directory India | Look Up Verified Company Profiles",
    metaDescription:
      "Search a verified company directory for India — company name, category, city and contact details. Built for due-diligence and quick company look-ups.",
    eyebrow: "Company Directory India",
    h1: "Company Directory India — Look Up Any Company, Fast",
    answer:
      "A company directory is a searchable listing of companies organised by name, category and city, used to quickly look up a specific company's profile rather than pull a bulk list. IndiaB2BData.com's company directory covers 700+ cities and 500+ categories, with verified contact details on request.",
    intro: [
      "Sometimes you don't need a bulk export — you need to check one company. Before a meeting, a vendor onboarding, or a partnership call, it helps to quickly confirm who you're dealing with: their category, city and how to reach them.",
      "Our company directory is built for that lookup use case as much as bulk list-building — search by company name or narrow by category and city to find the exact profile you need.",
    ],
    highlights: [
      { icon: BookOpen, title: "Searchable Listings", description: "Look up companies by name, category or city." },
      { icon: Search, title: "Quick Company Lookup", description: "Confirm a company's details before you engage." },
      { icon: MapPinned, title: "700+ Cities", description: "Directory coverage across every major city cluster." },
      { icon: Building2, title: "500+ Categories", description: "Companies classified by industry and business type." },
    ],
    useCases: [
      "Verifying a company's details before a meeting or deal",
      "Vendor and partner due-diligence checks",
      "Building a shortlist within one category or city",
      "Cross-checking a company before onboarding",
    ],
    faqs: [
      {
        question: "Can I look up a single specific company?",
        answer: "Yes — search by company name, or narrow by category and city to find the profile you need.",
      },
      {
        question: "What details does a directory listing include?",
        answer: "Company name, category, city and available contact details, depending on the record.",
      },
      {
        question: "Is this different from the business directory product?",
        answer: "It's the same underlying data, oriented toward looking up individual companies rather than exporting bulk campaign lists.",
      },
      {
        question: "Can I still export a full list from the directory?",
        answer: "Yes — you can filter by category and city and export the matching set in Excel/CSV.",
      },
    ],
  },
  {
    slug: "b2b-companies-database-india",
    keyword: "B2B companies database India",
    title: "B2B Companies Database India | Companies That Sell to Businesses",
    metaDescription:
      "A database of B2B companies across India — manufacturers, wholesalers, distributors and service companies that sell to other businesses, not consumers.",
    eyebrow: "B2B Companies Database India",
    h1: "B2B Companies Database India — Companies That Sell to Other Businesses",
    answer:
      "A B2B companies database lists companies whose customers are other businesses — manufacturers, wholesalers, distributors and B2B service providers — rather than individual consumers. IndiaB2BData.com's B2B companies database helps you find the right vendors, partners or buyers within India's business-to-business economy.",
    intro: [
      "Not every company in a general business list is relevant if you're specifically selling to other businesses. A B2B companies database narrows the field to companies actually operating in the B2B space — the manufacturers, wholesalers and service providers who buy and sell to other businesses.",
      "This makes it easier to find genuine partners, vendors or buyers instead of sorting through consumer-facing businesses that will never be a fit for a B2B pitch.",
    ],
    highlights: [
      { icon: Network, title: "B2B-Focused Segment", description: "Companies that sell to businesses, not consumers." },
      { icon: Building2, title: "Manufacturers & Distributors", description: "Covers the full B2B supply chain." },
      { icon: Users, title: "Vendor & Partner Discovery", description: "Find companies to buy from or sell to." },
      { icon: ShieldCheck, title: "Verified Records", description: "Checked and deduplicated before delivery." },
    ],
    useCases: [
      "Finding B2B vendors or suppliers in a specific category",
      "Identifying potential channel partners",
      "Targeting wholesalers and distributors for a new product",
      "Mapping the B2B supply chain within an industry",
    ],
    faqs: [
      {
        question: "How is a B2B companies database different from a general business database?",
        answer:
          "It's filtered to companies whose primary customers are other businesses, rather than including consumer-facing businesses too.",
      },
      {
        question: "Does this include manufacturers and distributors?",
        answer: "Yes — manufacturers, wholesalers, distributors and B2B service companies are all covered.",
      },
      {
        question: "Can I filter by a specific B2B category?",
        answer: "Yes, tell us the category or supply-chain segment you need and we'll build a matching list.",
      },
      {
        question: "Is this useful for finding channel partners?",
        answer: "Yes, many clients use it specifically to identify potential distributors or channel partners.",
      },
    ],
  },
  {
    slug: "industry-wise-company-database-india",
    keyword: "industry wise company database India",
    title: "Industry Wise Company Database India | 500+ Sectors",
    metaDescription:
      "A company database segmented by industry — 500+ sectors across India. Filter by real estate, EdTech, finance, manufacturing, healthcare and more.",
    eyebrow: "Industry Wise Company Database India",
    h1: "Industry Wise Company Database India — 500+ Sectors Covered",
    answer:
      "An industry-wise company database segments companies by sector or business category, letting you target one specific industry instead of a generic mixed list. IndiaB2BData.com covers 500+ industry segments, from real estate and EdTech to finance, manufacturing and healthcare.",
    intro: [
      "A campaign built for the finance sector rarely works if half the list is manufacturing companies. Industry-wise segmentation means your list is built around one specific sector from the start, not filtered down after the fact.",
      "We classify companies into 500+ industry categories, so you can pick exactly the sector — or combination of sectors — most relevant to your product or service before a single record is delivered.",
    ],
    highlights: [
      { icon: Filter, title: "500+ Industry Segments", description: "Fine-grained categories, not broad buckets." },
      { icon: Network, title: "Sector-Specific Lists", description: "Built around one industry from the start." },
      { icon: ListChecks, title: "Combine Categories", description: "Target more than one related sector at once." },
      { icon: Target, title: "Higher Relevance", description: "Less filtering needed once the list arrives." },
    ],
    useCases: [
      "Running a campaign targeted at a single industry",
      "Comparing opportunity across multiple sectors",
      "Building sector-specific sales playbooks",
      "Researching competitor density within an industry",
    ],
    faqs: [
      {
        question: "How many industries are covered?",
        answer: "Over 500 industry categories, spanning real estate, EdTech, finance, manufacturing, healthcare, e-commerce and more.",
      },
      {
        question: "Can I combine more than one industry in a single order?",
        answer: "Yes — tell us the combination of sectors you need and we'll build a matching list.",
      },
      {
        question: "Can I also filter by city within an industry?",
        answer: "Yes, industry and location filters can be combined in the same order.",
      },
      {
        question: "What if my industry isn't a standard category?",
        answer: "Share your specific niche and we'll build a custom segment for you.",
      },
    ],
  },
  {
    slug: "city-wise-company-database-india",
    keyword: "city wise company database India",
    title: "City Wise Company Database India | 700+ Cities",
    metaDescription:
      "A company database segmented by city across India — 700+ cities covered. Perfect for city launches, local campaigns and regional sales planning.",
    eyebrow: "City Wise Company Database India",
    h1: "City Wise Company Database India — Plan City by City",
    answer:
      "A city-wise company database segments company records by city, so you can run or plan a campaign one city at a time instead of buying a generic pan-India list. IndiaB2BData.com covers 700+ Indian cities, from major metros to tier-2 and tier-3 towns.",
    intro: [
      "Launching in a new city works best with a list built for that city specifically — not a nationwide list you then filter down. City-wise segmentation means you get exactly the companies located in your target city from the start.",
      "This is especially useful for phased expansion: start with one city, measure results, then move to the next using the same filtered approach.",
    ],
    highlights: [
      { icon: MapPinned, title: "700+ Cities", description: "From major metros to tier-2 and tier-3 towns." },
      { icon: Filter, title: "One City at a Time", description: "Built for phased, city-by-city rollouts." },
      { icon: RefreshCcw, title: "Regularly Refreshed", description: "Local lists updated on a monthly cycle." },
      { icon: Target, title: "Higher Local Relevance", description: "No out-of-city records diluting your list." },
    ],
    useCases: [
      "Planning a new city launch",
      "Running city-specific marketing campaigns",
      "Comparing opportunity across candidate cities",
      "Assigning territory-based lists to local sales reps",
    ],
    faqs: [
      {
        question: "Can I get data for just one city?",
        answer: "Yes — our Starter package is built for a single city or district.",
      },
      {
        question: "Can I order multiple cities at once?",
        answer: "Yes, our Business and Enterprise packages cover multiple cities or full pan-India coverage.",
      },
      {
        question: "Does this include smaller cities, not just metros?",
        answer: "Yes — coverage spans 700+ cities including tier-2 and tier-3 towns.",
      },
      {
        question: "Can I combine city and industry filters?",
        answer: "Yes, city and industry filters can be combined in the same order.",
      },
    ],
  },
  {
    slug: "state-wise-company-database-india",
    keyword: "state wise company database India",
    title: "State Wise Company Database India | Every Major State",
    metaDescription:
      "A company database segmented by state across India. Plan region-by-region rollouts with verified company records for every major state.",
    eyebrow: "State Wise Company Database India",
    h1: "State Wise Company Database India — Plan Region by Region",
    answer:
      "A state-wise company database groups company records by state, useful for planning a regional rollout or comparing opportunity across different parts of India before committing to a full national campaign. IndiaB2BData.com's state-wise data covers every major state, filterable down to the city or pincode level.",
    intro: [
      "India's markets vary enormously state to state — regulatory context, language, buying behaviour and competitive density all shift. A state-wise company database lets you plan around that variation instead of treating the whole country as one market.",
      "Use it to sequence a rollout state by state, or to compare a handful of candidate states side by side before deciding where to focus first.",
    ],
    highlights: [
      { icon: Landmark, title: "State-Level Segmentation", description: "Plan rollouts region by region." },
      { icon: MapPinned, title: "Every Major State", description: "Coverage across India's states and union territories." },
      { icon: Filter, title: "Drill Down to City/Pincode", description: "Narrow further within a chosen state." },
      { icon: ListChecks, title: "Compare Regions", description: "Order a few states side by side before scaling." },
    ],
    useCases: [
      "Sequencing a state-by-state market rollout",
      "Comparing opportunity across candidate states",
      "Planning region-specific regulatory or compliance outreach",
      "Assigning state-based territories to a sales team",
    ],
    faqs: [
      {
        question: "Can I order data for just one or two states?",
        answer: "Yes — tell us which states you need and we'll build a matching list.",
      },
      {
        question: "Can I filter further by city within a state?",
        answer: "Yes, state, city and pincode filters can be combined in the same order.",
      },
      {
        question: "Do you cover every state, including smaller ones?",
        answer: "Yes, coverage spans every major state and union territory.",
      },
      {
        question: "Is this useful for a phased national rollout?",
        answer: "Yes, many clients use state-wise data specifically to sequence a phased expansion plan.",
      },
    ],
  },
  {
    slug: "gst-database-india",
    keyword: "GST database India",
    title: "GST Database India | GSTIN-Linked Business Records",
    metaDescription:
      "A GST database for India with GSTIN, registration status and state code. Useful for compliance checks, vendor eligibility and B2B verification.",
    eyebrow: "GST Database India",
    h1: "GST Database India — GSTIN-Linked Business Records",
    answer:
      "A GST database is a set of business records linked to their GST Identification Number (GSTIN), including registration status and the state code embedded in the GSTIN. IndiaB2BData.com's GST database helps you verify a business's GST registration before onboarding it as a vendor or customer.",
    intro: [
      "For many B2B transactions, confirming GST registration matters before money or goods change hands — it affects invoicing, input tax credit and basic trust in a new vendor or buyer. A GST database puts that information alongside the rest of a company's contact details.",
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
        answer: "Yes — this is the same underlying GSTIN-linked dataset, with turnover band and industry classification included.",
      },
      {
        question: "Can I filter by state using the GSTIN?",
        answer: "Yes, the state code embedded in the GSTIN can be used as a filter.",
      },
    ],
  },
  {
    slug: "mca-company-database-india",
    keyword: "MCA company database India",
    title: "MCA Company Database India | Registered Companies & LLPs",
    metaDescription:
      "A database of companies and LLPs registered with the Ministry of Corporate Affairs — incorporation details, company type and registered office.",
    eyebrow: "MCA Company Database India",
    h1: "MCA Company Database India — Registered Companies & LLPs",
    answer:
      "An MCA company database lists companies and LLPs incorporated under India's Companies Act and registered with the Ministry of Corporate Affairs, including company type, incorporation details and registered office. IndiaB2BData.com's MCA-linked records help you target formally incorporated businesses rather than unregistered entities.",
    intro: [
      "Not every business contact is a formally incorporated company — some are proprietorships or unregistered setups. When your outreach specifically needs Private Limited companies, LLPs or Public Limited entities, MCA-linked records narrow the field to exactly that.",
      "These records reflect a company's formal incorporation status — useful when a deal, partnership or compliance requirement depends on dealing with a properly registered legal entity.",
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
        answer: "Yes — tell us which entity types you need (e.g. only LLPs, or only Private Limited) and we'll build a matching list.",
      },
      {
        question: "Does this include the registered office address?",
        answer: "Yes, registered office details are included where available.",
      },
      {
        question: "Is this different from the GST database?",
        answer: "Yes — this reflects Companies Act incorporation status, while the GST database reflects GST registration; a company can appear in one, both, or neither.",
      },
    ],
  },
  {
    slug: "registered-companies-database-india",
    keyword: "registered companies database India",
    title: "Registered Companies Database India | Verified Registration Status",
    metaDescription:
      "A database of formally registered companies across India, with verified registration status for compliance-first vendor and partner selection.",
    eyebrow: "Registered Companies Database India",
    h1: "Registered Companies Database India — Compliance-First Company Records",
    answer:
      "A registered companies database includes only businesses with verifiable formal registration — whether GST, Companies Act incorporation, or both — as opposed to unregistered or informal setups. IndiaB2BData.com uses this to help clients build compliance-first vendor, partner and customer lists.",
    intro: [
      "For procurement, partnerships or larger B2B deals, working only with formally registered companies is often a hard requirement, not a nice-to-have. A registered companies database is built around that constraint from the start.",
      "We combine registration signals — GST status and Companies Act incorporation — so you can build a shortlist you're confident is compliance-ready before you make first contact.",
    ],
    highlights: [
      { icon: ShieldCheck, title: "Verified Registration", description: "Only formally registered businesses included." },
      { icon: BadgeCheck, title: "Compliance-First Lists", description: "Built for procurement and vendor onboarding." },
      { icon: FileText, title: "Multiple Registration Signals", description: "GST and Companies Act status combined." },
      { icon: Landmark, title: "Pan-India Coverage", description: "Registered companies across every state." },
    ],
    useCases: [
      "Procurement and vendor pre-qualification",
      "Partnership deals requiring a registered legal entity",
      "Compliance-first customer acquisition",
      "Filtering out informal or unregistered businesses",
    ],
    faqs: [
      {
        question: "What counts as 'registered' in this database?",
        answer: "Businesses with verifiable GST registration, Companies Act incorporation, or both.",
      },
      {
        question: "Can I require both GST and Companies Act registration?",
        answer: "Yes — tell us your compliance requirement and we'll filter accordingly.",
      },
      {
        question: "Is this useful for procurement teams?",
        answer: "Yes, procurement and vendor-onboarding teams are among our most common users of this dataset.",
      },
      {
        question: "Can I get a free sample to check registration accuracy?",
        answer: "Yes, every enquiry includes 15–20 free sample records before you commit to a package.",
      },
    ],
  },
  {
    slug: "newly-registered-companies-india",
    keyword: "newly registered companies India",
    title: "Newly Registered Companies India | Fresh Incorporation Leads",
    metaDescription:
      "A feed of newly registered and recently incorporated companies across India — ideal for reaching new businesses before your competitors do.",
    eyebrow: "Newly Registered Companies India",
    h1: "Newly Registered Companies India — Reach New Businesses First",
    answer:
      "Newly registered companies are businesses that have recently completed GST or Companies Act incorporation and are actively setting up operations — often needing banking, insurance, office setup, compliance and other B2B services. IndiaB2BData.com tracks recently registered companies across India so you can reach them early.",
    intro: [
      "The first few months after a company registers are when it's actively buying — setting up banking, insurance, office infrastructure, software and compliance services. Reaching a business at this stage, before competitors do, is a real edge for B2B vendors selling into that window.",
      "Rather than a static, full-market list, this feed is built around freshness — recently incorporated companies, updated regularly, so you're consistently reaching businesses early in their setup phase.",
    ],
    highlights: [
      { icon: CalendarClock, title: "Recently Incorporated", description: "Companies registered within a recent window." },
      { icon: Sparkles, title: "Early-Stage Reach", description: "Contact businesses before competitors do." },
      { icon: TrendingUp, title: "High Buying Intent", description: "New companies actively setting up operations." },
      { icon: Zap, title: "Regularly Updated Feed", description: "A rolling feed, not a one-time static list." },
    ],
    useCases: [
      "Selling banking, insurance or compliance services to new businesses",
      "Office setup, software or infrastructure vendors targeting new companies",
      "Early relationship-building before competitors reach out",
      "Tracking new-company formation trends in a city or industry",
    ],
    faqs: [
      {
        question: "How recent are the 'newly registered' companies?",
        answer: "The feed focuses on companies registered within a recent window and is updated on a rolling basis.",
      },
      {
        question: "Can I get this as a recurring feed, not a one-time list?",
        answer: "Yes — Business and Enterprise packages can be set up as a recurring feed of newly registered companies.",
      },
      {
        question: "Can I filter new companies by city or industry?",
        answer: "Yes, city, state and industry filters can all be applied to the new-registrations feed.",
      },
      {
        question: "Why do businesses target newly registered companies specifically?",
        answer: "New companies are actively purchasing setup-related services, making them a high-intent audience for relevant vendors.",
      },
    ],
  },
  {
    slug: "business-leads-india",
    keyword: "business leads India",
    title: "Business Leads India | Sales-Ready Contacts",
    metaDescription:
      "Get sales-ready business leads across India, matched to your target industry, city and company profile. Verified contacts, delivered fast.",
    eyebrow: "Business Leads India",
    h1: "Business Leads India — Sales-Ready Contacts for Your Pipeline",
    answer:
      "Business leads are contact records matched to a specific target profile — industry, city, company size — and intended to go straight into a sales pipeline rather than serve as a generic reference list. IndiaB2BData.com builds business leads to your ideal customer profile, verified and DND-scrubbed before delivery.",
    intro: [
      "A lead is different from a generic contact — it's meant to be dialled or messaged today, not stored as reference data. That means accuracy and relevance matter more than raw volume.",
      "We build business leads against your specific ideal customer profile — industry, city, company size, designation — so what lands in your CRM is ready for outreach, not a list that still needs heavy filtering.",
    ],
    highlights: [
      { icon: Target, title: "Matched to Your ICP", description: "Built around your ideal customer profile." },
      { icon: TrendingUp, title: "Sales-Ready", description: "Meant for immediate outreach, not just reference." },
      { icon: ShieldCheck, title: "Verified & DND-Scrubbed", description: "Reduces wasted calls and compliance risk." },
      { icon: Zap, title: "Fast Turnaround", description: "Most lead lists delivered within 2–6 working hours." },
    ],
    useCases: [
      "Filling a telesales pipeline with fresh leads",
      "Feeding a CRM for a new outbound campaign",
      "Testing a new market segment before scaling spend",
      "Supplementing inbound leads with targeted outbound ones",
    ],
    faqs: [
      {
        question: "What's the difference between 'leads' and a general database?",
        answer: "Leads are built to your specific target profile and meant for immediate outreach, while a database is broader reference data.",
      },
      {
        question: "Can I define my ideal customer profile for the leads?",
        answer: "Yes — tell us industry, city, company size or designation and we'll build leads matching that profile.",
      },
      {
        question: "Are the leads verified before delivery?",
        answer: "Yes, every lead list is verified, deduplicated and DND-scrubbed before it reaches you.",
      },
      {
        question: "Can I get a sample of leads before ordering in bulk?",
        answer: "Yes, every enquiry includes 15–20 free sample records to check quality first.",
      },
    ],
  },
  {
    slug: "b2b-leads-database-india",
    keyword: "B2B leads database India",
    title: "B2B Leads Database India | Decision-Maker Contacts",
    metaDescription:
      "A B2B leads database with decision-maker contacts across India — filtered by industry, designation and company size for outbound sales teams.",
    eyebrow: "B2B Leads Database India",
    h1: "B2B Leads Database India — Reach the Right Decision-Maker",
    answer:
      "A B2B leads database provides contact records for decision-makers at other businesses — filtered by industry, designation and company size — built specifically for outbound B2B sales rather than consumer marketing. IndiaB2BData.com's B2B leads database covers 500+ industries with designation-level filtering.",
    intro: [
      "Reaching a business isn't the same as reaching the person who can say yes. A B2B leads database is built around designation and role, not just a company's general contact number, so your outreach lands with someone who can actually make a decision.",
      "Combine that with industry and company-size filters and you get a list built specifically for a B2B sales motion — cold calling, LinkedIn/email outreach, or account-based selling.",
    ],
    highlights: [
      { icon: Users, title: "Decision-Maker Contacts", description: "Filtered toward relevant roles and designations." },
      { icon: Target, title: "Industry & Size Filters", description: "Built around your specific target segment." },
      { icon: BadgeCheck, title: "Verified for Outreach", description: "Checked and deduplicated before delivery." },
      { icon: TrendingUp, title: "Built for B2B Sales Motions", description: "Cold calling, email and account-based selling." },
    ],
    useCases: [
      "Outbound cold calling and telesales for B2B products",
      "Account-based marketing (ABM) target lists",
      "Sales development rep (SDR) pipeline building",
      "Designation-specific outreach campaigns",
    ],
    faqs: [
      {
        question: "Can I filter leads by designation?",
        answer: "Yes — records can be filtered toward specific roles or designations where available.",
      },
      {
        question: "How is this different from the corporate database?",
        answer: "This is built more broadly across company sizes for general B2B sales, while the corporate database focuses specifically on larger enterprises and senior roles.",
      },
      {
        question: "Can I combine designation, industry and city filters?",
        answer: "Yes, all three can be combined in a single order.",
      },
      {
        question: "Is a free sample available?",
        answer: "Yes, every enquiry includes 15–20 free sample records before you commit.",
      },
    ],
  },
  {
    slug: "company-contact-database-india",
    keyword: "company contact database India",
    title: "Company Contact Database India | Reach the Right Person",
    metaDescription:
      "A company contact database with named contacts and designations, not just company switchboard numbers. Reach the right person at every company.",
    eyebrow: "Company Contact Database India",
    h1: "Company Contact Database India — Reach the Right Person, Not a Switchboard",
    answer:
      "A company contact database provides person-level details within a company — name, designation and direct contact information — rather than just a general company number. IndiaB2BData.com's company contact database is built so your outreach reaches an actual person, not a reception desk.",
    intro: [
      "A generic company number often means a receptionist, an IVR menu, or a shared inbox nobody checks. A company contact database solves that by attaching a name and designation to the record, so you know exactly who you're calling or emailing.",
      "This matters most for outbound sales and partnership outreach, where getting past the front desk to the right person is usually the hardest part of the process.",
    ],
    highlights: [
      { icon: Contact, title: "Named Contacts", description: "Person-level details, not just a company line." },
      { icon: UserCheck, title: "Designation Included", description: "Know the role before you reach out." },
      { icon: Search, title: "Precise Targeting", description: "Skip the switchboard, reach the right desk." },
      { icon: ListChecks, title: "Direct Contact Details", description: "Mobile or email tied to the individual, where available." },
    ],
    useCases: [
      "Outbound sales calls that need to bypass a switchboard",
      "Personalised email or LinkedIn outreach campaigns",
      "Partnership and vendor outreach to a named contact",
      "Building a designation-specific contact list",
    ],
    faqs: [
      {
        question: "What's included per contact?",
        answer: "Name, designation and available direct contact details (mobile or email), alongside the company they work at.",
      },
      {
        question: "Can I request a specific designation only?",
        answer: "Yes — tell us the role or designation you need and we'll build a matching list.",
      },
      {
        question: "Is this more accurate than a general company number?",
        answer: "Yes, named contacts are more likely to reach the right person directly rather than a shared line.",
      },
      {
        question: "Can I get a sample of named contacts first?",
        answer: "Yes, every enquiry includes 15–20 free sample records before you commit to a package.",
      },
    ],
  },
  {
    slug: "manufacturer-database-india",
    keyword: "manufacturer database India",
    title: "Manufacturer Database India | Factories & Production Units",
    metaDescription:
      "A verified manufacturer database across India — factories and production units by industry and city. Built for suppliers, buyers and B2B vendors.",
    eyebrow: "Manufacturer Database India",
    h1: "Manufacturer Database India — Factories & Production Units",
    answer:
      "A manufacturer database lists factories and production units across India, filtered by industry and city, used by suppliers looking to sell raw materials or machinery, and by buyers sourcing manufactured goods. IndiaB2BData.com's manufacturer database covers manufacturing hubs across 700+ cities.",
    intro: [
      "Manufacturing is its own world — raw material and machinery suppliers need to reach factories directly, and buyers sourcing products need to find the right production units. A general business list rarely segments this cleanly.",
      "Our manufacturer database is filtered specifically to manufacturing and production companies, by industry and city, so you can reach the right factories without wading through unrelated business types.",
    ],
    highlights: [
      { icon: Factory, title: "Factories & Production Units", description: "Filtered specifically to manufacturing companies." },
      { icon: Network, title: "By Manufacturing Sector", description: "Segmented across manufacturing sub-industries." },
      { icon: MapPinned, title: "Manufacturing Hub Coverage", description: "Cities and clusters known for production activity." },
      { icon: ShieldCheck, title: "Verified Records", description: "Checked and deduplicated before delivery." },
    ],
    useCases: [
      "Raw material and machinery suppliers reaching factories",
      "Buyers sourcing manufactured goods or components",
      "Mapping manufacturing clusters within an industry",
      "B2B vendors selling industrial equipment or services",
    ],
    faqs: [
      {
        question: "What manufacturing sectors are covered?",
        answer: "Multiple manufacturing sub-industries are covered; tell us your specific sector and we'll filter accordingly.",
      },
      {
        question: "Can I target factories in a specific manufacturing hub?",
        answer: "Yes — city and cluster filters can be applied to target known manufacturing hubs.",
      },
      {
        question: "Is this useful for selling raw materials or machinery?",
        answer: "Yes, suppliers of raw materials, components and machinery are among the most common users of this dataset.",
      },
      {
        question: "Can I get a free sample first?",
        answer: "Yes, every enquiry includes 15–20 free sample records before you commit to a package.",
      },
    ],
  },
  {
    slug: "service-providers-database-india",
    keyword: "service providers database India",
    title: "Service Providers Database India | IT, Consulting & Agencies",
    metaDescription:
      "A database of service-sector companies across India — IT services, consulting, agencies and professional services, filtered by category and city.",
    eyebrow: "Service Providers Database India",
    h1: "Service Providers Database India — IT, Consulting & Professional Services",
    answer:
      "A service providers database lists companies in the service sector — IT services, consulting, agencies and other professional services — as opposed to product or manufacturing businesses. IndiaB2BData.com's service providers database is filtered by service category and city.",
    intro: [
      "Selling to service-sector companies is different from selling to manufacturers or retailers — different buying cycles, different decision-makers, different pain points. A service providers database keeps that segment separate from the rest.",
      "Whether you're targeting IT services firms, consultancies, agencies or other professional service companies, filtering by service category and city gets you a list built for that specific segment.",
    ],
    highlights: [
      { icon: Headphones, title: "Service-Sector Focus", description: "IT services, consulting, agencies and more." },
      { icon: Network, title: "By Service Category", description: "Segmented across professional service types." },
      { icon: Users, title: "Decision-Maker Contacts", description: "Reach relevant roles within service companies." },
      { icon: MapPinned, title: "City-Level Coverage", description: "Filter service providers by city or region." },
    ],
    useCases: [
      "Selling software or tools to IT services and agencies",
      "Partnering with consulting firms for referral pipelines",
      "Targeting professional service firms for B2B outreach",
      "Mapping service-sector competitors within a category",
    ],
    faqs: [
      {
        question: "What kinds of service providers are covered?",
        answer: "IT services, consulting firms, agencies and other professional service companies.",
      },
      {
        question: "Can I filter by a specific service category?",
        answer: "Yes — tell us the service category you need (e.g. IT services, marketing agencies) and we'll build a matching list.",
      },
      {
        question: "Can I combine service category and city filters?",
        answer: "Yes, both filters can be applied together in the same order.",
      },
      {
        question: "Is a free sample available before I order?",
        answer: "Yes, every enquiry includes 15–20 free sample records to check quality first.",
      },
    ],
  },
];

export function getKeywordPage(slug: string): KeywordPage | undefined {
  return keywordPages.find((page) => page.slug === slug);
}

export function getOtherKeywordPages(slug: string, limit = 6): KeywordPage[] {
  return keywordPages.filter((page) => page.slug !== slug).slice(0, limit);
}
