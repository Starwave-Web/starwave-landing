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
    title: ["CRO vezérelt", "Web Design"],
    illustration: Magnifier,
    description:
      "A CRO vezérelt web design célja, hogy maximalizálja a weboldal teljesítményét és a konverziókat. \n\nNem csupán esztétikai szempontok alapján tervezünk, hanem adatvezérelt döntésekkel optimalizáljuk az oldal minden elemét. \n\nAz oldal struktúráját, a CTA gombokat és a navigációt \nmind úgy alakítjuk ki, hogy növelje a felhasználói élményt és \na konverziós arányt.",
    variant: "grey",
  },
  {
    id: 2,
    title: ["Landing Page", "fejlesztés"],
    illustration: Illustration2,
    description:
      "Egy jól megtervezett landing page a sikeres online kampány alapja. \nA fejlesztés során a cél, hogy a látogatókat konkrét akcióra ösztönözzük. \n\nA cím, a képek, a szöveg és a CTA gombok mind a felhasználói figyelmet a konverzióra irányítják. \n\nAz optimalizált dizájn és a pszichológiai elemek kombinációja segíti a célok elérését.",
    variant: "green",
  },
  {
    id: 3,
    title: ["Landing Page", "üzemeltetés"],
    illustration: Illustration3,
    description:
      "A landing page üzemeltetése nem ér véget a fejlesztéssel; \nfolyamatos karbantartás és optimalizálás szükséges a hosszú távú sikerhez. \n\nAz oldal teljesítményének rendszeres monitorozása biztosítja, hogy \na konverziós arány mindig a lehető legmagasabb legyen. \n\nA/B teszteléssel és felhasználói viselkedés elemzésével finomítjuk az oldalt.",
    variant: "green",
  },
  {
    id: 4,
    title: ["CRO Analitika és", "Konverzió követés"],
    illustration: Illustration4,
    description:
      "Az analitika és a konverzió követés kulcsfontosságú elemei minden online marketingstratégiának. Segítségükkel pontos képet kapunk a kampányaink teljesítményéről. \n\nNyomon követjük a felhasználók viselkedését, az oldalforgalmat és a konverziós mutatókat. \n\nAz adatok alapján hozzuk meg a döntéseket, amelyek javítják a ROI-t és növelik a konverziókat.",
    variant: "dark",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full scroll-mt-28">
      <Header
        title="Szolgáltatásaink"
        description="Cégünknél számos szolgáltatást kínálunk, amelyek segítenek a vállalkozások online növekedésében és sikerében. Ezek a szolgáltatások a következőek:"
      />
      <div className="container mx-auto flex flex-wrap gap-10 mt-10 md:mt-20 mb-[70px] md:mb-[100px] px-5">
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
