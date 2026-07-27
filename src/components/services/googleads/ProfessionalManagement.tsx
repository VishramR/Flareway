import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function ProfessionalManagement() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Choose Professional Google Ads Management?
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Avoid Wasted Ad Spend & Maximize Every Click
              </h2>

              <div className="space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  Running Google Ads without a clear strategy can lead to wasted
                  budget, poor targeting, and missed conversion opportunities.
                  Professional campaign management helps improve targeting,
                  reduce unnecessary spending, optimize ad performance, and
                  increase conversions through continuous testing and
                  refinement.
                </p>

                <p>
                  At Flareway Technologies, we focus on creating high-performing
                  campaigns that align with your business goals, generate
                  qualified leads, and deliver measurable ROI through
                  data-driven optimization.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
              <div className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                PPC Impact
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Better Targeting. Lower Waste. Higher ROI.
              </h3>

              <p className="mb-8 text-lg leading-8 text-blue-100">
                We continuously test keywords, audiences, bidding strategies,
                and ad creatives to improve conversion rates and maximize your
                advertising budget.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Primary Goal</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Qualified Leads
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm">
                  <p className="text-sm text-blue-100">Success Metric</p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Return on Ad Spend
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
