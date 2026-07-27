import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const industries = [
  "Manufacturing",
  "Healthcare",
  "Education",
  "Real Estate",
  "Construction",
  "Retail & E-commerce",
  "Restaurants & Hospitality",
  "Information Technology",
  "Export & Trading",
  "Textile & Garment",
  "Startups & Small Businesses",
];

export default function AboutIndustries() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Industries We Serve
            </h2>

            <p className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Customized Digital Solutions for Diverse Industries
            </p>

            <p className="text-lg leading-8 text-gray-600">
              We work with businesses across diverse industries, developing
              customized digital solutions that align with specific business
              goals, customer expectations, and target audiences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-center font-medium text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {industry}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-gray-600">
            No matter your industry, we develop customized website development
            and digital marketing solutions designed to support your business
            objectives and long-term growth.
          </p>
        </section>
      </Container>
    </FluidContainer>
  );
}
