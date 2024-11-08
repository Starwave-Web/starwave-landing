"use client"
import React from "react";
import PlumberLogo from "@/src/components/icons/partner-icons/plumber-logo";
import ElectricianLogo from "@/src/components/icons/partner-icons/electrician-logo";
import GardenerLogo from "@/src/components/icons/partner-icons/gardener-logo";
import BicycleServiceLogo from "@/src/components/icons/partner-icons/bicycle-service-logo";
import sendToMixpanel from "@/src/lib/sendToMixpanel";

const PartnerLogos = () => {
  return (
    <section id="partnerLogos" className="w-full mt-[41px] mb-[77.6px] md:mt-[70px] md:mb-[138px] px-5 scroll-mt-28">
      <div className="flex gap-20 min-[1605px]:gap-44 mx-auto justify-center flex-wrap">
        <div onClick={() => sendToMixpanel("partner_plumber_clicked")}  className="cursor-pointer">
          <PlumberLogo />
        </div>
        <div onClick={() => sendToMixpanel("partner_electrician_clicked")} className="cursor-pointer">
          <ElectricianLogo />
        </div>
        <div onClick={() => sendToMixpanel("partner_gardener_clicked")} className="cursor-pointer">
          <GardenerLogo />
        </div>
        <div onClick={() => sendToMixpanel("partner_bicycle_clicked")} className="cursor-pointer">
          <BicycleServiceLogo />
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
