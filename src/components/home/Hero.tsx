import Image from "next/image";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function Hero() {
  return (
    <FluidContainer className="relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home/hero-banner.png"
        alt="Digital Marketing & Website Development Company in Coimbatore"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
      />

      {/* Base Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/60" />

      {/* Left Gradient for Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07142F]/90 via-[#07142F]/70 to-black/20" />

      <Container className="relative z-10">
        <section className="flex min-h-screen items-center py-32">
          <div className="max-w-[760px]">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Flareway Technologies
            </p>

            <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Digital Marketing & Website Development Company in Coimbatore
            </h1>

            <p className="mb-12 max-w-2xl text-lg leading-8 text-slate-200 lg:text-xl">
              Helping businesses in Coimbatore and across India grow with SEO,
              high-performance websites, Google Ads, social media marketing, and
              conversion-focused digital strategies.
            </p>

            <div className="flex flex-col gap-5 sm:flex-row">
              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
                Get Free Consultation
              </button>

              <button className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-900">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
