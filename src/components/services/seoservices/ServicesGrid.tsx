import {
  Settings,
  FileText,
  Link2,
  MapPin,
  ShoppingCart,
  Search,
  Target,
  PenTool,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const services = [
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "Website speed, crawlability, indexing, Core Web Vitals, structured data, XML sitemaps, robots.txt, and mobile optimisation.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description:
      "Keyword optimisation, content enhancement, metadata, heading structure, internal linking, and UX improvements.",
  },
  {
    icon: Link2,
    title: "Off-Page SEO",
    description:
      "Ethical link building, business citations, digital PR, and authority-building strategies.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Google Business Profile optimisation, local citations, location pages, and local search visibility.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce SEO",
    description:
      "Category optimisation, product SEO, structured data, and conversion-focused strategies for online stores.",
  },
  {
    icon: Search,
    title: "SEO Audit & Website Analysis",
    description:
      "Comprehensive technical audits, content analysis, indexing checks, and optimisation roadmaps.",
  },
  {
    icon: Target,
    title: "Keyword Research & Competitor Analysis",
    description:
      "High-value keyword identification, search intent analysis, and competitor strategy research.",
  },
  {
    icon: PenTool,
    title: "Content Optimisation",
    description:
      "SEO-friendly website content, service pages, landing pages, blogs, and conversion-focused copy.",
  },
];

export default function ServicesGrid() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our SEO Services
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Complete SEO Solutions for Modern Businesses
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {service.description}
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
