import type { Metadata } from "next";
import { Montserrat, Heebo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Flareway",
    template: "%s | Flareway",
  },
  description:
    "Flareway is a Web Development and Digital Marketing agency helping businesses grow online with modern websites, SEO, and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${montserrat.variable} ${heebo.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
