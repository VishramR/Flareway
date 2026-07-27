import {
  Smartphone,
  Search,
  CreditCard,
  Package,
  ShoppingCart,
  BadgePercent,
  Truck,
  UserRound,
  ChartNoAxesCombined,
  Zap,
  ShieldCheck,
  Scaling,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-Responsive Design",
  },
  {
    icon: Search,
    title: "SEO-Friendly Architecture",
  },
  {
    icon: CreditCard,
    title: "Secure Payment Gateway Integration",
  },
  {
    icon: Package,
    title: "Product & Inventory Management",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Cart & Wishlist",
  },
  {
    icon: BadgePercent,
    title: "Coupon & Discount Management",
  },
  {
    icon: Truck,
    title: "Order Tracking",
  },
  {
    icon: UserRound,
    title: "Customer Account Management",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Analytics Integration",
  },
  {
    icon: Zap,
    title: "Fast Loading Performance",
  },
  {
    icon: ShieldCheck,
    title: "SSL Security",
  },
  {
    icon: Scaling,
    title: "Scalable Architecture",
  },
];

export default function Features() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Ecommerce Features We Offer
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Everything Your Online Store Needs
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Powerful ecommerce features designed to improve shopping
              experiences, streamline store management, increase conversions,
              and support long-term business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
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
