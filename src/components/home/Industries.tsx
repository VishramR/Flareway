import {
  HeartPulse,
  GraduationCap,
  Factory,
  Building2,
  Hammer,
  Car,
  UtensilsCrossed,
  ShoppingCart,
  Laptop,
  Globe,
  Shirt,
  Rocket,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const industries = [
  {
    title: "Healthcare",
    icon: HeartPulse,
    description: "Hospitals, clinics, dental, and wellness businesses",
  },
  {
    title: "Education",
    icon: GraduationCap,
    description: "Schools, colleges, coaching centers, and ed-tech",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Industrial, engineering, and production companies",
  },
  {
    title: "Real Estate",
    icon: Building2,
    description: "Builders, developers, and property consultants",
  },
  {
    title: "Construction",
    icon: Hammer,
    description: "Contractors, architects, and infrastructure firms",
  },
  {
    title: "Automobile",
    icon: Car,
    description: "Dealerships, workshops, and automotive brands",
  },
  {
    title: "Restaurants & Hospitality",
    icon: UtensilsCrossed,
    description: "Restaurants, cafes, hotels, and resorts",
  },
  {
    title: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Retail stores, D2C brands, and online sellers",
  },
  {
    title: "Information Technology",
    icon: Laptop,
    description: "Software, SaaS, and technology companies",
  },
  {
    title: "Export & Trading",
    icon: Globe,
    description: "Exporters, importers, and trading businesses",
  },
  {
    title: "Textile & Garment",
    icon: Shirt,
    description: "Textile mills, garment manufacturers, and fashion brands",
  },
  {
    title: "Startups & SMEs",
    icon: Rocket,
    description: "New ventures and growing small businesses",
  },
];

export default function Industries() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-20 lg:py-28">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Industries We Serve
            </h2>

            <p className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Customized Solutions for Every Industry
            </p>

            <p className="text-lg leading-8 text-gray-600">
              Every industry has unique challenges, customer behavior, and
              competition. We tailor our website development and digital
              marketing strategies to match your specific business goals and
              market requirements.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {industry.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm lg:p-10">
            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              Don’t See Your Industry Listed?
            </h3>

            <p className="mx-auto mb-6 max-w-2xl text-lg leading-8 text-gray-600">
              We work with startups, SMEs, service-based businesses, and
              enterprise organizations across multiple sectors. Our strategies
              are customized based on your audience, competition, and growth
              objectives.
            </p>

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Discuss Your Business
            </button>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
