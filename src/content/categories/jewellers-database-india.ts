import { FileText, Gem, Laptop, MapPinned, Megaphone, ShieldCheck, Sparkles, Store, UserCheck, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-23",
  keyword: {
    slug: "jewellers-database-india",
    keyword: "Jewellers Database India",
    title: "Jewellers Database India",
    metaDescription: "Explore retail jewellers database options in India. Specify jewellery categories, showroom types, contact roles and cities, then request a sample and quote.",
    eyebrow: "Jewellers Database",
    h1: "Jewellers Database in India",
    answer: "A jewellers database helps you shortlist jewellery retailers and showroom businesses, with available category, location and business contact details. Share your product range and the owners, managers or retail businesses you want to approach so we can check matching coverage and sample options.",
    intro: [
      "A retail stockist search starts with the collection or service you sell. A supplier introducing silver jewellery needs a different shortlist from a business offering showroom displays, billing software or store equipment.",
      "Describe the jewellery categories, showroom formats and locations you need. Ask which owner, manager and business contact fields are populated so your team can plan a relevant introduction.",
      "This page focuses on retail jewellers and showroom contacts. For a wider brief including gemstone traders and production businesses, compare the gems and jewellery shops database. For production partners, explore the manufacturer database and specify the jewellery segment."
    ],
    contentLinks: [
      {
        text: "gems and jewellery shops database",
        href: "/gems-jewellery-shops-database-india"
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
        text: "company proprietors database",
        href: "/company-proprietors-database-india"
      },
      {
        text: "importers database",
        href: "/importers-database-india"
      },
      {
        text: "database directory",
        href: "/database"
      }
    ],
    highlights: [
      {
        icon: Sparkles,
        title: "Retail Jewellery Focus",
        description: "Specify the jewellery ranges and showroom formats relevant to your offer."
      },
      {
        icon: UserCheck,
        title: "Owner & Store Context",
        description: "Ask about available proprietor, manager and business contact details."
      },
      {
        icon: MapPinned,
        title: "Your Target Markets",
        description: "Check showroom coverage in the cities and markets you want to serve."
      },
      {
        icon: FileText,
        title: "Review a Matching Sample",
        description: "Look at retail categories and populated fields before selecting a list."
      }
    ],
    dataFields: [
      "Jeweller or showroom business name",
      "Jewellery category and retail format, where recorded",
      "Owner, manager or contact person, where available",
      "Contact designation, where identified",
      "Business phone number and email, where available",
      "Business address, city, state and pincode",
      "Website, where available"
    ],
    sections: [
      {
        heading: "Choose the jewellers who fit your product range",
        paragraphs: [
          "Explain what a suitable store would stock or use. Ask which jewellery-category and showroom labels are recorded so the available segment reflects your actual brief."
        ],
        subsections: [
          {
            heading: "Gold, silver and diamond retail",
            text: "Name the categories relevant to your collection or service. Confirm the recorded specialisation rather than assuming every jeweller handles the same product range."
          },
          {
            heading: "Independent showrooms and boutiques",
            text: "For a store-by-store introduction, ask which owner or manager fields are available. State any preferred retail format explicitly."
          },
          {
            heading: "Chain outlets and central contacts",
            text: "Tell us whether you need local showrooms or a wider purchasing function. Ask how branches and repeated business contacts are represented in the file."
          }
        ]
      },
      {
        heading: "Give the store a practical reason to respond",
        paragraphs: [
          "A collection launch, inventory demonstration and display proposal each need a different first conversation. Explain the product, service area and next step clearly.",
          "For channel partners beyond individual showrooms, compare the dealers and distributors database. For owner-led businesses across several sectors, explore the company proprietors database as a broader requirement."
        ]
      },
      {
        heading: "Keep sourcing and retail outreach separate",
        paragraphs: [
          "If you are sourcing products, describe the supplier relationship you need instead of assuming a retail showroom is a production partner. For businesses buying goods from overseas, compare the importers database and confirm the product and trade context.",
          "Use the database directory to explore adjacent trade categories when your offer serves a different part of the supply chain."
        ]
      },
      {
        heading: "Review a retail jeweller sample before ordering",
        paragraphs: [
          "Send your jewellery categories, showroom types, locations, contact roles and approximate quantity. Ask about available records, field completeness, file format, delivery timing and pricing.",
          "The public CSV uses fictional, masked examples to show the layout. Confirm current product ranges, buying responsibility and any business credentials important to your relationship directly with the jeweller."
        ]
      }
    ],
    useCasesIntro: "Match the product or store service to the retail business and contact role you want to approach.",
    useCases: [
      "Introduce jewellery collections to potential retail stockists",
      "Offer showroom packaging and display products",
      "Demonstrate jewellery billing and inventory software",
      "Discuss store equipment and service requirements",
      "Invite suitable retailers to trade previews and product demonstrations"
    ],
    faqs: [
      {
        question: "How is this different from the gems and jewellery shops database?",
        answer: "This page focuses on retail jewellers and showroom contacts. The broader category supports a wider trade brief, including gemstone and production businesses. Specify the retail categories you need."
      },
      {
        question: "Can I request only silver or diamond jewellers?",
        answer: "Share your required jewellery categories and target locations. We will check which distinctions are recorded and confirm available coverage and sample options."
      },
      {
        question: "Can I request owners instead of general store numbers?",
        answer: "State the contact roles you need. Ask which owner, manager and general business fields are populated in the matching sample; do not assume every record identifies a buyer."
      },
      {
        question: "Does a listing establish brands stocked or buying interest?",
        answer: "No. Confirm stock, product suitability, purchasing responsibility and current interest directly with the business before planning a trade relationship."
      },
      {
        question: "How do I request a sample and quote?",
        answer: "Send your product categories, retail formats, cities, required fields and approximate quantity. The public CSV is a fictional format preview. Ask our team for matching sample options, available coverage and pricing."
      }
    ],
    related: [
      "gems-jewellery-shops-database-india",
      "manufacturer-database-india",
      "dealers-distributors-database-india",
      "company-proprietors-database-india",
      "importers-database-india"
    ],
    showTestimonials: true,
    cta: {
      heroTitle: "Find Retail Jewellers Who Fit Your Offer",
      heroSubtitle: "Share your product range, showroom types, cities and contact requirements. Ask for a matching sample and quote.",
      buttonLabel: "Request Retail Jeweller Sample",
      text: "Looking for jewellery stockists or showroom buyers? Tell us which categories and markets fit your offer.",
      footerTitle: "Build Your Retail Jeweller Shortlist",
      footerText: "Send your target jewellery categories, showroom types, locations and approximate quantity. We will confirm available coverage, sample options and pricing."
    }
  },
  landing: categoryLanding(
    {
      slug: "jewellers-database-india",
      name: "Jewellers Database",
      title: "Jewellers Database India | Retail Jewellery Showrooms by City",
      metaDescription: "Jewellers database for India: retail jewellery showrooms and stores by city, from single-store family jewellers to regional chains, with owner and store-manager contacts. Sample rows on the page.",
      eyebrow: "Retail Jewellery Showrooms",
      h1: "Jewellers Database India: Retail Showrooms by City",
      lead: "Retail jewellery showrooms across India, from single-store family jewellers to regional chains. Reach owners and store managers with collections, displays, software and security.",
      segmentSummary: "Retail jewellers sell gold, diamond and silver jewellery to consumers from showrooms, and most are family-run with the owner on the floor. They buy ready collections from manufacturers, as well as hallmarking-ready inventory systems, displays, packaging, CCTV and safes. This page covers the retail side only. For wholesalers, manufacturers and gem dealers, see the Gems & Jewellery database.",
      segmentCards: [
        { icon: Store, title: "Showrooms & Stores", description: "Single-store jewellers and multi-store regional chains." },
        { icon: Gem, title: "By Product Focus", description: "Gold, diamond, silver and bridal specialists." },
        { icon: Users, title: "Owners & Store Managers", description: "Decision-makers for collections, systems and store upgrades." },
      ],
      segmentTabs: { heading: "Pick the retail segment", tabs: [
        T("single", "Single-Store Jewellers", "Family-run showrooms, often generations old, where the owner buys everything.", ["Owner", "Partner", "Son / Successor", "Accountant"], "Collections suppliers, billing software, packaging."),
        T("chain", "Regional Chains", "Multi-store jewellers with central purchasing and marketing.", ["Director", "Purchase Head", "Marketing Head", "Store Manager"], "Inventory systems, marketing agencies, display design."),
        T("silver", "Silver & Fashion", "Silver and lightweight jewellery stores targeting younger buyers.", ["Owner", "Store Manager", "Buyer", "Partner"], "Silver manufacturers, e-commerce enablement."),
      ] },
      coverage: { heading: "Coverage by retail type", label: "Retail type", rows: [
        ["Gold jewellery showrooms", "Traditional and bridal"], ["Diamond jewellery stores", "Certified diamond retail"], ["Silver jewellery stores", "Silver and fashion"], ["Regional chains", "Multi-store retailers"],
      ] },
      dataFields: ["Showroom name", "Retail type and product focus", "Owner / manager name", "Business mobile number", "Business email ID", "Store address, city, state, pincode", "Number of stores, where recorded", "Website, where available"],
      sample: "retailJeweller",
      useCases: [
        { icon: Gem, title: "Collections Supply", description: "Manufacturers can introduce collections to showrooms by city and product focus." },
        { icon: Laptop, title: "Jewellery Retail Software", description: "Sell inventory, HUID-ready billing and CRM software to owners." },
        { icon: ShieldCheck, title: "Security & Insurance", description: "Offer CCTV, safes and jewellers' block insurance." },
        { icon: Megaphone, title: "Store Marketing", description: "Pitch festive-season campaigns and display design." },
      ],
      faqs: [
        { question: "Do you cover jewellers in smaller towns?", answer: "Yes. Family jewellers in Tier-2 and Tier-3 towns make up a large share of Indian jewellery retail and are covered by district and pincode." },
        { question: "Can I target jewellers ahead of the wedding and festive season?", answer: "Yes. Many buyers order lists before Akshaya Tritiya, Dhanteras and the wedding season, so their collections and campaigns land in time." },
        { question: "How is this different from the Gems & Jewellery database?", answer: "This page covers retail showrooms selling to consumers. The Gems & Jewellery database covers the trade side: wholesalers, manufacturers, gem and bullion dealers." },
        { question: "Can I target chains only?", answer: "Yes. Filter by single-store or multi-store, combined with city." },
        { question: "Which cities are strongest?", answer: "Every major city is covered, with dense coverage in jewellery markets such as Mumbai, Jaipur, Thrissur, Coimbatore, Kolkata and Hyderabad." },
        { question: "Do you have owner contacts?", answer: "Yes. Most showrooms list the owner or a partner, plus a store manager where recorded." },
      ],
      pricingNote: "Priced by city, retail type and fields.",
      related: [L("Gems & Jewellery Shops Database", "gems-jewellery-shops-database-india"), L("Fabric & Clothing Stores Database", "fabric-clothing-stores-database-india"), L("Furniture Stores & Dealers Database", "furniture-stores-dealers-database-india"), L("Health & Beauty Shops Database", "health-beauty-shops-business-database-india"), L("Mobile Accessories Shops Database", "mobile-accessories-shops-database-india"), L("Dealers & Distributors Database", "dealers-distributors-database-india")],
      disclaimer: legal,
      formTitle: "Get a Free Jewellers Sample",
      bands: ["Targeting showrooms in specific cities? Ask for a city-wise sample.", "Need regional chains only? We filter by store count.", "Get retail jeweller samples for your offer."],
      footerTitle: "Reach Retail Jewellers Across India",
    },
    { subjects: "jewellery showroom", kind: "business" }
  ),
} satisfies CategoryContent;
