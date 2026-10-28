import { Building2 } from "lucide-react";
import type { CategoryContent, CustomPage } from "@/types/landing";

/** Dedicated buying guide: GST Database India. */
const custom = {
  "path": "/gst-database-india",
  "name": "GST Database India",
  "title": "GST Database India: GSTIN & State Codes",
  "metaDescription": "Explore GST-registered business records by state code, taxpayer type and activity. Understand GSTIN fields and review a sample before ordering.",
  "eyebrow": "GST Database India",
  "h1": "GST Database India: GSTIN and Registration Details",
  "lead": "Use GST-linked records to identify registered businesses by legal name, taxpayer type, registration status and principal business location. Keep the registration row separate from company-level counts and from any additional phone or email research.",
  "image": {
    "src": "/images/keywords/city-skyline.jpg",
    "alt": "Illustrative business district",
    "width": 1600,
    "height": 900
  },
  "sampleProfile": "gstRegistration",
  "links": [
    {
      "text": "B2B database India",
      "href": "/b2b-database-india"
    },
    {
      "text": "MCA company data",
      "href": "/mca-company-database-india"
    },
    {
      "text": "company database",
      "href": "/company-database-india"
    },
    {
      "text": "GST Portal taxpayer guide",
      "href": "https://tutorial.gst.gov.in/userguide/taxpayersdashboard/Search_Taxpayer.htm"
    },
    {
      "text": "GST registration guide",
      "href": "https://tutorial.gst.gov.in/userguide/registration/Apply_for_Registration_Normal_Taxpayer.htm"
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
      "heading": "Read the 15-character GSTIN",
      "columns": [
        "Position",
        "Component",
        "What it tells you"
      ],
      "rows": [
        [
          "1–2",
          "Two-digit state/UT code",
          "The registration jurisdiction; for example 27 Maharashtra, 24 Gujarat, 29 Karnataka"
        ],
        [
          "3–12",
          "Ten-character PAN component",
          "The underlying tax identity for a standard PAN-based registration"
        ],
        [
          "13",
          "Entity/registration character",
          "Distinguishes registrations under that PAN within the state"
        ],
        [
          "14",
          "Usually Z for standard PAN-based GSTINs",
          "Reserved position in the standard format"
        ],
        [
          "15",
          "Check character",
          "Used to check the identifier format"
        ]
      ],
      "intro": "For a standard PAN-based GSTIN, read the identifier as state code + PAN + registration character + reserved character + check character.",
      "note": "This explains the standard structure; it does not validate a real registration. Special identifiers such as UINs should be kept in their own category."
    },
    {
      "type": "prose",
      "heading": "A registration is not the same as a company",
      "paragraphs": [
        "A business may hold GST registrations in several states. Those registrations share an underlying tax identity but have different jurisdictions and business places. Deduplicate on GSTIN for registration-level work; ask for a separate entity-matching rule if you need one row per business.",
        "The PAN component does not tell you turnover, purchasing authority or whether a contact is current. Use the company database for broader account profiles and MCA company data for incorporation information. The B2B database India pillar explains how these selections overlap."
      ]
    },
    {
      "type": "table",
      "heading": "Registration-type selection",
      "columns": [
        "Taxpayer group",
        "Useful selection"
      ],
      "rows": [
        [
          "Regular taxpayers",
          "Ordinary registered-business research by state, activity and status"
        ],
        [
          "Composition taxpayers",
          "A separate scheme/type filter; do not infer turnover from the label alone"
        ],
        [
          "Casual or non-resident taxable persons",
          "Specify the exact category and relevant registration dates"
        ],
        [
          "ISD, SEZ and other specialist categories",
          "Keep category definitions explicit instead of mixing them into ordinary trading firms"
        ]
      ],
      "intro": "Ask which taxpayer-type labels are actually present in the extract. The GST registration guide describes several different registration categories.",
      "note": "Counts must use the same snapshot and GSTIN-level deduplication. No dated provider inventory by type has been confirmed for publication."
    },
    {
      "type": "table",
      "heading": "Registry fields and added contact fields",
      "columns": [
        "Information",
        "Registry context",
        "What to confirm"
      ],
      "rows": [
        [
          "Legal and trade names",
          "Shown in the taxpayer profile",
          "Retain both; a trade name can differ from the legal name"
        ],
        [
          "Status and registration dates",
          "Registration profile attributes",
          "Record the observation date and any cancellation date"
        ],
        [
          "Taxpayer type and constitution",
          "Separate classification fields",
          "Do not substitute one for the other"
        ],
        [
          "Principal place and activity",
          "Location and business context",
          "Distinguish registered place from every operating site"
        ],
        [
          "Phone, email and contact role",
          "Additional research when supplied",
          "Ask for source, date and permission context; not guaranteed by public search"
        ]
      ]
    },
    {
      "type": "prose",
      "heading": "Public lookup fields and contact enrichment have different provenance",
      "paragraphs": [
        "The GST Portal taxpayer guide explains the profile information available through Search Taxpayer. Public registry availability helps you cross-check a business identity; it does not establish that every delivered contact field came from an unrestricted public registry.",
        "For a quote, ask the provider to distinguish registry attributes from enrichment and show the date of each check. A registration marked active is a registry status, not an endorsement of product quality, commercial reliability or interest in your offer. Review the current official profile when a business decision depends on it."
      ]
    },
    {
      "type": "scenario",
      "heading": "Example: suppliers across Maharashtra and Gujarat",
      "label": "Registration-level selection",
      "paragraphs": [
        "A packaging vendor wants registered manufacturers in two states. The brief should name the business activities, desired taxpayer types and acceptable registration statuses, then request state-wise GSTIN counts and a distinct-entity count.",
        "A company registered in both states can appear twice legitimately in a registration file. If the sales team wants one headquarters account instead, the final export needs an explicit consolidation rule rather than deleting one state record arbitrarily."
      ]
    },
    {
      "type": "sourcing",
      "heading": "Ask for a traceable GST selection",
      "paragraphs": [
        "Request the GSTIN-level extraction date, the fields obtained from registry information and the origin of any additional business contacts. A masked demonstration identifier is not proof that an actual GSTIN has been checked.",
        "Compare status labels, missing fields and duplicate handling in a matching sample. Public access to a business profile should not be treated as a blanket permission for every reuse or communication channel."
      ]
    },
    {
      "type": "table",
      "heading": "GST state codes for the six state selections",
      "columns": [
        "State code",
        "Business selection",
        "Registration geography"
      ],
      "rows": [
        [
          "07",
          "Delhi business database",
          "Delhi registration"
        ],
        [
          "24",
          "Gujarat company database",
          "Gujarat registration"
        ],
        [
          "29",
          "Karnataka business database",
          "Karnataka registration"
        ],
        [
          "27",
          "Maharashtra business database",
          "Maharashtra registration"
        ],
        [
          "09",
          "UP company database",
          "Uttar Pradesh registration"
        ],
        [
          "33",
          "Tamil Nadu business database",
          "Tamil Nadu registration"
        ]
      ],
      "intro": "Store GSTIN as text so a leading zero is retained. A state-code filter selects registration jurisdiction, not every location where the business trades."
    },
    {
      "type": "prose",
      "heading": "A masked GSTIN example and three practical uses",
      "paragraphs": [
        "Read the fictional pattern 27 | XXXXX0000X | 1 | Z | X as a Maharashtra state code, a masked PAN component, a registration character, the reserved position and a masked check character. It is a format illustration, not a valid registration to search or use on an invoice. A format check and an official profile lookup answer different questions.",
        "For vendor onboarding, compare the legal identity and registration status with the documents provided by the vendor. A GST-linked match helps organise the account but should not be substituted for product specifications, bank-detail checks or the commercial approvals your organisation requires.",
        "For distributor discovery, combine registration identity with business activity and location. Constitution describes the business form; taxpayer type describes the GST category. Keep those fields distinct instead of using a composition or regular label as a proxy for a product line.",
        "For a B2B prospect list, review work-contact fields separately from registry attributes. Record the date of the registration check and the evidence behind any added contact. If you need incorporated entities only, compare MCA company data rather than assuming all GST registrants are private limited companies."
      ]
    },
    {
      "type": "sample",
      "heading": "Review the GST Database India file structure",
      "intro": "These fictional, masked rows show the GST Database India column format. They are not live business records or evidence of inventory size; request a matching sample to assess your chosen selection."
    }
  ],
  "faqs": [
    {
      "question": "Does GSTIN contain a state code and PAN?",
      "answer": "A standard PAN-based GSTIN starts with a two-digit state or UT code followed by a ten-character PAN component. The remaining three positions identify the registration and complete the standard format; verify the actual profile on the official portal."
    },
    {
      "question": "Does one GSTIN mean one company?",
      "answer": "One GSTIN identifies a registration, not necessarily a unique company across India. A business may have several registrations, so ask for both registration and distinct-entity counts."
    },
    {
      "question": "Can I separate regular and composition taxpayers?",
      "answer": "Request the taxpayer-type labels required for the selection and review them in the sample. Keep that field separate from constitution and status, and confirm counts for a dated extract."
    },
    {
      "question": "Are phone numbers and emails public GST registry fields?",
      "answer": "Do not assume that every contact field is available through pre-login GST search. Ask which fields are separately researched and how their sources and observation dates are documented."
    },
    {
      "question": "Does an active GST status prove current trading activity?",
      "answer": "Active is a registration status at the time checked. Confirm current operations and the specific commercial details important to your transaction directly with the business."
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
      "label": "MCA Company Data",
      "href": "/mca-company-database-india"
    },
    {
      "label": "New Company Registrations",
      "href": "/newly-registered-companies-india"
    }
  ],
  "cta": {
    "formTitle": "Request a GST Database India Sample",
    "formSubtitle": "Describe the GST Database India selection, locations and fields you need.",
    "buttonLabel": "Ask About a Sample",
    "whatsappMessage": "Hi, I need a GST Database India sample. My filters are:",
    "footerTitle": "Plan Your GST Database India Selection",
    "footerText": "Send your GST Database India criteria and quantity. Ask for a matching sample, dated coverage count, field availability and quote."
  },
  "disclaimer": "Independent GST-linked business information. IndiaB2BData.com is not the GST Portal; check official registration details when they matter to your decision."
} satisfies CustomPage;

export default {
  template: "custom",
  updated: "2026-10-28",
  keyword: {
  "slug": "gst-database-india",
  "keyword": "GST Database India",
  "title": "GST Database India: GSTIN & State Codes",
  "metaDescription": "Explore GST-registered business records by state code, taxpayer type and activity. Understand GSTIN fields and review a sample before ordering.",
  "eyebrow": "GST Database India",
  "h1": "GST Database India: GSTIN and Registration Details",
  "answer": "Use GST-linked records to identify registered businesses by legal name, taxpayer type, registration status and principal business location. Keep the registration row separate from company-level counts and from any additional phone or email research.",
  "intro": [
    "Use GST-linked records to identify registered businesses by legal name, taxpayer type, registration status and principal business location. Keep the registration row separate from company-level counts and from any additional phone or email research."
  ],
  "highlights": [{ icon: Building2, title: "GST Database India Selection", description: "Understand GSTIN state code and PAN structure, taxpayer types and registration status. Review GST database fields and request a registration-wise sample." }],
  "useCases": [
    "Example: suppliers across Maharashtra and Gujarat"
  ],
  "faqs": [
  {
    "question": "Does GSTIN contain a state code and PAN?",
    "answer": "A standard PAN-based GSTIN starts with a two-digit state or UT code followed by a ten-character PAN component. The remaining three positions identify the registration and complete the standard format; verify the actual profile on the official portal."
  },
  {
    "question": "Does one GSTIN mean one company?",
    "answer": "One GSTIN identifies a registration, not necessarily a unique company across India. A business may have several registrations, so ask for both registration and distinct-entity counts."
  },
  {
    "question": "Can I separate regular and composition taxpayers?",
    "answer": "Request the taxpayer-type labels required for the selection and review them in the sample. Keep that field separate from constitution and status, and confirm counts for a dated extract."
  },
  {
    "question": "Are phone numbers and emails public GST registry fields?",
    "answer": "Do not assume that every contact field is available through pre-login GST search. Ask which fields are separately researched and how their sources and observation dates are documented."
  },
  {
    "question": "Does an active GST status prove current trading activity?",
    "answer": "Active is a registration status at the time checked. Confirm current operations and the specific commercial details important to your transaction directly with the business."
  }
],
  "related": [
    "b2b-database-india",
    "company-database-india",
    "mca-company-database-india",
    "newly-registered-companies-india"
  ]
},
  custom,
} satisfies CategoryContent;
