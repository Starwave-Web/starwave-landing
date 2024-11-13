import Footer from "@/src/components/footer/footer";
import CallToAction from "@/src/components/landing/call-to-action";
import ContactUs from "@/src/components/landing/contact-us";
import FAQ from "@/src/components/landing/faq";
import Hero from "@/src/components/landing/hero";
import HowWeWork from "@/src/components/landing/how-we-work";
import PartnerLogos from "@/src/components/landing/partner-logos";
import Prices from "@/src/components/landing/prices";
import Researches from "@/src/components/landing/researches";
import Services from "@/src/components/landing/services";
import Testimonials from "@/src/components/landing/testimonials";

export default function Home() {
  return (
    <main>
      <Hero/>
      <PartnerLogos/>
      <Services/>
      <CallToAction/>
      <Researches/>
      <HowWeWork/>
      <Prices/>
      <Testimonials/>
      <ContactUs/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
