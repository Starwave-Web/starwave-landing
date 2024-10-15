
import Header from "../ui/header";
import { Button } from "../ui/button";
import Link from "next/link";
import ResearchesCarousel from "../ui/researches-carousel";

const researches = [
  {
    description:
      "Mi a különbség egy Wordpress alapú és egy általunk készített weboldalban?  Mindez hogyan befolyásolja a betöltési időt, a felhasználók megtartását és a keresési rangsorolást. ",
    link: "#howWeWork",
  },
  {
    description:
      "Hogyan kell olyan weboldalt tervezni, amely magas konverziós rátát tud produkálni? Mik a buktatók? Mi az amire érdemes odafigyelni egy ilyen tervezési folyamatba belevágva?",
    link: "#howWeWork",
  },
  {
    description:
      "A Google Core Vitals mérőszámai megváltoztatják a webhelyek rangsorolását az optimalizált mobilélmény érdekében. Mit érdemes tundi a mérőszámok kapcsán? Hogyan tudjuk pozitív irányba változtatni őket?",
    link: "#howWeWork",
  },
];

const Researches = () => {
  return (
    <section id="researches" className="w-full mb-[45px] md:mb-[117px] scroll-mt-28">
      <div className="container mx-auto">
        <Header
          title="Blog"
          description={"Jobban elmélyülnél egy-egy témában a terület kapcsán? \nOlvass bele cikkjeinkbe!"}
        />
        <ResearchesCarousel researches={researches}/>
        <div className="rounded-[45px] px-[60px] py-[70px] bg-primary-dark mt-[80px] hidden lg:flex mx-5">
          {researches.map((research, index) => (
            <div key={research.link + index} className="flex ">
              <div className="flex flex-col justify-between gap-5 w-[210px] min-[1280px]:w-[286px]">
                <p className="text-p text-white">{research.description}</p>
                <Link href={research.link}>
                  <Button
                    className="bg-transparent text-outlaw text-primary-green border-none p-0"
                    variant="link"
                  >
                    Bővebben
                  </Button>
                </Link>
              </div>
              {index < researches.length - 1 && (
                <div className="h-full w-[1px] bg-white mx-16" />
              )}
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
};

export default Researches;
