import {
  CheckCircle2,
  Globe,
  Smartphone,
  ShieldCheck,
  MessageCircle,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const trustItems = [
  {
    title: "SEO-Friendly & High-Performance Websites",
    icon: Globe,
  },
  {
    title: "Mobile-First & Responsive Design",
    icon: Smartphone,
  },
  {
    title: "Result-Oriented Digital Marketing Strategies",
    icon: TrendingUp,
  },
  {
    title: "Fast Loading & Secure Websites",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Communication & Dedicated Support",
    icon: MessageCircle,
  },
  {
    title: "Affordable & Scalable Solutions",
    icon: Zap,
  },
  {
    title: "Customized Marketing Plans",
    icon: Target,
  },
  {
    title: "Focused on Lead Generation & Business Growth",
    icon: CheckCircle2,
  },
];

export default function TrustSignals() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-20 lg:py-24">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Trust & Performance
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Businesses Trust Flareway Technologies
            </h2>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold leading-7 text-gray-900">
                    {item.title}
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
