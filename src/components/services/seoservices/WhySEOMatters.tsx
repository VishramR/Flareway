import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const benefits = [
  "Higher Google Search Rankings",
  "Increased Organic Website Traffic",
  "More Qualified Business Leads",
  "Better Brand Visibility & Credibility",
  "Improved User Experience",
  "Higher Conversion Opportunities",
  "Sustainable Long-Term Growth",
  "Better Return on Marketing Investment",
];

export default function WhySEOMatters() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why SEO Matters for Your Business
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Long-Term Visibility That Continues to Generate Leads
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-600">
                A successful SEO strategy helps your business build long-term
                online visibility and attract customers who are actively
                searching for your products or services.
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
                SEO Impact
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Organic Traffic Compounds Over Time
              </h3>

              <p className="mb-8 text-lg leading-8 text-blue-100">
                Unlike paid advertising, SEO continues to attract qualified
                visitors through improved search rankings, valuable content, and
                stronger domain authority.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Primary Goal</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Organic Growth
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Long-Term Focus</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Sustainable Leads
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
