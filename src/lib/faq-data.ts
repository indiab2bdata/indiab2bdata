export type FaqItem = { question: string; answer: string };

export const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "Is the data legally compliant to use?",
    answer:
      "Yes, all data is sourced from publicly available and permission-based channels, and DND numbers are scrubbed before delivery.",
  },
  {
    question: "Can I get a free sample before buying?",
    answer:
      "Absolutely — every enquiry gets 15–20 free sample records so you can verify quality before payment.",
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
