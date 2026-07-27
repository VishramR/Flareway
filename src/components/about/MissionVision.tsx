import { Target, Eye } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    subtitle: "Helping Businesses Succeed in the Digital World",
    description:
      "Our mission is to empower businesses with reliable, innovative, and performance-driven digital solutions that improve online visibility, strengthen brand identity, and generate consistent business opportunities.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    subtitle: "To Become a Trusted Digital Growth Partner for Businesses",
    description:
      "Our vision is to become one of the most trusted website development and digital marketing companies by delivering innovative solutions, maintaining the highest standards of quality, and helping businesses adapt to the evolving digital landscape.",
  },
];

export default function MissionVision() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={32} />
                  </div>

                  <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    {card.title}
                  </h2>

                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {card.subtitle}
                  </h3>

                  <p className="text-lg leading-8 text-gray-600">
                    {card.description}
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
