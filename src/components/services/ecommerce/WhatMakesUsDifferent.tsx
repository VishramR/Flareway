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
                What Makes Our Ecommerce Solutions Different?
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Built for Performance, Growth & Higher Conversions
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                At Flareway Technologies, we build ecommerce websites that focus
                on performance, user experience, and business growth. Every
                online store is optimized for speed, mobile responsiveness, SEO,
                and conversions to help businesses increase sales and provide an
                exceptional shopping experience.
              </p>

              <p>
                We combine modern UI/UX design with scalable development,
                intuitive navigation, and secure ecommerce functionality to
                create online stores that are easy to manage and enjoyable for
                customers to use.
              </p>

              <p>
                From product discovery and secure checkout to inventory
                management and payment gateway integration, every feature is
                carefully implemented to streamline operations and improve
                customer satisfaction.
              </p>

              <p>
                Our goal is to build ecommerce solutions that not only look
                professional but also deliver measurable business results by
                increasing conversions, strengthening customer trust, and
                supporting long-term online growth.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
