import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const points = [
  "Customized Website Development Solutions",
  "SEO-First Development Approach",
  "Data-Driven Digital Marketing Strategies",
  "Mobile-Friendly & High-Performance Websites",
  "Transparent Communication & Dedicated Support",
  "Affordable & Scalable Digital Solutions",
  "Ethical SEO & Best Marketing Practices",
  "Long-Term Business Growth Focus",
];

export default function WhyChooseAbout() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Content */}
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Choose Flareway Technologies
              </h2>

              <p className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Strategies Built Specifically for Your Business
              </p>

              <p className="mb-8 text-lg leading-8 text-gray-600">
                We understand that every business has unique goals, challenges,
                and target audiences. That's why we don't believe in
                one-size-fits-all solutions. Every project begins with
                understanding your business and developing a strategy designed
                specifically for your objectives.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <span className="font-medium text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Card */}
            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
              <div className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                Our Commitment
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Your Growth Is Our Priority
              </h3>

              <p className="mb-8 text-lg leading-8 text-blue-100">
                We focus on building websites and marketing systems that
                generate visibility, enquiries, conversions, and sustainable
                long-term business growth.
              </p>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Primary Focus</p>
                  <p className="font-semibold text-white">
                    Lead Generation & Business Growth
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Partnership Style</p>
                  <p className="font-semibold text-white">
                    Transparent, Collaborative, and Long-Term
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
