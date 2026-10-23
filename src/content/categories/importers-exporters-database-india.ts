import { BadgeCheck, Banknote, FileText, Globe, Handshake, Laptop, MapPinned, Network, Truck } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-23",
  keyword: {
    slug: "importers-exporters-database-india",
    keyword: "importers and exporters database India",
    title: "Importers & Exporters Database India | IEC",
    metaDescription:
      "Importers and exporters database for India - IEC-holding companies by product, port and city. For freight forwarders, CHA agents and trade services.",
    eyebrow: "Importers & Exporters Database",
    h1: "Importers & Exporters Database India - Reach Active Trading Companies",
    answer:
      "An importers and exporters database is a list of Indian companies engaged in international trade, typically holding an Import Export Code (IEC) from DGFT, filtered by product category, trade direction and city. It is used by freight forwarders, customs brokers, logistics firms, packaging suppliers and trade-finance providers. IndiaB2BData.com supplies importer and exporter contacts across India's major trade hubs.",
    intro: [
      "Every company that moves goods across borders needs freight, customs clearance, packaging, warehousing, insurance and trade finance. That makes importers and exporters one of the most valuable B2B segments in India, with repeat, high-value business for anyone who serves them.",
      "They're also hard to find with a general business list. A \"manufacturing company\" may never have shipped abroad, while a small trading firm in Surat might export every week. Without trade-specific data, sales teams waste time on businesses that will never need their service.",
      "Our importers and exporters database focuses on trading companies, segmented by product category, trade direction and city. Your team talks only to businesses that actually ship goods, whether you sell freight, compliance, finance or packaging.",
      "For an import-buyer-only brief, explore the importers database. Specify the products and business roles you need, and confirm the basis of the recorded trade direction in a matching sample."
    ],
    contentLinks: [
      {
        text: "importers database",
        href: "/importers-database-india"
      }
    ],
    highlights: [
      { icon: Globe, title: "Active Trading Companies", description: "Businesses engaged in import and export activity." },
      { icon: FileText, title: "IEC-Linked Records", description: "Companies holding an Import Export Code." },
      { icon: Network, title: "By Product Category", description: "Filter by the goods a company trades in." },
      { icon: MapPinned, title: "Port & City Coverage", description: "Mumbai, Chennai, Mundra, Kolkata, Delhi NCR and more." },
    ],
    dataFields: [
      "Company name and IEC-linked details, where available",
      "Contact person name and designation",
      "Mobile number and email address",
      "Product category / HS code group traded",
      "Trade direction: importer, exporter or both",
      "Company address, city, state and pincode",
    ],
    sections: [
      {
        heading: "Who Counts as an Importer or Exporter in India?",
        paragraphs: [
          "Any Indian business that imports or exports goods needs an Import Export Code (IEC), a 10-digit number issued by the Directorate General of Foreign Trade (DGFT). The IEC is linked to the company's PAN and is required for customs clearance, shipping and foreign exchange transactions.",
          "IEC holders range from large manufacturers and merchant exporters to small trading firms, e-commerce sellers shipping abroad and service companies importing equipment. Our database lets you filter this wide group down to the product categories and trade hubs that matter to you.",
        ],
      },
      {
        heading: "How Logistics and Trade Service Companies Use This Data",
        paragraphs: [
          "Freight forwarders and shipping lines use exporter lists to find new shippers on their strongest trade lanes. Customs brokers and CHA agents target importers near the ports and ICDs they operate from, such as JNPT, Mundra, Chennai, Kolkata and Tughlakabad.",
          "Trade finance, forex, cargo insurance and export consulting firms use the same data to reach businesses at the moment they need working capital or compliance help. Packaging, warehousing and 3PL providers target exporters by product category.",
        ],
      },
    ],
    useCases: [
      "Freight forwarders and shipping lines finding new shippers",
      "Customs brokers and CHA agents building a client base",
      "Trade finance, forex and cargo insurance outreach",
      "Packaging, warehousing and 3PL service sales",
      "Export consultants and DGFT/compliance advisors",
      "Overseas buyers sourcing Indian suppliers",
    ],
    faqs: [
      {
        question: "What is an IEC code?",
        answer: "An Import Export Code is a 10-digit number issued by DGFT that Indian businesses need to import or export goods. Our database focuses on IEC-holding companies.",
      },
      {
        question: "Can I get only exporters or only importers?",
        answer: "Yes. Lists can be filtered by trade direction, as well as by product category and city.",
      },
      {
        question: "Can I filter by product or HS code?",
        answer: "Yes. Tell us the product category or HS code group you're targeting, such as textiles, engineering goods, chemicals or agri products, and we'll build a matching list.",
      },
      {
        question: "How much does an importers and exporters database cost?",
        answer:
          "Packages start at ₹2,999 for up to 5,000 records in one city, and ₹8,999 for up to 25,000 records across 5 cities or states. Pan-India or product-specific lists are custom-quoted.",
      },
      {
        question: "Who uses an importers and exporters database?",
        answer: "Freight forwarders, customs brokers, logistics companies, trade-finance providers, packaging suppliers and export promotion consultants.",
      },
      {
        question: "Is a free sample available?",
        answer: "Yes. Every enquiry includes 15–20 free sample records so you can check quality first.",
      },
    ],
    related: [
      "manufacturer-database-india",
      "mobile-accessories-shops-database-india",
      "apparel-garments-exporters-database-india",
      "dealers-distributors-database-india",
      "gst-database-india",
      "industry-wise-company-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "importers-exporters-database-india",
      name: "Importers & Exporters Database",
      title: "Importers & Exporters Database India | IEC Holder Trade Houses",
      metaDescription: "Importers and exporters database for India: IEC-holding businesses active in foreign trade, by trade direction, product and state, with owner and export-import contacts. For trade services. Sample rows on the page.",
      eyebrow: "IEC Holders & Trade Houses",
      h1: "Importers & Exporters Database: India's IEC-Holding Trade Businesses",
      lead: "Businesses that hold an Import Export Code and trade across borders, tagged by direction (import, export or both), product and state. Built for companies selling services to traders.",
      segmentSummary: "Every Indian business that imports or exports needs an IEC, the 10-character code issued by DGFT. This database is built around IEC holders: trade houses, merchant exporters and manufacturer-exporters. They all buy the same services: freight, customs, export credit, insurance, certification and trade advisory. Use it when you sell to traders, whichever direction they ship.",
      segmentCards: [
        { icon: BadgeCheck, title: "IEC Holders", description: "Businesses registered with DGFT for foreign trade." },
        { icon: Globe, title: "Trade Direction", description: "Tagged as importer, exporter or both, so you can target the side your service fits." },
        { icon: Handshake, title: "Merchant & Manufacturer-Exporters", description: "Separate trading houses from manufacturers who export their own goods." },
      ],
      segmentTabs: { heading: "Choose the trade direction", tabs: [
        T("export", "Exporters", "Businesses shipping goods abroad, often eligible for export incentives and export credit.", ["Owner", "Export Manager", "Documentation Head", "CFO"], "Export credit, ECGC-style insurance, certification, freight."),
        T("import", "Importers", "Businesses bringing goods in, which need customs clearance, duties planning and forex.", ["Owner", "Import Manager", "Purchase Head", "Finance Manager"], "Customs brokers, forex, trade finance."),
        T("both", "Two-Way Traders", "Trade houses that both import and export, with bigger compliance and logistics needs.", ["Director", "Logistics Head", "Compliance Manager", "CFO"], "Trade-compliance software, 3PL, advisory firms."),
      ] },
      coverage: { heading: "Coverage by trade profile", label: "Trade profile", rows: [
        ["Merchant exporters", "Trading houses exporting sourced goods"], ["Manufacturer-exporters", "Factories exporting their own goods"], ["Importers", "Businesses buying from abroad"], ["Two-way traders", "Import and export"],
      ] },
      dataFields: ["Business name", "IEC, where available", "Trade direction (import / export / both)", "Main product categories", "Contact person and designation", "Business phone and email", "City, state, pincode", "Website, where available"],
      sample: "trade",
      useCases: [
        { icon: Truck, title: "Freight Forwarding & CHA", description: "Reach traders by product and state for export and import shipments." },
        { icon: Banknote, title: "Export Credit & Forex", description: "Offer pre-shipment credit, forex hedging and receivables finance to exporters." },
        { icon: BadgeCheck, title: "Certification & Compliance", description: "Pitch export certifications, licensing and DGFT advisory." },
        { icon: Laptop, title: "Trade Software", description: "Sell documentation, compliance and freight-booking software to active traders." },
      ],
      faqs: [
        { question: "Can I filter exporters by product?", answer: "Yes. Exporters are tagged by main product categories, from engineering goods and chemicals to spices, textiles and handicrafts." },
        { question: "Do you cover export houses in SEZs?", answer: "Yes. Units in SEZs and EOUs are flagged where recorded, which suits service providers that specialise in SEZ compliance." },
        { question: "What is an IEC?", answer: "The Import Export Code is a 10-character code issued by DGFT, now linked to the business PAN. A business needs one to import or export goods." },
        { question: "How is this different from the Importers database?", answer: "The Importers database is organised around what businesses buy from abroad. This page covers IEC holders in both directions, for services sold to traders." },
        { question: "Can I get exporters only?", answer: "Yes. Filter by trade direction to get exporters, importers or two-way traders." },
        { question: "Is there a garment-specific list?", answer: "Yes. For apparel, use the Apparel & Garments Exporters database, which has garment-specific fields." },
      ],
      pricingNote: "Priced by trade direction, product category and fields.",
      related: [L("Importers Database", "importers-database-india"), L("Apparel & Garments Exporters Database", "apparel-garments-exporters-database-india"), L("Logistics Service Providers Database", "logistics-management-service-providers-database-india"), L("Manufacturer Database", "manufacturer-database-india"), L("Chartered Accountants Database", "chartered-accountants-database-india"), L("MCA Company Database", "mca-company-database-india")],
      disclaimer: legal,
      formTitle: "Get a Free Importers & Exporters Sample",
      bands: ["Selling to exporters only? Ask for a direction-filtered sample.", "Need traders of one product category? We filter by product.", "Get IEC-holder samples for your service."],
      footerTitle: "Reach India's Trade Businesses",
    },
    { subjects: "IEC holder", kind: "business" }
  ),
} satisfies CategoryContent;
