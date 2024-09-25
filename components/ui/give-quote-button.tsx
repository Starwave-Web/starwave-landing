"use client";

import React from "react";
import { Button } from "./button";
import { cn, scrollToSection } from "@/lib/utils";

const GiveQuoteButton = ({ id }: { id: string }) => {
  return (
    <Button
      onClick={() => scrollToSection("contactUs")}
      className={cn(
        "py-[20px] px-[35px] h-[68px]",
        id === "premium"
          ? "bg-primary-grey text-black"
          : "bg-primary-dark text-white"
      )}
    >
      Ajánlatkérés
    </Button>
  );
};

export default GiveQuoteButton;
