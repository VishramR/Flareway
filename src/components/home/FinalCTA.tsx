import { ArrowRight, Phone, Mail, CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const benefits = [
  "Free business consultation",
  "Website & SEO audit",
  "Custom growth strategy",
  "No obligation discussion",
];

export default function FinalCTA() {
  return (
    <FluidContainer className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
      <Container>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-semibold">
                Flareway Technologies • Coimbatore
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Ready to Grow Your Business Online?
            </h2>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-3xl text-xl leading-9 text-blue-100">
              Partner with{" "}
              <span className="font-semibold text-white">
                Flareway Technologies
              </span>
              , your trusted Digital Marketing & Website Development Company in
              Coimbatore, to build a high-performing website and implement
              result-driven digital marketing strategies that increase online
              visibility, generate qualified leads, and accelerate sustainable
              business growth.
            </p>

            {/* Benefits */}
            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm"
                >
                  <CheckCircle2 size={20} className="shrink-0 text-green-300" />

                  <span className="font-medium text-white">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-2xl">
                <Phone size={20} />
                Talk to Our Experts
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="group flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15">
                <Mail size={20} />
                Get Free Consultation Today
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Trust Note */}
            <div className="mx-auto max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-lg leading-8 text-blue-50">
                <span className="font-semibold text-white">
                  Serving businesses across Coimbatore, Tiruppur, Erode, Salem,
                  Pollachi, and nearby cities
                </span>{" "}
                with professional website development, SEO, Google Ads, and
                performance-driven digital marketing solutions.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
