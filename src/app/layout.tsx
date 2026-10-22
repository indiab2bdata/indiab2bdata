import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { ModalProvider } from "@/components/layout/ModalContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ContactModal } from "@/components/layout/ContactModal";
import { Toaster } from "sonner";
import { JsonLd } from "@/components/layout/JsonLd";
import { getCityEnquiryPages } from "@/content";
import { GA_INIT, GA_SRC } from "@/lib/analytics";
import { organizationJsonLd, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo/jsonld";
import { rootMetadata } from "@/lib/seo/metadata";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bgsoft pb-16 text-ink md:pb-0" suppressHydrationWarning>
        <JsonLd data={[organizationJsonLd, localBusinessJsonLd, websiteJsonLd]} />
        <ModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
          <MobileCtaBar />
          <ContactModal cityPages={getCityEnquiryPages()} />
          <Toaster position="top-center" richColors closeButton toastOptions={{ style: { fontFamily: "var(--font-montserrat), sans-serif" } }} />
        </ModalProvider>
      </body>
      {/* lazyOnload: analytics loads after the page is interactive and never blocks rendering (see lib/analytics.ts). */}
      <Script id="ga-init" strategy="lazyOnload">
        {GA_INIT}
      </Script>
      <Script src={GA_SRC} strategy="lazyOnload" />
    </html>
  );
}
