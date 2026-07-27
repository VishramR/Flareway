import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import GrowthPartner from "@/components/home/GrowthPartner";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import TrustSignals from "@/components/home/TrustSignals";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <GrowthPartner />
      <Services />
      <WhyChoose />
      <Process />
      <Industries />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
