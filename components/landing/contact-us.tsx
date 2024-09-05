import ContactUsIllustartion from "@/components/icons/contact-us-illustartion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export enum SUBJECT {
  QUESTION = "question",
  QUOTE = "quote",
}

const formSchema = z.object({
  subject: z.enum([SUBJECT.QUESTION, SUBJECT.QUOTE]),
  name: z
    .string()
    .min(1, { message: "A mező kitöltése kötelező" })
    .max(50, { message: "Túllépted a megengedett karakterszámot." }),
  email: z
    .string()
    .email("A megadott email hibás formátumú")
    .min(1, { message: "A mező kitöltése kötelező" })
    .max(50, { message: "Túllépted a megengedett karakterszámot" }),
  message: z
    .string()
    .min(1, { message: "A mező kitöltése kötelező" })
    .max(5000, { message: "Túllépted a megengedett karakterszámot" }),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: SUBJECT.QUESTION,
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <section className="w-full">
      <div className="container bg-primary-grey rounded-[45px] mx-auto">
        <div></div>
        <div>
          <ContactUsIllustartion />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
