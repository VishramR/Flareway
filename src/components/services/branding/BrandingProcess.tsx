import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    number: "01",
    title: "Brand Discovery",
    description:
      "Understand your business, audience, values, and market positioning.",
  },
  {
    number: "02",
    title: "Research & Strategy",
    description:
      "Analyze competitors, customer expectations, and industry trends to define your brand direction.",
  },
  {
    number: "03",
    title: "Creative Design",
    description:
      "Develop logo concepts, brand identity elements, and marketing assets aligned with your business goals.",
  },
  {
    number: "04",
    title: "Brand Refinement",
    description:
      "Review, refine, and finalize designs based on feedback while maintaining consistency.",
  },
  {
    number: "05",
    title: "Brand Delivery",
    description:
      "Deliver complete branding assets and guidelines for consistent implementation across digital and print platforms.",
  },
];

export default function BrandingProcess() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Branding Process
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Strategic Approach to Building Memorable Brands
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every successful brand begins with research, creativity, and
              strategic thinking. Our structured branding process helps create a
              unique identity that connects with your audience and supports
              long-term business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="leading-7 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
