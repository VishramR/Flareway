import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function Hero() {
  return (
    <FluidContainer className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#2563EB] text-white">
      <Container>
        <section className="pt-36 pb-24 lg:pt-30 lg:pb-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              Ecommerce Website Development
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Ecommerce Website Development Company in Coimbatore
            </h1>

            <h2 className="mb-6 text-2xl font-semibold leading-tight text-blue-100 sm:text-3xl">
              Build a High-Performing Online Store That Drives Sales & Business
              Growth
            </h2>

            <p className="mb-10 max-w-3xl text-xl leading-9 text-blue-100">
              Flareway Technologies is a trusted Ecommerce Website Development
              Company in Coimbatore, creating secure, scalable, and SEO-friendly
              online stores that deliver exceptional shopping experiences,
              increase conversions, and support long-term business growth.
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
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                View Ecommerce Portfolio
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
