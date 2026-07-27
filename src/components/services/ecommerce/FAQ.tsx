"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const faqs = [
  {
    question: "Which ecommerce platform is best for my business?",
    answer:
      "The right platform depends on your products, business goals, budget, and future growth plans. We recommend the most suitable solution after understanding your requirements.",
  },
  {
    question: "Do you develop SEO-friendly ecommerce websites?",
    answer:
      "Yes. Every ecommerce website is built with SEO-friendly architecture, fast loading speed, mobile responsiveness, and optimized product pages.",
  },
  {
    question: "Can you redesign my existing ecommerce website?",
    answer:
      "Yes. We modernize ecommerce websites to improve design, performance, security, and conversion rates.",
  },
  {
    question: "Do you integrate payment gateways?",
    answer:
      "Yes. We integrate secure payment gateways and configure smooth checkout experiences for your customers.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every ecommerce website we build is fully responsive and optimized for smartphones, tablets, laptops, and desktops.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. We provide ongoing maintenance, security updates, performance optimization, bug fixes, and technical support after launch.",
  },
];

export default function Faq() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Frequently Asked Questions
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Everything You Need to Know
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Have questions about ecommerce website development? Here are
              answers to some of the most common questions our clients ask.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform ${
                      active === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {active === index && (
                  <div className="border-t border-gray-100 px-6 py-5">
                    <p className="leading-8 text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
