import {
  Factory,
  Shirt,
  ShoppingBag,
  Car,
  HeartPulse,
  UtensilsCrossed,
  GraduationCap,
  Building2,
  Sofa,
  BookOpen,
  Gem,
  Rocket,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const industries = [
  {
    icon: Shirt,
    title: "Fashion & Apparel",
  },
  {
    icon: ShoppingBag,
    title: "Electronics",
  },
  {
    icon: Sofa,
    title: "Furniture",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
  },
  {
    icon: Gem,
    title: "Beauty & Cosmetics",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Grocery",
  },
  {
    icon: Factory,
    title: "Manufacturing",
  },
  {
    icon: Building2,
    title: "Retail",
  },
  {
    icon: Car,
    title: "Automotive",
  },
  {
    icon: BookOpen,
    title: "Books & Education",
  },
  {
    icon: GraduationCap,
    title: "Jewellery",
  },
  {
    icon: Rocket,
    title: "Startups & SMEs",
  },
];

export default function Industries() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Industries We Serve
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Ecommerce Solutions for Every Industry
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Our ecommerce websites are tailored to your products, customers,
              and business goals, helping businesses across diverse industries
              deliver exceptional shopping experiences and sustainable online
              growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {industry.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center">
            <p className="text-lg leading-8 text-gray-600">
              Every ecommerce solution is customized based on your products,
              target audience, and business objectives to maximize conversions,
              improve customer satisfaction, and support long-term business
              growth.
            </p>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
