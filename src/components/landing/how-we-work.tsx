import Header from "@/src/components/ui/header";
import WorkStepCard from "../ui/work-step-card";
import { useTranslations } from "next-intl";

// const workSteps = [
//   {
//     stepNr: "01",
//     title: "Kick off & Igényfelmérés",
//     description:
//       "A projekt elindítása során közösen meghatározzuk a célokat és követelményeket egy kérdőív segítségével, majd a kreatív csapat megalkotja a webdesign tervet, amely teljes mértékben igazodik az igényeidhez.",
//   },
//   {
//     stepNr: "02",
//     title: "Web Design elfogadás",
//     description:
//       "A design bemutatását követően a visszajelzéseid alapján véglegesítjük a terveket. Célunk, hogy a végeredmény minden szempontból megfeleljen az elképzeléseknek.",
//   },
//   {
//     stepNr: "03",
//     title: "Implementáció",
//     description:
//       "A végleges design terv alapján megkezdődik a weboldal fejlesztése és implementációja.",
//   },
//   {
//     stepNr: "04",
//     title: "Tesztelés",
//     description:
//       "Az implementáció után alapos tesztelés következik, mely során minden funkciót és elemet ellenőrzünk. A cél, hogy a weboldal hibamentesen működjön, és minden technikai követelménynek megfeleljen. A végleges átadás előtt küldünk egy demo linket ahol még utoljára véleményezheted.",
//   },
//   {
//     stepNr: "05",
//     title: "Termék átadás",
//     description:
//       "A sikeres tesztelést követően átadjuk a kész weboldalt. Ezzel a lépéssel zárul a projekt fejlesztési szakasza.",
//   },
//   {
//     stepNr: "06",
//     title: "Üzemeltetés",
//     description:
//       "Az átadott weboldal üzemeltetése során monitorozzuk a teljesítményt és biztosítjuk a szükséges karbantartásokat. Célunk, hogy az oldal mindig naprakész, gyors és felhasználóbarát legyen.",
//   },
// ];

const HowWeWork = () => {
  const t = useTranslations("howWeWork");

  return (
    <section
      id="howWeWork"
      className="w-full mb-[76px] md:mb-[140px] scroll-mt-28"
    >
      <div className="container flex flex-col gap-[35px] md:gap-20 mx-auto">
        <Header
          titleId="howwework"
          title={"Hogyan dolgozunk?"}
          description={t("description")}
        />
        <div className="flex flex-col gap-5 md:gap-[30px] px-5">
          {t
            .raw("workSteps")
            .map(
              (workStep: {
                stepNr: string;
                title: string;
                description: string;
              }) => (
                <WorkStepCard
                  key={workStep.stepNr}
                  stepNr={workStep.stepNr}
                  title={workStep.title}
                  description={workStep.description}
                />
              )
            )}
          {/* {workSteps.map((workStep) => <WorkStepCard key={workStep.stepNr} stepNr={workStep.stepNr} title={workStep.title} description={workStep.description}/>)} */}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
