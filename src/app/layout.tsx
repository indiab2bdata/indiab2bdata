import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { ModalProvider } from "@/components/layout/ModalContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ContactModal } from "@/components/layout/ContactModal";
import { Toaster } from "sonner";
import { GoogleTagManager } from "@next/third-parties/google";
import { JsonLd } from "@/components/layout/JsonLd";
import { getCityEnquiryPages } from "@/content";
import { GA_INIT } from "@/lib/analytics";
import { organizationJsonLd, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo/jsonld";
import { rootMetadata } from "@/lib/seo/metadata";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = rootMetadata;

const gtmId = process.env.GOOGLE_TAG_MANAGER_ID?.trim();
if (gtmId && !/^GTM-[A-Z0-9]+$/.test(gtmId)) {
  throw new Error("GOOGLE_TAG_MANAGER_ID must be a real GTM container ID beginning with GTM-.");
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        {/* Inline in the server HTML so SEO checkers detect GA; gtag.js itself is still fetched on first interaction or 5s after load (see lib/analytics.ts). */}
        <script id="ga-init" dangerouslySetInnerHTML={{ __html: GA_INIT }} />
      </head>
      <body className="min-h-full flex flex-col bg-bgsoft pb-16 text-ink md:pb-0" suppressHydrationWarning>
        {gtmId && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" className="gtm-fallback" title="Google Tag Manager" />
          </noscript>
        )}
        <JsonLd data={[organizationJsonLd, localBusinessJsonLd, websiteJsonLd]} />
        <ModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
          <MobileCtaBar />
          <ContactModal cityPages={getCityEnquiryPages()} />
          <Toaster position="top-center" richColors closeButton toastOptions={{ className: "site-toast" }} />
        </ModalProvider>
      </body>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
    </html>
  );
}
