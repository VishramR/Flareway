"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const faqs = [
  {
    question: "Why choose Flareway Technologies?",
    answer:
      "We provide complete website development and digital marketing solutions that help businesses improve online visibility, attract qualified leads, and achieve sustainable growth through customized strategies.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Most businesses begin seeing measurable improvements within 3 to 6 months, depending on competition, website quality, and industry.",
  },
  {
    question: "Do you develop SEO-friendly websites?",
    answer:
      "Yes. Every website we build includes SEO-friendly architecture, fast loading speed, mobile responsiveness, schema-ready structure, and conversion-focused design.",
  },
  {
    question: "Do you manage Google Ads campaigns?",
    answer:
      "Yes. We create, optimize, and manage Google Ads campaigns that generate high-quality leads while maximizing your advertising budget.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We modernize outdated websites with improved design, performance, SEO optimization, and user experience to help your business achieve better results.",
  },
  {
    question: "Do you offer customized digital marketing packages?",
    answer:
      "Yes. We create customized digital marketing solutions based on your business goals, target audience, competition, and budget to maximize your return on investment.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We work with startups, SMEs, manufacturers, healthcare providers, educational institutions, eCommerce businesses, and service-based companies across various industries.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-20 lg:py-28">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Frequently Asked Questions
            </h2>

            <p className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Answers to Common Questions
            </p>

            <p className="text-lg leading-8 text-gray-600">
              Everything you need to know about our website development, SEO,
              Google Ads, and digital marketing services.
            </p>
          </div>

          {/* FAQ List */}
          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left lg:p-7"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-lg font-semibold leading-7 text-gray-900 lg:text-xl">
                      {faq.question}
                    </h3>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-blue-100 text-blue-600" : ""
                      }`}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {/* Animated Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 px-6 py-6 lg:px-7">
                        <p className="text-lg leading-8 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl bg-gray-900 p-8 text-center text-white lg:p-10">
            <h3 className="mb-3 text-2xl font-bold">Still Have Questions?</h3>

            <p className="mx-auto mb-6 max-w-2xl text-lg leading-8 text-gray-300">
              Our team is happy to discuss your business goals, website
              requirements, SEO opportunities, and digital marketing strategy in
              a free consultation call.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
                Talk to Our Experts
              </button>

              <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                Get Free Consultation
              </button>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
