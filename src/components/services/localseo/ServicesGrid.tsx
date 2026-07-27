import {
  MapPin,
  Navigation,
  Search,
  Building2,
  FileText,
  Star,
  Globe,
  BarChart3,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const services = [
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description:
      "Optimize categories, services, products, photos, business information, and regular updates to improve local visibility.",
  },
  {
    icon: Navigation,
    title: "Google Maps SEO",
    description:
      "Improve Google Maps rankings through profile optimization, location relevance, reviews, and local authority building.",
  },
  {
    icon: Search,
    title: "Local Keyword Research",
    description:
      "Identify high-intent location-based keywords that connect your business with nearby customers.",
  },
  {
    icon: Building2,
    title: "Local Citation Management",
    description:
      "Create and maintain consistent business listings across trusted online directories.",
  },
  {
    icon: FileText,
    title: "Location Page Optimization",
    description:
      "Develop SEO-optimized city and service pages that improve visibility in local search results.",
  },
  {
    icon: Star,
    title: "Review & Reputation Management",
    description:
      "Encourage genuine customer reviews and strengthen your online reputation and local trust signals.",
  },
  {
    icon: Globe,
    title: "On-Page Local SEO",
    description:
      "Optimize metadata, headings, schema markup, internal links, and localized content for better local relevance.",
  },
  {
    icon: BarChart3,
    title: "Local SEO Reporting",
    description:
      "Receive transparent monthly reports covering rankings, profile performance, traffic, and local visibility.",
  },
];

export default function ServicesGrid() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Local SEO Services
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Complete Local Search Optimization for Businesses
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
