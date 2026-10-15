/** The 52 live data products, grouped for footer navigation. Labels are descriptive, not exact-match keywords. */
export const PRODUCT_GROUPS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "General",
    links: [
      { href: "/b2b-database-india", label: "B2B Database" },
      { href: "/company-database-india", label: "Company Database" },
      { href: "/b2b-leads-database-india", label: "B2B Sales Leads" },
    ],
  },
  {
    heading: "Company Records",
    links: [
      { href: "/corporate-database-india", label: "Corporate Data" },
      { href: "/industry-wise-company-database-india", label: "Industry-Wise Lists" },
      { href: "/company-proprietors-database-india", label: "Company Proprietors" },
      { href: "/computer-it-telecom-services-database-india", label: "IT & Telecom Services" },
      { href: "/consultants-consulting-services-database-india", label: "Consulting Firms" },
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
    heading: "Trade & Industry",
    links: [
      { href: "/manufacturer-database-india", label: "Manufacturers" },
      { href: "/apparel-garments-exporters-database-india", label: "Garment Exporters" },
      { href: "/importers-exporters-database-india", label: "Importers & Exporters" },
      { href: "/dealers-distributors-database-india", label: "Dealers & Distributors" },
      { href: "/building-material-database-india", label: "Building Material" },
      { href: "/beauty-parlours-salons-spa-database-india", label: "Salons & Spas" },
      { href: "/mobile-accessories-shops-database-india", label: "Mobile & Accessories Shops" },
      { href: "/chemical-pharma-companies-database-india", label: "Chemical & Pharma Companies" },
      { href: "/chemists-medical-stores-database-india", label: "Chemists & Medical Stores" },
      { href: "/computer-laptop-dealers-database-india", label: "Computer & Laptop Dealers" },
      { href: "/contractors-database-india", label: "Contractors" },
    ],
  },
  {
    heading: "Professionals",
    links: [
      { href: "/ceo-cfo-cmo-it-heads-database-india", label: "CEO / CFO / CMO / IT Heads" },
      { href: "/company-md-chairman-secretary-database-india", label: "MDs, Chairmen & Company Secretaries" },
      { href: "/doctors-database", label: "Doctors" },
      { href: "/advocates-lawyers-database-india", label: "Advocates & Lawyers" },
      { href: "/agents-database-india", label: "Agents" },
      { href: "/architect-interior-designers-database-india", label: "Architects & Interiors" },
      { href: "/business-analysts-database-india", label: "Business Analysts" },
      { href: "/business-development-sales-professionals-database-india", label: "Sales & BD Professionals" },
      { href: "/channel-sales-professionals-database-india", label: "Channel Sales" },
      { href: "/bpo-call-centre-employees-database-india", label: "BPO Employees" },
      { href: "/chartered-accountants-database-india", label: "Chartered Accountants" },
      { href: "/chief-managers-database-india", label: "Chief Managers" },
      { href: "/civil-engineers-database-india", label: "Civil Engineers" },
      { href: "/customer-support-executives-database-india", label: "Customer Support Executives" },
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
  {
    heading: "Consumer",
    links: [
      { href: "/b2b-b2c-companies-database", label: "B2B & B2C Data" },
      { href: "/car-owners-database", label: "Car Owners" },
      { href: "/job-seekers-database", label: "Job Seekers" },
      { href: "/cab-users-database-india", label: "Cab Users" },
      { href: "/club-mahindra-members-database", label: "Holiday Club Members" },
      { href: "/commercial-residential-properties-database-india", label: "Property Owners" },
      { href: "/credit-card-holders-database-india", label: "Credit Card Holders" },
    ],
  },
  {
    heading: "Education & Web",
    links: [
      { href: "/students-database", label: "Students" },
      { href: "/school-colleges-database", label: "Schools & Colleges" },
      { href: "/cbse-schools-email-database-india", label: "CBSE Schools Emails" },
      { href: "/teachers-database-india", label: "Teachers" },
      { href: "/domain-whois-database", label: "Domain WHOIS Data" },
    ],
  },
];

/** The footer group a product page belongs to, plus its sibling links (self excluded). */
export function getProductGroup(slug: string) {
  const group = PRODUCT_GROUPS.find((g) => g.links.some((link) => link.href === `/${slug}`));
  if (!group) return undefined;
  return { heading: group.heading, siblings: group.links.filter((link) => link.href !== `/${slug}`) };
}
