import {
  Target,
  Calendar,
  Image as ImageIcon,
  Play,
  Megaphone,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const services = [
  {
    icon: Target,
    title: "Social Media Strategy",
    description:
      "Customized strategies based on business objectives, audience behaviour, and market trends.",
  },
  {
    icon: Calendar,
    title: "Social Media Management",
    description:
      "Consistent posting, audience engagement, profile optimization, and performance monitoring.",
  },
  {
    icon: ImageIcon,
    title: "Content Creation & Creative Design",
    description:
      "High-quality graphics, videos, captions, and engaging brand-focused content.",
  },
  {
    icon: FaFacebookF,
    title: "Facebook Marketing",
    description:
      "Targeted Facebook campaigns that increase engagement, traffic, and lead generation.",
  },
  {
    icon: FaInstagram,
    title: "Instagram Marketing",
    description:
      "Stories, Reels, content strategies, and advertising campaigns designed for growth and conversions.",
  },
  {
    icon: FaLinkedinIn,
    title: "LinkedIn Marketing",
    description:
      "Strategic LinkedIn content and advertising for B2B visibility and professional lead generation.",
  },
  {
    icon: Play,
    title: "YouTube Marketing",
    description:
      "Optimized YouTube channels, video campaigns, and advertising strategies for brand growth.",
  },
  {
    icon: Megaphone,
    title: "Paid Social Media Advertising",
    description:
      "Lead-focused advertising campaigns across Facebook, Instagram, LinkedIn, and other platforms.",
  },
];

export default function ServicesGrid() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Social Media Marketing Services
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Complete Social Media Solutions for Modern Businesses
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
