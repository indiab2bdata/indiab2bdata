import { Banknote, Building2, Cpu, Factory, FileText, Layers, ShieldCheck, UserCheck, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, legal } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-23",
  keyword: {
    slug: "manufacturing-companies-database-india",
    keyword: "Manufacturing Companies Database India",
    title: "Manufacturing Companies Database India",
    metaDescription: "Explore manufacturing companies database options in India. Specify sectors, product categories, company criteria and cities, then request a sample and quote.",
    eyebrow: "Manufacturing Companies Database",
    h1: "Manufacturing Companies Database in India",
    answer: "A manufacturing companies database helps you shortlist production businesses using available company, sector, product and contact details. Share the industries, company criteria, locations and business roles you need so we can check matching coverage and sample options.",
    intro: [
      "A raw-material supplier, an ERP provider and a packaging business need different manufacturing prospects. Start with the companies your offer can help, then describe the sectors, products and contact roles that make a useful fit.",
      "This page focuses on a company-level brief. Say whether you need one record per business, head-office contacts or a shortlist organised around particular manufacturing sectors. Ask how company and plant records are distinguished in the available file.",
      "For a factory or production-unit requirement, compare the manufacturer database. For a sector-led search across several business types, explore the industry-wise company database and specify manufacturing as your required activity.",
      "For a material-led shortlist of metal producers, processors and mineral businesses, explore the metals and minerals industries database.",
    ],
    contentLinks: [
      {
        "text": "manufacturer database",
        "href": "/manufacturer-database-india"
      },
      {
        "text": "industry-wise company database",
        "href": "/industry-wise-company-database-india"
      },
      {
        "text": "corporate database",
        "href": "/corporate-database-india"
      },
      {
        "text": "machinery suppliers and services database",
        "href": "/machinery-suppliers-services-database-india"
      },
      {
        "text": "logistics service providers database",
        "href": "/logistics-management-service-providers-database-india"
      },
      {
        "text": "database directory",
        "href": "/database"
      },
      {
        "text": "metals and minerals industries database",
        "href": "/metals-minerals-industries-database-india"
      }
    ],
    highlights: [
      {
        icon: Building2,
        title: "Company-Level Selection",
        description: "Define whether your brief concerns businesses, head offices or production locations."
      },
      {
        icon: Factory,
        title: "Manufacturing Sector Fit",
        description: "Specify the product categories and production sectors relevant to your offer."
      },
      {
        icon: UserCheck,
        title: "Business Contact Context",
        description: "Ask which procurement, operations and other role fields are available."
      },
      {
        icon: FileText,
        title: "Sample Before Selection",
        description: "Review company categories, record structure and populated fields first."
      }
    ],
    dataFields: [
      "Company or manufacturing business name",
      "Manufacturing sector and product category, where recorded",
      "Company size or employee band, where available",
      "Contact person and designation, where available",
      "Business phone number and email, where available",
      "Company office address, city, state and pincode",
      "Website, where available"
    ],
    sections: [
      {
        heading: "Start with the companies your product can serve",
        paragraphs: [
          "Describe what a suitable business makes and why it would consider your offer. Product context is more useful than asking for every company carrying a manufacturing label."
        ],
        subsections: [
          {
            heading: "Manufacturing sectors and product ranges",
            text: "Specify sectors such as engineering, textiles, food processing, packaging or electrical products. Ask which sector and product labels are recorded so you can assess their fit in a sample."
          },
          {
            heading: "Company criteria and scale",
            text: "If an employee band or another company-size field matters, include it in your brief. Confirm what the field measures, its availability and how complete it is."
          },
          {
            heading: "Office and production locations",
            text: "Say whether you need a company office or a particular plant location. A single business may have several locations, so clarify the record structure and how repeated contacts are handled."
          }
        ]
      },
      {
        heading: "Match the contact role to the conversation",
        paragraphs: [
          "Procurement, production, maintenance, operations and leadership teams can evaluate different parts of an offer. Explain the business need and ask which relevant roles are identified in the selected company segment.",
          "For employers across several industries, compare the corporate database. Keep the manufacturing activity and role requirements explicit rather than treating every company contact as a purchasing decision-maker."
        ]
      },
      {
        heading: "Keep manufacturers and industrial service partners distinct",
        paragraphs: [
          "A company making products is a different prospect from an equipment dealer or maintenance provider. For equipment supply and support businesses, explore the machinery suppliers and services database and name the machinery categories you need.",
          "For freight, transport or storage partnerships, compare the logistics service providers database. Use the database directory to find other industrial and business categories when the relationship you want changes."
        ]
      },
      {
        heading: "Review the company sample against your brief",
        paragraphs: [
          "Send your sectors, products, company criteria, locations, target roles, required fields and approximate quantity. Ask about available records, field completeness, company-versus-location handling, format, delivery timing and pricing.",
          "The public CSV contains fictional, masked company examples to demonstrate the layout. A listing does not establish current production capacity, certifications, product availability or buying intent. Confirm the details important to your proposal directly with the business."
        ]
      }
    ],
    useCasesIntro: "Build an account shortlist around a manufacturing need, then identify the business role relevant to your offer.",
    useCases: [
      "Introduce raw materials, components and packaging products",
      "Discuss manufacturing ERP and business workflow tools",
      "Offer maintenance, equipment and industrial support services",
      "Explore company-level sourcing and supply partnerships",
      "Invite suitable manufacturing businesses to trade events and demonstrations"
    ],
    faqs: [
      {
        question: "How is this different from the Manufacturer Database page?",
        answer: "This page supports a company-level shortlist organised around manufacturing sectors, products and business contacts. The Manufacturer Database page focuses on factory and production-unit requirements. Confirm how company and location records are represented in either sample."
      },
      {
        question: "Can I select companies by sector or product category?",
        answer: "Share the manufacturing sectors and product ranges you need. We will check which labels are recorded and confirm available coverage and matching sample options."
      },
      {
        question: "Can I request company-size or employee-band filters?",
        answer: "Specify the criteria important to your offer. Ask which size fields are available, what they measure and how complete they are for the chosen segment."
      },
      {
        question: "Are procurement or operations contacts included?",
        answer: "Tell us which roles you need and review the populated fields in a matching sample. A business contact or job title does not establish final purchasing authority."
      },
      {
        question: "Does a listing verify production capacity or certifications?",
        answer: "No. Confirm current capabilities, product specifications, certifications and commercial terms directly with the business when they matter to your relationship."
      },
      {
        question: "How do I request a sample and quote?",
        answer: "Send your sectors, product categories, company criteria, cities, contact roles and approximate quantity. The public download is a fictional format preview. Ask our team for matching sample options, coverage, timing and pricing."
      }
    ],
    related: [
      "manufacturer-database-india",
      "industry-wise-company-database-india",
      "corporate-database-india",
      "machinery-suppliers-services-database-india",
      "logistics-management-service-providers-database-india"
    ],
    showTestimonials: true,
    cta: {
      heroTitle: "Find Manufacturing Companies That Fit Your Offer",
      heroSubtitle: "Share your sectors, product categories, company criteria and target roles. Ask for a matching company sample and quote.",
      buttonLabel: "Request Manufacturing Sample",
      text: "Which manufacturing sectors and company contacts fit your offer? Tell us the products, roles and locations you need.",
      footerTitle: "Build Your Manufacturing Company Shortlist",
      footerText: "Send your manufacturing sectors, company criteria, target locations and approximate quantity. We will confirm available coverage, sample options and pricing."
    }
  },
  landing: categoryLanding(
    {
      slug: "manufacturing-companies-database-india",
      name: "Manufacturing Companies Database",
      title: "Manufacturing Companies Database India | Company-Level Decision-Makers",
      metaDescription: "Manufacturing companies database for India at company level: size band, sector, ownership, HQ and CXO, finance, HR and IT heads. Built for selling to manufacturers as accounts. Sample rows on the page.",
      eyebrow: "Manufacturers as Accounts",
      h1: "Manufacturing Companies Database: Reach Decision-Makers at HQ",
      lead: "Company-level records of Indian manufacturers, with size band, sector, ownership and the corporate decision-makers who buy software, finance, HR and services for the whole company.",
      segmentSummary: "Selling ERP, banking, insurance or consulting to a manufacturer is a head-office decision, not a plant decision. This database treats each manufacturer as one account, with its sector, employee band and ownership, plus the MD, CFO, HR and IT heads at headquarters. For plant addresses and product-level sourcing, use the Manufacturer database instead.",
      segmentCards: [
        { icon: Building2, title: "One Record per Manufacturer", description: "Company-level records with HQ address, rolled up from plants and branches." },
        { icon: Users, title: "Corporate Decision-Makers", description: "MD, CFO, HR, IT and operations heads, the people who sign company-wide contracts." },
        { icon: Layers, title: "Sector & Size Filters", description: "Filter by manufacturing sector, employee band, turnover band and ownership type." },
      ],
      segmentTabs: { heading: "Pick the manufacturer tier you sell to", tabs: [
        T("msme", "MSME Manufacturers", "Owner-led units with up to about 100 employees, where the owner or a family director decides most purchases.", ["Owner / MD", "Partner", "Accounts Head", "Works Manager"], "Business loans, accounting software, insurance, compliance services."),
        T("mid", "Mid-Size Manufacturers", "Companies with 100-1,000 employees and functional heads, often with several plants.", ["MD / CEO", "CFO", "HR Head", "IT Manager"], "ERP and MES vendors, HR and payroll, treasury and banking."),
        T("large", "Large Manufacturers", "Groups and listed companies with formal procurement and corporate functions.", ["CXOs", "Head of Procurement", "CHRO", "CIO"], "Enterprise software, consulting, group insurance, ESG services."),
      ] },
      coverage: { heading: "Coverage by manufacturing sector", label: "Sector", rows: [
        ["Automotive & engineering", "OEMs and component companies"], ["Chemicals & pharma", "Specialty chemicals, APIs, formulations"], ["Textiles & apparel", "Mills, processors, garment makers"],
        ["Food & FMCG", "Processed food, beverages, personal care"], ["Electrical & electronics", "Equipment, cables, components"], ["Building materials", "Cement, steel, ceramics, pipes"],
      ] },
      dataFields: ["Company name", "Manufacturing sector and sub-sector", "Employee size band", "Ownership / constitution", "Head-office address, city, state", "Decision-maker name and designation", "Business phone and email", "Website, where available"],
      sample: "manufacturingCompany",
      useCases: [
        { icon: Cpu, title: "ERP & Manufacturing Software", description: "Reach CIOs and MDs at mid-size manufacturers evaluating ERP, MES or quality systems." },
        { icon: Banknote, title: "Corporate Banking & Credit", description: "Approach CFOs with working capital, trade finance and treasury products." },
        { icon: Users, title: "HR, Payroll & Benefits", description: "Target HR heads at manufacturers with large shop-floor workforces." },
        { icon: ShieldCheck, title: "Insurance & Risk", description: "Offer plant, liability and group cover to finance and admin heads at HQ." },
      ],
      faqs: [
        { question: "Can I target manufacturers by turnover?", answer: "Yes, where a turnover band is recorded. Combine it with sector and state to build tiered account lists." },
        { question: "How is this different from the Manufacturer database?", answer: "This page lists manufacturers as companies, with head-office decision-makers for company-wide sales. The Manufacturer database lists plants by product, for sourcing and selling into operations." },
        { question: "Can I filter by company size?", answer: "Yes. Filter by employee band and, where recorded, turnover band, combined with sector and state." },
        { question: "Do you include several contacts per company?", answer: "Yes. Choose the functions you need, such as finance, HR, IT or operations, and each company comes with one contact per function where available." },
        { question: "Are listed manufacturers included?", answer: "Yes. Listed and unlisted public companies, private limited companies and large partnerships are all covered." },
      ],
      pricingNote: "Priced per company record. Additional functional contacts per company are quoted by volume.",
      related: [L("Manufacturer Database", "manufacturer-database-india"), L("Corporate Database", "corporate-database-india"), L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"), L("Industry-Wise Company Database", "industry-wise-company-database-india"), L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"), L("Metals & Minerals Industries Database", "metals-minerals-industries-database-india")],
      disclaimer: legal,
      formTitle: "Get a Free Manufacturing Companies Sample",
      bands: ["Selling a company-wide product to manufacturers? Ask for HQ decision-makers by sector.", "Need CFOs at mid-size manufacturers only? We filter by size band and function.", "Get manufacturer account samples for your target sectors."],
      footerTitle: "Sell to Manufacturers at the Head Office",
    },
    { subjects: "manufacturing company", kind: "business" }
  ),
} satisfies CategoryContent;
