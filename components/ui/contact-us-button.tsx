"use client";

import { scrollToSection } from "@/lib/utils";
import { Button } from "./button";

const ContactUsButton = () => {
  return (
    <Button
      onClick={() => scrollToSection("contactUs")}
      className="py-[20px] px-[35px] h-[68px] md:w-auto w-full"
    >
      Kapcsolatfelvétel
    </Button>
  );
};

export default ContactUsButton;
