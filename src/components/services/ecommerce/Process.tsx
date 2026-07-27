import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    number: "01",
    title: "Business Consultation",
    description: "Understand your products, audience, and business goals.",
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description:
      "Define your website structure, ecommerce features, and customer journey to create a seamless shopping experience.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "Build a secure, responsive, and user-friendly ecommerce website tailored to your business requirements.",
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description:
      "Test performance, security, checkout flow, payment gateways, and responsiveness before launch.",
  },
  {
    number: "05",
    title: "Launch & Ongoing Support",
    description:
      "Launch your online store and provide continuous updates, maintenance, and performance improvements.",
  },
];

export default function Process() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Ecommerce Development Process
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Structured Process for Building Successful Online Stores
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every ecommerce project follows a proven development process
              focused on delivering secure, scalable, and conversion-driven
              online stores that support long-term business growth.
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
