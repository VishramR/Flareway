import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const points = [
  "Clean, SEO-friendly code structure",
  "Fast loading speed and Core Web Vitals optimization",
  "Mobile responsiveness across all devices",
  "Structured navigation and optimized URLs",
  "Schema-ready architecture for better search visibility",
  "Strong technical foundation for long-term organic growth",
];

export default function SEOImportance() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why SEO-Friendly Website Development Matters
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Technical SEO Starts During Website Development
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-600">
                A visually appealing website alone isn't enough. To perform well
                in search engines and convert visitors into customers, your
                website must be technically optimized from the ground up.
              </p>

              <div className="space-y-4">
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

            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
              <div className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                SEO Foundation
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Built for Search Visibility
              </h3>

              <p className="mb-6 text-lg leading-8 text-blue-100">
                Every website we develop includes technical SEO best practices
                that support better indexing, improved performance, and
                long-term organic growth.
              </p>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm text-blue-100">Development Focus</p>
                <p className="text-xl font-bold text-white">
                  SEO + Performance + Conversions
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
