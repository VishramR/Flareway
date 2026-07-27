"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const faqs = [
  {
    question: "Why choose Flareway Technologies?",
    answer:
      "We provide customized website development and digital marketing solutions designed to improve online visibility, generate quality leads, and support long-term business growth.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We help startups establish a professional online presence with scalable website development and digital marketing solutions.",
  },
  {
    question: "Do you provide complete digital marketing services?",
    answer:
      "Yes. We offer website development, SEO, Local SEO, Google Ads, social media marketing, branding, content marketing, and website maintenance.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "We serve businesses across Coimbatore, Tamil Nadu, and clients throughout India.",
  },
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <FluidContainer className="bg-white">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Frequently Asked Questions
            </h2>

            <p className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Common Questions About Flareway
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                      }`}
                      size={22}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-6 py-6">
                      <p className="text-lg leading-8 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
