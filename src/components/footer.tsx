import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const QUICK_LINKS = [
  { href: "/#offer", label: "Data Products" },
  { href: "/#why", label: "Why Us" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQs" },
  { href: "/about-us", label: "About Us" },
];

const DATA_CATEGORIES = [
  "Mobile Number Database",
  "Email Database",
  "GST & Company Data",
  "Bulk WhatsApp/SMS Data",
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <span className="font-display font-extrabold text-xl text-white">
            India<span className="text-teal-light">B2B</span>Data
            <span className="text-slate-400 font-normal text-sm">.com</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Verified B2B business data across India — mobile numbers, emails and company
            records for smarter sales &amp; marketing.
          </p>
        </div>

        <div>
          <p className="font-display font-bold text-white text-sm mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-teal-light transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-white text-sm mb-4">Data Categories</p>
          <ul className="space-y-2 text-sm">
            {DATA_CATEGORIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-white text-sm mb-4">Get in Touch</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-light shrink-0" strokeWidth={1.8} />
              {siteConfig.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-light shrink-0" strokeWidth={1.8} />
              {siteConfig.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-light shrink-0" strokeWidth={1.8} />
              Serving all of India
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-500">
        <p>© 2026 IndiaB2BData.com — All rights reserved.</p>
        <p>
          Data provided for legitimate marketing use only.{" "}
          <Link href="/privacy-policy" className="hover:text-teal-light transition">
            Privacy Policy
          </Link>{" "}
          ·{" "}
          <Link href="/terms-and-conditions" className="hover:text-teal-light transition">
            Terms &amp; Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}
