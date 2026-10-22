import { Banknote, Building2, Filter, Layers, Megaphone, ShieldCheck, ShoppingBag, Target, Truck, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-23",
  keyword: {
    slug: "b2b-b2c-companies-database",
    keyword: "B2B and B2C database India",
    title: "B2B & B2C Companies Database India",
    metaDescription:
      "One provider for B2B company contacts and B2C consumer data in India. Filter by city, industry, income band or interest. Verified. Free sample.",
    eyebrow: "B2B & B2C Companies Database",
    h1: "B2B & B2C Database India - Company Contacts and Consumer Data in One Place",
    answer:
      "A B2B database lists businesses and their decision-makers; a B2C database lists individual consumers. Many Indian brands sell to both: a company that supplies dealers also runs consumer campaigns. IndiaB2BData.com supplies both types of data, verified and deduplicated, filtered by city, industry, income band or interest.",
    intro: [
      "Most growing businesses in India don't sell to just one kind of customer. A solar installer pitches housing societies and factories. An insurance agency targets salaried individuals and small business owners. A software company sells to firms but also runs a consumer app. Using two separate data vendors for this means two sets of quality standards, two invoices and two ways of formatting files.",
      "Our B2B and B2C database brings both into one order. Company records come with business name, category, GST details and decision-maker contacts. Consumer records come with city, pincode and, where available, profile filters such as age band, income band or interest. Both are deduplicated before delivery.",
    ],
    highlights: [
      { icon: Building2, title: "B2B Company Records", description: "Companies, owners and decision-makers by industry." },
      { icon: Users, title: "B2C Consumer Data", description: "Individuals by city, pincode, income band and interest." },
      { icon: Filter, title: "One Set of Filters", description: "Same city, state and pincode targeting for both." },
      { icon: ShieldCheck, title: "Deduplicated Records", description: "Duplicates removed before delivery." },
    ],
    dataFields: [
      "B2B: company name, industry and business type",
      "B2B: owner or decision-maker name and designation",
      "B2C: consumer name, city, state and pincode",
      "Mobile number",
      "Email address, where available",
      "Profile filters such as income band or interest, where available",
    ],
    sections: [
      {
        heading: "B2B vs B2C Data: What's the Difference?",
        paragraphs: [
          "B2B data is about organisations. Each record is a business: a manufacturer, a dealer, a clinic or a software firm, along with the person who makes buying decisions there. It is used for cold calling, account-based marketing, channel partner hunting and enterprise sales.",
          "B2C data is about people. Each record is an individual consumer, typically with location and profile details. It is used for product launches, local promotions, insurance and loan campaigns, real estate projects and app installs. The sales cycle is shorter, the volumes are larger and the message has to be simpler.",
        ],
      },
      {
        heading: "When You Need Both",
        paragraphs: [
          "Brands that sell through dealers but also advertise to end buyers need both lists for the same city at the same time. So do real estate developers (channel partners plus home buyers), financial services firms (business loans plus personal loans) and education companies (institutions plus students).",
          "Ordering both from one provider keeps your targeting consistent. If you're launching in Pune, you get Pune companies and Pune consumers built on the same city and pincode filters, delivered in the same file format, ready for one CRM import.",
        ],
      },
      {
        heading: "Using Consumer Data Responsibly",
        paragraphs: [
          "Consumer outreach in India is governed by TRAI's commercial communication rules and the Digital Personal Data Protection Act, 2023. Check numbers against the DND registry before promotional outreach, and include a clear opt-out in every message.",
          "Keep campaigns relevant to the audience you've filtered for, avoid excessive frequency and stop contacting anyone who asks you to. Good practice protects your sender reputation as much as it protects the people you're reaching.",
        ],
      },
    ],
    useCases: [
      "Brands selling to both dealers and end consumers",
      "Real estate launches targeting channel partners and home buyers",
      "Insurance, loan and credit card campaigns",
      "City launches for D2C and app-based businesses",
      "Local promotions for retail, gyms, salons and restaurants",
      "Lead generation agencies serving mixed client portfolios",
    ],
    faqs: [
      {
        question: "What is a B2B and B2C database?",
        answer:
          "It's a combined data product: B2B records list businesses and their decision-makers, while B2C records list individual consumers. Both can be filtered by city, state and pincode, and ordered together.",
      },
      {
        question: "Can I order only B2C consumer data?",
        answer: "Yes. You can order B2B only, B2C only or a mix of both for the same locations.",
      },
      {
        question: "What filters are available for consumer data?",
        answer:
          "City, state and pincode are always available. Depending on the segment, profile filters such as age band, income band, vehicle ownership or interest can also be applied.",
      },
      {
        question: "How much does a B2B and B2C database cost?",
        answer:
          "Packages start at ₹2,999 for up to 5,000 records in one city, and ₹8,999 for up to 25,000 records across 5 cities or states. Larger or multi-segment lists are custom-quoted.",
      },
      {
        question: "Do I need to check consumer numbers against DND?",
        answer: "Yes. Before calling or sending promotional messages, check numbers against the DND (NCPR) registry and follow TRAI's commercial-communication rules.",
      },
      {
        question: "Can I get a free sample?",
        answer: "Yes. Every enquiry includes 15–20 free sample records before you place an order.",
      },
    ],
    related: [
      "b2b-database-india",
      "cab-users-database-india",
      "beauty-parlours-salons-spa-database-india",
      "car-owners-database",
      "job-seekers-database",
      "mobile-number-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "b2b-b2c-companies-database",
      name: "B2B & B2C Companies Database",
      title: "B2B & B2C Companies Database India | Companies by Customer Model",
      metaDescription: "Indian companies classified by customer model: B2B (sell to businesses), B2C (sell to consumers) or both, by industry, size and city. Target companies whose customers match your offer. Sample rows on the page.",
      eyebrow: "By Customer Model",
      h1: "B2B & B2C Companies Database: Companies by Who They Sell To",
      lead: "Companies tagged by their own customer model (B2B, B2C or both), so marketing agencies, payment providers and SaaS vendors reach companies whose business model matches their offer.",
      segmentSummary: "Who a company sells to decides what it buys. A B2C brand needs consumer ads, payment gateways, delivery and customer support. A B2B company needs CRM, lead generation, trade finance and sales hiring. This database classifies companies by their own customers, which no industry code captures, so a D2C-focused agency never pitches a steel trader and an ABM platform never pitches a bakery chain.",
      segmentCards: [
        { icon: Building2, title: "B2B Companies", description: "Companies that sell mainly to other businesses." },
        { icon: ShoppingBag, title: "B2C & D2C Companies", description: "Brands and businesses selling to consumers." },
        { icon: Layers, title: "Hybrid", description: "Companies selling to both, such as manufacturers with retail brands." },
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
      sample: "business",
      useCases: [
        { icon: Megaphone, title: "Performance Marketing Agencies", description: "Find B2C and D2C brands that buy consumer ads." },
        { icon: Target, title: "B2B Sales Tools", description: "Find B2B companies that need CRM and lead generation." },
        { icon: Banknote, title: "Payments & Checkout", description: "Reach B2C businesses taking consumer payments." },
        { icon: Truck, title: "Fulfilment & Logistics", description: "Offer last-mile delivery to D2C brands." },
      ],
      faqs: [
        { question: "Can I find companies selling online?", answer: "Yes, where recorded. Companies with their own e-commerce store or a marketplace presence are flagged, which suits D2C agencies and logistics providers." },
        { question: "Which industries are mostly B2C?", answer: "Retail, food and beverage, personal care, fashion, consumer electronics, education and healthcare services. Manufacturing, IT services, chemicals and logistics are mostly B2B." },
        { question: "How is this different from the B2B database?", answer: "The B2B database lists businesses as buyers for your outreach. This page classifies companies by their own customers (B2B, B2C or both), so you match your offer to their business model." },
        { question: "How do you decide the customer model?", answer: "From each company's primary business activity, products and sales channels. Hybrid companies are tagged as both." },
        { question: "Can I get D2C brands only?", answer: "Yes. Filter B2C, then narrow to brands selling online, where recorded." },
        { question: "Can I combine with industry and city?", answer: "Yes. Customer model combines with industry, size and location." },
      ],
      pricingNote: "Priced by customer model, industry and fields.",
      related: [L("B2B Database", "b2b-database-india"), L("Company Database", "company-database-india"), L("Industry-Wise Company Database", "industry-wise-company-database-india"), L("Media Planning Companies Database", "media-planning-companies-database-india"), L("Company Proprietors Database", "company-proprietors-database-india"), L("Corporate Database", "corporate-database-india")],
      disclaimer: legal,
      formTitle: "Get a Free B2B / B2C Sample",
      bands: ["Selling to D2C brands only? Ask for a B2C-filtered sample.", "Need B2B sellers in one industry? We combine model and sector.", "Get companies whose customers match your offer."],
      footerTitle: "Reach Companies by Who They Sell To",
    },
    { subjects: "B2B and B2C company", kind: "business" }
  ),
} satisfies CategoryContent;
