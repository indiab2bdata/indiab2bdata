import type { Faq } from "@/types/landing";

/** Defaults for the FAQ section heading on pages that don't set their own. */
export const FAQ_DEFAULTS = { eyebrow: "FAQs", heading: "Common Questions" };

/** Homepage FAQs (also shown on /contact). */
export const HOME_FAQS: Faq[] = [
  {
    "question": "Does this page cover business or consumer lists?",
    "answer": "These database guides focus on business records and professional work-contact requirements. Explore the company, registry, manufacturing, channel and trade pages to define a business audience."
  },
  {
    "question": "Which states have dedicated business database guides?",
    "answer": "The six guides cover Delhi, Gujarat, Karnataka, Maharashtra, Uttar Pradesh and Tamil Nadu. Each explains its own cities, industries and business clusters rather than repeating a national selection."
  },
  {
    "question": "How does a prepared business file differ from browsing a free directory?",
    "answer": "The published preparation process includes organising records, deduplicating them and removing invalid numbers before delivery. Ask for the supported activity, city and role filters and review their completeness in a matching sample."
  },
  {
    "question": "How do I request a masked business-data sample?",
    "answer": "Use the sample form or WhatsApp to describe your business activity, locations and required fields, and ask for a small masked selection for review. Public CSV previews contain fictional examples and demonstrate the file format only."
  },
  {
    "question": "Where do I raise a business-record correction or removal request?",
    "answer": "Use the general email or phone published in our business contact details and follow the Data Sourcing & Compliance process. A named grievance-officer appointment should be confirmed separately rather than inferred from a general sales contact.",
    "link": {
      "text": "Data Sourcing & Compliance",
      "href": "/data-sourcing-compliance"
    }
  }
];

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
    "question": "How can I contact IndiaB2BData.com?",
    "answer": "Use the Mumbai business address, phone and general email published on this page and in the website footer. The contact form is also available for a sample requirement, quotation question or data concern."
  },
  {
    "question": "What should I send with a sample enquiry?",
    "answer": "Describe your target industries, locations, business activities and contact roles. Add the fields you need and ask for a sample that matches those filters rather than a generic file."
  },
  {
    "question": "What business details should I confirm before an order?",
    "answer": "Request the legal seller and applicable invoice details together with the final quotation. The written selection should also specify filters, counting unit, contact fields, price, format and delivery timing."
  },
  {
    "question": "How can I raise a concern about a business record?",
    "answer": "Send the relevant business record and the field or issue through the published general contact channel. Consult the Data Sourcing & Compliance page and ask for the applicable correction or removal process."
  },
  {
    "question": "How do I choose the right IndiaB2BData product?",
    "answer": "Start with the B2B pillar guide, then choose registry, company, manufacturing, channel or trade data according to the question you need to answer. Describe your target business, location and role so the sample can match that selection."
  }
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
