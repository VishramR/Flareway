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
                Professional Content Marketing Services
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Create Content That Educates, Builds Trust & Drives Business
                Growth
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                Content is the foundation of successful digital marketing.
                High-quality, SEO-optimized content helps your business rank
                higher in search engines, educate your audience, build trust,
                and convert visitors into customers.
              </p>

              <p>
                At Flareway Technologies, we develop customized content
                marketing strategies tailored to your business goals, target
                audience, and industry.
              </p>

              <p>
                Every piece of content is created to improve search visibility,
                support your marketing campaigns, build brand authority, and
                deliver long-term business value.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
