import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Search,
  MapPin,
  Target,
  Megaphone,
  Palette,
  FileText,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const services = [
  {
    title: "Website Development",
    description:
      "Responsive, secure, and SEO-friendly websites optimized for speed, mobile performance, and conversions.",
    icon: Globe,
    href: "/services/web-development",
  },
  {
    title: "E-commerce Development",
    description:
      "Scalable online stores with payment gateway integration, product management, and conversion-focused design.",
    icon: ShoppingCart,
    href: "/services/ecommerce-development",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve Google rankings, drive organic traffic, and generate long-term business growth with customized SEO strategies.",
    icon: Search,
    href: "/services/seo",
  },
  {
    title: "Local SEO",
    description:
      "Increase visibility in Google Search and Maps to attract customers from Coimbatore and nearby locations.",
    icon: MapPin,
    href: "/services/local-seo",
  },
  {
    title: "Google Ads (PPC)",
    description:
      "Professionally managed Google Ads campaigns focused on maximizing ROI and generating high-quality leads.",
    icon: Target,
    href: "/services/google-ads",
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategic campaigns across Facebook, Instagram, LinkedIn, and YouTube to build awareness and generate enquiries.",
    icon: Megaphone,
    href: "/services/social-media-marketing",
  },
  {
    title: "Branding & Creative Design",
    description:
      "Professional logo design, visual branding, and marketing materials that create a memorable brand identity.",
    icon: Palette,
    href: "/services/branding",
  },
  {
    title: "Content Marketing",
    description:
      "SEO-optimized website content, blogs, landing pages, and marketing copy designed to attract and convert visitors.",
    icon: FileText,
    href: "/services/content-marketing",
  },
];

export default function Services() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-20 lg:py-28">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Services
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              We provide end-to-end website development and digital marketing
              solutions that help businesses improve visibility, generate
              qualified leads, and achieve sustainable growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-semibold text-blue-600">
                    <span>Learn More</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl bg-gray-900 p-8 text-center text-white lg:p-10">
            <h3 className="mb-3 text-2xl font-bold">
              Need a Custom Digital Strategy?
            </h3>

            <p className="mx-auto mb-6 max-w-2xl text-gray-300">
              Every business is different. We create customized website
              development and digital marketing solutions based on your goals,
              industry, competition, and budget.
            </p>

            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100">
              Get Free Consultation
            </button>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
