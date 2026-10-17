  import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ModalProvider } from "@/components/modal-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { ContactModal } from "@/components/contact-modal";
import { Toaster } from "sonner";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const GA_ID = "G-H4WEQ2BRZP";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | IndiaB2BData.com",
  },
  description: siteConfig.defaultDescription,
  // No root canonical: every page sets its own via pageMetadata(), and a root default of "/"
  // would silently canonicalise any page that forgets to override it to the homepage.
  verification: {
    google: "l8QOpKqoC429_x9cCAOktejf255UdfNx7oXbHJnHYUk",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bgsoft text-ink" suppressHydrationWarning>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <ModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
          <ContactModal />
          <Toaster position="top-center" richColors closeButton toastOptions={{ style: { fontFamily: "var(--font-montserrat), sans-serif" } }} />
        </ModalProvider>
      </body>
      {/* lazyOnload: analytics loads after the page is interactive and never blocks rendering (no preload in <head>). */}
      <Script id="ga-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "${GA_ID}");`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
    </html>
  );
}
