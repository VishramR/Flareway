import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    number: "01",
    title: "Local SEO Audit",
    description:
      "Analyze your website, Google Business Profile, and local online presence.",
  },
  {
    number: "02",
    title: "Competitor & Keyword Research",
    description:
      "Identify local competitors and high-value location-based keywords.",
  },
  {
    number: "03",
    title: "Profile & Website Optimization",
    description:
      "Optimize your Google Business Profile, website content, schema, and location pages.",
  },
  {
    number: "04",
    title: "Citation & Review Management",
    description:
      "Build local citations and improve your online reputation through review strategies.",
  },
  {
    number: "05",
    title: "Performance Monitoring",
    description:
      "Track rankings, profile insights, traffic, and customer interactions to refine the strategy.",
  },
  {
    number: "06",
    title: "Continuous Growth",
    description:
      "Implement ongoing optimizations to maintain rankings and improve lead generation.",
  },
];

export default function Process() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Local SEO Process
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Proven Process for Better Local Rankings
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every Local SEO campaign follows a structured process focused on
              Google Maps visibility, local authority, customer trust, and
              sustainable lead generation.
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
