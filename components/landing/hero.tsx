import HeroIllustration from "../icons/hero-illustration";

import GoToPricesButton from "../ui/go-to-prices-button";

const Hero = () => {
  return (
    <section id="hero" className="w-full scroll-mt-28">
      <div className="container flex justify-between gap-20 mx-auto">
        <div className="flex flex-col gap-[35px] px-5 lg:px-0 lg:pl-5">
          <h1 className="text-h1-mobile md:text-h1">
            Hozd ki a cégedben rejlő potenciált.
          </h1>
          <div className="w-auto h-auto lg:hidden">
            <HeroIllustration className="w-auto h-auto" />
          </div>
          <h5 className="text-p-mobile md:text-[20px]/[28px]">
            A Starwave csapata gyors és magas konverziós rátájú weboldalakat és
            landing page-eket készít, kis- és középvállalkozások számára. Egyedi
            kód, valós eredmények, havi 15 ezer Ft-tól
          </h5>
          <GoToPricesButton />
        </div>
        <div className="hidden lg:block pr-5">
          <HeroIllustration className="w-[601px] h-[515px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
