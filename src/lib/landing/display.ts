const PLACEHOLDER = /\{\{[A-Z_]+\}\}/;

/** True while a value still holds a {{PLACEHOLDER}} that needs a real figure. */
export function isPlaceholder(value: string | undefined) {
  return !value || PLACEHOLDER.test(value);
}

/** Show the real value, or a neutral fallback while it is still a placeholder. */
export function shown(value: string | undefined, fallback = "On request") {
  return isPlaceholder(value) ? fallback : value!;
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2026-10" -> "October 2026". */
export function monthYear(yyyyMm: string) {
  const [y, m] = yyyyMm.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}
