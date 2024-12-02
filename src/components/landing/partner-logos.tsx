"use client";
import React from "react";
import SaasLogo from "@/src/components/icons/partner-icons/saas-logo";
import {ElectricianLogo, ElectricianLogoIntl} from "@/src/components/icons/partner-icons/electrician-logo";
import {GardenerLogo, GardenerLogoIntl} from "@/src/components/icons/partner-icons/gardener-logo";
// import BicycleServiceLogo from "@/src/components/icons/partner-icons/bicycle-service-logo";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Header from "../ui/header";
import EvogymLogo from "@/assets/images/evogym-logo.png";
import Image from "next/image";

const PartnerLogos = () => {
  const t = useTranslations("partnerLogos");
  const locale = useLocale()
  return (
    <section
      id="partnerLogos"
      className="w-full mt-[41px] mb-[77.6px] md:mt-[70px] md:mb-[138px] px-5 scroll-mt-28"
    >
      <div className="container mx-auto mb-20">
        <Header title={t("title")} description={t("description")} />
      </div>
      <div className="flex gap-20 min-[1605px]:gap-44 mx-auto justify-center flex-wrap">
        <Link target="_blank" href={t("saas")}>
          <div
            onClick={() => sendToMixpanel("partner_plumber_clicked")}
            className="cursor-pointer"
          >
            <SaasLogo className="" />
          </div>
        </Link>
        <Link target="_blank" href={t("electrician")}>
          <div
            onClick={() => sendToMixpanel("partner_electrician_clicked")}
            className="cursor-pointer"
          >
            {locale === "hu" ? <ElectricianLogo />: <ElectricianLogoIntl /> }
          </div>
        </Link>
        <Link target="_blank" href={t("gardener")}>
          <div
            onClick={() => sendToMixpanel("partner_gardener_clicked")}
            className="cursor-pointer"
          >
            {locale === "hu" ? <GardenerLogo /> : <GardenerLogoIntl/>}
          </div>
        </Link>
        <Link target="_blank" href={t("gym")}>
          <div
            onClick={() => sendToMixpanel("partner_gym_clicked")}
            className="cursor-pointer"
          >
            <Image
            className="w-auto h-[48px]"
              src={EvogymLogo}
              alt="evogym-image"
            />
          </div>
        </Link>
        {/* <div onClick={() => sendToMixpanel("partner_bicycle_clicked")} className="cursor-pointer">
          <BicycleServiceLogo />
        </div> */}
      </div>
    </section>
  );
};

export default PartnerLogos;
