"use client";
import Link from "next/link";
import StarwaveLogoWhite from "../icons/starwave-logo-white";
import LinkedInIcon from "../icons/linkedin-icon";
import FacebookIcon from "../icons/facebook-icon";
import { scrollToSection } from "@/lib/utils";
import NewsletterForm from "../ui/newsletter-form";
import sendToMixpanel from "@/lib/sendToMixpanel";
import InstagramIcon from "../icons/instagram-icon";

const Footer = () => {

  const scrollToSectionWebFooter = (section: string) => {
    sendToMixpanel(`footer_${section}_clicked`);
    scrollToSection(section);
  };

  return (
    <section className="w-full">
      <div className="sm:container sm:mx-auto !max-w-[1250px]">
        <div className="sm:rounded-t-[45px] bg-primary-dark sm:mx-5 pt-[50px] md:pt-[55px] pb-[30px] md:pb-[50px] px-[30px] md:px-[60px] flex flex-col gap-[66px]">
          <div className="flex flex-col gap-[37px] lg:gap-0 lg:flex-row lg:justify-between">
            <div
              className="cursor-pointer"
              onClick={() => scrollToSectionWebFooter("hero")}
            >
              <StarwaveLogoWhite />
            </div>
            <ul className="flex flex-col sm:flex-row sm:items-center gap-10">
              <li>
                <p
                  onClick={() => scrollToSectionWebFooter("researches")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  Blog
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSectionWebFooter("howWeWork")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  Hogyan dolgozunk?
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSectionWebFooter("prices")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  Árak
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSectionWebFooter("testimonials")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  Visszajelzések
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSectionWebFooter("FAQ")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  FAQ
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSectionWebFooter("contactUs")}
                  className="text-p-mobile md:text-form-input underline text-white cursor-pointer hover:text-primary-green"
                >
                  Kapcsolat
                </p>
              </li>
            </ul>
            <div className="flex gap-5 items-center">
              <Link
                onClick={() => sendToMixpanel("linkedin_logo_clicked")}
                target="_blank"
                href="https://www.linkedin.com/company/starwave-web-development-agency/?viewAsMember=true"
              >
                <LinkedInIcon className="fill-white hover:fill-primary-green" />
              </Link>
              <Link
              onClick={() => sendToMixpanel("facebook_logo_clicked")}
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61566881334932"
              >
                <FacebookIcon className="fill-white hover:fill-primary-green" />
              </Link>
              <Link
              onClick={() => sendToMixpanel("instagram_logo_clicked")}
                target="_blank"
                href="https://www.instagram.com/starwaveweb/"
              >
                <InstagramIcon className="fill-white hover:fill-primary-green" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[37px] lg:gap-0 lg:items-center lg:justify-between">
            <div className="flex flex-col gap-[27px]">
              <h4 className="text-h4-mobile md:text-h4 bg-primary-green rounded-[7px] w-fit px-[7px] text-black">
                Kapcsolatfelvétel:
              </h4>
              <div className="flex flex-col gap-5">
                <p className="text-p-mobile md:text-p text-white ">
                  Email:{" "}
                  <Link
                    onClick={() => sendToMixpanel("footer_mailto_clicked")}
                    href="mailto:starwaveweb@gmail.com"
                    className="hover:text-primary-green"
                  >
                    starwaveweb@gmail.com
                  </Link>
                </p>
                <p className="text-p-mobile md:text-p text-white">
                  Telefon: +36 30 609 0155
                </p>
                <p className="text-p-mobile md:text-p text-white">
                  Cím: 2440 Százhalombatta Tél utca 41.
                </p>
              </div>
            </div>
            <NewsletterForm />
          </div>
          <div className="flex flex-col gap-[70px]">
            <div className="w-full h-px bg-white" />
            <div className="flex items-center gap-10">
              <p className="text-p-mobile md:text-p text-white">
                © 2024 Starwave Web Development Agency. Minden jog fentartva.
              </p>
              <Link
                onClick={() => sendToMixpanel("privacy_policy_clicked")}
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
