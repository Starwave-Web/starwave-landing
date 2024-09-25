"use client"
import React from "react";
import { Button } from "./button";
import { scrollToSection } from "@/lib/utils";


const GoToPricesButton = () => {
  return (
    <Button
      onClick={() => scrollToSection("prices")}
      variant="default"
      className="h-[64px] sm:w-[287px] w-full "
    >
      Szolgáltatások és árak
    </Button>
  );
};

export default GoToPricesButton;
