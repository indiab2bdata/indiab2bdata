import { MapPinned, Network, ShieldCheck, Zap } from "lucide-react";
import type { KeywordFaq, KeywordHighlight } from "@/lib/keyword-pages";

export type DatabaseState = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  answer: string;
  intro: string[];
  highlights: KeywordHighlight[];
  cities: string[];
  moreCities: number;
  faqs: KeywordFaq[];
};

function buildHighlights(stateName: string, cityCount: number, industryFocus: string): KeywordHighlight[] {
  return [
    { icon: ShieldCheck, title: "Verified & Fresh", description: `Every ${stateName} record checked and refreshed monthly.` },
    { icon: MapPinned, title: `${cityCount}+ Cities`, description: `Coverage across every major city and district in ${stateName}.` },
    { icon: Network, title: "Industry-Wise Filters", description: `Segmented by ${industryFocus} and 500+ other categories.` },
    { icon: Zap, title: "Fast Delivery", description: "Most orders delivered within 2–6 working hours." },
  ];
}

export const databaseStates: DatabaseState[] = [
  {
    slug: "maharashtra",
    name: "Maharashtra",
    title: "Maharashtra B2B Database | Company & Business Contacts",
    metaDescription:
      "Verified B2B business database for Maharashtra — Mumbai, Pune, Nagpur, Nashik and 20+ more cities. Mobile numbers, emails and company records for sales & marketing.",
    eyebrow: "Maharashtra Business Database",
    h1: "Maharashtra B2B Database — Verified Business Contacts Across the State",
    answer:
      "IndiaB2BData.com's Maharashtra database covers verified business mobile numbers, emails and company records across Mumbai, Pune, Nagpur, Nashik and 20+ other cities — spanning finance, manufacturing, IT and trading businesses.",
    intro: [
      "Maharashtra is home to India's financial capital Mumbai and its fast-growing IT and manufacturing hub Pune, alongside industrial belts in Nagpur, Nashik and Aurangabad. Reaching the right business here means filtering past a huge, diverse economy — from BFSI head offices in BKC to MSME manufacturers in Thane-Belapur.",
      "Our Maharashtra B2B database is built city-by-city and industry-by-industry, so a real estate firm targeting Pune's IT corridor or a finance company prospecting Mumbai's trading community gets a clean, relevant list — not a generic pan-India dump.",
    ],
    highlights: buildHighlights("Maharashtra", 25, "finance, manufacturing & IT"),
    cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Navi Mumbai", "Aurangabad", "Kolhapur", "Solapur", "Amravati"],
    moreCities: 15,
    faqs: [
      {
        question: "Which Maharashtra cities are covered in the database?",
        answer:
          "Mumbai, Pune, Nagpur, Nashik, Thane, Navi Mumbai, Aurangabad, Kolhapur, Solapur, Amravati and 15+ other cities and districts across the state.",
      },
      {
        question: "Can I get data for just Mumbai or just Pune?",
        answer:
          "Yes — you can filter by a single city, a cluster of cities, or the entire state depending on your campaign.",
      },
      {
        question: "What industries are strongest in this database?",
        answer:
          "Finance & BFSI, IT/ITES, manufacturing, real estate and trading are especially well represented given Maharashtra's economic mix.",
      },
    ],
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    title: "Gujarat B2B Database | Company & Business Contacts",
    metaDescription:
      "Verified B2B business database for Gujarat — Ahmedabad, Surat, Vadodara, Rajkot and 20+ more cities. Manufacturing, textiles and chemical industry contacts.",
    eyebrow: "Gujarat Business Database",
    h1: "Gujarat B2B Database — Verified Business Contacts Across the State",
    answer:
      "IndiaB2BData.com's Gujarat database covers verified business mobile numbers, emails and company records across Ahmedabad, Surat, Vadodara, Rajkot and 20+ other cities — strong in manufacturing, textiles, chemicals and diamond trading.",
    intro: [
      "Gujarat's economy runs on manufacturing — textiles in Surat, chemicals and pharma around Ankleshwar and Vapi, ceramics in Morbi, and a dense MSME base across Ahmedabad and Rajkot. It's one of India's most business-dense states, which makes precise targeting essential.",
      "Our Gujarat B2B database is organised by city and industry cluster, so whether you're selling to textile units in Surat, chemical manufacturers in Bharuch, or trading houses in Ahmedabad, you get a list built for that specific segment.",
    ],
    highlights: buildHighlights("Gujarat", 25, "manufacturing, textiles & chemicals"),
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Jamnagar", "Gandhinagar", "Bhavnagar", "Anand", "Morbi", "Bharuch"],
    moreCities: 15,
    faqs: [
      {
        question: "Which Gujarat cities are covered in the database?",
        answer:
          "Ahmedabad, Surat, Vadodara, Rajkot, Jamnagar, Gandhinagar, Bhavnagar, Anand, Morbi, Bharuch and 15+ other cities and industrial towns.",
      },
      {
        question: "Do you have data for specific industrial clusters like Vapi or Ankleshwar?",
        answer:
          "Yes — we can filter Gujarat data down to specific industrial belts such as Vapi, Ankleshwar, Morbi (ceramics) or Surat (textiles/diamonds).",
      },
      {
        question: "Is GST/company data available for Gujarat separately?",
        answer:
          "Yes, GSTIN-linked company records for Gujarat are available as part of our GST & Company Database product.",
      },
    ],
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    title: "Tamil Nadu B2B Database | Company & Business Contacts",
    metaDescription:
      "Verified B2B business database for Tamil Nadu — Chennai, Coimbatore, Madurai, Tiruppur and 20+ more cities. Automotive, textile and manufacturing contacts.",
    eyebrow: "Tamil Nadu Business Database",
    h1: "Tamil Nadu B2B Database — Verified Business Contacts Across the State",
    answer:
      "IndiaB2BData.com's Tamil Nadu database covers verified business mobile numbers, emails and company records across Chennai, Coimbatore, Madurai, Tiruppur and 20+ other cities — strong in automotive, textiles and manufacturing.",
    intro: [
      "Tamil Nadu combines Chennai's automotive and IT corridor with Coimbatore's engineering base and Tiruppur's textile export cluster. It's a manufacturing-heavy state where the right industry filter matters as much as the right city.",
      "Our Tamil Nadu B2B database is segmented across these hubs, so an auto-components supplier targeting Chennai's OEM belt, or a textile machinery company selling into Tiruppur, gets contacts matched to that exact cluster.",
    ],
    highlights: buildHighlights("Tamil Nadu", 25, "automotive, textiles & manufacturing"),
    cities: ["Chennai", "Coimbatore", "Madurai", "Tiruppur", "Salem", "Erode", "Vellore", "Tiruchirappalli", "Thanjavur", "Hosur"],
    moreCities: 15,
    faqs: [
      {
        question: "Which Tamil Nadu cities are covered in the database?",
        answer:
          "Chennai, Coimbatore, Madurai, Tiruppur, Salem, Erode, Vellore, Tiruchirappalli, Thanjavur, Hosur and 15+ other cities and towns.",
      },
      {
        question: "Do you have textile industry data for Tiruppur and Erode?",
        answer:
          "Yes — textile and garment manufacturer contacts across Tiruppur, Erode and Coimbatore are available as an industry filter.",
      },
      {
        question: "Can I target Chennai's automotive belt specifically?",
        answer:
          "Yes, we can filter for automotive and auto-ancillary companies within Chennai and the surrounding OEM/supplier belt.",
      },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    title: "Delhi B2B Database | Company & Business Contacts",
    metaDescription:
      "Verified B2B business database for Delhi & NCR — corporate offices, trading houses and MSMEs. Mobile numbers, emails and company records for sales teams.",
    eyebrow: "Delhi Business Database",
    h1: "Delhi B2B Database — Verified Business Contacts Across the Capital",
    answer:
      "IndiaB2BData.com's Delhi database covers verified business mobile numbers, emails and company records across the National Capital — from corporate headquarters to trading and wholesale businesses.",
    intro: [
      "Delhi is where a disproportionate number of India's corporate head offices, government-facing businesses and wholesale trading houses sit — from Connaught Place and Nehru Place to Karol Bagh and Chandni Chowk. It's a decision-maker-dense market, which is exactly why bad data is most costly here.",
      "Our Delhi B2B database is verified and deduplicated so your outreach reaches the actual office or decision-maker, not a disconnected switchboard number — useful whether you're selling B2B services, corporate gifting or wholesale supply.",
    ],
    highlights: buildHighlights("Delhi", 2, "corporate services & trading"),
    cities: ["New Delhi", "Delhi"],
    moreCities: 0,
    faqs: [
      {
        question: "Does the Delhi database also cover NCR (Gurgaon, Noida, Ghaziabad)?",
        answer:
          "Delhi is available as its own filter, and Gurgaon (Haryana), Noida and Ghaziabad (Uttar Pradesh) are covered under our respective state databases — ask us for a combined NCR list.",
      },
      {
        question: "Is this useful for B2B services and corporate gifting companies?",
        answer:
          "Yes — the Delhi database is popular with B2B services, corporate gifting, office supplies and event companies targeting corporate offices directly.",
      },
      {
        question: "Can I get company/GST data for Delhi specifically?",
        answer: "Yes, GSTIN-linked company records for Delhi are available as part of our GST & Company Database product.",
      },
    ],
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    title: "Uttar Pradesh B2B Database | Company & Business Contacts",
    metaDescription:
      "Verified B2B business database for Uttar Pradesh — Noida, Ghaziabad, Lucknow, Kanpur, Agra and 20+ more cities. Mobile numbers, emails and company records.",
    eyebrow: "Uttar Pradesh Business Database",
    h1: "Uttar Pradesh B2B Database — Verified Business Contacts Across the State",
    answer:
      "IndiaB2BData.com's Uttar Pradesh database covers verified business mobile numbers, emails and company records across Noida, Ghaziabad, Lucknow, Kanpur, Agra and 20+ other cities.",
    intro: [
      "As India's most populous state, Uttar Pradesh spans very different business zones — the NCR-adjacent industrial belt of Noida, Greater Noida and Ghaziabad, the administrative and trading hub of Lucknow, and manufacturing centres like Kanpur, Agra and Moradabad.",
      "Our Uttar Pradesh B2B database lets you separate these zones cleanly — targeting Noida's IT and industrial companies differently from Kanpur's leather and manufacturing base or Agra's export units — instead of treating the whole state as one block.",
    ],
    highlights: buildHighlights("Uttar Pradesh", 25, "manufacturing, trading & IT"),
    cities: ["Noida", "Ghaziabad", "Lucknow", "Kanpur", "Agra", "Meerut", "Varanasi", "Greater Noida", "Aligarh", "Moradabad"],
    moreCities: 15,
    faqs: [
      {
        question: "Which Uttar Pradesh cities are covered in the database?",
        answer:
          "Noida, Ghaziabad, Lucknow, Kanpur, Agra, Meerut, Varanasi, Greater Noida, Aligarh, Moradabad and 15+ other cities and districts.",
      },
      {
        question: "Can I get data for just Noida and Ghaziabad (NCR belt)?",
        answer:
          "Yes — we can filter specifically for the NCR-adjacent cities (Noida, Greater Noida, Ghaziabad) separately from the rest of the state.",
      },
      {
        question: "Is manufacturer data available for Kanpur and Agra?",
        answer:
          "Yes, manufacturer and export-unit contacts for Kanpur (leather, textiles) and Agra are available under our Manufacturer Database product.",
      },
    ],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    title: "Karnataka B2B Database | Company & Business Contacts",
    metaDescription:
      "Verified B2B business database for Karnataka — Bengaluru, Mysore, Mangalore, Hubli and 10+ more cities. IT, startup and manufacturing industry contacts.",
    eyebrow: "Karnataka Business Database",
    h1: "Karnataka B2B Database — Verified Business Contacts Across the State",
    answer:
      "IndiaB2BData.com's Karnataka database covers verified business mobile numbers, emails and company records across Bengaluru, Mysore, Mangalore, Hubli and 10+ other cities — strong in IT, startups and manufacturing.",
    intro: [
      "Bengaluru anchors Karnataka's economy as India's startup and IT services capital, but the state also has a strong manufacturing and trading base in Mysore, Hubli-Dharwad, Belgaum and Mangalore's port-linked businesses.",
      "Our Karnataka B2B database separates Bengaluru's tech and startup ecosystem from the state's other industrial and trading cities, so SaaS and B2B services companies can target Bengaluru specifically while manufacturers reach the right regional clusters.",
    ],
    highlights: buildHighlights("Karnataka", 15, "IT, startups & manufacturing"),
    cities: ["Bengaluru", "Mysore", "Mangalore", "Hubli", "Belgaum", "Davanagere", "Tumkur", "Shimoga", "Gulbarga", "Udupi"],
    moreCities: 5,
    faqs: [
      {
        question: "Which Karnataka cities are covered in the database?",
        answer:
          "Bengaluru, Mysore, Mangalore, Hubli, Belgaum, Davanagere, Tumkur, Shimoga, Gulbarga, Udupi and 5+ other cities.",
      },
      {
        question: "Can I get startup and IT company data specifically for Bengaluru?",
        answer:
          "Yes — Bengaluru's IT/ITES and startup segment can be filtered separately from the rest of the Karnataka database.",
      },
      {
        question: "Is data available for Karnataka's manufacturing belt outside Bengaluru?",
        answer:
          "Yes, manufacturing and trading company contacts for Mysore, Hubli-Dharwad, Belgaum and other regional hubs are included.",
      },
    ],
  },
  {
    slug: "haryana",
    name: "Haryana",
    title: "Haryana B2B Database | Company & Business Contacts",
    metaDescription:
      "Verified B2B business database for Haryana — Gurgaon, Faridabad, Panipat, Karnal and 20+ more cities. Corporate, industrial and MSME contacts.",
    eyebrow: "Haryana Business Database",
    h1: "Haryana B2B Database — Verified Business Contacts Across the State",
    answer:
      "IndiaB2BData.com's Haryana database covers verified business mobile numbers, emails and company records across Gurgaon, Faridabad, Panipat, Karnal and 20+ other cities.",
    intro: [
      "Haryana pairs Gurgaon's corporate and multinational office density with Faridabad's industrial base and manufacturing towns like Panipat (textiles), Karnal (rice/agri) and Rohtak. It's a state where corporate and industrial buyers sit side by side.",
      "Our Haryana B2B database keeps these segments distinct, so a B2B SaaS or services company can target Gurgaon's corporate offices while a machinery or raw-material supplier reaches Faridabad, Panipat and Rohtak's manufacturing units.",
    ],
    highlights: buildHighlights("Haryana", 24, "corporate offices & manufacturing"),
    cities: ["Gurgaon", "Faridabad", "Panipat", "Karnal", "Hisar", "Rohtak", "Ambala", "Sonipat", "Panchkula", "Yamuna Nagar"],
    moreCities: 14,
    faqs: [
      {
        question: "Which Haryana cities are covered in the database?",
        answer:
          "Gurgaon, Faridabad, Panipat, Karnal, Hisar, Rohtak, Ambala, Sonipat, Panchkula, Yamuna Nagar and 14+ other cities and towns.",
      },
      {
        question: "Can I target just Gurgaon's corporate offices?",
        answer:
          "Yes — Gurgaon's corporate and MNC office segment can be filtered separately from Haryana's industrial towns.",
      },
      {
        question: "Is textile industry data available for Panipat?",
        answer:
          "Yes, Panipat's textile manufacturer and exporter contacts are available under our Manufacturer Database product.",
      },
    ],
  },
  {
    slug: "telangana",
    name: "Telangana",
    title: "Telangana B2B Database | Company & Business Contacts",
    metaDescription:
      "Verified B2B business database for Telangana — Hyderabad, Secunderabad, Warangal, Karimnagar. IT, pharma and manufacturing industry contacts.",
    eyebrow: "Telangana Business Database",
    h1: "Telangana B2B Database — Verified Business Contacts Across the State",
    answer:
      "IndiaB2BData.com's Telangana database covers verified business mobile numbers, emails and company records across Hyderabad, Secunderabad, Warangal, Karimnagar and nearby cities — strong in IT, pharma and manufacturing.",
    intro: [
      "Hyderabad drives Telangana's economy as a major IT and pharmaceutical hub — home to HITEC City's tech offices and Genome Valley's pharma and biotech companies — alongside Warangal and Karimnagar's regional trading and manufacturing base.",
      "Our Telangana B2B database lets you target Hyderabad's IT, pharma and biotech companies specifically, or reach Warangal and Karimnagar's manufacturing and trading businesses separately, depending on your campaign.",
    ],
    highlights: buildHighlights("Telangana", 7, "IT, pharma & manufacturing"),
    cities: ["Hyderabad", "Secunderabad", "Warangal", "Karimnagar", "Khammam", "Rangareddy", "Medak"],
    moreCities: 0,
    faqs: [
      {
        question: "Which Telangana cities are covered in the database?",
        answer: "Hyderabad, Secunderabad, Warangal, Karimnagar, Khammam, Rangareddy and Medak.",
      },
      {
        question: "Can I get pharma and biotech company data for Hyderabad?",
        answer:
          "Yes — Hyderabad's pharma, biotech and IT/ITES companies can be filtered as a dedicated industry segment.",
      },
      {
        question: "Is data available outside Hyderabad?",
        answer:
          "Yes, we also cover Warangal, Karimnagar, Khammam and other regional cities across Telangana.",
      },
    ],
  },
];

export function getDatabaseState(slug: string): DatabaseState | undefined {
  return databaseStates.find((s) => s.slug === slug);
}
