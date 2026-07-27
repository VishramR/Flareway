"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const faqs = [
  {
    question: "Why choose Flareway Technologies for website development?",
    answer:
      "We create responsive, SEO-friendly, and conversion-focused websites tailored to your business goals, helping you improve online visibility and generate quality leads.",
  },
  {
    question: "How long does website development take?",
    answer:
      "The timeline depends on your project requirements, features, and functionality. Most business websites are completed within a few weeks after finalizing the project scope.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Every website we develop is fully responsive and optimized for desktops, tablets, and smartphones.",
  },
  {
    question: "Do you build SEO-friendly websites?",
    answer:
      "Absolutely. Every website includes SEO-friendly architecture, optimized page speed, clean code, mobile responsiveness, and schema-ready structure.",
  },
  {
    question: "Which platform is best for my business website?",
    answer:
      "The ideal platform depends on your business goals and required features. We recommend the most suitable solution after understanding your requirements.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We modernize outdated websites with improved design, enhanced performance, better security, and optimized user experience.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer ongoing maintenance, software updates, backups, security monitoring, and technical support.",
  },
  {
    question: "Will my website be optimized for Google?",
    answer:
      "Yes. Every website is developed following technical SEO best practices to support better indexing, improved performance, and long-term organic growth.",
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
              Website Development Questions Answered
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
