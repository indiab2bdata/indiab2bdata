/**
 * Dummy sample-data generator for the "Download Sample Data" button.
 * Every value is fictional and masked (XXXX numbers, example.com emails) - it only
 * shows buyers the column format they'll receive for a given product.
 */

export type SampleProfile =
  | "business"
  | "email"
  | "whatsapp"
  | "registry"
  | "newCompanies"
  | "executive"
  | "professional"
  | "doctor"
  | "lawyer"
  | "trade"
  | "retail"
  | "student"
  | "jobSeeker"
  | "carOwner"
  | "cabUser"
  | "school"
  | "teacher"
  | "domain"
  | "ca"
  | "chemist"
  | "civilEngineer"
  | "holidayMember";

const NAMES = ["Rahul Sharma", "Priya Mehta", "Amit Verma", "Sneha Iyer", "Vikram Singh", "Neha Gupta", "Arjun Reddy", "Kavita Joshi", "Rohan Das", "Pooja Nair", "Sanjay Patel", "Anjali Rao"];
const COMPANIES = ["Sample Tech Pvt Ltd", "Demo Industries", "Example Traders", "Test Solutions LLP", "Dummy Enterprises", "Placeholder Exports", "Mock Infra Pvt Ltd", "Specimen Foods", "Trial Textiles", "Prototype Pharma"];
const INDUSTRIES = ["IT Services", "Manufacturing", "Real Estate", "Pharma", "Textiles", "FMCG", "Logistics", "Construction", "Education", "Finance"];
const PLACES: [string, string, string][] = [
  ["Mumbai", "Maharashtra", "4000XX"], ["Pune", "Maharashtra", "4110XX"], ["Delhi", "Delhi", "1100XX"],
  ["Noida", "Uttar Pradesh", "2013XX"], ["Gurgaon", "Haryana", "1220XX"], ["Bengaluru", "Karnataka", "5600XX"],
  ["Chennai", "Tamil Nadu", "6000XX"], ["Hyderabad", "Telangana", "5000XX"], ["Ahmedabad", "Gujarat", "3800XX"],
  ["Surat", "Gujarat", "3950XX"], ["Kolkata", "West Bengal", "7000XX"], ["Jaipur", "Rajasthan", "3020XX"],
];

type Ctx = { i: number; name: string; company: string; city: string; state: string; pin: string; industry: string };
type Column = [header: string, value: (c: Ctx) => string];

const pick = <T,>(list: T[], i: number, step = 1) => list[(i * step) % list.length];
const mobile = (c: Ctx) => `9${(c.i * 7) % 10}XXXXXX${String(10 + ((c.i * 13) % 90))}`;
const email = (c: Ctx) => `${c.name.split(" ")[0].toLowerCase()}@example${c.i + 1}.com`;
const loc: Column[] = [["City", (c) => c.city], ["State", (c) => c.state], ["Pincode", (c) => c.pin]];
const person: Column = ["Contact Person", (c) => c.name];
const company: Column = ["Company Name", (c) => c.company];
const phone: Column = ["Mobile Number", mobile];
const mail: Column = ["Email ID", email];
const industry: Column = ["Industry", (c) => c.industry];
const designation: Column = ["Designation", (c) => pick(["Owner", "Director", "Purchase Manager", "Sales Head", "Partner", "Proprietor"], c.i)];

const PROFILES: Record<SampleProfile, Column[]> = {
  business: [company, person, designation, phone, mail, industry, ["Address", (c) => `Plot XX, Sample Area, ${c.city}`], ...loc],
  email: [person, designation, company, mail, ["Website", (c) => `www.example${c.i + 1}.com`], industry, ...loc],
  whatsapp: [person, company, ["WhatsApp Number", (c) => `+91 ${mobile(c)}`], industry, ...loc],
  registry: [company, ["GSTIN / CIN", (c) => `27XXXXX${1000 + c.i}X1ZX`], ["Constitution", (c) => pick(["Private Limited", "Proprietorship", "Partnership", "LLP"], c.i)], person, phone, mail, industry, ...loc],
  newCompanies: [company, ["CIN", (c) => `U7XXXX${c.state.slice(0, 2).toUpperCase()}2026PTCXXX${100 + c.i}`], ["Incorporation Date", (c) => `2026-0${1 + (c.i % 9)}-1${c.i % 9}`], ["Director Name", (c) => c.name], phone, mail, industry, ...loc],
  executive: [person, ["Designation", (c) => pick(["CEO", "CFO", "CMO", "CIO", "IT Head", "COO"], c.i)], company, ["Company Size", (c) => pick(["51-200", "201-500", "500-1000", "1000+"], c.i)], phone, mail, ["LinkedIn", (c) => `linkedin.com/in/sample-${c.i + 1}`], industry, ...loc],
  professional: [person, ["Job Title", (c) => pick(["Business Analyst", "Sales Manager", "BD Executive", "Channel Manager", "Team Lead", "Agent"], c.i)], company, ["Experience (Yrs)", (c) => String(2 + (c.i % 12))], phone, mail, industry, ...loc],
  doctor: [["Doctor Name", (c) => `Dr. ${c.name}`], ["Qualification", (c) => pick(["MBBS, MD", "BDS", "MBBS, MS", "MBBS, DNB"], c.i)], ["Speciality", (c) => pick(["Cardiology", "Dentistry", "Paediatrics", "Orthopaedics", "Dermatology", "General Physician"], c.i)], ["Clinic / Hospital", (c) => `Sample Care Clinic ${c.i + 1}`], phone, mail, ...loc],
  lawyer: [["Advocate Name", (c) => `Adv. ${c.name}`], ["Practice Area", (c) => pick(["Corporate", "Criminal", "Civil", "Tax", "Family", "IP"], c.i)], ["Court", (c) => pick(["High Court", "District Court", "Supreme Court"], c.i)], ["Firm / Chamber", (c) => `Sample Associates ${c.i + 1}`], phone, mail, ...loc],
  trade: [company, person, designation, ["Product Category", (c) => pick(["Garments", "Spices", "Auto Parts", "Chemicals", "Electronics", "Steel", "Cement", "Tiles"], c.i)], ["IEC / GSTIN", (c) => `XXXXX${2000 + c.i}X`], phone, mail, ...loc],
  retail: [["Shop / Business Name", (c) => `Sample Store ${c.i + 1}`], ["Owner Name", (c) => c.name], ["Category", (c) => pick(["Salon", "Spa", "Mobile Shop", "Accessories", "Beauty Parlour"], c.i)], phone, ["Address", (c) => `Shop XX, Sample Market, ${c.city}`], ...loc],
  student: [["Student Name", (c) => c.name], ["Course", (c) => pick(["B.Tech", "MBA", "B.Com", "Class 12", "BBA", "MBBS"], c.i)], ["Institute", (c) => `Sample College ${c.i + 1}`], ["Year", (c) => String(2026 + (c.i % 4))], phone, mail, ...loc],
  jobSeeker: [["Candidate Name", (c) => c.name], ["Qualification", (c) => pick(["B.Tech", "MBA", "B.Com", "BCA", "Diploma"], c.i)], ["Experience (Yrs)", (c) => String(c.i % 10)], ["Preferred Role", (c) => pick(["Sales", "Developer", "Accounts", "HR", "Operations"], c.i)], phone, mail, ...loc],
  carOwner: [["Owner Name", (c) => c.name], ["Car Model", (c) => pick(["Maruti Swift", "Hyundai Creta", "Honda City", "Tata Nexon", "Toyota Innova", "Mahindra XUV700"], c.i)], ["Registration Year", (c) => String(2016 + (c.i % 10))], ["Reg. No.", (c) => `XX-0X-XX-${1000 + c.i}`], phone, ...loc],
  cabUser: [["User Name", (c) => c.name], phone, mail, ["Usage Frequency", (c) => pick(["Daily", "Weekly", "Monthly"], c.i)], ["Preferred Ride", (c) => pick(["Mini", "Sedan", "SUV", "Auto"], c.i)], ...loc],
  school: [["Institution Name", (c) => `Sample Public School ${c.i + 1}`], ["Type", (c) => pick(["CBSE School", "ICSE School", "State Board", "Engineering College", "Degree College"], c.i)], ["Principal / Contact", (c) => c.name], phone, ["Email ID", (c) => `info@sampleschool${c.i + 1}.edu.in`], ["Student Strength", (c) => String(500 + c.i * 150)], ...loc],
  teacher: [["Teacher Name", (c) => c.name], ["Subject", (c) => pick(["Mathematics", "Science", "English", "Hindi", "Computer", "Commerce"], c.i)], ["School", (c) => `Sample School ${c.i + 1}`], ["Experience (Yrs)", (c) => String(3 + (c.i % 15))], phone, mail, ...loc],
  ca: [["CA Name", (c) => `CA ${c.name}`], ["Firm Name", (c) => `Sample & Associates ${c.i + 1}`], ["Practice Area", (c) => pick(["Audit", "Income Tax", "GST", "Company Law", "Advisory"], c.i)], ["Membership No.", (c) => `XXXX${100 + c.i}`], phone, mail, ...loc],
  chemist: [["Medical Store Name", (c) => `Sample Medicals ${c.i + 1}`], ["Owner / Pharmacist", (c) => c.name], ["Store Type", (c) => pick(["Retail", "Wholesale", "Chain"], c.i)], ["Drug Licence No.", (c) => `XX-XXX-${2000 + c.i}`], phone, ["Address", (c) => `Shop XX, Sample Road, ${c.city}`], ...loc],
  civilEngineer: [["Engineer Name", (c) => c.name], ["Role", (c) => pick(["Site Engineer", "Project Manager", "Structural Consultant", "Civil Contractor", "QS Engineer"], c.i)], company, ["Experience (Yrs)", (c) => String(1 + (c.i % 18))], phone, mail, ...loc],
  holidayMember: [["Member Name", (c) => c.name], phone, mail, ["Membership Tenure", (c) => pick(["1-3 Yrs", "3-5 Yrs", "5-10 Yrs", "10+ Yrs"], c.i)], ["Family Size", (c) => String(2 + (c.i % 4))], ...loc],
  domain: [["Domain Name", (c) => `example${c.i + 1}.in`], ["Registrant Name", (c) => c.name], ["Registrant Org", (c) => c.company], ["Created Date", (c) => `2026-0${1 + (c.i % 9)}-0${1 + (c.i % 9)}`], ["Registrar", () => "Sample Registrar"], phone, mail, ...loc],
};

/** Map a page slug to the column format that product actually ships with. */
export function sampleProfileFor(slug: string): SampleProfile {
  const rules: [RegExp, SampleProfile][] = [
    [/chartered-accountants/, "ca"],
    [/chemists-medical/, "chemist"],
    [/chemical-pharma/, "trade"],
    [/chief-managers/, "executive"],
    [/civil-engineers/, "civilEngineer"],
    [/club-mahindra/, "holidayMember"],
    [/email-database|^email/, "email"],
    [/whatsapp/, "whatsapp"],
    [/newly-registered/, "newCompanies"],
    [/gst|mca/, "registry"],
    [/ceo|cfo|corporate/, "executive"],
    [/analyst|sales-professionals|channel-sales|bpo|agents/, "professional"],
    [/doctor/, "doctor"],
    [/advocate|lawyer/, "lawyer"],
    [/cbse|school-colleges/, "school"],
    [/teacher/, "teacher"],
    [/student/, "student"],
    [/job-seeker/, "jobSeeker"],
    [/car-owner/, "carOwner"],
    [/cab-user/, "cabUser"],
    [/domain|whois/, "domain"],
    [/salon|parlour|mobile-accessories/, "retail"],
    [/export|import|manufacturer|dealer|distributor|building-material|garment|architect/, "trade"],
  ];
  return rules.find(([re]) => re.test(slug))?.[1] ?? "business";
}

/** Build a CSV (opens directly in Excel) of fictional sample rows. */
export function buildSampleCsv(profile: SampleProfile, rows = 20, place?: { city?: string; state?: string }) {
  const columns = PROFILES[profile];
  const escape = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
  const lines = [columns.map(([h]) => h).join(",")];
  for (let i = 0; i < rows; i++) {
    const [city, state, pin] = pick(PLACES, i, 5);
    const ctx: Ctx = {
      i,
      name: pick(NAMES, i, 5),
      company: pick(COMPANIES, i, 3),
      industry: pick(INDUSTRIES, i, 7),
      city: place?.city ?? (place?.state ? pick(PLACES.filter((p) => p[1] === place.state).map((p) => p[0]).concat(place.state), i) : city),
      state: place?.state ?? state,
      pin: place?.state || place?.city ? "XXXXXX" : pin,
    };
    lines.push(columns.map(([, value]) => escape(value(ctx))).join(","));
  }
  lines.push("", "\"SAMPLE ONLY - all records are fictional and masked. Contact IndiaB2BData.com for real verified data.\"");
  return "﻿" + lines.join("\r\n");
}
