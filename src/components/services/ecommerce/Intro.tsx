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
                Professional Ecommerce Website Development Services
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Build an Online Store Designed to Sell More
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-600">
              <p>
                A professionally developed ecommerce website helps businesses
                sell products online, reach more customers, and streamline
                business operations.
              </p>

              <p>
                A successful online store combines attractive design, fast
                performance, secure payment processing, and a seamless shopping
                experience that encourages customers to browse, purchase, and
                return.
              </p>

              <p>
                At Flareway Technologies, we build customized ecommerce websites
                tailored to your products, customers, and business objectives.
                Every solution is designed with scalability, performance, and
                user experience in mind.
              </p>

              <p>
                Whether you're launching a new online store or upgrading an
                existing one, we create secure, SEO-friendly ecommerce websites
                that maximize sales, improve customer satisfaction, and support
                long-term business growth.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
