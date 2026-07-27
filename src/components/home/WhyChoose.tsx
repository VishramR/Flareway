import {
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Users,
  Brain,
  FileText,
  Wallet,
  Handshake,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const features = [
  {
    icon: Users,
    title: "Experienced Professionals",
    description:
      "Website development and digital marketing specialists focused on measurable business outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "SEO-First Development",
    description:
      "Every website is built with performance, search visibility, and long-term scalability in mind.",
  },
  {
    icon: Brain,
    title: "AI-Assisted & Data-Driven",
    description:
      "We use research, analytics, and AI-assisted workflows to improve campaign efficiency and decision-making.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Clear communication, performance tracking, and actionable insights throughout your project.",
  },
  {
    icon: Wallet,
    title: "Affordable & Scalable",
    description:
      "Flexible solutions designed for startups, SMEs, and growing businesses without hidden costs.",
  },
  {
    icon: Handshake,
    title: "Long-Term Growth Partner",
    description:
      "We focus on sustainable lead generation, ROI, and ongoing optimization beyond the initial launch.",
  },
];

const quickPoints = [
  "Customized strategies for every business",
  "Dedicated project management & ongoing support",
  "No hidden pricing or unexpected charges",
  "Lead-generation focused execution",
];

export default function WhyChoose() {
  return (
    <FluidContainer className="bg-gray-950 text-white">
      <Container>
        <section className="py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Content */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Why Flareway
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Why Choose Flareway Technologies?
              </h2>

              <p className="mb-8 text-lg leading-8 text-gray-300">
                We combine modern web development, performance marketing, SEO,
                and data-driven strategy to help businesses attract the right
                audience, generate qualified leads, and achieve sustainable
                long-term growth.
              </p>

              {/* Quick Points */}
              <div className="grid gap-4 sm:grid-cols-2">
                {quickPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-green-400"
                      size={22}
                    />

                    <span className="font-medium text-gray-100">{point}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-8 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-white">
                    <FileText size={24} />
                  </div>

                  <div>
                    <h3 className="mb-1 text-lg font-semibold">
                      Performance-Focused Partnership
                    </h3>

                    <p className="leading-7 text-blue-100">
                      From website launch to SEO growth, paid advertising, and
                      conversion optimization, we continuously refine strategies
                      based on real performance data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Feature Cards */}
            <div className="grid gap-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/8 hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                        <Icon size={28} />
                      </div>

                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-white">
                          {feature.title}
                        </h3>

                        <p className="leading-7 text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
