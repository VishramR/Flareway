import {
  MessageSquare,
  Search,
  PenTool,
  BarChart3,
  Rocket,
  ArrowDown,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const steps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We understand your business objectives, target audience, competitors, and growth opportunities to build the right digital strategy.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Research & Strategy",
    description:
      "Our team performs keyword research, competitor analysis, and market research to create a customized digital marketing roadmap.",
    icon: Search,
  },
  {
    step: "03",
    title: "Design & Implementation",
    description:
      "We develop your website and execute digital marketing campaigns aligned with your business goals and target audience.",
    icon: PenTool,
  },
  {
    step: "04",
    title: "Optimization & Performance",
    description:
      "We continuously monitor, analyze, and optimize website performance and marketing campaigns to improve traffic, enquiries, and conversions.",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "Growth & Scale",
    description:
      "Using performance insights and continuous optimization, we help your business generate consistent leads, improve ROI, and achieve sustainable long-term growth.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-20 lg:py-28">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Workflow
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Working Process
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              A structured, transparent, and performance-focused approach that
              takes your business from strategy to measurable digital growth.
            </p>
          </div>

          {/* Timeline */}
          <div className="mx-auto max-w-5xl">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.step} className="relative">
                  <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg lg:grid-cols-[120px_1fr]">
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-start lg:items-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25">
                        <Icon size={30} />
                      </div>

                      <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                        {step.title}
                      </h3>

                      <p className="text-lg leading-8 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector */}
                  {!isLast && (
                    <div className="flex justify-center py-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600">
                        <ArrowDown size={22} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Summary */}
          <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  Why Our Process Delivers Better Results
                </h3>

                <p className="text-lg leading-8 text-gray-700">
                  Many agencies focus only on launching a website or running
                  ads. Our process is designed around{" "}
                  <span className="font-semibold text-gray-900">
                    continuous improvement
                  </span>{" "}
                  — using analytics, SEO insights, conversion data, and campaign
                  performance to refine strategies and maximize your return on
                  investment over time.
                </p>
              </div>

              <div className="flex items-center">
                <div className="rounded-2xl bg-white px-6 py-5 text-center shadow-sm">
                  <p className="text-3xl font-bold text-blue-600">5</p>
                  <p className="mt-1 text-sm font-medium text-gray-600">
                    Proven Growth Steps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
