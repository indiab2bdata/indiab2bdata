import { MapPinned, ShieldCheck, Smartphone, TrendingUp } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "bulk-sms-database-india",
    keyword: "bulk SMS database India",
    title: "Bulk SMS Database India for DLT",
    metaDescription:
      "Discuss business mobile-number selections by location and industry. Confirm available fields, source, current coverage and intended-use requirements before requesting a written quote.",
    eyebrow: "Bulk SMS Database India",
    h1: "Bulk SMS Database India - Business Numbers for SMS Campaigns",
    answer:
      "A bulk SMS database is a large, list of mobile numbers used to send promotional or transactional SMS campaigns. In India promotional messages must skip DND-registered numbers and go through a DLT-registered sender ID with approved templates. IndiaB2BData.com supplies business numbers by city, pincode and industry, ready to upload into any bulk SMS panel.",
    intro: [
      "Bulk SMS still gets some of the highest open rates of any channel in India. Almost every SMS is read, usually within minutes, and it reaches every phone, including basic handsets without internet or WhatsApp.",
      "The catch is that TRAI's rules are strict. Promotional SMS to DND numbers gets blocked, every message must use a DLT-registered header and template, and sending to a bad list simply wastes credits on numbers that will never receive your message.",
      "If you plan to use contact records for SMS, ask which location and industry fields can be supplied and confirm the source, duplicate handling and applicable communication requirements.",
    ],
    highlights: [
      { icon: ShieldCheck, title: "DLT-Ready Format", description: "Clean CSV ready to upload to your DLT-registered SMS panel." },
      { icon: Smartphone, title: "Mobile-Number Fields", description: "Ask which number fields and checks apply to the selected records." },
      { icon: MapPinned, title: "Local Targeting", description: "Filter by city, state or pincode." },
      { icon: TrendingUp, title: "Campaign Planning", description: "Review sample fields and communication requirements before sending." },
    ],
    dataFields: [
      "10-digit mobile number",
      "Contact person / business owner name",
      "Company or business name",
      "Industry and business category",
      "City, state and pincode",
    ],
    sections: [
      {
        heading: "How Bulk SMS Works in India: DLT, Headers and Templates",
        paragraphs: [
          "Since TRAI's TCCCPR regulations, every business that sends commercial SMS must register on a DLT (Distributed Ledger Technology) platform run by telecom operators such as Jio, Airtel or Vi. Registration covers your business entity, your sender IDs (headers) and your message templates.",
          "Promotional messages can only go to non-DND numbers and only between 10 AM and 9 PM. Transactional and service messages have different rules. Your bulk SMS provider usually helps you register and map approved templates to your account.",
          "Once you're registered, upload our CSV to your SMS panel, pick an approved template and send. Check the list against DND first so fewer messages get rejected at the operator level.",
        ],
      },
      {
        heading: "Tips to Get More Responses From SMS Campaigns",
        paragraphs: [
          "Keep it under 160 characters, lead with the offer and include one clear action, such as a call-back number, a short link or a WhatsApp link. Mention the city or area where relevant, since local messages consistently perform better.",
          "Send during business hours on weekdays, test two versions of your message on small batches, and scale the one that gets more responses. Pair SMS with a WhatsApp or calling follow-up for the people who click or reply.",
        ],
      },
    ],
    useCases: [
      "Promotional SMS offers and sale announcements",
      "Local store, clinic and showroom promotions",
      "Event, exhibition and open-house invitations",
      "Lead generation SMS with a call-back or link",
      "Real estate project launches in a target area",
      "Education and coaching admission campaigns",
    ],
    faqs: [
      {
        question: "Can I send promotional SMS to every number on the list?",
        answer: "No. Promotional SMS can only go to numbers not registered on DND, through a DLT-registered header and approved template. Check the list against DND before each campaign.",
      },
      {
        question: "How much does a bulk SMS database cost?",
        answer:
          "For a business-number selection, identify the audience and geography, then ask the quote to state the available fields, count basis, total price and delivery terms. Confirm your intended messaging requirements separately.",
      },
      {
        question: "Do I need DLT registration to send bulk SMS?",
        answer:
          "Yes. In India, commercial SMS must be sent through a DLT-registered sender ID and approved templates, usually set up with help from your SMS provider.",
      },
      {
        question: "What time can I send promotional SMS?",
        answer: "Promotional SMS can only be sent to non-DND numbers between 10 AM and 9 PM, as per TRAI rules.",
      },
      {
        question: "Can I get numbers for a specific area only?",
        answer: "Yes. Lists can be filtered by city, state, pincode and industry.",
      },
      {
        question: "What format is the SMS data in?",
        answer: "An Excel (.xlsx) or CSV file that can be uploaded straight into most bulk SMS panels.",
      },
    ],
    related: [
      "mobile-number-database-india",
      "whatsapp-number-database-india",
      "lic-agents-emails-database-india",
      "students-database",
      "b2b-b2c-companies-database",
      "b2b-database-india",
    ],
  },
} satisfies CategoryContent;
