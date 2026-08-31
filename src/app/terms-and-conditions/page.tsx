import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalSection } from "@/components/legal-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions for using IndiaB2BData.com and purchasing our verified B2B data products.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated: 26 August 2026"
        compact
      />

      <section className="py-16 md:py-24 max-w-3xl mx-auto px-5 md:px-8">
        <div className="bg-white rounded-2xl border border-slate-100 p-7 md:p-12 space-y-9 text-sm md:text-base text-navy/85 leading-relaxed">
          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the
            IndiaB2BData.com website and your purchase of any data products or services from us.
            By accessing this website, requesting a sample, or placing an order, you agree to be
            bound by these Terms.
          </p>

          <LegalSection title="1. Our Services">
            <p>
              IndiaB2BData.com provides verified B2B contact databases — including mobile
              numbers, email addresses, GST/company records and industry-wise leads — compiled
              from publicly available and permission-based sources across India. Sample records
              and full data lists are delivered digitally, typically as Excel/CSV files, over
              email or WhatsApp.
            </p>
          </LegalSection>

          <LegalSection title="2. Permitted Use of Data">
            <p>
              Data purchased from us is licensed for your own legitimate B2B sales and marketing
              use only. You agree that you will:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Not resell, sub-license, rent or redistribute the data to any third party</li>
              <li>
                Comply with applicable Indian laws, including TRAI regulations and DND/NDNC
                guidelines, when contacting individuals in the data
              </li>
              <li>Use the data only for the purpose for which it was purchased</li>
              <li>Not use the data for any unlawful, fraudulent, harassing or spam-related activity</li>
            </ul>
            <p className="mt-3">
              We reserve the right to refuse service to any party we reasonably believe intends
              to misuse the data.
            </p>
          </LegalSection>

          <LegalSection title="3. Free Samples">
            <p>
              We may provide a limited number of free sample records (typically 15–20) on
              request, to allow you to evaluate data quality before purchase. Samples are for
              evaluation purposes only and are subject to the same permitted-use restrictions as
              purchased data.
            </p>
          </LegalSection>

          <LegalSection title="4. Orders, Pricing & Payment">
            <p>
              Prices listed on our website are starting/indicative prices; final pricing depends
              on the filters, volume and customisation you request, and will be confirmed with
              you before payment. Orders are confirmed only after payment is received in full,
              unless otherwise agreed in writing. Package details (record count, coverage,
              refresh policy) are as described on our Pricing section at the time of order.
            </p>
          </LegalSection>

          <LegalSection title="5. Delivery">
            <p>
              We aim to deliver most orders within 2–6 working hours of confirmed payment,
              though delivery times may vary based on the size and complexity of your
              requirement. Delivery timelines mentioned on the website or by our team are
              estimates and not guaranteed deadlines.
            </p>
          </LegalSection>

          <LegalSection title="6. Data Accuracy & Refresh">
            <p>
              While we take reasonable steps to verify and deduplicate records before delivery,
              contact data (especially mobile numbers) can change or become inactive over time
              and we cannot guarantee 100% accuracy at the time of use. Business and Enterprise
              packages include periodic refreshes as described on our Pricing section; refresh
              terms for other packages, if any, will be communicated separately.
            </p>
          </LegalSection>

          <LegalSection title="7. Refunds & Cancellations">
            <p>
              Because data products are delivered digitally and cannot be &ldquo;returned,&rdquo;
              refunds are generally not available once a list has been delivered. If you believe
              the data delivered materially does not match what was agreed (e.g. wrong filters
              applied), contact us within 48 hours of delivery and we will investigate and, where
              appropriate, correct, replace or issue a partial refund at our discretion.
            </p>
          </LegalSection>

          <LegalSection title="8. Limitation of Liability">
            <p>
              IndiaB2BData.com shall not be liable for any indirect, incidental or consequential
              loss arising from your use of our data or website, including loss of business,
              revenue or goodwill. Our total liability for any claim relating to a purchased data
              product shall not exceed the amount you paid for that specific order.
            </p>
          </LegalSection>

          <LegalSection title="9. Intellectual Property">
            <p>
              All content on this website — including text, design, graphics and logos — is the
              property of IndiaB2BData.com and may not be copied or reused without permission.
              This does not apply to the data records you purchase, which are licensed to you as
              described in Section 2.
            </p>
          </LegalSection>

          <LegalSection title="10. Changes to These Terms">
            <p>
              We may revise these Terms from time to time. The updated version will be posted on
              this page with a revised &ldquo;Last updated&rdquo; date, and continued use of our
              website or services after changes constitutes acceptance of the revised Terms.
            </p>
          </LegalSection>

          <LegalSection title="11. Governing Law">
            <p>
              These Terms are governed by the laws of India, and any disputes arising from them
              shall be subject to the jurisdiction of the courts in India.
            </p>
          </LegalSection>

          <LegalSection title="12. Contact Us">
            <p>For any questions about these Terms, please contact us:</p>
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
