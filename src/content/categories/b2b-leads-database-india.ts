import { BadgeCheck, Headphones, Mail, Megaphone, Network, Phone, Target, TrendingUp, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: campaign-ready decision-maker contacts. */
export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "b2b-leads-database-india",
    keyword: "B2B leads database India",
    title: "B2B Leads Database India | Contact-Level Selections",
    metaDescription:
      "A B2B leads database with decision-maker contacts across India - filtered by industry, designation and company size for outbound sales teams.",
    eyebrow: "B2B Leads Database India",
    h1: "B2B Leads Database India - Reach the Right Decision-Maker",
    answer:
      "A B2B leads database provides contact records for decision-makers at other businesses - filtered by industry, designation and company size - built specifically for outbound B2B sales rather than consumer marketing. IndiaB2BData.com's B2B leads database covers 500+ industries with designation-level filtering.",
    intro: [
      "Reaching a business isn't the same as reaching the person who can say yes. A B2B leads database is built around designation and role, not just a company's general contact number, so your outreach lands with someone who can actually make a decision.",
      "Combine that with industry and company-size filters and you get a list built specifically for a B2B sales motion - cold calling, LinkedIn/email outreach, or account-based selling.",
    ],
    highlights: [
      { icon: Users, title: "Decision-Maker Contacts", description: "Filtered toward relevant roles and designations." },
      { icon: Target, title: "Industry & Size Filters", description: "Built around your specific target segment." },
      { icon: BadgeCheck, title: "Checks to Confirm", description: "Ask which source, contact and duplicate checks apply to your selected segment." },
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
        answer: "Yes - records can be filtered toward specific roles or designations where available.",
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
    related: [
      "b2b-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
      "business-development-sales-professionals-database-india",
      "business-analysts-database-india",
      "domain-whois-database",
      "newly-registered-companies-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "b2b-leads-database-india",
      name: "B2B Leads Database",
      title: "B2B Leads Database India by Role",
      metaDescription:
        "Contact-level B2B selection for outbound teams by industry, role and location. Confirm which contact fields, coverage and file format are available for your brief; public sample rows are fictional.",
      eyebrow: "Campaign-Ready Leads",
      h1: "B2B Leads Database: Contact-Level Selections for Outbound Teams",
      lead:
        "A contact-level selection for teams that already know their target audience. Request the roles and contact fields you need, then confirm which are available and how complete they are in a dated matching sample. This is for outreach planning, not market research or buying-intent signals.",
      segmentSummary:
        "A leads selection is contact-oriented. Describe the roles, company types and locations you want, and confirm whether mobile, email and other requested fields are available for that segment. A contact record does not establish that a business is interested in buying; use the sample and field list to check fit before deciding how to use it.",
      segmentCards: [
        { icon: Phone, title: "Contact Fields to Confirm", description: "Ask which business phone and email fields are available for your chosen audience and review their completeness in a matching sample." },
        { icon: Target, title: "Decision-Maker Roles", description: "Owners, directors and functional heads, not general staff." },
        { icon: Network, title: "Format for Your Workflow", description: "Confirm the agreed file format and field order for your team's dialler, email or CRM workflow." },
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
          ["Tele-calling", "Request business phone, contact name and role"],
          ["Email campaigns", "Request business email, company and role"],
          ["WhatsApp business messaging", "Confirm applicable channel fields and use"],
          ["Field sales", "Ask whether address and pincode support the territory"],
        ],
      },
      dataFields: [
        "Contact name",
        "Designation / role",
        "Business phone number, where available",
        "Business email ID, where available",
        "Company name and industry",
        "City, state and pincode",
        "Campaign segment tag (illustrative; confirm availability)",
      ],
      sample: "b2bLead",
      useCases: [
        { icon: Headphones, title: "Tele-Calling Teams", description: "Load a dialler with role-filtered decision-makers and measure connect rate by segment." },
        { icon: Mail, title: "Cold Email Sequences", description: "Run segmented email sequences with consistent, CRM-ready fields." },
        { icon: Megaphone, title: "Event & Webinar Invites", description: "Fill seats by inviting the right roles in the right cities." },
        { icon: Users, title: "Agency Lead Generation", description: "Agencies running outbound for clients can buy lead batches segment by segment." },
      ],
      faqs: [
        { question: "How is a leads database different from a B2B database?", answer: "The B2B database is a broad business selection. The leads page focuses on contact-level filters for outreach; it does not indicate that a contact or business has buying intent. Confirm roles, channels and file fields for your segment." },
        { question: "Does a lead record show buying intent?", answer: "No. The page describes contact-level selection criteria, not buying intent or inbound enquiries. Confirm which contact fields and filters are available for your segment." },
        { question: "Can you format the file for my CRM or dialler?", answer: "Ask whether the agreed fields can be arranged for your CRM or dialler, and confirm the required format and field order in writing." },
        { question: "Can I request a batch selection?", answer: "Include the segment and volume in your brief. Ask whether a batch arrangement is available and confirm any update, repeat-order or freshness terms in writing." },
      ],
      pricingNote: "Request a written quote for the selected roles, locations, fields and volume; confirm the counting unit and total price.",
      related: [
        L("B2B Database", "b2b-database-india"),
        L("Mobile Number Database", "mobile-number-database-india"),
        L("Email Database", "email-database-india"),
        L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
        L("Business Development & Sales Professionals Database", "business-development-sales-professionals-database-india"),
        L("Company Proprietors Database", "company-proprietors-database-india"),
      ],
      disclaimer: `Contact-level fields for B2B outreach planning. Review published sourcing and usage terms and follow the rules that apply to your audience and channel.${dnd} Any person can request removal at any time.`,
      formTitle: "Ask About a Leads Sample",
      bands: [
        "Want to evaluate a segment? Ask whether a matching sample is available.",
        "Need a particular CRM or dialler format? Ask whether the fields can be supplied in that structure.",
        "Discuss contact-level fields for your next outreach brief.",
      ],
      footerTitle: "Start Your Next Outbound Campaign",
    },
    { subjects: "B2B lead", kind: "people", notIncluded: "These are contact leads, not intent or inbound leads, so no record says a business is in the market for your product." }
  ),
} satisfies CategoryContent;
