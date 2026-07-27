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
