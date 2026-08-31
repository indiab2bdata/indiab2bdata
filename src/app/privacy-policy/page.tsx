import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalSection } from "@/components/legal-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of IndiaB2BData.com to understand how we collect, use and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: 26 August 2026"
        compact
      />

      <section className="py-16 md:py-24 max-w-3xl mx-auto px-5 md:px-8">
        <div className="bg-white rounded-2xl border border-slate-100 p-7 md:p-12 space-y-9 text-sm md:text-base text-navy/85 leading-relaxed">
          <p>
            IndiaB2BData.com (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
            privacy and is committed to protecting the personal information you share with us.
            This Privacy Policy explains what information we collect, how we use it, and the
            choices you have. By using our website or services, you agree to the terms of this
            policy.
          </p>

          <LegalSection title="1. Information We Collect">
            <p>
              When you fill out an enquiry form, request a free sample, or contact us via call or
              WhatsApp, we may collect:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Your name, company name and designation</li>
              <li>Phone / WhatsApp number and email address</li>
              <li>Details of your data requirement (industry, city/state, quantity)</li>
              <li>Any other information you voluntarily provide in your message</li>
            </ul>
          </LegalSection>

          <LegalSection title="2. How We Use Your Information">
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Respond to your enquiry and share free sample records</li>
              <li>Prepare quotations and process your orders</li>
              <li>Contact you via call, SMS, email or WhatsApp regarding your requirement</li>
              <li>Improve our website, products and customer support</li>
              <li>Send occasional updates about our data products, where permitted</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. The B2B Data We Sell">
            <p>
              Separately from the enquiry information above, IndiaB2BData.com compiles and sells
              B2B business contact databases (mobile numbers, emails, GST/company records)
              sourced from publicly available and permission-based channels. This data is
              intended strictly for legitimate B2B sales and marketing use by our clients. We
              are not responsible for how a client subsequently uses data purchased from us, and
              we expect all clients to comply with applicable Indian laws, including TRAI/DND
              regulations, when using it.
            </p>
          </LegalSection>

          <LegalSection title="4. Sharing of Information">
            <p>
              We do not sell or rent your personal enquiry information to third parties. We may
              share it with:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Our internal sales and support team, to process your request</li>
              <li>Payment processors, solely to complete a transaction you initiate</li>
              <li>Authorities, where required to comply with a legal obligation</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Cookies">
            <p>
              Our website may use basic cookies and similar technologies to remember your
              preferences and understand how visitors use the site. You can disable cookies
              through your browser settings; this may affect some site functionality.
            </p>
          </LegalSection>

          <LegalSection title="6. Data Security">
            <p>
              We take reasonable technical and organisational measures to protect the
              information you share with us from unauthorised access, alteration, disclosure or
              destruction. However, no method of transmission over the internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </LegalSection>

          <LegalSection title="7. Your Choices">
            <p>
              You may ask us to stop contacting you, correct your details, or remove your
              enquiry information from our records at any time by reaching out to us using the
              contact details below.
            </p>
          </LegalSection>

          <LegalSection title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with a revised &ldquo;Last updated&rdquo; date.
            </p>
          </LegalSection>

          <LegalSection title="9. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none pl-0 mt-3 space-y-1.5">
              <li>
                Phone / WhatsApp:{" "}
                <a href={siteConfig.phoneHref} className="text-teal-dark font-medium">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-teal-dark font-medium">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
