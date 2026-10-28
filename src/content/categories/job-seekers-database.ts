import { Briefcase, Filter, MapPinned, Zap } from "lucide-react";
import type { CategoryContent } from "@/types/landing";

export default {
  template: "keyword",
  updated: "2026-10-28",
  keyword: {
    slug: "job-seekers-database",
    keyword: "job seekers database India",
    title: "Job Seekers Database India | Candidates",
    metaDescription:
      "Job seekers database for India - freshers and experienced candidates by skill, qualification and city. For recruiters & HR teams. Ask whether a matching real sample is available.",
    eyebrow: "Job Seekers Database India",
    h1: "Job Seekers Database India - Candidates by Skill, Experience and City",
    answer:
      "A job seekers database is a list of candidates who are looking for work, filtered by skill, qualification, experience and location. Recruitment agencies, HR teams, staffing firms and skilling institutes use it to fill roles faster. IndiaB2BData.com's job seekers database covers freshers and experienced professionals across India.",
    intro: [
      "Job portals are crowded and expensive. Recruiters pay for access, then compete with hundreds of other employers for the same profiles. For bulk hiring, such as BPO, retail, delivery, field sales or manufacturing roles, portal subscriptions rarely deliver the volume you need in a specific city.",
      "Our job seekers database gives you direct access to candidates segmented by role, skill, qualification, experience band and location. You can reach freshers in Hyderabad, experienced accountants in Ahmedabad or ITI-qualified technicians across Tamil Nadu, and fill positions without waiting on applications.",
    ],
    highlights: [
      { icon: Briefcase, title: "Freshers to Senior", description: "Entry-level to experienced professionals." },
      { icon: Filter, title: "Skill & Role Filters", description: "IT, sales, BPO, accounts, technicians and more." },
      { icon: MapPinned, title: "Location-Based Hiring", description: "Filter by current city, district or state." },
      { icon: Zap, title: "Faster Bulk Hiring", description: "Large candidate pools for volume roles." },
    ],
    dataFields: [
      "Candidate name",
      "Mobile number",
      "Email address, where available",
      "Qualification and skill set",
      "Experience band and functional area",
      "Current city, state and pincode",
    ],
    sections: [
      {
        heading: "Roles and Skills Covered",
        paragraphs: [
          "The database covers IT and software roles, sales and business development, customer support and BPO, accounts and finance, HR and administration, healthcare staff, teaching, logistics and delivery, and skilled trades such as electricians, fitters and machine operators.",
          "Filter by qualification (10th/12th, ITI, diploma, graduate, postgraduate, professional), by experience band (fresher, 1–3 years, 3–7 years, 7+ years) and by location to build a pool that matches your job description.",
        ],
      },
      {
        heading: "How Recruiters and HR Teams Use It",
        paragraphs: [
          "Staffing agencies use the database for volume hiring drives, walk-in interview invitations and campus-to-corporate programmes. In-house HR teams use it to fill hard-to-hire roles in new branch locations. Skilling and training institutes use it to recruit learners for placement-linked courses.",
          "The best results come from specific, honest messages: the role, location, salary range and next step. Candidates respond quickly when the opportunity matches their profile and the process is clear.",
        ],
      },
      {
        heading: "Responsible Candidate Outreach",
        paragraphs: [
          "Only contact candidates about genuine job opportunities or relevant training. Never charge candidates for placement, and honour any request to stop contacting them.",
          "Check numbers against the DND registry before promotional outreach, and use the data in line with TRAI rules and the Digital Personal Data Protection Act, 2023.",
        ],
      },
    ],
    useCases: [
      "Bulk hiring for BPO, retail and field sales roles",
      "Walk-in drive and job fair invitations",
      "Staffing and recruitment agency sourcing",
      "Hiring for new branch or plant locations",
      "Skilling and placement-linked course admissions",
      "Gig and delivery partner onboarding",
    ],
    faqs: [
      {
        question: "What is a job seekers database?",
        answer:
          "It's a list of candidates looking for work, with contact details and profile information such as skills, qualification, experience and location. Recruiters use it to reach candidates directly.",
      },
      {
        question: "Can I filter candidates by skill and experience?",
        answer: "Yes. Filter by functional area or skill, qualification, experience band and current location.",
      },
      {
        question: "Do you have data for freshers?",
        answer: "Yes. Fresher segments include recent graduates, diploma and ITI holders, and 12th-pass candidates for entry-level roles.",
      },
      {
        question: "How much does a job seekers database cost?",
        answer:
          "Specify the role or experience criteria and locations you need. Ask which filters and contact fields are available, then confirm the count basis, total price and delivery terms in the quote.",
      },
      {
        question: "Who usually buys this data?",
        answer: "Recruitment and staffing agencies, corporate HR teams, BPOs, skilling institutes and companies opening new locations.",
      },
      {
        question: "Can I get a free sample?",
        answer: "Ask whether a real sample for the job-role and location selection is available. The public CSV is fictional and demonstrates possible layout only; check any supplied rows for required fields and selected coverage.",
      },
    ],
    related: [
      "students-database",
      "business-analysts-database-india",
      "bpo-call-centre-employees-database-india",
      "teachers-database-india",
      "b2b-b2c-companies-database",
      "industry-wise-company-database-india",
    ],
  },
} satisfies CategoryContent;
