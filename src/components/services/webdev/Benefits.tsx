import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const benefits = [
  "Build trust and credibility",
  "Improve Google search visibility",
  "Generate more enquiries and qualified leads",
  "Deliver an excellent user experience",
  "Strengthen your brand identity",
  "Increase customer engagement",
  "Support business growth and scalability",
  "Create a strong digital presence",
];

export default function Benefits() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Benefits of Professional Website Development
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Why Investing in a Professional Website Matters
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-600">
                A professionally developed website becomes a long-term business
                asset that supports marketing, lead generation, customer
                engagement, and sustainable growth.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <span className="font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
              <div className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                Business Impact
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                More Visibility, More Leads, More Growth
              </h3>

              <p className="mb-8 text-lg leading-8 text-blue-100">
                We focus on creating websites that not only look professional
                but also attract customers, generate enquiries, and support
                measurable business growth.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Primary Goal</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Lead Generation
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Long-Term Focus</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Business Growth
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
