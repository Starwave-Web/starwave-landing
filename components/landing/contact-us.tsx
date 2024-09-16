import ContactUsIllustartion from "../icons/contact-us-illustartion";
import ContactForm from "../ui/contact-form";
import Header from "../ui/header";

const ContactUs = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col gap-20">
        <Header title="Kapcsolatfelvétel" description="Lépj velünk kapcsolatba, kezdjük el közösen a vállalkozásod online fejlesztését!"/>
        <div className=" bg-primary-grey rounded-[45px] flex justify-between items-center">
          <div className="py-[70px] pl-[100px] h-full">
            <ContactForm />
          </div>
          <div className="py-[62.5px] -right-[324px] relative">
            <ContactUsIllustartion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
