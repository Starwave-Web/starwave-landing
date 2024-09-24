import { Button } from "@/components/ui/button";
import HeroIllustration from "../icons/hero-illustration";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="container flex justify-between gap-20 mx-auto">
        <div className="flex flex-col gap-[35px] px-5 lg:px-0 lg:pl-5">
          <h1 className="text-h1-mobile md:text-h1">Hozd ki a cégedben rejlő potenciált.</h1>
          <div className="w-auto h-auto lg:hidden">
            <HeroIllustration className="w-auto h-auto" />
          </div>
          <h5 className="text-p-mobile md:text-[20px]/[28px]">
            A Starwave csapata lenyűgöző és eredményorientált landing page-eket
            készít. Skálázd a céged online jelenlétét és konverziós arányát
            kreatív és felhasználóbarát megoldásainkkal!
          </h5>
          <Button variant="default" className="h-[64px] sm:w-[287px] w-full ">
            Szolgáltatások és árak
          </Button>
        </div>
        <div className="hidden lg:block pr-5">
          <HeroIllustration className="w-[601px] h-[515px]"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
