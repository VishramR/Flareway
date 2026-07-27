import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const reasons = [
  "Trusted Website Development Company in Coimbatore",
  "Responsive & Mobile-Friendly Website Design",
  "SEO-First Development Approach",
  "Fast Loading & Secure Websites",
  "User-Focused UI/UX Design",
  "Customized Website Solutions",
  "Ethical Development & SEO Best Practices",
  "Transparent Communication & Project Updates",
  "Ongoing Website Maintenance & Technical Support",
  "Long-Term Business Growth Partnership",
];

export default function WhyChoose() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Flareway Technologies
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Reliable Development Partner for Long-Term Growth
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
              >
                <CheckCircle2
                  size={24}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <span className="font-medium text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
