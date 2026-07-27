import {
  Star,
  MessageSquareQuote,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const promises = [
  {
    icon: ShieldCheck,
    title: "Professional Delivery",
    description:
      "Clean development standards, responsive design, SEO-ready structure, and secure implementation.",
  },
  {
    icon: TrendingUp,
    title: "Result-Oriented Execution",
    description:
      "Strategies focused on visibility, enquiries, conversions, and measurable business growth.",
  },
  {
    icon: Users,
    title: "Transparent Partnership",
    description:
      "Clear communication, dedicated support, and long-term collaboration throughout your project.",
  },
];

export default function Testimonials() {
  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-20 lg:py-28">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Testimonials
            </h2>

            <p className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Your Success Story Could Be Next
            </p>

            <p className="text-lg leading-8 text-gray-600">
              At Flareway Technologies, we’re committed to delivering
              professional websites and result-driven digital marketing
              solutions that help businesses grow online.
            </p>
          </div>

          {/* Main Highlight Card */}
          <div className="mb-12 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <MessageSquareQuote className="text-blue-600" size={28} />

                  <span className="font-semibold text-blue-600">
                    Genuine Reviews, Not Placeholder Hype
                  </span>
                </div>

                <p className="mb-5 text-lg leading-8 text-gray-700">
                  As we partner with more clients across Coimbatore and nearby
                  cities, this section will showcase{" "}
                  <span className="font-semibold text-gray-900">
                    real Google Reviews, verified client testimonials, and
                    measurable success stories
                  </span>{" "}
                  that reflect our commitment to quality, transparency, and
                  business results.
                </p>

                <p className="leading-8 text-gray-600">
                  We believe trust should be earned through real project
                  outcomes—not fabricated testimonials. Our goal is to build
                  long-term relationships by delivering websites and marketing
                  campaigns that create measurable impact for every client.
                </p>
              </div>

              {/* Rating Placeholder */}
              <div className="rounded-3xl bg-gray-900 p-8 text-center text-white">
                <div className="mb-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="mb-2 text-3xl font-bold">5-Star Goal</h3>

                <p className="text-gray-300">
                  Every project is executed with the goal of earning genuine
                  client satisfaction and long-term trust.
                </p>
              </div>
            </div>
          </div>

          {/* Promise Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {promises.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Future Social Proof CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-700">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Google Reviews integration ready for future client feedback
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
