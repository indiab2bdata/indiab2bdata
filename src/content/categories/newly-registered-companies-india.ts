import { Banknote, Building2, Calculator, CalendarClock, CalendarPlus, ShieldCheck, Sparkles, TrendingUp, Truck, Users, Wrench, Zap } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: recent incorporations as a recurring feed. */
export default {
  template: "landing",
  updated: "2026-10-22",
  keyword: {
    slug: "newly-registered-companies-india",
    keyword: "newly registered companies India",
    title: "Newly Registered Companies India | New Company Leads",
    metaDescription:
      "A feed of newly registered and recently incorporated companies across India - ideal for reaching new businesses before your competitors do.",
    eyebrow: "Newly Registered Companies India",
    h1: "Newly Registered Companies India - Reach New Businesses First",
    answer:
      "Newly registered companies are businesses that have recently completed GST or Companies Act incorporation and are actively setting up operations - often needing banking, insurance, office setup, compliance and other B2B services. IndiaB2BData.com tracks recently registered companies across India so you can reach them early.",
    intro: [
      "The first few months after a company registers are when it's actively buying - setting up banking, insurance, office infrastructure, software and compliance services. Reaching a business at this stage, before competitors do, is a real edge for B2B vendors selling into that window.",
      "Rather than a static, full-market list, this feed is built around freshness - recently incorporated companies, updated regularly, so you're consistently reaching businesses early in their setup phase.",
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
        answer: "Yes - Business and Enterprise packages can be set up as a recurring feed of newly registered companies.",
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
    related: [
      "domain-whois-database",
      "mca-company-database-india",
      "gst-database-india",
      "b2b-leads-database-india",
      "email-database-india",
      "b2b-database-india",
    ],
  },
  landing: categoryLanding(
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
    { subjects: "newly registered company", kind: "business" }
  ),
} satisfies CategoryContent;
