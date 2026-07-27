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
                Professional Branding & Creative Design Services
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Build a Strong Brand Identity That Customers Recognize & Trust
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                Your brand is more than a logo—it's how customers recognize,
                remember, and trust your business. A strong visual identity and
                consistent brand messaging help differentiate your business from
                competitors and create lasting customer relationships.
              </p>

              <p>
                At Flareway Technologies, we create customized branding and
                creative design solutions tailored to your business goals,
                industry, and target audience, ensuring every visual element
                reflects your unique identity.
              </p>

              <p>
                From professional logo design and complete brand identity
                systems to marketing collateral, website graphics, and social
                media creatives, we help businesses establish a memorable and
                professional presence across both digital and print platforms.
              </p>

              <p>
                Our strategic approach combines creativity with business
                objectives, delivering branding solutions that strengthen brand
                recognition, build customer trust, and support long-term
                business growth.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
