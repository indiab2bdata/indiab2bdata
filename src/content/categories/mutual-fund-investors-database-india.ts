import { Filter, MapPinned, ShieldCheck, TrendingUp } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

const faqs = [
  {
    question: "Does the file show how much each person has invested?",
    answer: "No. The mutual fund investors file contains only name, mobile, city, state and pincode. Investment amounts, schemes, SIPs and portfolio values are never included or available as add-ons, because financial details are sensitive and easily misused.",
  },
  {
    question: "Can I get folio numbers or PAN with the records?",
    answer: "No, and we do not supply them under any arrangement. Folio numbers and PAN are account identifiers that belong between investors and their fund houses. Any seller offering them should be treated with suspicion.",
  },
  {
    question: "Who should not buy this investor list?",
    answer: "Anyone selling unregistered schemes, guaranteed-return products or tips, or planning to ask people for account details. The data is intended for registered advisers, distributors, insurers and educators marketing legitimate services.",
  },
  {
    question: "Can I order investors in a few pincodes only?",
    answer: "Yes. Pincode is recorded for every record, so you can order the pincodes around a branch or office. Small areas may hold fewer records, and the quote shows the exact count before you commit.",
  },
  {
    question: "Can I message these investors on WhatsApp?",
    answer: "Only through WhatsApp Business with approved templates, and only to people who have agreed to hear from you, for example after a positive call. Broadcasting to the full list breaks WhatsApp policy and usually gets the number banned.",
  },
  {
    question: "How is an investor audience list priced?",
    answer: "Pricing is per record and depends mainly on cities, states or pincodes and the size of the order. A few pincodes cost less than a statewide pull. Every quote is custom and comes with a free sample first.",
  },
];

export default {
  template: "custom",
  updated: "2026-10-26",
  keyword: {
    slug: "mutual-fund-investors-database-india",
    keyword: "mutual fund investors database India",
    title: "Mutual Fund Investors Database India",
    metaDescription:
      "Mutual fund investors database India: name, mobile, city and pincode of retail investors for financial marketing. No folio, holdings or PAN. Free sample.",
    eyebrow: "Mutual Fund Investers Database",
    h1: "Mutual Fund Investors Database India for Financial Marketing",
    answer:
      "A mutual fund investors database is an audience list of people in India who invest in mutual funds, with name, mobile, city, state and pincode only. It is marketing audience data: it never contains folio numbers, PAN, holdings, SIP amounts or any account details.",
    intro: [
      "Mutual fund investors are an engaged audience for financial education, advisory, insurance and wealth services, and many of them now live outside the metros.",
    ],
    highlights: [
      { icon: TrendingUp, title: "Investor Audience", description: "People who invest in mutual funds." },
      { icon: MapPinned, title: "City and Pincode", description: "Target the area your branch or advisor serves." },
      { icon: Filter, title: "Lean Fields", description: "Name, mobile, city, state and pincode." },
      { icon: ShieldCheck, title: "No Account Details", description: "Never folio, PAN, holdings or SIP data." },
    ],
    useCases: [
      "Registered investment advisers and distributors",
      "Financial-education and webinar providers",
      "Insurance and wealth-management firms",
      "Investment apps and research services",
    ],
    faqs,
  },
  custom: {
    path: "/mutual-fund-investors-database-india",
    name: "Mutual Fund Investors Database",
    title: "Mutual Fund Investors Database India",
    metaDescription:
      "Mutual fund investors database India: name, mobile, city and pincode of retail investors for financial marketing. No folio, holdings or PAN. Free sample.",
    eyebrow: "Investor Audience Data",
    h1: "Mutual Fund Investors Database India for Financial Marketing",
    lead:
      "For SEBI-registered advisers, mutual fund distributors, insurers, financial educators and investment apps. Our mutual fund investors database India is a lean audience list of retail investors with name, mobile, city, state and pincode only. It holds no folio numbers, PAN, holdings or SIP amounts, so it supports local outreach without exposing anyone's finances.",
    image: {
      src: "/images/mutual-fund-investors/mutual-fund-investors-database-india.jpg",
      alt: "Rising bar chart and coins showing investment growth",
      width: 1600,
      height: 1067,
    },
    sampleProfile: "mfInvestor",
    links: [
      { text: "demat account holders database", href: "/demat-account-holders-database-india" },
      { text: "HNI and high income employees database", href: "/hni-high-income-employees-database-india" },
      { text: "credit card holders database", href: "/credit-card-holders-database-india" },
      { text: "financial analysts and managers database", href: "/financial-analysts-managers-industry-database" },
      { text: "Gujarat business database", href: "/database/gujarat" },
      { text: "Data Sourcing & Compliance", href: "/data-sourcing-compliance" },
      { text: "B2B data guides", href: "/blog" },
    ],
    blocks: [
      {
        type: "points",
        heading: "What the File Contains, and What It Never Will",
        intro: "This page exists for financial marketers, and in finance the data you do not hold matters as much as the data you do.",
        items: [
          { title: "Included", text: "Name, mobile number, city, state and pincode of people recorded as mutual fund investors." },
          { title: "Never included", text: "Folio numbers, PAN, scheme names, holdings, SIP amounts, bank details or transaction history." },
          { title: "Not available on request", text: "We do not sell portfolio size or investor value bands for this audience, even as an add-on." },
          { title: "Why it is designed this way", text: "Financial details are sensitive and their misuse enables fraud. A lean list lets you market a service without any view of a person's money." },
        ],
      },
      {
        type: "table",
        heading: "Who Uses Investor Audience Data",
        columns: ["Buyer", "Typical offer", "Sensible first message"],
        rows: [
          ["SEBI-registered investment advisers", "Fee-based financial planning", "Invitation to a free goal-planning session"],
          ["Mutual fund distributors", "Regular-plan advice and service", "Local office introduction and contact details"],
          ["Insurers and agents", "Term and health cover", "Coverage-gap check, not a product push"],
          ["Financial educators", "Webinars and investing courses", "Free introductory class in a local language"],
          ["Investment and research apps", "App download or subscription", "Short product tour with clear pricing"],
        ],
      },
      {
        type: "prose",
        heading: "Why Location Is the Only Targeting You Need",
        paragraphs: [
          "Without portfolio fields, this audience is targeted by place. That suits most buyers better than it sounds. An adviser in Rajkot can only serve clients who can visit or trust a local name; a distributor with three branches cares about pincodes near those branches; a regional-language educator cares about the state.",
          "If you need an audience defined by income rather than investing, the HNI and high income employees database is the closer match, and the demat account holders database covers people who trade shares directly. Most buyers start with one city, measure how many people accept a session or call, and widen the radius only once that first slice has been worked through.",
        ],
        image: {
          src: "/images/mutual-fund-investors/mutual-fund-investors-database-india.jpg",
          alt: "Rising bar chart and coins showing investment growth",
          width: 1600,
          height: 1067,
        },
      },
      { type: "cta", text: "Serving investors around one branch? Ask for a sample from those pincodes first.", buttonLabel: "Get Investor Sample" },
      {
        type: "scenario",
        label: "Buyer scenario",
        heading: "A Registered Adviser Filling Planning Sessions in Saurashtra",
        paragraphs: [
          "A SEBI-registered investment adviser based in Rajkot offers fee-based retirement and child-education planning. It orders investors in Rajkot, Jamnagar and Bhavnagar pincodes through a Gujarat business database brief, with name, mobile and city.",
          "After checking numbers against the NCPR registry, the adviser's team calls once in the late afternoon to invite people to a free evening session in Gujarati. Those who agree get a WhatsApp confirmation from the firm's business account; anyone who declines is never called again. No one is asked about their holdings on the call; that conversation happens only after a client signs up. After the session, the adviser sends one thank-you message with a link to book a private meeting, records who booked, and uses that response rate to decide whether to repeat the format in Junagadh and Porbandar the following quarter.",
        ],
      },
      {
        type: "table",
        heading: "Fields in Each Investor Record",
        intro: "Five columns, delivered in this order. There are no optional financial fields.",
        columns: ["Field", "Contents", "Use"],
        rows: [
          ["Name", "Investor's name", "Address the person correctly"],
          ["Mobile", "Mobile number", "One call or permitted message"],
          ["City", "City or town", "Match to your office or advisor"],
          ["State", "State", "Language and regional campaigns"],
          ["Pincode", "Pincode", "Branch-radius targeting"],
        ],
      },
      {
        type: "table",
        heading: "Targeting by Place",
        intro: "Typical ways buyers cut the file.",
        columns: ["Cut", "Example", "Suits"],
        rows: [
          ["Branch radius", "Pincodes within a few kilometres of an office", "Distributors and advisers with walk-in clients"],
          ["Tier-2 and tier-3 cities", "Nashik, Indore, Coimbatore, Ludhiana", "New investors and regional brands"],
          ["Language region", "Gujarati-, Marathi- or Tamil-speaking states", "Vernacular webinars and education"],
        ],
      },
      {
        type: "points",
        tone: "warning",
        heading: "Rules for Marketing to Investors",
        items: [
          { title: "Never promise returns", text: "SEBI and AMFI rules bar guaranteed-return claims. Any message that hints at assured profits damages trust and may breach regulations." },
          { title: "Never ask for account details", text: "Do not ask for folio numbers, PAN or OTPs on a first contact. Fraudsters do exactly that, and genuine firms should not sound like them." },
          { title: "Show your registration", text: "Include your SEBI, AMFI or IRDAI registration number in messages so people can check who you are." },
          { title: "One contact, then respect the answer", text: "Investors are cautious about cold calls. Make one clear offer and remove anyone who says no." },
        ],
      },
      {
        type: "points",
        heading: "Messages That Work for Cautious Investors",
        intro: "Investors hear about fraud constantly, so the tone of the first contact decides whether they listen.",
        items: [
          { title: "Start with education", text: "An invitation to a free class on goal planning or tax-saving basics feels safer than a product pitch and attracts people who want advice." },
          { title: "Be local and named", text: "Mention your office address and the adviser's name. People trust someone they can visit in their own city." },
          { title: "Speak their language", text: "A message in Gujarati, Marathi, Tamil or Hindi, matched to the state, gets a far better hearing than generic English copy." },
          { title: "Make it easy to check you", text: "Give your registration number and website so the investor can verify you before replying." },
          { title: "Offer a clear next step", text: "One date, one link or one number to call. Vague promises to share opportunities sound like the scams investors are warned about." },
        ],
      },
      { type: "sample", heading: "Sample Investor Rows", intro: "Fictional people with masked details, in the delivered column order. Your free sample is real records for your cities or pincodes." },
      {
        type: "sourcing",
        heading: "How Investor Records Are Compiled and Used",
        paragraphs: [
          "Records are compiled from our own research and third-party data. Duplicates and invalid numbers are removed before delivery, and the file carries no financial information. Our Data Sourcing & Compliance page explains sourcing and how anyone can ask to be removed.",
          "These are individual consumers, so the DPDP Act 2023 applies in full. Use the data only for relevant financial services, check every number on the NCPR registry before calling, use DLT-registered templates for SMS and honour opt-outs at once. For audiences of finance professionals rather than investors, see the financial analysts and managers database; card-based audiences are in the credit card holders database.",
        ],
      },
      { type: "cta", text: "Send the cities or pincodes you serve; we'll reply with sample records and a quote.", buttonLabel: "Request a Free Sample" },
    ],
    faqs,
    related: [
      { label: "Demat Account Holders Database", href: "/demat-account-holders-database-india" },
      { label: "HNI / High Income Employees Database", href: "/hni-high-income-employees-database-india" },
      { label: "Credit Card Holders Database", href: "/credit-card-holders-database-india" },
      { label: "Financial Analysts & Managers Database", href: "/financial-analysts-managers-industry-database" },
      { label: "LIC Agents Email Database", href: "/lic-agents-emails-database-india" },
      { label: "Mobile Number Database", href: "/mobile-number-database-india" },
    ],
    cta: {
      formTitle: "Get a Free Investor Audience Sample",
      formSubtitle: "Tell us the cities, states or pincodes you serve and your registration type (adviser, distributor, insurer).",
      buttonLabel: "Get Investor Sample",
      whatsappMessage: "Hi, I need a mutual fund investors database sample. Cities or pincodes:",
      footerTitle: "Reach Investors Near Your Office",
      footerText: "Send the locations you serve. You'll get matching sample records with name, mobile, city and pincode, and a quote.",
    },
    disclaimer: "Consumer audience data for lawful marketing of registered financial services. Contains no folio, PAN, holdings or account details. Any person can request removal at any time.",
  },
} satisfies CategoryContent;
