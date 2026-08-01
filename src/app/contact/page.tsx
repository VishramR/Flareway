import Contact from "@/components/contact/Index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Flareway Technologies in Coimbatore. Contact us for custom web development, SEO, Google Ads, and social media marketing inquiries.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Us | Flareway Technologies",
    description:
      "Get in touch with Flareway Technologies in Coimbatore for expert digital marketing services.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
