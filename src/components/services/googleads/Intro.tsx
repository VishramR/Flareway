import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function Intro() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Professional Google Ads Services
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Reach High-Intent Customers at the Exact Moment They Search
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                Google Ads is one of the fastest ways to reach potential
                customers actively searching for your products or services.
              </p>

              <p>
                A well-managed campaign helps you appear at the top of Google
                Search, attract high-intent visitors, and generate leads without
                waiting for long-term organic rankings.
              </p>

              <p>
                As a trusted Google Ads Agency in Coimbatore, Flareway
                Technologies creates customized Pay-Per-Click (PPC) campaigns
                based on your business goals, target audience, budget, and
                competition.
              </p>

              <p>
                We continuously optimize campaigns to improve click-through
                rates, conversions, and return on ad spend through data-driven
                testing, audience refinement, and conversion-focused
                optimization.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
