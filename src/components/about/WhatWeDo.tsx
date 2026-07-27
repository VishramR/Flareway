import {
  Globe,
  ShoppingCart,
  Search,
  MapPin,
  Megaphone,
  Share2,
  Palette,
  FileText,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const services = [
  { icon: Globe, title: "Website Development" },
  { icon: ShoppingCart, title: "E-commerce Development" },
  { icon: Search, title: "Search Engine Optimization (SEO)" },
  { icon: MapPin, title: "Local SEO" },
  { icon: Megaphone, title: "Google Ads Management" },
  { icon: Share2, title: "Social Media Marketing" },
  { icon: Palette, title: "Branding & Creative Design" },
  { icon: FileText, title: "Content Marketing" },
];

export default function WhatWeDo() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mb-16 text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </h2>

            <p className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Complete Digital Solutions for Business Growth
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
