import { MapPin, TrendingUp, Users, Globe } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const highlights = [
  {
    icon: TrendingUp,
    title: "Increase Online Visibility",
    description:
      "SEO, Google Ads, and content strategies that help your business get discovered by the right audience.",
  },
  {
    icon: Users,
    title: "Generate Qualified Leads",
    description:
      "Conversion-focused websites and marketing campaigns designed to turn visitors into enquiries and customers.",
  },
  {
    icon: Globe,
    title: "Build a Strong Digital Presence",
    description:
      "Professional branding, responsive websites, and consistent digital experiences across every platform.",
  },
];

const locations = [
  "Coimbatore",
  "Peelamedu",
  "Gandhipuram",
  "RS Puram",
  "Saravanampatti",
  "Singanallur",
  "Tiruppur",
  "Erode",
  "Salem",
  "Pollachi",
];

export default function GrowthPartner() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                About Flareway
              </p>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Your Trusted Digital Growth Partner
              </h2>

              <div className="space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  At{" "}
                  <span className="font-semibold text-gray-900">
                    Flareway Technologies
                  </span>
                  , we believe every business deserves a strong digital presence
                  that delivers measurable results. As a trusted Website
                  Development and Digital Marketing Company in Coimbatore, we
                  create customized websites and performance-driven marketing
                  strategies that help businesses increase online visibility,
                  generate qualified leads, and build lasting customer
                  relationships.
                </p>

                <p>
                  Whether you’re launching a new business, growing an
                  established brand, or improving your existing online presence,
                  our team combines creativity, technology, and data-driven
                  marketing to deliver solutions tailored to your business
                  goals.
                </p>
              </div>

              {/* Locations */}
              <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="text-blue-600" size={22} />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Serving Coimbatore & Nearby Cities
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {locations.map((location) => (
                    <span
                      key={location}
                      className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Highlights */}
            <div className="space-y-6">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={28} />
                    </div>

                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}

              {/* Mini Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-blue-600 p-6 text-white">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="mt-1 text-sm text-blue-100">
                    Custom Strategies
                  </p>
                </div>

                <div className="rounded-3xl bg-gray-900 p-6 text-white">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="mt-1 text-sm text-gray-300">
                    Dedicated Support
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
