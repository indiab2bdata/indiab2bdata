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
  | "holidayMember"
  | "property"
  | "director"
  | "proprietor"
  | "itDealer"
  | "itServices"
  | "consultant"
  | "contractor"
  | "cardHolder"
  | "supportExec"
  | "debitHolder"
  | "designer"
  | "studio"
  | "diner"
  | "investor"
  | "dtp"
  | "economist"
  | "institute"
  | "banker"
  | "energy"
  | "serviceEngineer"
  | "media"
  | "eventOrganiser"
  | "clothingStore"
  | "socialUser"
  | "female"
  | "bangaloreFemale"
  | "financialProfessional";

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
  bangaloreFemale: [
    ["Name", (c) => pick(["Priya Mehta", "Sneha Iyer", "Neha Gupta", "Kavita Joshi", "Pooja Nair", "Anjali Rao"], c.i)],
    phone,
    ["Email ID", (c) => `consumer${c.i + 1}@example.com`],
    ["Age Band", (c) => pick(["18-25", "26-35", "36-45", "46-60"], c.i)],
    ["Occupation", (c) => pick(["Homemaker", "Salaried", "Self-Employed", "Student", "Business Owner"], c.i)],
    ["Interest", (c) => pick(["Fashion", "Beauty", "Fitness", "Education", "Shopping"], c.i)],
    ["Locality", (c) => pick(["Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Jayanagar", "JP Nagar", "Electronic City"], c.i)],
    ["City", () => "Bengaluru"],
    ["State", () => "Karnataka"],
    ["Pincode", () => "560XXX"],
  ],
  financialProfessional: [
    person,
    ["Designation", (c) => pick(["Financial Analyst", "Finance Manager", "FP&A Analyst", "Financial Controller", "Credit Analyst", "Treasury Manager"], c.i)],
    company,
    ["Industry", (c) => pick(["Banking", "Manufacturing", "IT Services", "Investment Services", "NBFC", "Consulting"], c.i)],
    ["Organisation Type", (c) => pick(["Bank", "Corporate", "Corporate", "Investment Firm", "NBFC", "Consulting Firm"], c.i)],
    ["Specialisation", (c) => pick(["Financial Analysis", "Budgeting", "Planning & Analysis", "Financial Reporting", "Credit Research", "Treasury"], c.i)],
    ["Experience (Yrs)", (c) => String(2 + (c.i % 15))],
    phone, mail, ...loc,
  ],
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
  property: [["Name", (c) => c.name], ["Profile", (c) => pick(["Owner", "Buyer", "Builder", "Broker"], c.i)], ["Segment", (c) => pick(["Residential", "Commercial"], c.i)], ["Property Type", (c) => pick(["2BHK Flat", "Villa", "Office", "Shop", "Plot", "Warehouse"], c.i)], ["Locality", (c) => `Sample Nagar ${c.i + 1}`], phone, mail, ...loc],
  director: [["Name", (c) => c.name], ["Designation", (c) => pick(["Managing Director", "Chairman", "Whole-Time Director", "Company Secretary"], c.i)], company, ["CIN", (c) => `U7XXXX${c.state.slice(0, 2).toUpperCase()}20XXPTCXXX${100 + c.i}`], ["Company Type", (c) => pick(["Private", "Public", "Listed"], c.i)], industry, phone, mail, ...loc],
  proprietor: [["Proprietor Name", (c) => c.name], ["Business Name", (c) => `Sample Traders ${c.i + 1}`], ["Constitution", (c) => pick(["Proprietorship", "Partnership"], c.i)], ["GSTIN", (c) => `27XXXXX${1000 + c.i}X1ZX`], industry, phone, ["Address", (c) => `Shop XX, Sample Market, ${c.city}`], ...loc],
  itDealer: [["Dealer Name", (c) => `Sample Computers ${c.i + 1}`], ["Owner Name", (c) => c.name], ["Dealer Type", (c) => pick(["Retail", "Wholesale", "System Integrator", "Service Centre"], c.i)], ["Brands Handled", (c) => pick(["HP, Dell", "Lenovo, Asus", "Acer, HP", "Dell, Lenovo"], c.i)], ["GSTIN", (c) => `07XXXXX${1000 + c.i}X1ZX`], phone, mail, ...loc],
  itServices: [company, ["Website", (c) => `www.example${c.i + 1}.com`], ["Decision Maker", (c) => c.name], ["Designation", (c) => pick(["Founder", "CTO", "IT Head", "Director", "Procurement Head"], c.i)], ["Service Category", (c) => pick(["Software Development", "Cloud Services", "ISP / Broadband", "Networking", "Telecom VAS", "Managed IT"], c.i)], ["Employees", (c) => pick(["1-10", "11-50", "51-200", "201-500"], c.i)], phone, mail, ...loc],
  consultant: [["Consultant / Firm", (c) => `Sample Consultants ${c.i + 1}`], person, ["Specialisation", (c) => pick(["Management", "HR & Recruitment", "Tax & GST", "Engineering", "IT / ERP", "Marketing", "Immigration"], c.i)], phone, mail, ["Website", (c) => `www.example${c.i + 1}.in`], ...loc],
  contractor: [["Contractor / Firm", (c) => `Sample Constructions ${c.i + 1}`], ["Owner Name", (c) => c.name], ["Contractor Type", (c) => pick(["Civil", "Electrical", "Plumbing", "HVAC", "Interior", "Road / PWD"], c.i)], ["Registration", (c) => pick(["PWD Class A", "CPWD", "Municipal", "Private"], c.i)], ["GSTIN", (c) => `27XXXXX${1000 + c.i}X1ZX`], phone, mail, ...loc],
  cardHolder: [["Name", (c) => c.name], phone, mail, ["Card Tier Band", (c) => pick(["Entry", "Premium", "Super-Premium"], c.i)], ["Occupation", (c) => pick(["Salaried", "Self-Employed", "Business Owner"], c.i)], ...loc],
  supportExec: [person, ["Designation", (c) => pick(["Support Executive", "Senior Executive", "Team Leader", "CX Manager", "Tech Support"], c.i)], ["Industry", (c) => pick(["E-commerce", "Telecom", "BFSI", "SaaS", "BPO"], c.i)], ["Process", (c) => pick(["Voice", "Chat", "Email", "Technical"], c.i)], ["Experience (Yrs)", (c) => String(c.i % 9)], ["Languages", (c) => pick(["English, Hindi", "English, Tamil", "English, Kannada"], c.i)], phone, mail, ...loc],
  debitHolder: [["Name", (c) => c.name], phone, mail, ["Income Band", (c) => pick(["Below 3 LPA", "3-6 LPA", "6-12 LPA", "12+ LPA"], c.i)], ["Age Band", (c) => pick(["18-25", "26-35", "36-45", "46-60"], c.i)], ...loc],
  designer: [["Designer / Studio", (c) => c.name], ["Specialisation", (c) => pick(["Graphic", "UI/UX", "Fashion", "Product", "Jewellery", "Motion"], c.i)], ["Work Type", (c) => pick(["Freelance", "In-house", "Studio"], c.i)], ["Portfolio", (c) => `www.example${c.i + 1}.in`], phone, mail, ...loc],
  studio: [["Studio Name", (c) => `Sample Studio ${c.i + 1}`], ["Owner / Photographer", (c) => c.name], ["Services", (c) => pick(["Wedding", "Events", "Product", "Portrait", "Video", "Printing"], c.i)], phone, mail, ["Address", (c) => `Shop XX, Sample Road, ${c.city}`], ...loc],
  diner: [["Name", (c) => c.name], phone, mail, ["Interest", (c) => pick(["Dining", "Travel", "Movies", "Events", "Fitness"], c.i)], ["Spending Band", (c) => pick(["Mid-Market", "Upper-Mid", "Premium"], c.i)], ...loc],
  investor: [["Name", (c) => c.name], phone, mail, ["Investor Type", (c) => pick(["New Investor", "Long-Term", "Active Trader"], c.i)], ["Age Band", (c) => pick(["18-25", "26-35", "36-45", "46-60"], c.i)], ...loc],
  dtp: [["Name / DTP Centre", (c) => c.name], ["Role", (c) => pick(["DTP Operator", "Typesetter", "Layout Artist", "Centre Owner"], c.i)], ["Software", (c) => pick(["CorelDRAW", "InDesign", "Photoshop", "PageMaker"], c.i)], ["Languages", (c) => pick(["English, Hindi", "English, Marathi", "English, Tamil"], c.i)], phone, mail, ...loc],
  economist: [["Analyst Name", (c) => c.name], ["Designation", (c) => pick(["Economist", "Research Analyst", "Policy Analyst", "Credit Analyst", "Equity Analyst"], c.i)], ["Organisation Type", (c) => pick(["Bank", "Brokerage", "Rating Agency", "Think Tank", "Consultancy", "Research Firm"], c.i)], ["Specialisation", (c) => pick(["Macroeconomics", "Sector Research", "Credit", "Equity", "Public Policy"], c.i)], ["Experience (Yrs)", (c) => String(2 + (c.i % 15))], phone, mail, ...loc],
  institute: [["Institute Name", (c) => `Sample Institute ${c.i + 1}`], ["Institute Type", (c) => pick(["Coaching Centre", "University", "ITI", "Polytechnic", "Skill Institute"], c.i)], ["Courses", (c) => pick(["JEE / NEET", "UPSC / SSC", "B.Tech / MBA", "Electrician / Fitter", "IT / Computer"], c.i)], ["Decision Maker", (c) => c.name], ["Designation", (c) => pick(["Director", "Owner", "Principal", "Admissions Head"], c.i)], phone, mail, ["Website", (c) => `www.sampleinstitute${c.i + 1}.in`], ...loc],
  banker: [["Employee Name", (c) => c.name], ["Designation", (c) => pick(["Officer", "Relationship Manager", "Branch Manager", "Chief Manager", "Credit Manager"], c.i)], ["Bank Type", (c) => pick(["Public Sector", "Private", "Foreign", "Small Finance", "Cooperative"], c.i)], ["Department", (c) => pick(["Retail Banking", "Credit", "Operations", "Treasury", "HR"], c.i)], ["Branch Locality", (c) => pick(["Connaught Place", "Sector 18, Noida", "Cyber City, Gurgaon", "Raj Nagar, Ghaziabad", "Sector 15, Faridabad"], c.i)], phone, mail, ["City", (c) => pick(["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Faridabad", "Greater Noida"], c.i)], ["State", (c) => pick(["Delhi", "Uttar Pradesh", "Haryana", "Uttar Pradesh", "Haryana", "Uttar Pradesh"], c.i)]],
  energy: [company, ["Segment", (c) => pick(["Solar EPC", "Distribution", "Transmission", "Electrical Contractor", "Equipment Dealer", "Energy Consultant"], c.i)], ["Company Type", (c) => pick(["Private", "PSU", "EPC Contractor", "Dealer", "Consultant"], c.i)], ["Decision Maker", (c) => c.name], ["Designation", (c) => pick(["Director", "Project Head", "Procurement Manager", "Chief Engineer"], c.i)], phone, mail, ["City", (c) => pick(["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Faridabad", "Greater Noida"], c.i)], ["State", (c) => pick(["Delhi", "Uttar Pradesh", "Haryana", "Uttar Pradesh", "Haryana", "Uttar Pradesh"], c.i)]],
  serviceEngineer: [["Engineer Name", (c) => c.name], ["Discipline", (c) => pick(["Mechanical", "Electrical", "Electronics", "HVAC", "IT Hardware", "Biomedical"], c.i)], ["Designation", (c) => pick(["Service Engineer", "Field Engineer", "Maintenance Engineer", "Service Manager"], c.i)], industry, ["Experience (Yrs)", (c) => String(1 + (c.i % 15))], phone, mail, ...loc],
  media: [company, ["Segment", (c) => pick(["Film / TV Production", "OTT", "Advertising Agency", "Digital Agency", "Print / Publishing", "Events"], c.i)], ["Decision Maker", (c) => c.name], ["Designation", (c) => pick(["Founder", "Producer", "Creative Director", "Head of Marketing"], c.i)], phone, mail, ["Website", (c) => `www.example${c.i + 1}.com`], ...loc],
  eventOrganiser: [["Company / Organiser", (c) => `Sample Events ${c.i + 1}`], ["Decision Maker", (c) => c.name], ["Designation", (c) => pick(["Founder", "Owner", "Event Head", "Director"], c.i)], ["Specialisation", (c) => pick(["Corporate & MICE", "Wedding", "Exhibition", "Concert", "Social Events"], c.i)], phone, mail, ["Website", (c) => `www.example${c.i + 1}.in`], ...loc],
  clothingStore: [["Shop / Business Name", (c) => `Sample Fabrics ${c.i + 1}`], ["Owner Name", (c) => c.name], ["Store Type", (c) => pick(["Fabric / Cloth", "Saree & Suits", "Readymade Garments", "Boutique", "Wholesale"], c.i)], phone, mail, ["GSTIN", (c) => `27XXXXX${1000 + c.i}X1ZX`], ...loc],
  socialUser: [["Name", (c) => c.name], phone, mail, ["Age Band", (c) => pick(["18-25", "26-35", "36-45", "46-60"], c.i)], ["Gender", (c) => pick(["Male", "Female"], c.i)], ["Interest", (c) => pick(["Shopping", "Travel", "Food", "Fitness", "Finance", "Education"], c.i)], ...loc],
  female: [["Name", (c) => c.name], phone, mail, ["Age Band", (c) => pick(["18-25", "26-35", "36-45", "46-60"], c.i)], ["Occupation", (c) => pick(["Homemaker", "Salaried", "Self-Employed", "Student", "Business Owner"], c.i)], ["Interest", (c) => pick(["Fashion", "Beauty", "Health", "Finance", "Education"], c.i)], ...loc],
  domain: [["Domain Name", (c) => `example${c.i + 1}.in`], ["Registrant Name", (c) => c.name], ["Registrant Org", (c) => c.company], ["Created Date", (c) => `2026-0${1 + (c.i % 9)}-0${1 + (c.i % 9)}`], ["Registrar", () => "Sample Registrar"], phone, mail, ...loc],
};

/** Map a page slug to the column format that product actually ships with. */
export function sampleProfileFor(slug: string): SampleProfile {
  const rules: [RegExp, SampleProfile][] = [
    [/^female-consumer-bangalore-database$/, "bangaloreFemale"],
    [/^financial-analysts-managers-industry-database$/, "financialProfessional"],
    [/event-management/, "eventOrganiser"],
    [/fabric-clothing/, "clothingStore"],
    [/facebook-users/, "socialUser"],
    [/females/, "female"],
    [/energy-power/, "energy"],
    [/service-engineers/, "serviceEngineer"],
    [/entertainment-media/, "media"],
    [/bank-employees/, "banker"],
    [/educational-institutes/, "institute"],
    [/economic-analysts/, "economist"],
    [/debit-card/, "debitHolder"],
    [/^designers-database/, "designer"],
    [/photography-studios/, "studio"],
    [/dining-leisure/, "diner"],
    [/demat-account/, "investor"],
    [/dtp-operators/, "dtp"],
    [/contractors/, "contractor"],
    [/credit-card/, "cardHolder"],
    [/customer-support/, "supportExec"],
    [/properties-database/, "property"],
    [/md-chairman/, "director"],
    [/proprietors/, "proprietor"],
    [/laptop-dealers/, "itDealer"],
    [/it-telecom-services/, "itServices"],
    [/consultants/, "consultant"],
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
