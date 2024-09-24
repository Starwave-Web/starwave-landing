import React from "react";
import PlumberLogo from "@/components/icons/partner-icons/plumber-logo";
import ElectricianLogo from "@/components/icons/partner-icons/electrician-logo";
import GardenerLogo from "@/components/icons/partner-icons/gardener-logo";
import BicycleServiceLogo from "@/components/icons/partner-icons/bicycle-service-logo";

const PartnerLogos = () => {
  return (
    <section className="w-full mt-[41px] mb-[77.6px] md:mt-[70px] md:mb-[138px] px-5">
      <div className="flex gap-20 min-[1605px]:gap-44 mx-auto justify-center flex-wrap">
        <div>
          <PlumberLogo />
        </div>
        <div>
          <ElectricianLogo />
        </div>
        <div>
          <GardenerLogo />
        </div>
        <div>
          <BicycleServiceLogo />
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
