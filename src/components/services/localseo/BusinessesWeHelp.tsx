import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const businesses = [
  "Healthcare Clinics",
  "Educational Institutions",
  "Restaurants & Cafés",
  "Retail Stores",
  "Real Estate Companies",
  "Manufacturers",
  "Construction Companies",
  "Automobile Businesses",
  "IT Companies",
  "Export Businesses",
  "Textile Companies",
  "Startups & Small Businesses",
];

export default function BusinessesWeHelp() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Businesses We Help
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Local SEO Strategies Tailored to Your Industry
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every Local SEO strategy is customized based on your industry,
              customer behavior, location, competition, and business goals.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {businesses.map((business) => (
              <div
                key={business}
                className="rounded-2xl border border-gray-200 bg-white px-5 py-4 text-center font-medium text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
              >
                {business}
              </div>
            ))}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
