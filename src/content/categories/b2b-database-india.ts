import { Handshake, Headphones, Layers, Mail, MapPinned, Network, ShieldCheck, Target, Users, Zap } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: the hub: every kind of business, any role, any location. */
export default {
  template: "landing",
  updated: "2026-10-22",
  keyword: {
    slug: "b2b-database-india",
    keyword: "B2B database India",
    title: "B2B Database India | Business Contacts",
    metaDescription:
      "Get a B2B database in India - 50L+ business contacts, 700+ cities, 500+ industries. Mobile numbers, emails and company records, refreshed monthly.",
    eyebrow: "B2B Database India",
    h1: "B2B Database India - Business Contacts for Every Industry",
    answer:
      "A B2B database is a structured collection of business contact records - company names, decision-maker mobile numbers, emails and GST/company details - used by sales and marketing teams to find and reach other businesses. IndiaB2BData.com maintains a B2B database of 50L+ records spanning 700+ Indian cities and 500+ industries.",
    intro: [
      "Whether you're a sales team cold-calling new prospects, a marketing agency running WhatsApp campaigns, or a startup entering a new city, a reliable B2B database is the foundation of every outbound effort. Bad data wastes hours on disconnected numbers and bounced emails; a B2B database puts your team in front of real decision-makers instead.",
      "Our B2B database India covers mobile numbers, corporate emails, GSTIN-linked company records and industry-wise segments - checked and deduplicated before delivery, with a free sample first.",
    ],
    highlights: [
      { icon: ShieldCheck, title: "Checked Before Delivery", description: "Every record checked and refreshed monthly." },
      { icon: MapPinned, title: "700+ Cities", description: "Pan-India coverage across every state and pincode cluster." },
      { icon: Network, title: "500+ Industries", description: "Segmented lists for real estate, EdTech, finance, healthcare and more." },
      { icon: Zap, title: "Fast Delivery", description: "Delivery timeline confirmed in your quote." },
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
          "A B2B database is a compiled set of business contact records - typically mobile numbers, emails, company names and GST details - that sales and marketing teams use to reach other businesses directly instead of cold-searching.",
      },
      {
        question: "How is IndiaB2BData.com's B2B database sourced?",
        answer:
          "Records are compiled from publicly available and permission-based channels, then checked and deduplicated before delivery.",
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
    related: [
      "company-database-india",
      "b2b-leads-database-india",
      "b2b-b2c-companies-database",
      "industry-wise-company-database-india",
      "doctors-database",
      "school-colleges-database",
    ],
  },
  landing: categoryLanding(
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
    { subjects: "Indian business", kind: "business" }
  ),
} satisfies CategoryContent;
