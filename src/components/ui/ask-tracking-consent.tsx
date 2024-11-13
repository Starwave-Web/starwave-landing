"use client";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { useTranslations } from "next-intl";

const AskTrackingConsent = () => {
  const [consentGiven, setConsentGiven] = useState(false);
  const t = useTranslations("consent");

  useEffect(() => {
    // Check if user consent is stored in cookies or localStorage
    const consent = localStorage.getItem("trackingConsent");

    if (consent === "true") {
      setConsentGiven(true);
      sendToMixpanel("page_view");
    }
  }, []);

  const handleConsent = (value: boolean) => {
    // Save consent in localStorage and start tracking
    localStorage.setItem("trackingConsent", value.toString());
    setConsentGiven(true);
    sendToMixpanel("page_view");
  };
  return (
    !consentGiven && (
      <div className="w-[300px] h-auto rounded-[30px] bg-primary-grey sticky bottom-2 left-[85%] p-6 flex flex-col gap-3 justify-center border border-black mr-2">
        <p className="text-h4-mobile">
        {t("message")}
        </p>
        <div className="flex items-center gap-2 justify-between">
          <Button variant="default" onClick={() => handleConsent(true)}>
          {t("accept")}
          </Button>
          <Button className="bg-red-600 hover:bg-red-600/90" variant="default" onClick={() => handleConsent(false)}>
          {t("reject")}
          </Button>
        </div>
      </div>
    )
  );
};

export default AskTrackingConsent;
