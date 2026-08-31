import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Products } from "@/components/sections/products";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Products />
      <WhyUs />
      <Process />
      <Pricing />
      <Testimonials />
      <Faq />
      <ContactCta />
    </>
  );
}
