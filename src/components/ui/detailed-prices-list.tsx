"use client"

import { useState } from "react";
import MinusIcon from "../icons/minus-icon";
import PlusIcon from "../icons/plus-icon";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import { useTranslations } from "next-intl";

const DetailedPricesList = ({
}: {
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("prices.detailedPricesList")
  const onlineMarketing = useTranslations("prices.detailedPricesList.onlineMarketing")
  const webdev = useTranslations("prices.detailedPricesList.webdev")

  const handleOnClick = () => {
    setIsOpen(!isOpen)
    sendToMixpanel("detailed_prices_list_clicked", {action: isOpen ? "open": "close"})
  }
  
  return (
    <div className="flex flex-col w-full gap-[32px] mt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-h3-mobile md:text-h3 text-black w-5/6">{t("title")}</h2>
        {isOpen ? (
          <MinusIcon
            className="h-[20px] w-[30px]  md:h-[48px] md:w-[48px] cursor-pointer"
            onClick={handleOnClick}
          />
        ) : (
          <PlusIcon
            className="h-[30px] w-[30px]  md:h-[48px] md:w-[48px] cursor-pointer"
            onClick={handleOnClick}
          />
        )}
      </div>
      {isOpen && 
        <div>
            <h4 className="mb-4">
                {onlineMarketing("title")}
            </h4>
            {onlineMarketing.raw("prices").map((item: {serviceName: string, servicePrice: string}) => (
                <div className="pb-2">
                <div className="flex items-center justify-between px-5">
                    <p className="w-1/2">{item.serviceName}</p>
                    <p className="text-right">{item.servicePrice}</p>
                </div>
                <div className="w-full h-px bg-black mt-2"/>
            </div>
            ))}
            <p className="italic">*{onlineMarketing("campaignManagement")}</p>
             <h4 className="my-4">
                {webdev("title")}
            </h4>
            {webdev.raw("prices").map((item: {serviceName: string, servicePrice: string}) => (
                <div className="pb-2">
                <div className="flex items-center justify-between px-5">
                    <p className="w-1/2">{item.serviceName}</p>
                    <p className="text-right">{item.servicePrice}</p>
                </div>
                <div className="w-full h-px bg-black mt-2"/>
            </div>
            ))}
        </div>
      }
      {!isOpen && <div className="w-full h-px bg-black"/>}
    </div>
  );
};

export default DetailedPricesList;
