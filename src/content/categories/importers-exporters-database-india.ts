import { Building2 } from "lucide-react";
import type { CategoryContent, CustomPage } from "@/types/landing";

/** Dedicated buying guide: Importers & Exporters Database India. */
const custom = {
  "path": "/importers-exporters-database-india",
  "name": "Importers & Exporters Database India",
  "title": "Importers Exporters Database India",
  "metaDescription": "Explore Indian trade businesses by product, state and IEC context. Confirm available contact, HS-code and port evidence in a matching sample.",
  "eyebrow": "Importers & Exporters Database India",
  "h1": "Importers and Exporters Database India: Trade Businesses by Product and State",
  "lead": "Build a trade-business shortlist around the product, trade direction and evidence period you need. Distinguish an IEC-linked business identity from proof of recent shipments, and request documented port activity when a logistics corridor matters.",
  "image": {
    "src": "/images/keywords/city-skyline.jpg",
    "alt": "Illustrative business district",
    "width": 1600,
    "height": 900
  },
  "sampleProfile": "tradeEntity",
  "links": [
    {
      "text": "B2B database India",
      "href": "/b2b-database-india"
    },
    {
      "text": "manufacturers database",
      "href": "/manufacturer-database-india"
    },
    {
      "text": "company database",
      "href": "/company-database-india"
    },
    {
      "text": "DGFT portal",
      "href": "https://www.dgft.gov.in/"
    },
    {
      "text": "Department of Commerce NIRYAT dashboard",
      "href": "https://niryat.gov.in/"
    },
    {
      "text": "JNPA port information",
      "href": "https://www.jnport.gov.in/"
    },
    {
      "text": "Data Sourcing & Compliance",
      "href": "/data-sourcing-compliance"
    },
    {
      "text": "dealers and distributors database",
      "href": "/dealers-distributors-database-india"
    },
    {
      "text": "importers and exporters database",
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
  ],
  "blocks": [
    {
      "type": "prose",
      "heading": "What an IEC identifies",
      "paragraphs": [
        "IEC means Importer-Exporter Code. Under the PAN-based system it is a ten-character alphanumeric identity linked to the entity PAN, separately issued by DGFT following an application. Holding a PAN does not itself establish that a business has an issued IEC.",
        "An IEC record identifies the registered trade entity. It does not prove that the business shipped a particular product through a particular port last month. For recent trade activity, ask for a stated observation period and supporting shipment or transaction context where available; consult the DGFT portal for official IEC information."
      ]
    },
    {
      "type": "table",
      "heading": "Export-sector selections for a trade brief",
      "columns": [
        "Sector group",
        "Useful product detail",
        "Possible buyer requirement"
      ],
      "rows": [
        [
          "Engineering goods",
          "Component, machine, material or application",
          "Freight, packaging, testing or industrial supply"
        ],
        [
          "Petroleum products",
          "Precise commodity and business role",
          "Specialist logistics or industrial services"
        ],
        [
          "Electronic goods",
          "Finished products versus components",
          "Air/sea logistics, packaging or trade services"
        ],
        [
          "Drugs and pharmaceuticals",
          "Formulations, ingredients or business activity",
          "Specialist transport and documented product context"
        ],
        [
          "Gems and jewellery",
          "Product/material and trade function",
          "Security, finance or specialist logistics"
        ],
        [
          "Textiles and apparel",
          "Fibre, fabric, garment or production activity",
          "Trims, packing, sourcing or export support"
        ]
      ],
      "intro": "Engineering goods, petroleum, electronics, pharmaceuticals and gems/jewellery are prominent groups in official trade reporting. The Department of Commerce NIRYAT dashboard is a reference for market context, not the size of this dataset.",
      "note": "A sector label does not establish a current shipment, trade volume or product approval. Request exact product descriptions or HS-code context where supported."
    },
    {
      "type": "table",
      "heading": "Port-wise data: define the evidence before the filter",
      "columns": [
        "Port / gateway selection",
        "What the brief should name"
      ],
      "rows": [
        [
          "JNPA / Nhava Sheva",
          "Port/terminal identifier, product and period"
        ],
        [
          "Mundra",
          "Recorded port label, product and period"
        ],
        [
          "Chennai / Kamarajar",
          "Keep the gateways distinct in the source"
        ],
        [
          "V.O. Chidambaranar / Tuticorin",
          "Source port label and observation period"
        ],
        [
          "Air cargo or inland clearance point",
          "Airport/ICD code; do not call it a seaport"
        ]
      ],
      "intro": "These are gateway selections to discuss, not a claim that every record includes shipment history. Port-wise inventory totals have not been verified for publication.",
      "note": "A company office near a port is not proof of using that port. One trader can use several gateways, so port subtotals may overlap."
    },
    {
      "type": "prose",
      "heading": "Choose importer, exporter or both before comparing counts",
      "paragraphs": [
        "An importer may buy goods for resale or industrial use; an exporter may manufacture goods or trade products made by another business. A firm may do both. Request separate direction labels and a deduplicated union when you combine the selections.",
        "For a production-led supplier search, use the manufacturers database. For account identity and legal-form filters, compare the company database. For mixed business, role and location criteria, the B2B database India pillar provides the broader starting point."
      ]
    },
    {
      "type": "table",
      "heading": "Trade fields and their evidence",
      "columns": [
        "Field",
        "What it supports",
        "What it does not establish"
      ],
      "rows": [
        [
          "IEC / entity name",
          "Trade identity matching",
          "Recent trading activity"
        ],
        [
          "Product description / HS context",
          "Relevant commodity selection",
          "Current stock or product quality"
        ],
        [
          "Import / export direction",
          "The relationship to your service",
          "Exclusive direction forever"
        ],
        [
          "Observed port and period",
          "A documented logistics corridor",
          "Future routing decisions"
        ],
        [
          "Business location and contact",
          "Account and role qualification",
          "Shipment origin or final buying authority"
        ]
      ]
    },
    {
      "type": "scenario",
      "heading": "Example: a forwarder targeting a documented corridor",
      "label": "A port-led brief",
      "paragraphs": [
        "A freight forwarder seeking engineering exporters through JNPA should specify the product groups, observation period and whether it needs manufacturers, merchant exporters or both. JNPA port information can clarify the gateway; it cannot identify every exporter in the provider file.",
        "Request records with supported port activity or agree to a broader IEC-and-sector shortlist. Keep companies with no shipment evidence in a separate group so a registered trade entity is not presented as a verified current lane customer."
      ]
    },
    {
      "type": "sourcing",
      "heading": "Separate registry identity from trade-event evidence",
      "paragraphs": [
        "Ask where IEC identity, product classification and any port or shipment fields came from, including their date and permitted scope. A current business contact and an old shipment observation should not be described as equally recent.",
        "Review matching rules for multiple IEC aliases, company names and gateways. Confirm trade activity, capacity and commercial terms directly with shortlisted businesses before relying on them for a sourcing or logistics commitment."
      ]
    },
    {
      "type": "table",
      "heading": "Trade-business hubs and gateway context",
      "columns": [
        "Regional guide",
        "Hub examples",
        "How to use the geography"
      ],
      "rows": [
        [
          "Gujarat company database",
          "Mundra / Deendayal (Kandla)",
          "State and gateway context; confirm actual port observations separately"
        ],
        [
          "Maharashtra business database",
          "JNPA / Nhava Sheva",
          "Distinguish company location from shipment gateway"
        ],
        [
          "Tamil Nadu business database",
          "Chennai; Tiruppur knitwear businesses",
          "Tiruppur is an inland production hub, not a seaport"
        ]
      ],
      "intro": "Use the state guides for business geography. A port filter requires a dated activity source and cannot be inferred from a nearby office address."
    },
    {
      "type": "prose",
      "heading": "Confirm whether the selection has product categories or HS codes",
      "paragraphs": [
        "A descriptive category such as textiles or engineering is not the same as a structured HS-code classification. State which level you need and ask whether those codes are actually populated in the selected records. If only product descriptions are supplied, the quote and export should use that description rather than implying an HS-coded transaction dataset.",
        "Similarly, an IEC field, a trade-direction label and a shipment event are separate pieces of evidence. Ask which of them the file contains, the period represented and how the business identity was matched. This page describes Indian trade-business requirements and does not promise shipment-level records, foreign buyers or current order volumes without supporting coverage.",
        "Freight forwarders and customs-service providers may need gateway and cargo context. Packaging suppliers need the product and handling requirement. Trade-finance or export-service providers may need the company identity and the appropriate business function. Define that use case before choosing an importer, exporter or combined selection.",
        "Chemical, pharmaceutical and agricultural-product enquiries should identify the specific product and business activity needed. Any approval, handling or licence detail essential to the proposed relationship requires supporting evidence and current confirmation rather than an assumption based on a broad export-sector tag."
      ]
    },
    {
      "type": "sample",
      "heading": "Review the Importers & Exporters Database India file structure",
      "intro": "These fictional, masked rows show the Importers & Exporters Database India column format. They are not live business records or evidence of inventory size; request a matching sample to assess your chosen selection."
    },
    {
      "type": "prose",
      "heading": "Include inland business locations in a trade brief",
      "paragraphs": [
        "The Delhi business database can help define a trading-office selection in the capital. Use the Karnataka business database when the requirement concerns businesses based in Bengaluru or another Karnataka location. The UP company database explains inland industrial and product clusters in Uttar Pradesh. In each case, state the business address needed for the selection; a regional office location does not establish the gateway used for a shipment."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is IEC the same as PAN?",
      "answer": "In the PAN-based IEC system, the issued IEC matches the entity PAN and is separately issued by DGFT. Possessing a PAN alone is not evidence that the business has an issued IEC."
    },
    {
      "question": "Does an IEC prove that a company currently exports?",
      "answer": "IEC identifies a registered trade entity, not a recent shipment. Ask for dated trade-activity evidence when current export operations are essential to your brief."
    },
    {
      "question": "Can I request port-wise importer or exporter records?",
      "answer": "Name the gateway, products and observation period and ask whether supported port fields are available. No port association should be inferred solely from a company address."
    },
    {
      "question": "Can one business appear under more than one port?",
      "answer": "A business may use several gateways during a reporting period. Request a distinct-entity total for the combined selection rather than adding port subtotals."
    },
    {
      "question": "Can I separate merchant exporters and manufacturers?",
      "answer": "Specify the production or trading role required for your offer. Review the activity evidence in a sample so an exporter is not automatically classified as the manufacturer of the goods."
    }
  ],
  "related": [
    {
      "label": "B2B Database India",
      "href": "/b2b-database-india"
    },
    {
      "label": "Manufacturers Database",
      "href": "/manufacturer-database-india"
    },
    {
      "label": "Company Database",
      "href": "/company-database-india"
    },
    {
      "label": "Apparel Exporters",
      "href": "/apparel-garments-exporters-database-india"
    }
  ],
  "cta": {
    "formTitle": "Request a Importers & Exporters Database India Sample",
    "formSubtitle": "Describe the Importers & Exporters Database India selection, locations and fields you need.",
    "buttonLabel": "Request Free Sample",
    "whatsappMessage": "Hi, I need a Importers & Exporters Database India sample. My filters are:",
    "footerTitle": "Plan Your Importers & Exporters Database India Selection",
    "footerText": "Send your Importers & Exporters Database India criteria and quantity. Ask for a matching sample, dated coverage count, field availability and quote."
  },
  "disclaimer": "IEC identity and sector labels do not prove recent shipments. Port filters require supporting activity evidence and a period; the preview is fictional."
} satisfies CustomPage;

export default {
  template: "custom",
  updated: "2026-10-26",
  keyword: {
  "slug": "importers-exporters-database-india",
  "keyword": "Importers & Exporters Database India",
  "title": "Importers Exporters Database India",
  "metaDescription": "Explore Indian trade businesses by product, state and IEC context. Confirm available contact, HS-code and port evidence in a matching sample.",
  "eyebrow": "Importers & Exporters Database India",
  "h1": "Importers and Exporters Database India: Trade Businesses by Product and State",
  "answer": "Build a trade-business shortlist around the product, trade direction and evidence period you need. Distinguish an IEC-linked business identity from proof of recent shipments, and request documented port activity when a logistics corridor matters.",
  "intro": [
    "Build a trade-business shortlist around the product, trade direction and evidence period you need. Distinguish an IEC-linked business identity from proof of recent shipments, and request documented port activity when a logistics corridor matters."
  ],
  "highlights": [{ icon: Building2, title: "Importers & Exporters Database India Selection", description: "Understand IEC-linked trade records, export sectors and port-wise evidence. Request an importers exporters database sample by product and location." }],
  "useCases": [
    "Example: a forwarder targeting a documented corridor"
  ],
  "faqs": [
  {
    "question": "Is IEC the same as PAN?",
    "answer": "In the PAN-based IEC system, the issued IEC matches the entity PAN and is separately issued by DGFT. Possessing a PAN alone is not evidence that the business has an issued IEC."
  },
  {
    "question": "Does an IEC prove that a company currently exports?",
    "answer": "IEC identifies a registered trade entity, not a recent shipment. Ask for dated trade-activity evidence when current export operations are essential to your brief."
  },
  {
    "question": "Can I request port-wise importer or exporter records?",
    "answer": "Name the gateway, products and observation period and ask whether supported port fields are available. No port association should be inferred solely from a company address."
  },
  {
    "question": "Can one business appear under more than one port?",
    "answer": "A business may use several gateways during a reporting period. Request a distinct-entity total for the combined selection rather than adding port subtotals."
  },
  {
    "question": "Can I separate merchant exporters and manufacturers?",
    "answer": "Specify the production or trading role required for your offer. Review the activity evidence in a sample so an exporter is not automatically classified as the manufacturer of the goods."
  }
],
  "related": [
    "b2b-database-india",
    "manufacturer-database-india",
    "company-database-india",
    "apparel-garments-exporters-database-india"
  ]
},
  custom,
} satisfies CategoryContent;
