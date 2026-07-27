import Link from "next/link";
import Container from "@/components/common/Container";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready to Build a Strong Brand Identity?
          </h2>

          <p className="mt-8 text-lg leading-8 text-blue-100">
            Partner with Flareway Technologies, your trusted Branding Company in
            Coimbatore, to create a memorable brand that builds customer trust,
            strengthens your market presence, and supports long-term business
            growth.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600"
            >
              Talk to Our Branding Experts
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white"
            >
              Get a Free Brand Consultation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
