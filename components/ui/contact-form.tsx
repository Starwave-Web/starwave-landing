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
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useToast } from "./use-toast";
import { useState } from "react";

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

const ContactForm = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: SUBJECT.QUESTION,
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setStatus("pending");
      setError(null);

      // Create a FormData object from the data object
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      // Make the POST request
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(form as any).toString(),
      });

      // Check the response status
      if (res.status === 200) {
        setStatus("ok");
        toast({
          title: "Sikeres üzenetküldés",
          description: "Hamarosan felvesszük veled a kapcsolatot!",
        });
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        name="contact" // Form name
        method="POST" // Form method
        data-netlify="true" // Enables Netlify forms
        data-netlify-honeypot="bot-field" // Spam protection
        className="space-y-8"
      >
        {/* Hidden input field for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        {/* The rest of your form fields */}
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
                      Kérdésem van
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex flex-col sm:flex-row items-center space-x-3 space-y-0 gap-[14px]">
                    <FormControl>
                      <RadioGroupItem value={SUBJECT.QUOTE} />
                    </FormControl>
                    <FormLabel className="font-normal text-p-mobile md:text-p">
                      Árajánlatot kérek
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
              <FormLabel className="text-form-label-mobile md:text-form-label text-black">
                Név
              </FormLabel>
              <FormControl>
                <Input
                  className="text-p md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[59px]"
                  placeholder="Név"
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
              <FormLabel className="text-form-label-mobile md:text-form-label text-black">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="text-p md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[59px]"
                  placeholder="Email"
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
              <FormLabel className="text-form-label-mobile md:text-form-label text-black">
                Üzenet
              </FormLabel>
              <FormControl>
                <Textarea
                  className="text-p md:text-form-input placeholder-[#898989] py-[18px] px-[30px] border border-black rounded-[14px] h-[190px]"
                  placeholder="Üzenet"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Repeat similar fields for 'name', 'email', and 'message' */}
        <Button className="w-full rounded-[14px] h-[68px]" type="submit">
          Küldés
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
