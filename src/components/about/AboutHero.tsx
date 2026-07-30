import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";
import Image from "next/image";

export default function AboutHero() {
  return (
    // <FluidContainer className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#2563EB] text-white">
    <FluidContainer className="relative overflow-hidden">
      <Image
        src="/images/about/about_banner.png"
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
        <section className="pt-40 pb-24 lg:pt-30 lg:pb-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <h1 className="text-sm uppercase font-semibold tracking-[0.25em] text-white font-medium">
                About Flareway Technologies
              </h1>
            </div>

            <p className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl">
              Your Trusted Website Development & Digital Marketing Partner in
              Coimbatore
            </p>

            <p className="mb-10 max-w-3xl text-xl leading-9 text-blue-100">
              Helping businesses build a strong online presence through
              innovative website development, SEO, Google Ads, social media
              marketing, and results-driven digital solutions.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-2xl"
              >
                Get Free Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
