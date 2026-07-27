"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const faqs = [
  {
    question: "Why is social media marketing important?",
    answer:
      "Social media marketing helps businesses increase brand awareness, engage customers, build trust, and generate leads through consistent online communication.",
  },
  {
    question: "Which social media platforms are best for my business?",
    answer:
      "The ideal platform depends on your industry, audience, and goals. We recommend the most effective platforms after understanding your business.",
  },
  {
    question: "Do you create content for social media?",
    answer:
      "Yes. We create graphics, videos, captions, and content calendars tailored to your brand and audience.",
  },
  {
    question: "Do you manage paid social media ads?",
    answer:
      "Yes. We create and optimize paid advertising campaigns to increase reach, engagement, and lead generation.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track metrics such as reach, engagement, follower growth, website traffic, leads, and campaign performance to measure results.",
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes. We provide detailed monthly reports with performance insights, recommendations, and future optimization plans.",
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
              Social Media Marketing Questions Answered
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
