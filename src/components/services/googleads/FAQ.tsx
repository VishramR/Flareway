"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const faqs = [
  {
    question: "What is Google Ads?",
    answer:
      "Google Ads is an online advertising platform that allows businesses to display ads on Google Search, YouTube, Google Display Network, and other Google properties.",
  },
  {
    question: "How quickly can Google Ads generate leads?",
    answer:
      "Google Ads can start driving traffic and enquiries as soon as your campaigns are approved and live, although performance improves with continuous optimization.",
  },
  {
    question: "Do you manage existing Google Ads accounts?",
    answer:
      "Yes. We audit, optimize, and manage existing campaigns to improve performance, reduce wasted spend, and increase return on investment.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track key metrics such as clicks, conversions, cost per lead, conversion rate, and return on ad spend using Google Analytics 4 and Google Ads.",
  },
  {
    question: "What budget do I need for Google Ads?",
    answer:
      "The ideal budget depends on your industry, competition, target audience, and campaign goals. We recommend a customized budget after understanding your business requirements.",
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes. We provide transparent monthly reports with campaign performance, insights, recommendations, and optimization updates.",
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
              Google Ads Questions Answered
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
