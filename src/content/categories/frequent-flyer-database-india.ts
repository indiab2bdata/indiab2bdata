import { FileText, Filter, Globe, MapPinned } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-17",
  keyword: {
    slug: "frequent-flyer-database-india",
    keyword: "frequent flyer database India",
    title: "Frequent Flyer Database India",
    metaDescription: "Scope a traveller audience for a relevant travel or hospitality offer. Discuss locations, recorded travel attributes and sample options before ordering.",
    eyebrow: "Frequent Flyer Database",
    showTestimonials: true,
    h1: "Frequent Flyer Database in India",
    answer: "Planning an offer for people who travel regularly? Tell us whether you are promoting a hotel, holiday, airport service or another travel-related product. Start with the traveller profile and locations you need, then check the source and available audience attributes in a sample.",
    intro: [
      "A business trip and a family holiday involve different needs. Even people who fly often do not all want the same hotel, package or service, so a travel-related offer needs more detail than a “premium audience” label.",
      "Describe the offer, the cities you can serve and the travel attributes you want to discuss. Do not assume flying frequency establishes someone’s income or spending budget; ask what is actually recorded.",
      "This is an independent audience-data enquiry, not an airline or loyalty-programme export. It does not provide booking access, ticket details or travel-account credentials.",
      "If your brief specifically requires income or wealth criteria, compare the HNI and high income employees database and confirm the classification basis separately from travel activity."
    ],
    contentLinks: [
      {
        text: "holiday club members database",
        href: "/club-mahindra-members-database"
      },
      {
        text: "dining and leisure customers database",
        href: "/dining-leisure-customers-database-india"
      },
      {
        text: "cab users database",
        href: "/cab-users-database-india"
      },
      {
        text: "executive contacts database",
        href: "/ceo-cfo-cmo-it-heads-database-india"
      },
      {
        text: "Facebook users database",
        href: "/facebook-users-database-india"
      },
      {
        text: "HNI and high income employees database",
        href: "/hni-high-income-employees-database-india"
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: "A Travel-Focused Brief",
        description: "Explain the service and type of travel you are targeting."
      },
      {
        icon: MapPinned,
        title: "Relevant Locations",
        description: "Start with the cities or airport service areas you cover."
      },
      {
        icon: Filter,
        title: "Check the Attributes",
        description: "Ask how travel-related labels are defined and recorded."
      },
      {
        icon: FileText,
        title: "Review the Sample",
        description: "Assess the source and field completeness before ordering."
      }
    ],
    dataFields: [
          "Name",
          "Mobile number and email ID",
          "Travel type: business, leisure, domestic or international",
          "Income band and occupation, where available",
          "City, state and pincode",
        ],
    sections: [
      {
        heading: "Make the offer fit the traveller",
        paragraphs: [
          "Start with the problem your offer solves: an airport transfer, a work-trip stay, a weekend break or a holiday-planning service. The offer gives the audience brief a useful direction."
        ],
        subsections: [
          {
            heading: "Business travel services",
            text: "Describe the work-travel need without assuming all travellers are senior executives."
          },
          {
            heading: "Leisure & holiday offers",
            text: "Explain the destination, departure locations and type of trip you are promoting."
          },
          {
            heading: "Airport & local services",
            text: "State the airports and service radius you can support."
          },
          {
            heading: "Hospitality partnerships",
            text: "Clarify whether you need individual travellers or business decision-makers."
          }
        ]
      },
      {
        heading: "Compare nearby audience categories",
        paragraphs: [
          "For a holiday-membership audience enquiry, explore the holiday club members database. For restaurant and leisure offers, compare the dining and leisure customers database.",
          "The cab users database may suit a local transport brief. If you need professional contacts for a corporate travel proposal, use the executive contacts database as a separate B2B requirement."
        ]
      },
      {
        heading: "Check what a travel label actually means",
        paragraphs: [
          "Ask how the segment was described and when the relevant attributes were recorded. A consumer contact record is not evidence of a particular future trip, airline booking or willingness to buy.",
          "For a broader digital-audience enquiry, compare the Facebook users database. Keep the audience source and recorded preferences in view when choosing your contact channel."
        ]
      }
    ],
    useCases: [
      "Discuss an audience for a hotel or resort offer",
      "Scope a holiday-planning campaign",
      "Plan airport transfer or local travel promotions",
      "Compare business and leisure audience requirements",
      "Separate corporate travel sales from consumer outreach"
    ],
    faqs: [
      {
        question: "Is this information supplied by an airline?",
        answer: "This page does not offer an airline or loyalty-programme export. Ask for source information and the basis of any travel-related audience label."
      },
      {
        question: "Does it include PNRs or upcoming itineraries?",
        answer: "No. This is not a source of booking references, flight itineraries, ticket records, loyalty numbers or account access."
      },
      {
        question: "Can I separate business and leisure audiences?",
        answer: "You can request those attributes, but ask how they are defined and whether they are recorded for the available segment."
      },
      {
        question: "Does frequent travel mean the audience is high-income?",
        answer: "Not necessarily. Do not infer income or a purchase budget from travel activity alone. Check the actual recorded fields."
      },
      {
        question: "How do I request a relevant sample?",
        answer: "Send your travel offer, locations, intended channel and audience criteria. Ask for available source details, fields, sample options and a quote."
      }
    ],
    related: [
      "club-mahindra-members-database",
      "dining-leisure-customers-database-india",
      "cab-users-database-india",
      "ceo-cfo-cmo-it-heads-database-india",
      "facebook-users-database-india"
    ],
    useCasesIntro: "Match the offer to a defined travel need instead of treating every traveller as the same customer.",
    cta: {
      heroTitle: "Tell Us About Your Travel Offer",
      heroSubtitle: "Share the service, locations and traveller profile you need. Ask which audience attributes and sample options are available.",
      buttonLabel: "Discuss Traveller Audience",
      text: "Hotel stay, holiday or airport service? Tell us what you offer so we can check the audience brief.",
      footerTitle: "Let’s Scope a Relevant Traveller Audience",
      footerText: "Send your offer and target locations. We’ll help you check the available fields, source information and sample options before you choose."
    },
  },
} satisfies CategoryContent;
