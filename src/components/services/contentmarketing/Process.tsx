import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    number: "01",
    title: "Business & Audience Research",
    description:
      "Understand your business, target audience, and content marketing goals before planning the strategy.",
  },
  {
    number: "02",
    title: "Keyword & Competitor Analysis",
    description:
      "Identify valuable keywords, analyse competitors, and uncover content opportunities that support long-term growth.",
  },
  {
    number: "03",
    title: "Content Strategy",
    description:
      "Develop a structured content plan aligned with your marketing objectives, SEO strategy, and customer journey.",
  },
  {
    number: "04",
    title: "Content Creation",
    description:
      "Write high-quality, SEO-friendly content designed for users while following search engine best practices.",
  },
  {
    number: "05",
    title: "Review & Optimization",
    description:
      "Review, refine, and optimize every piece of content for readability, SEO performance, and conversions.",
  },
  {
    number: "06",
    title: "Performance Monitoring",
    description:
      "Track content performance using analytics and continuously improve based on user behaviour and search trends.",
  },
];

export default function Process() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Content Marketing Process
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Strategic Process Built for Long-Term Growth
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every content project follows a structured workflow focused on
              research, SEO, quality, and measurable business results.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
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
