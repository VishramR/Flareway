import type { Metadata } from "next";
import { Montserrat, Heebo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "sonner";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

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
  verification: {
    google: "Z1_R87Z9YtGaAYuiiEZ-5E7l-9OtyqidJuH-dy_C5hM",
  },
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
        <Toaster position="top-right" richColors closeButton />
        <Footer />
      </body>
      {/* Google Tag Manager (GTM-KP5THJW4) */}
      <GoogleTagManager gtmId="GTM-KP5THJW4" />
      {/* Google Analytics 4 (G-KV3R9526BF) */}
      <GoogleAnalytics gaId="G-KV3R9526BF" />
    </html>
  );
}
