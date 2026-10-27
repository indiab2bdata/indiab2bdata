/**
 * Google Analytics (GA4). The root layout runs GA_INIT with strategy="lazyOnload". It queues gtag calls in
 * dataLayer straight away but only fetches gtag.js on the visitor's first scroll/tap/keypress, or 5s after
 * load, so the ~500ms of gtag.js work stays out of the mobile PageSpeed blocking-time window.
 * Form submissions send a `generate_lead` event (see components/forms/useContactForm.ts).
 */
export const GA_ID = "G-H4WEQ2BRZP";

export const GA_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

export const GA_INIT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "${GA_ID}");
(function(){
  var done = false, events = ["scroll", "pointerdown", "keydown", "touchstart"];
  function load(){
    if (done) return; done = true;
    events.forEach(function(e){ window.removeEventListener(e, load); });
    var s = document.createElement("script"); s.async = true; s.src = "${GA_SRC}";
    document.head.appendChild(s);
  }
  events.forEach(function(e){ window.addEventListener(e, load, { once: true, passive: true }); });
  setTimeout(load, 5000);
})();`;
