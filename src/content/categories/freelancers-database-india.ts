import { Briefcase, FileText, Filter, MapPinned } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-17",
  keyword: {
    slug: "freelancers-database-india",
    keyword: "freelancers database India",
    title: "Freelancers Database India | Skill-Based Contact Enquiries",
    metaDescription: "Find independent professionals for a clear project or business brief. Choose skills, experience and locations, then request a freelancer sample.",
    eyebrow: "Freelancers Database",
    showTestimonials: true,
    h1: "Freelancers Database in India",
    answer: "Looking for independent professionals for a project, partnership or relevant business offer? Start with the skill and level of experience you need. Share the work involved, your location requirements and your purpose, then review a sample shortlist before deciding.",
    intro: [
      "“We need a freelancer” is rarely enough of a brief. A Shopify build, a product catalogue and a video-editing project call for different skills, portfolios and working arrangements.",
      "Describe the work in plain language, then add the specialism and experience you want. If location does not matter, say so; it can be more useful to prioritise the skill than a city.",
      "For creative work, compare the designers database or photography studios database. For an agency or established advisory business rather than an independent professional, explore the consulting services database."
    ],
    contentLinks: [
      {
        text: "designers database",
        href: "/designers-database-india"
      },
      {
        text: "photography studios database",
        href: "/digital-photography-studios-database-india"
      },
      {
        text: "consulting services database",
        href: "/consultants-consulting-services-database-india"
      },
      {
        text: "DTP operators database",
        href: "/dtp-operators-database-india"
      },
      {
        text: "IT and telecom services database",
        href: "/computer-it-telecom-services-database-india"
      },
      {
        text: "job seekers database",
        href: "/job-seekers-database"
      }
    ],
    highlights: [
      {
        icon: Briefcase,
        title: "Skills Before Volume",
        description: "Name the work and specialism your shortlist should match."
      },
      {
        icon: Filter,
        title: "Experience Requirements",
        description: "Describe the level of responsibility and experience you need."
      },
      {
        icon: MapPinned,
        title: "Local or Remote",
        description: "Tell us whether the role requires a particular city."
      },
      {
        icon: FileText,
        title: "Portfolio Context",
        description: "Ask which portfolio, skill and business contact fields are recorded."
      }
    ],
    dataFields: [
          "Freelancer name",
          "Primary skill: design, development, writing, marketing, video or consulting",
          "Experience in years",
          "Mobile number and email ID",
          "Portfolio or website, where available",
          "City, state and pincode",
        ],
    sections: [
      {
        heading: "A sharper project brief makes a better shortlist",
        paragraphs: [
          "Explain the deliverable, the tools or discipline involved and whether the work is one-off or ongoing. A contact list can help you find people to approach; it does not replace reviewing their work."
        ],
        subsections: [
          {
            heading: "Development & technical work",
            text: "Specify web, app, software, testing or support requirements and the skills you need."
          },
          {
            heading: "Design & production",
            text: "Separate brand design, UI/UX, print layout, animation and video work."
          },
          {
            heading: "Content & marketing",
            text: "Describe the subject, format, language or marketing discipline involved."
          },
          {
            heading: "Business support",
            text: "Explain the advisory, training or operational task rather than requesting a general professional category."
          }
        ]
      },
      {
        heading: "Pick the right professional category",
        paragraphs: [
          "For print and layout production, see the DTP operators database. For suppliers with a company-level service offering, compare the IT and telecom services database.",
          "If you are hiring for an employee role rather than contract work, the job seekers database is a better starting point. Be clear about the working arrangement so you approach people with a suitable proposal."
        ]
      },
      {
        heading: "For hiring, tools or partnerships",
        paragraphs: [
          "Agencies can use a focused brief to source people for a project. Software and training providers can describe the professional group their product serves. These are different reasons to contact someone and should not be mixed in one generic message.",
          "Check the sample's skill labels, location and portfolio completeness. Availability, rates and suitability still need to be discussed directly with each professional."
        ]
      }
    ],
    useCases: [
      "Source independent talent for a defined project",
      "Build a specialist contractor shortlist",
      "Discuss software for a relevant professional group",
      "Invite practitioners to a focused training programme",
      "Find potential collaborators for agency work"
    ],
    faqs: [
      {
        question: "Can I request a specific skill?",
        answer: "Yes. Describe the discipline and tools involved, along with experience and location requirements. Ask the team to confirm the available match."
      },
      {
        question: "Does being listed mean a freelancer is available now?",
        answer: "No. Current availability, rates, portfolio quality and suitability need to be confirmed with the professional."
      },
      {
        question: "Can I look for remote professionals?",
        answer: "State that location is flexible and explain the work. The team can check which skill and location fields are available."
      },
      {
        question: "How is this different from a job-seeker list?",
        answer: "This enquiry is about independent or project-based work. For employee hiring, use the job-seeker category and state the role you want to fill."
      },
      {
        question: "What should I send to request a sample?",
        answer: "Share a short project or business brief, required skills, experience, location constraints and approximate shortlist size. Ask for a representative sample and quote."
      }
    ],
    related: [
      "designers-database-india",
      "digital-photography-studios-database-india",
      "consultants-consulting-services-database-india",
      "dtp-operators-database-india",
      "computer-it-telecom-services-database-india",
      "job-seekers-database"
    ],
    useCasesIntro: "Be clear about whether you are offering work, a partnership or a product that helps the professional do their job.",
    cta: {
      heroTitle: "Tell Us the Skill You’re Looking For",
      heroSubtitle: "Share the work, experience level and whether location matters. Ask for a focused sample shortlist.",
      buttonLabel: "Request Freelancer Sample",
      text: "Need a designer, developer or another specialist? Send the project brief so we can check a relevant shortlist.",
      footerTitle: "Let’s Turn Your Project into a Clear Talent Brief",
      footerText: "Explain what needs doing and who would be a good fit. We’ll confirm the available categories, fields and sample options."
    },
  },
} satisfies CategoryContent;
