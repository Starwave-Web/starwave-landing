"use client";
import sendToMixpanel from "@/lib/sendToMixpanel";
import React, { useEffect, useState } from "react";
import { Button } from "./button";

const AskTrackingConsent = () => {
  const [consentGiven, setConsentGiven] = useState(false);

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
          Cookiek-at használunk a jobb felhasználói élmény érdekében. Elfogadod őket?
        </p>
        <div className="flex items-center gap-2">
          <Button variant="default" onClick={() => handleConsent(true)}>
            Elfogadás
          </Button>
          <Button className="bg-red-600 hover:bg-red-600/90" variant="default" onClick={() => handleConsent(false)}>
            Elutasítás
          </Button>
        </div>
      </div>
    )
  );
};

export default AskTrackingConsent;
