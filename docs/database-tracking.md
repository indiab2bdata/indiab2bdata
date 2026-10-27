# Optional tracking and social attribution

The site already loads GA4 (`G-H4WEQ2BRZP`). To enable a real Google Tag Manager container, set `GOOGLE_TAG_MANAGER_ID` in the deployment environment to your container ID, then rebuild and deploy. Empty configuration does not install GTM. The integration uses the Next.js GoogleTagManager component and includes the no-JavaScript iframe fallback.

GA4 continues to load directly. Avoid configuring a second GA4 page-view tag for the same measurement ID in GTM while the direct GA4 integration remains enabled.

Set `TWITTER_SITE` to the business's official `@handle` if it has an X account. This adds `twitter:site` attribution. The page already provides the card type, title, description, absolute image URL and image alternative text. No account handle is invented when this setting is empty.

The audit's `http://www.w3.org/2000/svg` value is a standard SVG namespace, not an HTTP hyperlink or resource request. It should remain unchanged.

Text-to-code ratios vary depending on whether a crawler counts Next.js hydration scripts as code. The database page includes a visible selection guide and uses shared CSS for repeated cards; compare the published production page using the same crawler that reported the issue.
