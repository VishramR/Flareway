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
                Professional SEO Services
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Sustainable Organic Growth Through Ethical SEO
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                Search Engine Optimisation (SEO) is one of the most effective
                digital marketing strategies for increasing your online
                visibility and attracting potential customers.
              </p>

              <p>
                A well-optimized website helps your business rank higher in
                Google Search, drive targeted traffic, and generate consistent
                enquiries without relying entirely on paid advertising.
              </p>

              <p>
                As a trusted SEO Company in Coimbatore, Flareway Technologies
                develops customized SEO strategies based on your industry,
                business goals, target audience, and competition.
              </p>

              <p>
                Our focus is on improving your website's performance, enhancing
                user experience, and creating sustainable organic growth through
                ethical SEO practices.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
