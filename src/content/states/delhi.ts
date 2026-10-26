import { Building2, Factory, Handshake, Landmark, Laptop, ShoppingBag, Store, Truck } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-26", hubCities: ["New Delhi", "Delhi"], moreCities: 0 },
  {
    slug: "delhi",
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
                        "A verified Delhi total has not yet been supplied for publication, so the page shows counts on request. Ask for the count date, the number of distinct businesses and any additional contacts per business for your exact area and sector filters.",
                        "Do not use the fictional sample rows or a count of industrial plots as the size of this dataset. If you combine several areas, request a deduplicated total and a breakdown that explains how companies with multiple locations are counted."
                  ]
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
      {"question":"How many real records are in the Delhi business database?","answer":"The confirmed Delhi record total is available on request; no numerical total is published here yet. Send the industrial areas, sectors and contact fields you need, and ask for a dated count of distinct businesses with any additional contacts shown separately."},
      {"question":"Can I compare Okhla, Naraina and Bawana before ordering?","answer":"Request separate area-wise samples and counts for Okhla, Naraina and Bawana. Include phases, blocks or pincodes where relevant, then compare business activity, address detail and the populated contact fields for the same selection criteria."},
      { question: "Can I get Nehru Place IT dealers only?", answer: "Yes. Nehru Place computer, laptop and networking dealers can be selected on their own by locality and product category." },
      { question: "Do you cover Delhi's professional firms such as CAs and lawyers?", answer: "Yes. CA, law and consulting firms are covered by locality. For individual professionals, see our Chartered Accountants and Advocates databases." },
      { question: "Can I target a specific wholesale market?", answer: "Yes. Filter by locality or pincode to target markets such as Chandni Chowk, Sadar Bazar, Karol Bagh, Nehru Place or Kirti Nagar." },
      { question: "Does the Delhi database include Noida and Gurgaon?", answer: "No. Noida is in Uttar Pradesh and Gurgaon is in Haryana, and each has its own city database. Ask for a combined Delhi NCR file if you need all three." },
      { question: "Which Delhi industrial areas are covered?", answer: "Okhla, Naraina, Mayapuri, Wazirpur, Patparganj, Bawana and Narela, each tagged by industry where recorded." },
      { question: "Can I get only corporate offices, not traders?", answer: "Yes. Choose company type and industry filters to separate corporate and professional offices from wholesale and retail trade." },
    ],
    related: [
      L("Dealers & Distributors Database", "dealers-distributors-database-india"),
      L("Bank Employees Database (Delhi NCR)", "bank-employees-database-delhi-ncr"),
      L("Energy & Power Sector Database (Delhi NCR)", "energy-power-sector-database-delhi-ncr"),
      L("Computer & Laptop Dealers Database", "computer-laptop-dealers-database-india"),
      L("Company Proprietors Database", "company-proprietors-database-india"),
      L("Advocates & Lawyers Database", "advocates-lawyers-database-india"),
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
