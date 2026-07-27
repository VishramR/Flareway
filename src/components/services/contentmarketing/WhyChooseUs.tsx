import {
  FilePenLine,
  Search,
  Building2,
  PenTool,
  Target,
  MessageSquare,
  Headphones,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const reasons = [
  {
    icon: FilePenLine,
    title: "Experienced Content Marketing Specialists",
  },
  {
    icon: Search,
    title: "SEO-Driven Content Strategy",
  },
  {
    icon: Building2,
    title: "Industry-Specific Content Creation",
  },
  {
    icon: PenTool,
    title: "Human-Written Original Content",
  },
  {
    icon: Target,
    title: "Keyword & User Intent Optimization",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
  },
  {
    icon: Headphones,
    title: "Dedicated Content Support",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth Focus",
  },
];

export default function WhyChooseUs() {
  return (
    <FluidContainer>
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Flareway Technologies?
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Content That Delivers Business Results
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              We combine SEO expertise, strategic planning, and high-quality
              writing to create content that drives measurable business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
