import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import MissionVision from "@/components/about/MissionVision";
import WhatWeDo from "@/components/about/WhatWeDo";
import Approach from "@/components/about/Approach";

import AboutFAQ from "@/components/about/AboutFAQ";
import FinalCTA from "@/components/home/FinalCTA";
import WhyChooseAbout from "@/components/about/WhyChooseAbout";
import AboutIndustries from "@/components/about/AboutIndustries";
import ClientTrust from "@/components/about/ClientTrust";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Flareway Technologies, a leading digital marketing agency in Coimbatore dedicated to growing businesses online.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Flareway Technologies",
    description:
      "Learn about Flareway Technologies, a leading digital marketing agency in Coimbatore.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <MissionVision />
      <WhyChooseAbout />
      <WhatWeDo />
      <Approach />
      <AboutIndustries />
      <ClientTrust />
      <AboutFAQ />
      <FinalCTA />
    </>
  );
}
