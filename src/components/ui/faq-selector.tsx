import sendToMixpanel from "@/src/lib/sendToMixpanel";
import { type Dispatch, type SetStateAction } from "react";

type FAQOptions = { id: string; title: string }[];

const FAQSelector = ({
  options,
  activeId,
  setActiveId,
}: {
  options: FAQOptions;
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
}) => {
  const setActiveIdWithMixpanel = (optionId: string) => {
    sendToMixpanel("faq_selector_clicked", { optionId: optionId });
    setActiveId(optionId);
  };
  return (
    <div className="bg-primary-grey gap-1 sm:gap-1.5 rounded-[16px] sm:rounded-[20px] flex items-center p-1  sm:p-1.5 w-fit mx-auto sm:mx-0 mb-10 sm:mb-[54px]">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => setActiveIdWithMixpanel(option.id)}
          data-selected={activeId === option.id}
          className="rounded-[12px] sm:rounded-[14px] data-[selected=true]:bg-black data-[selected=true]:text-white text-black bg-transparent py-[13px] md:py-5 px-[23px] sm:px-[35px]"
        >
          {option.title}
        </button>
      ))}
    </div>
  );
};

export default FAQSelector;
