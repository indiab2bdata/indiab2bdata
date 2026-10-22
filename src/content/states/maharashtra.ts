import { Building2, Car, Factory, Landmark, Laptop, Truck, Wrench } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-22", hubCities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Navi Mumbai", "Aurangabad", "Kolhapur", "Solapur", "Amravati"], moreCities: 15 },
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
  }
);
