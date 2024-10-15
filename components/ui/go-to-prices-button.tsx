"use client";
import React from "react";
import { Button } from "./button";
import { scrollToSection } from "@/lib/utils";
import sendToMixpanel from "@/lib/sendToMixpanel";

const GoToPricesButton = () => {
  const onClickHandler = (section: string) => {
    sendToMixpanel("hero_scroll_to_prices");
    scrollToSection(section);
  };
  return (
    <Button
      onClick={() => onClickHandler("prices")}
      variant="default"
      className="h-[64px] sm:w-[287px] w-full "
    >
      Szolgáltatások és árak
    </Button>
  );
};

export default GoToPricesButton;
