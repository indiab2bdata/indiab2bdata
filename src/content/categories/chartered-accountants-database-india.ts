import { Filter, Landmark, MapPinned, ShieldCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "chartered-accountants-database-india",
    keyword: "chartered accountants database India",
    title: "Chartered Accountants Database India | CA Firms",
    metaDescription:
      "Chartered accountants database in India - CA practitioners and CA firms with contact details, city, specialisation and firm size. Ask whether a matching real sample is available.",
    eyebrow: "Chartered Accountants Database",
    h1: "Chartered Accountants Database in India",
    answer:
      "A chartered accountants database is a structured list of practising CAs and CA firms in India, with name, firm, specialisation (audit, tax, GST, advisory), city and contact details. IndiaB2BData.com supplies CA records filterable by city, state and practice area for B2B marketing and partnerships.",
    intro: [
      "India has lakhs of ICAI-qualified chartered accountants, and practising CAs advise lakhs of MSMEs on GST, income tax, audit and company compliance. That makes them one of the most influential referral channels in Indian B2B: a CA's recommendation often decides which accounting software, bank, loan product or compliance service a business uses.",
      "Our chartered accountants database helps fintech, SaaS, banking, insurance and training companies reach CAs and CA firms directly - by city, firm size and practice area - instead of relying on generic business lists.",
    ],
    highlights: [
      { icon: Landmark, title: "CAs & CA Firms", description: "Individual practitioners and partnership firms." },
      { icon: Filter, title: "Practice Filters", description: "Audit, direct tax, GST, advisory and more." },
      { icon: MapPinned, title: "City-Wise Coverage", description: "Metro, tier-2 and tier-3 cities across India." },
      { icon: ShieldCheck, title: "Business Contacts", description: "The published methodology describes deduplication before delivery; confirm other checks for the selected records." },
    ],
    dataFields: [
      "CA / partner name",
      "Firm name",
      "Practice area, such as audit, tax or GST, where available",
      "Mobile number and email ID",
      "Office address, city, state and pincode",
      "Firm size / number of partners, where available",
    ],
    sections: [
      {
        heading: "Who Can Use a CA Database?",
        paragraphs: [],
        bullets: [
          "Accounting, GST and payroll software companies selling through CAs",
          "Banks and NBFCs building MSME loan referral partnerships",
          "Insurance companies and wealth managers seeking CA tie-ups",
          "Professional training and CPE/certification providers",
          "Recruiters hiring audit, tax and finance talent",
        ],
      },
      {
        heading: "What to Check Before Buying a CA Database",
        paragraphs: [],
        bullets: [
          "Practice relevance: confirm whether records are practising CAs, firms, or CAs in employment.",
          "Location fit: check coverage in your target cities before ordering.",
          "Freshness: ask when records were last verified.",
          "Permitted use: use the data for relevant professional outreach and honour opt-outs under the DPDP Act, 2023.",
        ],
      },
    ],
    useCases: [
      "Selling accounting, GST and compliance software",
      "MSME loan and banking referral partnerships",
      "Webinars and CPE event invitations",
      "Finance and audit recruitment",
      "Insurance and investment advisory tie-ups",
    ],
    faqs: [
      { question: "What is a chartered accountants database?", answer: "It is a list of practising chartered accountants and CA firms in India with contact details, location and practice area, used for B2B marketing, partnerships and recruitment." },
      { question: "How many chartered accountants are there in India?", answer: "India has lakhs of ICAI members, and a large share of them practise through individual offices or CA firms across India." },
      { question: "Can I get a city-wise list of CA firms?", answer: "Yes. CA records can be filtered by city, state and pincode, for example CA firms in Mumbai, Delhi, Ahmedabad or Pune." },
      { question: "Can I filter CAs by specialisation?", answer: "Where recorded, you can filter by practice area such as audit, income tax, GST, company law or advisory." },
      { question: "In what format is the CA database delivered?", answer: "In Excel or CSV, ready to import into a CRM, dialer or email tool." },
      { question: "Can I get a free sample?", answer: "Ask whether a real sample for the chartered-accountant firm or professional selection is available. The public CSV is fictional and demonstrates possible layout only; check any supplied rows for required fields and selected coverage." },
    ],
    related: [
      "gst-database-india",
      "advocates-lawyers-database-india",
      "mca-company-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
      "chief-managers-database-india",
      "newly-registered-companies-india",
    ],
  },
} satisfies CategoryContent;
