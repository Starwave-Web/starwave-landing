"use client";
import React from "react";
import { Button } from "./button";
import { scrollToSection } from "@/src/lib/utils";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import { useTranslations } from "next-intl";

const GoToReferencesButton = () => {
  const t = useTranslations('hero')

  
  const onClickHandler = (section: string) => {
    sendToMixpanel("hero_scroll_to_references");
    scrollToSection(section);
  };
  return (
    <Button
      onClick={() => onClickHandler("partnerLogos")}
      variant="outline"
      className="h-[64px] sm:w-[187px] w-full "
    >
      {t("referenceButton")}
    </Button>
  );
};

export default GoToReferencesButton;
