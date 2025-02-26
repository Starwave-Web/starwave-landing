"use client"
import { useTranslations } from "next-intl";
import ContactUsIllustartion from "../icons/contact-us-illustartion";
import ContactForm from "../ui/contact-form-package";
import Header from "../ui/header";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useState } from "react";
import ContactFormPackage from "../ui/contact-form-package";
import ContactFormCustom from "../ui/contact-form-custom";

const ContactUs = () => {
  const t = useTranslations("contactUs")
  const [selected, setSelected] = useState("package")

  
  return (
    <section id="contactUs" className="w-full scroll-mt-28">
      <div className="container mx-auto flex flex-col gap-10 md:gap-20 mb-[96px] md:mb-[100px]">
        <Header title={t('header.title')} description={t('header.description')}/>
        <div className="bg-primary-grey rounded-[45px] flex justify-between items-center mx-5 relative overflow-hidden">
          <div className="py-10 md:py-[70px] px-[30px] md:px-[100px] h-full w-full lg:w-auto">
            <div>
                <RadioGroup
                  defaultValue="package"
                  className="flex flex-row gap-[35px] justify-center sm:justify-start"
                >
                  <div onClick={() => setSelected("package")} className="flex flex-col sm:flex-row items-center space-x-3 space-y-0 gap-[14px]">
                      <RadioGroupItem id="package" value="package" />
                    <Label htmlFor="package" className="font-normal text-p-mobile md:text-p">
                      Csomagok érdekelnének
                    </Label>
                  </div>
                  <div onClick={() => setSelected("custom-quote")} className="flex flex-col sm:flex-row items-center space-x-3 space-y-0 gap-[14px]">
                      <RadioGroupItem id="custom-quote" value="custom-quote"/>
                    <Label htmlFor="custom-quote" className="font-normal text-p-mobile md:text-p">
                      Árajánlatot kérek
                    </Label>
                  </div>
                </RadioGroup>
            </div>
            {selected === "package" ? <ContactFormPackage /> :
            <ContactFormCustom /> }
          </div>
          <div className="absolute -right-[323px] hidden lg:block">
            <ContactUsIllustartion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
