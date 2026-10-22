import { PageHero } from "@/components/sections/PageHero";
import { IMAGE_CREDITS } from "@/content/pages/image-credits";

export function ImageCreditsTemplate() {
  const { line, licenseUrls } = IMAGE_CREDITS;
  return (
    <>
      <PageHero
        eyebrow={IMAGE_CREDITS.hero.eyebrow}
        title={IMAGE_CREDITS.hero.title}
        description={IMAGE_CREDITS.hero.description}
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: IMAGE_CREDITS.breadcrumb }]}
      />
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <ul className="divide-y divide-[#DCEAF3] rounded-2xl border border-[#DCEAF3] bg-white">
          {IMAGE_CREDITS.credits.map((c) => (
            <li key={c.key} className="p-5 text-sm leading-relaxed text-muted">
              <a href={c.source} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-teal">
                {c.title.replace(/^File:/, "").replace(/\.[a-z]+$/i, "")}
              </a>{" "}
              {c.author ? line.by(c.author) : line.via(c.provider)}
              {line.licensedUnder}{" "}
              {licenseUrls[c.license] ? (
                <a href={licenseUrls[c.license]} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                  {c.license}
                </a>
              ) : (
                c.license
              )}
              {line.resized}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
