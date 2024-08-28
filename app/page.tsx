import CallToAction from "@/components/landing/call-to-action";
import Hero from "@/components/landing/hero";
import PartnerLogos from "@/components/landing/partner-logos";
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
    </main>
  );
}
