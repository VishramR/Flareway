import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function CTA() {
  return (
    <FluidContainer className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#2563EB] text-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Ready to Generate More Leads with Google Ads?
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Let's Launch High-Performing PPC Campaigns for Your Business
            </h2>

            <p className="mb-10 text-xl leading-9 text-blue-100">
              Partner with Flareway Technologies, your trusted Google Ads Agency
              in Coimbatore, to launch high-performing PPC campaigns that
              attract qualified customers, maximize your advertising budget, and
              accelerate business growth.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-2xl"
              >
                <Phone size={18} />
                Get a Free Google Ads Audit
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                <Mail size={18} />
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
