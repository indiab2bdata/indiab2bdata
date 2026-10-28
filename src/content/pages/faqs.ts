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
    question: "What should I check before using a data selection?",
    answer:
      "A database listing does not by itself establish permission to contact anyone. Review the published sourcing information and terms, then check the rules that apply to your audience, purpose and communication channel before outreach.",
  },
  {
    question: "Can I review a sample before buying?",
    answer:
      "Public CSV downloads contain fictional, masked format examples. Ask whether a real sample is available for your requested audience and filters, and confirm its fields and coverage before placing an order.",
  },
  {
    question: "What format is the data delivered in?",
    answer:
      "Confirm the paid file format, delivery method, field order and timing in the written quote. The public preview is a fictional CSV format example.",
  },
  {
    question: "Can data be refreshed or corrected after delivery?",
    answer:
      "Ask which update, correction, replacement or refresh terms apply to the specific quote, and have any included service confirmed in writing before purchase.",
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
      "Start with your target industry, location, company size and role. Then compare product pages for the relevant account, registration or industry selection. Ask which fields and sample options can be confirmed for your filters.",
  },
  {
    question: "What is the difference between GST data and MCA company data?",
    answer:
      "GST data lists businesses registered under India's Goods and Services Tax, including proprietorships and partnerships. MCA (ROC) data covers companies and LLPs registered with the Ministry of Corporate Affairs, with CIN, incorporation date and directors.",
  },
  {
    question: "How can I generate B2B leads in India quickly?",
    answer:
      "A B2B leads page describes contact-level selections for outreach, not proven buying intent. Newly registered company records describe an incorporation event; that alone does not show that a company is actively buying a service.",
  },
];

export const DATABASE_HUB_FAQS: Faq[] = [
  {
    question: "Can I buy a state-wise business database in India?",
    answer:
      "This site publishes dedicated pages for selected states and cities. Ask about any other location, and confirm the geographic boundary, available fields and dated count for your brief.",
  },
  {
    question: "Which Indian state has the most businesses?",
    answer:
      "Large commercial states such as Maharashtra, Uttar Pradesh, Tamil Nadu and Gujarat are among those with the most registered businesses, and they are among our most requested state databases.",
  },
  {
    question: "Can I get a city-wise company database instead of a full state?",
    answer:
      "You can ask about a single city or a set of locations. Confirm which city, district and pincode fields are available, how nearby boundaries are treated, and the quoted counting unit and price.",
  },
  {
    question: "What fields are included in a state database?",
    answer:
      "Possible fields to discuss include business name, contact role, phone or email, address, location and industry. Availability and completeness vary; confirm the field list against a matching sample and written quote.",
  },
  {
    question: "How fast is a state-wise database delivered?",
    answer:
      "The public samples are fictional. Confirm whether a real sample is available, then agree the paid file format, delivery timing and other terms in writing.",
  },
];
