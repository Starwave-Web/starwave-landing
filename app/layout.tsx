import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starwave Web Development Agency",
  description: "A Web Development Agency from Hungary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space.className}>
        <div className="h-[60px]" />
        <Navbar />
        <div className="h-10 md:h-[70px]" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
