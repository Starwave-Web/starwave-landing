import React from "react";
import PlumberLogo from "@/components/icons/partner-icons/plumber-logo";
import ElectricianLogo from "@/components/icons/partner-icons/electrician-logo";
import GardenerLogo from "@/components/icons/partner-icons/gardener-logo";
import BicycleServiceLogo from "@/components/icons/partner-icons/bicycle-service-logo";

const PartnerLogos = () => {
  return (
    <section className="w-full mt-[70px] mb-[138px]">
      <div className="flex gap-44 mx-auto justify-center">
        <PlumberLogo />
        <ElectricianLogo />
        <GardenerLogo />
        <BicycleServiceLogo />
      </div>
    </section>
  );
};

export default PartnerLogos;
