import { Cpu, Gem, Landmark, Laptop, Package, Store, Truck } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-26", hubCities: ["Noida", "Ghaziabad", "Lucknow", "Kanpur", "Agra", "Meerut", "Varanasi", "Greater Noida", "Aligarh", "Moradabad"], moreCities: 15 },
  {
    slug: "uttar-pradesh",
    authoredFaqsOnly: true,
    showCoverageFigures: false,
    name: "Uttar Pradesh",
    h1: "UP Company Database: Noida, Kanpur Leather and Moradabad Brass",
    coverageHeading: "Business coverage by city and industrial cluster",
    coverageLabel: "City / cluster",
    guide: {
    "heading": "Choose a UP company database by business cluster",
    "intro": "Noida corporate accounts and a Kanpur leather shortlist need different fields. Specify the product, activity and address type so your sample reflects the buyer or supplier you want.",
    "sections": [
        {
            "heading": "Noida and Greater Noida: separate city and address roles",
            "paragraphs": [
                "An IT-services office in Noida is a different account from an electronics assembly site in Greater Noida. Name the city, sector or industrial locality and whether you need the head office, registered office or operating site.",
                "Use the existing Noida and Greater Noida city guides for a more focused brief. If your requirement includes the Yamuna Expressway or a YEIDA area, specify the named locality; do not assume every business along that corridor is inside either city selection."
            ]
        },
        {
            "heading": "Kanpur leather: specify the point in the value chain",
            "paragraphs": [
                "Separate leather processing, finished leather, saddlery, footwear components and finished goods. A chemicals supplier, packaging vendor and freight service will each need a different activity and business-role filter.",
                "Ask whether the unit address identifies the production location and whether nearby Unnao businesses should be included as a separate geography. A leather industry tag does not establish licences, certifications, environmental performance or export activity."
            ]
        },
        {
            "heading": "Moradabad brass and metal craft: define material and trade role",
            "paragraphs": [
                "Moradabad business requirements can involve brassware, other metal handicrafts, finishing operations, manufacturers or merchant exporters. Name the material, product family and business activity rather than requesting all handicraft businesses as one group.",
                "If you sell export services, request supporting export context separately from a product label. For component or finish suppliers, the workshop or unit activity can matter more than an exporter-office address."
            ]
        },
        {
            "heading": "Compare product clusters without mixing company and site counts",
            "paragraphs": [
                "A UP-wide export may contain registered companies, owner-run production firms and trade businesses. Define which legal forms are required; a business directory is broader than an MCA-only company list.",
                "Ask for distinct-business counts by city and cluster, a snapshot date and separate additional-contact totals. Keep unclassified activities visible instead of assuming that every record in Kanpur is leather or every record in Moradabad is brass."
            ]
        },
        {
            "heading": "Popular business lists for Uttar Pradesh",
            "paragraphs": [
                "For a UP selection, use GST database India for tax-registration context, MCA company database for incorporated-company or LLP identity, and Company database India for an account-level brief. Specify this state and the cities or clusters you need rather than assuming a national product page is already a filtered local file.",
                "Manufacturers database India helps define production and plant-address criteria. Dealers and distributors list India focuses on channel role and product sector. Importers exporters database India adds the trade-entity perspective where your local selection needs supported import or export context.",
                "For another regional selection, compare the Delhi business database and the Tamil Nadu business database. Keep the same activity, address type and counting unit when comparing territories, and check available fields for each selection."
            ]
        }
    ],
    "links": [
        {
            "text": "GST database India",
            "href": "/gst-database-india"
        },
        {
            "text": "MCA company database",
            "href": "/mca-company-database-india"
        },
        {
            "text": "Company database India",
            "href": "/company-database-india"
        },
        {
            "text": "Manufacturers database India",
            "href": "/manufacturer-database-india"
        },
        {
            "text": "Dealers and distributors list India",
            "href": "/dealers-distributors-database-india"
        },
        {
            "text": "Importers exporters database India",
            "href": "/importers-exporters-database-india"
        },
        {
            "text": "Delhi business database",
            "href": "/database/delhi"
        },
        {
            "text": "Gujarat company database",
            "href": "/database/gujarat"
        },
        {
            "text": "Karnataka business database",
            "href": "/database/karnataka"
        },
        {
            "text": "Maharashtra business database",
            "href": "/database/maharashtra"
        },
        {
            "text": "UP company database",
            "href": "/database/uttar-pradesh"
        },
        {
            "text": "Tamil Nadu business database",
            "href": "/database/tamil-nadu"
        }
    ]
},
    title: "UP Company Database by City & Cluster",
    metaDescription:
      "UP company database for Noida, Greater Noida, Kanpur leather and Moradabad brass. Compare city clusters and request a sample for your business selection.",
    lead:
      "Build a Uttar Pradesh shortlist around a corporate or production location, or a specific product cluster. Separate Noida and Greater Noida accounts from Kanpur leather, Moradabad metal craft and the trading or service businesses in other UP cities.",
    segmentSummary:
      "UP company database requirements often combine very different markets. Noida and Greater Noida support electronics, software and corporate accounts. Kanpur leather, Agra footwear, Moradabad brass and metal craft, Aligarh hardware and Varanasi textiles require product and process filters. Choose the cluster and business activity first, then confirm the contact fields available for that selection.",
    segmentCards: [
      { icon: Cpu, title: "Noida Electronics & IT", description: "Mobile and electronics manufacturers, IT firms and corporate offices across Noida, Greater Noida and the Expressway." },
      { icon: Gem, title: "Craft & Export Clusters", description: "Leather (Kanpur), footwear (Agra), brassware (Moradabad), locks (Aligarh), silk (Varanasi), glass (Firozabad)." },
      { icon: Store, title: "Trade & Services Hubs", description: "Distributors, traders and service firms in Lucknow, Ghaziabad, Meerut and Prayagraj." },
    ],
    cities: [
    {
        "city": "Noida", "href": "/database/uttar-pradesh/noida",
        "detail": "IT, electronics, services and corporate-office requirements"
    },
    {
        "city": "Greater Noida", "href": "/database/uttar-pradesh/greater-noida",
        "detail": "Industrial, electronics and production-site requirements"
    },
    {
        "city": "Kanpur",
        "detail": "Leather processing, leather goods and industrial trade"
    },
    {
        "city": "Moradabad",
        "detail": "Brass and other metal-handicraft production/trade"
    },
    {
        "city": "Agra",
        "detail": "Footwear and related component or trading businesses"
    },
    {
        "city": "Aligarh",
        "detail": "Locks, hardware and component requirements"
    },
    {
        "city": "Lucknow / Ghaziabad",
        "detail": "Separate city filters for services, distribution and engineering"
    }
],
    useCases: [
      { icon: Landmark, title: "MSME Credit Across UP", description: "Reach owners of trading and manufacturing MSMEs in Kanpur, Lucknow and Ghaziabad with working-capital and equipment-finance products." },
      { icon: Cpu, title: "Components for Noida Electronics", description: "Reach procurement teams at mobile and electronics assembly plants across Noida and Greater Noida." },
      { icon: Package, title: "Export Services for Craft Clusters", description: "Offer packaging, compliance and freight to brassware, leather and footwear exporters." },
      { icon: Laptop, title: "Office Tech in Noida's IT Parks", description: "Target admin, IT and HR heads at companies in Sector 62, 63, 125-136 and along the Expressway." },
      { icon: Truck, title: "Distribution Across Eastern UP", description: "Find stockists and wholesalers in Lucknow, Kanpur and Prayagraj for regional expansion." },
    ],
    faqs: [
  {
    "question": "Can I order Noida and Greater Noida as separate selections?",
    "answer": "Specify them as separate cities with the industry and address type needed in each. The existing city pages help distinguish office accounts from production-site requirements."
  },
  {
    "question": "What should I include in a Kanpur leather brief?",
    "answer": "Name the leather activity, product group and contact function your offer supports. State whether the order should include nearby Unnao units and ask for separate location subtotals."
  },
  {
    "question": "Does Moradabad data mean only brass manufacturers?",
    "answer": "Moradabad has several metal-craft and trading activities. Ask for the specific material and manufacturing or trading role you need, rather than assuming every record is a brass producer."
  },
  {
    "question": "Are all UP businesses incorporated companies?",
    "answer": "A broad UP business selection can include proprietorships, partnerships and incorporated entities. Request the legal forms and identifiers explicitly if your brief requires only companies or LLPs."
  },
  {
    "question": "Can I select Agra footwear or Aligarh hardware separately?",
    "answer": "Use city plus product/activity criteria for those clusters. Review matching sample labels so production units, traders and service businesses are kept distinct."
  }
],
    related: [
      L("Manufacturer Database", "manufacturer-database-india"),
      L("Importers & Exporters Database", "importers-exporters-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
      L("Government Employees Database", "government-employees-database-india"),
      L("Dealers & Distributors Database", "dealers-distributors-database-india"),
      L("B2B Database India", "b2b-database-india"),
    ],
    cityPages: [
      { label: "Noida Company Database", href: "/database/uttar-pradesh/noida" },
      { label: "Greater Noida Company Database", href: "/database/uttar-pradesh/greater-noida" },
    ],
    bands: [
      "Want only Noida's corporate offices, or a single craft cluster? Ask for a targeted sample.",
      "Selling export services to Moradabad, Agra or Kanpur? We filter by product cluster.",
      "Get Uttar Pradesh sample rows for your exact cities and industries.",
    ],
  }
);
