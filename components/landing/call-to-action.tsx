import React from "react";
import { Button } from "@/components/ui/button";
import CTAIllustration from "../icons/cta-illustartion";

const CallToAction = () => {
  return (
    <section className="w-full mb-[45px] md:mb-[140px] ">
      <div className="py-[23.5px] container mx-auto relative px-5">
        <div className="bg-primary-grey rounded-[45px] container px-[50px] md:px-[60px] flex items-center justify-between mx-auto">
          <div className="flex flex-col items-start gap-[26px] py-12 max-w-[500px]">
            <h3 className="text-h3-mobile md:text-h3">Dolgozzunk együtt!</h3>
            <p className="text-p-mobile md:text-p">
              Vedd fel velünk még ma a kapcsolatot, ha többet szeretnél megtudni
              arról, hogy szolgáltatásaink hogyan segíthetnek a vállalkozásodnak
              az online növekedésben és sikerben.
            </p>
            <Button className="py-[20px] px-[35px] h-[68px] md:w-auto w-full">Kapcsolatfelvétel</Button>
          </div>
          <div>
            <CTAIllustration className="absolute -top-5 right-14 hidden lg:block"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
