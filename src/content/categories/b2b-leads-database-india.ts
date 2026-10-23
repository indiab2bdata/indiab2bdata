import { BadgeCheck, Headphones, Mail, Megaphone, Network, Phone, Target, TrendingUp, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: campaign-ready decision-maker contacts. */
export default {
  template: "landing",
  updated: "2026-10-22",
  keyword: {
    slug: "b2b-leads-database-india",
    keyword: "B2B leads database India",
    title: "B2B Leads Database India | Decision-Maker Contacts",
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
      { icon: BadgeCheck, title: "Checked for Outreach", description: "Checked and deduplicated before delivery." },
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
    { subjects: "B2B lead", kind: "people", notIncluded: "These are contact leads, not intent or inbound leads, so no record says a business is in the market for your product." }
  ),
} satisfies CategoryContent;
