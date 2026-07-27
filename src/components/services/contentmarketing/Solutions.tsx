import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  "Website Content",
  "SEO Blog Articles",
  "Service Pages",
  "Product Descriptions",
  "Landing Pages",
  "Company Profiles",
  "Email Campaigns",
  "Social Media Captions",
  "Case Studies",
  "FAQs",
  "Content Calendars",
  "Content Refresh & Optimization",
];

export default function Solutions() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Content Solutions We Offer
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Content Designed to Support Every Stage of Your Marketing
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              From SEO-focused website copy to high-converting landing pages and
              engaging social media content, we create content that helps your
              business attract visitors, build trust, and generate more leads.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {solutions.map((solution) => (
              <div
                key={solution}
                className="flex items-center gap-4 rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <CheckCircle2 size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {solution}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
