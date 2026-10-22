import { BookOpen, FileText, GraduationCap, MapPinned } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-18",
  keyword: {
    slug: "lecturers-professors-database-india",
    keyword: "Lecturer / Professor Database India",
    title: "Lecturers & Professors Database India",
    metaDescription: "Explore lecturer and professor database options in India. Specify subjects, academic roles, institution types and cities, then request a sample and quote.",
    eyebrow: "Lecturer / Professor Database",
    h1: "Lecturers & Professors Database in India",
    answer: "A lecturer and professor database helps you shortlist higher-education professionals by available academic role, subject, institution and location details. Share the departments, seniority and institution types you need so we can check relevant coverage, contact fields and sample options.",
    intro: [
      "A laboratory supplier, an academic publisher and a faculty development provider need different introductions. Begin with the subject or department your offer supports, then specify the people and institutions you want to reach.",
      "Tell us whether you need lecturers, assistant professors, associate professors, professors or department heads. Ask which academic titles, subject labels and institution details are recorded in the available segment.",
      "For a wider teaching audience, compare the teachers database. For institution-level enquiries rather than individual faculty contacts, explore the schools and colleges database and name the higher-education institutions you need."
    ],
    contentLinks: [
      {
        text: "teachers database",
        href: "/teachers-database-india"
      },
      {
        text: "schools and colleges database",
        href: "/school-colleges-database"
      },
      {
        text: "educational institutes database",
        href: "/educational-institutes-database-india"
      },
      {
        text: "IT professionals database",
        href: "/it-professionals-database-india"
      },
      {
        text: "event organisers database",
        href: "/event-management-organisers-database-india"
      },
      {
        text: "database directory",
        href: "/database"
      }
    ],
    highlights: [
      {
        icon: GraduationCap,
        title: "Higher-Education Focus",
        description: "Specify academic roles and institution types relevant to your brief."
      },
      {
        icon: BookOpen,
        title: "Subject & Department Fit",
        description: "Ask which recorded disciplines can support a focused faculty audience."
      },
      {
        icon: MapPinned,
        title: "Your Target Locations",
        description: "Check institution and faculty coverage for your preferred cities and states."
      },
      {
        icon: FileText,
        title: "Sample Before Selection",
        description: "Review academic labels and available professional contact fields first."
      }
    ],
    dataFields: [
      "Faculty or contact person name",
      "Academic designation, where recorded",
      "Subject or department, where available",
      "College, university or institution name",
      "Institution type, where identified",
      "Available professional contact number and email fields",
      "City and state"
    ],
    sections: [
      {
        heading: "Start with the academic department",
        paragraphs: [
          "Describe the discipline and the practical relevance of your offer. A broad faculty list may miss the subject context that makes a conversation useful."
        ],
        subsections: [
          {
            heading: "Subject and discipline",
            text: "Specify areas such as engineering, science, commerce, management or humanities. Confirm which subject distinctions are recorded before selecting a segment."
          },
          {
            heading: "Academic role and seniority",
            text: "State the designations you need and whether your brief concerns individual faculty or department leadership. A title does not establish authority to buy for an institution."
          },
          {
            heading: "Institution type and location",
            text: "Name the college or university categories and geographic area relevant to your service. Ask how institution types are identified in the available records."
          }
        ]
      },
      {
        heading: "Match the introduction to the academic work",
        paragraphs: [
          "Explain how your publication, teaching resource, equipment or professional programme relates to the subject. Keep the purpose and next step specific to the faculty audience.",
          "For a broader provider or training-institution requirement, compare the educational institutes database. If the relevant audience is industry practitioners rather than academic faculty, the IT professionals database may support a separate technical brief."
        ]
      },
      {
        heading: "Plan faculty and institution conversations separately",
        paragraphs: [
          "A faculty member may evaluate a resource while an administrator or purchasing team manages institutional procurement. State whether you need academic feedback, programme participation or an organisation-level buying conversation.",
          "For event partnerships, explore the event organisers database as a separate business category. Use the database directory to compare other professional or education segments."
        ]
      },
      {
        heading: "Review a sample against your faculty brief",
        paragraphs: [
          "Send your subjects, academic roles, institution types, cities, required fields and approximate quantity. Ask about available coverage, field completeness, format, delivery timing and pricing.",
          "The public CSV contains fictional names and masked contact details for format review. A listing does not confirm current affiliation, qualifications, research interests or availability. Verify the details important to your enquiry directly with the professional or institution."
        ]
      }
    ],
    useCasesIntro: "Give the faculty member a clear subject-specific reason to consider your resource, programme or invitation.",
    useCases: [
      "Introduce academic publications and teaching resources",
      "Discuss relevant laboratory and classroom equipment",
      "Invite faculty to workshops and professional programmes",
      "Explore subject-focused academic event participation",
      "Build an initial shortlist for institutional collaboration enquiries"
    ],
    faqs: [
      {
        question: "How is this different from the teachers database?",
        answer: "This page focuses on lecturers, professors and higher-education faculty. The broader teachers category supports other teaching contexts. Specify academic roles, subjects and institution types in your brief."
      },
      {
        question: "Can I select lecturers or professors by subject?",
        answer: "Share the subjects and departments you need, along with locations and academic roles. We will check which distinctions are recorded and confirm matching sample options."
      },
      {
        question: "Are institution and affiliation details current?",
        answer: "Ask how affiliation details were recorded and when they were reviewed. Confirm current employment or institutional affiliation directly when it matters to your enquiry."
      },
      {
        question: "Does a professor title mean the person can approve a purchase?",
        answer: "No. Academic designation does not establish purchasing authority. Confirm the appropriate department or institution process for any business proposal."
      },
      {
        question: "How do I request a sample and quote?",
        answer: "Send your subjects, roles, institution types, target cities, fields and approximate quantity. The public download is a fictional format preview. Ask our team for matching sample options, coverage, timing and pricing."
      }
    ],
    related: [
      "teachers-database-india",
      "school-colleges-database",
      "educational-institutes-database-india",
      "it-professionals-database-india",
      "event-management-organisers-database-india"
    ],
    showTestimonials: true,
    cta: {
      heroTitle: "Find Faculty Who Fit Your Academic Brief",
      heroSubtitle: "Share your subjects, academic roles, institution types and cities. Ask for a matching sample and quote.",
      buttonLabel: "Request Faculty Sample",
      text: "Which subjects and academic roles fit your offer? Send your institution and location requirements.",
      footerTitle: "Build Your Lecturer & Professor Shortlist",
      footerText: "Tell us the subjects, academic roles, institution types, locations and approximate quantity you need. We will confirm available coverage, sample options and pricing."
    }
  },
} satisfies CategoryContent;
