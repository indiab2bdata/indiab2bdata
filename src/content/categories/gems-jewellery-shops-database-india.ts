import { Factory, FileSearch, FileText, Gem, Landmark, Laptop, MapPinned, Sparkles, Truck, UserCheck, Wrench } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "gems-jewellery-shops-database-india",
    keyword: "gems jewellery shops database India",
    title: "Gems & Jewellery Shops Database India | Jeweller Contacts",
    metaDescription: "Find jewellery retailers, gemstone dealers or trade businesses for your offer. Choose business types and cities, then request a jeweller sample.",
    eyebrow: "Gems & Jewellery Shops Database",
    showTestimonials: true,
    h1: "Gems & Jewellery Shops Database in India",
    answer: "Find jewellery businesses that fit your product or service. Whether you supply collections, packaging, displays, software or security equipment, start with the right trade category and location. Share the buyers you want to reach and ask for a relevant sample.",
    intro: [
      "A neighbourhood gold jeweller, a gemstone trader and a jewellery manufacturer work in different ways. Mixing them into one sales list can leave your team making the wrong pitch.",
      "Tell us the trade category, target cities and relationship you want to build. A manufacturer looking for retail stockists needs a different shortlist from a supplier selling tools to workshops.",
      "For cross-border trade businesses, compare the importers and exporters database. For production units, explore the manufacturer database and describe the jewellery segment you need.",
      "For a retail-focused brief centred on showroom buyers and store contacts, explore the jewellers database. Specify your jewellery categories, retail formats and target cities."
    ],
    contentLinks: [
      {
        text: "importers and exporters database",
        href: "/importers-exporters-database-india"
      },
      {
        text: "manufacturer database",
        href: "/manufacturer-database-india"
      },
      {
        text: "company proprietors database",
        href: "/company-proprietors-database-india"
      },
      {
        text: "fabric and clothing stores database",
        href: "/fabric-clothing-stores-database-india"
      },
      {
        text: "women consumers database",
        href: "/females-database-india"
      },
      {
        text: "female consumer Bangalore database",
        href: "/female-consumer-bangalore-database"
      },
      {
        text: "jewellers database",
        href: "/jewellers-database-india"
      }
    ],
    highlights: [
      {
        icon: Sparkles,
        title: "Trade-Category Focus",
        description: "Distinguish retailers, gemstone dealers, wholesalers and workshops."
      },
      {
        icon: MapPinned,
        title: "Your Sales Territory",
        description: "Choose the cities and markets where you can do business."
      },
      {
        icon: UserCheck,
        title: "Business Contact Context",
        description: "Check owner, business and contact-field availability."
      },
      {
        icon: FileText,
        title: "Review Before Buying",
        description: "Look at category fit and field completeness in a sample."
      }
    ],
    dataFields: [
          "Shop / business name",
          "Owner or proprietor name",
          "Business type: gold, diamond or silver jeweller, gemstone dealer, bullion trader or manufacturer",
          "Mobile number and email ID, where available",
          "GSTIN and shop address, where available",
          "City, state and pincode",
        ],
    sections: [
      {
        heading: "Choose the jewellery businesses you want to approach",
        paragraphs: [
          "Start with what a suitable buyer sells or produces, then add the type of business relationship you want."
        ],
        subsections: [
          {
            heading: "Gold, diamond & silver retailers",
            text: "For brands and suppliers looking for stores that could stock or use their products."
          },
          {
            heading: "Gemstone & specialist traders",
            text: "Describe the stones, products or trade category relevant to your offer."
          },
          {
            heading: "Wholesalers & manufacturers",
            text: "Separate trade distribution from production if the buying needs differ."
          },
          {
            heading: "Store-service buyers",
            text: "For relevant packaging, displays, billing systems and retail security products."
          }
        ]
      },
      {
        heading: "Make the first conversation relevant",
        paragraphs: [
          "Tell us what you supply and why a jeweller would consider it. Collection launches, store equipment and software demonstrations each need a different opening.",
          "For owner-led firms across several business categories, compare the company proprietors database. Suppliers working across fashion retail can build a separate shortlist from the fabric and clothing stores database."
        ]
      },
      {
        heading: "Keep trade partnerships separate from shopper campaigns",
        paragraphs: [
          "This page is for jewellery business contacts. If your campaign is aimed at individual shoppers, discuss the women consumers database as a different audience requirement.",
          "For a Bangalore-only consumer offer, explore the female consumer Bangalore database. Confirm the audience fit and local coverage rather than treating a list of jewellers as a shopper audience."
        ]
      },
      {
        heading: "Ask for the sample that fits your trade brief",
        paragraphs: [
          "Send your preferred business categories, cities, product or service and approximate quantity. Ask which fields are populated and whether the categories can be separated clearly.",
          "A business listing is not proof of licensing, certification, turnover or current buying interest. Check the details that matter to your relationship directly with the business."
        ]
      }
    ],
    useCases: [
      "Find retail stockists for a jewellery collection",
      "Offer packaging and display products",
      "Demonstrate jewellery billing or inventory tools",
      "Introduce store security products",
      "Invite relevant businesses to a trade event"
    ],
    faqs: [
      {
        question: "Can I request only diamond or silver jewellers?",
        answer: "Yes. Describe the product and business categories you need, along with the cities you want to cover, and ask for a matching sample."
      },
      {
        question: "Can retailers and manufacturers be separated?",
        answer: "State which category you need or request separate lists. They represent different buying situations and should not be treated as interchangeable."
      },
      {
        question: "Does the list verify certification or business size?",
        answer: "Do not assume that. Ask what is actually recorded and independently check any certification, licensing or scale information important to the relationship."
      },
      {
        question: "Is this useful for jewellery shopper campaigns?",
        answer: "This page focuses on businesses. For individual shoppers, discuss an appropriate consumer audience separately."
      },
      {
        question: "How do I get a relevant sample and price?",
        answer: "Request a written quote for the agreed selection, locations, fields and volume. Confirm the counting unit, total price and delivery terms before purchase."
      }
    ],
    related: [
      "importers-exporters-database-india",
      "manufacturer-database-india",
      "company-proprietors-database-india",
      "fabric-clothing-stores-database-india",
      "females-database-india",
      "female-consumer-bangalore-database"
    ],
    useCasesIntro: "Focus on the business need behind your offer, from stocking a collection to improving a store’s operations.",
    cta: {
      heroTitle: "Find Jewellers Who Fit Your Offer",
      heroSubtitle: "Share your product, preferred trade categories and cities. Ask for a relevant business sample and quote.",
      buttonLabel: "Request Jeweller Sample",
      text: "Retail stockists, gemstone traders or workshops? Tell us who should be on your shortlist.",
      footerTitle: "Let’s Build Your Jewellery Trade Shortlist",
      footerText: "Tell us what you supply and the businesses you want to reach. We’ll confirm available coverage, sample options and pricing."
    },
  },
  landing: categoryLanding(
    {
      slug: "gems-jewellery-shops-database-india",
      name: "Gems & Jewellery Trade Database",
      title: "Gems & Jewellery Shops Database India | Wholesalers, Gem & Bullion Dealers",
      metaDescription: "Gems and jewellery trade database for India: jewellery manufacturers, wholesalers, diamond and coloured-gemstone dealers and bullion traders in Surat, Jaipur, Mumbai and Kolkata. Sample rows on the page.",
      eyebrow: "Jewellery Trade & Gems",
      h1: "Gems & Jewellery Trade Database: Wholesalers, Makers & Gem Dealers",
      lead: "The trade side of Indian jewellery: manufacturers, wholesalers, diamond and coloured-gem dealers, and bullion traders in Surat, Jaipur, Mumbai's Zaveri Bazaar and Kolkata.",
      segmentSummary: "Behind every showroom is a trade network. Surat cuts and polishes most of the world's diamonds, Jaipur is a global centre for coloured gemstones, Mumbai's Zaveri Bazaar and SEEPZ handle wholesale and export jewellery, and Kolkata and Coimbatore make handcrafted gold. These businesses buy rough, metal, machinery, grading and logistics, and they sell to retailers. This page covers that B2B trade. Retail showrooms are on the Jewellers database.",
      segmentCards: [
        { icon: Gem, title: "Diamond & Gem Dealers", description: "Diamond traders and coloured-gemstone dealers in Surat, Mumbai and Jaipur." },
        { icon: Factory, title: "Jewellery Manufacturers", description: "Makers and karigar units supplying wholesalers and retailers." },
        { icon: Landmark, title: "Wholesale & Bullion", description: "Jewellery wholesalers and bullion traders in the main trade markets." },
      ],
      segmentTabs: { heading: "Major trade hubs", tabs: [
        T("surat", "Surat", "The diamond-cutting and polishing capital, with traders, polishers and export houses.", ["Owner", "Partner", "Export Manager", "Production Head"], "Grading labs, machinery, insurance, logistics."),
        T("jaipur", "Jaipur", "A global coloured-gemstone and silver jewellery centre.", ["Owner", "Gem Dealer", "Export Head", "Designer"], "Gem labs, packaging, export services."),
        T("mumbai", "Mumbai", "Zaveri Bazaar wholesale and SEEPZ export manufacturing.", ["Director", "Wholesaler", "Bullion Trader", "Export Manager"], "Bullion services, ERP, security logistics."),
      ] },
      coverage: { heading: "Coverage by trade type", label: "Trade type", rows: [
        ["Diamond traders & polishers", "Surat, Mumbai"], ["Coloured gemstone dealers", "Jaipur, Mumbai"], ["Jewellery manufacturers", "Gold, diamond, silver makers"], ["Wholesalers", "Supplying retail jewellers"], ["Bullion traders", "Gold and silver bullion"],
      ] },
      dataFields: ["Business name", "Trade type", "Products (diamonds, gems, gold, silver)", "Contact person and designation", "Business mobile number", "Business email ID", "Market / area, city, state", "Website, where available"],
      sample: "retailJeweller",
      useCases: [
        { icon: FileSearch, title: "Grading & Certification", description: "Offer diamond and gem grading to traders and manufacturers." },
        { icon: Wrench, title: "Machinery & Tools", description: "Sell CAD, casting, laser and polishing equipment to makers." },
        { icon: Truck, title: "Secure Logistics", description: "Pitch insured valuables transport to wholesalers and exporters." },
        { icon: Laptop, title: "Trade ERP", description: "Sell metal-accounting and inventory software to manufacturers and wholesalers." },
      ],
      faqs: [
        { question: "Do you cover lab-grown diamond businesses?", answer: "Yes. Lab-grown diamond growers, polishers and traders, mostly in Surat and Mumbai, are tagged separately where recorded." },
        { question: "Can I find gold jewellery manufacturers in Coimbatore or Kolkata?", answer: "Yes. Handcrafted and machine-made gold jewellery manufacturers in Coimbatore, Kolkata, Thrissur and Rajkot are covered by city." },
        { question: "How is this different from the Jewellers database?", answer: "This page covers the trade: manufacturers, wholesalers, gem and bullion dealers. The Jewellers database covers retail showrooms that sell to consumers." },
        { question: "Can I target diamond traders in Surat only?", answer: "Yes. Filter by trade type and city to get only Surat diamond businesses." },
        { question: "Are exporters included?", answer: "Yes. Exporting manufacturers and traders are flagged where recorded." },
        { question: "Do you cover Jaipur gem dealers?", answer: "Yes. Coloured-gemstone dealers and gem jewellery makers in Jaipur are tagged separately." },
      ],
      pricingNote: "Priced by trade type, hub and fields.",
      related: [L("Jewellers Database", "jewellers-database-india"), L("Importers & Exporters Database", "importers-exporters-database-india"), L("Manufacturer Database", "manufacturer-database-india"), L("Gujarat Business Database", "database/gujarat"), L("Dealers & Distributors Database", "dealers-distributors-database-india"), L("Metals & Minerals Industries Database", "metals-minerals-industries-database-india")],
      disclaimer: legal,
      formTitle: "Get a Free Jewellery Trade Sample",
      bands: ["Selling to Surat diamond traders or Jaipur gem dealers? Ask for a hub sample.", "Need manufacturers rather than wholesalers? We filter by trade type.", "Get jewellery trade samples for your offer."],
      footerTitle: "Reach India's Jewellery Trade",
    },
    { subjects: "gem and jewellery trade", kind: "business" }
  ),
} satisfies CategoryContent;
