import { CheckCircle2 } from "lucide-react";
import Container from "@/components/common/Container";

const reasons = [
  "Creative Branding Specialists",
  "Custom Logo & Identity Design",
  "Consistent Brand Guidelines",
  "Marketing-Focused Creative Solutions",
  "Industry-Specific Branding Strategies",
  "Transparent Communication",
  "Dedicated Design Support",
  "Long-Term Brand Growth Focus",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">
            Why Choose Flareway Technologies?
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm"
            >
              <CheckCircle2 className="text-blue-600" />

              <span className="font-medium text-slate-700">{reason}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
