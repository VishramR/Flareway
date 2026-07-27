import { CheckCircle2 } from "lucide-react";
import Container from "@/components/common/Container";

const benefits = [
  "Build Customer Trust",
  "Increase Brand Recognition",
  "Create a Professional Image",
  "Differentiate from Competitors",
  "Improve Customer Loyalty",
  "Support Marketing Campaigns",
  "Increase Business Value",
  "Drive Long-Term Growth",
];

export default function WhyBrandingMatters() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Branding Matters
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A strong brand creates trust, strengthens customer relationships,
            and helps your business stand out in a competitive marketplace.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-xl border border-slate-200 p-5"
            >
              <CheckCircle2 className="text-blue-600" size={22} />

              <span className="font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
