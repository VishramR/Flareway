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
                Get In Touch
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                We'd Love to Hear About Your Project
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                Have a project in mind or need expert digital marketing
                guidance? We'd love to hear from you.
              </p>

              <p>
                Contact Flareway Technologies to discuss your business goals,
                website requirements, or digital marketing strategy.
              </p>

              <p>
                Whether you're looking to build a new website, improve your
                Google rankings, launch advertising campaigns, or strengthen
                your online presence, our team will recommend the right solution
                tailored to your business.
              </p>

              <p>
                Let's work together to build a strong digital presence that
                drives measurable business growth.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
