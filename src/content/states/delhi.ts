import { Building2, Factory, Handshake, Landmark, Laptop, ShoppingBag, Store, Truck } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-22", hubCities: ["New Delhi", "Delhi"], moreCities: 0 },
  {
    slug: "delhi",
    name: "Delhi",
    title: "Delhi Business Database | Wholesale Markets, Okhla & Corporate Contacts",
    metaDescription:
      "Delhi B2B database: wholesale traders in Chandni Chowk, Karol Bagh and Sadar Bazar, manufacturers in Okhla, Naraina and Bawana, and corporate offices in Connaught Place.",
    lead:
      "Delhi is North India's trading capital. Reach wholesalers in Chandni Chowk and Sadar Bazar, small manufacturers in Okhla, Naraina and Bawana, and corporate offices around Connaught Place and Nehru Place.",
    segmentSummary:
      "Delhi does not have Gujarat-style industry clusters. Its strength is trade and distribution. Specialist wholesale markets supply all of North India: Chandni Chowk for textiles and electricals, Sadar Bazar for FMCG and household goods, Karol Bagh for auto parts and Nehru Place for IT hardware. Light manufacturing sits in Okhla, Naraina, Mayapuri and Bawana, and Connaught Place and Jasola house corporate and professional offices.",
    segmentCards: [
      { icon: Store, title: "Wholesale Markets", description: "Traders in Chandni Chowk, Sadar Bazar, Khari Baoli, Karol Bagh and Nehru Place, tagged by product line." },
      { icon: Factory, title: "Industrial Areas", description: "Small and mid manufacturers in Okhla, Naraina, Mayapuri, Wazirpur and Bawana." },
      { icon: Building2, title: "Corporate & Professional", description: "Corporate offices, consultancies, CA and law firms in Connaught Place, Jasola, Saket and Nehru Place." },
    ],
    cities: [
      { city: "Central Delhi", detail: "Wholesale trade, Connaught Place offices" },
      { city: "South Delhi", detail: "Okhla industry, Nehru Place IT, Saket offices" },
      { city: "West Delhi", detail: "Naraina, Mayapuri, Kirti Nagar furniture" },
      { city: "North Delhi", detail: "Wazirpur, Bawana, Azadpur Mandi" },
      { city: "East Delhi", detail: "Retail, Patparganj industry, distributors" },
    ],
    useCases: [
      { icon: ShoppingBag, title: "Retail & FMCG Distribution", description: "Find Sadar Bazar and Khari Baoli wholesalers who move FMCG, household goods and dry fruits to retailers across North India." },
      { icon: Truck, title: "Distribution Partnerships", description: "Find wholesalers and stockists who supply retailers across North India from Delhi's specialist markets." },
      { icon: Laptop, title: "IT Hardware & Services", description: "Reach Nehru Place resellers and the SMEs that buy from them." },
      { icon: Landmark, title: "Business Loans for Traders", description: "Approach owners of trading firms with working-capital, GST-linked and invoice-finance products." },
      { icon: Handshake, title: "Professional Services", description: "Introduce compliance, legal and accounting services to corporate offices in CP and Jasola." },
    ],
    faqs: [
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
