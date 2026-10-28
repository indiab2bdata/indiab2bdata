import { BadgeCheck, Banknote, Calculator, Contact, Filter, MapPinned, ShieldCheck, Store, Truck, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "company-proprietors-database-india",
    keyword: "company proprietors database India",
    title: "Company Proprietors Database India | Business Owners",
    metaDescription:
      "Company proprietors database in India - owners of proprietorship firms, shops and MSMEs with mobile number, business name, industry and city. Ask whether a matching real sample is available.",
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
      title: "Business Owners Database India",
      metaDescription: "Discuss a sole-proprietor company-record selection by trade and location. Ask which owner, registration and contact fields are available; public sample rows are fictional.",
      eyebrow: "Sole Proprietors",
      h1: "Company Proprietors Database: India's Business Owners",
      lead: "This page describes a selection intended for sole-proprietor businesses. Specify the trade and locations you need, then confirm whether proprietor identity, registration fields and contact details are available for those records.",
      segmentSummary: "A sole-proprietor selection is distinct from a company-director list. State whether you need owner-run shops, traders, workshops or service firms, and ask how the source identifies the business type and owner role. Those labels do not by themselves establish who makes a purchase decision.",
      segmentCards: [
        { icon: Users, title: "Proprietor Role", description: "Ask how the owner role is identified and which contact fields are available." },
        { icon: Store, title: "Trade Scope", description: "Name the business types relevant to your brief and confirm coverage." },
        { icon: BadgeCheck, title: "Registration Fields", description: "Ask whether GST or Udyam fields are available for the selected records." },
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
        { question: "Can I target proprietors in smaller towns?", answer: "Name the towns or pincodes in your brief and ask which are represented in the current data. Request a dated count before purchase." },
        { question: "Do proprietors share personal and business numbers?", answer: "Often the owner's mobile is also the business number. Records are business-context contacts for lawful B2B outreach only." },
        { question: "What is a sole proprietorship?", answer: "A business owned and run by one person, with no separate legal entity. It is registered through GST, Udyam or local licences rather than with the MCA." },
        { question: "How is this different from the Company database?", answer: "The Company database covers firms of all types at account level. This page covers sole proprietors only, with the owner as the contact." },
        { question: "Can I filter by GST or Udyam registration?", answer: "Ask whether those fields are recorded for the selected segment and how the status date is determined." },
        { question: "Are partnerships included?", answer: "This page is intended for sole proprietors. If you need partnerships too, specify that scope and confirm whether the records can be separated." },
      ],
      pricingNote: "Request a written quote for the agreed trade, locations, fields and volume. Confirm the counting unit and total price.",
      related: [L("Company Database", "company-database-india"), L("GST Database", "gst-database-india"), L("B2B Database", "b2b-database-india"), L("Dealers & Distributors Database", "dealers-distributors-database-india"), L("Contractors Database", "contractors-database-india"), L("B2B & B2C Companies Database", "b2b-b2c-companies-database")],
      disclaimer: legal,
      formTitle: "Ask About a Proprietors Sample",
      bands: ["Lending to small owners? Ask which proprietor fields and trades are available.", "Need GST or Udyam details? Confirm whether the status fields are recorded.", "Ask whether a sample is available for the selection you need."],
      footerTitle: "Reach Business Owners Directly",
    },
    { subjects: "sole proprietor", kind: "people", notIncluded: "Partnerships require separate scope confirmation; do not assume they can be separated from sole-proprietor records." }
  ),
} satisfies CategoryContent;
