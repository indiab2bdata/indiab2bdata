import topicPhotoCredits from "../../../public/images/topics/CREDITS.json";

/** Hero / card image (and its alt text) for each category page on the legacy template and the homepage directory. */

const SOURCED_TOPIC_IMAGES = Object.fromEntries(topicPhotoCredits.map((photo) => [photo.key, photo]));

const KEYWORD_IMAGE_GROUPS = {
  "data-network": {
    src: "/images/keywords/data-network.jpg",
    alt: "Data analytics dashboard visualising verified business records",
  },
  "office-team": {
    src: "/images/keywords/office-team.jpg",
    alt: "Sales team reviewing decision-maker contacts on a laptop",
  },
  "city-skyline": {
    src: "/images/keywords/city-skyline.jpg",
    alt: "City skyline representing pan-India business coverage",
  },
  factory: {
    src: "/images/keywords/factory.jpg",
    alt: "Factory floor representing manufacturer and production data",
  },
  documents: {
    src: "/images/keywords/documents.jpg",
    alt: "Reviewing registration and compliance paperwork",
  },
  growth: {
    src: "/images/keywords/growth.jpg",
    alt: "Hand-drawn growth chart representing new business momentum",
  },
  support: {
    src: "/images/keywords/support.jpg",
    alt: "Support team assisting clients with their data requirement",
  },
  handshake: {
    src: "/images/keywords/handshake.jpg",
    alt: "Business handshake representing a new company or vendor connection",
  },
  warehouse: {
    src: "/images/keywords/warehouse.jpg",
    alt: "Warehouse racking representing companies across industries",
  },
} as const;

type ImageGroup = keyof typeof KEYWORD_IMAGE_GROUPS;

const SLUG_TO_GROUP: Record<string, ImageGroup> = {
  "lic-agents-emails-database-india": "office-team",
  "logistics-management-service-providers-database-india": "warehouse",
  "machinery-suppliers-services-database-india": "factory",
  "jewellers-database-india": "handshake",
  "lecturers-professors-database-india": "documents",
  "legal-firms-database-india": "office-team",
  "importers-database-india": "handshake",
  "it-companies-database-india": "data-network",
  "it-professionals-database-india": "office-team",
  "hr-human-resources-database-india": "office-team",
  "hotels-restaurants-bars-database-india": "handshake",
  "home-garden-pets-suppliers-database-india": "warehouse",
  "hni-high-income-employees-database-india": "office-team",
  "graphic-designers-database-india": "office-team",
  "gymnasiums-database-india": "handshake",
  "health-beauty-shops-business-database-india": "support",
  "b2b-database-india": "data-network",
  "b2b-data-provider-india": "data-network",
  "business-database-india": "data-network",
  "business-data-provider-india": "data-network",
  "verified-business-database-india": "data-network",

  "business-leads-india": "office-team",
  "b2b-leads-database-india": "office-team",
  "company-contact-database-india": "office-team",

  "city-wise-company-database-india": "city-skyline",
  "state-wise-company-database-india": "city-skyline",
  "indian-company-database": "city-skyline",

  "manufacturer-database-india": "factory",

  "gst-database-india": "documents",
  "mca-company-database-india": "documents",
  "registered-companies-database-india": "documents",

  "newly-registered-companies-india": "growth",

  "service-providers-database-india": "support",

  "business-directory-india": "handshake",
  "company-directory-india": "handshake",

  "b2b-companies-database-india": "warehouse",
  "industry-wise-company-database-india": "warehouse",
  "corporate-database-india": "warehouse",
  "company-database-india": "warehouse",

  "mobile-number-database-india": "office-team",
  "whatsapp-number-database-india": "office-team",
  "bulk-sms-database-india": "office-team",
  "email-database-india": "data-network",
  "doctors-database": "support",
  "importers-exporters-database-india": "warehouse",
  "dealers-distributors-database-india": "handshake",
  "b2b-b2c-companies-database": "data-network",
  "students-database": "office-team",
  "job-seekers-database": "office-team",
  "car-owners-database": "city-skyline",
  "domain-whois-database": "data-network",
  "school-colleges-database": "documents",
  "teachers-database-india": "office-team",
  "advocates-lawyers-database-india": "documents",
  "agents-database-india": "handshake",
  "apparel-garments-exporters-database-india": "factory",
  "architect-interior-designers-database-india": "city-skyline",
  "beauty-parlours-salons-spa-database-india": "support",
  "bpo-call-centre-employees-database-india": "office-team",
  "building-material-database-india": "warehouse",
  "business-analysts-database-india": "data-network",
  "business-development-sales-professionals-database-india": "office-team",
  "cab-users-database-india": "city-skyline",
  "cbse-schools-email-database-india": "documents",
  "mobile-accessories-shops-database-india": "warehouse",
  "ceo-cfo-cmo-it-heads-database-india": "office-team",
  "channel-sales-professionals-database-india": "handshake",
  "chartered-accountants-database-india": "documents",
  "chemical-pharma-companies-database-india": "factory",
  "chemists-medical-stores-database-india": "support",
  "chief-managers-database-india": "office-team",
  "general-senior-managers-database-india": "office-team",
  "government-employees-database-india": "office-team",
  "civil-engineers-database-india": "city-skyline",
  "club-mahindra-members-database": "city-skyline",
  "commercial-residential-properties-database-india": "city-skyline",
  "company-md-chairman-secretary-database-india": "office-team",
  "company-proprietors-database-india": "handshake",
  "computer-laptop-dealers-database-india": "warehouse",
  "computer-it-telecom-services-database-india": "data-network",
  "consultants-consulting-services-database-india": "support",
  "contractors-database-india": "city-skyline",
  "credit-card-holders-database-india": "data-network",
  "customer-support-executives-database-india": "office-team",
  "debit-card-holders-database-india": "data-network",
  "designers-database-india": "office-team",
  "digital-photography-studios-database-india": "support",
  "dining-leisure-customers-database-india": "city-skyline",
  "demat-account-holders-database-india": "growth",
  "dtp-operators-database-india": "documents",
  "economic-analysts-database-india": "growth",
  "educational-institutes-database-india": "documents",
  "bank-employees-database-delhi-ncr": "office-team",
  "energy-power-sector-database-delhi-ncr": "factory",
  "engineers-service-engineers-database-india": "factory",
  "entertainment-media-database-india": "city-skyline",
  "event-management-organisers-database-india": "handshake",
  "fabric-clothing-stores-database-india": "warehouse",
  "facebook-users-database-india": "data-network",
  "females-database-india": "office-team",
  "female-consumer-bangalore-database": "city-skyline",
  "financial-analysts-managers-industry-database": "documents",
  "food-beverage-stores-database-india": "warehouse",
  "freelancers-database-india": "office-team",
  "frequent-flyer-database-india": "city-skyline",
  "furniture-stores-dealers-database-india": "warehouse",
  "gas-petroleum-companies-database-india": "factory",
  "gems-jewellery-shops-database-india": "handshake",
};

/** Topic-specific photo per page (CC0, from StockSnap/Rawpixel via Openverse), in /images/topics/<slug>.jpg. */
const TOPIC_IMAGES: Record<string, { alt: string; width: number; height: number }> = {
  "b2b-database-india": { alt: "Business team discussing a deal around a laptop", width: 960, height: 640 },
  "company-database-india": { alt: "Glass-fronted office building at night", width: 960, height: 640 },
  "corporate-database-india": { alt: "Empty corporate boardroom with conference table", width: 1024, height: 682 },
  "industry-wise-company-database-india": { alt: "Steel plant interior with molten metal", width: 960, height: 640 },
  "gst-database-india": { alt: "Calculator and pen on a financial statement", width: 1024, height: 682 },
  "mca-company-database-india": { alt: "Hand signing a company document", width: 1021, height: 680 },
  "newly-registered-companies-india": { alt: "Startup team planning with sticky notes", width: 954, height: 636 },
  "b2b-leads-database-india": { alt: "Sales professionals in a business meeting", width: 960, height: 640 },
  "manufacturer-database-india": { alt: "Worker inside a textile manufacturing unit", width: 931, height: 620 },
  "mobile-number-database-india": { alt: "Person holding a smartphone", width: 960, height: 640 },
  "email-database-india": { alt: "Professional checking email on a laptop", width: 960, height: 640 },
  "whatsapp-number-database-india": { alt: "Man reading messages on his phone", width: 960, height: 640 },
  "bulk-sms-database-india": { alt: "Text message on a smartphone screen", width: 960, height: 640 },
  "doctors-database": { alt: "Doctors reviewing an X-ray together", width: 960, height: 640 },
  "importers-exporters-database-india": { alt: "Crane loading shipping containers at a port", width: 919, height: 612 },
  "dealers-distributors-database-india": { alt: "Delivery truck on a highway at dusk", width: 1024, height: 682 },
  "b2b-b2c-companies-database": { alt: "Open sign on a shop door", width: 960, height: 640 },
  "students-database": { alt: "Students studying in a library", width: 960, height: 640 },
  "job-seekers-database": { alt: "Candidates talking at a job fair", width: 1021, height: 680 },
  "car-owners-database": { alt: "Cars in city traffic", width: 960, height: 640 },
  "domain-whois-database": { alt: "Designer building a website on a desktop computer", width: 1024, height: 682 },
  "school-colleges-database": { alt: "College building entrance", width: 960, height: 640 },
  "teachers-database-india": { alt: "Apple on a stack of textbooks", width: 954, height: 636 },
  "advocates-lawyers-database-india": { alt: "Judge's gavel on an open law book", width: 1024, height: 682 },
  "agents-database-india": { alt: "Modern apartment building", width: 960, height: 640 },
  "apparel-garments-exporters-database-india": { alt: "Garment workers at sewing machines", width: 1300, height: 866 },
  "architect-interior-designers-database-india": { alt: "Modern living room interior design", width: 960, height: 640 },
  "beauty-parlours-salons-spa-database-india": { alt: "Stylist blow-drying a client's hair in a salon", width: 1024, height: 682 },
  "bpo-call-centre-employees-database-india": { alt: "Headphones on a dark desk", width: 1024, height: 682 },
  "building-material-database-india": { alt: "Cranes over a building under construction", width: 960, height: 640 },
  "business-analysts-database-india": { alt: "Analytics dashboard on a laptop screen", width: 1024, height: 682 },
  "business-development-sales-professionals-database-india": { alt: "Sales manager presenting to a team", width: 960, height: 640 },
  "cab-users-database-india": { alt: "Yellow taxis on a city street", width: 957, height: 638 },
  "cbse-schools-email-database-india": { alt: "Open maths textbook and notebook", width: 960, height: 640 },
  "mobile-accessories-shops-database-india": { alt: "Person using a smartphone", width: 960, height: 640 },
  "ceo-cfo-cmo-it-heads-database-india": { alt: "Executive standing in an office corridor", width: 960, height: 640 },
  "channel-sales-professionals-database-india": { alt: "Business partners shaking hands", width: 960, height: 640 },
};

export function getKeywordImage(slug: string, keyword: string) {
  const topic = SOURCED_TOPIC_IMAGES[slug] ?? TOPIC_IMAGES[slug];
  if (topic) {
    return { src: `/images/topics/${slug}.jpg`, alt: topic.alt, width: topic.width, height: topic.height };
  }
  const group = SLUG_TO_GROUP[slug] ?? "data-network";
  const { src } = KEYWORD_IMAGE_GROUPS[group];
  return { src, alt: `${keyword} - ${KEYWORD_IMAGE_GROUPS[group].alt}`, width: 1200, height: 800 };
}
