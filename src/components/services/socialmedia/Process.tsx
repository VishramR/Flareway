import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    number: "01",
    title: "Business & Audience Analysis",
    description:
      "We understand your business goals, audience, and competitors.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "We create a customized content and advertising strategy aligned with your objectives.",
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "Our team develops engaging creatives, videos, captions, and campaign assets.",
  },
  {
    number: "04",
    title: "Campaign Execution",
    description:
      "We publish content, manage advertising campaigns, and engage with your audience.",
  },
  {
    number: "05",
    title: "Performance Optimization",
    description:
      "We monitor engagement, reach, and campaign performance to improve results continuously.",
  },
  {
    number: "06",
    title: "Reporting & Growth",
    description:
      "Receive transparent performance reports with actionable insights and recommendations.",
  },
];

export default function Process() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Social Media Marketing Process
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Structured Process for Consistent Brand Growth
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every campaign follows a strategic process focused on audience
              engagement, content consistency, paid performance, and measurable
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
