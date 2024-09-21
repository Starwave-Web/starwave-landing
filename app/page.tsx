import Footer from "@/components/footer/footer";
import CallToAction from "@/components/landing/call-to-action";
import ContactUs from "@/components/landing/contact-us";
import FAQ from "@/components/landing/faq";
import Hero from "@/components/landing/hero";
import HowWeWork from "@/components/landing/how-we-work";
import PartnerLogos from "@/components/landing/partner-logos";
import Prices from "@/components/landing/prices";
import Researches from "@/components/landing/researches";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/testimonials";

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
