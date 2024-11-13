"use client";

import { scrollToSection } from "@/src/lib/utils";
import { Button } from "./button";
import sendToMixpanel from "@/src/lib/sendToMixpanel";

const ContactUsButton = ({translations}: {translations: string}) => {

  const handleOnClick = (section:string) => {
    sendToMixpanel("cta_btn_clicked")
    scrollToSection(section)
  }
  return (
    <Button
      onClick={() => handleOnClick("contactUs")}
      className="py-[20px] px-[35px] h-[68px] md:w-auto w-full"
    >
      {translations}
    </Button>
  );
};

export default ContactUsButton;
