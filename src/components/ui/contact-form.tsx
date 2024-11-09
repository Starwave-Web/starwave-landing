"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { Textarea } from "./textarea";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { useToast } from "./use-toast";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import { useTranslations } from "next-intl";

export enum SUBJECT {
  QUESTION = "question",
  QUOTE = "quote",
}

const ContactForm = () => {
  const { toast } = useToast();
  const t = useTranslations("contactUs.form");

  const formSchema = z.object({
    "form-name": z.string().default("contact"),
    "bot-field": z.string().optional(),
    subject: z.enum([SUBJECT.QUESTION, SUBJECT.QUOTE]),
    name: z
      .string()
      .min(1, { message: t('validation.requiredField') })
      .max(50, { message: t('validation.characterLimitExceeded') }),
    email: z
      .string()
      .email("A megadott email hibás formátumú")
      .min(1, { message: t('validation.requiredField') })
      .max(50, { message: t('validation.characterLimitExceeded') }),
    message: z
      .string()
      .min(1, { message: t('validation.requiredField') })
      .max(5000, { message: t('validation.characterLimitExceeded') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "form-name": "contact",
      "bot-field": "",
      subject: SUBJECT.QUESTION,
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const value = values[key as keyof typeof values] ?? "";
          formData.append(key, value.toString());
        }
      }
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.status === 200) {
        form.reset();
        toast({
          title: t('successMessage.title'),
          description: t('successMessage.description'),
        });
      } else {
        toast({
          variant: "destructive",
          title: t('errorMessage.title'),
          description: t('errorMessage.description'),
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('errorMessage.title'),
        description: t('errorMessage.description'),
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="form-name"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} value="contact" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bot-field"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row gap-[35px] justify-center sm:justify-start"
                >
                  <FormItem className="flex flex-col sm:flex-row items-center space-x-3 space-y-0 gap-[14px]">
                    <FormControl>
                      <RadioGroupItem value={SUBJECT.QUESTION} />
                    </FormControl>
                    <FormLabel className="font-normal text-p-mobile md:text-p">
                      {t('subject.question')}
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex flex-col sm:flex-row items-center space-x-3 space-y-0 gap-[14px]">
                    <FormControl>
                      <RadioGroupItem value={SUBJECT.QUOTE} />
                    </FormControl>
                    <FormLabel className="font-normal text-p-mobile md:text-p">
                    {t('subject.quote')}
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-form-label-mobile md:text-form-label text-black">
              {t('labels.name')}
              </FormLabel>
              <FormControl>
                <Input
                  className="!text-p !md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[59px]"
                  placeholder={t('placeholders.name')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-form-label-mobile md:text-form-label text-black">
              {t('labels.email')}
              </FormLabel>
              <FormControl>
                <Input
                  className="!text-p !md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[59px]"
                  placeholder={t('placeholders.email')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-form-label-mobile md:text-form-label text-black">
              {t('labels.message')}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="!text-p !md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[190px]"
                  placeholder={t('placeholders.message')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          onClick={() => sendToMixpanel("contact_form_submitted")}
          className="w-full rounded-[14px] h-[68px]"
          type="submit"
        >
          {t('button')}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
