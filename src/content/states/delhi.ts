import { Building2, Factory, Handshake, Landmark, Laptop, ShoppingBag, Store, Truck } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-28", hubCities: ["New Delhi", "Delhi"], moreCities: 0 },
  {
    slug: "delhi",
    cityPagesHeading: "Nearby Delhi NCR city databases",
    authoredFaqsOnly: true,
    showCoverageFigures: false,
    name: "Delhi",
    h1: "Delhi Business Database by Industrial Area & Sector",
    coverageHeading: "Delhi coverage by industrial area and business cluster",
    coverageLabel: "Area / cluster",
    guide: {
    "heading": "Build a useful Delhi business shortlist",
    "intro": "A Delhi business database works best when the industrial area, business activity and contact role match your sales territory. Use the following briefs to separate factory prospects, wholesale partners and office accounts.",
    "sections": [
        {
            "heading": "Okhla, Naraina and Bawana need separate area filters",
            "paragraphs": [
                "For Okhla, name the industrial phase and the products or services relevant to your offer. A local office address and a production-unit address can refer to different places, so specify which location your team needs for visits or delivery.",
                "For Naraina, include the phase, business activity and preferred role. A machine supplier may need a production or maintenance contact, while an accounting provider may need the owner or finance office. In Bawana, add the block or pincode where known so the shortlist follows your delivery route instead of a broad Delhi address match."
            ]
        },
        {
            "heading": "Choose Delhi sectors by the buyer you serve",
            "bullets": [
                "Wholesale and distribution: specify product lines for Chandni Chowk, Sadar Bazar and other named markets.",
                "Manufacturing and industrial supply: select the production activity, industrial area and purchase or operations role.",
                "IT hardware and services: distinguish Nehru Place dealers from software firms and end-user offices.",
                "Corporate and professional services: specify the company type and office role for Connaught Place, Jasola or your chosen locality."
            ],
            "paragraphs": [
                "These are practical market segments, not a ranking of sectors by company count. Ask which sector labels are present in the selected records before finalising your filters."
            ]
        },
        {
            "heading": "Delhi records and Delhi NCR records have different boundaries",
            "paragraphs": [
                "Keep Delhi as the location filter when you need businesses within the National Capital Territory. Noida and Greater Noida belong to Uttar Pradesh; Gurgaon belongs to Haryana. For an NCR order, request a separate subtotal for each city so you can assign territories and compare the same fields."
            ]
        },
        {
            "heading": "Confirm the actual Delhi record count for your selection",
            "paragraphs": [
                "A Delhi inventory figure needs a dated, deduplicated export for the selected area and sector filters. Ask for the count date, the number of distinct businesses and any additional contacts per business for your exact area and sector filters.",
                "Do not use the fictional sample rows or a count of industrial plots as the size of this dataset. If you combine several areas, request a deduplicated total and a breakdown that explains how companies with multiple locations are counted."
            ]
        },
        {
            "heading": "Popular business lists for Delhi",
            "paragraphs": [
                "For a Delhi selection, use GST database India for tax-registration context, MCA company database for incorporated-company or LLP identity, and Company database India for an account-level brief. Specify this state and the cities or clusters you need rather than assuming a national product page is already a filtered local file.",
                "Manufacturers database India helps define production and plant-address criteria. Dealers and distributors list India focuses on channel role and product sector. Importers exporters database India adds the trade-entity perspective where your local selection needs supported import or export context.",
                "For another regional selection, compare the UP company database and the Gujarat company database. Keep the same activity, address type and counting unit when comparing territories, and check available fields for each selection."
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
    title: "Delhi Business Database: Industrial Areas",
    metaDescription:
      "Delhi business database for Okhla, Naraina and Bawana manufacturers, wholesale markets and corporate offices. Request area-wise counts and a sample.",
    lead:
      "Delhi is North India's trading capital. Reach wholesalers in Chandni Chowk and Sadar Bazar, small manufacturers in Okhla, Naraina and Bawana, and corporate offices around Connaught Place and Nehru Place.",
    segmentSummary:
      "Delhi combines specialist wholesale markets, industrial estates and corporate offices. Specialist wholesale markets supply all of North India: Chandni Chowk for textiles and electricals, Sadar Bazar for FMCG and household goods, Karol Bagh for auto parts and Nehru Place for IT hardware. Light manufacturing sits in Okhla, Naraina, Mayapuri and Bawana, and Connaught Place and Jasola house corporate and professional offices.",
    segmentCards: [
      { icon: Store, title: "Wholesale Markets", description: "Traders in Chandni Chowk, Sadar Bazar, Khari Baoli, Karol Bagh and Nehru Place, tagged by product line." },
      { icon: Factory, title: "Industrial Areas", description: "Small and mid manufacturers in Okhla, Naraina, Mayapuri, Wazirpur and Bawana." },
      { icon: Building2, title: "Corporate & Professional", description: "Corporate offices, consultancies, CA and law firms in Connaught Place, Jasola, Saket and Nehru Place." },
    ],
    cities: [
      {
            "city": "Okhla",
            "detail": "Industrial businesses; specify phase, product category and company role"
      },
      {
            "city": "Naraina",
            "detail": "Industrial and engineering businesses; specify phase and activity"
      },
      {
            "city": "Bawana",
            "detail": "Manufacturing units; specify sector, block and pincode"
      },
      {
            "city": "Mayapuri & Wazirpur",
            "detail": "Engineering, metalworking and industrial supply requirements"
      },
      {
            "city": "Chandni Chowk & Sadar Bazar",
            "detail": "Wholesale textiles, consumer goods and product-led trade"
      },
      {
            "city": "Nehru Place",
            "detail": "Computer, networking and IT hardware trade"
      },
      {
            "city": "Connaught Place & Jasola",
            "detail": "Corporate offices and professional services"
      }
],
    useCases: [
      { icon: ShoppingBag, title: "Retail & FMCG Distribution", description: "Find Sadar Bazar and Khari Baoli wholesalers who move FMCG, household goods and dry fruits to retailers across North India." },
      { icon: Truck, title: "Distribution Partnerships", description: "Find wholesalers and stockists who supply retailers across North India from Delhi's specialist markets." },
      { icon: Laptop, title: "IT Hardware & Services", description: "Reach Nehru Place resellers and the SMEs that buy from them." },
      { icon: Landmark, title: "Business Loans for Traders", description: "Approach owners of trading firms with working-capital, GST-linked and invoice-finance products." },
      { icon: Handshake, title: "Professional Services", description: "Introduce compliance, legal and accounting services to corporate offices in CP and Jasola." },
    ],
    faqs: [
  {
    "question": "Which Delhi industrial areas should I name for a factory selection?",
    "answer": "Name Okhla with its phase, Naraina with its phase, or Bawana with its block or pincode where known. Add the production activity and whether you need an operating-unit address rather than an office."
  },
  {
    "question": "Can I separate Delhi wholesale markets by product?",
    "answer": "Specify the market and product line: Chandni Chowk textiles, Sadar Bazar consumer goods or Nehru Place IT hardware are different selections. Review the locality and activity labels in the matching sample."
  },
  {
    "question": "Does the Delhi selection include Noida or Gurgaon?",
    "answer": "Delhi, Noida and Gurgaon are separate geographic selections. Add Noida or Greater Noida under Uttar Pradesh and Gurgaon under Haryana explicitly when your brief covers NCR."
  },
  {
    "question": "How do I keep Nehru Place dealers separate from IT-service offices?",
    "answer": "Use business activity together with the Nehru Place locality filter. A hardware reseller and a software-services office can share a broad IT category while serving different buyers."
  },
  {
    "question": "Can I select corporate offices separately from Delhi traders?",
    "answer": "Specify office locations such as Connaught Place or Jasola and the company activities you need. Use business-type and address-role fields to distinguish corporate offices from wholesale shops."
  }
],
    related: [
      L("Dealers & Distributors Database", "dealers-distributors-database-india"),
      L("Bank Employees Database (Delhi NCR)", "bank-employees-database-delhi-ncr"),
      L("Energy & Power Sector Database (Delhi NCR)", "energy-power-sector-database-delhi-ncr"),
      L("Computer & Laptop Dealers Database", "computer-laptop-dealers-database-india"),
      L("Company Proprietors Database", "company-proprietors-database-india"),
      L("B2B Database India", "b2b-database-india"),
    ],
    cityPages: [
      { label: "Noida Company Database", href: "/database/uttar-pradesh/noida" },
      { label: "Greater Noida Company Database", href: "/database/uttar-pradesh/greater-noida" },
      { label: "Gurgaon Company Database", href: "/database/haryana/gurgaon" },
    ],
    bands: [
      "Targeting one wholesale market, such as Chandni Chowk or Nehru Place? Ask for a market-wise sample.",
      "Need Okhla or Bawana manufacturers instead of traders? We filter by industrial area.",
      "Want all of Delhi NCR in one file? Ask for a combined Delhi-Noida-Gurgaon quote.",
    ],
  }
);
