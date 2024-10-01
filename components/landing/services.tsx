import Header from "@/components/ui/header";

import Magnifier from "@/assets/images/magnifier.png";
import Illustration2 from "@/assets/images/illustration2.png";
import Illustration3 from "@/assets/images/illustration3.png";
import Illustration4 from "@/assets/images/illustration4.png";
import ServiceCard, { type ServiceCardVariants } from "../ui/service-card";
import { type StaticImageData } from "next/image";

type ServiceType = {
  id: number;
  title: [string, string];
  illustration: StaticImageData;
  description: string;
  variant: ServiceCardVariants;
};

const services: ServiceType[] = [
  {
    id: 1,
    title: ["Mobile First ", "Design"],
    illustration: Magnifier,
    description:
      "Elsőként a mobil eszközökre építjük a webhelyed, így a kód clean és optimalizált lesz, minden fölösleges sallang nélkül. \n\nEz nemcsak gyorsítja a webhelyet, de ez az első lépés a reszponzivitás felé.",
    variant: "grey",
  },
  {
    id: 2,
    title: ["Teljesen", "reszponzív"],
    illustration: Illustration2,
    description:
      "A webhelyed minden képernyőmérethez alkalmazkodni fog – legyen az mobil, tablet vagy asztali számítógép. \n\nBárhonnan is látogatják meg, mindig tökéletesen mutat majd.",
    variant: "green",
  },
  {
    id: 3,
    title: ["Optimalizált", "oldalsebesség"],
    illustration: Illustration3,
    description:
      "Ha a webhelyed 3 másodpercnél tovább tölt be, akár a látogatóid felét is elveszítheted. \n\nMi úgy készítjük el az oldaladat, hogy optimális esetben 1 másodperc alatt betöltődjön, így senki sem fog türelmetlenül távozni.",
    variant: "green",
  },
  {
    id: 4,
    title: ["Egyedi kód", "és design"],
    illustration: Illustration4,
    description:
      "Minden weboldalt egyedileg, kézzel írunk meg, nincsenek sablonok vagy oldalépítők. \n\nEz az, ami megkülönböztet minket – külön figyelmet fordítunk arra, hogy a lehető legjobb eredményt érjük el, ami a weboldalad indulása után is tükröződni fog az online jelenléteden.",
    variant: "dark",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full scroll-mt-28">
      <Header
        title="A termékről"
        description="Minden egyes sor kódot kézzel írunk, hogy a legjobb teljesítményt biztosítsuk, és a Google-t boldoggá tegyük. Ez segít több ügyfelet hozni a webhelyedre, és ezáltal több bevételt hoz a vállalkozásodnak."
      />
      <div className="container mx-auto flex fle-row flex-wrap justify-center gap-10 mt-10 md:mt-20 mb-[70px] md:mb-[100px] px-5">
        {services.map((service, index) => (
          <ServiceCard
            id={service.id}
            key={service.title[0] + service.title[1] + index}
            title={service.title}
            illustration={service.illustration}
            description={service.description}
            variant={service.variant}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
