"use client";
import React from "react";
import { Button } from "./button";
import { scrollToSection } from "@/src/lib/utils";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import { useTranslations } from "next-intl";

const GoToFAQButton = () => {
  const t = useTranslations('prices')

  
  const onClickHandler = (section: string) => {
    sendToMixpanel("prices_scroll_to_faq");
    scrollToSection(section);
  };
  return (
    <Button
      onClick={() => onClickHandler("FAQ")}
      variant="link"
      className="text-primary-green"
    >
      {t("ctaFAQBtnText")}
    </Button>
  );
};

export default GoToFAQButton;
