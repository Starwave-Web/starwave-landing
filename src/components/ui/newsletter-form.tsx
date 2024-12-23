"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { useToast } from "./use-toast";
import sendToMixpanel from "@/src/lib/sendToMixpanel";
import { useTranslations } from "next-intl";



const NewsletterForm = () => {
  const { toast } = useToast();
  const t = useTranslations("footer.newsletterForm")

  const formSchema = z.object({
  "form-name": z.string().default("newsletter"),
  "bot-field": z.string().optional(),
  subject: z.string().default("Newsletter registration"),
  email: z
    .string()
    .email(t('validation.invalidEmail'))
    .min(1, { message: t('validation.requiredField') })
    .max(50, { message: t('validation.characterLimitExceeded') }),
});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "form-name": "newsletter",
      "bot-field": "",
      subject: "Newsletter registration",
      email: "",
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
          title: t('successTitle'),
          description: t('successDescription'),
        });
      } else {
        toast({
          variant: "destructive",
          title: t('errorTitle'),
          description: t('errorDescription'),
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('errorTitle'),
        description: t('errorDescription'),
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        name="newsletter"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <FormField
          control={form.control}
          name="form-name"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} value="newsletter" />
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
            <FormItem>
              <Input type="hidden" {...field} value="Newsletter registration"/>
            </FormItem>
          )}
        />
        <div className="bg-[#292A32] rounded-[14px] px-[30px] pt-[30px] pb-[2px] md:px-10 md:pt-[58px] md:pb-[30px] flex flex-col sm:flex-row gap-5 items-start">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="text-white w-full h-[67px] border border-white rounded-[14px] placeholder-white text-p-mobile md:text-p bg-transparent px-[35px] py-[22px]"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            onClick={() => sendToMixpanel("newsletter_form_submitted")}
            className="w-full h-[67px] bg-primary-green mb-7 hover:bg-primary-green/90"
            variant="secondary"
            type="submit"
          >
            {t('submitButton')}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewsletterForm;
