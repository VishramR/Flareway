import Container from "@/components/common/Container";
import {
  Palette,
  BadgeCheck,
  Building2,
  FileImage,
  Image,
  MonitorSmartphone,
  Package,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description:
      "Create a unique, memorable logo that reflects your business values, industry, and brand personality.",
  },
  {
    icon: BadgeCheck,
    title: "Brand Identity Design",
    description:
      "Develop complete visual identity systems including typography, colors, icons, and brand guidelines.",
  },
  {
    icon: Building2,
    title: "Corporate Branding",
    description:
      "Professional branding assets including business cards, company profiles, presentations, and stationery.",
  },
  {
    icon: FileImage,
    title: "Marketing Collateral",
    description:
      "Brochures, flyers, catalogs, banners, and promotional materials designed for maximum impact.",
  },
  {
    icon: Image,
    title: "Social Media Creative Design",
    description:
      "Engaging graphics and creatives that strengthen your online presence and brand consistency.",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Graphics & UI Assets",
    description:
      "Website banners, icons, illustrations, and digital assets that enhance user experience.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "Creative packaging solutions that reflect your brand and stand out in competitive markets.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    description:
      "Comprehensive documentation to ensure consistent brand usage across every platform.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Branding & Creative Design Services
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Comprehensive branding solutions that help businesses build a
            memorable identity and establish lasting customer trust.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
