"use client";

import { useTranslations } from "next-intl";  // Import translations hook
import StarwaveLogo from "@/src/components/icons/starwave-logo";
import { Button } from "@/src/components/ui/button";
import HamburgerMenu from "../icons/hamburger-menu";
import { scrollToSection } from "@/src/lib/utils";
import { useState } from "react";
import CloseIcon from "../icons/close-icon";
import sendToMixpanel from "@/src/lib/sendToMixpanel";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navbar");

  const scrollToSectionWeb = (section: string) => {
    sendToMixpanel(`nav_${section}_clicked`);
    scrollToSection(section);
  };

  const scrollToSectionMobile = (section: string) => {
    sendToMixpanel(`nav_${section}_clicked`);
    setOpen(!open);
    scrollToSection(section);
  };

  return (
    <nav className="min-h-[68px] sticky top-0 py-4 z-[100] bg-white">
      <div className="container flex items-center h-full mx-auto justify-between px-5">
        <div className="cursor-pointer" onClick={() => scrollToSectionWeb("hero")}>
          <StarwaveLogo className="w-auto h-[36px] xl:w-full xl:h-full" />
        </div>
        <div>
          <ul className="gap-[40px] items-center hidden lg:flex xl:text-outlaw">
            <li className="cursor-pointer">
              <p onClick={() => scrollToSectionWeb("researches")}>{t("blog")}</p>  {/* Translated text */}
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSectionWeb("howWeWork")}>{t("howWeWork")}</p>  {/* Translated text */}
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSectionWeb("prices")}>{t("prices")}</p>  {/* Translated text */}
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSectionWeb("testimonials")}>{t("testimonials")}</p>  {/* Translated text */}
            </li>
            <li className="cursor-pointer">
              <p onClick={() => scrollToSectionWeb("FAQ")}>{t("FAQ")}</p>  {/* Translated text */}
            </li>
            <li>
              <Button
                onClick={() => scrollToSectionWeb("contactUs")}
                className="h-full"
                variant="outline"
              >
                {t("contactUs")}  {/* Translated text */}
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
                <p onClick={() => scrollToSectionMobile("hero")}>{t("home")}</p>  {/* Translated text */}
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("researches")}>{t("blog")}</p>  {/* Translated text */}
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("howWeWork")}>{t("howWeWork")}</p>  {/* Translated text */}
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("prices")}>{t("prices")}</p>  {/* Translated text */}
              </li>
              <li className="cursor-pointer">
                <p onClick={() => scrollToSectionMobile("testimonials")}>{t("testimonials")}</p>  {/* Translated text */}
              </li>
              <li>
                <p onClick={() => scrollToSectionMobile("FAQ")}>{t("FAQ")}</p>  {/* Translated text */}
              </li>
              <li>
                <p onClick={() => scrollToSectionMobile("contactUs")}>{t("contactUs")}</p>  {/* Translated text */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
