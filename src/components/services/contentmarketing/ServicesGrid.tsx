import {
  BookOpen,
  FileText,
  LayoutPanelTop,
  ShoppingBag,
  PenSquare,
  Mail,
  MessageSquare,
  CalendarRange,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const services = [
  {
    icon: FileText,
    title: "Website Content Writing",
    description:
      "SEO-friendly website content that clearly communicates your services, improves user experience, and supports higher search engine rankings.",
  },
  {
    icon: BookOpen,
    title: "SEO Blog Writing",
    description:
      "Publish informative, keyword-optimized blog articles that increase organic traffic, strengthen topical authority, and answer customer questions.",
  },
  {
    icon: LayoutPanelTop,
    title: "Landing Page Content",
    description:
      "Create persuasive landing pages designed to improve conversions, encourage enquiries, and support paid advertising campaigns.",
  },
  {
    icon: ShoppingBag,
    title: "Product & Service Page Content",
    description:
      "Develop optimized content that highlights your products and services while improving search visibility and customer engagement.",
  },
  {
    icon: PenSquare,
    title: "Copywriting Services",
    description:
      "Write compelling marketing copy for advertisements, brochures, email campaigns, and promotional materials that inspire action.",
  },
  {
    icon: Mail,
    title: "Email Marketing Content",
    description:
      "Create engaging email newsletters and promotional campaigns that nurture leads and strengthen customer relationships.",
  },
  {
    icon: MessageSquare,
    title: "Social Media Content",
    description:
      "Develop creative captions and campaign content that increase engagement, brand awareness, and audience interaction across social platforms.",
  },
  {
    icon: CalendarRange,
    title: "Content Strategy & Planning",
    description:
      "Plan content calendars, keyword strategies, and publishing schedules aligned with your marketing objectives.",
  },
];

export default function ServicesGrid() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Content Marketing Services
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Strategic Content Solutions for Every Stage of Your Customer
              Journey
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              We create SEO-focused content that attracts visitors, builds
              authority, improves engagement, and converts prospects into loyal
              customers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
