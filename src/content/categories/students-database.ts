import { Filter, GraduationCap, MapPinned, ShieldCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-16",
  keyword: {
    slug: "students-database",
    keyword: "students database India",
    title: "Students Database India | School & College",
    metaDescription:
      "Students database for India - school, college and competitive exam aspirants by city, class and stream. For EdTech, coaching & admissions. Free sample.",
    eyebrow: "Students Database India",
    h1: "Students Database India - Reach Students and Parents by City, Class and Stream",
    answer:
      "A students database is a list of students (and often their parents) filtered by class, stream, course or exam, and by city. EdTech companies, coaching institutes, colleges and universities use it to promote courses and admissions. IndiaB2BData.com's students database covers school students, college students and competitive exam aspirants across India.",
    intro: [
      "Admissions season is short and competitive. Coaching centres, EdTech platforms, private universities and study-abroad consultants all try to reach the same students in the same few months. The teams that start with a clean, well-targeted list fill their batches; the rest spend their budget on ads that reach the wrong age group.",
      "Our students database is segmented by education level, class or year, stream and city. You can reach Class 11–12 science students in Kota, B.Com students in Mumbai or engineering aspirants across Uttar Pradesh, and plan admissions campaigns with real numbers instead of guesses.",
    ],
    highlights: [
      { icon: GraduationCap, title: "School to Post-Graduate", description: "Class 9–12, undergraduate, PG and exam aspirants." },
      { icon: Filter, title: "Stream & Course Filters", description: "Science, commerce, arts, engineering, medical and more." },
      { icon: MapPinned, title: "City-Wise Targeting", description: "Filter by city, district, state or pincode." },
      { icon: ShieldCheck, title: "Checked & Deduplicated", description: "Checked and deduplicated before delivery." },
    ],
    dataFields: [
      "Student name",
      "Parent or guardian contact, where available",
      "Mobile number",
      "Email address, where available",
      "Class, year or course and stream",
      "City, state and pincode",
    ],
    sections: [
      {
        heading: "Segments Covered",
        paragraphs: [
          "School segments include Class 9–10 and Class 11–12 students, split by science, commerce and arts. Higher education segments cover undergraduate and postgraduate students in engineering, medical, management, commerce, arts and law.",
          "We also cover competitive exam aspirants, including JEE, NEET, CA, CLAT, CUET, UPSC and banking exams, and students interested in studying abroad. Combine these segments with city filters to match your institute's catchment area.",
        ],
      },
      {
        heading: "How Education Businesses Use Student Data",
        paragraphs: [
          "Coaching institutes use class and stream lists to fill new batches before the academic year begins. EdTech platforms use them for app installs, free trial sign-ups and webinar registrations. Colleges and universities use them to drive applications ahead of counselling.",
          "Timing matters most. Plan outreach around board results, entrance exam calendars and admission windows, and keep the message useful: scholarship dates, demo classes and counselling sessions work far better than generic promotions.",
        ],
      },
      {
        heading: "Reaching Students Responsibly",
        paragraphs: [
          "Many school students are minors, so outreach for those segments should be addressed to parents or guardians. Keep messages informative, avoid aggressive follow-ups and honour every opt-out request.",
          "Check numbers against the DND registry before promotional outreach, and use the data only for genuine education-related communication, in line with TRAI rules and the Digital Personal Data Protection Act, 2023.",
        ],
      },
    ],
    useCases: [
      "Coaching institute batch admissions",
      "EdTech app installs and free trial campaigns",
      "College and university admission drives",
      "Study-abroad and overseas education counselling",
      "Scholarship tests and education fairs",
      "Student loans, laptops and education products",
    ],
    faqs: [
      {
        question: "What is a students database?",
        answer:
          "It's a list of students, and where relevant their parents, filtered by class, course, stream and location. Education businesses use it to promote admissions, courses and test-prep programmes.",
      },
      {
        question: "Can I filter students by class and stream?",
        answer: "Yes. Filter by class or year, stream (science, commerce, arts) or course, and combine with city, district or state.",
      },
      {
        question: "Do you have data for competitive exam aspirants?",
        answer: "Yes. Segments include JEE, NEET, CA, CLAT, CUET, UPSC, banking and study-abroad aspirants.",
      },
      {
        question: "How much does a students database cost?",
        answer:
          "Packages start at ₹2,999 for up to 5,000 records in one city, and ₹8,999 for up to 25,000 records across 5 cities or states. State-wide or pan-India lists are custom-quoted.",
      },
      {
        question: "Can I also get a list of schools and colleges?",
        answer: "Yes. Our schools and colleges database covers institutions and their administrators, useful for B2B education sales.",
      },
      {
        question: "Can I get a free sample?",
        answer: "Yes. Every enquiry includes 15–20 free sample records before you place an order.",
      },
    ],
    related: [
      "school-colleges-database",
      "cbse-schools-email-database-india",
      "teachers-database-india",
      "job-seekers-database",
      "mobile-number-database-india",
      "whatsapp-number-database-india",
    ],
  },
} satisfies CategoryContent;
