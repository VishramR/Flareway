import {
  TrendingUp,
  Search,
  BadgeCheck,
  GraduationCap,
  Users,
  MousePointerClick,
  Globe,
  BarChart3,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const benefits = [
  {
    icon: Search,
    title: "Improve Search Engine Rankings",
  },
  {
    icon: TrendingUp,
    title: "Increase Organic Traffic",
  },
  {
    icon: BadgeCheck,
    title: "Build Brand Authority",
  },
  {
    icon: GraduationCap,
    title: "Educate Customers",
  },
  {
    icon: Users,
    title: "Generate Qualified Leads",
  },
  {
    icon: MousePointerClick,
    title: "Improve Website Engagement",
  },
  {
    icon: Globe,
    title: "Support SEO & Google Ads",
  },
  {
    icon: BarChart3,
    title: "Drive Long-Term Business Growth",
  },
];

export default function WhyContentMarketingMatters() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Content Marketing Matters
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              High-Quality Content Powers Every Successful Marketing Strategy
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Strategic content marketing helps businesses increase visibility,
              build customer trust, generate qualified leads, and create
              sustainable long-term growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
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
