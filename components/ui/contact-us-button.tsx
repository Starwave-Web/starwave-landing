"use client";

import { scrollToSection } from "@/lib/utils";
import { Button } from "./button";
import sendToMixpanel from "@/lib/sendToMixpanel";

const ContactUsButton = () => {

  const handleOnClick = (section:string) => {
    sendToMixpanel("cta_btn_clicked")
    scrollToSection(section)
  }
  return (
    <Button
      onClick={() => handleOnClick("contactUs")}
      className="py-[20px] px-[35px] h-[68px] md:w-auto w-full"
    >
      Kapcsolatfelvétel
    </Button>
  );
};

export default ContactUsButton;
