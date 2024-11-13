"use client";

import MinusIcon from "@/src/components/icons/minus-icon";
import PlusIcon from "@/src/components/icons/plus-icon";
import { useState } from "react";
import { cn } from "@/src/lib/utils";
import sendToMixpanel from "@/src/lib/sendToMixpanel";

const WorkStepCard = ({
  stepNr,
  title,
  description,
}: {
  stepNr: string;
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen)
    sendToMixpanel("how_we_work_card_clicked", {action: isOpen ? "open": "close", cardTitle: title})
  }

  return (
    <div className="w-full rounded-[45px] bg-black border border-black pb-[3px]">
      <div
        className={cn(
          "w-full rounded-[45px] py-[30px] px-[30px] md:py-[41px] md:px-[60px] flex flex-col items-center",
          isOpen ? "bg-primary-green" : "bg-primary-grey"
        )}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-[25px] items-center w-5/6">
            <h2 className="text-h3 md:text-h1 text-black">{stepNr}</h2>
            <h3 className="text-h4-mobile md:text-h3 text-black">{title}</h3>
          </div>
          {isOpen ? (
            <MinusIcon
              className="h-[30px] w-[30px]  md:h-[58px] md:w-[58px] cursor-pointer"
              onClick={handleOnClick}
            />
          ) : (
            <PlusIcon className="h-[30px] w-[30px]  md:h-[58px] md:w-[58px] cursor-pointer" onClick={handleOnClick} />
          )}
        </div>
        {isOpen && (
          <div>
            <div className="w-full h-[1px] bg-black my-[30px]" />
            <p className="text-p-mobile md:text-p text-black">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkStepCard;
