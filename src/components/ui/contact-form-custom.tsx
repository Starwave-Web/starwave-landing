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
import { Checkbox } from "./checkbox";

export enum SUBJECT {
  QUESTION = "question",
  QUOTE = "quote",
}

const ContactFormPackage = () => {
  const { toast } = useToast();
  const t = useTranslations("contactUs.form");

  const formSchema = z.object({
    "form-name": z.string().default("contact"),
    "bot-field": z.string().optional(),
    subject: z.string(),
    name: z
      .string()
      .min(1, { message: t("validation.requiredField") })
      .max(50, { message: t("validation.characterLimitExceeded") }),
    email: z
      .string()
      .email(t("validation.invalidEmail"))
      .min(1, { message: t("validation.requiredField") })
      .max(50, { message: t("validation.characterLimitExceeded") }),
    metaOption: z.boolean().optional(),
    metaField: z.number().optional(),
    googleAdsOption: z.boolean().optional(),
    googleAdsField: z.number().optional(),
    webDesingOption: z.boolean().optional(),
    webDevOption: z.boolean().optional(),
    expenseLimit: z
      .string()
      .email(t("validation.invalidEmail"))
      .min(1, { message: t("validation.requiredField") })
      .max(50, { message: t("validation.characterLimitExceeded") }),
    message: z
      .string()
      .min(1, { message: t("validation.requiredField") })
      .max(5000, { message: t("validation.characterLimitExceeded") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "form-name": "contact",
      "bot-field": "",
      subject: "Custom quote",
      name: "",
      email: "",
      metaOption: false,
      metaField: 0,
      googleAdsOption: false,
      googleAdsField: 0,
      webDesingOption: false,
      webDevOption: false,
      expenseLimit: "",
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
          title: t("successMessage.title"),
          description: t("successMessage.description"),
        });
      } else {
        toast({
          variant: "destructive",
          title: t("errorMessage.title"),
          description: t("errorMessage.description"),
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("errorMessage.title"),
        description: t("errorMessage.description"),
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-form-label-mobile md:text-form-label text-black">
                {t("labels.name")}
              </FormLabel>
              <FormControl>
                <Input
                  className="!text-p !md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[59px]"
                  placeholder={t("placeholders.name")}
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
                {t("labels.email")}
              </FormLabel>
              <FormControl>
                <Input
                  className="!text-p !md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[59px]"
                  placeholder={t("placeholders.email")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="metaOption"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                    <FormLabel className="!mt-0 !text-form-label-mobile md:text-form-label text-black">
                      {t("labels.metaOption")}
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="metaField"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    disabled={!form.watch("metaOption")}
                    className="!mt-0 !text-p !md:text-form-input max-w-[100px] placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[59px]"
                    placeholder={t("placeholders.metaOptions")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="googleAdsOption"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                    <FormLabel className="!mt-0 !text-form-label-mobile md:text-form-label text-black">
                      {t("labels.googleAdsOption")}
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="googleAdsField"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    disabled={!form.watch("googleAdsOption")}
                    className="!mt-0 !text-p !md:text-form-input max-w-[100px] placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[59px]"
                    placeholder={t("placeholders.googleAdsOptions")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 items-center h-[59px]">
          <FormField
            control={form.control}
            name="webDesingOption"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                    <FormLabel className="!mt-0 !text-form-label-mobile md:text-form-label text-black">
                      {t("labels.webDesingOption")}
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="webDevOption"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                    <FormLabel className="!mt-0 !text-form-label-mobile md:text-form-label text-black">
                      {t("labels.webDevOption")}
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="expenseLimit"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-form-label-mobile md:text-form-label text-black">
                {t("labels.expenseLimit")}
              </FormLabel>
              <FormControl>
                <Input
                  className="!text-p !md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[59px]"
                  placeholder={t("placeholders.expenseLimit")}
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
                {t("labels.message")}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="!text-p !md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[190px]"
                  placeholder={t("placeholders.message")}
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
          {t("button")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactFormPackage;
