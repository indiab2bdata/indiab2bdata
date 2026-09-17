import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ModalProvider } from "@/components/modal-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { ContactModal } from "@/components/contact-modal";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | IndiaB2BData.com",
  },
  description: siteConfig.defaultDescription,
  verification: {
    google: "l8QOpKqoC429_x9cCAOktejf255UdfNx7oXbHJnHYUk",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bgsoft text-ink">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
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
