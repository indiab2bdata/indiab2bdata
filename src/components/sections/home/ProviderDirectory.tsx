import Link from "next/link";
import { HOME } from "@/content/pages/home";
import { siteConfig } from "@/config/site";

/** Server-rendered provider details and direct navigation to the 15 priority pages. */
export function ProviderDirectory() {
  const copy = HOME.directory;
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="provider-directory-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">{copy.eyebrow}</p>
        <h2 id="provider-directory-heading" className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">{copy.heading}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{copy.intro}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-2xl bg-bgsoft p-6">
            <h3 className="text-xl font-bold text-navy">{copy.providerHeading}</h3>
            <p className="mt-3 leading-relaxed text-muted">{copy.providerText}</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div><dt className="font-semibold text-navy">{copy.addressLabel}</dt><dd className="mt-1 leading-relaxed text-muted">{siteConfig.address.display}</dd></div>
              <div><dt className="font-semibold text-navy">{copy.phoneLabel}</dt><dd className="mt-1"><a href={siteConfig.phoneHref} className="font-semibold text-teal-dark underline underline-offset-4">{siteConfig.phoneDisplay}</a></dd></div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3 text-sm font-semibold text-teal-dark">
              <Link href="/about" className="underline underline-offset-4">{copy.aboutLabel}</Link>
              <Link href="/contact" className="underline underline-offset-4">{copy.contactLabel}</Link>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {copy.groups.map((group) => <nav key={group.heading} aria-label={group.heading}>
              <h3 className="text-lg font-bold text-navy">{group.heading}</h3>
              <ul className="mt-4 space-y-2">{group.links.map((link) => <li key={link.href}>
                <Link href={link.href} prefetch={false} className="block rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">{link.label}</Link>
              </li>)}</ul>
            </nav>)}
          </div>
        </div>
      </div>
    </section>
  );
}
