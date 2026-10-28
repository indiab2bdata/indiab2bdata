import { Car, Filter, MapPinned, ShieldCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "cab-users-database-india",
    keyword: "cab users database India",
    title: "Cab Users Database India | Commuter Data",
    metaDescription:
      "Explore a cab users database in India — app-cab and taxi commuters by city. Review available fields, coverage, sample records and permitted uses.",
    eyebrow: "Cab Users Database",
    h1: "Cab Users Database in India",
    answer:
      "A cab users database is a structured collection of consumer records for people who regularly use app-based cabs, taxis or ride-hailing services, typically organised by city. Fields and coverage depend on the source. IndiaB2BData.com helps brands explore these records by city and, where available, profile filters.",
    intro: [
      "Regular cab users are typically urban, working-age and comfortable with app-based services. That makes them a relevant audience for mobility, travel, fintech, insurance, food delivery and lifestyle brands, especially in metros and fast-growing tier-2 cities.",
      "A cab users database organises available consumer records by city and profile so you can focus your campaign on a defined audience. Confirm the fields, coverage, source and permitted uses before choosing a dataset.",
    ],
    highlights: [
      { icon: Car, title: "Urban Commuters", description: "Regular app-cab and taxi users." },
      { icon: MapPinned, title: "City-Wise Records", description: "Metros and major tier-2 cities." },
      { icon: Filter, title: "Profile Filters", description: "Age band or locality, where available." },
      { icon: ShieldCheck, title: "Deduplicated Records", description: "Confirm the duplicate-handling method for the selected records." },
    ],
    dataFields: [
      "Consumer name",
      "Mobile number, where available",
      "Email address, where available",
      "City, locality and pincode",
      "Age band or profile filters, where available",
    ],
    sections: [
      {
        heading: "Who Can Use a Cab Users Database?",
        paragraphs: [],
        subsections: [
          { heading: "Mobility and Travel Brands", text: "Ride-hailing, car rental, airport transfer and travel booking services can research urban commuter audiences in target cities." },
          { heading: "Fintech and Insurance", text: "Wallets, credit cards and insurance providers can research digitally active urban consumers." },
          { heading: "Food, Retail and Lifestyle Brands", text: "Delivery apps, D2C brands and lifestyle services can plan city launches around active app users." },
          { heading: "Real Estate and Co-Working", text: "Projects near business districts and transit corridors can research commuters in those localities." },
        ],
      },
      {
        heading: "What to Check Before Choosing a Cab Users Database",
        paragraphs: [],
        bullets: [
          "Source transparency: ask how records were compiled and what permissions apply.",
          "City coverage: confirm the cities and localities included.",
          "Field completeness: review a sample to see which fields are populated.",
          "Update information: ask when the records were last reviewed.",
          "Permitted use: confirm whether your planned outreach is allowed.",
        ],
      },
      {
        heading: "Responsible Use of Consumer Data",
        paragraphs: [
          "Records in this database relate to individual consumers. Keep campaigns relevant, identify yourself clearly, avoid excessive frequency and honour every opt-out request.",
          "Use the data in line with TRAI's commercial communication rules and the Digital Personal Data Protection Act, 2023. Buying a list does not, by itself, establish permission to send unsolicited marketing messages.",
        ],
      },
    ],
    useCases: [
      "Mobility and travel service launches",
      "Fintech, wallet and insurance campaigns",
      "City launches for app-based businesses",
      "Real estate near business districts",
      "Urban consumer market research",
    ],
    faqs: [
      { question: "What is a cab users database?", answer: "It is a structured collection of consumer records for regular app-cab and taxi users, organised by city and, where available, profile filters." },
      { question: "Which cities are covered?", answer: "Coverage varies by dataset. Share your target cities and ask us to confirm the number of matching records." },
      { question: "Do I need to check the numbers against DND?", answer: "Yes. Before calling or sending promotional messages, check numbers against the DND (NCPR) registry and follow TRAI's commercial-communication rules." },
      { question: "Is it available in Excel format?", answer: "Excel or CSV delivery may be available. Confirm the format and columns before purchase." },
      { question: "Can I use it for SMS or WhatsApp campaigns?", answer: "That depends on the source, permissions and applicable TRAI and data protection rules. A purchase alone does not allow unsolicited messages." },
      { question: "Can I see a sample first?", answer: "Ask whether a real sample for the cab-user audience and city selection is available. The public CSV is fictional and demonstrates possible layout only; check any supplied rows for required fields and selected coverage." },
    ],
    related: [
      "car-owners-database",
      "b2b-b2c-companies-database",
      "mobile-number-database-india",
      "bulk-sms-database-india",
      "whatsapp-number-database-india",
      "job-seekers-database",
    ],
  },
} satisfies CategoryContent;
