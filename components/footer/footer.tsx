"use client";
import Link from "next/link";
import StarwaveLogoWhite from "../icons/starwave-logo-white";
import { Button } from "../ui/button";
import LinkedInIcon from "../icons/linkedin-icon";
import FacebookIcon from "../icons/facebook-icon";
import { scrollToSection } from "@/lib/utils";
import NewsletterForm from "../ui/newsletter-form";

const Footer = () => {
  return (
    <section className="w-full">
      <div className="sm:container sm:mx-auto !max-w-[1250px]">
        <div className="sm:rounded-t-[45px] bg-primary-dark sm:mx-5 pt-[50px] md:pt-[55px] pb-[30px] md:pb-[50px] px-[30px] md:px-[60px] flex flex-col gap-[66px]">
          <div className="flex flex-col gap-[37px] lg:gap-0 lg:flex-row lg:justify-between">
            <StarwaveLogoWhite />
            <ul className="flex flex-col sm:flex-row sm:items-center gap-10">
              <li>
                <p
                  onClick={() => scrollToSection("services")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  Szolgáltatások
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSection("researches")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  Tanulmányok
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSection("howWeWork")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  Hogyan dolgozunk?
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSection("prices")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  Árak
                </p>
              </li>
            </ul>
            <div className="flex gap-5 items-center">
              <Link href="https://www.linkedin.com/">
                <LinkedInIcon className="fill-white hover:fill-primary-green"/>
              </Link>
              <Link  href="https://www.facebook.com/">
                <FacebookIcon className="fill-white hover:fill-primary-green" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[37px] lg:gap-0 lg:items-center lg:justify-between">
            <div className="flex flex-col gap-[27px]">
              <h4 className="text-h4-mobile md:text-h4 bg-primary-green rounded-[7px] w-fit px-[7px] text-black">
                Kapcsolatfelvétel:
              </h4>
              <div className="flex flex-col gap-5">
                <p  className="text-p-mobile md:text-p text-white ">
                  Email: <Link href="mailto:starwaveweb@gmail.com" className="hover:text-primary-green">starwaveweb@gmail.com</Link>
                </p>
                <p className="text-p-mobile md:text-p text-white">
                  Telefon: +36 30 609 0155
                </p>
                <p className="text-p-mobile md:text-p text-white">
                  Cím: 2440 Százhalombatta Tél utca 41.
                </p>
              </div>
            </div>
            <NewsletterForm/>
          </div>
          <div className="flex flex-col gap-[70px]">
            <div className="w-full h-px bg-white" />
            <div className="flex items-center gap-10">
              <p className="text-p-mobile md:text-p text-white">
                © 2024 Starwave. Minden jog fentartva.
              </p>
              <Link
                href="/"
                className="text-p-mobile md:text-form-input underline text-white hover:text-primary-green"
              >
                Adatkezelési szabályzat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
