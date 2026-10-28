import { Banknote, Building2, Filter, Layers, Megaphone, ShieldCheck, ShoppingBag, Target, Truck, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "b2b-b2c-companies-database",
    keyword: "Companies by customer model India",
    title: "B2B & B2C Companies Database India",
    metaDescription: "Discuss company-level B2B, B2C/D2C and hybrid customer-model selections in India. Confirm the classification method, fields and coverage for your brief.",
    eyebrow: "Companies by Customer Model",
    h1: "B2B / B2C Companies Database: Company Customer Models",
    answer: "This product is intended to help buyers discuss company-level selections by whether a business sells to other businesses, consumers, or both. Ask how those labels are defined and sourced, and confirm the fields and coverage for your chosen segment.",
    intro: [
      "Customer model is one way to describe a company, alongside industry, size and location. A company may use several sales channels, so the label should be checked against a stated classification method rather than inferred from its industry alone.",
      "This page concerns organisations and their business model. It is not a database of individual consumers. Request the field list, classification basis, observation date and a sample for your target market before deciding whether the selection fits your use.",
    ],
    highlights: [
      { icon: Building2, title: "Company-Level Selection", description: "Discuss organisations, not individual consumer profiles." },
      { icon: Filter, title: "Customer-Model Criteria", description: "Ask how B2B, B2C/D2C and hybrid labels are defined." },
      { icon: Layers, title: "Business Context", description: "Review the requested industry, size and location fields." },
      { icon: ShieldCheck, title: "Illustrative Preview", description: "Public rows are fictional and do not confirm inventory." },
    ],
    dataFields: [
      "Company name (illustrative)",
      "Customer model: B2B / B2C-D2C / hybrid (illustrative)",
      "Industry and company-size band (confirm availability)",
      "Contact role and designation (confirm availability)",
      "Business phone and email (masked/example in public sample)",
      "City, state and website (confirm availability)",
    ],
    sections: [
      { heading: "Define the company model you need", paragraphs: [
        "Describe whether your brief concerns companies selling to businesses, consumers or both. Ask for the rule used to classify mixed business models and the source and observation date behind any recorded label.",
        "A sample can show a proposed column layout, but a fictional row does not establish that a real company or classification is present in current inventory."
      ]},
      { heading: "Keep company data separate from consumer profiles", paragraphs: [
        "The intended record is an organisation. This page does not describe an individual-consumer list. If you need company-level accounts, use the selection fields agreed for the business, its industry and its location."
      ]},
    ],
    useCases: [
      "Discuss company-model segments for a B2B service brief",
      "Compare possible B2B, B2C/D2C or hybrid account criteria",
      "Review industry and location filters for business accounts",
    ],
    faqs: [
      { question: "Is this a database of individual consumers?", answer: "No. The product is intended for company-level customer-model classification; it does not describe a list of individual consumers." },
      { question: "How are B2B, B2C/D2C and hybrid labels assigned?", answer: "Ask for the classification criteria, source and observation date. Do not infer a company’s model from its industry alone." },
      { question: "Can I combine model, industry and location filters?", answer: "Ask which field combinations are available for your requested segment and confirm them against a dated sample and written field list." },
      { question: "Does the public CSV show current inventory?", answer: "No. Its rows are fictional examples of a possible format and do not verify available companies or fields." },
    ],
    related: ["b2b-database-india", "company-database-india", "corporate-database-india"],
  },
  landing: categoryLanding(
    {
      slug: "b2b-b2c-companies-database",
      name: "B2B & B2C Companies Database",
      title: "B2B & B2C Companies Database India | Companies by Customer Model",
      metaDescription: "Discuss Indian companies by customer model—B2B, B2C/D2C or hybrid—alongside industry, size and location. Confirm the classification basis and available fields against a dated sample.",
      eyebrow: "By Customer Model",
      h1: "B2B & B2C Companies Database: Companies by Who They Sell To",
      lead: "Discuss a company-level selection by customer model—B2B, B2C/D2C or hybrid. Ask how each label is defined and sourced, and confirm that model, industry, size and location fields are available for your requested segment.",
      segmentSummary: "Customer model is a different selection question from industry or legal form. This page is intended to compare companies that sell mainly to businesses, consumers or both. The label may depend on a company’s products and channels; request the classification rules, source, observation date and sample before relying on a segment.",
      segmentCards: [
        { icon: Building2, title: "B2B Companies", description: "Companies that sell mainly to other businesses." },
        { icon: ShoppingBag, title: "B2C & D2C Companies", description: "Brands and businesses selling to consumers." },
        { icon: Layers, title: "Hybrid B2B + B2C Companies", description: "Companies selling to both, such as manufacturers with retail brands." },
      ],
      segmentTabs: { heading: "Pick the customer model", tabs: [
        T("b2b", "B2B Sellers", "Manufacturers, distributors, IT services and industrial firms.", ["Sales Head", "Marketing Head", "MD", "Business Development"], "CRM, lead generation, trade finance, sales hiring."),
        T("b2c", "B2C & D2C Brands", "Consumer brands, retailers, e-commerce and services.", ["Founder", "Marketing Head", "E-commerce Head", "Customer Experience"], "Performance marketing, payments, logistics, support tools."),
        T("hybrid", "Hybrid", "Companies with both business and consumer channels.", ["CEO", "Channel Head", "Marketing Head", "Sales Head"], "Omnichannel software, distribution, agencies."),
      ] },
      coverage: { heading: "Coverage by customer model", label: "Customer model", rows: [
        ["B2B", "Sell to businesses"], ["B2C / D2C", "Sell to consumers"], ["Hybrid", "Both channels"],
      ] },
      dataFields: ["Company name", "Customer model (B2B / B2C / hybrid)", "Industry", "Company size band", "Decision-maker name and designation", "Business phone and email", "City, state", "Website"],
      sample: "b2bB2cCompany",
      useCases: [
        { icon: Megaphone, title: "Performance Marketing Agencies", description: "Find B2C and D2C brands that buy consumer ads." },
        { icon: Target, title: "B2B Sales Tools", description: "Find B2B companies that need CRM and lead generation." },
        { icon: Banknote, title: "Payments & Checkout", description: "Reach B2C businesses taking consumer payments." },
        { icon: Truck, title: "Fulfilment & Logistics", description: "Offer last-mile delivery to D2C brands." },
      ],
      faqs: [
        { question: "Can I identify companies selling online?", answer: "Ask whether an e-commerce or marketplace field is available for your selected segment, how it is sourced, and when it was observed. Review a matching sample before relying on the label." },
        { question: "Which industries may include B2C companies?", answer: "Retail, food and beverage, personal care, fashion, consumer electronics, education and healthcare services are examples to discuss. Industry alone does not prove a company’s customer model; confirm the classification rules against a sample." },
        { question: "How is this different from the B2B database?", answer: "The B2B database lists businesses as buyers for your outreach. This page classifies companies by their own customers (B2B, B2C or both), so you match your offer to their business model." },
        { question: "How is the customer model assigned?", answer: "Ask for the classification criteria, source information and observation date. Do not assume a company’s industry or legal form establishes whom it sells to." },
        { question: "Can I request D2C brands only?", answer: "Describe the D2C criteria you need. Ask whether those fields are available, how they are defined and what the dated count is for that selection." },
        { question: "Can I combine customer model with industry and city?", answer: "Ask which combinations are supported for the selected segment and confirm the matching fields and count in writing." },
      ],
      pricingNote: "Priced by customer model, industry and fields.",
      related: [L("B2B Database", "b2b-database-india"), L("Company Database", "company-database-india"), L("Industry-Wise Company Database", "industry-wise-company-database-india"), L("Media Planning Companies Database", "media-planning-companies-database-india"), L("Company Proprietors Database", "company-proprietors-database-india"), L("Corporate Database", "corporate-database-india")],
      disclaimer: legal,
      formTitle: "Ask About a B2B / B2C Company Sample",
      bands: ["Ask whether D2C criteria are available for your target locations.", "Confirm model labels and industry combinations against a sample.", "Request a dated count for the companies in your brief."],
      footerTitle: "Reach Companies by Who They Sell To",
    },
    { subjects: "B2B and B2C company", kind: "business" }
  ),
} satisfies CategoryContent;
