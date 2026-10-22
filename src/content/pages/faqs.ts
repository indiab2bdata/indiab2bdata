import type { Faq } from "@/types/landing";

/** Defaults for the FAQ section heading on pages that don't set their own. */
export const FAQ_DEFAULTS = { eyebrow: "FAQs", heading: "Common Questions" };

/** Homepage FAQs (also shown on /contact). */
export const DEFAULT_FAQS: Faq[] = [
  {
    question: "Is the data legally compliant to use?",
    answer:
      "Yes, all data is sourced from publicly available and permission-based channels, and supplied for lawful B2B use only. See our Data Sourcing & Compliance page for details.",
  },
  {
    question: "Can I get a free sample before buying?",
    answer:
      "Absolutely - every enquiry gets 15–20 free sample records so you can verify quality before payment.",
  },
  {
    question: "In what format is the data delivered?",
    answer:
      "You'll receive a clean Excel (.xlsx) or CSV file over email/WhatsApp, ready to import into your CRM or dialer.",
  },
  {
    question: "Do you offer a data refresh if numbers go inactive?",
    answer:
      "Yes, Business and Enterprise packages include periodic refreshes to replace inactive contacts at no extra cost.",
  },
];

export const ABOUT_FAQS: Faq[] = [
  {
    question: "What is IndiaB2BData.com?",
    answer:
      "IndiaB2BData.com is an Indian B2B data provider that supplies verified business mobile numbers, email IDs and company records across 700+ cities and 500+ industry categories, for sales, telecalling and marketing teams.",
  },
  {
    question: "Where does IndiaB2BData.com get its data?",
    answer:
      "Records are compiled from publicly available and permission-based sources such as business registries (GST, MCA/ROC), trade directories and business websites, then verified and deduplicated before delivery.",
  },
  {
    question: "Which cities and states in India do you cover?",
    answer:
      "We cover all Indian states, with dedicated databases for Maharashtra, Gujarat, Tamil Nadu, Delhi, Uttar Pradesh, Karnataka, Haryana and Telangana, and city-level data for hubs like Mumbai, Pune, Noida, Greater Noida and Gurgaon.",
  },
  {
    question: "Who uses IndiaB2BData.com databases?",
    answer:
      "Real estate firms, EdTech companies, finance and insurance agencies, manufacturers, SaaS companies, healthcare providers and e-commerce brands use our data for cold calling, email campaigns, WhatsApp outreach and market research.",
  },
  {
    question: "Is buying business data legal in India?",
    answer:
      "Using business contact data for legitimate B2B marketing is permitted when sourced lawfully and used responsibly. We expect buyers to check numbers against the DND registry and follow TRAI telemarketing rules and the Digital Personal Data Protection Act, 2023.",
  },
];

export const GUIDES_FAQS: Faq[] = [
  {
    question: "What is a B2B database?",
    answer:
      "A B2B database is a structured list of businesses and their decision-makers - company name, contact person, designation, mobile number, email, address, industry and location - used by sales and marketing teams to find and reach prospects.",
  },
  {
    question: "How do I choose the right B2B data for my business in India?",
    answer:
      "Start with your ideal customer: industry, city or state, company size and job title. Then pick a matching product - for example the GST database for verified registered firms, MCA data for private limited companies, or industry-wise lists for a specific sector - and always ask for a free sample.",
  },
  {
    question: "What is the difference between GST data and MCA company data?",
    answer:
      "GST data lists businesses registered under India's Goods and Services Tax, including proprietorships and partnerships. MCA (ROC) data covers companies and LLPs registered with the Ministry of Corporate Affairs, with CIN, incorporation date and directors.",
  },
  {
    question: "How can I generate B2B leads in India quickly?",
    answer:
      "Combine a targeted B2B leads database with multi-channel outreach - telecalling, email, WhatsApp Business and bulk SMS. Newly registered company lists work especially well, because new businesses actively buy services in their first months.",
  },
];

export const DATABASE_HUB_FAQS: Faq[] = [
  {
    question: "Can I buy a state-wise business database in India?",
    answer:
      "Yes. IndiaB2BData.com offers state-wise B2B databases for every Indian state, including Maharashtra, Gujarat, Tamil Nadu, Delhi, Uttar Pradesh, Karnataka, Haryana and Telangana, filterable by city, district, pincode and industry.",
  },
  {
    question: "Which Indian state has the most businesses?",
    answer:
      "Large commercial states such as Maharashtra, Uttar Pradesh, Tamil Nadu and Gujarat are among those with the most registered businesses, and they are among our most requested state databases.",
  },
  {
    question: "Can I get a city-wise company database instead of a full state?",
    answer:
      "Yes. You can order data for a single city such as Mumbai, Pune, Noida, Greater Noida or Gurgaon, or a custom set of cities and pincodes, so you only pay for the territory your team covers.",
  },
  {
    question: "What fields are included in a state database?",
    answer:
      "Typical fields include company name, contact person, designation, mobile number, email ID, full address, city, state, pincode, industry category and, where available, GSTIN and website.",
  },
  {
    question: "How fast is a state-wise database delivered?",
    answer:
      "State and city databases are delivered in Excel or CSV on a timeline agreed with your quote, after a free sample.",
  },
];
