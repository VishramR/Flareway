import { ShieldCheck, HeartHandshake, Award } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const values = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "We provide honest recommendations, clear communication, realistic timelines, and performance-focused guidance throughout every project.",
  },
  {
    icon: Award,
    title: "Quality & Commitment",
    description:
      "We focus on delivering high-quality websites and marketing solutions that create measurable value and support long-term business growth.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "Our goal is not just to build websites or run campaigns, but to become a reliable digital growth partner in your business journey.",
  },
];

export default function ClientTrust() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Our Clients Trust Us
            </h2>

            <p className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Partnerships Built on Trust, Quality & Commitment
            </p>

            <p className="text-lg leading-8 text-gray-600">
              At Flareway Technologies, we believe successful partnerships are
              built on transparency, quality, and commitment. We focus on
              understanding your business, providing honest recommendations, and
              delivering digital solutions that create long-term value.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="text-lg leading-8 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-[28px] border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center">
            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-700">
              <span className="font-semibold text-gray-900">
                Our mission goes beyond delivering a project.
              </span>{" "}
              We aim to become a dependable partner that helps your business
              adapt, grow, and succeed in an evolving digital landscape.
            </p>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
