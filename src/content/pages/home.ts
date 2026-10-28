import { Building2, Globe2, IndianRupee, Layers, Mail, MapPinned, MessageSquareText, Smartphone, Sparkles, Zap } from "lucide-react";

/**
 * Homepage copy. Rich headings are split into the pieces the markup puts around them, so output is unchanged.
 * Homepage FAQs live in content/pages/faqs.ts (HOME_FAQS); the business directory is authored below.
 */
export const HOME = {
  meta: {
    /** The home route uses this complete title as an absolute metadata title. */
    title: "B2B Business Data Provider in India | IndiaB2BData",
    titleTag: null,
    description: "Company, GST, MCA, manufacturer and dealer data selections for Indian markets. Review fictional format previews and ask about a matching real sample.",
    path: "/",
    /** Sitemap <lastmod>: bump when this page's main copy changes (not for header/footer/styling changes). */
    updated: "2026-10-28",
    about: "B2B data provider India",
    itemListName: "B2B & Company Databases",
  },
  hero: {
    imageAlt: "Sales team working with B2B business data",
    badge: "Business Data for Indian Sales Teams",
    /** "{lead} {accent} {and}{accent2}" */
    h1: { lead: "B2B Business Data", accent: "for Sales Teams", and: "Across ", accent2: "India" },
    subhead:
      "IndiaB2BData.com helps sales teams discuss company records and business contacts by industry, state, city and role. Review the fictional format preview, ask which fields and coverage can be confirmed, then request a written quote.",
    sampleCta: "Ask About a Sample",
    whatsappCta: "Chat on WhatsApp",
    trustDivider: "Company and business-contact data",
    stats: [],
  },
  directory: {
    "eyebrow": "Your B2B Data Partner",
    "heading": "Choose a database for your market",
    "intro": "Start with the type of company information you need, then narrow your geography. Explore specialist business databases, local market guides and our published business details.",
    "providerHeading": "About IndiaB2BData.com",
    "providerText": "IndiaB2BData.com is the business data brand behind this website. Discuss your target industries, locations and contact roles with our team, and review a matching sample and written quote before ordering.",
    "addressLabel": "Business contact address",
    "phoneLabel": "Speak to our team",
    "aboutLabel": "Read about our business",
    "contactLabel": "Contact and enquiries",
    "groups": [
  {
    "heading": "Company and industry databases",
    "links": [
      {
        "label": "B2B Database India",
        "href": "/b2b-database-india"
      },
      {
        "label": "GST Database India",
        "href": "/gst-database-india"
      },
      {
        "label": "MCA Company Data",
        "href": "/mca-company-database-india"
      },
      {
        "label": "Company Database India",
        "href": "/company-database-india"
      },
      {
        "label": "Manufacturers Database",
        "href": "/manufacturer-database-india"
      },
      {
        "label": "Dealers & Distributors",
        "href": "/dealers-distributors-database-india"
      },
      {
        "label": "Importers & Exporters",
        "href": "/importers-exporters-database-india"
      }
    ]
  },
  {
    "heading": "Business databases by state",
    "links": [
      {
        "label": "Delhi Business Database",
        "href": "/database/delhi"
      },
      {
        "label": "Gujarat Company Database",
        "href": "/database/gujarat"
      },
      {
        "label": "Karnataka Business Database",
        "href": "/database/karnataka"
      },
      {
        "label": "Maharashtra Business Database",
        "href": "/database/maharashtra"
      },
      {
        "label": "UP Company Database",
        "href": "/database/uttar-pradesh"
      },
      {
        "label": "Tamil Nadu Business Database",
        "href": "/database/tamil-nadu"
      }
    ]
  },
  {
    "heading": "Business and coverage",
    "links": [
      {
        "label": "About IndiaB2BData",
        "href": "/about"
      },
      {
        "label": "All database coverage",
        "href": "/database"
      }
    ]
  }
]
},
  selection: {
  "heading": "Build a list around the sale you want to make",
  "intro": "The starting point is the commercial conversation. A software subscription, a machine installation and a distribution appointment need different businesses and different people. Use these three questions to choose a useful starting selection before sending a detailed enquiry.",
  "items": [
    {
      "heading": "Who buys the product?",
      "text": "Write down the organisation that would sign the order and the function that would evaluate it. For a business software offer, that may be a finance or operations team within a particular kind of company. For a machine, the relevant conversation may start at the unit using the process. A general business name and a phone field will not resolve that distinction. Include the product, typical customer activity and intended professional role in your enquiry so the sample can be assessed against a practical buying situation."
    },
    {
      "heading": "Where can your team deliver?",
      "text": "Turn your service boundary into a geographic brief. An installer with a local field team may need establishments within specified industrial areas, while a remote service provider may select businesses across several states. Explain any travel, delivery or support constraints that affect account eligibility. If a company has offices in several places, identify the location that matters to the offer. This makes the city field useful for assigning sales responsibility and avoids treating the registered address as the destination for every type of sale."
    },
    {
      "heading": "What will make a row useful?",
      "text": "Choose the fields that let a salesperson decide the next step: business activity, relevant location, role and a supported work channel. Test the sample by asking whether the team can understand why each organisation belongs in the selection. Mark any unclear classifications or missing details and resolve them before approving the file specification. Keep the agreed exclusions as well as the inclusions; removing an irrelevant company type can matter more than adding extra rows. Review the written selection alongside the sample when deciding whether the proposed delivery fits your campaign."
    }
  ]
},
  trustStrip: {
    lead: "Examples of sectors in our product directory:",
    industries: ["Real Estate", "EdTech", "Finance & Insurance", "Manufacturing", "Healthcare", "E-commerce"],
  },
  products: {
    eyebrow: "What We Offer",
    title: "Company and Business Data Selections",
    text: "Explore company, registry, trade and contact categories. Describe your audience and ask which locations, roles and fields can be confirmed for your selection.",
    items: [
      {
        href: "/mobile-number-database-india",
        icon: Smartphone,
        title: "Mobile Number Database",
        description: "Discuss business mobile fields, roles and locations; confirm availability and completeness for your segment.",
      },
      {
        href: "/email-database-india",
        icon: Mail,
        title: "Email Database",
        description: "Ask which business email fields are available and how any deliverability checks are scoped.",
      },
      {
        href: "/gst-database-india",
        icon: Building2,
        title: "GST & Company Database",
        description: "Explore company and registry selections; confirm which identifiers and firmographic fields are available for your brief.",
      },
      {
        href: "/industry-wise-company-database-india",
        icon: Layers,
        title: "Industry-Wise Company Data",
        description: "Discuss sector and sub-industry criteria; ask how classifications are sourced and what coverage can be confirmed.",
      },
      {
        href: "/bulk-sms-database-india",
        icon: MessageSquareText,
        title: "Bulk WhatsApp/SMS Data",
        description: "Ask which business-number fields and locations may be available, and confirm the rules for your intended channel.",
      },
      {
        href: "/contact",
        icon: Globe2,
        title: "Custom / Pan-India Data",
        description: "Share a target state, city cluster or niche and ask what can be supplied for that brief.",
      },
    ],
    /** Hand-written directory blurbs where the meta description does not make a good one-liner. */
    blurbOverrides: {
      "/industry-wise-company-database-india": "Company selections by sector and sub-industry, subject to classification and coverage confirmation",
      "/teachers-database-india": "School and college teachers by subject, board and city",
      "/advocates-lawyers-database-india": "Advocates, law firms and legal practitioners by court and practice area",
      "/agents-database-india": "Real estate, insurance, travel and other agents by city and category",
      "/apparel-garments-exporters-database-india": "Garment manufacturers and exporters across Tiruppur, Ludhiana, NCR and more",
      "/architect-interior-designers-database-india": "Architects, interior designers and design firms by city",
      "/beauty-parlours-salons-spa-database-india": "Salons, beauty parlours and spas with owner contacts, city-wise",
      "/bpo-call-centre-employees-database-india": "Voice and non-voice BPO professionals by process, experience and city",
      "/business-analysts-database-india": "Business and data analysts by industry, experience and city",
      "/business-development-sales-professionals-database-india": "Sales and BD professionals by industry, seniority and city",
      "/company-md-chairman-secretary-database-india": "Managing directors, chairmen and company secretaries of Indian companies",
      "/club-mahindra-members-database": "Holiday-membership audience - affluent, travel-oriented families by city",
    } as Record<string, string>,
  },
  industries: {
    eyebrow: "Browse by Industry",
    title: "Every Database, Organised by Sector",
    /** "{total}{countMid}{sectors}{countEnd}" */
    countMid: " data products across ",
    countEnd: " sectors.",
    tabsLabel: "Industry sectors",
    viewDatabase: "View database",
    whatsapp: (product: string) => `Hi, I'm interested in the ${product}.`,
    whatsappLabel: (product: string) => `Enquire about ${product} on WhatsApp`,
    /** India photo + one-line summary per product group (photos: Wikimedia Commons, see /images/industries/CREDITS.json). */
    groups: {
      General: {
        image: "/images/industries/general.jpg",
        alt: "Bandra Kurla Complex business district, Mumbai",
        summary: "Company and business-contact selections for defined Indian markets.",
      },
      "Company Records": {
        image: "/images/industries/company.jpg",
        alt: "Corporate office towers in DLF Cyber City, Gurugram",
        summary: "Corporate, industry-wise and owner-level company records.",
      },
      Registry: {
        image: "/images/industries/registry.jpg",
        alt: "HITEC City business district, Hyderabad",
        summary: "GST, MCA/ROC and newly registered company data.",
      },
      "Trade & Industry": {
        image: "/images/industries/trade.jpg",
        alt: "Container handling at JNPT port, Navi Mumbai",
        summary: "Manufacturers, exporters, dealers, retailers and contractors.",
      },
      Professionals: {
        image: "/images/industries/professionals.jpg",
        alt: "IT professionals at a technology campus in Bengaluru",
        summary: "Decision-makers and specialists across selected functions.",
      },
      Channel: {
        image: "/images/industries/channel.jpg",
        alt: "Mobile phone market in Kochi, Kerala",
        summary: "Contact selections for mobile, email and messaging requirements.",
      },
      Consumer: {
        image: "/images/industries/consumer.jpg",
        alt: "Busy shopping street in Mumbai",
        summary: "Consumer audience selections; confirm each product’s scope and terms.",
      },
      "Education & Web": {
        image: "/images/industries/education.jpg",
        alt: "Main gate of IIT Bombay campus, Mumbai",
        summary: "Students, schools, colleges, teachers and domain data.",
      },
    } as Record<string, { image: string; alt: string; summary: string }>,
  },
  folders: {
    eyebrow: "Open a Folder",
    title: "Your Data, Neatly Filed",
    text: "Browse database selections by group. Open a product page to review its intended audience, fields to confirm and sample-format guidance.",
    hint: "Hover to peek · Click to open · Choose a file",
    /** `art` names a look defined in the DataFolders component ("brand") or a GlassFolder preset. */
    items: [
      {
        label: "Company Data",
        meta: "GST · MCA · B2B",
        tone: "light",
        art: "brand",
        seed: 3,
        files: [
          { name: "B2B Database", meta: "Business records", href: "/b2b-database-india", art: "glacier" },
          { name: "GST Data", meta: "GSTIN", href: "/gst-database-india" },
          { name: "MCA / ROC Records", meta: "CIN", href: "/mca-company-database-india" },
          { name: "New Registrations", meta: "By period", href: "/newly-registered-companies-india", art: "brand" },
        ],
      },
      {
        label: "Decision-Makers",
        meta: "CXO · Directors · Pros",
        tone: "dark",
        art: "brand",
        seed: 11,
        files: [
          { name: "CEO / CFO / CMO", meta: "CXO", href: "/ceo-cfo-cmo-it-heads-database-india", art: "brand" },
          { name: "MDs & Directors", meta: "Board", href: "/company-md-chairman-secretary-database-india" },
          { name: "Chartered Accountants", meta: "CA firms", href: "/chartered-accountants-database-india" },
          { name: "Doctors", meta: "By speciality", href: "/doctors-database", art: "glacier" },
        ],
      },
      {
        label: "Contact Channels",
        meta: "Mobile · Email · WhatsApp",
        tone: "light",
        art: "glacier",
        seed: 7,
        files: [
          { name: "Mobile Numbers", meta: "By city & role", href: "/mobile-number-database-india", art: "brand" },
          { name: "Email Lists", meta: "Business", href: "/email-database-india" },
          { name: "WhatsApp Numbers", meta: "Business selection", href: "/whatsapp-number-database-india" },
          { name: "Bulk SMS Data", meta: "Business format", href: "/bulk-sms-database-india", art: "glacier" },
        ],
      },
    ] as {
      label: string;
      meta: string;
      tone: "light" | "dark";
      art: "brand" | "glacier" | "verdant";
      seed: number;
      files: { name: string; meta: string; href: string; art?: "brand" | "glacier" | "verdant" }[];
    }[],
  },
  why: {
    imageAlt: "Data analytics dashboard on laptop",
    eyebrow: "Why Choose Us",
    title: "Review the Selection Before Ordering",
    text: "Review the published sourcing methodology and limitations. Ask which source and contact checks apply to your selected segment, and when they were performed.",
    cta: "Talk to Our Team",
    points: [
      { icon: Sparkles, title: "Checks to Confirm", description: "Ask what source, contact and duplicate checks apply to your selected segment." },
      { icon: IndianRupee, title: "Written Quote", description: "Confirm the counting unit, fields, delivery terms and total price in writing." },
      { icon: Zap, title: "Delivery Terms", description: "Confirm the format and delivery timing in the written quote." },
      { icon: MapPinned, title: "Plan Your Territory", description: "Define the states, cities and industrial areas your sales team serves." },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From Request to Ready List in Four Steps",
    steps: [
      { number: "01", title: "Share Your Requirement", description: "Tell us the industry, city and role you want to target." },
      { number: "02", title: "Review a Sample Format", description: "Public CSV examples are fictional and illustrate possible columns only." },
      { number: "03", title: "Confirm the Quote", description: "Review the final fields, count, price and delivery terms before ordering." },
      { number: "04", title: "Receive the Agreed File", description: "Use the format and timing confirmed in your written quote." },
    ],
  },
  testimonials: {
    eyebrow: "Client Feedback",
    title: "What Our Clients Say",
    items: [] as { quote: string; initials: string; name: string; role: string; color: string; company?: string }[],
  },
  /** Inline CTA bands between homepage sections, in page order. */
  ctas: {
    products: { id: "home-products-cta", text: "Not sure which data product fits? Tell us what you need.", buttonLabel: "Talk to Our Team" },
    process: { id: "home-process-cta", text: "Ready to start? Describe your business audience and request a sample." },
    testimonials: { id: "home-testimonials-cta", text: "Ask which contact roles and fields can be confirmed for your selected segment." },
    faq: { id: "home-faq-cta", text: "Still have questions? Review a fictional format example and ask which fields can be confirmed for your brief." },
  },
  sample: { slug: "b2b-database-india", label: "B2B Business Database" },
};
