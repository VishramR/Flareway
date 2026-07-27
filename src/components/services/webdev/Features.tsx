import {
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  MessageCircle,
  FileText,
  MapPin,
  Share2,
  BookOpen,
  Image as ImageIcon,
  Settings,
  Globe,
  LayoutGrid,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const features = [
  { icon: Smartphone, label: "Responsive Website Design" },
  { icon: Search, label: "SEO-Optimized Website Structure" },
  { icon: Zap, label: "Fast Loading Speed" },
  { icon: ShieldCheck, label: "SSL Security Integration" },
  { icon: MessageCircle, label: "WhatsApp Integration" },
  { icon: FileText, label: "Contact & Enquiry Forms" },
  { icon: MapPin, label: "Google Maps Integration" },
  { icon: Share2, label: "Social Media Integration" },
  { icon: BookOpen, label: "Blog Functionality" },
  { icon: ImageIcon, label: "Image Optimization" },
  { icon: Settings, label: "CMS for Easy Content Management" },
  { icon: Globe, label: "Cross-Browser Compatibility" },
  { icon: LayoutGrid, label: "Schema-Ready Development" },
];

export default function Features() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Features of Our Websites
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Built for Performance, SEO & Lead Generation
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Every website we develop includes features designed to improve
              performance, user experience, and business conversions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon size={24} />
                  </div>

                  <span className="font-semibold text-gray-700">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
