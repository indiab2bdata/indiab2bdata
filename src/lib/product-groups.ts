/** The 16 live data products, grouped for footer navigation. Labels are descriptive, not exact-match keywords. */
export const PRODUCT_GROUPS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "General",
    links: [
      { href: "/b2b-database-india", label: "B2B Database" },
      { href: "/company-database-india", label: "Company Database" },
    ],
  },
  {
    heading: "Company Records",
    links: [
      { href: "/corporate-database-india", label: "Corporate Data" },
      { href: "/industry-wise-company-database-india", label: "Industry-Wise Lists" },
    ],
  },
  {
    heading: "Registry",
    links: [
      { href: "/gst-database-india", label: "GST Data" },
      { href: "/mca-company-database-india", label: "MCA / ROC Records" },
      { href: "/newly-registered-companies-india", label: "New Registrations" },
    ],
  },
  {
    heading: "Leads",
    links: [{ href: "/b2b-leads-database-india", label: "B2B Sales Leads" }],
  },
  {
    heading: "Segments",
    links: [
      { href: "/manufacturer-database-india", label: "Manufacturers" },
      { href: "/doctors-database-india", label: "Doctors" },
      { href: "/importers-exporters-database-india", label: "Importers & Exporters" },
      { href: "/dealers-distributors-database-india", label: "Dealers & Distributors" },
    ],
  },
  {
    heading: "Channel",
    links: [
      { href: "/mobile-number-database-india", label: "Mobile Numbers" },
      { href: "/email-database-india", label: "Email Lists" },
      { href: "/whatsapp-number-database-india", label: "WhatsApp Numbers" },
      { href: "/bulk-sms-database-india", label: "Bulk SMS Data" },
    ],
  },
];
