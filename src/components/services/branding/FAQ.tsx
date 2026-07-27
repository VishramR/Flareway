"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/common/Container";

const faqs = [
  {
    question: "Why is branding important?",
    answer:
      "Branding helps customers recognize, trust, and remember your business, making it easier to build long-term relationships and stand out from competitors.",
  },
  {
    question: "Do you design custom logos?",
    answer:
      "Yes. Every logo is designed specifically for your business, industry, and brand identity.",
  },
  {
    question: "Do you provide complete brand identity packages?",
    answer:
      "Yes. We provide logo design, typography, color palettes, brand guidelines, and marketing materials.",
  },
  {
    question: "Can you redesign an existing brand?",
    answer:
      "Absolutely. We modernize existing brands while maintaining consistency and strengthening their identity.",
  },
  {
    question: "Do you design marketing materials?",
    answer:
      "Yes. We design brochures, flyers, banners, business cards, presentations, social media creatives, and more.",
  },
  {
    question: "Will I receive editable design files?",
    answer:
      "Yes. Once the project is completed, we provide the agreed design files and brand assets.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-14 space-y-5">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-xl bg-white shadow-sm">
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold">{faq.question}</span>

                  <ChevronDown
                    className={`transition ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open === index && (
                  <p className="px-6 pb-6 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
