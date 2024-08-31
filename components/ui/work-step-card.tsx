"use client";

import MinusIcon from "@/components/icons/minus-icon";
import PlusIcon from "@/components/icons/plus-icon";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
  return (
    <div className="w-full rounded-[45px] bg-black border border-black pb-[3px]">
      <div
        className={cn(
          "w-full rounded-[45px] py-[41px] px-[60px] flex flex-col items-center",
          isOpen ? "bg-primary-green" : "bg-primary-grey"
        )}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-[25px] items-center">
            <h2 className="text-h1 text-black">{stepNr}</h2>
            <h3 className="text-h3 text-black">{title}</h3>
          </div>
          {isOpen ? (
            <MinusIcon onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <PlusIcon onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
        {isOpen && (
          <div>
            <div className="w-full h-[1px] bg-black my-[30px]"/>
            <p className="text-p text-black">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkStepCard;
