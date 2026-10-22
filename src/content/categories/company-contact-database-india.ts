import { Contact, ListChecks, Search, UserCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "company-contact-database-india",
    keyword: "company contact database India",
    title: "Company Contact Database India | Reach the Right Person",
    metaDescription:
      "A company contact database with named contacts and designations, not just company switchboard numbers. Reach the right person at every company.",
    eyebrow: "Company Contact Database India",
    h1: "Company Contact Database India - Reach the Right Person, Not a Switchboard",
    answer:
      "A company contact database provides person-level details within a company - name, designation and direct contact information - rather than just a general company number. IndiaB2BData.com's company contact database is built so your outreach reaches an actual person, not a reception desk.",
    intro: [
      "A generic company number often means a receptionist, an IVR menu, or a shared inbox nobody checks. A company contact database solves that by attaching a name and designation to the record, so you know exactly who you're calling or emailing.",
      "This matters most for outbound sales and partnership outreach, where getting past the front desk to the right person is usually the hardest part of the process.",
    ],
    highlights: [
      { icon: Contact, title: "Named Contacts", description: "Person-level details, not just a company line." },
      { icon: UserCheck, title: "Designation Included", description: "Know the role before you reach out." },
      { icon: Search, title: "Precise Targeting", description: "Skip the switchboard, reach the right desk." },
      { icon: ListChecks, title: "Direct Contact Details", description: "Mobile or email tied to the individual, where available." },
    ],
    useCases: [
      "Outbound sales calls that need to bypass a switchboard",
      "Personalised email or LinkedIn outreach campaigns",
      "Partnership and vendor outreach to a named contact",
      "Building a designation-specific contact list",
    ],
    faqs: [
      {
        question: "What's included per contact?",
        answer: "Name, designation and available direct contact details (mobile or email), alongside the company they work at.",
      },
      {
        question: "Can I request a specific designation only?",
        answer: "Yes - tell us the role or designation you need and we'll build a matching list.",
      },
      {
        question: "Is this more accurate than a general company number?",
        answer: "Yes, named contacts are more likely to reach the right person directly rather than a shared line.",
      },
      {
        question: "Can I get a sample of named contacts first?",
        answer: "Yes, every enquiry includes 15–20 free sample records before you commit to a package.",
      },
    ],
  },
} satisfies CategoryContent;
