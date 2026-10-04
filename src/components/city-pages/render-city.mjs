import { cities, SITE, SALES_PHONE, cityPath, cityUrl, whatsappUrl } from './city-data.mjs';

export const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const e = escapeHtml;
const arrow = '<span aria-hidden="true">↗</span>';
const check = '<span class="ibd-check" aria-hidden="true">✓</span>';
const link = (href, label, cls='') => `<a${cls ? ` class="${e(cls)}"` : ''} href="${e(href)}">${e(label)}</a>`;
const safeJson = data => JSON.stringify(data).replace(/</g, '\\u003c');

export function metadataFor(key) {
  const c=cities[key];
  if (!c) throw new Error(`Unknown city: ${key}`);
  return {
    title: { absolute: c.title }, description: c.description,
    alternates: { canonical: cityUrl(c) },
    robots: { index:true, follow:true },
    openGraph: { title:c.title, description:c.description, url:cityUrl(c), siteName:'IndiaB2BData.com', type:'website', locale:'en_IN' },
    twitter: { card:'summary', title:c.title, description:c.description }
  };
}

export function schemaFor(key) {
  const c=cities[key], url=cityUrl(c);
  const place={ '@type':'City', name:c.schemaCity || c.city, containedInPlace:{'@type':'State',name:c.state} };
  return {'@context':'https://schema.org','@graph':[
    {'@type':'WebPage','@id':`${url}#webpage`,url,name:c.title,description:c.description,inLanguage:'en-IN',isPartOf:{'@id':`${SITE}/#website`},breadcrumb:{'@id':`${url}#breadcrumb`},about:{'@id':`${url}#service`}},
    {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:SITE+'/'},
      {'@type':'ListItem',position:2,name:'Database by state',item:SITE+'/database'},
      {'@type':'ListItem',position:3,name:c.state,item:`${SITE}/database/${c.stateSlug}`},
      {'@type':'ListItem',position:4,name:c.city,item:url}
    ]},
    {'@type':'Service','@id':`${url}#service`,name:`${c.city} company database`,description:c.description,url,serviceType:'Business database enquiry and selection',areaServed:place,provider:{'@type':'Organization','@id':`${SITE}/#organization`,name:'IndiaB2BData.com',url:SITE,telephone:`+${SALES_PHONE}`}},
    {'@type':'FAQPage','@id':`${url}#faq`,mainEntity:c.faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}
  ]};
}

const fields = [
  ['Company / business name', 'Identify the organisation or establishment you want to research.'],
  ['City, locality and address', 'Check whether the record falls inside your agreed service or sales territory.'],
  ['Industry / business category', 'Match the prospect to the product, service or partnership you offer.'],
  ['Business phone', 'Review the phone field supplied in the sample and confirm its contact type.'],
  ['Email and website', 'Assess available email details and use the website field for account research.'],
  ['Additional company fields', 'Ask about GSTIN, designation or other fields when they matter to your brief.']
];

export function renderCityMarkup(key) {
  const c=cities[key]; if(!c) throw new Error(`Unknown city: ${key}`);
  const wa=whatsappUrl(c);
  return `<article class="ibd-city" aria-labelledby="ibd-heading">
  <div class="ibd-wrap">
    <nav class="ibd-breadcrumb" aria-label="Breadcrumb"><ol><li>${link('/','Home')}</li><li>${link('/database','Database')}</li><li>${link(`/database/${c.stateSlug}`,c.state)}</li><li aria-current="page">${e(c.city)}</li></ol></nav>
  </div>
  <section class="ibd-hero">
    <div class="ibd-wrap ibd-hero-grid">
      <div class="ibd-hero-copy">
        <p class="ibd-eyebrow"><span class="ibd-dot" aria-hidden="true"></span>${e(c.kicker)}</p>
        <h1 id="ibd-heading">${e(c.headline)} <span>${e(c.headlineAccent)}</span></h1>
        <p class="ibd-lead">${e(c.lead)}</p>
        <div class="ibd-actions"><a class="ibd-button ibd-button-primary" href="${e(wa)}">Request a free sample ${arrow}</a><a class="ibd-button ibd-button-secondary" href="#ibd-coverage">Explore city coverage <span aria-hidden="true">↓</span></a></div>
        <ul class="ibd-promises">${c.promise.map(s=>`<li>${check}${e(s)}</li>`).join('')}</ul>
      </div>
      <aside class="ibd-brief" aria-label="Example database requirement">
        <div class="ibd-brief-top"><span class="ibd-brief-mark" aria-hidden="true">B2B</span><span>${e(c.brief.label)}</span></div>
        <h2>${e(c.brief.title)}</h2>
        <dl>${c.brief.items.map(([k,v])=>`<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`).join('')}</dl>
        <p class="ibd-brief-note">Your requirement sets the scope. The sample and quote confirm what is available.</p>
        <a class="ibd-text-link" href="#ibd-enquiry">Build your own brief ${arrow}</a>
      </aside>
    </div>
  </section>
  <nav class="ibd-section-nav" aria-label="On this page"><div class="ibd-wrap"><a href="#ibd-coverage">City coverage</a><a href="#ibd-industries">Industries</a><a href="#ibd-fields">Data fields</a><a href="#ibd-sample">Sample review</a><a href="#ibd-faq">FAQs</a></div></nav>
  <div class="ibd-wrap">
    <section class="ibd-section ibd-intro"><p class="ibd-section-label">A LIST WITH A CLEAR PURPOSE</p><p>${e(c.intro)}</p></section>
    <section class="ibd-section" id="ibd-coverage" aria-labelledby="ibd-coverage-title">
      <div class="ibd-section-head"><p class="ibd-section-label">01 / LOCATION</p><h2 id="ibd-coverage-title">${e(c.coverageTitle)}</h2><p>${e(c.coverageIntro)}</p></div>
      <div class="ibd-card-grid">${c.coverage.map(([h,p],i)=>`<div class="ibd-card"><span class="ibd-card-number" aria-hidden="true">0${i+1}</span><h3>${e(h)}</h3><p>${e(p)}</p></div>`).join('')}</div>
    </section>
    <section class="ibd-section" id="ibd-industries" aria-labelledby="ibd-industries-title">
      <div class="ibd-section-head"><p class="ibd-section-label">02 / BUSINESS FIT</p><h2 id="ibd-industries-title">${e(c.industryTitle)}</h2><p>These are example enquiry segments. Choose the category that describes your customer, then confirm the matching records with our team.</p></div>
      <div class="ibd-industry-grid">${c.industries.map(([h,p])=>`<div class="ibd-industry"><h3>${e(h)}</h3><p>${e(p)}</p></div>`).join('')}</div>
    </section>
    <section class="ibd-section ibd-feature" aria-labelledby="ibd-feature-title">
      <div><p class="ibd-section-label">MAKE THE BRIEF SPECIFIC</p><h2 id="ibd-feature-title">${e(c.featureTitle)}</h2>${c.featureParagraphs.map(p=>`<p>${e(p)}</p>`).join('')}</div>
      <div class="ibd-example"><p class="ibd-section-label">A USEFUL ENQUIRY LOOKS LIKE THIS</p><blockquote>${e(c.example.replace('Sample brief: ',''))}</blockquote><a class="ibd-text-link" href="#ibd-enquiry">Write your requirement ${arrow}</a></div>
    </section>
    <section class="ibd-section" id="ibd-fields" aria-labelledby="ibd-fields-title">
      <div class="ibd-section-head"><p class="ibd-section-label">03 / WHAT TO CHECK</p><h2 id="ibd-fields-title">Fields to request in your ${e(c.city)} company database</h2><p>Available fields vary by segment and record. Use the sample to confirm which columns are included, which values are missing and what the final delivery will contain.</p></div>
      <div class="ibd-table-wrap"><table><caption class="ibd-sr-only">Business database fields to discuss for ${e(c.city)}</caption><thead><tr><th scope="col">Field to request</th><th scope="col">How it helps your team</th></tr></thead><tbody>${fields.map(([f,p])=>`<tr><th scope="row">${e(f)}</th><td>${e(p)}</td></tr>`).join('')}</tbody></table></div>
      <p class="ibd-fine">Ask for the matching record count, update information, file format and price for your chosen selection. These are confirmed in the quotation.</p>
    </section>
    <section class="ibd-section ibd-sample" id="ibd-sample" aria-labelledby="ibd-sample-title">
      <div><p class="ibd-section-label">04 / SAMPLE FIRST</p><h2 id="ibd-sample-title">${e(c.sampleTitle)}</h2><p>Review the actual selection before choosing a larger list. A relevant sample is more useful than a headline record count.</p><a class="ibd-button ibd-button-primary" href="${e(wa)}">Ask for a ${e(c.city)} sample ${arrow}</a></div>
      <ul class="ibd-checklist">${c.sampleChecks.map(t=>`<li>${check}<span>${e(t)}</span></li>`).join('')}</ul>
    </section>
    <section class="ibd-section" aria-labelledby="ibd-process-title"><div class="ibd-section-head"><p class="ibd-section-label">FROM REQUIREMENT TO QUOTE</p><h2 id="ibd-process-title">A straightforward way to choose your list</h2></div><ol class="ibd-steps"><li><span aria-hidden="true">1</span><h3>Define the selection</h3><p>Share your city areas, business categories and required fields. Explain who counts as a relevant prospect.</p></li><li><span aria-hidden="true">2</span><h3>Review the sample</h3><p>Check the available records and fields. Clarify geography, duplicate handling and update information.</p></li><li><span aria-hidden="true">3</span><h3>Confirm the quotation</h3><p>Agree the selection, quantity, format, price and delivery terms before placing the order.</p></li></ol></section>
    <section class="ibd-section ibd-faq-section" id="ibd-faq" aria-labelledby="ibd-faq-title"><div class="ibd-section-head"><p class="ibd-section-label">COMMON QUESTIONS</p><h2 id="ibd-faq-title">${e(c.city)} database FAQs</h2></div><div class="ibd-faqs">${c.faqs.map(([q,a])=>`<details><summary>${e(q)}<span aria-hidden="true">+</span></summary><p>${e(a)}</p></details>`).join('')}</div></section>
    <section class="ibd-section ibd-enquiry-section" id="ibd-enquiry" aria-labelledby="ibd-enquiry-title">
      <div class="ibd-enquiry-copy"><p class="ibd-section-label">LET’S DEFINE YOUR LIST</p><h2 id="ibd-enquiry-title">${e(c.closing)}</h2><p>Build a short requirement here, then open WhatsApp to send it to our team. We will discuss the matching sample and quotation.</p><p class="ibd-enquiry-contact">Prefer to speak?<br><a href="tel:+${SALES_PHONE}">+91 89296 95846</a></p><p class="ibd-fine">You choose when to send the message in WhatsApp.</p></div>
      <form class="ibd-form" data-ibd-enquiry data-city="${e(c.city)}" data-phone="${SALES_PHONE}">
        <div><label for="ibd-industry">Industry or business category <span>(required)</span></label><input id="ibd-industry" name="industry" required maxlength="120" placeholder="e.g. IT companies or manufacturers" autocomplete="off"></div>
        <div><label for="ibd-area">Preferred areas or sectors</label><input id="ibd-area" name="area" maxlength="160" placeholder="City-wide or specific localities" autocomplete="off"></div>
        <div class="ibd-form-row"><div><label for="ibd-quantity">Approximate records</label><input id="ibd-quantity" name="quantity" type="number" min="1" max="10000000" step="1" inputmode="numeric" placeholder="Optional"></div><div><label for="ibd-format">Preferred format</label><select id="ibd-format" name="format"><option value="Please advise">Please advise</option><option>Excel</option><option>CSV</option></select></div></div>
        <div><label for="ibd-needs">Fields or additional requirements</label><textarea id="ibd-needs" name="needs" rows="3" maxlength="600" placeholder="e.g. company, location, website and available email"></textarea></div>
        <button class="ibd-button ibd-button-primary" type="submit">Prepare my enquiry ${arrow}</button>
        <div class="ibd-enquiry-result" data-ibd-result hidden><p role="status" aria-live="polite">Your enquiry is ready. Open WhatsApp to review and send it.</p><a class="ibd-button ibd-button-whatsapp" data-ibd-send href="${e(wa)}">Open WhatsApp ${arrow}</a></div>
        <noscript><p>This form needs JavaScript. Use ${link(wa,'WhatsApp')} or call ${link(`tel:+${SALES_PHONE}`,'+91 89296 95846')} to share your requirement.</p></noscript>
      </form>
    </section>
    <section class="ibd-related" aria-labelledby="ibd-related-title"><p class="ibd-section-label">CONTINUE EXPLORING</p><h2 id="ibd-related-title">Related databases</h2><div>${c.related.map(([label,href])=>`<a href="${e(href)}">${e(label)} ${arrow}</a>`).join('')}</div></section>
    <p class="ibd-source">Local context: <a href="${e(c.source.url)}" target="_blank" rel="noopener noreferrer">${e(c.source.label)}</a>. This reference describes the location; it does not endorse this service.</p>
  </div>
  <div class="ibd-mobile-contact"><a href="tel:+${SALES_PHONE}">Call our team</a><a href="${e(wa)}">Request a sample ${arrow}</a></div>
  <script type="application/ld+json">${safeJson(schemaFor(key))}</script>
</article>`;
}

export function standaloneHead(key) {
  const c=cities[key];
  return `<title>${e(c.title)}</title><meta name="description" content="${e(c.description)}"><meta name="robots" content="index, follow"><link rel="canonical" href="${e(cityUrl(c))}"><meta property="og:type" content="website"><meta property="og:title" content="${e(c.title)}"><meta property="og:description" content="${e(c.description)}"><meta property="og:url" content="${e(cityUrl(c))}"><meta property="og:site_name" content="IndiaB2BData.com"><meta property="og:locale" content="en_IN"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${e(c.title)}"><meta name="twitter:description" content="${e(c.description)}">`;
}

export function markdownFor(key) {
  const c=cities[key];
  const lines=[`# ${c.headline} ${c.headlineAccent}`, '', `- URL: ${cityUrl(c)}`, `- SEO title: ${c.title}`, `- Meta description: ${c.description}`, `- Primary keyword: ${c.primaryKeyword}`, `- Secondary keywords: ${c.secondaryKeywords.join('; ')}`, '', c.lead, '', c.intro, '', `## ${c.coverageTitle}`, '', c.coverageIntro];
  for(const [h,p] of c.coverage) lines.push('',`### ${h}`,'',p);
  lines.push('',`## ${c.industryTitle}`,'','These are example enquiry segments. Matching record availability is confirmed with the team.');
  for(const [h,p] of c.industries) lines.push('',`### ${h}`,'',p);
  lines.push('',`## ${c.featureTitle}`,'',...c.featureParagraphs.flatMap(p=>[p,'']),c.example,'',`## Fields to request in your ${c.city} company database`,'','Available fields vary by record and segment. Confirm them in the sample.','', '| Field | Purpose |','| --- | --- |',...fields.map(([f,p])=>`| ${f} | ${p} |`),'','Ask for the matching record count, update information, file format and quotation.', '', `## ${c.sampleTitle}`,'',...c.sampleChecks.map(t=>`- ${t}`),'','## How to order','','1. Define your city areas, business categories and fields.','2. Review the sample, duplicate handling and update information.','3. Agree the selection, quantity, format, price and delivery terms.','',`## ${c.city} database FAQs`);
  for(const [q,a] of c.faqs) lines.push('',`### ${q}`,'',a);
  lines.push('',`## ${c.closing}`,'',`[Request a free sample](${whatsappUrl(c)}) | [Call +91 89296 95846](tel:+${SALES_PHONE})`,'','## Internal links','',...c.related.map(([l,h])=>`- [${l}](${SITE+h})`),'','## Local context source','',`[${c.source.label}](${c.source.url})`,'','## Structured data','','```json',JSON.stringify(schemaFor(key),null,2),'```','');
  return lines.join('\n');
}
