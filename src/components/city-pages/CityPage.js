import { createElement, Fragment } from 'react';
import Script from 'next/script';
import { renderCityMarkup } from './render-city.mjs';
import './city.css';

// Server-rendered content. The only browser enhancement builds a WhatsApp enquiry.
export default function CityPage({ cityKey }) {
  return createElement(Fragment, null,
    createElement('div', { dangerouslySetInnerHTML: { __html: renderCityMarkup(cityKey) } }),
    createElement(Script, { src: '/city-pages/enquiry.js', strategy: 'afterInteractive', id: 'ibd-city-enquiry' })
  );
}
