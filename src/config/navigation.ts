/** Site navigation: header menu, footer menus and the grouped product directory. */
import { indexableLinks } from "@/config/indexing";

export type NavLink = { href: string; label: string };

/** The data sourcing & compliance policy page, linked from every landing page. */
export const COMPLIANCE_PATH = "/data-sourcing-compliance";

/** How we source and check data (sources, manual checks, limitations). */
export const METHODOLOGY_PATH = "/data-sourcing-methodology";

export const HEADER_LINKS: NavLink[] = [
  { href: "/#offer", label: "Data Products" },
  { href: "/database", label: "Database by State" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { href: "/#offer", label: "Data Products" },
  { href: "/database", label: "Database by State" },
  { href: "/#why", label: "Why Us" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/data-sourcing-compliance", label: "Data Sourcing & Compliance" },
  { href: "/data-sourcing-methodology", label: "Data Sourcing Methodology" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

/** Hub-level products only - the full 52-product directory lives on the homepage (#offer). */
export const FOOTER_CORE_DATABASES: NavLink[] = [
  { href: "/b2b-database-india", label: "B2B Database" },
  { href: "/company-database-india", label: "Company Database" },
  { href: "/b2b-leads-database-india", label: "B2B Sales Leads" },
  { href: "/gst-database-india", label: "GST Data" },
  { href: "/mca-company-database-india", label: "MCA / ROC Records" },
  { href: "/manufacturer-database-india", label: "Manufacturers" },
  { href: "/database", label: "All Data Products" },
];

/** Live data products, grouped for footer navigation. Labels are descriptive, not exact-match keywords. */

type ProductGroup = { id: string; heading: string; description: string; links: { href: string; label: string }[] };

const ALL_PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: "general",
    heading: "General",
    description: "Broad B2B and company lists for pan-India prospecting.",
    links: [
      { href: "/b2b-database-india", label: "B2B Database" },
      { href: "/company-database-india", label: "Company Database" },
      { href: "/b2b-leads-database-india", label: "B2B Sales Leads" },
    ],
  },
  {
    id: "company-records",
    heading: "Company Records",
    description: "Company-level records filtered by industry, size and ownership.",
    links: [
      { href: "/corporate-database-india", label: "Corporate Data" },
      { href: "/industry-wise-company-database-india", label: "Industry-Wise Lists" },
      { href: "/company-proprietors-database-india", label: "Company Proprietors" },
      { href: "/computer-it-telecom-services-database-india", label: "IT & Telecom Services" },
      { href: "/it-companies-database-india", label: "IT Companies" },
      { href: "/consultants-consulting-services-database-india", label: "Consulting Firms" },
      { href: "/legal-firms-database-india", label: "Legal Firms" },
    ],
  },
  {
    id: "registry",
    heading: "Registry",
    description: "GST and MCA/ROC registration data for compliance-first selection.",
    links: [
      { href: "/gst-database-india", label: "GST Data" },
      { href: "/mca-company-database-india", label: "MCA / ROC Records" },
      { href: "/newly-registered-companies-india", label: "New Registrations" },
    ],
  },
  {
    id: "trade-industry",
    heading: "Trade & Industry",
    description: "Manufacturers, traders, dealers, retailers and service businesses.",
    links: [
      { href: "/manufacturer-database-india", label: "Manufacturers" },
      { href: "/manufacturing-companies-database-india", label: "Manufacturing Companies" },
      { href: "/metals-minerals-industries-database-india", label: "Metals & Minerals Industries" },
      { href: "/machinery-suppliers-services-database-india", label: "Machinery Suppliers / Services" },
      { href: "/apparel-garments-exporters-database-india", label: "Garment Exporters" },
      { href: "/importers-exporters-database-india", label: "Importers & Exporters" },
      { href: "/importers-database-india", label: "Importers" },
      { href: "/logistics-management-service-providers-database-india", label: "Logistics Management Service Providers" },
      { href: "/dealers-distributors-database-india", label: "Dealers & Distributors" },
      { href: "/building-material-database-india", label: "Building Material" },
      { href: "/beauty-parlours-salons-spa-database-india", label: "Salons & Spas" },
      { href: "/gymnasiums-database-india", label: "Gymnasiums & Fitness Centres" },
      { href: "/health-beauty-shops-business-database-india", label: "Health & Beauty Shops / Businesses" },
      { href: "/mobile-accessories-shops-database-india", label: "Mobile & Accessories Shops" },
      { href: "/chemical-pharma-companies-database-india", label: "Chemical & Pharma Companies" },
      { href: "/chemists-medical-stores-database-india", label: "Chemists & Medical Stores" },
      { href: "/computer-laptop-dealers-database-india", label: "Computer & Laptop Dealers" },
      { href: "/contractors-database-india", label: "Contractors" },
      { href: "/digital-photography-studios-database-india", label: "Photography Studios" },
      { href: "/energy-power-sector-database-delhi-ncr", label: "Energy & Power (Delhi NCR)" },
      { href: "/entertainment-media-database-india", label: "Entertainment & Media" },
      { href: "/media-planning-companies-database-india", label: "Media Planning Companies" },
      { href: "/event-management-organisers-database-india", label: "Event Organisers" },
      { href: "/fabric-clothing-stores-database-india", label: "Fabric & Clothing Stores" },
      { href: "/food-beverage-stores-database-india", label: "Food & Beverage Stores" },
      { href: "/hotels-restaurants-bars-database-india", label: "Hotels / Restaurants / Bars" },
      { href: "/furniture-stores-dealers-database-india", label: "Furniture & Furnishing" },
      { href: "/home-garden-pets-suppliers-database-india", label: "Home / Garden / Pets Suppliers" },
      { href: "/gas-petroleum-companies-database-india", label: "Gas & Petroleum Companies" },
      { href: "/gems-jewellery-shops-database-india", label: "Gems & Jewellery Shops" },
      { href: "/jewellers-database-india", label: "Retail Jewellers" },
    ],
  },
  {
    id: "professionals",
    heading: "Professionals",
    description: "Decision-makers, specialists and employees by role and department.",
    links: [
      { href: "/ceo-cfo-cmo-it-heads-database-india", label: "CEO / CFO / CMO / IT Heads" },
      { href: "/company-md-chairman-secretary-database-india", label: "MDs, Chairmen & Company Secretaries" },
      { href: "/doctors-database", label: "Doctors" },
      { href: "/medical-representatives-database-india", label: "Medical Representatives (MR)" },
      { href: "/advocates-lawyers-database-india", label: "Advocates & Lawyers" },
      { href: "/agents-database-india", label: "Agents" },
      { href: "/lic-agents-emails-database-india", label: "LIC Agents Emails" },
      { href: "/architect-interior-designers-database-india", label: "Architects & Interiors" },
      { href: "/business-analysts-database-india", label: "Business Analysts" },
      { href: "/business-development-sales-professionals-database-india", label: "Sales & BD Professionals" },
      { href: "/channel-sales-professionals-database-india", label: "Channel Sales" },
      { href: "/bpo-call-centre-employees-database-india", label: "BPO Employees" },
      { href: "/chartered-accountants-database-india", label: "Chartered Accountants" },
      { href: "/chief-managers-database-india", label: "Chief Managers" },
      { href: "/general-senior-managers-database-india", label: "General Managers / Senior Managers" },
      { href: "/hr-human-resources-database-india", label: "HR / Human Resources" },
      { href: "/it-professionals-database-india", label: "IT Professionals" },
      { href: "/government-employees-database-india", label: "Government Employees" },
      { href: "/civil-engineers-database-india", label: "Civil Engineers" },
      { href: "/customer-support-executives-database-india", label: "Customer Support Executives" },
      { href: "/designers-database-india", label: "Designers" },
      { href: "/graphic-designers-database-india", label: "Graphic Designers" },
      { href: "/dtp-operators-database-india", label: "DTP Operators" },
      { href: "/economic-analysts-database-india", label: "Economic Analysts" },
      { href: "/financial-analysts-managers-industry-database", label: "Financial Analysts / Managers / Industry" },
      { href: "/bank-employees-database-delhi-ncr", label: "Bank Employees (Delhi NCR)" },
      { href: "/engineers-service-engineers-database-india", label: "Engineers & Service Engineers" },
      { href: "/freelancers-database-india", label: "Freelancers" },
    ],
  },
  {
    id: "channel",
    heading: "Channel",
    description: "Ready-to-use contact channels: mobile, email, WhatsApp and SMS.",
    links: [
      { href: "/mobile-number-database-india", label: "Mobile Numbers" },
      { href: "/email-database-india", label: "Email Lists" },
      { href: "/whatsapp-number-database-india", label: "WhatsApp Numbers" },
      { href: "/bulk-sms-database-india", label: "Bulk SMS Data" },
    ],
  },
  {
    id: "consumer",
    heading: "Consumer",
    description: "Consumer audiences segmented by profile, interest and spend.",
    links: [
      { href: "/b2b-b2c-companies-database", label: "B2B & B2C Data" },
      { href: "/car-owners-database", label: "Car Owners" },
      { href: "/job-seekers-database", label: "Job Seekers" },
      { href: "/cab-users-database-india", label: "Cab Users" },
      { href: "/club-mahindra-members-database", label: "Holiday Club Members" },
      { href: "/commercial-residential-properties-database-india", label: "Property Owners" },
      { href: "/hni-high-income-employees-database-india", label: "HNI / High Income Employees" },
      { href: "/credit-card-holders-database-india", label: "Credit Card Holders" },
      { href: "/debit-card-holders-database-india", label: "Debit Card Holders" },
      { href: "/demat-account-holders-database-india", label: "Demat Account Holders" },
      { href: "/dining-leisure-customers-database-india", label: "Dining & Leisure Customers" },
      { href: "/facebook-users-database-india", label: "Social Media Users" },
      { href: "/females-database-india", label: "Women Consumers" },
      { href: "/male-gents-database-india", label: "Male / Gents Consumers" },
      { href: "/female-consumer-bangalore-database", label: "Female Consumers (Bangalore)" },
      { href: "/frequent-flyer-database-india", label: "Frequent Flyers" },
    ],
  },
  {
    id: "education-web",
    heading: "Education & Web",
    description: "Schools, institutes, educators and online business data.",
    links: [
      { href: "/students-database", label: "Students" },
      { href: "/school-colleges-database", label: "Schools & Colleges" },
      { href: "/educational-institutes-database-india", label: "Educational Institutes" },
      { href: "/cbse-schools-email-database-india", label: "CBSE Schools Emails" },
      { href: "/teachers-database-india", label: "Teachers" },
      { href: "/lecturers-professors-database-india", label: "Lecturers / Professors" },
      { href: "/domain-whois-database", label: "Domain WHOIS Data" },
    ],
  },
];

/** Groups with any page held from indexing (see config/indexing.ts) removed. */
export const PRODUCT_GROUPS: ProductGroup[] = ALL_PRODUCT_GROUPS.map((g) => ({ ...g, links: indexableLinks(g.links) }));

/** The footer group a product page belongs to, plus its sibling links (self excluded). */
export function getProductGroup(slug: string) {
  const group = PRODUCT_GROUPS.find((g) => g.links.some((link) => link.href === `/${slug}`));
  if (!group) return undefined;
  return { heading: group.heading, siblings: group.links.filter((link) => link.href !== `/${slug}`) };
}
