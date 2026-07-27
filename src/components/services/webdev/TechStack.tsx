import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const technologies = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Material UI",
  "React-bootstrap",
  "JavaScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
];

export default function TechStack() {
  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Technologies We Use
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Modern, Reliable & Scalable Web Technologies
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              We select the right technology stack based on your business goals,
              project requirements, and future scalability.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-gray-200 bg-white px-5 py-5 text-center font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:text-blue-700 hover:shadow-md"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
