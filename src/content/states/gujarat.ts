import { Factory, FlaskConical, Gem, Landmark, Package, Shirt } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-28", hubCities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Jamnagar", "Gandhinagar", "Bhavnagar", "Anand", "Morbi", "Bharuch"], moreCities: 15 },
  {
    slug: "gujarat",
    authoredFaqsOnly: true,
    showCoverageFigures: false,
    name: "Gujarat",
    h1: "Gujarat Company Database by City & Industrial Cluster",
    coverageHeading: "Gujarat company coverage and city-wise record counts",
    coverageLabel: "City",
    guide: {
    "heading": "Choose Gujarat companies by city and industrial activity",
    "intro": "Surat textiles, Rajkot engineering and Ahmedabad pharma need different company criteria and buying roles. Build each city segment around what your product supports, then compare samples and counts using the same record definition.",
    "sections": [
        {
            "heading": "Surat textiles: separate mills, processors and traders",
            "paragraphs": [
                "For a textile brief, distinguish weaving, processing, embroidery and fabric trading. A yarn seller, textile machinery supplier and freight provider will each need a different shortlist even within Surat. Include the product category and whether you need a factory address or a trading office.",
                "Keep diamond processing and trading outside a textile-only selection. If you need an industrial-estate filter such as Sachin, request it explicitly and confirm which selected addresses carry that estate label."
            ]
        },
        {
            "heading": "Rajkot engineering: target the manufacturing process",
            "paragraphs": [
                "Rajkot engineering requirements can cover machine tools, castings, forging and auto components. Name the process or product family first; an industrial consumables seller may need purchase and maintenance contacts, while a subcontracting brief may need an owner or production manager.",
                "Request product context in the sample so a general machinery trader is not treated as a precision-component manufacturer. Keep Jamnagar brass-component requirements separate unless your order deliberately includes that city."
            ]
        },
        {
            "heading": "Ahmedabad pharma: specify the business type",
            "paragraphs": [
                "An Ahmedabad pharma brief should distinguish manufacturing, pharmaceutical trading and related service businesses. Describe whether your offer supports raw materials, packaging, laboratory work, plant equipment or business operations, and ask which corresponding role fields are available.",
                "Do not infer manufacturing licences, certifications or production capacity from a company name or industry tag. For a broader Gujarat chemical order, request Vapi, Ankleshwar, Bharuch and Vadodara as individually named city selections."
            ]
        },
        {
            "heading": "Compare city-wise counts without adding overlapping segments",
            "paragraphs": [
                "City-wise inventory figures need a dated export using a consistent business-count definition. Request a dated export summary listing Surat, Rajkot, Ahmedabad and every additional city in your brief, with distinct-company totals and contact totals separated.",
                "Use one location rule across the order, such as registered office or operating site. A company with offices in more than one city can appear in several city selections, so ask for the deduplicated Gujarat total alongside the individual city counts. Government industry statistics describe the market and are not the size of this provider dataset."
            ]
        },
        {
            "heading": "Popular business lists for Gujarat",
            "paragraphs": [
                "For a Gujarat selection, use GST database India for tax-registration context, MCA company database for incorporated-company or LLP identity, and Company database India for an account-level brief. Specify this state and the cities or clusters you need rather than assuming a national product page is already a filtered local file.",
                "Manufacturers database India helps define production and plant-address criteria. Dealers and distributors list India focuses on channel role and product sector. Importers exporters database India adds the trade-entity perspective where your local selection needs supported import or export context.",
                "For another regional selection, compare the Maharashtra business database and the Delhi business database. Keep the same activity, address type and counting unit when comparing territories, and check available fields for each selection."
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
    title: "Gujarat Company Database by City",
    metaDescription:
      "Gujarat company database for Surat textiles, Rajkot engineering and Ahmedabad pharma. Compare city segments and request dated counts and a sample.",
    lead:
      "Gujarat is India's MSME manufacturing powerhouse. Reach textile mills in Surat, chemical units in Vapi and Ankleshwar, ceramic makers in Morbi and engineering firms in Rajkot, filtered by cluster.",
    segmentSummary:
      "Gujarat buyers cluster by product. Surat means synthetic textiles and diamond processing. Morbi produces most of India's ceramic tiles. The Golden Corridor of Vapi, Ankleshwar and Bharuch is chemicals and dyes, and Rajkot and Jamnagar make machine parts and brass components. Ahmedabad adds pharma, textiles and a large trading community. Choose your clusters, and the list follows them.",
    segmentCards: [
      { icon: Shirt, title: "Textiles & Diamonds", description: "Weaving, processing and trading units in Surat and Ahmedabad, plus diamond cutting and trading houses." },
      { icon: FlaskConical, title: "Chemicals & Pharma", description: "Dyes, specialty chemicals and API makers along Vapi, Ankleshwar, Bharuch and Ahmedabad." },
      { icon: Factory, title: "Ceramics & Engineering", description: "Morbi tile and sanitaryware makers, Rajkot engineering and Jamnagar brass-part manufacturers." },
    ],
    cities: [
      {
            "city": "Surat",
            "detail": "Textile weaving, processing and trading; diamonds as a separate sector"
      },
      {
            "city": "Rajkot",
            "detail": "Engineering, machine tools, castings and auto components"
      },
      {
            "city": "Ahmedabad",
            "detail": "Pharmaceuticals, textiles, engineering and trading"
      },
      {
            "city": "Vadodara",
            "detail": "Chemical, engineering and electrical-equipment businesses"
      },
      {
            "city": "Morbi",
            "detail": "Ceramic tiles and sanitaryware"
      },
      {
            "city": "Vapi",
            "detail": "Chemical and industrial businesses"
      },
      {
            "city": "Ankleshwar",
            "detail": "Chemical, dye and pharmaceutical requirements"
      },
      {
            "city": "Bharuch",
            "detail": "Chemical and process-industry requirements"
      }
],
    useCases: [
      { icon: Gem, title: "Diamond & Jewellery Trade Services", description: "Offer software, insurance, logistics and finance to diamond processors and traders around Surat's Varachha and Mahidhar Pura." },
      { icon: FlaskConical, title: "Chemical Raw Materials & Services", description: "Pitch raw materials, effluent treatment and lab equipment to units across the Golden Corridor." },
      { icon: Shirt, title: "Textile Machinery & Yarn", description: "Reach weavers and processors in Surat and Ahmedabad with machinery, spares and yarn supply." },
      { icon: Package, title: "Packaging for Morbi Exporters", description: "Offer cartons, pallets and export logistics to tile manufacturers shipping overseas." },
      { icon: Landmark, title: "MSME Finance & Insurance", description: "Gujarat MSMEs borrow heavily for working capital. Approach owners directly with loan and insurance products." },
    ],
    faqs: [
  {
    "question": "Can Surat textile firms be separated from diamond businesses?",
    "answer": "Select Surat together with the textile activity you need, such as weaving, processing or fabric trade. Diamond processing and trading should remain outside a textile-only brief."
  },
  {
    "question": "Which activities belong in a Rajkot engineering brief?",
    "answer": "Name the relevant process or product family, such as castings, machine tools or auto components. Ask whether the sample distinguishes producers from machinery traders."
  },
  {
    "question": "How should I select Ahmedabad pharmaceutical businesses?",
    "answer": "Specify manufacturing, pharmaceutical trade or related services and the contact function relevant to your offer. A pharma tag alone does not identify a production plant or a licensed product capability."
  },
  {
    "question": "Should Vapi and Ankleshwar be combined in one city selection?",
    "answer": "Request Vapi and Ankleshwar separately when comparing locations or allocating territories. They can be combined in an export after the business-count and overlap rules are agreed."
  },
  {
    "question": "How are Gujarat businesses with sites in several cities counted?",
    "answer": "Agree whether the selection counts legal entities or operating sites. A business appearing in both Ahmedabad and Surat requires a deduplication rule before the city subtotals can form a state total."
  }
],
    related: [
      L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
      L("Manufacturer Database", "manufacturer-database-india"),
      L("Importers & Exporters Database", "importers-exporters-database-india"),
      L("Fabric & Clothing Stores Database", "fabric-clothing-stores-database-india"),
      L("Gems & Jewellery Shops Database", "gems-jewellery-shops-database-india"),
      L("B2B Database India", "b2b-database-india"),
    ],
    bands: [
      "Selling to one cluster only, such as Morbi ceramics or Surat textiles? Ask for a cluster sample.",
      "Need chemical plant heads along the Golden Corridor? We filter by GIDC estate.",
      "Get Gujarat sample rows for your exact clusters and roles.",
    ],
  }
);
