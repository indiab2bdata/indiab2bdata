import { Building2 } from "lucide-react";
import type { CategoryContent, CustomPage } from "@/types/landing";

/** Dedicated buying guide: MCA Company Data. */
const custom = {
  "path": "/mca-company-database-india",
  "name": "MCA Company Data",
  "title": "MCA Company Database: CIN, ROC & Status",
  "metaDescription": "Explore Indian company and LLP records by CIN or LLPIN, incorporation year, class, status and registered state. Review fields before ordering.",
  "eyebrow": "MCA Company Data",
  "h1": "MCA Company Database: Indian Companies by CIN, ROC and Status",
  "lead": "Use incorporation records to identify companies by CIN, incorporation year, class, status, registered office and Registrar of Companies. Treat LLPs as a separate entity class with LLPIN identifiers, and distinguish registry capital from annual turnover.",
  "image": {
    "src": "/images/keywords/city-skyline.jpg",
    "alt": "Illustrative business district",
    "width": 1600,
    "height": 900
  },
  "sampleProfile": "mcaCompany",
  "links": [
    {
      "text": "B2B database India",
      "href": "/b2b-database-india"
    },
    {
      "text": "company database",
      "href": "/company-database-india"
    },
    {
      "text": "GST database",
      "href": "/gst-database-india"
    },
    {
      "text": "official company master-data catalogue",
      "href": "https://data.gov.in/catalog/company-master-data"
    },
    {
      "text": "MCA portal",
      "href": "https://www.mca.gov.in/"
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
      "type": "table",
      "heading": "How the 21-character CIN is organised",
      "columns": [
        "Position",
        "Component",
        "Interpretation"
      ],
      "rows": [
        [
          "1",
          "Listing indicator",
          "L for listed or U for unlisted"
        ],
        [
          "2–6",
          "Industry code",
          "Five-digit industry classification embedded in the identifier"
        ],
        [
          "7–8",
          "State code",
          "Two-letter registered-state code"
        ],
        [
          "9–12",
          "Incorporation year",
          "Four-digit year"
        ],
        [
          "13–15",
          "Company-type code",
          "For example PTC for a private company or PLC for a public company"
        ],
        [
          "16–21",
          "Registration sequence",
          "Six-digit registration number"
        ]
      ],
      "intro": "A CIN is an alphanumeric identifier. Its format helps interpret a company record but does not replace checking the current master data.",
      "note": "Listing status in the CIN and current company status are different fields. LLPs use LLPIN rather than this company CIN structure."
    },
    {
      "type": "table",
      "heading": "Choose the company-status population",
      "columns": [
        "Recorded status",
        "Research use",
        "Handling rule"
      ],
      "rows": [
        [
          "Active",
          "Current incorporated-company shortlist",
          "Use the recorded status date; do not infer trading volume"
        ],
        [
          "Struck off",
          "Historical reconciliation or exclusions",
          "Keep separate from active prospecting records"
        ],
        [
          "Under liquidation",
          "Specific legal-status or historical brief",
          "Preserve the exact source label and date"
        ],
        [
          "Dormant",
          "A separately defined status selection",
          "Do not merge with active prospecting records"
        ],
        [
          "Unknown or not recently checked",
          "Records needing review",
          "Show missing verification instead of assuming active"
        ]
      ],
      "intro": "Active and struck-off records should not be silently mixed in one sales file. State the statuses you want before requesting counts."
    },
    {
      "type": "table",
      "heading": "ROC-wise breakup to request",
      "columns": [
        "ROC selection",
        "Useful territory context"
      ],
      "rows": [
        [
          "ROC Mumbai",
          "Maharashtra registration jurisdiction, as recorded"
        ],
        [
          "ROC Pune",
          "Pune jurisdiction, as recorded"
        ],
        [
          "ROC Delhi",
          "Delhi jurisdiction, as recorded"
        ],
        [
          "ROC Ahmedabad",
          "Gujarat jurisdiction, as recorded"
        ],
        [
          "ROC Bangalore",
          "Karnataka jurisdiction, as recorded"
        ],
        [
          "ROC Chennai / ROC Coimbatore",
          "Separate Tamil Nadu jurisdictions"
        ]
      ],
      "intro": "The authoritative field is the ROC value on the record. Use exact source labels and a snapshot date; do not derive the ROC solely from the city name.",
      "note": "These are example selection groups, not published inventory totals. A verified ROC-by-status export is still required for numerical figures."
    },
    {
      "type": "prose",
      "heading": "Registered office, ROC and operating location answer different questions",
      "paragraphs": [
        "A registered office is the incorporation address. It does not necessarily identify the factory, sales office or headquarters where your service is delivered. A ROC-based legal-entity selection can therefore differ from a city-based operational shortlist.",
        "If you need manufacturing sites or local distributors, use the wider B2B database India route and request operating-address fields. The company database supports account-level criteria across business forms, while the GST database describes tax registrations. Preserve the identifier when matching these sources rather than relying on similar names alone."
      ]
    },
    {
      "type": "table",
      "heading": "MCA fields and common misinterpretations",
      "columns": [
        "Field",
        "Meaning for your brief",
        "Do not substitute"
      ],
      "rows": [
        [
          "CIN / LLPIN",
          "Entity identifier for the appropriate legal form",
          "A GSTIN or trade name"
        ],
        [
          "Company class and category",
          "Recorded incorporation classification",
          "An assumed company-size tier"
        ],
        [
          "Authorised / paid-up capital",
          "Registry capital values where supplied",
          "Annual revenue or turnover"
        ],
        [
          "Registration date",
          "Incorporation timing",
          "Date a contact joined the business"
        ],
        [
          "Company status / ROC",
          "Jurisdiction and recorded status",
          "Guaranteed operating or credit quality"
        ]
      ]
    },
    {
      "type": "scenario",
      "heading": "Example: active private companies incorporated in a period",
      "label": "An incorporation-led brief",
      "paragraphs": [
        "An accounting provider may request private companies incorporated in a specified year range under selected ROCs, with active status at the date checked. The resulting count should use distinct CINs and state whether foreign companies or LLPs are outside scope.",
        "If decision-maker email or phone is added, inspect those fields separately. Incorporation does not automatically supply a current director contact, an open procurement requirement or a turnover figure."
      ]
    },
    {
      "type": "sourcing",
      "heading": "Record the master-data snapshot and enrichment separately",
      "paragraphs": [
        "The official company master-data catalogue describes fields such as CIN, status, class, capital and ROC. Ask which of these fields your selected export includes and when the source was observed.",
        "A status can change after extraction. For important counterparties, consult the MCA portal and relevant filings. Request separate provenance for contacts, websites, turnover estimates or operating addresses added outside the master-data record."
      ]
    },
    {
      "type": "prose",
      "heading": "A CIN example does not replace a current company-status check",
      "paragraphs": [
        "The masked pattern U | XXXXX | MH | 20XX | PTC | XXXXXX demonstrates the six CIN components: listing indicator, industry, registered-state code, incorporation year, company-type code and registration sequence. Its X characters are intentional; it is not the identifier of a company in the supplied inventory.",
        "The listing indicator and the company-status field should be reviewed independently. An unlisted company can have a status requiring exclusion from a current prospecting brief. Preserve the exact source label, including active, struck off, dormant or under liquidation where recorded, instead of converting every non-empty company record to active.",
        "For a year-based selection, agree whether you mean legal incorporation or an operating/founding date researched elsewhere. A group may have several incorporated entities with different dates. Keep the CIN with the entity that owns it when reconciling names, domains and addresses."
      ]
    },
    {
      "type": "prose",
      "heading": "Define a recent-incorporation requirement without assuming a feed",
      "paragraphs": [
        "A buyer seeking newly incorporated companies should state the incorporation period, company classes, registration territories and acceptable statuses. Ask when the underlying records were extracted and whether the sample reflects that specific period. Do not interpret an editorial update on this page as proof that a monthly feed was delivered.",
        "If director or professional-contact information is requested, confirm which company-role fields are present and how they were sourced. An incorporation record does not establish the person’s current work channel or authority for the proposal. Request the relevant role rather than unrelated personal attributes.",
        "The six featured geographies are Delhi, Gujarat, Karnataka, Maharashtra, Uttar Pradesh and Tamil Nadu. For each, ask for the recorded ROC value and the same status/year filters before comparing coverage. A count grouped by registered state and a count grouped by ROC are different summaries; maintain their definitions in the export."
      ]
    },
    {
      "type": "sample",
      "heading": "Review the MCA Company Data file structure",
      "intro": "These fictional, masked rows show the MCA Company Data column format. They are not live business records or evidence of inventory size; request a matching sample to assess your chosen selection."
    }
  ],
  "faqs": [
    {
      "question": "Is CIN a 21-digit number?",
      "answer": "A company CIN has 21 alphanumeric characters, including letters and numbers. Its parts describe listing indicator, industry, state, incorporation year, company type and registration sequence."
    },
    {
      "question": "Are LLPs identified by CIN?",
      "answer": "LLPs use LLPIN identifiers rather than company CINs. Ask for a separate LLP selection and count so the export does not mix different identifier systems."
    },
    {
      "question": "Can I request only active MCA companies?",
      "answer": "Specify active status and the date it must have been checked. Review how recently changed or unverified statuses are handled before accepting the shortlist."
    },
    {
      "question": "Can I see ROC-wise company totals?",
      "answer": "Request a dated company count for each recorded ROC, split by the statuses and company classes you choose. No numerical ROC inventory is published here without that export."
    },
    {
      "question": "Is paid-up capital the same as turnover?",
      "answer": "Paid-up capital is a capital figure, whereas turnover describes revenue over a period. A turnover filter needs a separate source and reporting year."
    }
  ],
  "related": [
    {
      "label": "B2B Database India",
      "href": "/b2b-database-india"
    },
    {
      "label": "Company Database",
      "href": "/company-database-india"
    },
    {
      "label": "GST Database",
      "href": "/gst-database-india"
    },
    {
      "label": "New Company Registrations",
      "href": "/newly-registered-companies-india"
    }
  ],
  "cta": {
    "formTitle": "Request a MCA Company Data Sample",
    "formSubtitle": "Describe the MCA Company Data selection, locations and fields you need.",
    "buttonLabel": "Ask About a Sample",
    "whatsappMessage": "Hi, I need a MCA Company Data sample. My filters are:",
    "footerTitle": "Plan Your MCA Company Data Selection",
    "footerText": "Send your MCA Company Data criteria and quantity. Ask for a matching sample, dated coverage count, field availability and quote."
  },
  "disclaimer": "Independent incorporation-data service, not affiliated with MCA. Confirm current company status and filing details through official records when needed."
} satisfies CustomPage;

export default {
  template: "custom",
  updated: "2026-10-28",
  keyword: {
  "slug": "mca-company-database-india",
  "keyword": "MCA Company Data",
  "title": "MCA Company Database: CIN, ROC & Status",
  "metaDescription": "Explore Indian company and LLP records by CIN or LLPIN, incorporation year, class, status and registered state. Review fields before ordering.",
  "eyebrow": "MCA Company Data",
  "h1": "MCA Company Database: Indian Companies by CIN, ROC and Status",
  "answer": "Use incorporation records to identify companies by CIN, incorporation year, class, status, registered office and Registrar of Companies. Treat LLPs as a separate entity class with LLPIN identifiers, and distinguish registry capital from annual turnover.",
  "intro": [
    "Use incorporation records to identify companies by CIN, incorporation year, class, status, registered office and Registrar of Companies. Treat LLPs as a separate entity class with LLPIN identifiers, and distinguish registry capital from annual turnover."
  ],
  "highlights": [{ icon: Building2, title: "MCA Company Data Selection", description: "Explore MCA company data with CIN format, active and struck-off status, ROC-wise selection and capital fields. Request a dated company or LLP sample." }],
  "useCases": [
    "Example: active private companies incorporated in a period"
  ],
  "faqs": [
  {
    "question": "Is CIN a 21-digit number?",
    "answer": "A company CIN has 21 alphanumeric characters, including letters and numbers. Its parts describe listing indicator, industry, state, incorporation year, company type and registration sequence."
  },
  {
    "question": "Are LLPs identified by CIN?",
    "answer": "LLPs use LLPIN identifiers rather than company CINs. Ask for a separate LLP selection and count so the export does not mix different identifier systems."
  },
  {
    "question": "Can I request only active MCA companies?",
    "answer": "Specify active status and the date it must have been checked. Review how recently changed or unverified statuses are handled before accepting the shortlist."
  },
  {
    "question": "Can I see ROC-wise company totals?",
    "answer": "Request a dated company count for each recorded ROC, split by the statuses and company classes you choose. No numerical ROC inventory is published here without that export."
  },
  {
    "question": "Is paid-up capital the same as turnover?",
    "answer": "Paid-up capital is a capital figure, whereas turnover describes revenue over a period. A turnover filter needs a separate source and reporting year."
  }
],
  "related": [
    "b2b-database-india",
    "company-database-india",
    "gst-database-india",
    "newly-registered-companies-india"
  ]
},
  custom,
} satisfies CategoryContent;
