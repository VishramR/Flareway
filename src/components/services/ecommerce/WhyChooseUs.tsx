import {
  BadgeCheck,
  Search,
  Smartphone,
  CreditCard,
  TrendingUp,
  Scaling,
  MessageSquare,
  Handshake,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Experienced Ecommerce Developers",
  },
  {
    icon: Search,
    title: "SEO-Optimized Online Stores",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
  },
  {
    icon: CreditCard,
    title: "Secure Payment Integration",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused Design",
  },
  {
    icon: Scaling,
    title: "Scalable Solutions",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
  },
  {
    icon: Handshake,
    title: "Dedicated Support",
  },
  {
    icon: ArrowRight,
    title: "Long-Term Growth Partnership",
  },
];

export default function WhyChooseUs() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Flareway Technologies?
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Your Trusted Ecommerce Development Partner
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              We build ecommerce solutions that combine beautiful design,
              scalable technology, and business-focused strategies to help you
              increase sales and grow your online business with confidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    {reason.title}
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
