const PHONE_DIGITS = "918929695846";

/** Keep product names readable when a label already contains data or database wording. */
export function formatDataProduct(label: string) {
  const name = label.trim();
  return /\b(?:database|data|leads|contacts|lists)\b/i.test(name) ? name : `${name} database`;
}

export const siteConfig = {
  name: "IndiaB2BData.com",
  url: "https://www.indiab2bdata.com",
  defaultTitle: "IndiaB2BData.com | Verified B2B Business Data Across India",
  defaultDescription:
    "IndiaB2BData.com provides verified, fresh B2B mobile number, email and company databases across 700+ Indian cities. Boost your sales & marketing with genuine data.",
  /** Used in JSON-LD only - visible links use <ProtectedEmail> so the address stays out of the HTML body. */
  email: "info@indiab2bdata.com",
  phoneDisplay: "+91 89296 95846",
  phoneHref: `tel:+${PHONE_DIGITS}`,
  whatsappHref: (message: string) =>
    `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`,
  address: {
    street: "T-10, Sai Mandir St, Malad, Navy Colony, Mamledarwadi, Malad West",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400064",
    country: "IN",
    display:
      "T-10, Sai Mandir St, Malad, Navy Colony, Mamledarwadi, Malad West, Mumbai, Maharashtra 400064",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=T-10%2C+Sai+Mandir+St%2C+Mamledarwadi%2C+Malad+West%2C+Mumbai%2C+Maharashtra",
  defaultWhatsappMessage: "Hi, I want to know more about IndiaB2BData",
  /**
   * Shown on /data-sourcing-compliance. Replace each {{PLACEHOLDER}} with the real value.
   * Until then the page falls back to neutral wording (see shown() in lib/landing/display.ts).
   */
  compliance: {
    grievanceOfficerName: "{{GRIEVANCE_OFFICER_NAME}}",
    grievanceOfficerEmail: "{{GRIEVANCE_OFFICER_EMAIL}}",
    /** e.g. "Public business directories and listings" - one entry per source type. */
    dataSources: ["{{DATA_SOURCE}}"],
    /** Working days to action a removal request, e.g. "7". */
    removalDays: "{{REMOVAL_DAYS}}",
    /** Provider used for DND scrubbing, e.g. "the TRAI NCPR registry via <vendor>". */
    dndMethod: "{{DND_METHOD}}",
    lastReviewed: "2026-10",
  },
};
