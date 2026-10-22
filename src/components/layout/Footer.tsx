import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getAllStates } from "@/content";
import { ProtectedEmail } from "@/components/ui/ProtectedEmail";
import { FOOTER_CORE_DATABASES, FOOTER_QUICK_LINKS } from "@/config/navigation";
import { SITE_COPY } from "@/content/shared/site-copy";

const COPY = SITE_COPY.footer;

export function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/favicon.png"
              alt={SITE_COPY.logoAlt}
              width={32}
              height={32}
              className="w-8 h-8 rounded-md"
            />
            <span className="font-display font-extrabold text-xl text-white">
              India<span className="text-teal-light">B2B</span>Data
              <span className="text-slate-400 font-normal text-sm">.com</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {COPY.tagline}
          </p>
        </div>

        <div>
          <p className="font-display font-bold text-white text-sm mb-4">{COPY.quickLinks}</p>
          <ul className="space-y-2 text-sm">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-teal-light hover:underline underline-offset-4 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-white text-sm mb-4">
            <Link href="/database" className="hover:text-teal-light transition-colors">{COPY.states}</Link>
          </p>
          <ul className="space-y-2 text-sm">
            {getAllStates().map((state) => (
              <li key={state.slug}>
                <Link href={`/database/${state.slug}`} className="hover:text-teal-light hover:underline underline-offset-4 transition-colors">
                  {state.name} B2B Data
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-white text-sm mb-4">{COPY.coreDatabases}</p>
          <ul className="space-y-2 text-sm">
            {FOOTER_CORE_DATABASES.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-teal-light hover:underline underline-offset-4 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-white text-sm mb-4">{COPY.contact}</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-light shrink-0" strokeWidth={1.8} />
              {siteConfig.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-light shrink-0" strokeWidth={1.8} />
              <ProtectedEmail className="hover:text-teal-light transition-colors" />
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-teal-light shrink-0" strokeWidth={1.8} />
              {siteConfig.address.display}
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-400">
        <p>{COPY.copyright}</p>
        <p>
          {COPY.legalNote}{" "}
          <Link href="/privacy-policy" className="hover:text-teal-light transition">
            {COPY.privacy}
          </Link>{" "}
          ·{" "}
          <Link href="/terms-and-conditions" className="hover:text-teal-light transition">
            {COPY.terms}
          </Link>{" "}
          ·{" "}
          <Link href="/image-credits" className="hover:text-teal-light transition">
            {COPY.credits}
          </Link>
        </p>
      </div>
    </footer>
  );
}
