import {
  ShoppingBag,
  Globe,
  TrendingUp,
  Smile,
  BadgeCheck,
  Wallet,
  Map,
  Rocket,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const benefits = [
  {
    icon: ShoppingBag,
    title: "Sell Products 24/7",
  },
  {
    icon: Globe,
    title: "Reach More Customers",
  },
  {
    icon: TrendingUp,
    title: "Increase Online Sales",
  },
  {
    icon: Smile,
    title: "Improve Customer Convenience",
  },
  {
    icon: BadgeCheck,
    title: "Build Brand Credibility",
  },
  {
    icon: Wallet,
    title: "Reduce Operational Costs",
  },
  {
    icon: Map,
    title: "Expand into New Markets",
  },
  {
    icon: Rocket,
    title: "Support Long-Term Business Growth",
  },
];

export default function WhyEcommerce() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Ecommerce Matters
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Grow Your Business Beyond Physical Boundaries
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              A professionally developed ecommerce website helps businesses
              reach more customers, increase online sales, improve shopping
              experiences, and create sustainable long-term growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
