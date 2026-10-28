import { BadgeCheck, Mail, MapPinned, Network } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "email-database-india",
    keyword: "email database India",
    title: "Email Database India | B2B Emails",
    metaDescription:
      "Discuss business email selections by industry and location. Ask which fields and checks are available for the selected records, and request a written quote.",
    eyebrow: "Email Database India",
    h1: "Email Database India - Business Email Lists for B2B Marketing",
    answer:
      "An email database can include business or role-based email fields for a defined B2B selection. Ask whether your chosen segment and locations are available, which checks were applied to email fields and when, and what format can be supplied. A check at one point does not guarantee future delivery or permission to send.",
    intro: [
      "Email can be one channel in a B2B outreach plan. Before using any list, define the audience and purpose, confirm available fields and check the rules that apply to your source and sending method.",
      "For an email selection, ask what address types are included, whether email checks were performed, which fields they covered and the check date. Consider testing a limited sample and monitor your own delivery results.",
      "Describe the business type, roles and locations you need. Confirm which address and company fields are available, ask how duplicates are handled, and request a written source and check-date description before purchase.",
    ],
    highlights: [
      { icon: Mail, title: "Business Email Addresses", description: "Company and decision-maker emails, not random free-mail lists." },
      { icon: BadgeCheck, title: "Email Checks to Confirm", description: "Ask which email checks were applied, to which fields and on what date." },
      { icon: Network, title: "Industry Selection", description: "Specify the industry and ask which categories are currently available." },
      { icon: MapPinned, title: "City & State Filters", description: "Target one city or run a pan-India campaign." },
    ],
    dataFields: [
      "Business email address, where available; ask whether and when it was checked",
      "Contact person name and designation, where available",
      "Company name and website",
      "Industry and business category",
      "City, state and pincode",
      "Mobile number, where available",
    ],
    sections: [
      {
        heading: "How to Get High Deliverability From a B2B Email List",
        paragraphs: [
          "Never send cold email from your main company domain. Set up a separate sending domain, configure SPF, DKIM and DMARC records, and warm it up gradually for two to three weeks before sending larger volumes.",
          "Start small. Send to a few hundred contacts a day, watch your bounce and spam-complaint rates, and increase volume only when the numbers look healthy. Sending 10,000 emails on day one from a new domain is the fastest way to get blacklisted.",
          "Keep your emails short, personal and relevant to the industry you picked. Always include a clear unsubscribe link and remove anyone who opts out. That protects your reputation and keeps you within anti-spam norms.",
        ],
      },
      {
        heading: "Email Database vs Mobile Database: Which One Do You Need?",
        paragraphs: [
          "Email works best when you want scale and low cost: newsletters, product launches, webinar invites and long nurture sequences. It's also the better channel for IT, SaaS, consulting and corporate buyers who live in their inbox.",
          "Mobile and WhatsApp work better for SMEs, traders, retailers and local businesses, where the owner decides quickly and rarely checks email. Many of our customers buy both and run a combined sequence: email first, then a call or WhatsApp to the people who opened.",
        ],
      },
    ],
    useCases: [
      "B2B email marketing and newsletter campaigns",
      "Cold email outreach sequences for sales teams",
      "Event, webinar and product launch invitations",
      "Building custom audiences for LinkedIn and ad platforms",
      "SaaS and IT companies prospecting SMEs",
      "Agencies running outreach for their clients",
    ],
    faqs: [
      {
        question: "What kind of emails are in the database?",
        answer: "Business and corporate email addresses, such as company, founder, owner and department emails, along with company name, industry and city.",
      },
      {
        question: "How much does an email database cost?",
        answer:
          "For an email selection, specify audience, locations, address types and required fields. Ask the written quote to state the count basis, total price, any checks and dates represented, and delivery terms.",
      },
      {
        question: "Will the emails bounce?",
        answer:
          "Ask what email checks were performed, on which fields and on what date. A past check does not establish future delivery or consent for a campaign.",
      },
      {
        question: "Can I use this for cold email campaigns?",
        answer:
          "A purchase does not by itself establish permission to send. Confirm your lawful basis, source restrictions and applicable email-marketing requirements before contacting anyone.",
      },
      {
        question: "Which email tools can I use with this data?",
        answer: "Any tool that accepts CSV uploads, including Mailchimp, Brevo, Zoho Campaigns, Instantly, Lemlist and most CRMs.",
      },
      {
        question: "Can I get only emails for one industry or city?",
        answer: "State the industry, city or company size in your brief. Ask which filters can be supported and request a dated count.",
      },
      {
        question: "Is a free sample available?",
        answer: "Ask whether a real sample for the business email selection is available. The public CSV is fictional and demonstrates possible layout only; check any supplied rows for required fields and selected coverage.",
      },
    ],
    related: [
      "mobile-number-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
      "b2b-leads-database-india",
      "corporate-database-india",
      "domain-whois-database",
      "lic-agents-emails-database-india",
    ],
  },
} satisfies CategoryContent;
