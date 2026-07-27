import Hero from "./Hero";
import Intro from "./Intro";
import ServicesGrid from "./ServicesGrid";
import WhatMakesDifferent from "./WhatMakesContentDifferent";
import Solutions from "./ContentSolutions";
import WhyContentMatters from "./WhyContentMarketingMatters";
import Process from "./Process";
import WhyChoose from "./WhyChooseUs";
import Industries from "./Industries";
import Tools from "./Tools";
import Faq from "./FAQ";
import Cta from "./CTA";

export default function ContentMarketing() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <WhatMakesDifferent />
      <Solutions />
      <WhyContentMatters />
      <Process />
      <WhyChoose />
      <Industries />
      <Tools />
      <Faq />
      <Cta />
    </>
  );
}
