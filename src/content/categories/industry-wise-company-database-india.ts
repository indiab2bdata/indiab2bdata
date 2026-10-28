import { FileSearch, Filter, Layers, ListChecks, MapPinned, Megaphone, Network, Package, Target } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, dnd } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

/** Intent: browse and buy by industry taxonomy. */
export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "industry-wise-company-database-india",
    keyword: "industry wise company database India",
    title: "Industry-Wise Company Database India | Selection by Sector",
    metaDescription:
      "Discuss a company-record selection by sector or sub-industry. Ask which categories and locations are available and request a dated matching count.",
    eyebrow: "Industry Wise Company Database India",
    h1: "Industry-Wise Company Database India - Select by Sector",
    answer:
      "An industry-wise company selection groups records by sector or business category. Ask for the current category list, classification basis, available locations and dated count for your brief.",
    intro: [
      "A campaign built for the finance sector rarely works if half the list is manufacturing companies. Industry-wise segmentation means your list is built around one specific sector from the start, not filtered down after the fact.",
      "Specify the sector or sub-industry relevant to your product or service. Confirm which categories can be selected, whether multiple labels are available and how the records are classified.",
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
      title: "Industry-Wise Company Database India",
      metaDescription:
        "Discuss company records by sector and sub-industry. Ask which categories, fields and locations are currently available; the on-page rows are fictional format examples.",
      eyebrow: "Sector-Wise Company Lists",
      h1: "Industry-Wise Company Database: Pick Your Sectors",
      lead:
        "Name the sectors, sub-industries and locations you need. Ask which filters can be applied, whether multiple categories can appear in one file, and how any category labels are defined.",
      segmentSummary:
        "Industry can be a useful selection dimension when a buyer has a defined market. State the classification names you use, ask how the source maps them, and confirm whether a record can have multiple labels. Specialist pages on this site describe narrower audiences; confirm each page’s fields and coverage separately.",
      segmentCards: [
        { icon: Layers, title: "Sector + Sub-Industry", description: "Describe the level of classification you need and ask which categories are available." },
        { icon: Filter, title: "Multiple Categories", description: "Ask whether categories can be combined and how labels appear in the agreed file." },
        { icon: MapPinned, title: "Locations by Sector", description: "Name target cities and ask for category-specific coverage and counts." },
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
      sample: "industryCompany",
      useCases: [
        { icon: Layers, title: "Vertical SaaS Go-to-Market", description: "Compare selected verticals using sector and sub-industry fields that can be confirmed in a matching sample." },
        { icon: Package, title: "Industrial Suppliers", description: "Packaging, chemicals and component suppliers can buy only the industries that use their products." },
        { icon: FileSearch, title: "Vertical Comparison", description: "Run the same campaign on three sectors and double down where conversion is best." },
        { icon: Megaphone, title: "Trade Shows & Associations", description: "Build a shortlist for an expo, webinar or association drive using a defined sector brief." },
      ],
      faqs: [
        { question: "Can you exclude industries I don't serve?", answer: "Describe the sectors and exclusions in your brief. Ask whether those filters can be applied and request a dated count and sample showing how each company is classified." },
        { question: "How many industries can I combine?", answer: "List the sectors you want to combine. Confirm the available categories, how the source classifies them, and whether a record can have more than one label." },
        { question: "How do you classify industries?", answer: "Ask for the classification basis and examples for your selected sectors. If your team uses its own vertical names, confirm any mapping before purchase." },
        { question: "When should I use a specialist page instead?", answer: "If you need one category, compare the related page’s stated purpose and confirm its fields and coverage. Use this page to describe a multi-category brief, subject to availability." },
        { question: "Can I pair industries with cities?", answer: "Ask whether the requested industry and locations can be combined, and request a matching count before purchase." },
      ],
      pricingNote: "Request a written quote for the agreed categories, fields and volume. Confirm the counting unit, total price and delivery terms.",
      related: [
        L("Manufacturer Database", "manufacturer-database-india"),
        L("IT Companies Database", "it-companies-database-india"),
        L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
        L("Logistics Service Providers Database", "logistics-management-service-providers-database-india"),
        L("Educational Institutes Database", "educational-institutes-database-india"),
        L("Company Database", "company-database-india"),
      ],
      disclaimer: `Company and business-contact data for lawful B2B outreach.${dnd} Any business can request removal at any time.`,
      formTitle: "Ask About an Industry-Wise Sample",
      bands: [
        "Comparing several verticals? Ask whether a matching sample is available and how categories would be identified.",
        "Need a sector in specific cities? Ask whether those filters can be combined and request a dated count.",
        "Ask whether a sample is available for the industries in your brief.",
      ],
      footerTitle: "Tell Us Which Industries You Sell To",
    },
    { subjects: "industry-tagged company", kind: "business" }
  ),
} satisfies CategoryContent;
