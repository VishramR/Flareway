import Hero from "./Hero";
import Intro from "./Intro";
import ServicesGrid from "./ServicesGrid";
import WhyGoogleAdsMatters from "./WhyGoogleAdsMatters";
import Process from "./Process";
import WhyChoose from "./WhyChoose";
import Industries from "./Industries";
import ProfessionalManagement from "./ProfessionalManagement";
import FAQ from "./FAQ";
import CTA from "./CTA";

export default function GoogleAdsPage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <WhyGoogleAdsMatters />
      <Process />
      <WhyChoose />
      <Industries />
      <ProfessionalManagement />
      <FAQ />
      <CTA />
    </>
  );
}
