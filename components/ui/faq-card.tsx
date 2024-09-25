"use client"

import { useState } from "react";
import MinusIcon from "../icons/minus-icon";
import PlusIcon from "../icons/plus-icon";

const FAQCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-full gap-[32px]">
      <div className="flex items-center justify-between">
        <h2 className="text-h2-mobile md:text-h2 text-black w-5/6">{question}</h2>
        {isOpen ? (
          <MinusIcon
            className="h-[30px] w-[30px]  md:h-[58px] md:w-[58px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <PlusIcon
            className="h-[30px] w-[30px]  md:h-[58px] md:w-[58px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      {isOpen && <p className="text-p-mobile md:text-p text-black">{answer}</p>}
      <div className="w-full h-px bg-black"/>
    </div>
  );
};

export default FAQCard;
