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
                Professional Website Development Services
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Your Website Is One of Your Most Powerful Business Assets
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                Your website is more than an online brochure—it's one of your
                most powerful business assets. A professionally developed
                website builds credibility, improves customer engagement, and
                generates quality enquiries.
              </p>

              <p>
                As a trusted Website Development Company and Web Design Company
                in Coimbatore, we create modern websites that combine attractive
                design, clean development, SEO best practices, and exceptional
                performance.
              </p>

              <p>
                Whether you're launching a startup, upgrading your existing
                website, or expanding your online presence, we build scalable
                solutions that support long-term digital success.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
