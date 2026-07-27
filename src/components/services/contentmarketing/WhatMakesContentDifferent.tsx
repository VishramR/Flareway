import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function WhatMakesContentDifferent() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                What Makes Our Content Marketing Different?
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Content That Ranks, Educates & Converts
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                At Flareway Technologies, we combine SEO expertise with
                strategic content planning. Every article, landing page, and
                website copy is researched, optimized, and written to address
                user intent while supporting your business objectives.
              </p>

              <p>
                Our focus is on creating content that not only ranks well in
                search engines but also builds trust, strengthens your brand,
                improves customer engagement, and generates measurable business
                results.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
