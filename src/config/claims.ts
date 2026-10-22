/**
 * Operational claims made on the new landing template and the compliance page.
 * Each is a switch: set it to false (or null) and every sentence relying on it disappears or rewords itself.
 * Only leave a claim on if it is true for every order.
 */
export const CLAIMS = {
  /** Removed numbers/emails go on a permanent suppression list. */
  suppressionList: false,
  /** Mobile numbers are checked against the NCPR/DND registry before every delivery. */
  dndScrubbing: false,
  /** Typical delivery time after sample approval, or null to stop quoting a time. */
  deliveryTime: null as string | null,
  /** Show "Data last refreshed: Month YYYY" from each profile's lastUpdated. Set false until dates are verified per page. */
  showRefreshDates: false,
};
