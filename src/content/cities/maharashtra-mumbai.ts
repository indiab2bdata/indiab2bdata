import { Briefcase, Building2, Landmark, Store } from "lucide-react";
import { cityContent } from "@/content/shared/city-template";

export default cityContent(
  { updated: "2026-10-22" },
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
      { label: "Chartered Accountants Database", href: "/chartered-accountants-database-india" },
      { label: "CEO, CFO, CMO & IT Heads Database", href: "/ceo-cfo-cmo-it-heads-database-india" },
      { label: "Entertainment & Media Database", href: "/entertainment-media-database-india" },
      { label: "Dealers & Distributors Database", href: "/dealers-distributors-database-india" },
      { label: "Importers & Exporters Database", href: "/importers-exporters-database-india" },
      { label: "Financial Analysts & Managers Database", href: "/financial-analysts-managers-industry-database" },
    ],
    siblings: [{ label: "Pune Company Database", href: "/database/maharashtra/pune" }],
    bands: [
      "Selling to BKC's BFSI firms, or to Masjid Bunder traders? Ask for a locality-wise sample.",
      "Need head offices only, or every branch? Tell us how your team sells.",
      "Get Mumbai sample rows for the localities you cover.",
    ],
  }
);
