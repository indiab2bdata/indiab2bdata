/**
 * Google Analytics (GA4). The root layout renders both scripts with strategy="lazyOnload", so analytics
 * loads after the page is interactive and never blocks rendering (no preload in <head>).
 * Form submissions send a `generate_lead` event (see components/forms/useContactForm.ts).
 */
export const GA_ID = "G-H4WEQ2BRZP";

export const GA_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

export const GA_INIT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "${GA_ID}");`;
