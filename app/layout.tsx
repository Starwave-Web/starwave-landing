import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

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
          <div className="h-[60px]"></div>
        <Navbar />
          {children}
        </body>
      </html>
  );
}
