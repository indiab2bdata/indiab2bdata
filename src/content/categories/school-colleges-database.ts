import { Filter, MapPinned, School, UserCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "school-colleges-database",
    keyword: "schools and colleges database India",
    title: "School & Colleges Database India",
    metaDescription:
      "Verified schools and colleges database for India - CBSE, ICSE, state board schools, colleges and universities with principal and admin contacts. Free sample.",
    eyebrow: "Schools & Colleges Database",
    h1: "Schools & Colleges Database India - Institutions, Principals and Administrators",
    answer:
      "A schools and colleges database is a list of educational institutions with their contact details, board or affiliation, type and location, often including the principal, director or administrator. Education suppliers, EdTech companies, publishers and service providers use it to sell to institutions. IndiaB2BData.com's database covers schools, colleges, universities, coaching centres and training institutes across India.",
    intro: [
      "India has lakhs of schools and tens of thousands of colleges, and each one buys books, uniforms, furniture, lab equipment, software, transport, security and training. Selling to them is a classic B2B problem: you need to know which institutions exist in your territory and who makes the purchasing decision.",
      "Our schools and colleges database is filtered by institution type, board or affiliation, ownership (government, private, aided) and location. You can reach CBSE schools in Delhi NCR, engineering colleges in Tamil Nadu or private universities across India, with principal and admin contacts where available.",
    ],
    highlights: [
      { icon: School, title: "Schools to Universities", description: "Schools, colleges, universities and institutes." },
      { icon: Filter, title: "Board & Affiliation", description: "CBSE, ICSE, state boards, AICTE, UGC and more." },
      { icon: UserCheck, title: "Decision-Maker Contacts", description: "Principals, directors and administrators." },
      { icon: MapPinned, title: "District-Level Coverage", description: "Filter by city, district or state." },
    ],
    dataFields: [
      "Institution name and type",
      "Board, university or affiliation",
      "Principal, director or administrator name, where available",
      "Phone number and email address",
      "Website, where available",
      "Address, city, district, state and pincode",
    ],
    sections: [
      {
        heading: "Institutions Covered",
        paragraphs: [
          "School coverage includes CBSE, ICSE/ISC, IB, Cambridge and state board schools, split by pre-primary, primary, secondary and senior secondary levels, and by government, aided and private management.",
          "Higher education coverage includes arts, science and commerce colleges, engineering, medical, pharmacy, nursing, management and law colleges, polytechnics, ITIs, universities, coaching centres and vocational training institutes.",
        ],
      },
      {
        heading: "Selling to Schools and Colleges",
        paragraphs: [
          "Institutional sales follow the academic calendar. Most purchasing decisions for books, uniforms, furniture and technology are made between January and April, before the new session begins. Budgets for events, training and infrastructure often open later in the year.",
          "Address the principal or administrator by name, show how your product helps students or reduces staff workload, and offer a demo or trial. Institutions value references, so mention other schools or colleges you work with.",
        ],
      },
      {
        heading: "Schools Database vs Students Database",
        paragraphs: [
          "This database lists institutions, so it's the right choice for B2B education sales: selling to the school or college itself. If you want to reach the students or parents directly, for admissions or courses, use our students database instead.",
        ],
      },
    ],
    useCases: [
      "EdTech, ERP and smart classroom software sales",
      "Books, stationery and uniform suppliers",
      "School furniture, lab and sports equipment",
      "Teacher training and workshops",
      "Campus recruitment and placement partnerships",
      "Event, olympiad and competition invitations",
    ],
    faqs: [
      {
        question: "What is a schools and colleges database?",
        answer:
          "It's a list of educational institutions with contact details, type, board or affiliation and location, often including principal or administrator contacts. It's used for selling products and services to institutions.",
      },
      {
        question: "Can I filter schools by board?",
        answer: "Yes. Filter by CBSE, ICSE, IB, Cambridge or state board, and by government, aided or private management.",
      },
      {
        question: "Does it include colleges and universities?",
        answer: "Yes. Coverage includes colleges, universities, polytechnics, ITIs, coaching centres and training institutes.",
      },
      {
        question: "How much does a schools and colleges database cost?",
        answer:
          "Packages start at ₹2,999 for up to 5,000 records in one city or district, and ₹8,999 for up to 25,000 records across 5 cities or states. State-wide or pan-India lists are custom-quoted.",
      },
      {
        question: "Is this the same as a students database?",
        answer: "No. This database lists institutions. Our separate students database lists students and parents for admissions marketing.",
      },
      {
        question: "Can I get a free sample?",
        answer: "Yes. Every enquiry includes 15–20 free sample records before you place an order.",
      },
    ],
    related: [
      "students-database",
      "cbse-schools-email-database-india",
      "teachers-database-india",
      "industry-wise-company-database-india",
      "doctors-database",
      "email-database-india",
    ],
  },
} satisfies CategoryContent;
