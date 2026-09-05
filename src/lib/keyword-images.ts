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
};

export function getKeywordImage(slug: string, keyword: string) {
  const group = SLUG_TO_GROUP[slug] ?? "data-network";
  const { src } = KEYWORD_IMAGE_GROUPS[group];
  return { src, alt: `${keyword} — ${KEYWORD_IMAGE_GROUPS[group].alt}` };
}
