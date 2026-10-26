import { Anchor, Building2, Factory, Laptop, Pill, Truck, Wrench } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-26", hubCities: ["Bengaluru", "Mysore", "Mangalore", "Hubli", "Belgaum", "Davanagere", "Tumkur", "Shimoga", "Gulbarga", "Udupi"], moreCities: 5 },
  {
    slug: "karnataka",
    name: "Karnataka",
    h1: "Karnataka Business Database: Bengaluru, Peenya, Mysuru & Hubli",
    coverageHeading: "Karnataka coverage by city and business cluster",
    coverageLabel: "City / cluster",
    guide: {
      "heading": "Plan Karnataka outreach beyond a single Bengaluru list",
      "intro": "Karnataka business buyers need a clear split between software firms, industrial units and regional trade. Bengaluru IT, Peenya, Mysuru and Hubli-Dharwad each call for a different sample and sales brief.",
      "sections": [
            {
                  "heading": "Bengaluru IT: distinguish service firms, products and GCCs",
                  "paragraphs": [
                        "Start with the type of technology business: IT services, a software product company or a global capability centre. Add your preferred area, such as Whitefield, Electronic City or the Outer Ring Road, when travel or on-site support affects your offer.",
                        "A software buyer brief may focus on technology or finance leadership; a recruitment or workspace brief may need HR or administration. Ask which role, company-size and location fields are actually populated rather than assuming every technology company has the same purchasing structure."
                  ]
            },
            {
                  "heading": "Peenya industrial area: select the unit and the process",
                  "paragraphs": [
                        "Peenya is an industrial-area requirement within Bengaluru. Describe the engineering activity, product category and whether the address must identify an operating unit. For machinery, tools, safety products or maintenance services, specify the purchase, production or maintenance responsibility relevant to your offer.",
                        "Keep Peenya separate from an IT-only city segment. If your brief also includes Bommasandra, Jigani or Bidadi, name those locations individually and check their address labels rather than treating all industrial businesses as Peenya records."
                  ]
            },
            {
                  "heading": "Mysuru and Hubli-Dharwad support different regional plans",
                  "paragraphs": [
                        "For Mysuru, decide whether your brief concerns manufacturing, IT services, silk-related businesses or local trade. Where relevant, specify industrial locations such as Hebbal or Hootagalli and ask for a sample that shows the operating address as well as the business category.",
                        "For Hubli-Dharwad, also written Hubballi-Dharwad, distinguish engineering companies from stockists, distributors and food-processing businesses. Use the city, product line and business role to plan North Karnataka visits or distributor appointments instead of extending a Bengaluru-only file."
                  ]
            },
            {
                  "heading": "Check city names and count boundaries before combining files",
                  "paragraphs": [
                        "Confirm how Bengaluru/Bangalore, Mysuru/Mysore and Hubli/Hubballi spellings are normalised in the delivery. A consistent city and pincode field helps your CRM avoid duplicate accounts under different spellings.",
                        "Peenya counts are a subset of the wider Bengaluru geography, so do not add them to a Bengaluru total without checking overlap. Request dated counts, distinct-business totals and additional-contact counts for each selected city and sector before choosing your order size."
                  ]
            }
      ]
},
    title: "Karnataka Business Database by City",
    metaDescription:
      "Karnataka business database for Bengaluru IT, Peenya industry, Mysuru companies and Hubli-Dharwad trade. Request city and sector samples and counts.",
    lead:
      "Reach Bengaluru's IT companies, startups and global capability centres, plus manufacturers and traders in Mysuru, Mangaluru, Hubli-Dharwad and Belagavi. Filter by city, industry and role.",
    segmentSummary:
      "Most buyers come to Karnataka for Bengaluru, which has India's densest mix of IT services firms, product startups and GCCs, plus aerospace and electronics manufacturing. The rest of the state is different. Mysuru has auto and silk, Mangaluru has its port, refineries and cashew processing, Belagavi has foundries, and Hubli-Dharwad is North Karnataka's trading hub. Choose a tech audience in Bengaluru or a manufacturing and trade audience elsewhere.",
    segmentCards: [
      { icon: Laptop, title: "Bengaluru Tech & GCCs", description: "IT services, SaaS startups and global capability centres in Whitefield, Outer Ring Road, Electronic City and Koramangala." },
      { icon: Factory, title: "Industrial Karnataka", description: "Aerospace, machine tools and electronics in Peenya and Bommasandra, and foundries in Belagavi." },
      { icon: Anchor, title: "Coastal & North Hubs", description: "Mangaluru port, cashew and banking businesses, and Hubli-Dharwad traders and distributors." },
    ],
    cities: [
      {
            "city": "Bengaluru IT",
            "detail": "Software services, product companies and GCC requirements"
      },
      {
            "city": "Peenya, Bengaluru",
            "detail": "Industrial and engineering businesses within Bengaluru"
      },
      {
            "city": "Mysuru",
            "detail": "Manufacturing, IT services, silk and local business requirements"
      },
      {
            "city": "Hubli-Dharwad",
            "detail": "Engineering, trading, regional distribution and food processing"
      },
      {
            "city": "Mangaluru",
            "detail": "Port-related services, processing, trading and professional offices"
      },
      {
            "city": "Belagavi",
            "detail": "Foundry, engineering and component manufacturing requirements"
      }
],
    useCases: [
      { icon: Pill, title: "Biotech & Pharma Supply", description: "Pitch lab supplies, CRO services and equipment to biotech and pharma companies in Bengaluru's Biocon Park and Electronic City." },
      { icon: Laptop, title: "Selling SaaS to Bengaluru Startups", description: "Reach founders, CTOs and finance heads at funded startups and mid-size IT firms." },
      { icon: Building2, title: "GCC Facilities & HR Services", description: "Offer workspace, hiring and employee-benefit services to global capability centres." },
      { icon: Wrench, title: "Industrial Supply to Peenya & Belagavi", description: "Target purchase managers at machine-tool, aerospace and foundry units." },
      { icon: Truck, title: "Distribution in North Karnataka", description: "Find stockists and dealers in Hubli-Dharwad for regional consumer and B2B products." },
    ],
    faqs: [
      {"question":"Can I compare Mysuru businesses with Hubli-Dharwad segments?","answer":"Request Mysuru and Hubli-Dharwad as separate city selections with their own industry filters. Mysuru manufacturing or IT requirements and Hubli-Dharwad engineering or distribution requirements should each have a matching sample and a separately confirmed record count."},
      {"question":"Are Peenya records additional to the Bengaluru total?","answer":"Peenya is within Bengaluru, so its business records can overlap a wider Bengaluru selection. Ask for a deduplicated city total and a Peenya subtotal using the same location and company-counting rules before combining files."},
      { question: "Do you cover Karnataka's aerospace and defence suppliers?", answer: "Yes. Aerospace, defence and precision-engineering suppliers around Bengaluru's HAL and Devanahalli aerospace belt, Peenya and Belagavi are tagged, and you can buy them as their own segment." },
      { question: "Can I filter Bengaluru by area?", answer: "Yes. Filter by pincode or area, such as Whitefield, Outer Ring Road, Electronic City, Koramangala, Peenya or Hebbal, to match your sales territory." },
      { question: "Are Hubli-Dharwad and Belagavi sold separately?", answer: "Yes. North Karnataka cities are tagged individually, so you can buy Hubli-Dharwad, Belagavi or both without paying for Bengaluru records." },
      { question: "Can I get only Bengaluru IT companies?", answer: "Yes. Filter Bengaluru by industry (IT services, product companies, GCCs) and by area, such as Whitefield, ORR or Electronic City." },
      { question: "Do you have startup founder contacts?", answer: "Yes, for Bengaluru companies where founder or director details are recorded. Specify company age or funding stage in your brief and we'll check coverage." },
      { question: "Is Peenya industrial area covered?", answer: "Yes. Peenya, Bommasandra, Jigani and Bidadi manufacturers are covered and tagged by industry." },
      { question: "Do you cover Mangaluru and coastal Karnataka?", answer: "Yes. Mangaluru, Udupi and Karwar businesses are covered, including port services, cashew processors and the trading community." },
    ],
    related: [
      L("IT Companies Database", "it-companies-database-india"),
      L("IT Professionals Database", "it-professionals-database-india"),
      L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"),
      L("HR Professionals Database", "hr-human-resources-database-india"),
      L("Business Analysts Database", "business-analysts-database-india"),
      L("Manufacturing Companies Database", "manufacturing-companies-database-india"),
    ],
    bands: [
      "Selling to Bengaluru tech companies? Ask for a sample filtered by area and company size.",
      "Need Peenya or Belagavi manufacturers instead? We filter by industrial area.",
      "Get Karnataka sample rows for your exact cities and industries.",
    ],
  }
);
