import { BadgeCheck, Banknote, Calculator, Contact, Filter, MapPinned, ShieldCheck, Store, Truck, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-23",
  keyword: {
    slug: "company-proprietors-database-india",
    keyword: "company proprietors database India",
    title: "Company Proprietors Database India | Business Owners",
    metaDescription:
      "Company proprietors database in India - owners of proprietorship firms, shops and MSMEs with mobile number, business name, industry and city. Free sample.",
    eyebrow: "Business Owners Database",
    h1: "Company Proprietors Database in India",
    answer:
      "A company proprietors database lists owners of sole proprietorship firms, partnership businesses and MSMEs in India, with owner name, business name, industry, GSTIN where available, mobile number and location. IndiaB2BData.com helps banks, SaaS companies and suppliers reach business owners who make every buying decision themselves.",
    intro: [
      "Most Indian businesses are proprietorships and small partnerships. In these firms the owner is the decision-maker for everything - suppliers, software, loans, insurance and marketing - so there is no gatekeeper between your offer and the person who signs the cheque.",
      "Our proprietors database covers traders, retailers, service businesses and small manufacturers, filterable by industry, city, pincode and GST registration, so you can reach owners of the businesses that fit your offer.",
    ],
    highlights: [
      { icon: Contact, title: "Owner-Level Contacts", description: "Direct to the person who decides." },
      { icon: BadgeCheck, title: "GST-Linked", description: "GSTIN and constitution where available." },
      { icon: Filter, title: "Industry Filters", description: "Traders, retailers, services, manufacturers." },
      { icon: MapPinned, title: "Pincode-Level", description: "Target local markets precisely." },
    ],
    dataFields: [
      "Proprietor / owner name",
      "Business name",
      "Constitution: proprietorship or partnership",
      "GSTIN, where available",
      "Industry and business category",
      "Mobile number and email, where available",
      "Address, city, state and pincode",
    ],
    sections: [
      {
        heading: "Who Uses a Proprietors Database?",
        paragraphs: [],
        bullets: [
          "Banks and NBFCs offering MSME and business loans",
          "Billing, accounting and GST software companies",
          "Insurance companies selling shop and business policies",
          "Wholesalers and brands appointing retailers",
          "Digital marketing and website agencies",
        ],
      },
      {
        heading: "Proprietors vs Company Directors",
        paragraphs: [
          "Proprietors run unregistered or GST-registered firms that are not companies under the Companies Act, so they do not appear in MCA director lists. For directors of private and public limited companies, see our company MD, chairman and secretary database.",
        ],
      },
    ],
    useCases: [
      "MSME loan and credit card marketing",
      "Billing and accounting software sales",
      "Shop and business insurance outreach",
      "Retailer and dealer network building",
      "Local digital marketing services",
    ],
    faqs: [
      { question: "What is a company proprietors database?", answer: "It is a list of owners of proprietorship and partnership businesses and MSMEs in India, with business name, industry, contact details and location." },
      { question: "Is proprietor data different from MCA director data?", answer: "Yes. Proprietorships are not registered with MCA, so their owners are compiled from GST, trade and other lawful sources rather than company director records." },
      { question: "Can I filter by GST registration?", answer: "Yes. You can choose GST-registered proprietors only, where GSTIN is available." },
      { question: "Can I target proprietors in one city or pincode?", answer: "Yes. Records can be filtered by city, locality and pincode." },
      { question: "Who buys proprietor data?", answer: "Banks and NBFCs, accounting software companies, insurers, distributors and digital marketing agencies." },
      { question: "Can I see a sample?", answer: "Yes. Download the sample format on this page or request real sample records." },
    ],
    related: [
      "gst-database-india",
      "b2b-database-india",
      "company-md-chairman-secretary-database-india",
      "dealers-distributors-database-india",
      "newly-registered-companies-india",
      "mobile-number-database-india",
    ],
  },
  landing: categoryLanding(
    {
      slug: "company-proprietors-database-india",
      name: "Company Proprietors Database",
      title: "Company Proprietors Database India | Sole Proprietors & Business Owners",
      metaDescription: "Sole proprietors and business owners database for India: owner-run proprietorships by trade, city and registration (GST, Udyam), with owner mobile and email. Sample rows on the page.",
      eyebrow: "Sole Proprietors",
      h1: "Company Proprietors Database: India's Business Owners",
      lead: "Owners of sole proprietorships, who make up most of India's businesses, filtered by trade, city and registration type. The owner is the business, so you always reach the decision-maker.",
      segmentSummary: "A sole proprietorship has no separate legal entity: the owner is the business. Most Indian shops, traders, workshops and service businesses are run this way, registered under GST, Udyam or the local shops act rather than with the MCA. For lenders, insurers, accounting tools, telecom and B2B suppliers, every record here is the person who decides and pays.",
      segmentCards: [
        { icon: Users, title: "Owner = Decision-Maker", description: "Every record is the proprietor, not an employee." },
        { icon: Store, title: "By Trade", description: "Retail, wholesale, workshops, contractors and local services." },
        { icon: BadgeCheck, title: "By Registration", description: "GST-registered and Udyam-registered proprietors, where recorded." },
      ],
      segmentTabs: { heading: "Pick the proprietor segment", tabs: [
        T("trade", "Traders & Shops", "Retailers and wholesalers run by their owners.", ["Proprietor", "Owner", "Family Partner", "Manager"], "Lenders, POS, telecom, insurance."),
        T("service", "Service Businesses", "Agencies, contractors, repair shops and consultants.", ["Proprietor", "Owner-Consultant", "Founder", "Manager"], "Accounting tools, marketing services, finance."),
        T("msme", "Small Manufacturers", "Owner-run workshops and small units.", ["Proprietor", "Owner", "Works In-Charge", "Accountant"], "Machinery finance, raw materials, Udyam services."),
      ] },
      coverage: { heading: "Coverage by trade", label: "Trade", rows: [
        ["Retail shops", "Owner-run stores"], ["Wholesale traders", "Distributors and stockists"], ["Service businesses", "Agencies, contractors, repair"], ["Small manufacturers", "Workshops and units"],
      ] },
      dataFields: ["Proprietor name", "Business name", "Trade / business category", "Owner mobile number", "Email ID, where available", "GST / Udyam flag, where recorded", "Address, city, state, pincode"],
      sample: "proprietor",
      useCases: [
        { icon: Banknote, title: "MSME Loans & Credit", description: "Reach owners directly for business loans and credit lines." },
        { icon: Calculator, title: "Accounting & GST Tools", description: "Sell billing and GST software to small owners." },
        { icon: ShieldCheck, title: "Business Insurance", description: "Offer shop, stock and liability insurance." },
        { icon: Truck, title: "Supplies & Distribution", description: "Recruit retailers and stockists for your products." },
      ],
      faqs: [
        { question: "Can I target proprietors in Tier-2 and Tier-3 towns?", answer: "Yes. Proprietorships are spread across every district, and you can filter down to town and pincode." },
        { question: "Do proprietors share personal and business numbers?", answer: "Often the owner's mobile is also the business number. Records are business-context contacts for lawful B2B outreach only." },
        { question: "What is a sole proprietorship?", answer: "A business owned and run by one person, with no separate legal entity. It is registered through GST, Udyam or local licences rather than with the MCA." },
        { question: "How is this different from the Company database?", answer: "The Company database covers firms of all types at account level. This page covers sole proprietors only, with the owner as the contact." },
        { question: "Can I filter by GST registration?", answer: "Yes, where recorded. Filter GST-registered or Udyam-registered proprietors." },
        { question: "Are partnerships included?", answer: "No. This page is sole proprietors only. Partnerships are in the B2B and Company databases." },
      ],
      pricingNote: "Priced by trade, city and fields.",
      related: [L("Company Database", "company-database-india"), L("GST Database", "gst-database-india"), L("B2B Database", "b2b-database-india"), L("Dealers & Distributors Database", "dealers-distributors-database-india"), L("Contractors Database", "contractors-database-india"), L("B2B & B2C Companies Database", "b2b-b2c-companies-database")],
      disclaimer: legal,
      formTitle: "Get a Free Proprietors Sample",
      bands: ["Lending to small owners? Ask for proprietors by trade and city.", "Need GST-registered proprietors only? We filter by registration.", "Get proprietor samples for your offer."],
      footerTitle: "Reach Business Owners Directly",
    },
    { subjects: "sole proprietor", kind: "people", notIncluded: "Partnerships are not included; they are in the B2B and Company databases." }
  ),
} satisfies CategoryContent;
