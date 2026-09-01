const PHONE_DIGITS = "919239175138";

export const siteConfig = {
  name: "IndiaB2BData.com",
  url: "https://indiab2bdata.com",
  phoneDisplay: "+91 92391 75138",
  phoneHref: `tel:+${PHONE_DIGITS}`,
  whatsappHref: (message: string) =>
    `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`,
  email: "hello@indiab2bdata.com",
  defaultWhatsappMessage: "Hi, I want to know more about IndiaB2BData",
};
