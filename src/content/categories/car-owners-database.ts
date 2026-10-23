import { CalendarClock, Car, MapPinned, ShieldCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "car-owners-database",
    keyword: "car owners database India",
    title: "Car Owners Database India | Vehicle Owners",
    metaDescription:
      "Car owners database for India - vehicle owners by city, car segment and brand. For insurance, auto service, dealerships & finance teams. Free sample.",
    eyebrow: "Car Owners Database India",
    h1: "Car Owners Database India - Vehicle Owners by City, Segment and Brand",
    answer:
      "A car owners database is a list of individuals who own a vehicle, filtered by city, car segment, brand or model and ownership age. Motor insurers, dealerships, auto service centres and car loan providers use it to reach buyers at the right time. IndiaB2BData.com's car owners database covers owners across Indian metros and tier-2 cities.",
    intro: [
      "Car ownership tells you a lot about a customer. Car owners need insurance renewals, servicing, accessories, tyres and, every few years, a replacement vehicle. Car ownership also signals spending power, which makes these lists valuable for premium products well beyond the auto sector.",
      "Our car owners database is segmented by city, car segment (hatchback, sedan, SUV, luxury), brand and, where available, ownership age. You can reach SUV owners in Bengaluru for an insurance campaign, or owners of 5+ year old cars in Lucknow for an exchange offer.",
    ],
    highlights: [
      { icon: Car, title: "Segment & Brand Filters", description: "Hatchback, sedan, SUV and luxury, by brand." },
      { icon: MapPinned, title: "City-Wise Coverage", description: "Metros and tier-2 cities across India." },
      { icon: CalendarClock, title: "Ownership Age", description: "Target new owners or ageing vehicles." },
      { icon: ShieldCheck, title: "Deduplicated Records", description: "Duplicates removed before delivery." },
    ],
    dataFields: [
      "Owner name",
      "Mobile number",
      "Email address, where available",
      "Car brand, model or segment, where available",
      "Ownership or registration year band, where available",
      "City, state and pincode",
    ],
    sections: [
      {
        heading: "Who Buys Car Owner Data",
        paragraphs: [
          "Motor insurance companies and brokers use it for renewal and switching campaigns. Car dealerships use it for exchange offers and new model launches. Multi-brand service centres, detailing studios, tyre and battery dealers, and accessory stores use it to bring in local customers.",
          "Because car ownership is a strong affluence signal, the list is also used by premium real estate developers, wealth management firms, credit card issuers, clubs and luxury retailers.",
        ],
      },
      {
        heading: "Targeting by Segment and Ownership Age",
        paragraphs: [
          "Segment filters let you match your offer to the customer. Luxury and SUV owners respond to premium services; hatchback owners are often first-time buyers and good targets for upgrades and car loans.",
          "Ownership age is especially useful for timing. Owners of 3–5 year old cars are approaching their first major service and are likely candidates for exchange offers, while owners of new cars are best for accessories and extended warranties.",
        ],
      },
      {
        heading: "Responsible Use",
        paragraphs: [
          "Keep campaigns relevant: a clear offer, a local contact and an easy way to opt out. Avoid repeated messaging to the same owners in a short window.",
          "Check numbers against the DND registry before promotional outreach, and use the data for lawful marketing in line with TRAI rules and the Digital Personal Data Protection Act, 2023.",
        ],
      },
    ],
    useCases: [
      "Motor insurance renewals and switching offers",
      "Dealership exchange and new model launches",
      "Car service, detailing and accessories promotions",
      "Car loan and refinance campaigns",
      "Premium real estate and wealth products",
      "Tyre, battery and EV charging services",
    ],
    faqs: [
      {
        question: "What is a car owners database?",
        answer:
          "It's a list of vehicle owners with contact details, filtered by city and, where available, car segment, brand and ownership age. It's used for insurance, auto services and premium product marketing.",
      },
      {
        question: "Can I filter by car brand or segment?",
        answer: "Yes. Filter by segment (hatchback, sedan, SUV, luxury) and, where available, by brand or model.",
      },
      {
        question: "Which cities are covered?",
        answer: "All major metros plus tier-2 and tier-3 cities. Tell us your target cities and we'll confirm available volumes.",
      },
      {
        question: "How much does a car owners database cost?",
        answer:
          "Packages start at ₹2,999 for up to 5,000 records in one city, and ₹8,999 for up to 25,000 records across 5 cities or states. Pan-India or brand-specific lists are custom-quoted.",
      },
      {
        question: "Do I need to check the numbers against DND?",
        answer: "Yes. Before calling or sending promotional messages, check numbers against the DND (NCPR) registry and follow TRAI's commercial-communication rules.",
      },
      {
        question: "Can I get a free sample?",
        answer: "Yes. Every enquiry includes 15–20 free sample records before you place an order.",
      },
    ],
    related: [
      "b2b-b2c-companies-database",
      "cab-users-database-india",
      "dealers-distributors-database-india",
      "mobile-number-database-india",
      "whatsapp-number-database-india",
      "bulk-sms-database-india",
    ],
  },
} satisfies CategoryContent;
