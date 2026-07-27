import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    number: "01",
    title: "Business & Goal Analysis",
    description:
      "Understand your objectives, target audience, and advertising goals.",
  },
  {
    number: "02",
    title: "Keyword & Competitor Research",
    description:
      "Identify high-intent keywords and analyze competitors to build a strategic campaign.",
  },
  {
    number: "03",
    title: "Campaign Setup",
    description:
      "Create optimized campaigns, compelling ad copy, audience targeting, and bidding strategies.",
  },
  {
    number: "04",
    title: "Conversion Tracking",
    description:
      "Configure GA4, Google Tag Manager, and conversion tracking for accurate performance measurement.",
  },
  {
    number: "05",
    title: "Continuous Optimization",
    description:
      "Monitor keywords, bids, ad creatives, and audience performance to improve ROI.",
  },
  {
    number: "06",
    title: "Reporting & Growth",
    description:
      "Provide transparent performance reports with actionable insights and ongoing campaign improvements.",
  },
];

export default function Process() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Google Ads Process
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Conversion-Focused PPC Process
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every campaign follows a structured process focused on lead
              generation, budget efficiency, conversion tracking, and continuous
              performance improvement.
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
