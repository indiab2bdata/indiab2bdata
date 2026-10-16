"use client";

import GlassFolder, { type ArtRecipe, type FolderFile } from "@/components/ui/glass-folder-cards";
import { Reveal } from "@/components/reveal";

/** Brand-coloured artwork (navy → blue → sky) so the folders sit in the site palette. */
const BRAND_ART: ArtRecipe = {
  style: "streak",
  colors: ["#e8f4fc", "#9fd3f2", "#16b8e8", "#0b78d0", "#123b72", "#0d2236", "#6fa8dc", "#eef6fb"],
  scale: 0.7,
  warp: 1.5,
  angle: -0.6,
  gloss: 0.22,
  veins: 0,
};

const FOLDERS: { label: string; meta: string; tone: "light" | "dark"; art: ArtRecipe | "glacier" | "verdant"; seed: number; files: FolderFile[] }[] = [
  {
    label: "Company Data",
    meta: "GST · MCA · B2B",
    tone: "light",
    art: BRAND_ART,
    seed: 3,
    files: [
      { name: "B2B Database", meta: "50L+ records", href: "/b2b-database-india", art: "glacier" },
      { name: "GST Data", meta: "GSTIN", href: "/gst-database-india" },
      { name: "MCA / ROC Records", meta: "CIN", href: "/mca-company-database-india" },
      { name: "New Registrations", meta: "Monthly", href: "/newly-registered-companies-india", art: BRAND_ART },
    ],
  },
  {
    label: "Decision-Makers",
    meta: "CXO · Directors · Pros",
    tone: "dark",
    art: BRAND_ART,
    seed: 11,
    files: [
      { name: "CEO / CFO / CMO", meta: "CXO", href: "/ceo-cfo-cmo-it-heads-database-india", art: BRAND_ART },
      { name: "MDs & Directors", meta: "Board", href: "/company-md-chairman-secretary-database-india" },
      { name: "Chartered Accountants", meta: "CA firms", href: "/chartered-accountants-database-india" },
      { name: "Doctors", meta: "By speciality", href: "/doctors-database", art: "glacier" },
    ],
  },
  {
    label: "Contact Channels",
    meta: "Mobile · Email · WhatsApp",
    tone: "light",
    art: "glacier",
    seed: 7,
    files: [
      { name: "Mobile Numbers", meta: "DND-scrubbed", href: "/mobile-number-database-india", art: BRAND_ART },
      { name: "Email Lists", meta: "Verified", href: "/email-database-india" },
      { name: "WhatsApp Numbers", meta: "Active", href: "/whatsapp-number-database-india" },
      { name: "Bulk SMS Data", meta: "DLT-ready", href: "/bulk-sms-database-india", art: "glacier" },
    ],
  },
];

export function DataFolders() {
  return (
    <section className="relative overflow-hidden bg-bgsoft py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-navy opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(currentColor 1.1px, transparent 1.4px)", backgroundSize: "22px 22px" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">Open a Folder</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Your Data, Neatly Filed
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Every database is organised, verified and ready to use. Click a folder to see what&apos;s inside, then pick a
            file to explore that dataset.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-end justify-items-center gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {FOLDERS.map((folder, i) => (
            <GlassFolder
              key={folder.label}
              label={folder.label}
              meta={folder.meta}
              tone={folder.tone}
              art={folder.art}
              seed={folder.seed}
              files={folder.files}
              action="none"
              labelPlacement="bottom-left"
              width={320}
              appearDelay={i * 140}
            />
          ))}
        </div>

        <p className="mt-14 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Hover to peek · Click to open · Choose a file
        </p>
      </div>
    </section>
  );
}
