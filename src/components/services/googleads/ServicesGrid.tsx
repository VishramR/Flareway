import {
  Search,
  Monitor,
  ShoppingCart,
  Play,
  RotateCcw,
  Sparkles,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const services = [
  {
    icon: Search,
    title: "Search Ads Management",
    description:
      "Reach customers actively searching on Google with keyword-targeted campaigns that drive qualified enquiries and conversions.",
  },
  {
    icon: Monitor,
    title: "Display Advertising",
    description:
      "Increase brand visibility across millions of websites using visually engaging display ads targeted to the right audience.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Ads Management",
    description:
      "Promote your products with Google Shopping campaigns that showcase product images, prices, and details directly in search results.",
  },
  {
    icon: Play,
    title: "YouTube Ads",
    description:
      "Reach your audience through engaging video campaigns that improve brand awareness, customer engagement, and lead generation.",
  },
  {
    icon: RotateCcw,
    title: "Remarketing Campaigns",
    description:
      "Reconnect with visitors who previously interacted with your website and encourage them to return and complete their enquiry or purchase.",
  },
  {
    icon: Sparkles,
    title: "Performance Max Campaigns",
    description:
      "Leverage Google AI-powered campaigns to maximize conversions across Search, Display, YouTube, Gmail, Discover, and Maps.",
  },
  {
    icon: BarChart3,
    title: "Conversion Tracking Setup",
    description:
      "Implement GA4, Google Tag Manager, and Google Ads conversion tracking for accurate performance measurement and data-driven decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Google Ads Audit & Optimization",
    description:
      "Review existing campaigns to identify wasted spend, improve targeting, optimize ad copy, and increase overall campaign performance.",
  },
];

export default function ServicesGrid() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Google Ads Services
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Complete PPC Solutions for Modern Businesses
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
