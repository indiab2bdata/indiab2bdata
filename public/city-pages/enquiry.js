(() => {
  if (window.__ibdCityEnquiryBound) return;
  window.__ibdCityEnquiryBound = true;
  document.addEventListener('submit', event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches('[data-ibd-enquiry]')) return;
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = name => String(data.get(name) || '').trim();
    const lines = [
      `Hello IndiaB2BData, I would like a sample and quotation for a ${form.dataset.city} company database.`,
      '', `Industry / business category: ${value('industry')}`,
      `Area / sectors: ${value('area') || 'Please discuss coverage with me'}`,
      `Approximate records: ${value('quantity') || 'Please advise available count'}`,
      `Preferred format: ${value('format') || 'Please advise'}`,
      `Fields / requirements: ${value('needs') || 'Please share the available fields'}`,
      '', 'Please confirm the matching count, sample, update information, pricing and delivery terms.'
    ];
    const result = form.querySelector('[data-ibd-result]');
    const send = form.querySelector('[data-ibd-send]');
    send.href = `https://wa.me/${form.dataset.phone}?text=${encodeURIComponent(lines.join('\n'))}`;
    result.hidden = false;
    send.focus();
  });
  document.addEventListener('input', event => {
    const form = event.target instanceof Element ? event.target.closest('[data-ibd-enquiry]') : null;
    if (form) form.querySelector('[data-ibd-result]').hidden = true;
  });
})();
