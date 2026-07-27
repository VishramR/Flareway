import Container from "@/components/common/Container";

const industries = [
  "Healthcare",
  "Education",
  "Manufacturing",
  "Real Estate",
  "Construction",
  "Automobile",
  "Restaurants & Hospitality",
  "Retail & E-commerce",
  "Information Technology",
  "Export & Trading",
  "Textile & Garment",
  "Startups & Small Businesses",
];

export default function Industries() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Industries We Serve</h2>

          <p className="mt-6 text-lg text-slate-600">
            We provide branding solutions customized for businesses across a
            wide range of industries.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-xl border border-slate-200 p-5 text-center font-medium text-slate-700"
            >
              {industry}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-8 text-slate-600">
          Every branding strategy is tailored to your industry, audience, and
          business objectives.
        </p>
      </Container>
    </section>
  );
}
