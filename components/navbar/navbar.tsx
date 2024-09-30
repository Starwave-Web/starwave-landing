"use client";

import StarwaveLogo from "@/components/icons/starwave-logo";
import { Button } from "@/components/ui/button";
import HamburgerMenu from "../icons/hamburger-menu";
import { scrollToSection } from "@/lib/utils";
import { useState } from "react";
import CloseIcon from "../icons/close-icon";

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const scrollToSectionMobile = (section: string) => {
    setOpen(!open)
    scrollToSection(section)
  }

  return (
    <nav className="min-h-[68px] sticky top-0 py-4 z-[100] bg-white">
      <div className="container flex items-center h-full mx-auto justify-between px-5">
        <div onClick={() => scrollToSection("hero")}>
          <StarwaveLogo className="w-auto h-[36px] xl:w-full xl:h-full" />
        </div>
        <div>
          <ul className="gap-[40px] items-center hidden lg:flex xl:text-outlaw">
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection("services")}>A termékről</p>
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection("researches")}>Cikkek</p>
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection("howWeWork")}>
                Hogyan dolgozunk?
              </p>
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSection("prices")}>Árak</p>
            </li>
            <li>
              <Button
                onClick={() => scrollToSection("contactUs")}
                className="h-full"
                variant="outline"
              >
                Kapcsolatfelvétel
              </Button>
            </li>
          </ul>
        </div>
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
      <div
        data-open={open}
        className="hidden data-[open=true]:flex justify-end w-full h-[120vh] bg-primary-dark/25 absolute -top-[60px]"
      >
        <div className="w-1/2 h-[120vh] bg-primary-dark px-[22px] py-[29px] flex flex-col gap-11">
          <div className="self-end mt-14" onClick={() => setOpen(!open)}>
            <CloseIcon />
          </div>
          <div>
            <ul className="flex flex-col gap-8 text-p text-white">
            <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("hero")}>
                Kezdőlap
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("services")}>
                  Szolgáltatások
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("researches")}>Tanulmányok</p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("howWeWork")}>
                  Hogyan dolgozunk?
                </p>
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("prices")}>Árak</p>
              </li>
              <li>
                <p onClick={() => scrollToSectionMobile("contactUs")}>
                  Kapcsolatfelvétel
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
