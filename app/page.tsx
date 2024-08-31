import CallToAction from "@/components/landing/call-to-action";
import Hero from "@/components/landing/hero";
import HowWeWork from "@/components/landing/how-we-work";
import PartnerLogos from "@/components/landing/partner-logos";
import Prices from "@/components/landing/prices";
import Researches from "@/components/landing/researches";
import Services from "@/components/landing/services";

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
    </main>
  );
}
