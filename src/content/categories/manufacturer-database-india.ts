import { Factory, FileSearch, MapPinned, Network, Package, ShieldCheck, Truck, Users, Wrench } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: by product category and plant location. */
export default {
  template: "landing",
  updated: "2026-10-22",
  keyword: {
    slug: "manufacturer-database-india",
    keyword: "manufacturer database India",
    title: "Manufacturer Database India | Factories & Units",
    metaDescription:
      "A verified manufacturer database across India - factories and production units by industry and city. Built for suppliers, buyers and B2B vendors.",
    eyebrow: "Manufacturer Database India",
    h1: "Manufacturer Database India - Factories & Production Units",
    answer:
      "A manufacturer database lists factories and production units across India, filtered by industry and city, used by suppliers looking to sell raw materials or machinery, and by buyers sourcing manufactured goods. IndiaB2BData.com's manufacturer database covers manufacturing hubs across 700+ cities.",
    intro: [
      "Manufacturing is its own world - raw material and machinery suppliers need to reach factories directly, and buyers sourcing products need to find the right production units. A general business list rarely segments this cleanly.",
      "Our manufacturer database is filtered specifically to manufacturing and production companies, by industry and city, so you can reach the right factories without wading through unrelated business types.",
      "For equipment sales, distribution or servicing businesses, compare the machinery suppliers and services database. Describe the machinery categories and business roles you need.",
      "For a company-level prospecting brief rather than a factory-location list, explore the manufacturing companies database. Specify sectors, products and the business contact roles you need."
    ],
    contentLinks: [
      {
        text: "machinery suppliers and services database",
        href: "/machinery-suppliers-services-database-india"
      },
      {
        text: "manufacturing companies database",
        href: "/manufacturing-companies-database-india"
      }
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
        answer: "Yes - city and cluster filters can be applied to target known manufacturing hubs.",
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
    related: [
      "dealers-distributors-database-india",
      "building-material-database-india",
      "apparel-garments-exporters-database-india",
      "agents-database-india",
      "importers-exporters-database-india",
      "industry-wise-company-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "manufacturer-database-india",
      name: "Manufacturer Database",
      title: "Manufacturer Database India | Manufacturers by Product & Plant Location",
      metaDescription:
        "Manufacturer database for India organised by product category and plant location: auto parts, chemicals, textiles, food, electrical, plastics and more, with owners, plant heads and purchase managers. Sample rows on the page.",
      eyebrow: "Manufacturers by Product",
      h1: "Manufacturer Database India: Find Makers by Product & Plant",
      lead:
        "Find manufacturers by what they make and where their plants are. Reach owners, plant heads and purchase managers for supply, sourcing, machinery and services.",
      segmentSummary:
        "Buyers of manufacturer data usually fall into two groups. Sourcing teams look for who makes a product. Sellers to factories want plants that consume their product, such as raw materials, machinery, packaging or maintenance. Both need the product category and the plant location rather than just a head-office address. This database tags each manufacturer by product line and operating unit, and keeps manufacturers separate from traders who only resell.",
      segmentCards: [
        { icon: Package, title: "By Product Category", description: "Tagged by what the plant actually makes, from auto parts and castings to snacks and plastics." },
        { icon: Factory, title: "Plant Locations", description: "Operating units in MIDC, GIDC, SIPCOT and other industrial areas, not just HQ addresses." },
        { icon: Users, title: "Plant & Purchase Contacts", description: "Owners, plant heads and purchase managers: the people who buy for the factory." },
      ],
      segmentTabs: {
        heading: "Two ways buyers use manufacturer data",
        tabs: [
          { id: "sell", label: "Selling to Factories", summary: "Find plants that consume your product or service, filtered by the product they make and the industrial area they operate in.", examples: ["Plant Head","Purchase Manager","Maintenance Manager","Owner"], bestFor: "Raw materials, machinery, packaging, MRO and safety." },
          { id: "source", label: "Sourcing from Factories", summary: "Find manufacturers of a product to request quotes, qualify new suppliers or build a vendor shortlist.", examples: ["Owner","Sales Head","Export Manager","Marketing Manager"], bestFor: "Procurement teams, importers, private-label brands." },
          { id: "cluster", label: "Cluster Targeting", summary: "Indian manufacturing is clustered. Go deep into one hub instead of going wide across India.", examples: ["Ludhiana (hosiery, cycles)","Rajkot (engineering)","Coimbatore (pumps)","Morbi (ceramics)"], bestFor: "Field sales teams and regional distributors." },
        ],
      },
      coverage: {
        heading: "Coverage by product category",
        label: "Product category",
        rows: [
          ["Auto & engineering components", "Castings, forgings, machined parts"],
          ["Chemicals & pharma", "Specialty chemicals, dyes, APIs"],
          ["Textiles & apparel", "Yarn, fabric, processing, garments"],
          ["Food & beverage", "Processing, packaged foods, beverages"],
          ["Electrical & electronics", "Cables, switchgear, components"],
          ["Plastics, rubber & packaging", "Moulded parts, films, corrugation"],
        ],
      },
      dataFields: [
        "Manufacturer name",
        "Product category and main products",
        "Plant / operating-unit address",
        "Industrial area, city, state",
        "Contact person and designation",
        "Business mobile number",
        "Business email ID",
        "Website, where available",
      ],
      sample: "trade",
      useCases: [
        { icon: Truck, title: "Raw Material Supply", description: "Find plants that consume your material, such as steel, polymers, chemicals or yarn, by product category." },
        { icon: Wrench, title: "Machinery & Maintenance", description: "Reach plant heads with machinery, spares, automation and AMC services." },
        { icon: Package, title: "Packaging Suppliers", description: "Target manufacturers whose products ship in your kind of packaging." },
        { icon: FileSearch, title: "Sourcing & Vendor Discovery", description: "Find manufacturers of a product to request quotes or develop new suppliers." },
      ],
      faqs: [
        { question: "Can I find manufacturers that export?", answer: "Yes. Manufacturers with recorded export activity are flagged. Combine that flag with product category and cluster to build an export-focused supplier or prospect list." },
        { question: "Do you separate manufacturers from traders?", answer: "Yes. Records are tagged by business activity, so you get companies that make products, not resellers. Ask for traders separately if you need them." },
        { question: "Do you give plant addresses or head offices?", answer: "Plant and operating-unit addresses wherever they are recorded. That is the key difference for field sales and service visits." },
        { question: "Can I filter by industrial area?", answer: "Yes. Filter by MIDC, GIDC, SIPCOT or other industrial estates and pincodes, combined with product category." },
        { question: "How is this different from the Manufacturing Companies database?", answer: "This page is organised around products and plants for sourcing and supply. The Manufacturing Companies database is company-level, for corporate and account-based selling to manufacturers." },
      ],
      pricingNote: "Priced by product category, location and fields. Plant-level contacts in niche categories cost more per record.",
      related: [
        L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
        L("Machinery Suppliers Database", "machinery-suppliers-services-database-india"),
        L("Metals & Minerals Industries Database", "metals-minerals-industries-database-india"),
        L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
        L("Importers & Exporters Database", "importers-exporters-database-india"),
        L("Industry-Wise Company Database", "industry-wise-company-database-india"),
      ],
      disclaimer: `Business contact data for lawful B2B outreach to manufacturers.${dnd} Any business can request removal at any time.`,
      formTitle: "Get a Free Manufacturer Sample",
      bands: [
        "Looking for makers of one product, or plants that use your material? Tell us which.",
        "Need plant-level contacts in specific industrial areas? We filter by estate.",
        "Get a sample of manufacturers in your category.",
      ],
      footerTitle: "Find the Manufacturers You Need",
    },
    { subjects: "manufacturer", kind: "business" }
  ),
} satisfies CategoryContent;
