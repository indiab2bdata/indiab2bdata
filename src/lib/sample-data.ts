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
  | "financialProfessional"
  | "foodStore"
  | "freelancer"
  | "frequentFlyer"
  | "furnitureStore"
  | "petroleum"
  | "jeweller"
  | "seniorManager"
  | "governmentEmployee"
  | "graphicDesigner"
  | "gymnasium"
  | "healthBeautyBusiness"
  | "highIncomeEmployee"
  | "homeGardenPetSupplier"
  | "hospitalityBusiness"
  | "hrProfessional"
  | "importerBusiness"
  | "itCompany"
  | "itProfessional"
  | "retailJeweller"
  | "lecturerProfessor"
  | "legalFirm"
  | "licAgentEmail"
  | "logisticsProvider"
  | "machineryBusiness"
  | "maleConsumer"
  | "manufacturingCompany"
  | "mediaPlanningCompany"
  | "medicalRepresentative";

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
  medicalRepresentative: [
    ["Professional Name", (c) => c.name],
    ["Designation", (c) => pick(["Medical Representative", "Senior Medical Representative", "Pharmaceutical Sales Officer"], c.i)],
    ["Employer", (c) => "Sample Pharma Company " + (c.i + 1)],
    ["Recorded Pharma Segment", (c) => pick(["General Pharma", "Cardiology", "Dermatology", "Respiratory"], c.i)],
    phone, ["Professional Email", (c) => "mr" + (c.i + 1) + "@example.com"],
    ["Base City", (c) => c.city], ["State", (c) => c.state],
    ["Recorded Territory", (c) => "Sample territory near " + c.city],
    ["Experience Band", (c) => pick(["0-2 years", "3-5 years", "6-10 years"], c.i)],
  ],
  mediaPlanningCompany: [
    ["Agency / Company Name", (c) => "Sample Media Planning Business " + (c.i + 1)],
    ["Agency Type", (c) => pick(["Independent Media Agency", "Digital Media Agency", "Integrated Advertising Agency", "Specialist Media Agency"], c.i)],
    ["Planning Service", (c) => pick(["Media Planning and Buying", "Digital Campaign Planning", "Integrated Media Planning", "Outdoor Media Planning"], c.i)],
    ["Recorded Media Channels", (c) => pick(["Digital and Print", "Digital", "Print and Outdoor", "Outdoor"], c.i)],
    person, ["Designation", (c) => pick(["Media Planning Head", "Planning Manager", "Agency Partner", "Business Development Manager"], c.i)],
    phone, ["Business Email", (c) => "mediaplanning" + (c.i + 1) + "@example.com"],
    ["Office Address", (c) => "Sample Business Area, " + c.city], ...loc,
    ["Website", (c) => "https://example.com/media-planning-" + (c.i + 1)],
  ],
  manufacturingCompany: [
    ["Company Name", (c) => "Sample Manufacturing Company " + (c.i + 1)],
    ["Manufacturing Sector", (c) => pick(["Engineering", "Textiles", "Food Processing", "Packaging", "Electrical Equipment", "Plastics"], c.i)],
    ["Product Category", (c) => pick(["Machine Components", "Fabric Products", "Packaged Foods", "Printed Packaging", "Electrical Components", "Moulded Parts"], c.i)],
    ["Employee Band", (c) => pick(["11-50", "51-200", "201-500", "501-1000"], c.i)],
    person, ["Designation", (c) => pick(["Procurement Manager", "Operations Manager", "Production Manager", "Managing Director"], c.i)],
    phone, ["Business Email", (c) => "manufacturingcompany" + (c.i + 1) + "@example.com"],
    ["Company Office Address", (c) => "Sample Manufacturing Area, " + c.city], ...loc,
    ["Website", (c) => "https://example.com/manufacturing-company-" + (c.i + 1)],
  ],
  maleConsumer: [
    ["Name", (c) => pick(["Rahul Sharma", "Amit Verma", "Vikram Singh", "Arjun Reddy", "Rohan Das", "Sanjay Patel"], c.i)],
    ["Audience Segment", () => "Adult male consumer (fictional)"],
    ["Adult Age Band", (c) => pick(["18-24", "25-34", "35-44", "45-54", "55+"], c.i)],
    phone, ["Email ID", (c) => "consumer" + (c.i + 1) + "@example.com"],
    ["Illustrative Interest", (c) => pick(["Clothing", "Local Events", "Travel", "Dining", "Accessories"], c.i)],
    ...loc,
  ],
  licAgentEmail: [
    ["Agent Name", (c) => c.name],
    ["Professional Segment", () => "LIC agent (fictional format example)"],
    ["Professional Email", (c) => "agent" + (c.i + 1) + "@example.com"], phone,
    ["City", (c) => c.city], ["State", (c) => c.state],
    ["Record Context", () => "Fictional sample; no verified affiliation or email status"],
  ],
  logisticsProvider: [
    ["Company / Provider Name", (c) => "Sample Logistics Provider " + (c.i + 1)],
    ["Service Category", (c) => pick(["Freight Forwarding", "Road Transport", "Warehousing", "Fulfilment", "Distribution Services", "Logistics Coordination"], c.i)],
    person, ["Designation", (c) => pick(["Operations Manager", "Business Development Manager", "Owner"], c.i)],
    phone, ["Business Email", (c) => "logisticsprovider" + (c.i + 1) + "@example.com"],
    ["Business Address", (c) => "Sample Logistics Area, " + c.city], ...loc,
    ["Service Area", (c) => "Illustrative service area: " + c.city],
    ["Website", (c) => "https://example.com/logistics-provider-" + (c.i + 1)],
  ],
  machineryBusiness: [
    ["Supplier / Service Business Name", (c) => "Sample Machinery Business " + (c.i + 1)],
    ["Machinery Category", (c) => pick(["Machine Tools", "Packaging Machinery", "Industrial Pumps", "Material Handling", "Industrial Automation", "Machine Maintenance"], c.i)],
    ["Business Role", (c) => pick(["Supplier", "Distributor", "Service Provider", "Equipment Dealer", "System Integrator", "Service Provider"], c.i)],
    person, ["Designation", (c) => pick(["Owner", "Sales Manager", "Service Manager"], c.i)],
    phone, ["Business Email", (c) => "machinerybusiness" + (c.i + 1) + "@example.com"],
    ["Business Address", (c) => "Sample Industrial Area, " + c.city], ...loc,
    ["Website", (c) => "https://example.com/machinery-business-" + (c.i + 1)],
  ],
  retailJeweller: [
    ["Jeweller / Showroom Name", (c) => "Sample Jewellery Showroom " + (c.i + 1)],
    ["Jewellery Category", (c) => pick(["Gold Jewellery", "Silver Jewellery", "Diamond Jewellery", "Fashion Jewellery"], c.i)],
    ["Retail Format", (c) => pick(["Independent Showroom", "Boutique", "Chain Outlet", "Independent Showroom"], c.i)],
    person, ["Contact Role", (c) => pick(["Owner", "Proprietor", "Showroom Manager", "Store Manager"], c.i)],
    phone, ["Business Email", (c) => "retailjeweller" + (c.i + 1) + "@example.com"],
    ["Business Address", (c) => "Sample Jewellery Market, " + c.city], ...loc,
    ["Website", (c) => "https://example.com/jeweller-" + (c.i + 1)],
  ],
  lecturerProfessor: [
    ["Faculty Name", (c) => c.name],
    ["Academic Designation", (c) => pick(["Lecturer", "Assistant Professor", "Associate Professor", "Professor", "Department Head", "Assistant Professor"], c.i)],
    ["Subject / Department", (c) => pick(["Commerce", "Computer Science", "Mechanical Engineering", "Physics", "Management", "English"], c.i)],
    ["Institution Name", (c) => "Fictional Higher Education Institute " + (c.i + 1)],
    ["Institution Type", (c) => pick(["College", "University", "Engineering College", "University", "Management Institute", "College"], c.i)],
    phone, ["Professional Email", (c) => "faculty" + (c.i + 1) + "@example.com"],
    ["City", (c) => c.city], ["State", (c) => c.state],
  ],
  legalFirm: [
    ["Law Firm / Practice Name", (c) => "Fictional Legal Practice " + (c.i + 1)],
    ["Recorded Practice Area", (c) => pick(["Corporate Advisory", "Litigation", "Intellectual Property", "Employment", "Commercial Contracts", "General Practice"], c.i)],
    person, ["Business Contact Role", (c) => pick(["Partner", "Practice Manager", "Office Administrator"], c.i)],
    phone, ["Business Email", (c) => "legalpractice" + (c.i + 1) + "@example.com"],
    ["Office Address", (c) => "Sample Office Area, " + c.city], ...loc,
    ["Website", (c) => "https://example.com/legal-practice-" + (c.i + 1)],
  ],
  importerBusiness: [
    ["Company Name", (c) => "Sample Import Business " + (c.i + 1)],
    ["Recorded Trade Role", () => "Importer (fictional example)"],
    ["Product Category", (c) => pick(["Industrial Components", "Consumer Goods", "Homeware", "Textile Inputs", "Electrical Equipment", "Packaging Materials"], c.i)],
    person, ["Designation", (c) => pick(["Owner", "Trade Manager", "Sourcing Manager"], c.i)],
    phone, ["Business Email", (c) => "importbusiness" + (c.i + 1) + "@example.com"],
    ["Business Address", (c) => "Sample Trade Area, " + c.city], ...loc,
    ["Website", (c) => "https://example.com/import-business-" + (c.i + 1)],
  ],
  itCompany: [
    ["Company Name", (c) => "Sample IT Business " + (c.i + 1)],
    ["Business Model", (c) => pick(["Development Agency", "Software Product Company", "IT Service Provider", "IT Service Provider"], c.i)],
    ["Service Category", (c) => pick(["Software Development", "SaaS Products", "Cloud Services", "Managed IT"], c.i)],
    ["Employee Band", (c) => pick(["11-50", "51-200", "201-500", "51-200"], c.i)],
    person, ["Designation", (c) => pick(["Founder", "Product Head", "Partnerships Manager", "Operations Head"], c.i)],
    phone, ["Business Email", (c) => "itcompany" + (c.i + 1) + "@example.com"],
    ["Business Address", (c) => "Sample Technology Area, " + c.city], ...loc,
    ["Website", (c) => "https://example.com/it-company-" + (c.i + 1)],
  ],
  itProfessional: [
    ["Professional Name", (c) => c.name],
    ["Designation", (c) => pick(["Software Engineer", "QA Engineer", "Cloud Engineer", "Data Engineer", "Security Analyst", "Technical Lead"], c.i)],
    ["Technical Specialisation", (c) => pick(["Software Development", "Software Testing", "Cloud Infrastructure", "Data Engineering", "Information Security", "Technical Leadership"], c.i)],
    ["Employer", (c) => "Sample Employer " + (c.i + 1)],
    ["Experience (Yrs)", (c) => String(2 + (c.i % 12))],
    phone, ["Professional Email", (c) => "itprofessional" + (c.i + 1) + "@example.com"],
    ["City", (c) => c.city], ["State", (c) => c.state],
  ],
  hrProfessional: [
    ["HR Professional Name", (c) => c.name],
    ["Designation", (c) => pick(["HR Head", "HR Manager", "Talent Acquisition Manager", "Learning and Development Manager", "Payroll Manager", "HR Business Partner"], c.i)],
    ["HR Function", (c) => pick(["HR Leadership", "HR Operations", "Talent Acquisition", "Learning and Development", "Payroll", "HR Business Partnering"], c.i)],
    ["Employer", (c) => c.company], industry,
    ["Experience (Yrs)", (c) => String(4 + (c.i % 15))],
    phone, ["Business Email", (c) => "hrprofessional" + (c.i + 1) + "@example.com"],
    ["City", (c) => c.city], ["State", (c) => c.state],
  ],
  hospitalityBusiness: [
    ["Establishment Name", (c) => pick(["Sample Hotel", "Example Restaurant", "Fictional Bar", "Demo Hotel", "Sample Restaurant", "Example Bar"], c.i) + " " + (c.i + 1)],
    ["Establishment Type", (c) => pick(["Hotel", "Restaurant", "Bar", "Hotel", "Restaurant", "Bar"], c.i)],
    ["Operating Format", (c) => pick(["Independent", "Independent", "Independent", "Chain Property", "Chain Outlet", "Chain Outlet"], c.i)],
    person,
    ["Contact Role", (c) => pick(["Property Manager", "Owner", "Operations Manager", "Purchasing Contact", "Restaurant Manager", "Venue Manager"], c.i)],
    phone, ["Business Email", (c) => "hospitality" + (c.i + 1) + "@example.com"],
    ["Business Address", (c) => "Sample Hospitality Area, " + c.city],
    ...loc, ["Website", (c) => "https://example.com/hospitality-" + (c.i + 1)],
  ],
  homeGardenPetSupplier: [
    ["Supplier / Business Name", (c) => "Sample Supplier Business " + (c.i + 1)],
    ["Business Type", (c) => pick(["Wholesaler", "Distributor", "Manufacturer", "Wholesaler", "Distributor", "Manufacturer"], c.i)],
    ["Product Category", (c) => pick(["Home Supplies", "Home Supplies", "Garden Supplies", "Garden Supplies", "Pet Supplies", "Pet Supplies"], c.i)],
    ["Product Range", (c) => pick(["Home Decor", "Kitchenware", "Garden Tools", "Planters and Nursery Supplies", "Pet Accessories", "Pet Grooming Supplies"], c.i)],
    person, phone, ["Email ID", (c) => "supplier" + (c.i + 1) + "@example.com"],
    ["Business Address", (c) => "Sample Trade Area, " + c.city],
    ...loc, ["Website", (c) => "https://example.com/supplier-" + (c.i + 1)],
  ],
  highIncomeEmployee: [
    ["Name", (c) => c.name],
    ["Designation", (c) => pick(["Senior Manager", "Technical Lead", "Department Head", "Principal Consultant"], c.i)],
    ["Employer", (c) => c.company],
    industry,
    ["Audience Segment", () => "High-income employee (fictional)"],
    ["Illustrative Annual Income Band", (c) => pick(["INR 20-30 lakh (fictional)", "INR 30-50 lakh (fictional)", "INR 50 lakh+ (fictional)"], c.i)],
    ["Classification Basis", () => "Fictional format example; not verified income or wealth"],
    ["Illustrative Record Date", () => "2026-10-17"],
    phone, ["Email ID", (c) => "professional" + (c.i + 1) + "@example.com"],
    ["City", (c) => c.city], ["State", (c) => c.state],
  ],
  graphicDesigner: [
    ["Designer Name", (c) => c.name],
    ["Specialisation", (c) => pick(["Brand Identity", "Packaging Design", "Print Design", "Digital Creatives", "Publication Design", "Advertising Design"], c.i)],
    ["Work Type", (c) => pick(["Freelance", "Studio", "In-house"], c.i)],
    ["Studio / Employer", (c) => pick(["Independent Designer", "Sample Design Studio", "Example Brand Team"], c.i)],
    phone, ["Email ID", (c) => "designer" + (c.i + 1) + "@example.com"],
    ["Portfolio / Website", (c) => "https://example.com/designer-" + (c.i + 1)],
    ["City", (c) => c.city], ["State", (c) => c.state],
  ],
  gymnasium: [
    ["Gym / Fitness Centre Name", (c) => "Sample Fitness Business " + (c.i + 1)],
    ["Business Type", (c) => pick(["Independent Gym", "Fitness Centre", "Fitness Studio"], c.i)],
    ["Contact Person", (c) => c.name],
    ["Contact Role", (c) => pick(["Owner", "Centre Manager", "Studio Manager"], c.i)],
    phone, ["Email ID", (c) => "gym" + (c.i + 1) + "@example.com"],
    ["Facilities / Services", (c) => pick(["Strength Equipment", "Cardio and Strength", "Group Fitness Classes"], c.i)],
    ["Business Address", (c) => "Sample Fitness Area, " + c.city],
    ...loc, ["Website", (c) => "https://example.com/fitness-" + (c.i + 1)],
  ],
  healthBeautyBusiness: [
    ["Shop / Business Name", (c) => "Sample Health Beauty Business " + (c.i + 1)],
    ["Business Type", (c) => pick(["Retail Shop", "Retail Shop", "Wholesaler", "Retail Shop"], c.i)],
    ["Product Category", (c) => pick(["Cosmetics", "Personal Care", "Beauty Supplies", "Wellness Products"], c.i)],
    ["Contact Person", (c) => c.name],
    phone, ["Email ID", (c) => "beautybusiness" + (c.i + 1) + "@example.com"],
    ["Business Address", (c) => "Sample Retail Area, " + c.city],
    ...loc, ["Website / Business Profile", (c) => "https://example.com/beauty-business-" + (c.i + 1)],
  ],
  governmentEmployee: [
    ["Employee Name", (c) => c.name],
    ["Designation", (c) => pick(["Administrative Officer", "Accounts Assistant", "Office Superintendent", "Technical Assistant", "Training Coordinator", "Records Assistant"], c.i)],
    ["Department", (c) => pick(["Administration", "Accounts", "Administration", "Technical Services", "Training", "Records"], c.i)],
    ["Office / Organisation", (c) => "Fictional Public Office " + (c.i + 1)],
    ["Organisation Type", (c) => pick(["Central Government", "State Government", "Local Body"], c.i)],
    ["Work Contact Number", mobile],
    ["Work Email", (c) => "employee" + (c.i + 1) + "@example.com"],
    ["Office Location", (c) => "Sample Office Area, " + c.city],
    ...loc,
  ],
  seniorManager: [
    person,
    ["Designation", (c) => pick(["General Manager", "General Manager - Operations", "Senior Manager - Procurement", "Senior Manager - HR", "Senior Manager - Finance", "Senior Manager - IT"], c.i)],
    ["Department", (c) => pick(["General Management", "Operations", "Procurement", "HR", "Finance", "IT"], c.i)],
    company, industry,
    ["Experience (Yrs)", (c) => String(8 + (c.i % 15))],
    phone, mail, ...loc,
  ],
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
  foodStore: [["Shop / Business Name", (c) => `Sample Mart ${c.i + 1}`], ["Owner Name", (c) => c.name], ["Store Type", (c) => pick(["Kirana / Grocery", "Supermarket", "Bakery", "Sweet Shop", "Dairy Outlet", "Beverage Distributor"], c.i)], phone, mail, ["GSTIN", (c) => `27XXXXX${1000 + c.i}X1ZX`], ...loc],
  freelancer: [["Freelancer Name", (c) => c.name], ["Primary Skill", (c) => pick(["Web Development", "Graphic Design", "Content Writing", "Digital Marketing", "Video Editing", "Consulting"], c.i)], ["Experience (Yrs)", (c) => String(1 + (c.i % 12))], phone, mail, ["Portfolio", (c) => `www.example${c.i + 1}.in`], ...loc],
  frequentFlyer: [["Name", (c) => c.name], phone, mail, ["Travel Type", (c) => pick(["Business", "Leisure", "Domestic", "International"], c.i)], ["Income Band", (c) => pick(["10-20 LPA", "20-35 LPA", "35-50 LPA", "50 LPA+"], c.i)], ["Occupation", (c) => pick(["Salaried", "Business Owner", "Self-Employed", "Senior Executive"], c.i)], ...loc],
  furnitureStore: [["Business Name", (c) => `Sample Furniture ${c.i + 1}`], ["Owner Name", (c) => c.name], ["Business Type", (c) => pick(["Furniture Showroom", "Modular Furniture", "Office Furniture", "Furnishing & Decor", "Manufacturer / Workshop"], c.i)], phone, mail, ["GSTIN", (c) => `27XXXXX${1000 + c.i}X1ZX`], ...loc],
  petroleum: [["Company / Outlet", (c) => `Sample Fuels ${c.i + 1}`], ["Decision Maker", (c) => c.name], ["Designation", (c) => pick(["Owner", "Dealer", "Plant Head", "Operations Manager", "Purchase Manager"], c.i)], ["Segment", (c) => pick(["Petrol Pump", "LPG Distributor", "CNG Station", "Lubricants", "Oil & Gas Company", "Petrochemicals"], c.i)], phone, mail, ...loc],
  jeweller: [["Shop / Business Name", (c) => `Sample Jewellers ${c.i + 1}`], ["Owner Name", (c) => c.name], ["Business Type", (c) => pick(["Gold Jeweller", "Diamond Jeweller", "Silver Jewellery", "Gemstone Dealer", "Bullion Trader", "Manufacturer"], c.i)], phone, mail, ["GSTIN", (c) => `27XXXXX${1000 + c.i}X1ZX`], ...loc],
  domain: [["Domain Name", (c) => `example${c.i + 1}.in`], ["Registrant Name", (c) => c.name], ["Registrant Org", (c) => c.company], ["Created Date", (c) => `2026-0${1 + (c.i % 9)}-0${1 + (c.i % 9)}`], ["Registrar", () => "Sample Registrar"], phone, mail, ...loc],
};

/** Map a page slug to the column format that product actually ships with. */
export function sampleProfileFor(slug: string): SampleProfile {
  const rules: [RegExp, SampleProfile][] = [
    [/^medical-representatives-database-india$/, "medicalRepresentative"],
    [/^media-planning-companies-database-india$/, "mediaPlanningCompany"],
    [/^manufacturing-companies-database-india$/, "manufacturingCompany"],
    [/^male-gents-database-india$/, "maleConsumer"],
    [/^lic-agents-emails-database-india$/, "licAgentEmail"],
    [/^logistics-management-service-providers-database-india$/, "logisticsProvider"],
    [/^machinery-suppliers-services-database-india$/, "machineryBusiness"],
    [/^jewellers-database-india$/, "retailJeweller"],
    [/^lecturers-professors-database-india$/, "lecturerProfessor"],
    [/^legal-firms-database-india$/, "legalFirm"],
    [/^importers-database-india$/, "importerBusiness"],
    [/^it-companies-database-india$/, "itCompany"],
    [/^it-professionals-database-india$/, "itProfessional"],
    [/^hr-human-resources-database-india$/, "hrProfessional"],
    [/^hotels-restaurants-bars-database-india$/, "hospitalityBusiness"],
    [/^home-garden-pets-suppliers-database-india$/, "homeGardenPetSupplier"],
    [/^hni-high-income-employees-database-india$/, "highIncomeEmployee"],
    [/^graphic-designers-database-india$/, "graphicDesigner"],
    [/^gymnasiums-database-india$/, "gymnasium"],
    [/^health-beauty-shops-business-database-india$/, "healthBeautyBusiness"],
    [/^government-employees-database-india$/, "governmentEmployee"],
    [/^general-senior-managers-database-india$/, "seniorManager"],
    [/^female-consumer-bangalore-database$/, "bangaloreFemale"],
    [/^financial-analysts-managers-industry-database$/, "financialProfessional"],
    [/food-beverage-stores/, "foodStore"],
    [/freelancers/, "freelancer"],
    [/frequent-flyer/, "frequentFlyer"],
    [/furniture-stores/, "furnitureStore"],
    [/gas-petroleum/, "petroleum"],
    [/gems-jewellery/, "jeweller"],
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
