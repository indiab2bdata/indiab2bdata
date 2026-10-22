import {
  Anchor,
  Building2,
  Car,
  Cpu,
  Factory,
  FlaskConical,
  Gem,
  Handshake,
  Landmark,
  Laptop,
  Package,
  Pill,
  ShoppingBag,
  Shirt,
  Sprout,
  Store,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";
import { CLAIMS, deliveryPhrase, removalSentence } from "@/lib/claims";
import type { CoverageRow, IconCard, LandingFaq, LandingProfile, LinkItem } from "@/lib/landing/types";

/** Inputs that are genuinely different for each state. Everything shared is filled in by `stateProfile`. */
type StateInput = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  lead: string;
  segmentSummary: string;
  segmentCards: [IconCard, IconCard, IconCard];
  /** Top cities / clusters with their dominant industries. */
  cities: { city: string; detail: string }[];
  useCases: IconCard[];
  faqs: LandingFaq[];
  related: LinkItem[];
  cityPages?: LinkItem[];
  bands: [string, string, string];
};

const STATE_FIELDS = [
  "Company / business name",
  "Contact person and designation",
  "Business mobile number",
  "Business email ID",
  "Industry and business category",
  "Full address, city, district, pincode",
  "Website, where available",
  "GSTIN, where available",
];

/** FAQs every state page answers with state-specific wording - appended after the state's own questions. */
function closingFaqs(name: string): LandingFaq[] {
  return [
    {
      question: `How fast can I get a ${name} business list?`,
      answer: `${name} orders are delivered as an Excel or CSV file by email or WhatsApp, ${deliveryPhrase()} after you approve the sample and quote.`,
    },
    {
      question: `Can I opt a ${name} business out of your database?`,
      answer: `Yes. Any business or individual can request removal through our Data Sourcing & Compliance page. ${removalSentence()}`,
    },
  ];
}

function stateProfile(s: StateInput): LandingProfile {
  const rows: CoverageRow[] = s.cities.map((c) => ({ segment: c.city, detail: c.detail, records: "{{COUNT}}", fillRate: "{{FILL}}" }));
  return {
    path: `/database/${s.slug}`,
    name: `${s.name} Business Database`,
    title: s.title,
    metaDescription: s.metaDescription,
    eyebrow: `${s.name} B2B Data`,
    h1: `${s.name} Business Database: Verified B2B Contacts by City & Industry`,
    lead: s.lead,
    breadcrumbs: [
      { label: "Databases", href: "/database" },
      { label: s.name, href: `/database/${s.slug}` },
    ],
    segmentSummary: s.segmentSummary,
    segmentCards: s.segmentCards,
    coverageTable: { heading: `${s.name} coverage by city`, segmentLabel: "City", rows },
    dataFields: STATE_FIELDS,
    sample: { profile: "business", csvSlug: `${s.slug}-business-database`, state: s.name },
    useCases: s.useCases,
    buyerFaqs: [...s.faqs, ...closingFaqs(s.name)],
    pricingHint: {
      from: "{{PRICE}}",
      unit: "per record",
      note: `Priced by city, industry and fields. A single-city ${s.name} list costs less per record than a mixed state-wide pull.`,
    },
    relatedLinks: s.related,
    locationLinks: s.cityPages?.length ? { heading: `City Databases in ${s.name}`, links: s.cityPages } : undefined,
    lastUpdated: "2026-10",
    totalRecords: "{{COUNT}}",
    disclaimer: `Business contact data for lawful B2B outreach in ${s.name}. ${CLAIMS.dndScrubbing ? "Records are DND-checked before delivery, and any" : "Any"} business can request removal at any time.`,
    areaServed: { type: "State", name: s.name },
    image: { src: "/images/keywords/city-skyline.jpg", alt: `Business district skyline in ${s.name}` },
    cta: {
      formTitle: `Get a Free ${s.name} Data Sample`,
      formSubtitle: `Name the ${s.name} cities, industries and roles you need. We'll reply with sample rows and a quote.`,
      buttonLabel: "Get Free Sample",
      whatsappMessage: `Hi, I need a ${s.name} business database sample. Cities / industries:`,
      bands: s.bands,
      footerTitle: `Build Your ${s.name} Prospect List`,
      footerText: `Tell us the ${s.name} cities, industries, company size and quantity. You'll get matching sample rows, a record count and a quote.`,
    },
  };
}

const L = (label: string, slug: string): LinkItem => ({ label, href: `/${slug}` });

const states: StateInput[] = [
  {
    slug: "maharashtra",
    name: "Maharashtra",
    title: "Maharashtra Business Database | Mumbai, Pune, Nagpur B2B Contacts",
    metaDescription:
      "Maharashtra B2B database by city and industry: Mumbai BFSI and trading, Pune auto and IT, Nashik, Nagpur and Aurangabad manufacturers. Preview sample rows on the page.",
    lead:
      "Reach decision-makers across Mumbai's finance and trading hubs, Pune's auto and IT corridor, and the MIDC industrial belts of Nashik, Aurangabad and Nagpur. Filter by city, industry and role.",
    segmentSummary:
      "Maharashtra is two or three markets in one state. Mumbai and Thane run on BFSI head offices, wholesale trading and media. Pune and Pimpri-Chinchwad combine auto-component plants with IT parks in Hinjewadi and Kharadi. Nashik, Aurangabad (Chhatrapati Sambhajinagar) and Nagpur add engineering, auto and logistics. Lists here are split by city and industry, so a fintech, an industrial supplier and a B2B SaaS firm each get a different file.",
    segmentCards: [
      { icon: Landmark, title: "Mumbai BFSI & Trading", description: "Banks, NBFCs, brokers, CA firms and wholesale traders across BKC, Nariman Point, Andheri and Masjid Bunder." },
      { icon: Car, title: "Pune Auto & IT Belt", description: "Auto OEM suppliers in Chakan and Bhosari, IT and GCC offices in Hinjewadi, Magarpatta and Kharadi." },
      { icon: Factory, title: "MIDC Manufacturing", description: "Engineering, food processing and pharma units in Nashik, Aurangabad, Nagpur and Thane-Belapur." },
    ],
    cities: [
      { city: "Mumbai", detail: "BFSI, trading, media, real estate" },
      { city: "Pune", detail: "Auto components, IT/ITES, education" },
      { city: "Thane & Navi Mumbai", detail: "Chemicals, warehousing, IT parks" },
      { city: "Nashik", detail: "Engineering, defence suppliers, agri-processing" },
      { city: "Nagpur", detail: "Logistics (MIHAN), mining, distribution" },
      { city: "Aurangabad", detail: "Auto, pharma, engineering MSMEs" },
    ],
    useCases: [
      { icon: Building2, title: "Real Estate & Office Leasing", description: "Reach companies expanding in Mumbai, Thane and Pune with commercial leasing, co-working and fit-out services." },
      { icon: Landmark, title: "Fintech & Lending to Mumbai SMEs", description: "Pitch working-capital, payment and invoice-finance products to traders and MSMEs in Mumbai and Thane." },
      { icon: Wrench, title: "Industrial Supply to Pune & Nashik", description: "Reach purchase heads at auto-component and engineering units in Chakan, Bhosari, Ambad and Satpur MIDC." },
      { icon: Laptop, title: "SaaS for Pune's IT Firms", description: "Target CTOs, HR and admin heads at IT services companies and GCCs in Hinjewadi and Kharadi." },
      { icon: Truck, title: "Logistics Around Bhiwandi & Nagpur", description: "Offer warehousing, transport and 3PL services to distributors in India's busiest storage belts." },
    ],
    faqs: [
      { question: "Can I separate Mumbai city from the suburbs and Thane?", answer: "Yes. Records carry pincodes, so you can split South Mumbai, the western and eastern suburbs, Thane and Navi Mumbai into separate segments or territories." },
      { question: "Do you cover Pune's Chakan and Ranjangaon auto clusters?", answer: "Yes. Auto OEM suppliers and engineering units in Chakan, Talegaon, Ranjangaon and Pimpri-Chinchwad MIDC are covered and tagged by industry." },
      { question: "Can I get only Mumbai or only Pune businesses?", answer: "Yes. Every record carries its city and pincode, so you can buy one city, a cluster such as Mumbai-Thane-Navi Mumbai, or the whole state." },
      { question: "Which Maharashtra industries are strongest in the database?", answer: "BFSI and trading in Mumbai, auto components and IT in Pune, chemicals and warehousing in Thane-Bhiwandi, and engineering MSMEs across Nashik, Aurangabad and Nagpur." },
      { question: "Can I filter by MIDC industrial area?", answer: "Yes. Filter by pincode or locality to target MIDC zones such as Chakan, Bhosari, Ambad, Waluj or Butibori, and tell us the zones in your brief." },
      { question: "Do you include decision-maker names and designations?", answer: "Yes. Records list a named contact and designation, such as owner, director, purchase head or HR manager, alongside business phone and email." },
    ],
    related: [
      L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("Chartered Accountants Database", "chartered-accountants-database-india"),
      L("Dealers & Distributors Database", "dealers-distributors-database-india"),
      L("Logistics Service Providers Database", "logistics-management-service-providers-database-india"),
    ],
    cityPages: [
      { label: "Mumbai Company Database", href: "/database/maharashtra/mumbai" },
      { label: "Pune Company Database", href: "/database/maharashtra/pune" },
    ],
    bands: [
      "Selling only to Mumbai traders, or only to Pune's auto belt? Ask for a city-specific sample.",
      "Need purchase heads at MIDC units in Nashik or Aurangabad? We filter by industrial area.",
      "Get Maharashtra sample rows matched to your exact cities and industries.",
    ],
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    title: "Gujarat Business Database | Ahmedabad, Surat, Rajkot B2B Contacts",
    metaDescription:
      "Gujarat B2B database for textiles, chemicals, ceramics, diamonds and engineering: Ahmedabad, Surat, Vadodara, Rajkot, Morbi and Vapi contacts by city and industry.",
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
      { city: "Ahmedabad", detail: "Textiles, pharma, trading, engineering" },
      { city: "Surat", detail: "Synthetic textiles, diamonds, embroidery" },
      { city: "Vadodara", detail: "Chemicals, engineering, power equipment" },
      { city: "Rajkot", detail: "Auto parts, castings, machine tools" },
      { city: "Morbi", detail: "Ceramic tiles, sanitaryware, clocks" },
      { city: "Vapi & Ankleshwar", detail: "Chemicals, dyes, pesticides" },
    ],
    useCases: [
      { icon: Gem, title: "Diamond & Jewellery Trade Services", description: "Offer software, insurance, logistics and finance to diamond processors and traders around Surat's Varachha and Mahidhar Pura." },
      { icon: FlaskConical, title: "Chemical Raw Materials & Services", description: "Pitch raw materials, effluent treatment and lab equipment to units across the Golden Corridor." },
      { icon: Shirt, title: "Textile Machinery & Yarn", description: "Reach weavers and processors in Surat and Ahmedabad with machinery, spares and yarn supply." },
      { icon: Package, title: "Packaging for Morbi Exporters", description: "Offer cartons, pallets and export logistics to tile manufacturers shipping overseas." },
      { icon: Landmark, title: "MSME Finance & Insurance", description: "Gujarat MSMEs borrow heavily for working capital. Approach owners directly with loan and insurance products." },
    ],
    faqs: [
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
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    title: "Tamil Nadu Business Database | Chennai, Coimbatore, Tiruppur Contacts",
    metaDescription:
      "Tamil Nadu B2B database: Chennai auto and electronics, Coimbatore pumps and textile machinery, Tiruppur knitwear, Hosur and Madurai businesses by city and industry.",
    lead:
      "From Chennai's auto and electronics plants to Coimbatore's pump makers and Tiruppur's knitwear exporters, Tamil Nadu has India's most diverse manufacturing base. Pick the cluster that fits your offer.",
    segmentSummary:
      "Tamil Nadu is the most industrialised state in South India, and its clusters are sharply defined. Chennai's Sriperumbudur-Oragadam belt makes cars and electronics. Coimbatore builds pumps, motors and textile machinery. Tiruppur exports most of India's knitwear, Hosur makes two-wheelers and components, and Salem and Erode handle textiles and agri-processing. Each record is tagged by cluster and industry.",
    segmentCards: [
      { icon: Car, title: "Chennai Auto & Electronics", description: "OEM suppliers, electronics assemblers and IT firms across Sriperumbudur, Oragadam, Guindy and OMR." },
      { icon: Wrench, title: "Coimbatore Engineering", description: "Pumps, motors, foundries and textile-machinery makers in Coimbatore and its SIDCO estates." },
      { icon: Shirt, title: "Tiruppur & Erode Textiles", description: "Knitwear exporters, processors and yarn traders across Tiruppur, Erode, Karur and Salem." },
    ],
    cities: [
      { city: "Chennai", detail: "Auto, electronics, IT/ITES, healthcare" },
      { city: "Coimbatore", detail: "Pumps, motors, foundries, textile machinery" },
      { city: "Tiruppur", detail: "Knitwear manufacturing & export" },
      { city: "Hosur", detail: "Two-wheelers, auto components" },
      { city: "Madurai", detail: "Trading, rubber, textiles, education" },
      { city: "Salem & Erode", detail: "Textiles, steel, agri-processing" },
    ],
    useCases: [
      { icon: Car, title: "EV & Auto Component Supply", description: "Reach EV makers and component suppliers in Hosur, Oragadam and Sriperumbudur with batteries, electronics and tooling." },
      { icon: Cpu, title: "Industrial Automation for Chennai Plants", description: "Reach plant heads and maintenance managers at auto and electronics units in the Sriperumbudur belt." },
      { icon: Shirt, title: "Compliance & Logistics for Tiruppur Exporters", description: "Offer audits, freight forwarding and trims supply to knitwear exporters by order volume." },
      { icon: Wrench, title: "Raw Material Supply to Coimbatore", description: "Pitch castings, steel and electrical components to pump and motor manufacturers." },
      { icon: Laptop, title: "B2B SaaS for Chennai SMEs", description: "Target owners and finance heads with ERP, HR and accounting software." },
    ],
    faqs: [
      { question: "Can I target Coimbatore SIDCO and SIPCOT estates?", answer: "Yes. Units in SIDCO and SIPCOT estates around Coimbatore, Hosur, Sriperumbudur and Oragadam are covered and can be filtered by estate or pincode." },
      { question: "Do you cover Chennai's IT corridor separately from manufacturing?", answer: "Yes. OMR, Guindy and Taramani IT and ITES companies are tagged separately from the Ambattur and Sriperumbudur manufacturing belts." },
      { question: "Can I target only Tiruppur knitwear exporters?", answer: "Yes. Tiruppur records are tagged by activity, so you can choose exporters, job-work processors or yarn traders separately." },
      { question: "Is Hosur included in the Tamil Nadu database?", answer: "Yes. Hosur's auto and component manufacturers are covered and can be bought on their own or combined with Krishnagiri district." },
      { question: "Do you have Tamil-speaking contact preferences?", answer: "Language preference is not a standard field. Most Tamil Nadu buyers filter by city and industry, and handle language in their own calling team." },
      { question: "Which Chennai areas are covered?", answer: "Industrial zones such as Ambattur, Guindy, Sriperumbudur and Oragadam, and commercial areas such as T. Nagar, Anna Salai and the OMR IT corridor. Filter by pincode." },
    ],
    related: [
      L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
      L("Apparel & Garments Exporters Database", "apparel-garments-exporters-database-india"),
      L("Machinery Suppliers Database", "machinery-suppliers-services-database-india"),
      L("Metals & Minerals Industries Database", "metals-minerals-industries-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
      L("Engineers & Service Engineers Database", "engineers-service-engineers-database-india"),
    ],
    bands: [
      "Selling to Coimbatore's pump makers or Tiruppur's exporters? Ask for a cluster sample.",
      "Need plant heads in the Sriperumbudur-Oragadam auto belt? We filter by industrial park.",
      "Get Tamil Nadu sample rows for your exact cities and industries.",
    ],
  },
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
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    title: "Uttar Pradesh Business Database | Noida, Lucknow, Kanpur B2B Contacts",
    metaDescription:
      "Uttar Pradesh B2B database: Noida electronics and IT, Kanpur leather, Agra footwear, Moradabad brassware, Varanasi silk and Lucknow businesses by city and industry.",
    lead:
      "Reach Noida's electronics and IT companies, Kanpur's leather units, Agra's footwear makers, Moradabad's brass exporters and Lucknow's trading and services firms, filtered city by city.",
    segmentSummary:
      "Uttar Pradesh pairs one modern corporate hub with dozens of traditional craft clusters. Noida and Greater Noida host mobile and electronics plants, IT parks and corporate offices. Further east, the cities are known for their products: Kanpur for leather and tanneries, Agra for footwear, Moradabad for brassware, Aligarh for locks and hardware, Varanasi for silk and Firozabad for glass. Most buyers pick either the Noida corporate audience or a specific product cluster.",
    segmentCards: [
      { icon: Cpu, title: "Noida Electronics & IT", description: "Mobile and electronics manufacturers, IT firms and corporate offices across Noida, Greater Noida and the Expressway." },
      { icon: Gem, title: "Craft & Export Clusters", description: "Leather (Kanpur), footwear (Agra), brassware (Moradabad), locks (Aligarh), silk (Varanasi), glass (Firozabad)." },
      { icon: Store, title: "Trade & Services Hubs", description: "Distributors, traders and service firms in Lucknow, Ghaziabad, Meerut and Prayagraj." },
    ],
    cities: [
      { city: "Noida & Greater Noida", detail: "Electronics, IT/ITES, corporate offices" },
      { city: "Ghaziabad", detail: "Engineering, steel, distribution" },
      { city: "Lucknow", detail: "Trading, services, chikankari, education" },
      { city: "Kanpur", detail: "Leather, tanneries, textiles" },
      { city: "Agra", detail: "Footwear, handicrafts, tourism" },
      { city: "Moradabad & Aligarh", detail: "Brassware exports, locks & hardware" },
    ],
    useCases: [
      { icon: Landmark, title: "MSME Credit Across UP", description: "Reach owners of trading and manufacturing MSMEs in Kanpur, Lucknow and Ghaziabad with working-capital and equipment-finance products." },
      { icon: Cpu, title: "Components for Noida Electronics", description: "Reach procurement teams at mobile and electronics assembly plants across Noida and Greater Noida." },
      { icon: Package, title: "Export Services for Craft Clusters", description: "Offer packaging, compliance and freight to brassware, leather and footwear exporters." },
      { icon: Laptop, title: "Office Tech in Noida's IT Parks", description: "Target admin, IT and HR heads at companies in Sector 62, 63, 125-136 and along the Expressway." },
      { icon: Truck, title: "Distribution Across Eastern UP", description: "Find stockists and wholesalers in Lucknow, Kanpur and Prayagraj for regional expansion." },
    ],
    faqs: [
      { question: "Do you cover Yamuna Expressway and YEIDA sectors?", answer: "Yes. Businesses along the Yamuna Expressway and in YEIDA sectors are covered and tagged by sector, so you can include or exclude them." },
      { question: "Can I buy Varanasi silk or Firozabad glass units?", answer: "Yes. Varanasi silk weavers and traders and Firozabad glass and bangle makers are tagged by product, so each cluster can be bought on its own." },
      { question: "Is Noida data available separately?", answer: "Yes. Noida and Greater Noida each have their own city database pages, and you can buy either on its own or as part of a UP-wide file." },
      { question: "Can I get only Moradabad brass exporters?", answer: "Yes. Filter by city and industry to get only brassware and metal-handicraft manufacturers and exporters in Moradabad." },
      { question: "Do you cover Kanpur's leather industry?", answer: "Yes. Tanneries, finished-leather makers and leather-goods manufacturers in Kanpur and Unnao are covered and tagged by activity." },
      { question: "Does this include government offices in Lucknow?", answer: "No. This is business data. For public-sector staff, see our Government Employees database." },
    ],
    related: [
      L("Manufacturer Database", "manufacturer-database-india"),
      L("Importers & Exporters Database", "importers-exporters-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
      L("Government Employees Database", "government-employees-database-india"),
      L("Dealers & Distributors Database", "dealers-distributors-database-india"),
      L("Computer & IT Telecom Services Database", "computer-it-telecom-services-database-india"),
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
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    title: "Karnataka Business Database | Bengaluru, Mysuru, Mangaluru Contacts",
    metaDescription:
      "Karnataka B2B database: Bengaluru IT, startups and GCCs, Mysuru manufacturing, Mangaluru port and banking, Belagavi foundries and Hubli-Dharwad businesses by city.",
    lead:
      "Reach Bengaluru's IT companies, startups and global capability centres, plus manufacturers and traders in Mysuru, Mangaluru, Hubli-Dharwad and Belagavi. Filter by city, industry and role.",
    segmentSummary:
      "Most buyers come to Karnataka for Bengaluru, which has India's densest mix of IT services firms, product startups and GCCs, plus aerospace and electronics manufacturing. The rest of the state is different. Mysuru has auto and silk, Mangaluru has its port, refineries and cashew processing, Belagavi has foundries, and Hubli-Dharwad is North Karnataka's trading hub. Choose a tech audience in Bengaluru or a manufacturing and trade audience elsewhere.",
    segmentCards: [
      { icon: Laptop, title: "Bengaluru Tech & GCCs", description: "IT services, SaaS startups and global capability centres in Whitefield, Outer Ring Road, Electronic City and Koramangala." },
      { icon: Factory, title: "Industrial Karnataka", description: "Aerospace, machine tools and electronics in Peenya and Bommasandra, and foundries in Belagavi." },
      { icon: Anchor, title: "Coastal & North Hubs", description: "Mangaluru port, cashew and banking businesses, and Hubli-Dharwad traders and distributors." },
    ],
    cities: [
      { city: "Bengaluru", detail: "IT/ITES, startups, GCCs, aerospace" },
      { city: "Mysuru", detail: "Auto, silk, incense, tourism" },
      { city: "Mangaluru", detail: "Port, refinery, cashew, banking" },
      { city: "Hubli-Dharwad", detail: "Trading, distribution, engineering" },
      { city: "Belagavi", detail: "Foundries, auto castings, aerospace parts" },
    ],
    useCases: [
      { icon: Pill, title: "Biotech & Pharma Supply", description: "Pitch lab supplies, CRO services and equipment to biotech and pharma companies in Bengaluru's Biocon Park and Electronic City." },
      { icon: Laptop, title: "Selling SaaS to Bengaluru Startups", description: "Reach founders, CTOs and finance heads at funded startups and mid-size IT firms." },
      { icon: Building2, title: "GCC Facilities & HR Services", description: "Offer workspace, hiring and employee-benefit services to global capability centres." },
      { icon: Wrench, title: "Industrial Supply to Peenya & Belagavi", description: "Target purchase managers at machine-tool, aerospace and foundry units." },
      { icon: Truck, title: "Distribution in North Karnataka", description: "Find stockists and dealers in Hubli-Dharwad for regional consumer and B2B products." },
    ],
    faqs: [
      { question: "Do you cover Karnataka's aerospace and defence suppliers?", answer: "Yes. Aerospace, defence and precision-engineering suppliers around Bengaluru's HAL and Devanahalli aerospace belt, Peenya and Belagavi are tagged, and you can buy them as their own segment." },
      { question: "Can I filter Bengaluru by area?", answer: "Yes. Filter by pincode or area, such as Whitefield, Outer Ring Road, Electronic City, Koramangala, Peenya or Hebbal, to match your sales territory." },
      { question: "Are Hubli-Dharwad and Belagavi sold separately?", answer: "Yes. North Karnataka cities are tagged individually, so you can buy Hubli-Dharwad, Belagavi or both without paying for Bengaluru records." },
      { question: "Can I get only Bengaluru IT companies?", answer: "Yes. Filter Bengaluru by industry (IT services, product companies, GCCs) and by area, such as Whitefield, ORR or Electronic City." },
      { question: "Do you have startup founder contacts?", answer: "Yes, for Bengaluru companies where founder or director details are recorded. Specify company age or funding stage in your brief and we'll check coverage." },
      { question: "Is Peenya industrial area covered?", answer: "Yes. Peenya, Bommasandra, Jigani and Bidadi manufacturers are covered and tagged by industry." },
      { question: "Do you cover Mangaluru and coastal Karnataka?", answer: "Yes. Mangaluru, Udupi and Karwar businesses are covered, including port services, cashew processors and the trading community." },
    ],
    related: [
      L("IT Companies Database", "it-companies-database-india"),
      L("IT Professionals Database", "it-professionals-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("HR Professionals Database", "hr-human-resources-database-india"),
      L("Business Analysts Database", "business-analysts-database-india"),
      L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
    ],
    bands: [
      "Selling to Bengaluru tech companies? Ask for a sample filtered by area and company size.",
      "Need Peenya or Belagavi manufacturers instead? We filter by industrial area.",
      "Get Karnataka sample rows for your exact cities and industries.",
    ],
  },
  {
    slug: "haryana",
    name: "Haryana",
    title: "Haryana Business Database | Gurgaon, Faridabad, Manesar B2B Contacts",
    metaDescription:
      "Haryana B2B database: Gurgaon corporate offices and MNCs, Manesar auto suppliers, Faridabad engineering, Panipat textiles and Karnal agri businesses by city and industry.",
    lead:
      "Reach Gurgaon's corporate and MNC offices, auto suppliers in Manesar and Bawal, engineering units in Faridabad, and textile and agri businesses in Panipat, Sonipat and Karnal.",
    segmentSummary:
      "Haryana sits around Delhi on three sides and splits into clear audiences. Gurgaon (Gurugram) has corporate headquarters, MNC offices and consulting firms along Cyber City and Golf Course Road. Manesar, Bawal and Dharuhera form one of India's biggest auto-component belts around the Maruti and Hero plants. Faridabad is an old engineering hub, Panipat leads in home textiles and textile recycling, and Karnal and Kurukshetra trade in rice and agri inputs.",
    segmentCards: [
      { icon: Building2, title: "Gurgaon Corporate", description: "MNC offices, corporate HQs, consulting and IT firms in Cyber City, Udyog Vihar and Golf Course Road." },
      { icon: Car, title: "Auto Belt", description: "Tier-1 and tier-2 auto suppliers in Manesar, Bawal, Dharuhera and Faridabad." },
      { icon: Sprout, title: "Textiles & Agri", description: "Home-textile exporters in Panipat, plus rice millers and agri-input traders in Karnal and Kurukshetra." },
    ],
    cities: [
      { city: "Gurgaon", detail: "Corporate HQs, MNCs, IT, consulting" },
      { city: "Faridabad", detail: "Engineering, auto parts, tractors" },
      { city: "Manesar & Bawal", detail: "Auto components, industrial parks" },
      { city: "Panipat", detail: "Home textiles, textile recycling, refinery" },
      { city: "Sonipat & Karnal", detail: "Industrial units, rice mills, agri trade" },
    ],
    useCases: [
      { icon: Warehouse, title: "Warehousing on the KMP Corridor", description: "Reach logistics, e-commerce and distribution companies in the warehousing parks along the KMP Expressway and in Bilaspur and Farrukhnagar." },
      { icon: Building2, title: "Corporate Services in Gurgaon", description: "Reach admin, HR and facility heads at MNC and corporate offices with workspace, travel and benefit services." },
      { icon: Car, title: "Tier-2 Supply to the Auto Belt", description: "Pitch tooling, raw material and automation to component makers in Manesar and Bawal." },
      { icon: Shirt, title: "Export Services for Panipat", description: "Offer logistics, compliance and yarn to home-textile manufacturers and exporters." },
      { icon: Sprout, title: "Agri Inputs & Machinery", description: "Find rice millers, dealers and agri traders in Karnal, Kurukshetra and Kaithal." },
    ],
    faqs: [
      { question: "Do you cover IMT Manesar and Bawal industrial areas?", answer: "Yes. Units in IMT Manesar, Bawal, Dharuhera and Rai are covered and tagged by industry, so you can target just the auto and engineering belt." },
      { question: "Can I get Gurgaon's Cyber City and Udyog Vihar offices only?", answer: "Yes. Filter Gurgaon by area and pincode to target Cyber City, Udyog Vihar, Golf Course Road or Sohna Road offices." },
      { question: "Is Gurgaon available as a separate list?", answer: "Yes. Gurgaon has its own city database page. You can buy Gurgaon alone, Gurgaon plus Manesar, or the whole state." },
      { question: "Can I target only auto-component manufacturers?", answer: "Yes. Filter by industry and the Manesar, Bawal, Dharuhera or Faridabad industrial areas to get auto suppliers only." },
      { question: "Is Faridabad part of Haryana or Delhi NCR data?", answer: "Faridabad is in Haryana and is included here. It can also be added to a combined Delhi NCR file." },
      { question: "Do you cover Panipat textile exporters?", answer: "Yes. Panipat's home-textile, blanket and recycled-yarn businesses are covered, and exporters are tagged where recorded." },
    ],
    related: [
      L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("General & Senior Managers Database", "general-senior-managers-database-india"),
      L("HR Professionals Database", "hr-human-resources-database-india"),
      L("Apparel & Garments Exporters Database", "apparel-garments-exporters-database-india"),
      L("Machinery Suppliers Database", "machinery-suppliers-services-database-india"),
    ],
    cityPages: [{ label: "Gurgaon Company Database", href: "/database/haryana/gurgaon" }],
    bands: [
      "Need only Gurgaon's corporate offices, or only the Manesar auto belt? Ask for a targeted sample.",
      "Selling to Panipat textile exporters? We filter by product and export activity.",
      "Get Haryana sample rows for your exact cities and industries.",
    ],
  },
  {
    slug: "telangana",
    name: "Telangana",
    title: "Telangana Business Database | Hyderabad IT, Pharma & B2B Contacts",
    metaDescription:
      "Telangana B2B database: Hyderabad IT and GCCs in HITEC City, pharma and bulk-drug makers in Genome Valley and Jeedimetla, and Warangal businesses by city and industry.",
    lead:
      "Reach Hyderabad's IT companies and GCCs in HITEC City and Gachibowli, bulk-drug and pharma manufacturers across Genome Valley and Jeedimetla, and traders in Warangal and Karimnagar.",
    segmentSummary:
      "Telangana's economy is concentrated in Hyderabad, which has two distinct buyer worlds. HITEC City, Gachibowli and the Financial District house IT services firms and fast-growing global capability centres. Pharma, bulk-drug and life-sciences companies sit in Genome Valley, Jeedimetla, Pashamylaram and Bollaram, making Hyderabad a major bulk-drug hub. Warangal and Karimnagar add textiles, granite and agri trade.",
    segmentCards: [
      { icon: Laptop, title: "Hyderabad IT & GCCs", description: "IT services, product companies and GCCs across HITEC City, Gachibowli, Madhapur and the Financial District." },
      { icon: Pill, title: "Pharma & Life Sciences", description: "Bulk-drug, formulation, CRO and biotech companies in Genome Valley, Jeedimetla and Pashamylaram." },
      { icon: Warehouse, title: "Trade & Regional Industry", description: "Distributors and traders in Secunderabad, plus granite, textiles and agri businesses in Warangal and Karimnagar." },
    ],
    cities: [
      { city: "Hyderabad", detail: "IT/ITES, GCCs, pharma, real estate" },
      { city: "Secunderabad", detail: "Trading, distribution, defence suppliers" },
      { city: "Rangareddy & Medak", detail: "Pharma parks, industrial estates" },
      { city: "Warangal", detail: "Textiles, agri trade, education" },
      { city: "Karimnagar & Khammam", detail: "Granite, rice mills, agri inputs" },
    ],
    useCases: [
      { icon: Building2, title: "Real Estate in West Hyderabad", description: "Reach companies and senior employees in Gachibowli, Kokapet and Kondapur with office leasing and residential projects." },
      { icon: FlaskConical, title: "Lab & Process Equipment for Pharma", description: "Reach plant, QA and procurement heads at bulk-drug and formulation units around Hyderabad." },
      { icon: Building2, title: "GCC Setup & Hiring Services", description: "Offer workspace, recruitment and payroll services to new and expanding capability centres." },
      { icon: Laptop, title: "Enterprise SaaS for IT Firms", description: "Target CTOs and delivery heads at mid-size IT services companies in Madhapur and Gachibowli." },
      { icon: ShoppingBag, title: "Regional Distribution", description: "Find stockists and dealers in Warangal, Karimnagar and Khammam for Tier-2 expansion." },
    ],
    faqs: [
      { question: "Do you cover Genome Valley and the Jeedimetla pharma clusters?", answer: "Yes. Genome Valley, Jeedimetla, Bollaram, Pashamylaram and IDA Patancheru units are covered and tagged by activity (API, formulation, CRO or biotech)." },
      { question: "Can I target Warangal and Karimnagar without Hyderabad?", answer: "Yes. Tier-2 Telangana cities are tagged separately and can be bought without Hyderabad records, which suits regional distribution campaigns." },
      { question: "Can I get only Hyderabad pharma companies?", answer: "Yes. Filter by industry (bulk drugs, formulations, CRO/CDMO, biotech) and area (Genome Valley, Jeedimetla, Pashamylaram, Bollaram)." },
      { question: "Do you cover GCCs in Hyderabad?", answer: "Yes. Global capability centres and large IT employers in HITEC City and the Financial District are covered, with admin, HR and technology contacts where recorded." },
      { question: "Is Andhra Pradesh included?", answer: "No. This page covers Telangana only. Andhra Pradesh cities such as Visakhapatnam and Vijayawada can be quoted separately." },
      { question: "Are Secunderabad businesses part of the Hyderabad list?", answer: "They are tagged separately, so you can include or exclude them. Most buyers combine the two." },
    ],
    related: [
      L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
      L("IT Companies Database", "it-companies-database-india"),
      L("IT Professionals Database", "it-professionals-database-india"),
      L("Medical Representatives Database", "medical-representatives-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("Commercial & Residential Properties Database", "commercial-residential-properties-database-india"),
    ],
    bands: [
      "Selling to Hyderabad pharma plants, or to IT firms in HITEC City? Ask for a targeted sample.",
      "Need Genome Valley or Jeedimetla units only? We filter by industrial area.",
      "Get Telangana sample rows for your exact cities and industries.",
    ],
  },
];

export const stateProfiles: Record<string, LandingProfile> = Object.fromEntries(states.map((s) => [s.slug, stateProfile(s)]));
