import { Briefcase, Factory, GraduationCap, Truck, Warehouse, Wrench } from "lucide-react";
import { cityContent } from "@/content/shared/city-template";

export default cityContent(
  { updated: "2026-10-28" },
  {
    slug: "greater-noida",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    title: "Greater Noida Company Database",
    metaDescription:
      "Greater Noida company database: manufacturers in Ecotech, Surajpur, Kasna and Site B/C, plus institutions in Knowledge Park and logistics along the Yamuna Expressway. Sample rows on the page.",
    lead:
      "Reach manufacturers in Ecotech, Surajpur, Kasna and Site B/C, institutions in Knowledge Park, and logistics firms along the Yamuna Expressway. Filter by industrial area and business type.",
    segmentSummary:
      "Greater Noida is an industrial and institutional city, not an office market. Its Ecotech sectors, Surajpur and Kasna house consumer-durable, auto-component, packaging and electronics plants. Knowledge Park is one of North India's densest clusters of engineering, management and professional colleges. The Yamuna Expressway corridor towards Jewar is pulling in warehousing and new industrial land. Buyers usually want factories or institutions, so lists here are tagged by establishment type.",
    segmentCards: [
      { icon: Factory, title: "Industrial Areas", description: "Plants in Ecotech I-XII, Surajpur, Kasna and Site B/C: consumer durables, auto parts, packaging and electronics." },
      { icon: GraduationCap, title: "Knowledge Park Institutions", description: "Engineering, management, law and pharmacy colleges and private universities in Knowledge Park I-V." },
      { icon: Warehouse, title: "Expressway Logistics", description: "Warehousing, transport and new industrial units along the Yamuna Expressway and the YEIDA sectors." },
    ],
    segmentTabs: {
      heading: "Greater Noida segments by buyer",
      tabs: [
        { id: "plants", label: "Factories", summary: "Operating plants in Ecotech, Surajpur and Kasna, where buying sits with plant and maintenance heads.", examples: ["Plant Head","Maintenance Manager","Purchase Manager","EHS Officer"], bestFor: "Spares, safety equipment, AMC services." },
        { id: "campus", label: "Institutions", summary: "Colleges and universities in Knowledge Park, where admin, placement and principal offices decide.", examples: ["Director / Principal","Registrar","Placement Officer","Admin Head"], bestFor: "Ed-tech, labs, recruitment drives, campus services." },
        { id: "logistics", label: "Logistics & Warehousing", summary: "Warehouses and transport companies along the Expressway, run by operations heads managing capacity.", examples: ["Operations Head","Warehouse Manager","Fleet Manager","Owner"], bestFor: "Material handling, fleet services, WMS software." },
      ],
    },
    areas: [
      { area: "Ecotech I-XII", detail: "Consumer durables, electronics, packaging" },
      { area: "Surajpur & Kasna", detail: "Auto components, engineering, chemicals" },
      { area: "Site B / Site C", detail: "Mixed manufacturing, MSMEs" },
      { area: "Knowledge Park I-V", detail: "Colleges, universities, training" },
      { area: "Yamuna Expressway / YEIDA", detail: "Warehousing, new industrial units" },
    ],
    useCases: [
      { icon: Wrench, title: "Plant Maintenance & Spares", description: "Reach plant heads and maintenance managers at factories in Ecotech, Surajpur and Kasna." },
      { icon: GraduationCap, title: "Campus Partnerships", description: "Approach Knowledge Park colleges for placements, ed-tech, labs and campus services." },
      { icon: Truck, title: "Warehousing & Transport", description: "Offer 3PL, fleet and warehousing services to manufacturers and distributors along the Expressway." },
      { icon: Briefcase, title: "Industrial Safety & Compliance", description: "Sell safety audits, fire systems and compliance services to factories by industrial area." },
    ],
    faqs: [
      { question: "Can I filter by Ecotech sector, Surajpur or Kasna?", answer: "Name the Ecotech sectors, Surajpur or Kasna areas you need. Ask which location and pincode fields are populated, and confirm them in a matching sample." },
      { question: "Is Greater Noida West (Noida Extension) included?", answer: "Define whether your brief includes Greater Noida West / Noida Extension. Ask how the boundary is applied and whether those locations are available; do not assume they are included in an industrial selection." },
      { question: "Can I separate factories from registered offices?", answer: "Ask whether office, factory or other operating-unit fields are available for your selection, and confirm their definitions in the sample." },
      { question: "Do you cover the colleges in Knowledge Park?", answer: "Ask which Knowledge Park areas and institution types are represented. Confirm whether organisation-level records and requested contact roles are available in a dated sample." },
    ],
    related: [
      { label: "Manufacturing Companies Database", href: "/manufacturing-companies-database-india" },
      { label: "Educational Institutes Database", href: "/educational-institutes-database-india" },
      { label: "Logistics Service Providers Database", href: "/logistics-management-service-providers-database-india" },
      { label: "Machinery Suppliers Database", href: "/machinery-suppliers-services-database-india" },
      { label: "Building Material Database", href: "/building-material-database-india" },
      { label: "Contractors Database", href: "/contractors-database-india" },
    ],
    siblings: [{ label: "Noida Company Database", href: "/database/uttar-pradesh/noida" }, { label: "Delhi Business Database", href: "/database/delhi" }],
    bands: [
      "Need factories in specific Ecotech sectors only? Ask for an area-wise sample.",
      "Selling to Knowledge Park colleges? We list institutions separately from industry.",
      "Get Greater Noida sample rows for your industrial areas.",
    ],
  }
);
