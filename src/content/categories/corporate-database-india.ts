import { Briefcase, Building, Building2, Filter, Network, ShieldCheck, ShoppingCart, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: mid/large corporates and their department heads. */
export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "corporate-database-india",
    keyword: "corporate database India",
    title: "Corporate Database India | Enterprise & CXO Contacts",
    metaDescription:
      "A corporate database of enterprise companies and senior decision-makers across India. Built for account-based marketing and enterprise B2B sales.",
    eyebrow: "Corporate Database India",
    h1: "Corporate Database India - Enterprise Companies & Decision-Makers",
    answer:
      "A corporate database focuses on larger enterprises and their senior decision-makers - CXOs, directors and department heads - rather than the full spectrum of small businesses. IndiaB2BData.com's corporate database is filtered by turnover band and designation, built for enterprise sales and account-based marketing.",
    intro: [
      "Enterprise sales cycles are different: fewer accounts, higher deal sizes, and a real need to reach the right senior contact rather than a generic front-desk number. A general-purpose business list isn't built for that.",
      "Our corporate database lets you filter down to larger companies by turnover band and industry, with contacts targeted at senior, decision-making roles - so your outreach reaches someone who can actually say yes.",
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
        answer: "Yes - records can be filtered toward CXO, director and department-head designations where available.",
      },
      {
        question: "Is this different from the standard business database?",
        answer: "Yes, it's filtered toward larger, higher-turnover companies rather than the full range of small and medium businesses.",
      },
      {
        question: "Do you support account-based marketing (ABM) lists?",
        answer: "Yes - tell us your target account list criteria (industry, size, region) and we'll build a matching list.",
      },
      {
        question: "Does the Enterprise package include support?",
        answer: "Yes, it includes a dedicated account manager plus monthly refreshes.",
      },
    ],
    related: [
      "company-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
      "business-analysts-database-india",
      "bpo-call-centre-employees-database-india",
      "mca-company-database-india",
      "b2b-leads-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "corporate-database-india",
      name: "Corporate Database",
      title: "Corporate Database India | Mid & Large Company Decision-Makers",
      metaDescription:
        "Discuss a larger-company and department-oriented selection for India. Confirm employee-size criteria, department fields, location coverage and the classification basis against a dated sample.",
      eyebrow: "Mid & Large Corporates",
      h1: "Corporate Database India: A Department-Oriented Company Selection",
      lead:
        "Discuss a company-size and department-focused selection for enterprise sales. Ask which employee-size bands, functions, seniority fields and locations are available, and confirm the classification basis against a dated sample.",
      segmentSummary:
        "Enterprise account research may involve several departments and levels of seniority. This product is intended for larger-company and department-oriented selections, but the employee threshold, source, contact coverage and number of contacts per company need to be confirmed for the requested segment before purchase.",
      segmentCards: [
        { icon: Building, title: "Company Size", description: "Discuss the employee-size threshold and ask for its definition, source and dated count for the requested selection." },
        { icon: Users, title: "Department Fields", description: "Ask which departments and contact roles can be identified for the companies in your brief." },
        { icon: Briefcase, title: "Function & Seniority", description: "Request department and level fields such as CXO, VP/GM or manager; confirm availability and definitions in a matching sample." },
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
      sample: "corporate",
      useCases: [
        { icon: Network, title: "Multi-Threaded Enterprise Deals", description: "Reach IT, finance and procurement at the same account so a deal doesn't stall on one champion." },
        { icon: Users, title: "HR Tech & Benefits Sales", description: "Target CHROs and HR heads at large employers with HRMS, insurance and wellness programmes." },
        { icon: ShieldCheck, title: "Cybersecurity & Cloud", description: "Reach CIOs and security leads at companies big enough to need enterprise-grade tools." },
        { icon: ShoppingCart, title: "Corporate Procurement", description: "Get on approved-vendor lists by reaching purchase and admin heads directly." },
      ],
      faqs: [
        { question: "Can I request contacts at companies in my target account list?", answer: "Share the named accounts and departments you need. Ask which matches are available and request a dated count and sample before agreeing the selection." },
        { question: "What counts as a corporate in this selection?", answer: "The page is intended for larger-company research, but no employee threshold or inventory count is confirmed here. Ask how the size band is defined and sourced, and request a dated count. For company-level account research across sizes, compare the Company or B2B database." },
        { question: "Can I request several contacts at the same company?", answer: "This page is department-oriented. Ask which functions and number of contacts per account can be supplied, and confirm the returned counting unit and sample before purchase." },
        { question: "Can I filter by seniority?", answer: "Ask whether CXO, VP/GM or manager levels are available for your selected departments, and confirm how those levels are defined." },
        { question: "Can I request MNC subsidiaries in India?", answer: "Include the parent/subsidiary criteria, industry and city in your brief. Ask how entities are identified and request a matching sample and dated count." },
      ],
      pricingNote: "Request a written quote for the agreed employee threshold, departments, contact count, fields and locations. Confirm the counting unit and total price.",
      related: [
        L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
        L("HR Professionals Database", "hr-human-resources-database-india"),
        L("General & Senior Managers Database", "general-senior-managers-database-india"),
        L("Company Database", "company-database-india"),
        L("Company MD, Chairman & Secretary Database", "company-md-chairman-secretary-database-india"),
        L("IT Companies Database", "it-companies-database-india"),
      ],
      disclaimer: `Work-context contact data for lawful B2B outreach to professionals in their business role.${dnd} Any person can request removal at any time.`,
      formTitle: "Ask About a Corporate Data Sample",
      bands: [
        "Ask which HR, IT, finance or procurement fields are available for your target segment.",
        "Confirm the number of departments and contacts counted for each account.",
        "Request a dated sample and count for the agreed employee threshold.",
      ],
      footerTitle: "Discuss a Department-Oriented Company Selection",
    },
    { subjects: "corporate decision-maker", kind: "people" }
  ),
} satisfies CategoryContent;
