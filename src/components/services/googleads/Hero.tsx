import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";
import Image from "next/image";

export default function Hero() {
  return (
    // <FluidContainer className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#2563EB] text-white">
    <FluidContainer className="relative overflow-hidden">
      <Image
        src="/images/services/google_ads.png"
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
        <section className="pt-36 pb-24 lg:pt-30 lg:pb-32">
          {/* Breadcrumb */}
          {/* <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-blue-100"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight size={16} className="text-blue-300" />

            <span className="text-blue-100">Services</span>

            <ChevronRight size={16} className="text-blue-300" />

            <span className="font-medium text-white">Google Ads</span>
          </nav> */}

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex uppercase font-semibold text-white tracking-[0.25em] items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              Google Ads Services
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl">
              Google Ads Agency in Coimbatore
            </h1>

            <h2 className="mb-6 text-2xl font-semibold leading-tight text-blue-100 sm:text-3xl">
              Generate Instant Leads with High-Performance Google Ads Campaigns
            </h2>

            <p className="mb-10 max-w-3xl text-xl leading-9 text-blue-100">
              Flareway Technologies is a trusted Google Ads Agency in
              Coimbatore, helping businesses generate qualified leads, increase
              website traffic, and maximize ROI with data-driven Google Ads
              campaigns.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-2xl"
              >
                Talk to a PPC Expert
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
