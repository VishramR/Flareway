import {
  FileText,
  BookOpen,
  Briefcase,
  ShoppingBag,
  LayoutTemplate,
  Building2,
  Mail,
  MessageSquare,
  ClipboardList,
  CircleHelp,
  CalendarRange,
  RefreshCcw,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const solutions = [
  { icon: FileText, title: "Website Content" },
  { icon: BookOpen, title: "SEO Blog Articles" },
  { icon: Briefcase, title: "Service Pages" },
  { icon: ShoppingBag, title: "Product Descriptions" },
  { icon: LayoutTemplate, title: "Landing Pages" },
  { icon: Building2, title: "Company Profiles" },
  { icon: Mail, title: "Email Campaigns" },
  { icon: MessageSquare, title: "Social Media Captions" },
  { icon: ClipboardList, title: "Case Studies" },
  { icon: CircleHelp, title: "FAQs" },
  { icon: CalendarRange, title: "Content Calendars" },
  { icon: RefreshCcw, title: "Content Refresh & Optimization" },
];

export default function ContentSolutions() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section className="py-24 lg:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Content Solutions We Offer
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Everything Your Business Needs to Build Authority
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Comprehensive content solutions designed to improve SEO, generate
              leads, strengthen your brand, and support long-term business
              growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {solutions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
