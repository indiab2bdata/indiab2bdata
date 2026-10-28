import { Anchor, Banknote, FileText, Filter, Globe, MapPinned, Package, ShieldCheck, Truck, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "importers-database-india",
    keyword: "Importers Database India",
    title: "Importers Database India",
    metaDescription: "Explore importers database options in India. Specify product categories, business roles, locations and contact fields, then request a sample and quote.",
    eyebrow: "Importers Database",
    h1: "Importers Database in India",
    answer: "An importers database helps you shortlist Indian businesses identified as buyers of goods from overseas, with available company, product-category and contact details. Share the products, business roles and locations relevant to your offer so we can check matching coverage and sample options.",
    intro: [
      "A business importing industrial components needs a different introduction from one sourcing finished consumer goods. Start with the product category and the service you provide, whether that is overseas supply, freight, warehousing or packaging.",
      "Specify import-buying businesses in your brief. Ask how trade direction and product categories are identified so an exporter-only business or a general distributor does not get treated as an import prospect without supporting context.",
      "For a combined trade audience, compare the importers and exporters database. For domestic channel partners, explore the dealers and distributors database and name your product category.",
      "For provider partnerships rather than import-buying businesses, explore the logistics service providers database. Specify the freight, transport or warehousing services relevant to your brief."
    ],
    contentLinks: [
      {
        text: "importers and exporters database",
        href: "/importers-exporters-database-india"
      },
      {
        text: "dealers and distributors database",
        href: "/dealers-distributors-database-india"
      },
      {
        text: "manufacturer database",
        href: "/manufacturer-database-india"
      },
      {
        text: "home, garden and pet suppliers database",
        href: "/home-garden-pets-suppliers-database-india"
      },
      {
        text: "company proprietors database",
        href: "/company-proprietors-database-india"
      },
      {
        text: "database directory",
        href: "/database"
      },
      {
        text: "logistics service providers database",
        href: "/logistics-management-service-providers-database-india"
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: "Import-Focused Brief",
        description: "Specify businesses buying from overseas rather than an undifferentiated trade list."
      },
      {
        icon: Filter,
        title: "Product-Category Fit",
        description: "Describe the goods and business roles relevant to your offer."
      },
      {
        icon: MapPinned,
        title: "Relevant Business Locations",
        description: "Check the company locations your sales or service team can cover."
      },
      {
        icon: FileText,
        title: "Review the Trade Context",
        description: "Ask how import activity and categories are recorded in a matching sample."
      }
    ],
    dataFields: [
      "Company or trading business name",
      "Recorded trade role and product category",
      "Contact person and designation, where available",
      "Business phone number and email, where available",
      "Business address, city, state and pincode",
      "Website, where available"
    ],
    sections: [
      {
        heading: "Choose the import business you want to approach",
        paragraphs: [
          "Describe both the goods and the role the business plays. A manufacturer sourcing components and a distributor buying finished products may need different support."
        ],
        subsections: [
          {
            heading: "Industrial inputs and components",
            text: "For suppliers and service providers working with businesses sourcing materials, parts or equipment. Ask whether the product and business-role fields support your requirement."
          },
          {
            heading: "Finished products and distribution",
            text: "For briefs involving imported goods intended for onward sale. Name the product categories and distribution relationship you want to discuss."
          },
          {
            heading: "Import-related business services",
            text: "For freight, storage, packaging and other relevant trade services. Explain the operational need your offer addresses and the contact role you want to reach."
          }
        ]
      },
      {
        heading: "Keep product fit and trade activity separate",
        paragraphs: [
          "A product-category match alone does not establish current import activity. Ask what supports the trade classification, when it was recorded and whether the selected records contain enough context for your campaign.",
          "For production businesses, compare the manufacturer database. For a household, gardening or pet-product brief, explore the home, garden and pet suppliers database and confirm import activity separately from the product range."
        ]
      },
      {
        heading: "Plan introductions around your service area",
        paragraphs: [
          "Share the company locations and business roles you need. A business address does not identify its shipping routes or ports, so ask which location and trade fields are actually available.",
          "For a broader owner-led prospecting brief, compare the company proprietors database. Use the database directory to find adjacent categories where your offer serves a different trade relationship."
        ]
      },
      {
        heading: "Review a matching importer sample",
        paragraphs: [
          "Send your product categories, import-buyer requirements, target locations, contact roles and approximate quantity. Ask about classification details, field completeness, available records, format, delivery timing and pricing.",
          "The public CSV uses fictional, masked business examples to show the layout. It is not a shipment-history export. Confirm current buying requirements, product specifications and commercial terms directly with each business."
        ]
      }
    ],
    useCasesIntro: "Give each introduction a clear connection to the importer’s recorded product category and business role.",
    useCases: [
      "Introduce overseas product and component supply",
      "Discuss freight forwarding and logistics services",
      "Offer warehousing and business packaging solutions",
      "Explore import distribution partnerships",
      "Invite relevant trading businesses to product demonstrations"
    ],
    faqs: [
      {
        question: "How is this different from the importers and exporters database?",
        answer: "This page focuses on an import-buyer requirement. The combined category supports a broader trade brief. Specify trade direction and confirm how it is identified in the available records."
      },
      {
        question: "Can I select importers by product category?",
        answer: "Share the goods and business roles you need. Ask which product labels are recorded and confirm a matching sample before selecting a segment."
      },
      {
        question: "Does a listing prove recent shipments or current buying interest?",
        answer: "No. Ask about the basis and date of the trade classification. Confirm recent activity, product requirements and buying interest directly with the business."
      },
      {
        question: "Does the file include shipment values or trade documents?",
        answer: "Do not assume those fields are included. This page concerns business contact enquiries; request a field list and review the actual sample against your brief."
      },
      {
        question: "How do I request a sample and price?",
        answer: "Request a written quote for the agreed selection, locations, fields and volume. Confirm the counting unit, total price and delivery terms before purchase."
      }
    ],
    related: [
      "importers-exporters-database-india",
      "dealers-distributors-database-india",
      "manufacturer-database-india",
      "home-garden-pets-suppliers-database-india",
      "company-proprietors-database-india"
    ],
    showTestimonials: true,
    cta: {
      heroTitle: "Find Import Businesses That Fit Your Offer",
      heroSubtitle: "Share your product categories, business roles and target cities. Ask for a matching sample and quote.",
      buttonLabel: "Request Importer Sample",
      text: "Supplying goods or supporting imports? Tell us which products, business roles and locations matter to your brief.",
      footerTitle: "Build Your Importer Business Shortlist",
      footerText: "Send your import-buyer criteria, target locations, required fields and approximate quantity. We will confirm available coverage, sample options and pricing."
    }
  },
  landing: categoryLanding(
    {
      slug: "importers-database-india",
      name: "Importers Database",
      title: "Importers Database India | Buyers of Imported Goods by Product",
      metaDescription: "Importers database for India: businesses that import goods, filtered by product category, HS chapter and port city, with owner and purchase contacts. For overseas suppliers, freight and customs services. Sample rows on the page.",
      eyebrow: "Import-Side Buyers",
      h1: "Importers Database India: Who Buys What from Abroad",
      lead: "Indian businesses that import, organised by the products they bring in. Reach owners and purchase heads if you supply goods from overseas or sell freight, customs or trade-finance services.",
      segmentSummary: "Importers are buyers first. An Indian company importing machinery parts from Germany or electronics components from China already has a supplier, and it is open to a better one. This database is organised around what each business imports, by product category and HS chapter, so overseas suppliers, sourcing agents, freight forwarders and customs brokers reach importers of their exact product.",
      segmentCards: [
        { icon: Package, title: "By Imported Product", description: "Tagged by product category and HS chapter, from electronics and machinery to chemicals and food." },
        { icon: Anchor, title: "Port & City", description: "Filter by city and nearest port cluster, such as Nhava Sheva, Mundra, Chennai or ICD Delhi." },
        { icon: Users, title: "Purchase Contacts", description: "Owners, import managers and purchase heads who choose suppliers." },
      ],
      segmentTabs: { heading: "Who uses importer data", tabs: [
        T("suppliers", "Overseas Suppliers", "Manufacturers and traders abroad looking for Indian buyers of their product category.", ["Owner", "Import Manager", "Purchase Head", "Director"], "Foreign manufacturers, export agents, sourcing companies."),
        T("logistics", "Freight & Customs", "Service providers handling inbound shipments, filtered by port and import volume.", ["Logistics Manager", "Owner", "Accounts Head", "Operations Head"], "Freight forwarders, customs brokers, CFS operators."),
        T("finance", "Trade Finance", "Businesses paying overseas suppliers, which need LCs, forex and import finance.", ["CFO", "Finance Manager", "Owner", "Treasury"], "Banks, forex providers, trade-finance fintechs."),
      ] },
      coverage: { heading: "Coverage by imported product", label: "Product category", rows: [
        ["Electronics & components", "Consumer electronics, ICs, parts"], ["Machinery & equipment", "Industrial machines, spares"], ["Chemicals & plastics", "Raw materials, polymers"],
        ["Textiles & fabrics", "Yarn, fabric, trims"], ["Food & agri products", "Edible oils, dry fruits, pulses"],
      ] },
      dataFields: ["Importer name", "Imported product category / HS chapter", "Contact person and designation", "Business mobile number", "Business email ID", "City, state and port cluster", "IEC, where available", "Website, where available"],
      sample: "importerBusiness",
      useCases: [
        { icon: Globe, title: "Find Indian Buyers Abroad", description: "Overseas manufacturers can reach Indian importers already buying their category." },
        { icon: Truck, title: "Inbound Freight & Customs", description: "Forwarders and CHAs can target importers by port and product." },
        { icon: Banknote, title: "LCs, Forex & Import Finance", description: "Banks and fintechs can reach businesses paying foreign suppliers." },
        { icon: ShieldCheck, title: "Cargo Insurance & Compliance", description: "Offer marine insurance, BIS and import-licence advisory to the right importers." },
      ],
      faqs: [
        { question: "Can I target importers from a specific country of origin?", answer: "Where recorded, yes. Importers buying mainly from China, Germany, the US or the Middle East can be targeted, which suits overseas suppliers." },
        { question: "How is this different from the Importers & Exporters database?", answer: "This page covers businesses on the import side, organised by what they buy. The Importers & Exporters database covers IEC-holding trade houses that do both, for trade services sold to either side." },
        { question: "Can I filter by HS code?", answer: "Yes, by HS chapter or product category. Tell us your product and we map it to the matching categories." },
        { question: "Can I filter by port?", answer: "Yes. Filter by city and nearest port or ICD cluster, which suits freight forwarders and customs brokers." },
        { question: "Do you show import volumes or values?", answer: "No. We list importers and their product categories, not shipment values." },
      ],
      pricingNote: "Priced by product category, location and fields. Narrow HS chapters cost more per record than broad categories.",
      related: [L("Importers & Exporters Database", "importers-exporters-database-india"), L("Apparel & Garments Exporters Database", "apparel-garments-exporters-database-india"), L("Logistics Service Providers Database", "logistics-management-service-providers-database-india"), L("Dealers & Distributors Database", "dealers-distributors-database-india"), L("Manufacturer Database", "manufacturer-database-india"), L("GST Database", "gst-database-india")],
      disclaimer: legal,
      formTitle: "Get a Free Importers Sample",
      bands: ["Supplying one product category? Ask for importers of that category only.", "Freight forwarder or CHA? We filter importers by port cluster.", "Get importer samples for your product."],
      footerTitle: "Reach Indian Importers of Your Product",
    },
    { subjects: "importer", kind: "business", notIncluded: "It lists importers and their product categories, not shipment volumes or values." }
  ),
} satisfies CategoryContent;
