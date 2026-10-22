import {
  Briefcase,
  Building2,
  Car,
  Cpu,
  Factory,
  GraduationCap,
  Landmark,
  Laptop,
  Store,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";
import { CLAIMS, deliveryPhrase, removalSentence } from "@/lib/claims";
import type { IconCard, LandingFaq, LandingProfile, LinkItem, SegmentTab } from "@/lib/landing/types";

type CityInput = {
  slug: string;
  city: string;
  state: string;
  stateSlug: string;
  title: string;
  metaDescription: string;
  lead: string;
  segmentSummary: string;
  segmentCards: [IconCard, IconCard, IconCard];
  segmentTabs: { heading: string; tabs: SegmentTab[] };
  /** Localities / business areas with what is concentrated there. */
  areas: { area: string; detail: string }[];
  useCases: IconCard[];
  faqs: LandingFaq[];
  related: LinkItem[];
  siblings: LinkItem[];
  bands: [string, string, string];
};

const CITY_FIELDS = [
  "Company / establishment name",
  "Contact person and designation",
  "Business mobile number",
  "Business email ID",
  "Industry and business category",
  "Locality, sector / area and pincode",
  "Office vs. operating-unit flag, where recorded",
  "Website, where available",
];

function cityProfile(c: CityInput): LandingProfile {
  const path = `/database/${c.stateSlug}/${c.slug}`;
  return {
    path,
    name: `${c.city} Company Database`,
    title: c.title,
    metaDescription: c.metaDescription,
    eyebrow: `${c.city} B2B Data`,
    h1: `${c.city} Company Database: Business Contacts by Area & Industry`,
    lead: c.lead,
    breadcrumbs: [
      { label: "Databases", href: "/database" },
      { label: c.state, href: `/database/${c.stateSlug}` },
      { label: c.city, href: path },
    ],
    segmentSummary: c.segmentSummary,
    segmentCards: c.segmentCards,
    segmentTabs: c.segmentTabs,
    coverageTable: { heading: `${c.city} coverage by area`, segmentLabel: "Area", rows: c.areas.map((a) => ({ segment: a.area, detail: a.detail, records: "{{COUNT}}", fillRate: "{{FILL}}" })) },
    dataFields: CITY_FIELDS,
    sample: { profile: "business", csvSlug: `${c.slug}-company-database`, city: c.city, state: c.state },
    useCases: c.useCases,
    buyerFaqs: [
      ...c.faqs,
      {
        question: `How quickly is a ${c.city} list delivered?`,
        answer: `You receive an Excel or CSV file by email or WhatsApp, ${deliveryPhrase()} after you approve the sample and quote.`,
      },
      {
        question: `Can a ${c.city} business ask to be removed?`,
        answer: `Yes. Use the removal process on our Data Sourcing & Compliance page. ${removalSentence()}`,
      },
    ],
    pricingHint: {
      from: "{{PRICE}}",
      unit: "per record",
      note: `Priced by area, industry and fields. A focused ${c.city} locality list costs less per record than a broad metro pull.`,
    },
    relatedLinks: c.related,
    locationLinks: {
      heading: `More Location Databases Near ${c.city}`,
      links: [{ label: `${c.state} Business Database`, href: `/database/${c.stateSlug}` }, ...c.siblings],
    },
    lastUpdated: "2026-10",
    totalRecords: "{{COUNT}}",
    disclaimer: `Business contact data for lawful B2B outreach in ${c.city}. ${CLAIMS.dndScrubbing ? "Mobile numbers are DND-checked before delivery, and any" : "Any"} business can request removal at any time.`,
    areaServed: { type: "City", name: c.city },
    image: { src: "/images/keywords/city-skyline.jpg", alt: `Business district in ${c.city}` },
    cta: {
      formTitle: `Get a Free ${c.city} Data Sample`,
      formSubtitle: `Name the ${c.city} areas, industries and roles you need. We'll reply with sample rows and a quote.`,
      buttonLabel: "Get Free Sample",
      whatsappMessage: `Hi, I need a ${c.city} company database sample. Areas / industries:`,
      bands: c.bands,
      footerTitle: `Build Your ${c.city} Prospect List`,
      footerText: `Send the ${c.city} areas, industries, company size and quantity. You'll get matching sample rows, a record count and a quote.`,
    },
  };
}

const L = (label: string, href: string): LinkItem => ({ label, href });

const cities: CityInput[] = [
  {
    slug: "noida",
    city: "Noida",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    title: "Noida Company Database | IT, Electronics & Corporate Contacts by Sector",
    metaDescription:
      "Noida company database by sector: IT parks in Sectors 62-63 and 125-136, electronics plants in Phase 2 and Sector 80s, and corporate offices along the Expressway. 5 sample rows on the page.",
    lead:
      "Reach IT companies, electronics manufacturers and corporate offices across Noida's numbered sectors. Filter by sector, industry and role so your list matches the area your team actually covers.",
    segmentSummary:
      "Noida is planned in numbered sectors, which makes it one of the easiest Indian cities to target precisely. Sectors 62-63 and 125-136 along the Expressway hold IT, ITES and corporate offices. Phase 2, Sector 80-83 and the Hosiery Complex are manufacturing and export zones, and the city is now one of India's largest mobile-phone and electronics production hubs. Choose sectors, and the list follows your territory.",
    segmentCards: [
      { icon: Laptop, title: "IT & Corporate Offices", description: "Software, ITES, media and corporate offices in Sectors 16-18, 62-63, 125-136 and along the Noida-Greater Noida Expressway." },
      { icon: Cpu, title: "Electronics Manufacturing", description: "Mobile-phone, consumer-electronics and component plants in Phase 2, the Sector 60s and the Sector 80s." },
      { icon: Factory, title: "Garments & MSMEs", description: "Garment exporters in the Hosiery Complex and Phase 2, plus engineering MSMEs in Sectors 57-60 and 63." },
    ],
    segmentTabs: {
      heading: "Noida segments by buyer",
      tabs: [
        { id: "it", label: "IT & Corporate", summary: "Offices in the Expressway and Sector 62 belts. Decisions are made by HR, admin and IT heads, often with a parent office in Delhi or abroad.", examples: ["HR Head","Admin Manager","IT Manager","Centre Head"], bestFor: "SaaS, staffing, facilities, corporate transport." },
        { id: "mfg", label: "Electronics & Manufacturing", summary: "Assembly plants and component makers in Phase 2 and the Sector 80s, run by plant heads and purchase teams with vendor approval processes.", examples: ["Plant Head","Purchase Manager","Quality Head","Maintenance Lead"], bestFor: "Components, tooling, contract staffing, industrial services." },
        { id: "export", label: "Garment Exporters", summary: "Exporters in the Hosiery Complex and NSEZ, owner-led and with seasonal order peaks.", examples: ["Owner","Merchandising Head","Production Manager","Export Executive"], bestFor: "Trims, compliance audits, freight forwarding." },
      ],
    },
    areas: [
      { area: "Sectors 62-63", detail: "IT/ITES, institutes, MSME units" },
      { area: "Sectors 125-136 (Expressway)", detail: "Corporate offices, IT parks, SEZs" },
      { area: "Sectors 16-18", detail: "Media, retail, commercial offices" },
      { area: "Phase 2 & Hosiery Complex", detail: "Garment exports, electronics, NSEZ" },
      { area: "Sectors 57-60 & 80-83", detail: "Engineering, electronics, auto parts" },
    ],
    useCases: [
      { icon: Laptop, title: "SaaS & IT Services to Noida Offices", description: "Reach CTOs, HR and admin heads at IT and corporate offices in Sector 62 and along the Expressway." },
      { icon: Cpu, title: "Components for Electronics Plants", description: "Pitch components, tooling and contract services to mobile and electronics assemblers in Phase 2 and the Sector 80s." },
      { icon: Truck, title: "Export Logistics for Garment Units", description: "Offer freight, compliance audits and trims to exporters in the Hosiery Complex and NSEZ." },
      { icon: Building2, title: "Facilities & Office Services", description: "Sell housekeeping, security, cafeteria and fit-out services to offices sector by sector." },
    ],
    faqs: [
      { question: "Can I target specific Noida sectors?", answer: "Yes. Every record carries its sector and pincode, so you can buy only Sectors 62-63, only the Expressway belt, or any list of sectors you name." },
      { question: "Is Greater Noida included in a Noida list?", answer: "No. Greater Noida has its own database page. Order both together if you need them, and the file labels each city separately." },
      { question: "Can I get only electronics or garment manufacturers?", answer: "Yes. Filter by industry to get electronics and component makers, or garment exporters, without IT and corporate offices." },
      { question: "Do you have HR and admin contacts at Noida IT companies?", answer: "Yes, where the role is recorded. Name the functions you need (HR, admin, IT or procurement) and the quote shows how many matching records are available." },
    ],
    related: [
      L("IT Companies Database", "/it-companies-database-india"),
      L("IT Professionals Database", "/it-professionals-database-india"),
      L("Apparel & Garments Exporters Database", "/apparel-garments-exporters-database-india"),
      L("Manufacturer Database", "/manufacturer-database-india"),
      L("HR Professionals Database", "/hr-human-resources-database-india"),
      L("Computer & IT Telecom Services Database", "/computer-it-telecom-services-database-india"),
    ],
    siblings: [L("Greater Noida Company Database", "/database/uttar-pradesh/greater-noida"), L("Gurgaon Company Database", "/database/haryana/gurgaon"), L("Delhi Business Database", "/database/delhi")],
    bands: [
      "Selling only to the Expressway IT parks, or only to Phase 2 manufacturers? Ask for a sector-wise sample.",
      "Need HR or admin heads at Noida offices? Name the role and the sectors.",
      "Get Noida sample rows for the sectors your team actually covers.",
    ],
  },
  {
    slug: "greater-noida",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    title: "Greater Noida Company Database | Industrial Areas, Ecotech & Knowledge Park",
    metaDescription:
      "Greater Noida company database: manufacturers in Ecotech, Surajpur, Kasna and Site B/C, plus institutions in Knowledge Park and logistics along the Yamuna Expressway. Sample rows on the page.",
    lead:
      "Reach manufacturers in Ecotech, Surajpur, Kasna and Site B/C, institutions in Knowledge Park, and logistics firms along the Yamuna Expressway. Filter by industrial area and business type.",
    segmentSummary:
      "Greater Noida is an industrial and institutional city, not an office market. Its Ecotech sectors, Surajpur and Kasna house consumer-durable, auto-component, packaging and electronics plants. Knowledge Park is one of North India's densest clusters of engineering, management and professional colleges. The Yamuna Expressway corridor towards Jewar is pulling in warehousing and new industrial land. Buyers usually want factories or institutions, so lists here are tagged by establishment type.",
    segmentCards: [
      { icon: Factory, title: "Industrial Areas", description: "Plants in Ecotech I-XII, Surajpur, Kasna and Site B/C: consumer durables, auto parts, packaging and electronics." },
      { icon: GraduationCap, title: "Knowledge Park Institutions", description: "Engineering, management, law and pharmacy colleges and private universities in Knowledge Park I-V." },
      { icon: Warehouse, title: "Expressway Logistics", description: "Warehousing, transport and new industrial units along the Yamuna Expressway and the YEIDA sectors." },
    ],
    segmentTabs: {
      heading: "Greater Noida segments by buyer",
      tabs: [
        { id: "plants", label: "Factories", summary: "Operating plants in Ecotech, Surajpur and Kasna, where buying sits with plant and maintenance heads.", examples: ["Plant Head","Maintenance Manager","Purchase Manager","EHS Officer"], bestFor: "Spares, safety equipment, AMC services." },
        { id: "campus", label: "Institutions", summary: "Colleges and universities in Knowledge Park, where admin, placement and principal offices decide.", examples: ["Director / Principal","Registrar","Placement Officer","Admin Head"], bestFor: "Ed-tech, labs, recruitment drives, campus services." },
        { id: "logistics", label: "Logistics & Warehousing", summary: "Warehouses and transport companies along the Expressway, run by operations heads managing capacity.", examples: ["Operations Head","Warehouse Manager","Fleet Manager","Owner"], bestFor: "Material handling, fleet services, WMS software." },
      ],
    },
    areas: [
      { area: "Ecotech I-XII", detail: "Consumer durables, electronics, packaging" },
      { area: "Surajpur & Kasna", detail: "Auto components, engineering, chemicals" },
      { area: "Site B / Site C", detail: "Mixed manufacturing, MSMEs" },
      { area: "Knowledge Park I-V", detail: "Colleges, universities, training" },
      { area: "Yamuna Expressway / YEIDA", detail: "Warehousing, new industrial units" },
    ],
    useCases: [
      { icon: Wrench, title: "Plant Maintenance & Spares", description: "Reach plant heads and maintenance managers at factories in Ecotech, Surajpur and Kasna." },
      { icon: GraduationCap, title: "Campus Partnerships", description: "Approach Knowledge Park colleges for placements, ed-tech, labs and campus services." },
      { icon: Truck, title: "Warehousing & Transport", description: "Offer 3PL, fleet and warehousing services to manufacturers and distributors along the Expressway." },
      { icon: Briefcase, title: "Industrial Safety & Compliance", description: "Sell safety audits, fire systems and compliance services to factories by industrial area." },
    ],
    faqs: [
      { question: "Can I filter by Ecotech sector, Surajpur or Kasna?", answer: "Yes. Records carry the industrial area and pincode, so you can choose specific Ecotech sectors or the Surajpur and Kasna estates." },
      { question: "Is Greater Noida West (Noida Extension) included?", answer: "It is tagged separately. Greater Noida West is mostly residential and retail, so most industrial buyers leave it out. Add it if your offer suits it." },
      { question: "Can I separate factories from registered offices?", answer: "Yes, where the record shows it. Ask for operating units only and the file marks each row as an office or a factory." },
      { question: "Do you cover the colleges in Knowledge Park?", answer: "Yes. Institutions in Knowledge Park I-V are covered at organisation level, with admin, placement or principal contacts where recorded." },
    ],
    related: [
      L("Manufacturing Companies Database", "/manufacturing-companies-database-india"),
      L("Educational Institutes Database", "/educational-institutes-database-india"),
      L("Logistics Service Providers Database", "/logistics-management-service-providers-database-india"),
      L("Machinery Suppliers Database", "/machinery-suppliers-services-database-india"),
      L("Building Material Database", "/building-material-database-india"),
      L("Contractors Database", "/contractors-database-india"),
    ],
    siblings: [L("Noida Company Database", "/database/uttar-pradesh/noida"), L("Delhi Business Database", "/database/delhi")],
    bands: [
      "Need factories in specific Ecotech sectors only? Ask for an area-wise sample.",
      "Selling to Knowledge Park colleges? We list institutions separately from industry.",
      "Get Greater Noida sample rows for your industrial areas.",
    ],
  },
  {
    slug: "gurgaon",
    city: "Gurgaon",
    state: "Haryana",
    stateSlug: "haryana",
    title: "Gurgaon Company Database | Gurugram Corporate, MNC & Industrial Contacts",
    metaDescription:
      "Gurgaon (Gurugram) company database: MNC and corporate offices in Cyber City, Udyog Vihar and Golf Course Road, plus Manesar industry. Filter by area and role, and see 5 sample rows on the page.",
    lead:
      "Reach MNC and corporate offices in Cyber City, Udyog Vihar and Golf Course Road, plus the industrial units around IMT Manesar. Filter by area, industry and decision-maker role.",
    segmentSummary:
      "Gurgaon (officially Gurugram) has more Fortune 500 and MNC offices than almost any Indian city outside Mumbai and Bengaluru. Cyber City and Udyog Vihar hold IT, consulting and corporate HQs. Golf Course Road and Sohna Road add newer towers and startups. IMT Manesar to the south-west is an auto and engineering belt. Corporate buyers and industrial buyers want very different lists, so this one is split by area.",
    segmentCards: [
      { icon: Building2, title: "MNC & Corporate HQs", description: "Corporate offices and regional HQs in DLF Cyber City, Cyber Hub and Golf Course Road." },
      { icon: Laptop, title: "IT, Consulting & Startups", description: "IT services, consulting firms and funded startups across Udyog Vihar, Sohna Road and Golf Course Extension." },
      { icon: Car, title: "Manesar Industry", description: "Auto-component and engineering units in IMT Manesar, available as a separate segment." },
    ],
    segmentTabs: {
      heading: "Gurgaon segments by buyer",
      tabs: [
        { id: "mnc", label: "MNC & Corporate Offices", summary: "Large offices in Cyber City and on Golf Course Road, with formal procurement and several stakeholders.", examples: ["CHRO","Admin Head","CFO","Procurement Lead"], bestFor: "Benefits, transport, workspace, enterprise software." },
        { id: "startup", label: "Startups & SMEs", summary: "Funded startups and growing SMEs on Sohna Road and Golf Course Extension, where founders still decide quickly.", examples: ["Founder","COO","Head of People","Finance Manager"], bestFor: "SaaS, payroll, co-working, legal and compliance." },
        { id: "manesar", label: "Manesar Industry", summary: "Auto and engineering plants in IMT Manesar, with plant-led buying and vendor approvals.", examples: ["Plant Head","Purchase Manager","Quality Head","Maintenance Lead"], bestFor: "Tooling, automation, raw material, industrial staffing." },
      ],
    },
    areas: [
      { area: "Cyber City & Cyber Hub", detail: "MNC offices, corporate HQs, consulting" },
      { area: "Udyog Vihar", detail: "IT/ITES, BPO, manufacturing offices" },
      { area: "Golf Course Road & Extension", detail: "Corporate towers, startups, real estate" },
      { area: "Sohna Road", detail: "SME offices, startups, retail" },
      { area: "IMT Manesar", detail: "Auto components, engineering" },
    ],
    useCases: [
      { icon: Building2, title: "Corporate & Employee Services", description: "Reach HR, admin and facility heads at MNC offices with benefits, transport, travel and workspace services." },
      { icon: Briefcase, title: "B2B SaaS & Consulting", description: "Target CXOs and department heads at corporate HQs and consulting firms in Cyber City." },
      { icon: Landmark, title: "Wealth & Insurance for Senior Staff", description: "Approach senior managers at Gurgaon corporates with wealth-management and group-insurance products." },
      { icon: Wrench, title: "Industrial Supply to Manesar", description: "Pitch tooling, automation and raw material to auto-component makers in IMT Manesar." },
    ],
    faqs: [
      { question: "Is Gurugram the same as Gurgaon in your data?", answer: "Yes. Both names refer to the same city. Every record uses one consistent city label, so your CRM won't end up with two copies of the same city." },
      { question: "Can I target Cyber City offices only?", answer: "Yes. Filter by area and pincode to get only Cyber City, Udyog Vihar, Golf Course Road or Sohna Road offices." },
      { question: "Is Manesar included in a Gurgaon list?", answer: "Only if you ask for it. IMT Manesar is tagged as a separate industrial segment, because corporate and factory buyers rarely want both." },
      { question: "Do you have HR, procurement or CXO contacts?", answer: "Yes, where the role is recorded. Name the functions you need, and the quote shows the matching count for each role." },
    ],
    related: [
      L("CEO, CFO, CMO & IT Heads Database", "/ceo-cfo-cmo-it-heads-database-india"),
      L("General & Senior Managers Database", "/general-senior-managers-database-india"),
      L("HR Professionals Database", "/hr-human-resources-database-india"),
      L("IT Companies Database", "/it-companies-database-india"),
      L("Consultants & Consulting Services Database", "/consultants-consulting-services-database-india"),
      L("Manufacturing Companies Database", "/manufacturing-companies-database-india"),
    ],
    siblings: [L("Delhi Business Database", "/database/delhi"), L("Noida Company Database", "/database/uttar-pradesh/noida")],
    bands: [
      "Need only Cyber City MNC offices? Ask for an area-wise sample.",
      "Selling to Manesar's auto belt instead? We split it out as its own segment.",
      "Get Gurgaon sample rows with the roles you sell to.",
    ],
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    title: "Mumbai Company Database | BKC, Nariman Point, Andheri & Suburban Contacts",
    metaDescription:
      "Mumbai company database by locality: BFSI in BKC and Nariman Point, media and offices in Andheri and Lower Parel, and wholesale traders in Masjid Bunder. Preview masked sample rows on the page.",
    lead:
      "Reach BFSI firms in BKC and Nariman Point, media and corporate offices in Andheri and Lower Parel, and wholesale traders around Masjid Bunder and Crawford Market, all filtered by locality.",
    segmentSummary:
      "Mumbai's buyers are spread across distinct business districts. BKC, Nariman Point and Fort hold banks, NBFCs, brokers and the corporate HQs around them. Lower Parel and Andheri have media, advertising and new-age offices, and the Masjid Bunder, Crawford Market and Kalbadevi belt is one of India's biggest wholesale-trading areas. The island city and the suburbs are separate districts, and Thane and Navi Mumbai are separate markets again, so lists here are locality-based.",
    segmentCards: [
      { icon: Landmark, title: "BFSI & Corporate HQs", description: "Banks, NBFCs, brokers, insurers and corporate headquarters in BKC, Nariman Point, Fort and Worli." },
      { icon: Briefcase, title: "Media & New-Age Offices", description: "Advertising, media, entertainment and startup offices in Andheri, Lower Parel and Goregaon." },
      { icon: Store, title: "Wholesale & Trading", description: "Traders in Masjid Bunder, Crawford Market, Kalbadevi and Bhuleshwar, tagged by product line." },
    ],
    segmentTabs: {
      heading: "Mumbai segments by buyer",
      tabs: [
        { id: "bfsi", label: "BFSI & HQs", summary: "Banks, NBFCs, brokers and corporate headquarters, which are compliance-heavy with long, multi-stakeholder cycles.", examples: ["CXO","Compliance Head","IT Head","Operations Head"], bestFor: "Fintech, regtech, cybersecurity, consulting." },
        { id: "media", label: "Media & Services", summary: "Media, advertising and professional-services firms in Andheri and Lower Parel, project-driven and quick to decide.", examples: ["Founder / Partner","Producer","Head of Operations","Finance Manager"], bestFor: "Production services, software, workspace, staffing." },
        { id: "trade", label: "Wholesale Traders", summary: "Family-run trading houses in Masjid Bunder and Kalbadevi, where the owner is the buyer and credit terms matter.", examples: ["Owner","Partner","Accountant","Godown Manager"], bestFor: "Working capital, logistics, billing software." },
      ],
    },
    areas: [
      { area: "BKC & Kurla", detail: "BFSI, corporate HQs, consulates" },
      { area: "Nariman Point, Fort & Ballard Estate", detail: "Banks, brokers, shipping, law firms" },
      { area: "Lower Parel & Worli", detail: "Corporate offices, media, startups" },
      { area: "Andheri & Goregaon", detail: "Media, entertainment, IT, SMEs" },
      { area: "Masjid Bunder & Kalbadevi", detail: "Wholesale trade, textiles, dry goods" },
    ],
    useCases: [
      { icon: Landmark, title: "Fintech & BFSI Services", description: "Reach compliance, operations and technology heads at banks, NBFCs and brokers in BKC and Fort." },
      { icon: Store, title: "Working Capital for Traders", description: "Approach wholesale traders in Masjid Bunder and Kalbadevi with credit, payment and logistics products." },
      { icon: Briefcase, title: "Agency & Media Partnerships", description: "Find production houses, ad agencies and media firms in Andheri and Lower Parel for B2B partnerships." },
      { icon: Building2, title: "Office Leasing & Facilities", description: "Reach admin heads at expanding offices with leasing, fit-out and facility services." },
    ],
    faqs: [
      { question: "Can I target Mumbai's shipping and logistics firms?", answer: "Yes. Shipping lines, freight forwarders and customs brokers around Ballard Estate, the JNPA side and Andheri-Marol are tagged by activity and can be bought as their own segment." },
      { question: "Can I target specific Mumbai localities?", answer: "Yes. Every record carries its locality and pincode, so you can choose BKC only, the island city only, the western suburbs, or your own list of areas." },
      { question: "Are Thane and Navi Mumbai part of a Mumbai list?", answer: "No. They are separate markets. Add them to your brief and the file labels each city separately." },
      { question: "Can I get BFSI firms only?", answer: "Yes. Filter by industry for banks, NBFCs, brokers, insurers and wealth managers. Most of them are in BKC, Fort and Nariman Point." },
      { question: "Do you include branches or only head offices?", answer: "Both are available. Ask for head offices only for account-based selling, or all branches for field sales." },
    ],
    related: [
      L("Chartered Accountants Database", "/chartered-accountants-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "/ceo-cfo-cmo-it-heads-database-india"),
      L("Entertainment & Media Database", "/entertainment-media-database-india"),
      L("Dealers & Distributors Database", "/dealers-distributors-database-india"),
      L("Importers & Exporters Database", "/importers-exporters-database-india"),
      L("Financial Analysts & Managers Database", "/financial-analysts-managers-industry-database"),
    ],
    siblings: [L("Pune Company Database", "/database/maharashtra/pune")],
    bands: [
      "Selling to BKC's BFSI firms, or to Masjid Bunder traders? Ask for a locality-wise sample.",
      "Need head offices only, or every branch? Tell us how your team sells.",
      "Get Mumbai sample rows for the localities you cover.",
    ],
  },
  {
    slug: "pune",
    city: "Pune",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    title: "Pune Company Database | Hinjewadi IT, Chakan Auto & PCMC Industry Contacts",
    metaDescription:
      "Pune company database: IT and GCC offices in Hinjewadi, Kharadi and Magarpatta, auto and engineering units in Chakan, Bhosari and Pimpri-Chinchwad. Filter by area and preview sample rows on the page.",
    lead:
      "Reach IT and GCC offices in Hinjewadi, Kharadi and Magarpatta, and auto and engineering plants in Chakan, Bhosari and Pimpri-Chinchwad. Offices and factories come as separate segments.",
    segmentSummary:
      "Pune has two economies a few kilometres apart. The IT side, Hinjewadi, Kharadi, Magarpatta and Baner, is full of IT services firms, product companies and global capability centres. The industrial side, Pimpri-Chinchwad, Bhosari, Chakan, Talegaon and Ranjangaon, is one of India's largest auto and engineering belts. A software vendor and an industrial supplier need different lists, so every record is tagged as office-belt or industrial-belt.",
    segmentCards: [
      { icon: Laptop, title: "IT Parks & GCCs", description: "IT services firms, product companies and GCCs in Hinjewadi Phases 1-3, Kharadi EON, Magarpatta and Baner." },
      { icon: Car, title: "Auto & Engineering Belt", description: "OEM suppliers and engineering units in Chakan, Bhosari, Pimpri-Chinchwad, Talegaon and Ranjangaon MIDC." },
      { icon: GraduationCap, title: "Education & Services", description: "Colleges, training institutes and service firms across Shivajinagar, Kothrud and Viman Nagar." },
    ],
    segmentTabs: {
      heading: "Pune segments by buyer",
      tabs: [
        { id: "it", label: "IT & GCCs", summary: "IT services firms and capability centres in Hinjewadi and Kharadi, with HR, IT and admin as separate buying centres.", examples: ["Delivery Head","CTO / IT Head","HR Head","Admin Manager"], bestFor: "Enterprise SaaS, hiring, employee services." },
        { id: "auto", label: "Auto & Engineering", summary: "OEM suppliers in Chakan and Bhosari, where plant and purchase heads work to OEM quality standards.", examples: ["Plant Head","Purchase Manager","Quality Head","Tool Room Head"], bestFor: "Tooling, automation, raw material, calibration." },
        { id: "edu", label: "Education", summary: "Colleges and training institutes across the city, buying through directors and placement offices.", examples: ["Director","Principal","Placement Officer","Admin Head"], bestFor: "Ed-tech, labs, campus recruitment." },
      ],
    },
    areas: [
      { area: "Hinjewadi Phases 1-3", detail: "IT services, GCCs, product companies" },
      { area: "Kharadi, Viman Nagar & Magarpatta", detail: "IT parks, BPO, corporate offices" },
      { area: "Pimpri-Chinchwad & Bhosari", detail: "Auto components, engineering MSMEs" },
      { area: "Chakan & Talegaon", detail: "OEM plants, tier-1 suppliers" },
      { area: "Shivajinagar, Kothrud & Baner", detail: "Education, services, SMEs" },
    ],
    useCases: [
      { icon: Laptop, title: "Enterprise Software to Pune IT", description: "Reach CTOs and delivery heads at IT services firms and GCCs in Hinjewadi and Kharadi." },
      { icon: Wrench, title: "Tooling & Automation for Chakan", description: "Pitch automation, tooling and raw material to auto-component makers in Chakan and Bhosari MIDC." },
      { icon: Briefcase, title: "Hiring & HR Services", description: "Offer staffing, payroll and campus-hiring services to HR heads in the IT parks." },
      { icon: GraduationCap, title: "Ed-Tech & Institute Partnerships", description: "Approach colleges and training institutes with labs, placement and course partnerships." },
    ],
    faqs: [
      { question: "Can I get only Hinjewadi IT companies?", answer: "Yes. Filter by area to get only Hinjewadi Phases 1-3, or combine it with Kharadi and Magarpatta for a full IT-corridor list." },
      { question: "Are Pimpri-Chinchwad and Chakan included in a Pune list?", answer: "Yes, but as separate industrial segments. You can buy the IT belt, the industrial belt, or both, and each is clearly labelled." },
      { question: "Can I separate offices from factories?", answer: "Yes. Records are tagged as office or operating unit where known, so a software vendor gets offices and an industrial supplier gets plants." },
      { question: "Do you have plant-head or purchase contacts at auto suppliers?", answer: "Yes, where the role is recorded. Ask for plant, maintenance or purchase roles in Chakan and Bhosari and the quote shows the matching count." },
    ],
    related: [
      L("IT Companies Database", "/it-companies-database-india"),
      L("IT Professionals Database", "/it-professionals-database-india"),
      L("Manufacturing Companies Database", "/manufacturing-companies-database-india"),
      L("Machinery Suppliers Database", "/machinery-suppliers-services-database-india"),
      L("Engineers & Service Engineers Database", "/engineers-service-engineers-database-india"),
      L("Educational Institutes Database", "/educational-institutes-database-india"),
    ],
    siblings: [L("Mumbai Company Database", "/database/maharashtra/mumbai")],
    bands: [
      "IT belt or industrial belt? Ask for a Pune sample split the way you sell.",
      "Need purchase heads at Chakan auto suppliers? Name the role and the MIDC area.",
      "Get Pune sample rows for your exact areas.",
    ],
  },
];

export const cityProfiles: Record<string, LandingProfile> = Object.fromEntries(cities.map((c) => [`${c.stateSlug}/${c.slug}`, cityProfile(c)]));
