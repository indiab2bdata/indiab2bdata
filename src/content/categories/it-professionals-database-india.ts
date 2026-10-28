import { BadgeCheck, Briefcase, Cpu, FileText, Filter, Globe, Laptop, Layers, MapPinned, Megaphone, Users } from "lucide-react";
import { categoryLanding } from "@/content/shared/category-template";
import { L, T, work } from "@/content/shared/helpers";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "landing",
  updated: "2026-10-28",
  keyword: {
    slug: "it-professionals-database-india",
    keyword: "IT Professionals Database India",
    title: "IT Professionals Database India",
    metaDescription: "Explore IT professionals database options in India. Specify technical roles, specialisations, experience and cities, then request a sample and quote.",
    eyebrow: "IT Professionals Database",
    h1: "IT Professionals Database in India",
    answer: "An IT professionals database helps you shortlist people working in software, infrastructure, testing, data and related technology roles. Share the functions, experience levels and locations you need so we can check available professional context, contact fields and sample options.",
    intro: [
      "A software engineer, a QA professional and a cloud specialist need different tools and training. Begin with the work your offer supports, then describe the roles and experience levels that would make a useful audience.",
      "Ask about designation, technical specialisation, employer and location fields before selecting a segment. These details help you explain why a conversation is relevant; a broad technology-professional label is not enough on its own.",
      "If your brief is for business accounts, compare the IT companies database. For independent specialists, explore the freelancers database and specify the technical work you need."
    ],
    contentLinks: [
      {
        text: "IT companies database",
        href: "/it-companies-database-india"
      },
      {
        text: "freelancers database",
        href: "/freelancers-database-india"
      },
      {
        text: "job seekers database",
        href: "/job-seekers-database"
      },
      {
        text: "HR and human resources database",
        href: "/hr-human-resources-database-india"
      },
      {
        text: "executive contacts database",
        href: "/ceo-cfo-cmo-it-heads-database-india"
      },
      {
        text: "database directory",
        href: "/database"
      }
    ],
    highlights: [
      {
        icon: Briefcase,
        title: "Technical Role Fit",
        description: "Specify the job functions and specialisations relevant to your brief."
      },
      {
        icon: Filter,
        title: "Experience Context",
        description: "Ask which recorded experience and employer fields are available."
      },
      {
        icon: MapPinned,
        title: "Your Target Locations",
        description: "Discuss city and state coverage for your audience requirement."
      },
      {
        icon: FileText,
        title: "Sample Before Selection",
        description: "Review role labels, professional context and contact completeness first."
      }
    ],
    dataFields: [
      "Professional or contact person name",
      "Designation and technical specialisation, where recorded",
      "Employer or organisation, where available",
      "Experience, where recorded",
      "Available professional contact number and email fields",
      "City and state"
    ],
    sections: [
      {
        heading: "Choose the technical function you need",
        paragraphs: [
          "Describe the work rather than only a technology-sector label. Ask which functions and specialisations are recorded so you can review the right segment."
        ],
        subsections: [
          {
            heading: "Software development and testing",
            text: "For developer tools, quality workflows and relevant professional programmes. Specify development or testing roles and confirm the available specialisation fields."
          },
          {
            heading: "Cloud, infrastructure and security",
            text: "For offers relevant to systems, platform operations or security work. Describe the responsibility you need; a job label alone does not establish certifications or tool proficiency."
          },
          {
            heading: "Data and technical leadership",
            text: "For data-related work or team leadership briefs. State whether you need practitioners or senior decision-making roles so the audience requirement stays clear."
          }
        ]
      },
      {
        heading: "Separate a professional audience from a hiring pool",
        paragraphs: [
          "A person working in IT is not necessarily looking for a job or accepting freelance projects. Explain whether your enquiry concerns tools, learning, an event or a work opportunity.",
          "For candidate-focused enquiries, compare the job seekers database and confirm what availability information is recorded. For staffing partnerships or employer-side tools, explore the HR and human resources database instead."
        ]
      },
      {
        heading: "Match the introduction to the role",
        paragraphs: [
          "Use the recorded role and specialisation to explain the practical value of your offer. Keep experience and location requirements explicit, and ask about any missing context before choosing the file.",
          "For CIO, CTO or IT-head requirements, compare the executive contacts database. Use the database directory to explore other professional categories when a different function would be a better fit."
        ]
      },
      {
        heading: "Review a matching professional sample",
        paragraphs: [
          "Send your job functions, technical specialisations, experience criteria, cities, fields and approximate quantity. Ask us to confirm available records, completeness, format, delivery timing and pricing.",
          "The public CSV uses fictional names and masked contacts to demonstrate the layout. A professional listing does not confirm current employment, demonstrated skill, job-search status or purchasing authority. Assess the details relevant to your conversation directly."
        ]
      }
    ],
    useCasesIntro: "Give the professional a clear reason to consider the tool, programme, event or opportunity you are introducing.",
    useCases: [
      "Introduce relevant developer and technical workflow tools",
      "Invite suitable professionals to workshops and technology events",
      "Discuss role-specific learning programmes",
      "Build an initial professional shortlist for project enquiries",
      "Explore technical community and professional partnerships"
    ],
    faqs: [
      {
        question: "Can I request developers, testers or cloud professionals separately?",
        answer: "Specify the functions, specialisations and locations you need. We will check which role categories are available and confirm matching sample options."
      },
      {
        question: "Are skills and certifications verified?",
        answer: "Do not assume verification from a role label. Ask which skills or qualifications are recorded and assess any capability or certification essential to your requirement directly."
      },
      {
        question: "Are these professionals actively looking for work?",
        answer: "A professional listing does not establish job-search status or project availability. For a hiring brief, discuss a separate candidate requirement and confirm what availability information is recorded."
      },
      {
        question: "Can I select by experience or city?",
        answer: "Share your preferred experience ranges and locations. Ask whether those fields are available and sufficiently complete for the audience you need."
      },
      {
        question: "How do I request a sample and price?",
        answer: "Request a written quote for the agreed selection, locations, fields and volume. Confirm the counting unit, total price and delivery terms before purchase."
      }
    ],
    related: [
      "it-companies-database-india",
      "freelancers-database-india",
      "job-seekers-database",
      "hr-human-resources-database-india",
      "ceo-cfo-cmo-it-heads-database-india"
    ],
    showTestimonials: true,
    cta: {
      heroTitle: "Find IT Professionals Who Fit Your Brief",
      heroSubtitle: "Share your technical functions, specialisations, experience criteria and cities. Ask for a matching sample and quote.",
      buttonLabel: "Request IT Professional Sample",
      text: "Developers, testers, cloud specialists or data professionals? Tell us the work your offer supports.",
      footerTitle: "Build Your IT Professional Shortlist",
      footerText: "Send your target roles, specialisations, locations and approximate quantity. We will confirm available coverage, sample options and pricing."
    }
  },
  landing: categoryLanding(
    {
      slug: "it-professionals-database-india",
      name: "IT Professionals Database",
      title: "IT Professionals Database India | Developers, DevOps, Data & QA by Skill",
      metaDescription: "IT professionals database for India: developers, DevOps, data, cloud, QA and IT managers filtered by skill, experience band and city. For hiring, training and dev-tool marketing. Sample rows on the page.",
      eyebrow: "Tech Talent by Skill",
      h1: "IT Professionals Database India: Tech Talent by Skill & City",
      lead: "Individual technology professionals filtered by skill, role, experience band and city: developers, DevOps, data, cloud, QA and IT managers.",
      segmentSummary: "Tech talent is bought by skill, not by company. A Java recruiter, a cloud-certification academy and a dev-tools startup each want a different slice: specific stacks, experience bands and cities. This database lists professionals rather than companies, with skill and experience tags. For company-level IT data, see IT Companies.",
      segmentCards: [
        { icon: Cpu, title: "By Skill & Stack", description: "Java, .NET, Python, JavaScript, cloud, data, DevOps, QA and more." },
        { icon: Layers, title: "By Experience", description: "Fresher, mid-level and senior bands for precise targeting." },
        { icon: Globe, title: "By Tech Hub", description: "Bengaluru, Hyderabad, Pune, Chennai, NCR and Tier-2 cities." },
      ],
      segmentTabs: { heading: "Pick the talent pool", tabs: [
        T("dev", "Developers", "Backend, frontend, full-stack and mobile engineers.", ["Software Engineer", "Senior Developer", "Tech Lead", "Mobile Developer"], "Tech recruiters, dev tools, coding bootcamps."),
        T("infra", "Cloud & DevOps", "Cloud, DevOps, SRE and infrastructure engineers.", ["DevOps Engineer", "Cloud Architect", "SRE", "System Admin"], "Cloud certification, infra tools, hiring."),
        T("data", "Data & QA", "Data engineers, analysts, ML engineers and testers.", ["Data Engineer", "Data Scientist", "QA Engineer", "Test Lead"], "Analytics courses, data tools, staffing."),
      ] },
      coverage: { heading: "Coverage by role family", label: "Role family", rows: [
        ["Software development", "Backend, frontend, mobile"], ["Cloud & DevOps", "AWS, Azure, GCP, SRE"], ["Data & AI", "Data engineering, analytics, ML"], ["QA & testing", "Manual, automation"], ["IT management", "IT managers, project leads"],
      ] },
      dataFields: ["Professional name", "Current role and skills", "Experience band", "Current employer, where recorded", "Mobile number", "Email ID", "City"],
      sample: "itProfessional",
      useCases: [
        { icon: Users, title: "Tech Recruitment", description: "Source candidates by stack, experience and city." },
        { icon: BadgeCheck, title: "Certification & Upskilling", description: "Promote cloud, data and AI courses to the right skill pools." },
        { icon: Laptop, title: "Developer Marketing", description: "Reach developers for dev tools and APIs." },
        { icon: Megaphone, title: "Tech Events", description: "Fill meetups, hackathons and conferences." },
      ],
      faqs: [
        { question: "Can I target professionals at specific companies?", answer: "Yes, where the current employer is recorded. Name the companies or company types, such as product startups, services firms or GCCs, and we filter on employer." },
        { question: "Can I target freshers and campus hires?", answer: "Yes. The fresher band covers professionals with 0-2 years of experience, which suits bootcamps, certification academies and entry-level hiring." },
        { question: "Which cities have the most tech professionals?", answer: "Bengaluru, Hyderabad, Pune, Chennai and Delhi NCR have the largest pools, with growing numbers in Kochi, Coimbatore, Ahmedabad, Indore and Jaipur." },
        { question: "How is this different from IT Companies?", answer: "This page lists individual professionals by skill. IT Companies lists companies." },
        { question: "Can I filter by skill?", answer: "Yes. Filter by technology, role and experience band, combined with city." },
        { question: "Do you know who is job-hunting?", answer: "No. Job-search status is not recorded. Treat the list as a skill-based outreach pool." },
        { question: "Are senior tech leaders included?", answer: "Yes, up to IT manager and architect level. For CIOs and CTOs, see the CEO, CFO, CMO & IT Heads database." },
      ],
      pricingNote: "Priced by skill, experience band and city. Niche skills cost more per record.",
      related: [L("IT Companies Database", "it-companies-database-india"), L("CEO, CFO, CMO & IT Heads Database", "ceo-cfo-cmo-it-heads-database-india"), L("HR Professionals Database", "hr-human-resources-database-india"), L("Freelancers Database", "freelancers-database-india"), L("Business Analysts Database", "business-analysts-database-india"), L("Engineers & Service Engineers Database", "engineers-service-engineers-database-india")],
      disclaimer: work,
      formTitle: "Get a Free IT Professionals Sample",
      bands: ["Hiring for one stack? Ask for a skill-filtered sample.", "Need seniors only? We filter by experience band.", "Get tech talent samples for your cities."],
      footerTitle: "Reach Tech Talent by Skill",
    },
    { subjects: "IT professional", kind: "people", notIncluded: "Job-search status is not recorded, so the list cannot tell you who is looking for a new role." }
  ),
} satisfies CategoryContent;
