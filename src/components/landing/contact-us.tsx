import { useTranslations } from "next-intl";
import ContactUsIllustartion from "../icons/contact-us-illustartion";
import ContactForm from "../ui/contact-form";
import Header from "../ui/header";

const ContactUs = () => {
  const t = useTranslations("contactUs")

  
  return (
    <section id="contactUs" className="w-full scroll-mt-28">
      <div className="container mx-auto flex flex-col gap-10 md:gap-20 mb-[96px] md:mb-[100px]">
        <Header title={t('header.title')} description={t('header.description')}/>
        <div className="bg-primary-grey rounded-[45px] flex justify-between items-center mx-5 relative overflow-hidden">
          <div className="py-10 md:py-[70px] px-[30px] md:px-[100px] h-full w-full lg:w-auto">
            <ContactForm />
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
