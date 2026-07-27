import {
  Globe,
  Building2,
  ShoppingCart,
  Code2,
  LayoutTemplate,
  RefreshCw,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const services = [
  {
    icon: Globe,
    title: "Business Website Design & Development",
    description:
      "Professional business websites optimized for speed, security, SEO, and lead generation.",
  },
  {
    icon: Building2,
    title: "Corporate Website Development",
    description:
      "Modern corporate websites that communicate your brand, expertise, and services effectively.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    description:
      "Secure online stores with payment gateway integration, inventory management, and conversion-focused shopping experiences.",
  },
  {
    icon: Code2,
    title: "Custom Website Development",
    description:
      "Tailored web solutions designed around your business processes and long-term growth objectives.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Page Development",
    description:
      "High-converting landing pages for Google Ads, SEO campaigns, and lead generation.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign Services",
    description:
      "Transform outdated websites with modern design, better performance, and SEO-friendly architecture.",
  },
];

export default function ServicesGrid() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Website Development Services
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Complete Web Solutions for Modern Businesses
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
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
