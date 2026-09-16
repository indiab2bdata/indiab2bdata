import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ModalProvider } from "@/components/modal-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { ContactModal } from "@/components/contact-modal";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

const interTight = Inter_Tight({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "IndiaB2BData.com | Verified B2B Business Data Across India",
    template: "%s | IndiaB2BData.com",
  },
  description:
    "IndiaB2BData.com provides verified, fresh B2B mobile number, email and company databases across 700+ Indian cities. Boost your sales & marketing with genuine data.",
  verification: {
    google: "l8QOpKqoC429_x9cCAOktejf255UdfNx7oXbHJnHYUk",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Verified B2B mobile number, email and company databases across 700+ Indian cities and 500+ industries.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bgsoft text-ink">
        <JsonLd data={organizationJsonLd} />
        <ModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
          <ContactModal />
        </ModalProvider>
      </body>
      <GoogleAnalytics gaId="G-H4WEQ2BRZP" />
    </html>
  );
}
