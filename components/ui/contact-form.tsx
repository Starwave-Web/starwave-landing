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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: SUBJECT.QUESTION,
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => {
    console.log("This will send an email.");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={SUBJECT.QUESTION} />
                    </FormControl>
                    <FormLabel className="font-normal">Kérdésem van</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={SUBJECT.QUOTE} />
                    </FormControl>
                    <FormLabel className="font-normal">
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
              <FormLabel>Név</FormLabel>
              <FormControl>
                <Input placeholder="Név" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
              <FormLabel>Üzenet</FormLabel>
              <FormControl>
                <Textarea placeholder="Üzenet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Küldés</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
