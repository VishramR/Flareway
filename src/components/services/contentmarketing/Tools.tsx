import {
  Search,
  BarChart3,
  KeyRound,
  TrendingUp,
  FileText,
  SpellCheck,
  MonitorSmartphone,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const tools = [
  { icon: Search, title: "Google Search Console" },
  { icon: BarChart3, title: "Google Analytics 4" },
  { icon: KeyRound, title: "Google Keyword Planner" },
  { icon: TrendingUp, title: "Google Trends" },
  { icon: FileText, title: "Google Docs" },
  { icon: SpellCheck, title: "Grammarly" },
  { icon: MonitorSmartphone, title: "Looker Studio" },
];

export default function Tools() {
  return (
    <FluidContainer>
      <Container>
        <section className="py-24">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Tools We Use
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Industry-Leading Content & SEO Tools
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <div
                  key={tool.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon />
                  </div>

                  <h3 className="font-semibold">{tool.title}</h3>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
