const PHONE_DIGITS = "918929695846";

export const siteConfig = {
  name: "IndiaB2BData.com",
  url: "https://indiab2bdata.com",
  defaultTitle: "IndiaB2BData.com | Verified B2B Business Data Across India",
  defaultDescription:
    "IndiaB2BData.com provides verified, fresh B2B mobile number, email and company databases across 700+ Indian cities. Boost your sales & marketing with genuine data.",
  phoneDisplay: "+91 89296 95846",
  phoneHref: `tel:+${PHONE_DIGITS}`,
  whatsappHref: (message: string) =>
    `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`,
  email: "hello@indiab2bdata.com",
  address: {
    street: "T-10, Sai Mandir St, Malad, Navy Colony, Mamledarwadi, Malad West",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400004",
    country: "IN",
    display:
      "T-10, Sai Mandir St, Malad, Navy Colony, Mamledarwadi, Malad West, Mumbai, Maharashtra 400004",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=T-10%2C+Sai+Mandir+St%2C+Mamledarwadi%2C+Malad+West%2C+Mumbai%2C+Maharashtra",
  defaultWhatsappMessage: "Hi, I want to know more about IndiaB2BData",
};
