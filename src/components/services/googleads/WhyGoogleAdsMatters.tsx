import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const benefits = [
  "Instant Online Visibility",
  "Qualified Leads",
  "Flexible Budget Control",
  "Measurable ROI",
  "Targeted Audience Reach",
  "Faster Business Growth",
  "Increased Website Traffic",
  "Higher Conversion Opportunities",
];

export default function WhyGoogleAdsMatters() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Google Ads Matters for Your Business
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Reach Customers at the Exact Moment They Need Your Service
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-600">
                Google Ads helps businesses reach customers at the exact moment
                they are searching for products or services. Unlike many
                marketing channels, it delivers immediate visibility, measurable
                results, and precise audience targeting.
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
                PPC Advantage
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Immediate Visibility & Measurable ROI
              </h3>

              <p className="mb-8 text-lg leading-8 text-blue-100">
                Unlike SEO, Google Ads can start generating traffic and leads as
                soon as campaigns are approved, while providing detailed
                performance data for every click, conversion, and advertising
                dollar spent.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Primary Benefit</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Instant Visibility
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Success Metric</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Measurable ROI
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
