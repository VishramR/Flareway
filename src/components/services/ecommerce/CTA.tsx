import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function Cta() {
  return (
    <FluidContainer className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#2563EB] text-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Ready to Launch Your Online Store?
            </p>

            <h2 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl">
              Build an Ecommerce Website That Sells More
            </h2>

            <p className="mx-auto mb-12 max-w-3xl text-lg leading-9 text-blue-100">
              Partner with Flareway Technologies, your trusted Ecommerce Website
              Development Company in Coimbatore, to build a secure,
              high-performing online store that increases sales, improves
              customer experience, and supports long-term business growth.
            </p>

            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Talk to Our Ecommerce Experts
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
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
