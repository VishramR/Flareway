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
  metadataBase: new URL("https://www.flarewaytechnologies.com"),

  title: {
    default: "Digital Marketing Agency in Coimbatore | Flareway Technologies",
    template: "%s | Flareway Technologies",
  },
  description:
    "Flareway Technologies is a digital marketing agency in Coimbatore offering SEO, Google Ads, social media marketing, website development and branding services.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Flareway Technologies",
    title: "Digital Marketing Agency in Coimbatore | Flareway Technologies",
    description:
      "Grow your business online with SEO, Google Ads, social media marketing and website development services.",
    url: "https://www.flarewaytechnologies.com/",
    images: [
      {
        url: "/images/flareway_favicon.png",
        width: 1200,
        height: 630,
        alt: "Flareway Technologies Digital Marketing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Coimbatore | Flareway Technologies",
    description:
      "SEO, Google Ads, social media marketing and website development services in Coimbatore.",
    images: ["/images/flareway_favicon.png"],
  },

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
      <GoogleTagManager gtmId="GTM-KP5THJW4" />
      <GoogleAnalytics gaId="G-KV3R9526BF" />
    </html>
  );
}
