import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/navbar/navbar";
import { Toaster } from "@/src/components/ui/toaster";
import AskTrackingConsent from "@/src/components/ui/ask-tracking-consent";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";

const space = Space_Grotesk({ subsets: ["latin"] });


interface Params {
  locale: string;
}

export async function generateMetadata({ locale }: Params) {
  const t = await getTranslations({ locale, namespace: "metaLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={space.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="h-[60px]" />
          <Navbar />
          <div className="h-10 md:h-[70px]" />
          {children}
          <Toaster />
          <AskTrackingConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
