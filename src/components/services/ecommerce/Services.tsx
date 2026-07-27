import {
  Store,
  ShoppingBag,
  Package,
  ShoppingCart,
  CreditCard,
  Truck,
  Wrench,
  Boxes,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const services = [
  {
    icon: Store,
    title: "Custom Ecommerce Website Development",
    description:
      "We develop fully customized ecommerce websites that reflect your brand identity while providing a seamless shopping experience.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Website Development",
    description:
      "Build modern Shopify stores with secure payment gateways, responsive design, and easy product management.",
  },
  {
    icon: Boxes,
    title: "WooCommerce Website Development",
    description:
      "Create flexible WooCommerce websites integrated with WordPress for businesses seeking complete control and scalability.",
  },
  {
    icon: Package,
    title: "Product Catalog Management",
    description:
      "Organize products with categories, filters, search functionality, inventory management, and detailed product pages.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Cart & Checkout Optimization",
    description:
      "Improve conversions with simplified shopping carts, secure checkout processes, and multiple payment options.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description:
      "Integrate trusted payment gateways for secure online transactions and a smooth customer experience.",
  },
  {
    icon: Truck,
    title: "Shipping & Order Management",
    description:
      "Configure shipping options, order tracking, inventory management, and automated notifications.",
  },
  {
    icon: Wrench,
    title: "Ecommerce Website Maintenance",
    description:
      "Keep your online store updated, secure, and optimized with ongoing maintenance and technical support.",
  },
];

export default function Services() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Ecommerce Website Development Services
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Complete Ecommerce Solutions for Every Business
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              From custom online stores and secure payment integrations to
              product management and ongoing maintenance, we build ecommerce
              solutions that help businesses grow and sell more online.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {service.description}
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
