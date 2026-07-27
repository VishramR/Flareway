import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const benefits = [
  "Increase Brand Awareness",
  "Build Customer Trust",
  "Improve Audience Engagement",
  "Generate Qualified Leads",
  "Drive Website Traffic",
  "Strengthen Brand Reputation",
  "Support Long-Term Business Growth",
  "Improve Customer Retention",
  "Creative Content Planning & Monthly Content Calendar",
];

export default function WhySocialMediaMatters() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Social Media Marketing Matters
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Build a Brand People Recognize, Trust & Engage With
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-600">
                An effective social media strategy helps businesses build
                visibility, create meaningful customer relationships, and turn
                engagement into measurable business growth.
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
                Social Impact
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Consistent Content Creates Consistent Opportunities
              </h3>

              <p className="mb-8 text-lg leading-8 text-blue-100">
                The businesses that grow on social media are the ones that show
                up consistently with valuable content, audience engagement, and
                strategic advertising campaigns.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Primary Goal</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Brand Growth
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Business Outcome</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Qualified Leads
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
