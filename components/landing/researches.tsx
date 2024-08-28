import { describe } from "node:test";
import Header from "../ui/header";
import { Button } from "../ui/button";
import Link from "next/link";

const researches = [
  {
    description:
      "Egy közepes méretű e-kereskedelmi vállalat számára optimalizált landing page-t készítettünk, ami 25%-kal növelte a vásárlói konverziókat és 30%-kal csökkentette az oldalelhagyást.",
    link: "/",
  },
  {
    description:
      "Szolgáltatásalapú ügyfelünk új landing page-ével 40%-kal emeltük a leadek számát, valamint javítottuk a felhasználói élményt, ami növelte a weboldal látogatottságát és ügyféltartósságot.",
    link: "/",
  },
  {
    description:
      "Helyi vállalkozásunk számára készített landing page a keresőoptimalizálás révén 50%-kal növelte a helyi keresésekből származó látogatók számát és 35%-kal növelte a közvetlen ajánlások arányát.",
    link: "/",
  },
];

const Researches = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <Header
          title="Tanulmányok"
          description="Ismerd meg bizonyított digitális marketing módszereink valós alkalmazásait esettanulmányok segítségével"
        />
        <div className="rounded-[45px] px-[60px] py-[70px] bg-primary-dark mt-[80px] flex">
          {researches.map((research, index) => (
            <div key={research.link + index} className="flex">
              <div className="flex flex-col gap-5 w-[286px]">
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
