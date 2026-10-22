import { Building2, FileText, MapPinned, UserCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-18",
  keyword: {
    slug: "furniture-stores-dealers-database-india",
    keyword: "furniture stores dealers database India",
    title: "Furniture Stores & Dealers Database India | Trade Contacts",
    metaDescription: "Find furniture showrooms, dealers and furnishing businesses by location and category. Share your product range and request a relevant trade sample.",
    eyebrow: "Furniture & Furnishing Database",
    showTestimonials: true,
    h1: "Furniture Stores & Dealers Database in India",
    answer: "Find furniture businesses that fit your product range. A modular-kitchen dealer, an office-furniture showroom and a soft-furnishing shop buy different things. Tell us what you supply and where you sell, then ask for a sample built around the right business category.",
    intro: [
      "A large furniture list is not much use if most of the shops cannot stock your product. Start with what you sell: fittings, upholstery, finished furniture, display systems, software or a trade service.",
      "Separate showrooms, dealers, workshops and furnishing shops in your brief. Add the locations your team can deliver to and the type of business relationship you want to build.",
      "If your product is specified for projects, explore the architects and interior designers database. For production businesses rather than retail outlets, compare the manufacturer database.",
      "For a wider product brief covering household goods, garden products or pet supplies, explore the home, garden and pet suppliers database. Specify the product range and trade roles you need."
    ],
    contentLinks: [
      {
        text: "architects and interior designers database",
        href: "/architect-interior-designers-database-india"
      },
      {
        text: "manufacturer database",
        href: "/manufacturer-database-india"
      },
      {
        text: "dealers and distributors database",
        href: "/dealers-distributors-database-india"
      },
      {
        text: "contractors database",
        href: "/contractors-database-india"
      },
      {
        text: "building material database",
        href: "/building-material-database-india"
      },
      {
        text: "property owners database",
        href: "/commercial-residential-properties-database-india"
      },
      {
        text: "home, garden and pet suppliers database",
        href: "/home-garden-pets-suppliers-database-india"
      }
    ],
    highlights: [
      {
        icon: Building2,
        title: "Relevant Business Types",
        description: "Separate showrooms, dealers, workshops and furnishing retailers."
      },
      {
        icon: MapPinned,
        title: "A Workable Territory",
        description: "Choose the cities your team can supply and support."
      },
      {
        icon: UserCheck,
        title: "Buyer Context",
        description: "Ask which owner and business-contact fields are populated."
      },
      {
        icon: FileText,
        title: "Check the Category Fit",
        description: "Review a sample against your actual product range."
      }
    ],
    dataFields: [
          "Business / showroom name",
          "Owner or proprietor name",
          "Business type: furniture showroom, modular or office furniture dealer, furnishing or decor shop",
          "Mobile number and email ID, where available",
          "GSTIN and business address, where available",
          "City, state and pincode",
        ],
    sections: [
      {
        heading: "Start with the furniture category",
        paragraphs: [
          "Describe the products a suitable buyer would sell or use. That makes the enquiry more useful than simply asking for all furniture businesses."
        ],
        subsections: [
          {
            heading: "Furniture showrooms",
            text: "For finished-product brands, retail partnerships and showroom services."
          },
          {
            heading: "Office & modular furniture",
            text: "For workspace products, fittings and specialised supplier relationships."
          },
          {
            heading: "Furnishing & decor shops",
            text: "For curtains, upholstery, textiles, accessories and relevant retail services."
          },
          {
            heading: "Workshops & production units",
            text: "For materials, machinery or components; request a production-focused category."
          }
        ]
      },
      {
        heading: "Connect the list to the way you sell",
        paragraphs: [
          "For channel expansion, the dealers and distributors database can support a separate distributor brief. For site and installation work, compare the contractors database.",
          "Suppliers serving the wider construction trade can explore the building material database. Keep product fit in mind: a materials dealer and a furniture showroom may sit in the same supply chain without buying the same thing."
        ]
      },
      {
        heading: "Trade buyers and homebuyers need different briefs",
        paragraphs: [
          "If your aim is to sell a sofa to an individual household, a furniture-business list is the wrong starting point. Discuss the property owners database separately and check what audience information is available.",
          "For trade sales, send your product category, price position, business types and delivery areas. Review a sample for useful category labels, location detail and contact fields before agreeing the quantity."
        ]
      }
    ],
    useCases: [
      "Find retail partners for a furniture range",
      "Introduce fittings, fabric or component supplies",
      "Arrange showroom product demonstrations",
      "Offer furniture retail and inventory software",
      "Build a project-related trade shortlist"
    ],
    faqs: [
      {
        question: "Can I request only office-furniture dealers?",
        answer: "Yes. Describe the category and cities you want, and ask the team to check matching business records."
      },
      {
        question: "Are manufacturers included with retailers?",
        answer: "Do not assume they are interchangeable. State whether you want production units, showrooms, dealers or separate lists for each."
      },
      {
        question: "Can I look for interior designers as well?",
        answer: "Use the dedicated architects and interior designers category for project-specification contacts. Keep that brief separate from a retail-stockist requirement."
      },
      {
        question: "Which contact fields are available?",
        answer: "Check the sample for business name, category, location and available owner or business contact fields. Extra fields should be confirmed before ordering."
      },
      {
        question: "How do I get a sample and quote?",
        answer: "Send your product range, preferred business types, target locations and approximate volume. Ask for the relevant sample and the agreed delivery scope."
      }
    ],
    related: [
      "architect-interior-designers-database-india",
      "manufacturer-database-india",
      "dealers-distributors-database-india",
      "contractors-database-india",
      "building-material-database-india",
      "commercial-residential-properties-database-india"
    ],
    useCasesIntro: "Build the shortlist around the product and buying role, from retail stocking to project specification.",
    cta: {
      heroTitle: "Find Buyers for Your Furniture Range",
      heroSubtitle: "Share what you supply, the business types you want and your sales territory. Ask for a matching sample.",
      buttonLabel: "Request Furniture Sample",
      text: "Looking for stockists, showrooms or workshops? Send your product range and cities to narrow the list.",
      footerTitle: "Let’s Build Your Furniture Trade Shortlist",
      footerText: "Tell us what you sell and who should buy it. We’ll confirm the available categories, contact fields and sample options."
    },
  },
} satisfies CategoryContent;
