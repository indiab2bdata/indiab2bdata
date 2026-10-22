  import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ModalProvider } from "@/components/layout/ModalContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { ContactModal } from "@/components/layout/ContactModal";
import { Toaster } from "sonner";
import { JsonLd } from "@/components/layout/JsonLd";
import { siteConfig } from "@/config/site";
import { organizationJsonLd, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { cityPath, getAllCities } from "@/content";

const cityEnquiryPages = getAllCities().map((city) => ({
  href: cityPath(city),
  city: city.city,
  state: city.state,
}));

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
      <body className="min-h-full flex flex-col bg-bgsoft pb-16 text-ink md:pb-0" suppressHydrationWarning>
        <JsonLd data={[organizationJsonLd, localBusinessJsonLd, websiteJsonLd]} />
        <ModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
          <MobileCtaBar />
          <ContactModal cityPages={cityEnquiryPages} />
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
