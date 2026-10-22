import type { SVGProps } from "react";

/**
 * Line-art landmark per state, drawn on a 24x24 grid in the same stroke style as lucide icons
 * (currentColor, round caps) so they sit alongside the rest of the icon set.
 */
const LANDMARKS: Record<string, { title: string; color: string; body: React.ReactNode }> = {
  // Gateway of India - central arch with two side bays and turrets
  maharashtra: {
    title: "Gateway of India",
    color: "#C2410C",
    body: (
      <>
        <path d="M3 21h18" />
        <path d="M4 21V10h16v11" />
        <path d="M9.5 21v-5a2.5 2.5 0 0 1 5 0v5" />
        <path d="M5.5 21v-3.5a1.25 1.25 0 0 1 2.5 0V21M16 21v-3.5a1.25 1.25 0 0 1 2.5 0V21" />
        <path d="M3.5 10h17M5 10V7.5h14V10" />
        <path d="M5 7.5V5.5M19 7.5V5.5M12 7.5V4.5" />
        <path d="M4.2 5.5h1.6M18.2 5.5h1.6M11 4.5h2" />
      </>
    ),
  },
  // Somnath Temple - tall curvilinear shikhara over a pillared base
  gujarat: {
    title: "Somnath Temple",
    color: "#B91C1C",
    body: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21v-6h14v6" />
        <path d="M8 21v-3M12 21v-3M16 21v-3" />
        <path d="M7 15c0-5 2.5-8 5-10.5C14.5 7 17 10 17 15" />
        <path d="M9.5 15c0-3.5 1-5.5 2.5-7.5 1.5 2 2.5 4 2.5 7.5" />
        <path d="M12 4.5V2.5M12 2.5l2 .8-2 .8" />
      </>
    ),
  },
  // Meenakshi Temple - stepped gopuram tower
  "tamil-nadu": {
    title: "Meenakshi Temple gopuram",
    color: "#BE185D",
    body: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21l1-4h12l1 4" />
        <path d="M6.5 17l1-3.5h9l1 3.5" />
        <path d="M8 13.5l1-3.5h6l1 3.5" />
        <path d="M9.5 10l.8-3h3.4l.8 3" />
        <path d="M10.3 7c0-1.2.8-2 1.7-2.5.9.5 1.7 1.3 1.7 2.5" />
        <path d="M12 4.5V3" />
        <path d="M10.5 21v-2.5a1.5 1.5 0 0 1 3 0V21" />
      </>
    ),
  },
  // India Gate - single tall arch with stepped top
  delhi: {
    title: "India Gate",
    color: "#7C3AED",
    body: (
      <>
        <path d="M3 21h18" />
        <path d="M6 21V8h12v13" />
        <path d="M9.5 21v-7a2.5 2.5 0 0 1 5 0v7" />
        <path d="M5 8h14M7 8V6h10v2M9 6V4.5h6V6" />
        <path d="M11 4.5V3.5a1 1 0 0 1 2 0v1" />
      </>
    ),
  },
  // Taj Mahal - onion dome, iwan arch and four minarets
  "uttar-pradesh": {
    title: "Taj Mahal",
    color: "#0F766E",
    body: (
      <>
        <path d="M2 21h20" />
        <path d="M7 21v-8h10v8" />
        <path d="M10.5 21v-4a1.5 1.5 0 0 1 3 0v4" />
        <path d="M8.5 13c0-3 1.6-4.6 3.5-5.5 1.9.9 3.5 2.5 3.5 5.5" />
        <path d="M12 7.5V5.5" />
        <path d="M3.5 21V10M5.5 21V10M3.5 10h2M4.5 10V8.5" />
        <path d="M18.5 21V10M20.5 21V10M18.5 10h2M19.5 10V8.5" />
      </>
    ),
  },
  // Mysore Palace - central dome with flanking domes over an arcade
  karnataka: {
    title: "Mysore Palace",
    color: "#A16207",
    body: (
      <>
        <path d="M2 21h20" />
        <path d="M3.5 21v-7h17v7" />
        <path d="M6 21v-2.5a1 1 0 0 1 2 0V21M11 21v-3a1 1 0 0 1 2 0v3M16 21v-2.5a1 1 0 0 1 2 0V21" />
        <path d="M9 14V9.5h6V14" />
        <path d="M9.5 9.5c0-2.2 1.1-3.6 2.5-4.5 1.4.9 2.5 2.3 2.5 4.5" />
        <path d="M12 5V3" />
        <path d="M4.5 14c0-1.6.7-2.6 1.75-3.2C7.3 11.4 8 12.4 8 14M16 14c0-1.6.7-2.6 1.75-3.2 1.05.6 1.75 1.6 1.75 3.2" />
      </>
    ),
  },
  // Kurukshetra (Jyotisar) - chariot wheel
  haryana: {
    title: "Kurukshetra chariot wheel",
    color: "#15803D",
    body: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 3.5V10M12 14v6.5M3.5 12H10M14 12h6.5M6 6l4.6 4.6M13.4 13.4 18 18M18 6l-4.6 4.6M10.6 13.4 6 18" />
      </>
    ),
  },
  // Charminar - four minarets around a central arch
  telangana: {
    title: "Charminar",
    color: "#0369A1",
    body: (
      <>
        <path d="M2 21h20" />
        <path d="M6.5 21V11h11v10" />
        <path d="M9.5 21v-5a2.5 2.5 0 0 1 5 0v5" />
        <path d="M6.5 11h11M8 11V9h8v2" />
        <path d="M4 21V6.5M6 21V6.5M18 21V6.5M20 21V6.5" />
        <path d="M4 6.5c0-1 .5-1.8 1-2.3.5.5 1 1.3 1 2.3M18 6.5c0-1 .5-1.8 1-2.3.5.5 1 1.3 1 2.3" />
        <path d="M5 4.2V3M19 4.2V3M4 12h2M18 12h2" />
      </>
    ),
  },
};

export function StateLandmarkIcon({ state, ...props }: { state: string } & SVGProps<SVGSVGElement>) {
  const landmark = LANDMARKS[state];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={landmark?.title ?? "Location"}
      {...props}
    >
      <title>{landmark?.title ?? "Location"}</title>
      {landmark ? (
        landmark.body
      ) : (
        <>
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </>
      )}
    </svg>
  );
}

/** Brand colour for a state (falls back to the site teal). */
export function stateLandmarkColor(state: string) {
  return LANDMARKS[state]?.color ?? "#0b78d0";
}

export function stateLandmarkName(state: string) {
  return LANDMARKS[state]?.title;
}
