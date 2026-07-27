import { Play, MessageCircle, Image as ImageIcon } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const platforms = [
  { icon: FaFacebookF, name: "Facebook" },
  { icon: FaInstagram, name: "Instagram" },
  { icon: FaLinkedinIn, name: "LinkedIn" },
  { icon: Play, name: "YouTube" },
  { icon: MessageCircle, name: "X (Twitter)" },
  { icon: ImageIcon, name: "Pinterest" },
];

export default function Platforms() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Social Media Platforms We Manage
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Platform-Specific Strategies That Match Your Audience
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              We help businesses build a strong presence across the world's
              leading social media platforms by creating customized content and
              advertising strategies for each platform.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <div
                  key={platform.name}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {platform.name}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-[28px] border border-blue-100 bg-white p-8 text-center shadow-sm">
            <p className="text-lg leading-8 text-gray-600">
              As a trusted <strong>Social Media Agency in Coimbatore</strong>,
              we recommend the most effective platforms based on your industry,
              target audience, and business goals to maximize engagement and
              lead generation.
            </p>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
