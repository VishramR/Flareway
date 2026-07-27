import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why is content marketing important?",
    answer:
      "Content marketing helps businesses improve online visibility, educate customers, build trust, and generate qualified leads through valuable and relevant content.",
  },
  {
    question: "Do you write SEO-friendly content?",
    answer:
      "Yes. Every piece of content is optimized for search engines while maintaining readability and delivering genuine value to your audience.",
  },
  {
    question: "Can you rewrite existing website content?",
    answer:
      "Absolutely. We refresh and optimize existing website content to improve SEO performance, user experience, and conversion rates.",
  },
  {
    question: "How often should I publish blog articles?",
    answer:
      "The ideal publishing frequency depends on your business goals, but consistently publishing high-quality content helps improve search rankings and establish authority over time.",
  },
  {
    question: "Do you create content calendars?",
    answer:
      "Yes. We develop monthly and long-term content calendars aligned with your SEO strategy, target keywords, and business objectives.",
  },
  {
    question: "Is your content original?",
    answer:
      "Yes. Every piece of content is written specifically for your business and is unique, plagiarism-free, and tailored to your audience.",
  },
];

export default function Faq() {
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
              Have questions about our Content Marketing Services? Here are
              answers to some of the most common questions businesses ask us.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900">
                  {faq.question}

                  <ChevronDown className="transition group-open:rotate-180" />
                </summary>

                <p className="mt-5 leading-8 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
