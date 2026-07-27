import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function WhatMakesUsDifferent() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                What Makes Our Branding Different?
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Strategic Branding That Builds Lasting Business Value
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                At Flareway Technologies, we believe successful branding is more
                than attractive visuals. Every branding project begins with
                understanding your business, target audience, industry, and
                long-term goals to create a brand identity that communicates
                your unique value.
              </p>

              <p>
                We combine creativity with business strategy to design logos,
                visual identities, and marketing assets that are memorable,
                consistent, and aligned with your overall marketing objectives.
              </p>

              <p>
                Every element—from typography and colour palettes to brand
                messaging and creative design—is carefully developed to create a
                cohesive experience across your website, social media, marketing
                materials, and customer touchpoints.
              </p>

              <p>
                Our goal is to build brands that inspire trust, strengthen
                recognition, differentiate your business from competitors, and
                support sustainable long-term business growth.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
