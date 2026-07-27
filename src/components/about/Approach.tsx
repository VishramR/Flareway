import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, audience, and goals.",
  },
  {
    number: "02",
    title: "Research",
    description: "Analyze competitors, keywords, and market opportunities.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Develop websites and digital campaigns tailored to your business.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Monitor performance and improve results through continuous optimization.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Support your long-term digital success with ongoing improvements and strategic guidance.",
  },
];

export default function Approach() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Approach
            </h2>

            <p className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Strategic Process Focused on Business Growth
            </p>

            <p className="text-lg leading-8 text-gray-600">
              Every successful digital project begins with understanding your
              business. Our approach combines research, creativity, technology,
              and continuous optimization to deliver measurable outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[24px] border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
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
