import { siteConfig } from "@/config/site";

const TITLE = "B2B Database Directory India";
const DESCRIPTION =
  "Browse B2B databases by industry, profession, state and city in India. Compare company, GST, MCA and trade data, then request a sample for your target market.";

/** /database hub copy. FAQs are DATABASE_HUB_FAQS in content/pages/faqs.ts. */
export const DATABASE_HUB = {
  meta: {
    title: TITLE,
    description: DESCRIPTION,
    path: "/database",
    updated: "2026-10-27",
    image: { url: `${siteConfig.url}/images/keywords/city-skyline.jpg`, width: 1600, height: 1066, alt: "City skyline representing pan-India business coverage" },
  },
  schemaName: `${TITLE} | ${siteConfig.name}`,
  /** ItemList schema name. */
  listName: "IndiaB2BData Database Directory",
  breadcrumb: "Database Directory",
  /** Directory group for live pages that are not in any navigation group. */
  moreGroup: { id: "more", heading: "More Databases", description: "Specialist lists that don't fit a single category." },
  stateSchemaName: (state: string) => `${state} Business Database`,
  hero: {
    eyebrow: "Database Directory",
    title: "Every B2B Database We Offer, in One Place",
    description: (categories: number, states: number) =>
      `Browse ${categories} category databases and ${states} state databases. Search by audience, or tell us your requirement and we'll build a custom list.`,
    source: "database-hub-hero-form",
    requirement: "State-Wise Business Database",
    formTitle: "Get Your State-Wise Data",
  },
  categories: { eyebrow: "Browse by Category", title: "Find Your Audience", text: "Explore a selection from each category below, or open a category directory to browse its complete list of databases." },
  guide: {
    heading: "How to Choose a Business Database",
    emphasis: "Start with a defined audience and territory.",
    intro: "A useful database selection describes the organisations your team wants to understand, the locations it serves and the fields needed for the work. Use this directory to compare categories before requesting a sample. The sections below explain how to turn a broad request for business data into a brief that can be checked against an actual file.",
    sections: [
      {
        heading: "Choose company records or registration data",
        paragraphs: [
          "A company database and a registration database answer different questions. Company records help you describe organisations by name, sector, location and business activity. GST records describe a tax registration, while MCA records describe companies and their incorporation context. A registration does not, by itself, show that a business is an active prospect or that a named person handles purchasing. Choose the category that matches the question your team needs to answer.",
          "For example, a supplier looking for factories in Pune needs a manufacturing selection with relevant business locations. A team researching recently incorporated companies needs an incorporation date and a clear definition of which registrations are included. State whether you need a company-level file, branch locations or registration-level records. This makes it easier to compare samples and avoids treating several registrations belonging to one organisation as separate prospects.",
        ],
      },
      {
        heading: "Set the right state and city coverage",
        paragraphs: [
          "Use a state database when your team covers several cities or industrial clusters within one state. Choose a city selection when your service area is narrower. Mention districts or pincodes when the boundary matters: a city name can refer to the municipal area, a wider metropolitan region or nearby business zones. The state pages in this directory provide a starting point for exploring those locations and the industries associated with them.",
          "Write down any exclusions as well as the places you want included. A Mumbai brief might include only the city, or it might also include neighbouring commercial areas; those are different selections. If you operate across several states, list the territories separately and ask for a state and city field in every row. Your team can then assign records to its own sales regions without reconstructing geography from free-text addresses.",
        ],
      },
      {
        heading: "Describe the industry and business activity",
        paragraphs: [
          "Industry labels are broad, so add a short description of the businesses you mean. Manufacturers, wholesalers, importers, distributors and retailers can all sell similar products while serving different customers. A building-material manufacturer is different from a local building-material dealer. Describe the product, service or commercial activity you need, then use the trade and industry directory to find the closest category. Include examples of suitable organisations if your terminology is specialised.",
          "For mixed categories such as IT and telecom, explain whether your focus is software development, equipment sales, infrastructure services or another activity. If you need only a subset of a larger industry, state that before requesting a quote. Ask how the category is represented in the sample and whether the file includes a business-activity field. A smaller, well-defined selection is easier to review than a broad list with an unclear fit.",
        ],
      },
      {
        heading: "Separate company identity from professional contacts",
        paragraphs: [
          "Organisation details and professional-contact details are separate parts of a record. A company may match your industry and geography even when a particular contact role is unavailable. If your work requires a purchasing, operations, finance or management function, identify the department and responsibility you need. A senior job title alone does not tell you whether that person handles the business question you want to discuss.",
          "Specify which fields are essential and which are optional. You might require company name, city and business activity, while treating a website or named contact as additional information. Ask what proportion of the proposed selection contains each required field and inspect the sample for missing values. Keep the brief tied to business and professional functions, and define how your team will handle records that lack a suitable work-contact channel.",
        ],
      },
      {
        heading: "Read the sample before choosing a quantity",
        paragraphs: [
          "The downloadable CSV on this page contains masked dummy records to demonstrate the column layout. It is a format preview, not proof of the coverage or accuracy of a proposed order. Request a sample for your own industry and location brief before choosing a quantity. Check whether the sample actually represents the selection being quoted, including any limits on locations, business activities, company types and available contact fields.",
          "Review the file as your team would use it. Check column names, date formats, missing fields, spelling, city boundaries and repeated organisations. If you plan to import into a CRM, compare the columns with your import template and decide which field will identify an existing account. Agree how duplicate company names, multiple branches and several contacts at one company will be counted. These choices affect both the usable record count and the work needed after delivery.",
        ],
      },
      {
        heading: "Ask what each data check actually covers",
        paragraphs: [
          "Terms such as checked, updated and verified need a clear scope. Ask which fields were reviewed, what method was used and when the relevant information was last checked. Company identity, registration status, location, email availability and professional role are different facts. A check of one field does not establish that every field in the row is current. Request an explanation that lets your team understand what has been assessed and what still needs review.",
          "Business records change as organisations relocate, open branches or change staff. Ask whether a review date is available and how changes or unusable rows are handled under the proposed terms. If your brief includes a particular contact-channel screening requirement, get its scope and timing in writing. Your own outreach process should also respect contact preferences and maintain suppression records, so that a delivered file is reviewed in the context of how your team intends to use it.",
        ],
      },
      {
        heading: "Compare quotes using the same brief",
        paragraphs: [
          "Record quantity is useful only when the selection and counting rules are clear. Compare quotations using the same geography, sector, required columns and definition of a record. One quote may count companies, another branches and another individual contacts. Write down the minimum fields you need, the accepted file format and the intended territory. Ask for the available count after those filters have been applied, rather than using a broad catalogue count as your order specification.",
          "Discuss sample approval, delivery timing and the process for raising a data question before confirming an order. The appropriate timeline depends on the requested selection and any checks agreed for it. Keep a copy of the brief and the sample layout so that the delivered file can be reviewed against the same requirements. If you change the industry, territory or required fields during the discussion, ask for the count and quotation to be updated accordingly.",
        ],
      },
      {
        heading: "Prepare the file for your team's workflow",
        paragraphs: [
          "Request Excel or CSV according to the tools your team uses, and keep identifiers such as pincodes and registration numbers in an appropriate text format. Decide how you want city, state, industry and professional role represented in separate columns. Consistent columns make it easier to filter the file, assign territories and compare it with your own account records. If you have an existing import template, share the required column names as part of the brief.",
          "Before importing the full file, review a small set of records in your normal workflow. Check how duplicate handling, field mapping and missing values behave. Keep the original delivery separate from the version your team edits, and record any exclusions or corrections you apply. These steps give you a clear basis for discussing the delivered selection and make it easier to request a future update using the same territory and category definitions.",
        ],
      },
    ],
  },
  states: {
    eyebrow: "Browse by Location",
    title: "State Databases",
    text: "Each state page breaks down coverage by city and lists the industries that state is strongest in.",
    more: (n: number) => ` +${n} more`,
    cta: "View Database",
  },
  cities: { eyebrow: "Browse by Location", heading: "City Databases" },
  sample: { slug: "state-wise-business-database", label: "State-Wise Business Database" },
  cta: { id: "database-hub-cta", text: "Don't see your state listed? Share the locations and business types you need so availability can be checked.", buttonLabel: "Talk to Our Team" },
  faq: { id: "database-hub-faq", eyebrow: "FAQs", heading: "State-Wise Database FAQs" },
  footer: {
    title: "Need Data for a Specific State or City?",
    text: "Share your target audience, location and quantity. Ask which sample options and coverage can be confirmed, then request a written quote.",
    source: "database-hub-footer-form",
    requirement: "State-Wise Business Database",
  },
};
