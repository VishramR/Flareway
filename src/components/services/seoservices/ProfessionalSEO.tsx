import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function ProfessionalSEO() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Choose Professional SEO Services?
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                SEO Is a Long-Term Investment in Sustainable Business Growth
              </h2>

              <div className="space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  SEO is a long-term investment that helps businesses build
                  sustainable online growth. Unlike paid advertising, which
                  stops generating traffic when your budget ends, SEO continues
                  to attract qualified visitors over time through improved
                  search rankings and valuable content.
                </p>

                <p>
                  A professionally executed SEO strategy strengthens your brand
                  authority, improves customer trust, and delivers consistent
                  opportunities for lead generation and business growth.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
              <div className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                SEO vs Paid Ads
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Organic Growth Continues After the Campaign
              </h3>

              <p className="mb-8 text-lg leading-8 text-blue-100">
                Paid ads stop when the budget stops. SEO continues building
                visibility, authority, and traffic through stronger rankings,
                better content, and improved user experience.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">SEO</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Compounding Growth
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Paid Ads</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Budget-Dependent
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
