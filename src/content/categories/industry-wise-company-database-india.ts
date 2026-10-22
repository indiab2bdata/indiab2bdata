import { FileSearch, Filter, Layers, ListChecks, MapPinned, Megaphone, Network, Package, Target } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: browse and buy by industry taxonomy. */
export default {
  template: "landing",
  updated: "2026-10-22",
  keyword: {
    slug: "industry-wise-company-database-india",
    keyword: "industry wise company database India",
    title: "Industry Wise Company Database India | 500+ Sectors",
    metaDescription:
      "A company database segmented by industry - 500+ sectors across India. Filter by real estate, EdTech, finance, manufacturing, healthcare and more.",
    eyebrow: "Industry Wise Company Database India",
    h1: "Industry Wise Company Database India - 500+ Sectors Covered",
    answer:
      "An industry-wise company database segments companies by sector or business category, letting you target one specific industry instead of a generic mixed list. IndiaB2BData.com covers 500+ industry segments, from real estate and EdTech to finance, manufacturing and healthcare.",
    intro: [
      "A campaign built for the finance sector rarely works if half the list is manufacturing companies. Industry-wise segmentation means your list is built around one specific sector from the start, not filtered down after the fact.",
      "We classify companies into 500+ industry categories, so you can pick exactly the sector - or combination of sectors - most relevant to your product or service before a single record is delivered.",
    ],
    highlights: [
      { icon: Filter, title: "500+ Industry Segments", description: "Fine-grained categories, not broad buckets." },
      { icon: Network, title: "Sector-Specific Lists", description: "Built around one industry from the start." },
      { icon: ListChecks, title: "Combine Categories", description: "Target more than one related sector at once." },
      { icon: Target, title: "Higher Relevance", description: "Less filtering needed once the list arrives." },
    ],
    useCases: [
      "Running a campaign targeted at a single industry",
      "Comparing opportunity across multiple sectors",
      "Building sector-specific sales playbooks",
      "Researching competitor density within an industry",
    ],
    faqs: [
      {
        question: "How many industries are covered?",
        answer: "Over 500 industry categories, spanning real estate, EdTech, finance, manufacturing, healthcare, e-commerce and more.",
      },
      {
        question: "Can I combine more than one industry in a single order?",
        answer: "Yes - tell us the combination of sectors you need and we'll build a matching list.",
      },
      {
        question: "Can I also filter by city within an industry?",
        answer: "Yes, industry and location filters can be combined in the same order.",
      },
      {
        question: "What if my industry isn't a standard category?",
        answer: "Share your specific niche and we'll build a custom segment for you.",
      },
    ],
    related: [
      "manufacturer-database-india",
      "architect-interior-designers-database-india",
      "advocates-lawyers-database-india",
      "doctors-database",
      "school-colleges-database",
      "dealers-distributors-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "industry-wise-company-database-india",
      name: "Industry-Wise Company Database",
      title: "Industry-Wise Company Database India | Company Lists by Sector",
      metaDescription:
        "Industry-wise company database for India: buy company lists by sector and sub-industry, such as manufacturing, IT, healthcare, real estate, logistics, education and retail. Compare sectors and preview sample rows on the page.",
      eyebrow: "Sector-Wise Company Lists",
      h1: "Industry-Wise Company Database: Pick Your Sectors",
      lead:
        "Choose sectors and sub-industries, from auto components to private hospitals to logistics, and get only the companies in them. Mix several industries into one file, each clearly tagged.",
      segmentSummary:
        "Many sellers serve a handful of verticals and want nothing outside them. This database is organised around an industry taxonomy, with broad sectors broken into sub-industries, so a packaging supplier can buy food processing and pharma, and an ERP vendor can buy auto components and textiles, each tagged so results can be compared by vertical. If you sell to one specific category, our specialist pages go deeper.",
      segmentCards: [
        { icon: Layers, title: "Sector + Sub-Industry", description: "Broad sectors broken into specific sub-industries, so you buy textiles processing rather than \"manufacturing\"." },
        { icon: Filter, title: "Mix Verticals in One File", description: "Combine several industries and keep each one tagged for campaign reporting." },
        { icon: MapPinned, title: "Sector Clusters by Region", description: "Pair an industry with its hub cities, such as auto in Pune and Chennai or textiles in Surat and Tiruppur." },
      ],
      segmentTabs: {
        heading: "Popular sector combinations",
        tabs: [
          { id: "industrial", label: "Industrial Bundle", summary: "Manufacturing sub-industries that share suppliers: engineering, auto components, plastics and electricals.", examples: ["Auto components","Castings & forgings","Plastics","Electricals"], bestFor: "Machinery, MRO supplies, industrial software." },
          { id: "services", label: "Services Bundle", summary: "Knowledge and service businesses with office-based buyers: IT, consulting, staffing and finance.", examples: ["IT services","Consulting","Staffing","Financial services"], bestFor: "Workspace, HR tech, corporate travel." },
          { id: "consumer", label: "Consumer-Facing Bundle", summary: "Businesses that sell to consumers through stores and outlets: retail, hospitality, healthcare clinics and education.", examples: ["Retail chains","Hotels & restaurants","Clinics","Coaching institutes"], bestFor: "POS, payments, local marketing and supplies." },
        ],
      },
      coverage: {
        heading: "Coverage by sector",
        label: "Sector",
        rows: [
          ["Manufacturing", "Auto, engineering, chemicals, textiles, food"],
          ["IT & Technology", "IT services, software, hardware"],
          ["Healthcare", "Hospitals, clinics, pharma, diagnostics"],
          ["Real Estate & Construction", "Developers, contractors, materials"],
          ["Logistics & Trade", "Transport, warehousing, distributors"],
          ["Education", "Schools, colleges, institutes"],
          ["Retail & Hospitality", "Stores, hotels, restaurants"],
        ],
      },
      dataFields: [
        "Company name",
        "Sector and sub-industry tag",
        "Contact person and designation",
        "Business mobile number",
        "Business email ID",
        "Address, city, state, pincode",
        "Company size band, where recorded",
        "Website, where available",
      ],
      sample: "business",
      useCases: [
        { icon: Layers, title: "Vertical SaaS Go-to-Market", description: "Launch into one or two verticals with a list of every company in them, tagged by sub-industry." },
        { icon: Package, title: "Industrial Suppliers", description: "Packaging, chemicals and component suppliers can buy only the industries that use their products." },
        { icon: FileSearch, title: "Vertical Comparison", description: "Run the same campaign on three sectors and double down where conversion is best." },
        { icon: Megaphone, title: "Trade Shows & Associations", description: "Invite every company in a sector to an expo, webinar or association drive." },
      ],
      faqs: [
        { question: "Can you exclude industries I don't serve?", answer: "Yes. Exclusions work like inclusions: name the sectors or sub-industries to leave out, such as trading firms within a manufacturing pull, and they are removed before the count is quoted." },
        { question: "How many industries can I combine?", answer: "As many as you need. Each record carries its sector and sub-industry tag, so a mixed file can still be split for reporting." },
        { question: "How do you classify industries?", answer: "Each company is tagged with a broad sector and a specific sub-industry based on its primary business activity. Tell us your own vertical names and we'll map ours to them." },
        { question: "When should I use a specialist page instead?", answer: "If you sell to a single category, such as manufacturers, IT companies or doctors, the specialist database is deeper and has category-specific fields. Use this page for multi-vertical lists." },
        { question: "Can I pair industries with cities?", answer: "Yes. Industry and location filters combine, for example auto components in Pune and Chennai, or textiles in Surat, Tiruppur and Ludhiana." },
      ],
      pricingNote: "Priced by sector, fields and volume. Niche sub-industries can cost more per record than broad sectors.",
      related: [
        L("Manufacturer Database", "manufacturer-database-india"),
        L("IT Companies Database", "it-companies-database-india"),
        L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
        L("Logistics Service Providers Database", "logistics-management-service-providers-database-india"),
        L("Educational Institutes Database", "educational-institutes-database-india"),
        L("Company Database", "company-database-india"),
      ],
      disclaimer: `Company and business-contact data for lawful B2B outreach.${dnd} Any business can request removal at any time.`,
      formTitle: "Get a Free Industry-Wise Sample",
      bands: [
        "Comparing two or three verticals? Ask for a split sample tagged by sector.",
        "Need a sector in specific hub cities only? We combine industry and location.",
        "Get a sample for the industries you sell to.",
      ],
      footerTitle: "Tell Us Which Industries You Sell To",
    },
    { subjects: "industry-tagged company", kind: "business" }
  ),
} satisfies CategoryContent;
