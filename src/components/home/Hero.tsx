import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function Hero() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="pt-36 pb-24 lg:pt-30 lg:pb-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Flareway Technologies
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Digital Marketing & Website Development Company in Coimbatore
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-8 text-gray-600 lg:text-xl">
              Helping businesses in Coimbatore and across India grow with SEO,
              high-performance websites, Google Ads, social media marketing, and
              conversion-focused digital strategies.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
                Get Free Consultation
              </button>

              <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-50">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
