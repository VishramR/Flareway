import { Building2 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const industries = [
  "Healthcare",
  "Education",
  "Manufacturing",
  "Real Estate",
  "Construction",
  "Automobile",
  "Retail & E-commerce",
  "Restaurants & Hospitality",
  "Information Technology",
  "Export & Trading",
  "Textile & Garment",
  "Startups & Small Businesses",
];

export default function Industries() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Industries We Serve
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Content Strategies Tailored to Every Industry
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every content strategy is customised around your audience,
              industry, and business objectives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <Building2 className="text-blue-600" />

                <span className="font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
