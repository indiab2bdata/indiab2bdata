"use client";

import GlassFolder, { type ArtRecipe, type FolderFile } from "@/components/ui/GlassFolderCards";
import { Reveal } from "@/components/ui/Reveal";
import { HOME } from "@/content/pages/home";

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

const COPY = HOME.folders;
const art = (name: "brand" | "glacier" | "verdant") => (name === "brand" ? BRAND_ART : name);

/** Folder content from content/pages/home, with "brand" resolved to the recipe above. */
const FOLDERS = COPY.items.map((f) => ({
  ...f,
  art: art(f.art),
  files: f.files.map((file): FolderFile => (file.art ? { ...file, art: art(file.art) } : { name: file.name, meta: file.meta, href: file.href })),
}));

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
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{COPY.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            {COPY.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {COPY.text}
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
          {COPY.hint}
        </p>
      </div>
    </section>
  );
}
