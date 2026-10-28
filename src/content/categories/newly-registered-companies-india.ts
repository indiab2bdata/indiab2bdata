import { Banknote, Building2, Calculator, CalendarClock, CalendarPlus, ShieldCheck, Sparkles, TrendingUp, Truck, Users, Wrench, Zap } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: recent incorporations as a recurring feed. */
export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "newly-registered-companies-india",
    keyword: "newly registered companies India",
    title: "Newly Registered Company Records India",
    metaDescription:
      "Company-record selection by incorporation date, company type and requested location. Ask for the source, extract date, matching count and contact fields for your brief.",
    eyebrow: "Newly Registered Companies India",
    h1: "Newly Registered Company Records in India",
    answer:
      "A newly registered company selection groups company records by an incorporation-date window. A registration date does not establish that a company is actively buying or that contact fields are available; confirm source, date range and fields for the requested selection.",
    intro: [
      "Incorporation date can be one way to define a company-record selection for providers of accounting, banking, software, workspace or compliance services. It does not show purchase intent or establish that a company is actively setting up with a particular vendor.",
      "State the date window, company types and locations you need. Before purchase, confirm the source, extract date, matching count, contact fields and whether any recurring delivery is actually available.",
    ],
    highlights: [
      { icon: CalendarClock, title: "Date Window", description: "Ask which incorporation periods can be supported." },
      { icon: Sparkles, title: "Company Types", description: "Specify the legal forms relevant to your brief." },
      { icon: TrendingUp, title: "Source & Snapshot", description: "Confirm the source and extract date before purchase." },
      { icon: Zap, title: "Recurring Options", description: "Ask whether ongoing snapshots are available and on what terms." },
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
        answer: "Ask which location and industry filters are available for the selected date range, and confirm the matching count before purchase.",
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
      title: "Newly Registered Company Records by Date | India",
      metaDescription:
        "Discuss a company-record selection by incorporation date, legal form and location. Ask for the source, snapshot date, matching count and available fields; the on-page rows are fictional.",
      eyebrow: "New Incorporations",
      h1: "Newly Registered Company Records: Define a Date Range",
      lead:
        "Describe the incorporation-date range, company types and locations you need. Confirm the source, extract date, matching count and available contact fields. Ask separately whether a recurring feed is available and what terms apply.",
      segmentSummary:
        "A recent incorporation date may be useful when a buyer has a defined business reason to contact newly formed companies. It does not establish purchasing activity, decision-maker access or a supplier relationship. Confirm the date basis, legal forms, contact fields and source for the specific selection.",
      segmentCards: [
        { icon: CalendarPlus, title: "Date Selection", description: "Ask which incorporation-date windows and company types can be supported." },
        { icon: Users, title: "Contact Fields", description: "Confirm whether director or company contact fields are available for the chosen records." },
        { icon: Truck, title: "Recurring Delivery", description: "Ask whether ongoing snapshots are available, with frequency and terms confirmed in writing." },
      ],
      segmentTabs: {
        heading: "Date windows to define in your brief",
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
        { question: "What incorporation date range can I request?", answer: "State the date window in your brief. Confirm the snapshot date, source and matching count for that range before purchase." },
        { question: "Can I request recurring updates?", answer: "Ask whether a recurring feed is available for your chosen states and company types. Confirm frequency, snapshot basis, duplicate handling and price in writing." },
        { question: "Are phone numbers and emails available for new companies?", answer: "Ask which contact fields are available for the selected date range and request a sample and dated field counts. Do not assume that incorporation records contain contact details." },
        { question: "Are LLPs and OPCs included?", answer: "Specify whether you need private limited companies, OPCs or LLPs. Confirm which types are present in the selected extract before purchase." },
      ],
      pricingNote: "Request a written quote for the date range, states, company types and fields. Confirm any recurring-feed terms, counting unit and total price.",
      related: [
        L("MCA Company Database", "mca-company-database-india"),
        L("GST Database", "gst-database-india"),
        L("Company Database", "company-database-india"),
        L("Chartered Accountants Database", "chartered-accountants-database-india"),
        L("Company Proprietors Database", "company-proprietors-database-india"),
        L("Commercial & Residential Properties Database", "commercial-residential-properties-database-india"),
      ],
      disclaimer: `Request the source and extract date for the selected records; this page does not establish availability of any particular contact field. IndiaB2BData.com is not affiliated with the Ministry of Corporate Affairs.${dnd}`,
      formTitle: "Discuss New Company Records",
      bands: [
        "Need a particular incorporation window or state? Ask about availability and request a dated count.",
        "Only private limited companies, or LLPs too? Pick your types and window.",
        "Ask whether a matching sample is available; the public preview is fictional.",
      ],
      footerTitle: "Discuss a Date-Based Company Selection",
    },
    { subjects: "newly registered company", kind: "business" }
  ),
} satisfies CategoryContent;
