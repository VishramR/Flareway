import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    number: "01",
    title: "SEO Audit & Website Analysis",
    description:
      "We evaluate your website's technical performance, content quality, and search visibility to identify improvement opportunities.",
  },
  {
    number: "02",
    title: "Competitor & Keyword Research",
    description:
      "Our SEO specialists analyse competitors, identify target keywords, and develop a customised optimisation strategy.",
  },
  {
    number: "03",
    title: "Technical SEO Optimisation",
    description:
      "We improve website speed, indexing, crawlability, mobile responsiveness, structured data, and technical performance.",
  },
  {
    number: "04",
    title: "On-Page & Content Optimisation",
    description:
      "We optimise website content, metadata, internal linking, headings, and user experience to improve search relevance.",
  },
  {
    number: "05",
    title: "Authority Building",
    description:
      "Our team strengthens your online authority through ethical off-page SEO, quality backlinks, and local citation building.",
  },
  {
    number: "06",
    title: "Performance Monitoring & Continuous Improvement",
    description:
      "We track keyword rankings, traffic, conversions, and technical performance while continuously refining your SEO strategy.",
  },
];

export default function Process() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our SEO Process
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              A Data-Driven SEO Process Designed for Growth
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every SEO campaign follows a structured process focused on
              technical optimisation, content relevance, authority building, and
              measurable business results.
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
