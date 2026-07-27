import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function AboutContent() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                About Us
              </h2>

              <p className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Empowering Businesses with Innovative Digital Solutions
              </p>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                Flareway Technologies is a trusted Website Development and
                Digital Marketing Company in Coimbatore dedicated to helping
                businesses establish, grow, and strengthen their online
                presence. We combine creativity, technology, and data-driven
                marketing strategies to deliver digital solutions that improve
                visibility, generate qualified leads, and support long-term
                business growth.
              </p>

              <p>
                Whether you're a startup, small business, manufacturer,
                educational institution, healthcare provider, or enterprise, our
                team develops customized strategies tailored to your business
                objectives. From professional website development to SEO, Google
                Ads, social media marketing, branding, and content marketing, we
                focus on creating digital experiences that deliver measurable
                value.
              </p>

              <p>
                Serving businesses across Coimbatore, including Peelamedu,
                Gandhipuram, RS Puram, Saravanampatti, Singanallur, and nearby
                cities such as Tiruppur, Erode, Salem, Pollachi, and Chennai, we
                help organizations connect with their audience and achieve
                sustainable digital growth.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
