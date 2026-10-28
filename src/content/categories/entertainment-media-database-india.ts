import { Filter, MapPinned, Sparkles, Users } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "entertainment-media-database-india",
    keyword: "entertainment and media database India",
    title: "Entertainment & Media Database India",
    metaDescription:
      "Entertainment and media database in India - production houses, ad agencies, publishers, broadcasters, event companies and media professionals by city. Ask whether a matching real sample is available.",
    eyebrow: "Entertainment & Media Database",
    h1: "Entertainment & Media Database in India",
    answer:
      "An entertainment and media database lists companies and professionals in India's media and entertainment industry - film and TV production houses, advertising and digital agencies, publishers, broadcasters, OTT and music companies, and event management firms - with company name, segment, decision-maker, contact details and city. IndiaB2BData.com supplies this data for B2B services, equipment and partnership outreach.",
    intro: [
      "India's media and entertainment industry spans Mumbai's film and TV hub, Hyderabad and Chennai's regional cinema, Delhi NCR's advertising and news industry, and a fast-growing digital, OTT and creator economy across Bengaluru and beyond. These companies buy production equipment, studio space, software, talent, financing and marketing services.",
      "Our entertainment and media database covers production, advertising, publishing, broadcasting and events companies, filterable by segment and city.",
      "For a focused brief around campaign planning, channel selection or media-buying services, compare the media planning companies database. Specify the agency types and contact roles relevant to your offer."
    ],
    contentLinks: [
      {
        text: "media planning companies database",
        href: "/media-planning-companies-database-india"
      }
    ],
    highlights: [
      { icon: Sparkles, title: "Every Media Segment", description: "Film, TV, OTT, ads, print, radio, events." },
      { icon: MapPinned, title: "Media Hubs", description: "Mumbai, Delhi NCR, Hyderabad, Chennai, Bengaluru." },
      { icon: Users, title: "Decision-Makers", description: "Founders, producers, heads of departments." },
      { icon: Filter, title: "Segment Filters", description: "Pick exactly the part of the industry you need." },
    ],
    dataFields: [
      "Company name",
      "Segment: film/TV production, OTT, advertising, digital agency, print, radio, music or events",
      "Decision-maker name and designation",
      "Mobile number and email ID",
      "Website, where available",
      "City and state",
    ],
    sections: [
      {
        heading: "Segments Covered",
        paragraphs: [],
        subsections: [
          { heading: "Film, TV & OTT Production", text: "Production houses, post-production studios, VFX and animation companies." },
          { heading: "Advertising & Digital Agencies", text: "Creative, media-buying, digital marketing and influencer agencies." },
          { heading: "Publishing & Broadcasting", text: "Newspapers, magazines, TV channels, radio stations and digital publishers." },
          { heading: "Events & Live Entertainment", text: "Event management, concert promoters, wedding planners and exhibition organisers." },
        ],
      },
      {
        heading: "Who Uses This Database?",
        paragraphs: [],
        bullets: [
          "Camera, lighting, audio and studio equipment suppliers",
          "Editing, VFX and creative software companies",
          "Brands and agencies looking for production partners",
          "Media recruiters and talent agencies",
          "Insurance and financing providers for productions",
        ],
      },
    ],
    useCases: [
      "Production equipment and studio rental sales",
      "Creative software promotion",
      "Agency and production partnerships",
      "Media hiring and talent outreach",
      "Event and festival sponsorships",
    ],
    faqs: [
      { question: "What is an entertainment and media database?", answer: "It is a list of production houses, advertising and digital agencies, publishers, broadcasters, OTT, music and event companies in India with decision-maker contacts and location." },
      { question: "Which cities are covered?", answer: "All major media hubs, including Mumbai, Delhi NCR, Hyderabad, Chennai, Bengaluru, Kolkata and Pune." },
      { question: "Can I get only advertising agencies?", answer: "Yes. Records can be filtered by segment, such as advertising, digital agencies, production or events." },
      { question: "Does it include individual media professionals?", answer: "Records focus on companies and their decision-makers, such as founders, producers and department heads." },
      { question: "Who buys media industry data?", answer: "Equipment and software suppliers, brands, recruiters, financiers and event sponsors." },
      { question: "Can I see a sample?", answer: "Ask whether a real sample for the entertainment or media business category selection is available. The public CSV is fictional and demonstrates possible layout only; check any supplied rows for required fields and selected coverage." },
    ],
    related: [
      "digital-photography-studios-database-india",
      "designers-database-india",
      "dining-leisure-customers-database-india",
      "computer-it-telecom-services-database-india",
      "consultants-consulting-services-database-india",
      "b2b-leads-database-india",
    ],
  },
} satisfies CategoryContent;
