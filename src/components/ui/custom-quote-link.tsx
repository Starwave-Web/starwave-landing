"use client";
import React from "react";
import TopRightArrow from "../icons/top-right-arrow";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CustomQuoteLink = () => {
  const t = useTranslations('prices')
  return (
    <Link
      onClick={() => sendToMixpanel("custom_mobile_mailto_clicked")}
      className="flex gap-[15px] items-center justify-center"
      href="mailto:info@starwaveweb.com"
    >
      <h4 className="text-outlaw text-black">{t('customQuoteBtn')}</h4>
      <TopRightArrow className="fill-black w-[17.32px] h-[10px]" />
    </Link>
  );
};

export default CustomQuoteLink;
