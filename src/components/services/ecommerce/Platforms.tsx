import { ShoppingBag, Store, Globe, Code2, Layers3 } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const platforms = [
  {
    icon: ShoppingBag,
    title: "Shopify",
    description:
      "Launch secure, scalable Shopify stores with powerful ecommerce features and easy product management.",
  },
  {
    icon: Store,
    title: "WooCommerce",
    description:
      "Flexible WooCommerce solutions integrated with WordPress for complete customization and business growth.",
  },
  {
    icon: Globe,
    title: "WordPress",
    description:
      "SEO-friendly ecommerce websites built on WordPress with excellent performance and scalability.",
  },
  {
    icon: Code2,
    title: "Custom PHP Solutions",
    description:
      "Tailor-made ecommerce solutions designed around your unique business processes and requirements.",
  },
  {
    icon: Layers3,
    title: "Laravel",
    description:
      "Enterprise-grade ecommerce applications built using Laravel for security, scalability, and long-term performance.",
  },
];

export default function Platforms() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Platforms We Work With
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Choose the Right Platform for Your Business
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              We build ecommerce websites using trusted technologies selected
              according to your products, business goals, scalability
              requirements, and future growth plans.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <div
                  key={platform.title}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {platform.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {platform.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
