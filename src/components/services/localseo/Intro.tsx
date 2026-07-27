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
                Professional Local SEO Services
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Become the Business Customers Find First in Their Area
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                Local SEO helps businesses connect with customers who are
                actively searching for products or services in their area.
              </p>

              <p>
                Whether you operate a local shop, service business, clinic,
                restaurant, or manufacturing company, a strong local presence
                increases visibility, builds trust, and drives more enquiries.
              </p>

              <p>
                At Flareway Technologies, we create customized Local SEO
                strategies based on your business location, target audience, and
                competition.
              </p>

              <p>
                Our focus is on improving your Google Maps rankings, local
                search visibility, and overall online presence to support
                sustainable business growth.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
