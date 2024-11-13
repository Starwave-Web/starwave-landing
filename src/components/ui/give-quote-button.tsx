"use client";

import React from "react";
import { Button } from "./button";
import { cn, scrollToSection } from "@/src/lib/utils";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import { useTranslations } from "next-intl";

const GiveQuoteButton = ({ id }: { id: string }) => {
  const t = useTranslations('prices.planCard')
  const handleOnClick = (section: string) => {
    sendToMixpanel("give_quote_clicked", { quoteId: id });
    scrollToSection(section);
  };
  return (
    <Button
      onClick={() => handleOnClick("contactUs")}
      className={cn(
        "py-[20px] px-[35px] h-[68px]",
        id === "premium"
          ? "bg-primary-grey text-black hover:bg-primary-grey/90"
          : "bg-primary-dark text-white"
      )}
    >
      {t('giveQuoteBtn')}
    </Button>
  );
};

export default GiveQuoteButton;
