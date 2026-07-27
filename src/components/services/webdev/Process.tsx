import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We understand your business objectives, target audience, competitors, and website requirements.",
  },
  {
    number: "02",
    title: "Research & Planning",
    description:
      "Our team researches your industry, competitors, and keywords before creating a structured website strategy.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "We design clean, engaging, and user-friendly interfaces that represent your brand professionally.",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "Our developers build responsive, secure, SEO-friendly websites using modern technologies and best coding practices.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    description:
      "Every website undergoes comprehensive testing for speed, responsiveness, browser compatibility, security, and overall performance.",
  },
  {
    number: "06",
    title: "Launch & Ongoing Support",
    description:
      "After launch, we provide technical support, website maintenance, performance monitoring, and continuous improvements.",
  },
];

export default function Process() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Website Development Process
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Structured Process Designed for Results
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              From strategy and design to launch and ongoing support, every
              project follows a proven process focused on performance, SEO, and
              business growth.
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
