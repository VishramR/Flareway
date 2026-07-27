import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const reasons = [
  "Experienced SEO Professionals",
  "Customised SEO Strategies",
  "Ethical White-Hat SEO Practices",
  "Data-Driven Keyword Research",
  "Technical SEO Expertise",
  "Local SEO Specialists",
  "Transparent Monthly Reporting",
  "Continuous Website Optimization",
  "Dedicated SEO Support",
  "Long-Term Business Growth Focus",
];

export default function WhyChoose() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Choose Flareway Technologies
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Experienced SEO Specialists Focused on Long-Term Results
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-600">
                We combine technical SEO expertise, ethical optimisation
                practices, data-driven research, and continuous performance
                improvement to help businesses achieve sustainable organic
                growth.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <span className="font-medium text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
              <div className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                SEO Partnership
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Transparent Reporting & Continuous Optimisation
              </h3>

              <p className="mb-8 text-lg leading-8 text-blue-100">
                We provide clear monthly reporting, ongoing optimisation, and
                dedicated SEO support so you always understand how your campaign
                is performing and where growth opportunities exist.
              </p>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Reporting</p>
                  <p className="font-semibold text-white">
                    Transparent Monthly SEO Reports
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Focus</p>
                  <p className="font-semibold text-white">
                    Sustainable Organic Growth
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
