"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const faqs = [
  {
    question: "What is SEO?",
    answer:
      "SEO (Search Engine Optimisation) is the process of improving your website's visibility in search engines like Google to attract more relevant organic traffic.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Most businesses begin seeing measurable improvements within 3 to 6 months, depending on competition, website quality, and industry.",
  },
  {
    question: "Do you guarantee #1 Google rankings?",
    answer:
      "No. Ethical SEO companies cannot guarantee specific rankings. We follow industry best practices and focus on improving visibility, organic traffic, and long-term business growth.",
  },
  {
    question: "What is Local SEO?",
    answer:
      "Local SEO helps businesses improve their visibility in Google Search and Google Maps for location-based searches, making it easier for nearby customers to find your business.",
  },
  {
    question: "Do you provide monthly SEO reports?",
    answer:
      "Yes. We provide transparent monthly reports that include keyword performance, traffic insights, technical improvements, and recommendations.",
  },
  {
    question: "Can SEO help generate more business leads?",
    answer:
      "Yes. A well-executed SEO strategy attracts users who are actively searching for your products or services, increasing the likelihood of qualified enquiries and conversions.",
  },
  {
    question: "Why choose Flareway Technologies for SEO?",
    answer:
      "We combine technical expertise, ethical SEO practices, data-driven strategies, and customized optimization plans to help businesses improve online visibility and achieve sustainable growth.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              SEO Questions Answered
            </h2>
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
