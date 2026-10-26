export type PriorityEvidence = { heading: string; intro: string; sources: {name:string;href:string;kind:string;detail:string}[]; links: {label:string;href:string}[] };
export const PRIORITY_EVIDENCE: Record<string, PriorityEvidence> = {
  "/": {
    "heading": "Business data sources used in research",
    "intro": "Our published methodology describes independent research, third-party datasets, company websites, business directories and industry listings. Sources vary by segment; use the relevant guide to review the fields behind your selection.",
    "sources": [
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "Company websites and business / industry listings",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Business identity, activity, location and published work-contact context; the underlying source can differ between fields."
      }
    ],
    "links": [
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "MCA Company Data",
        "href": "/mca-company-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Dealers & Distributors",
        "href": "/dealers-distributors-database-india"
      },
      {
        "label": "Importers & Exporters",
        "href": "/importers-exporters-database-india"
      },
      {
        "label": "Delhi Business Database",
        "href": "/database/delhi"
      },
      {
        "label": "Gujarat Company Database",
        "href": "/database/gujarat"
      },
      {
        "label": "Karnataka Business Database",
        "href": "/database/karnataka"
      },
      {
        "label": "Maharashtra Business Database",
        "href": "/database/maharashtra"
      },
      {
        "label": "UP Company Database",
        "href": "/database/uttar-pradesh"
      },
      {
        "label": "Tamil Nadu Business Database",
        "href": "/database/tamil-nadu"
      },
      {
        "label": "About IndiaB2BData",
        "href": "/about"
      }
    ]
  },
  "/b2b-database-india": {
    "heading": "Sources behind a mixed B2B selection",
    "intro": "A B2B file can combine company identity, activity, operating locations and contact research. The published collection process is research and third-party data; registry references below identify where corresponding business attributes can be checked.",
    "sources": [
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "Business directories and company websites",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Business activity, trading aliases, locations and published business contact information."
      },
      {
        "name": "GST Portal",
        "href": "https://www.gst.gov.in/",
        "kind": "Verification reference",
        "detail": "Cross-check GSTIN, registered identity, jurisdiction and taxpayer status."
      },
      {
        "name": "MCA21",
        "href": "https://www.mca.gov.in/",
        "kind": "Verification reference",
        "detail": "Cross-check company incorporation identity and status."
      },
      {
        "name": "DGFT IEC services",
        "href": "https://www.dgft.gov.in/",
        "kind": "Verification reference",
        "detail": "Cross-check IEC identity when the B2B selection includes trade entities."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "MCA Company Data",
        "href": "/mca-company-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Dealers & Distributors",
        "href": "/dealers-distributors-database-india"
      },
      {
        "label": "Importers & Exporters",
        "href": "/importers-exporters-database-india"
      },
      {
        "label": "Delhi Business Database",
        "href": "/database/delhi"
      },
      {
        "label": "Gujarat Company Database",
        "href": "/database/gujarat"
      },
      {
        "label": "Karnataka Business Database",
        "href": "/database/karnataka"
      },
      {
        "label": "Maharashtra Business Database",
        "href": "/database/maharashtra"
      },
      {
        "label": "UP Company Database",
        "href": "/database/uttar-pradesh"
      },
      {
        "label": "Tamil Nadu Business Database",
        "href": "/database/tamil-nadu"
      },
      {
        "label": "About IndiaB2BData",
        "href": "/about"
      }
    ]
  },
  "/gst-database-india": {
    "heading": "GST data sources and field checks",
    "intro": "GST registration attributes and added business contacts need separate provenance. Our collection methodology covers research and third-party datasets; the GST Portal is the authoritative reference for registration-profile checks.",
    "sources": [
      {
        "name": "GST Portal: Search Taxpayer",
        "href": "https://tutorial.gst.gov.in/userguide/taxpayersdashboard/Search_Taxpayer.htm",
        "kind": "Verification reference",
        "detail": "GSTIN/UIN, legal and trade name, taxpayer type, registered place and status."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "Company websites and business directories",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Separate business-contact enrichment; do not describe added phone or email fields as automatically supplied by public GST search."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "Delhi Business Database",
        "href": "/database/delhi"
      },
      {
        "label": "Gujarat Company Database",
        "href": "/database/gujarat"
      },
      {
        "label": "Maharashtra Business Database",
        "href": "/database/maharashtra"
      },
      {
        "label": "MCA Company Data",
        "href": "/mca-company-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "UP Company Database",
        "href": "/database/uttar-pradesh"
      },
      {
        "label": "Tamil Nadu Business Database",
        "href": "/database/tamil-nadu"
      },
      {
        "label": "Karnataka business database",
        "href": "/database/karnataka"
      }
    ]
  },
  "/mca-company-database-india": {
    "heading": "MCA company source references",
    "intro": "Company master-data fields and additional professional contacts should retain their own source dates. The published provider process is research plus third-party data, with MCA21 as the reference for incorporation checks.",
    "sources": [
      {
        "name": "MCA21 company / LLP services",
        "href": "https://www.mca.gov.in/",
        "kind": "Verification reference",
        "detail": "CIN or LLPIN identity, incorporation information, company status and recorded ROC."
      },
      {
        "name": "Official company master-data catalogue",
        "href": "https://data.gov.in/catalog/company-master-data",
        "kind": "Verification reference",
        "detail": "Published master-data field definitions and available official releases."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "Business websites and directories",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Separately researched operating locations and business contacts outside incorporation fields."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "Delhi Business Database",
        "href": "/database/delhi"
      },
      {
        "label": "Karnataka Business Database",
        "href": "/database/karnataka"
      },
      {
        "label": "Maharashtra Business Database",
        "href": "/database/maharashtra"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Gujarat company database",
        "href": "/database/gujarat"
      },
      {
        "label": "UP company database",
        "href": "/database/uttar-pradesh"
      },
      {
        "label": "Tamil Nadu business database",
        "href": "/database/tamil-nadu"
      }
    ]
  },
  "/company-database-india": {
    "heading": "Company-profile sources by field",
    "intro": "An account profile can mix registry identity, business descriptions and financial or contact research. Keep legal-form evidence, turnover year and work-contact provenance separate when assessing the file.",
    "sources": [
      {
        "name": "MCA21",
        "href": "https://www.mca.gov.in/",
        "kind": "Verification reference",
        "detail": "Company and LLP incorporation identifiers, class and recorded status."
      },
      {
        "name": "GST Portal",
        "href": "https://www.gst.gov.in/",
        "kind": "Verification reference",
        "detail": "Tax registration identity and constitution context where applicable."
      },
      {
        "name": "Company websites and business directories",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Published product/service activity, office locations and business contact context."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "Gujarat Company Database",
        "href": "/database/gujarat"
      },
      {
        "label": "Karnataka Business Database",
        "href": "/database/karnataka"
      },
      {
        "label": "UP Company Database",
        "href": "/database/uttar-pradesh"
      },
      {
        "label": "Tamil Nadu Business Database",
        "href": "/database/tamil-nadu"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "MCA Company Data",
        "href": "/mca-company-database-india"
      },
      {
        "label": "Delhi Business Database",
        "href": "/database/delhi"
      },
      {
        "label": "Maharashtra Business Database",
        "href": "/database/maharashtra"
      }
    ]
  },
  "/manufacturer-database-india": {
    "heading": "Manufacturing source channels and cluster references",
    "intro": "The published method uses research, third-party providers and business/industry listings. Factory activity and operating addresses need their own evidence; industrial-area directories are useful geographic references rather than proof of production capability.",
    "sources": [
      {
        "name": "Industry listings, trade directories and manufacturer websites",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Product/process descriptions and supported operating-unit addresses."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "MIDC industrial-area GIS",
        "href": "https://gis.midcindia.org/MIDCGISPortal/",
        "kind": "Verification reference",
        "detail": "Maharashtra industrial-area names and geographic context."
      },
      {
        "name": "SIPCOT",
        "href": "https://sipcot.tn.gov.in/",
        "kind": "Verification reference",
        "detail": "Tamil Nadu industrial-park context for the named cluster selection."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "Delhi Business Database",
        "href": "/database/delhi"
      },
      {
        "label": "Gujarat Company Database",
        "href": "/database/gujarat"
      },
      {
        "label": "Karnataka Business Database",
        "href": "/database/karnataka"
      },
      {
        "label": "Maharashtra Business Database",
        "href": "/database/maharashtra"
      },
      {
        "label": "UP Company Database",
        "href": "/database/uttar-pradesh"
      },
      {
        "label": "Tamil Nadu Business Database",
        "href": "/database/tamil-nadu"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      }
    ]
  },
  "/dealers-distributors-database-india": {
    "heading": "Channel-partner data sources",
    "intro": "Channel research depends on the product sector and business role. Our published source categories include business and industry directories, websites and third-party suppliers; a current brand appointment requires separate supporting evidence.",
    "sources": [
      {
        "name": "Trade and industry directories",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Dealer, wholesaler, stockist and distributor descriptions by product category."
      },
      {
        "name": "Business and brand websites",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Published product lines, locations and channel descriptions; confirm current appointments with the relevant business."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "Delhi Business Database",
        "href": "/database/delhi"
      },
      {
        "label": "Gujarat Company Database",
        "href": "/database/gujarat"
      },
      {
        "label": "Maharashtra Business Database",
        "href": "/database/maharashtra"
      },
      {
        "label": "UP Company Database",
        "href": "/database/uttar-pradesh"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Karnataka Business Database",
        "href": "/database/karnataka"
      },
      {
        "label": "Tamil Nadu business database",
        "href": "/database/tamil-nadu"
      }
    ]
  },
  "/importers-exporters-database-india": {
    "heading": "Trade-entity and port-data references",
    "intro": "IEC identity, product activity and observed port events are different fields. The published collection process uses research and third-party sources; DGFT and port information are references for the corresponding identity or gateway checks.",
    "sources": [
      {
        "name": "DGFT IEC services",
        "href": "https://www.dgft.gov.in/",
        "kind": "Verification reference",
        "detail": "Issued IEC identity and the official trade-entity verification route."
      },
      {
        "name": "Export / import directories and business websites",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Product groups, manufacturer or merchant-trader descriptions and published company context."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "JNPA",
        "href": "https://www.jnport.gov.in/",
        "kind": "Verification reference",
        "detail": "Gateway and terminal context; a port association still needs a dated trade-event source."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "Gujarat Company Database",
        "href": "/database/gujarat"
      },
      {
        "label": "Maharashtra Business Database",
        "href": "/database/maharashtra"
      },
      {
        "label": "UP Company Database",
        "href": "/database/uttar-pradesh"
      },
      {
        "label": "Tamil Nadu Business Database",
        "href": "/database/tamil-nadu"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Delhi business database",
        "href": "/database/delhi"
      },
      {
        "label": "Karnataka business database",
        "href": "/database/karnataka"
      }
    ]
  },
  "/database/delhi": {
    "heading": "Data sources for Delhi",
    "intro": "Delhi research should distinguish wholesale-market addresses, industrial units and corporate offices. Company websites, business listings and third-party datasets are the published source categories; registration and industrial-area references can be checked separately.",
    "sources": [
      {
        "name": "Delhi business / trade directories and company websites",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Market or locality context for wholesale trade, industry and office records."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "DSIIDC industrial-area directory",
        "href": "https://dsiidc.delhi.gov.in/iem/industrial-area-list",
        "kind": "Verification reference",
        "detail": "Industrial-area naming and context, including Okhla; not a provider inventory count."
      },
      {
        "name": "GST Portal",
        "href": "https://www.gst.gov.in/",
        "kind": "Verification reference",
        "detail": "GST-linked identity and registration status when supplied."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "MCA Company Data",
        "href": "/mca-company-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Dealers & Distributors",
        "href": "/dealers-distributors-database-india"
      }
    ]
  },
  "/database/gujarat": {
    "heading": "Data sources for Gujarat",
    "intro": "For Gujarat, keep Surat textile, Rajkot engineering and Ahmedabad pharma classifications tied to their business sources. Our published collection channels are research, third-party providers and business or industry listings.",
    "sources": [
      {
        "name": "Gujarat trade / industry listings and company websites",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "City, product and business-activity context for the selected Gujarat clusters."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "GST Portal",
        "href": "https://www.gst.gov.in/",
        "kind": "Verification reference",
        "detail": "Registration identity and taxpayer classification where part of the selection."
      },
      {
        "name": "DGFT",
        "href": "https://www.dgft.gov.in/",
        "kind": "Verification reference",
        "detail": "IEC identity checks for an exporter-specific Gujarat brief."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Dealers & Distributors",
        "href": "/dealers-distributors-database-india"
      },
      {
        "label": "Importers & Exporters",
        "href": "/importers-exporters-database-india"
      }
    ]
  },
  "/database/karnataka": {
    "heading": "Data sources for Karnataka",
    "intro": "Bengaluru IT-company research and Peenya factory research need different activity and address fields. The published collection process covers business research, third-party data, websites and industry listings; official references help check the corresponding identity or geography.",
    "sources": [
      {
        "name": "Karnataka business directories and company websites",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "IT/service descriptions, industrial activities and published operating locations."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "MCA21",
        "href": "https://www.mca.gov.in/",
        "kind": "Verification reference",
        "detail": "Incorporation identity for company or LLP selections."
      },
      {
        "name": "Invest Karnataka district information",
        "href": "https://investkarnataka.co.in/our-districts/mysuru/",
        "kind": "Verification reference",
        "detail": "Mysuru industrial and sector context; not a record count."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "MCA Company Data",
        "href": "/mca-company-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Dealers & Distributors",
        "href": "/dealers-distributors-database-india"
      }
    ]
  },
  "/database/maharashtra": {
    "heading": "Data sources for Maharashtra",
    "intro": "Mumbai office accounts, Pune manufacturing and Nashik industrial units should each retain their activity and address evidence. The published source process is research, third-party providers, business websites and industry listings.",
    "sources": [
      {
        "name": "Maharashtra company websites and business / industry directories",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Mumbai office and trade context; Pune and Nashik product or operating-unit descriptions."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "MIDC industrial-area GIS",
        "href": "https://gis.midcindia.org/MIDCGISPortal/",
        "kind": "Verification reference",
        "detail": "Estate naming and geography for Chakan, Ambad, Satpur and other selected MIDC areas."
      },
      {
        "name": "MCA21",
        "href": "https://www.mca.gov.in/",
        "kind": "Verification reference",
        "detail": "Company identity, status and recorded jurisdiction when included."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "MCA Company Data",
        "href": "/mca-company-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Dealers & Distributors",
        "href": "/dealers-distributors-database-india"
      },
      {
        "label": "Importers & Exporters",
        "href": "/importers-exporters-database-india"
      }
    ]
  },
  "/database/uttar-pradesh": {
    "heading": "Data sources for Uttar Pradesh",
    "intro": "Noida office or electronics records, Kanpur leather and Moradabad metal craft should be classified using business-level evidence. Our published channels are independent research, third-party datasets, websites and trade/industry listings.",
    "sources": [
      {
        "name": "UP company websites and trade / industry directories",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "City, product activity and business-role context for the selected UP clusters."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "UP ODOP: Moradabad metal craft",
        "href": "https://www.odopup.in/en/districts/moradabad",
        "kind": "Verification reference",
        "detail": "Official product-cluster context, separate from provider record availability."
      },
      {
        "name": "GST Portal",
        "href": "https://www.gst.gov.in/",
        "kind": "Verification reference",
        "detail": "Tax-registered business identity and status where supplied."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Dealers & Distributors",
        "href": "/dealers-distributors-database-india"
      },
      {
        "label": "Importers & Exporters",
        "href": "/importers-exporters-database-india"
      }
    ]
  },
  "/database/tamil-nadu": {
    "heading": "Data sources for Tamil Nadu",
    "intro": "Chennai auto suppliers, Tiruppur textile units and Coimbatore pump businesses need product and production evidence. Our published method combines research and third-party data with business websites and industry listings.",
    "sources": [
      {
        "name": "Tamil Nadu trade directories and business websites",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Manufacturing activity, product group and supported operating-address context."
      },
      {
        "name": "Independent research and third-party providers",
        "href": "/data-sourcing-methodology",
        "kind": "Published source category",
        "detail": "Research and supplier datasets are organised and reviewed using the methods described in our published methodology."
      },
      {
        "name": "SIPCOT",
        "href": "https://sipcot.tn.gov.in/",
        "kind": "Verification reference",
        "detail": "Industrial-park context for Sriperumbudur and Oragadam selections."
      },
      {
        "name": "Coimbatore district economy",
        "href": "https://coimbatore.nic.in/economy/",
        "kind": "Verification reference",
        "detail": "Official pump/engineering cluster background; not the provider inventory."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Importers & Exporters",
        "href": "/importers-exporters-database-india"
      }
    ]
  },
  "/about": {
    "heading": "Sources for our published business details",
    "intro": "Business identity on this page is limited to the brand and contact details published by IndiaB2BData.com. The sourcing methodology is the first-party account of our collection and review process.",
    "sources": [
      {
        "name": "Website footer and contact page",
        "href": "/contact",
        "kind": "First-party business details",
        "detail": "Published Mumbai address, phone, general email and enquiry channels."
      },
      {
        "name": "Data Sourcing & Verification Methodology",
        "href": "/data-sourcing-methodology",
        "kind": "First-party process description",
        "detail": "Independent research, third-party providers, business websites, directories and manual review practices."
      }
    ],
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "MCA Company Data",
        "href": "/mca-company-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Dealers & Distributors",
        "href": "/dealers-distributors-database-india"
      },
      {
        "label": "Importers & Exporters",
        "href": "/importers-exporters-database-india"
      }
    ]
  }
};
export const EVIDENCE_COPY = {
  source: "Source or reference", kind: "Role", detail: "Information covered", navigation: "Continue exploring",
  note: "Published source categories describe our collection process. Verification references identify where the corresponding fields can be checked; they do not mean every delivered record was extracted directly from a registry.",
  methodology: "Read our data sourcing methodology",
};
