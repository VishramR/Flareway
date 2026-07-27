import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function ProfessionalLocalSEO() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Choose Professional Local SEO?
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Show Up Where Local Customers Are Already Looking
              </h2>

              <div className="space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  Professional Local SEO helps businesses appear where local
                  customers are searching — Google Search, Google Maps, and
                  location-based results.
                </p>

                <p>
                  Through Google Business Profile optimization, location-based
                  content, citation management, and reputation building,
                  businesses can improve visibility, attract qualified local
                  enquiries, and grow sustainably without relying solely on paid
                  advertising.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
              <div className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                Local Impact
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Better Maps Visibility. More Local Enquiries.
              </h3>

              <p className="mb-8 text-lg leading-8 text-blue-100">
                The businesses that consistently appear in Google Maps and local
                search results receive more calls, direction requests, website
                visits, and qualified customer enquiries.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Primary Benefit</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Maps Visibility
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Business Outcome</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Qualified Leads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
