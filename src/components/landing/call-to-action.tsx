import React from "react";

import CTAIllustration from "../icons/cta-illustartion";
import ContactUsButton from "../ui/contact-us-button";
import { useTranslations } from "next-intl";

const CallToAction = () => {
  const t = useTranslations("callToAction")
  
  return (
    <section id="cta" className="w-full mb-[45px] md:mb-[140px] scroll-mt-28">
      <div className="py-[23.5px] container mx-auto relative px-5">
        <div className="bg-primary-grey rounded-[45px] container px-[50px] md:px-[60px] flex items-center justify-between mx-auto">
          <div className="flex flex-col items-start gap-[26px] py-12 max-w-[500px]">
            <h3 className="text-h3-mobile md:text-h3">{t('title')}</h3>
            <p className="text-p-mobile md:text-p">
              {t('description')}
            </p>
            <ContactUsButton translations={t('button')}/>
          </div>
          <div>
            <CTAIllustration className="absolute -top-5 right-14 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
