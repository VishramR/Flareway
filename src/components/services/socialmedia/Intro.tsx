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
                Professional Social Media Marketing Services
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Social Engagement Into Real Business Growth
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                Social media marketing is more than simply publishing posts —
                it's about building meaningful relationships with your audience
                and turning engagement into business opportunities.
              </p>

              <p>
                At Flareway Technologies, we create customized social media
                strategies tailored to your industry, target audience, and
                business objectives.
              </p>

              <p>
                From content planning and creative design to paid advertising
                and performance analysis, we help businesses increase brand
                awareness, drive customer engagement, and achieve sustainable
                business growth.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
