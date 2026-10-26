import { Factory, FlaskConical, Gem, Landmark, Package, Shirt } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-26", hubCities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Jamnagar", "Gandhinagar", "Bhavnagar", "Anand", "Morbi", "Bharuch"], moreCities: 15 },
  {
    slug: "gujarat",
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
                        "Verified city-wise dataset counts are still awaiting supply; each row currently shows availability on request. Request a dated export summary listing Surat, Rajkot, Ahmedabad and every additional city in your brief, with distinct-company totals and contact totals separated.",
                        "Use one location rule across the order, such as registered office or operating site. A company with offices in more than one city can appear in several city selections, so ask for the deduplicated Gujarat total alongside the individual city counts. Government industry statistics describe the market and are not the size of this provider dataset."
                  ]
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
      {"question":"Where can I see Gujarat city-wise company counts?","answer":"The coverage table lists Gujarat city segments, with counts on request until verified figures are supplied. Ask for a dated breakdown for Surat, Rajkot, Ahmedabad and the other cities you select, and confirm whether each figure counts companies, sites or individual contacts."},
      {"question":"Can I order Ahmedabad pharmaceutical companies separately?","answer":"Specify Ahmedabad plus the pharmaceutical business activities and contact roles you need. Ask for a matching sample that distinguishes manufacturers, traders and service firms, with availability and counts confirmed for those exact filters."},
      { question: "Do you cover GIDC industrial estates?", answer: "Yes. Units in GIDC estates such as Naroda, Vatva, Sachin, Ankleshwar, Vapi and Dahej are covered, and you can filter by estate or pincode." },
      { question: "Can I get Rajkot engineering and auto-part makers only?", answer: "Yes. Rajkot's casting, forging, machine-tool and auto-component makers can be bought on their own, with or without nearby Jamnagar brass-part units." },
      { question: "Can I target only Morbi ceramic manufacturers?", answer: "Yes. Filter by city and industry to get only tile, sanitaryware and ceramic businesses in Morbi and nearby Wankaner." },
      { question: "Do you cover the chemical belt from Vapi to Ankleshwar?", answer: "Yes. Chemical, dye and pharma units across Vapi, Ankleshwar, Bharuch, Dahej and Vadodara are covered and tagged by product category." },
      { question: "Is Surat data split between textiles and diamonds?", answer: "Yes. Surat businesses are tagged by industry, so you can buy textile weavers and traders separately from diamond processors." },
      { question: "Are Gujarati exporters included?", answer: "Yes. Exporters can be flagged where their records show export activity. For IEC-based lists, see our Importers & Exporters database." },
    ],
    related: [
      L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
      L("Manufacturer Database", "manufacturer-database-india"),
      L("Importers & Exporters Database", "importers-exporters-database-india"),
      L("Fabric & Clothing Stores Database", "fabric-clothing-stores-database-india"),
      L("Gems & Jewellery Shops Database", "gems-jewellery-shops-database-india"),
      L("Machinery Suppliers Database", "machinery-suppliers-services-database-india"),
    ],
    bands: [
      "Selling to one cluster only, such as Morbi ceramics or Surat textiles? Ask for a cluster sample.",
      "Need chemical plant heads along the Golden Corridor? We filter by GIDC estate.",
      "Get Gujarat sample rows for your exact clusters and roles.",
    ],
  }
);
