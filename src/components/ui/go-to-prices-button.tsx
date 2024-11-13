"use client";
import React from "react";
import { Button } from "./button";
import { scrollToSection } from "@/src/lib/utils";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import { useTranslations } from "next-intl";

const GoToPricesButton = () => {
  const t = useTranslations('hero')

  
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
      {t('ctaButton')}
    </Button>
  );
};

export default GoToPricesButton;
