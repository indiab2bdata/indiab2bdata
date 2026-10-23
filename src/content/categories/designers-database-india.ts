import { Filter, MapPinned, Sparkles, Users } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-17",
  keyword: {
    slug: "designers-database-india",
    keyword: "designers database India",
    title: "Designers Database India",
    metaDescription:
      "Designers database in India - graphic, UI/UX, web, fashion, product and jewellery designers and design studios with contact details, city-wise. Free sample.",
    eyebrow: "Designers Database",
    h1: "Designers Database in India",
    answer:
      "A designers database lists creative professionals and design studios in India - graphic, UI/UX, web, fashion, textile, product, jewellery and motion designers - with name, design specialisation, studio or employer, city and contact details. IndiaB2BData.com supplies designer data for software, hiring, printing and supplies marketing.",
    intro: [
      "India's design economy spans freelance graphic designers, UI/UX teams in tech companies, fashion and textile designers in Delhi, Mumbai, Jaipur and Tiruppur, and jewellery designers in Surat and Mumbai. Designers choose the software, fonts, stock content, printers and materials their clients pay for.",
      "Our designers database covers freelancers, in-house designers and design studios, filterable by specialisation and city. For architects and interior designers, see our dedicated architect and interior designers database.",
      "For a brief focused on branding, packaging, print or digital creatives, explore the graphic designers database. It helps you discuss graphic design roles separately from other design disciplines."
    ],
    contentLinks: [{"text":"graphic designers database","href":"/graphic-designers-database-india"}],
    highlights: [
      { icon: Sparkles, title: "All Design Fields", description: "Graphic, UI/UX, fashion, product, jewellery." },
      { icon: Users, title: "Freelancers & Studios", description: "Independent designers and agencies." },
      { icon: Filter, title: "Specialisation Filters", description: "Pick exactly the design discipline you need." },
      { icon: MapPinned, title: "City-Wise", description: "Design hubs across India." },
    ],
    dataFields: [
      "Designer or studio name",
      "Design specialisation",
      "Work type: freelance, in-house or studio",
      "Employer or studio, where available",
      "Mobile number and email, where available",
      "Portfolio or website, where available",
      "City and state",
    ],
    sections: [
      {
        heading: "Designer Types Covered",
        paragraphs: [],
        bullets: [
          "Graphic and branding designers",
          "UI/UX, web and app designers",
          "Fashion, apparel and textile designers",
          "Product and industrial designers",
          "Jewellery designers",
          "Motion graphics and video designers",
        ],
      },
      {
        heading: "Who Uses a Designers Database?",
        paragraphs: [],
        bullets: [
          "Design software, font and stock content companies",
          "Printing, packaging and signage businesses",
          "Fabric, trims and jewellery material suppliers",
          "Creative recruiters and agencies",
          "Design schools and online course providers",
        ],
      },
    ],
    useCases: [
      "Design software and tools marketing",
      "Creative and UI/UX recruitment",
      "Printing and packaging services",
      "Fabric and material supplier outreach",
      "Design course and workshop promotion",
    ],
    faqs: [
      { question: "What is a designers database?", answer: "It is a list of graphic, UI/UX, fashion, product, jewellery and other designers and design studios in India with specialisation, city and contact details." },
      { question: "Does it include interior designers?", answer: "Interior designers and architects are covered in our separate architect and interior designers database." },
      { question: "Can I get only fashion designers?", answer: "Yes. Records can be filtered by specialisation, such as fashion, graphic, UI/UX or jewellery design." },
      { question: "Are freelancers included?", answer: "Yes. You can choose freelancers, in-house designers, design studios or all three." },
      { question: "Which cities are covered?", answer: "All major cities, including design hubs such as Mumbai, Delhi NCR, Bengaluru, Pune, Hyderabad, Jaipur and Ahmedabad." },
      { question: "Can I see a sample?", answer: "Yes. Download the sample format on this page or request real sample records." },
    ],
    related: [
      "architect-interior-designers-database-india",
      "dtp-operators-database-india",
      "digital-photography-studios-database-india",
      "apparel-garments-exporters-database-india",
      "computer-it-telecom-services-database-india",
      "students-database",
    ],
  },
} satisfies CategoryContent;
