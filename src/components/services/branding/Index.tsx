import Hero from "./Hero";
import Intro from "./Intro";
import ServicesGrid from "./ServicesGrid";
import WhyBrandingMatters from "./WhyBrandingMatters";
import Process from "./BrandingProcess";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";
import WhyChoose from "./WhyChoose";
import Industries from "./Industries";
import FAQ from "./FAQ";
import CTA from "./CTA";

export default function Branding() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <WhyBrandingMatters />
      <Process />
      <WhatMakesUsDifferent />
      <WhyChoose />
      <Industries />
      <FAQ />
      <CTA />
    </>
  );
}
