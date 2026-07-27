"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const faqs = [
  {
    question: "What is Local SEO?",
    answer:
      "Local SEO is the process of optimizing your online presence to improve visibility in Google Search and Google Maps for location-based searches.",
  },
  {
    question: "How long does Local SEO take?",
    answer:
      "Most businesses begin seeing improvements within 2 to 4 months, depending on competition, business profile quality, and website optimization.",
  },
  {
    question: "Why is Google Business Profile important?",
    answer:
      "A well-optimized Google Business Profile helps customers find your business, view reviews, get directions, and contact you directly from Google Search and Maps.",
  },
  {
    question: "Do you manage Google Business Profiles?",
    answer:
      "Yes. We optimize, update, and manage Google Business Profiles to improve local search performance and customer engagement.",
  },
  {
    question: "Can Local SEO generate more enquiries?",
    answer:
      "Yes. Local SEO helps your business appear in front of customers who are actively searching for nearby products or services, increasing calls, enquiries, and visits.",
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes. We provide detailed reports covering rankings, Google Business Profile performance, traffic, and recommendations.",
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
              Local SEO Questions Answered
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
