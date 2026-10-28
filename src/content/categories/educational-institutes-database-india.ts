import { Filter, MapPinned, School, UserCheck } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "educational-institutes-database-india",
    keyword: "educational institutes database India",
    title: "Educational Institutes Database India",
    metaDescription:
      "Educational institutes database in India - coaching centres, universities, ITIs, polytechnics, training and skill institutes with decision-maker contacts, city-wise.",
    eyebrow: "Educational Institutes Database",
    h1: "Educational Institutes Database in India",
    answer:
      "An educational institutes database lists education providers in India beyond schools - coaching and tuition centres, universities, ITIs, polytechnics, professional and skill-training institutes - with institute name, type, courses, decision-maker (director, owner, principal or admissions head), contact details and location. IndiaB2BData.com supplies city-wise institute data for EdTech, publishing and education-services marketing.",
    intro: [
      "India has more than a thousand universities, tens of thousands of colleges, thousands of ITIs and a coaching industry spread across hubs like Kota, Delhi, Hyderabad, Patna and Pune. These institutes constantly buy learning platforms, study material, lab equipment, furniture, marketing and admissions services.",
      "Our educational institutes database covers coaching centres, higher-education and vocational institutes, filterable by institute type, courses offered and city. For K-12 schools and degree colleges, see our school and colleges database.",
    ],
    highlights: [
      { icon: School, title: "All Institute Types", description: "Coaching, universities, ITIs, polytechnics, training." },
      { icon: UserCheck, title: "Decision-Makers", description: "Directors, owners, principals, admissions heads." },
      { icon: Filter, title: "Course Filters", description: "JEE/NEET, UPSC, IT, vocational and more." },
      { icon: MapPinned, title: "Hub Coverage", description: "Kota, Delhi, Hyderabad, Patna, Pune and beyond." },
    ],
    dataFields: [
      "Institute name",
      "Institute type: coaching, university, ITI, polytechnic or training institute",
      "Courses or exams offered, where available",
      "Decision-maker name and designation",
      "Mobile number and email ID",
      "Website, where available",
      "Address, city, state and pincode",
    ],
    sections: [
      {
        heading: "Institute Types Covered",
        paragraphs: [],
        subsections: [
          { heading: "Coaching & Tuition Centres", text: "JEE, NEET, UPSC, banking, SSC, CA and school tuition centres, from single-branch institutes to multi-city chains." },
          { heading: "Universities & Higher Education", text: "State, private and deemed universities and standalone higher-education institutes." },
          { heading: "ITIs & Polytechnics", text: "Government and private ITIs and diploma polytechnics offering technical and trade courses." },
          { heading: "Professional & Skill Institutes", text: "Computer, language, aviation, hotel management, design and other skill-training institutes." },
        ],
      },
      {
        heading: "Who Uses an Educational Institutes Database?",
        paragraphs: [],
        bullets: [
          "EdTech, LMS and online test platforms",
          "Publishers and study-material providers",
          "Lab equipment, smart-class and furniture suppliers",
          "Admissions, student-recruitment and education-marketing agencies",
          "Education loan and fee-financing companies",
        ],
      },
    ],
    useCases: [
      "EdTech and LMS sales",
      "Study material and book distribution",
      "Smart-class and lab equipment marketing",
      "Education fair and webinar invitations",
      "Fee-financing and education loan partnerships",
    ],
    faqs: [
      { question: "What is an educational institutes database?", answer: "It is a list of coaching centres, universities, ITIs, polytechnics and training institutes in India with institute type, courses, decision-maker contacts and location." },
      { question: "How is this different from the school and colleges database?", answer: "The school and colleges database covers K-12 schools and degree colleges. This database covers coaching centres, universities, ITIs, polytechnics and skill-training institutes." },
      { question: "Can I get coaching institutes in Kota or Delhi only?", answer: "Yes. Records can be filtered by city and locality, including coaching hubs such as Kota, Delhi, Hyderabad, Patna and Pune." },
      { question: "Can I filter by courses or exams?", answer: "Where recorded, you can filter by courses or exams offered, such as JEE, NEET, UPSC, IT or vocational trades." },
      { question: "Who is the contact person in each record?", answer: "Typically the director, owner, principal or admissions head, depending on the institute type." },
      { question: "Can I see a sample?", answer: "Ask whether a real sample for the educational-institute type and location selection is available. The public CSV is fictional and demonstrates possible layout only; check any supplied rows for required fields and selected coverage." },
    ],
    related: [
      "school-colleges-database",
      "cbse-schools-email-database-india",
      "teachers-database-india",
      "students-database",
      "job-seekers-database",
      "dtp-operators-database-india",
    ],
  },
} satisfies CategoryContent;
