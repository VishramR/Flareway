import {
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Rocket,
  Search,
  Sparkles,
  MessageSquare,
} from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

const benefits = [
  { label: "Free business consultation", icon: MessageSquare },
  { label: "Website & SEO audit", icon: Search },
  { label: "Custom growth strategy", icon: Sparkles },
  { label: "No obligation discussion", icon: CheckCircle2 },
];

export default function FinalCTA() {
  return (
    <FluidContainer className="relative overflow-hidden bg-[#0A1224] text-white">
      {/* Radial glow accents */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(41,82,227,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(92,141,255,0.25), transparent 50%)",
        }}
      />
      {/* Faint grid pattern, masked to fade at the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
        }}
      />

      <Container>
        <section className="relative z-10 py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Text column */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm font-semibold">
                  Flareway Technologies • Coimbatore
                </span>
              </div>

              <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.2rem]">
                Ready to grow your business online?
              </h2>

              <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-blue-100 lg:mx-0">
                Partner with{" "}
                <span className="font-semibold text-white">
                  Flareway Technologies
                </span>
                , your trusted Digital Marketing & Website Development Company
                in Coimbatore, to build a high-performing website and
                result-driven strategies that grow your online visibility and
                leads.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <button className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-2xl">
                  <Phone size={20} />
                  Talk to Our Experts
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button className="group flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15">
                  <Mail size={20} />
                  Get Free Consultation
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            {/* Illustration column */}
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <svg
                viewBox="0 0 420 360"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              >
                <rect
                  x="0"
                  y="0"
                  width="420"
                  height="360"
                  rx="18"
                  fill="#101B33"
                />
                <polyline
                  points="40,300 120,250 190,270 260,180 330,120 380,70"
                  fill="none"
                  stroke="#5C8DFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="380" cy="70" r="7" fill="#5C8DFF" />
                <g opacity="0.5">
                  <circle cx="40" cy="300" r="4" fill="#5C8DFF" />
                  <circle cx="120" cy="250" r="4" fill="#5C8DFF" />
                  <circle cx="190" cy="270" r="4" fill="#5C8DFF" />
                  <circle cx="260" cy="180" r="4" fill="#5C8DFF" />
                  <circle cx="330" cy="120" r="4" fill="#5C8DFF" />
                </g>
                <g opacity="0.25">
                  <circle cx="60" cy="60" r="1.6" fill="#5C8DFF" />
                  <circle cx="100" cy="60" r="1.6" fill="#5C8DFF" />
                  <circle cx="140" cy="60" r="1.6" fill="#5C8DFF" />
                  <circle cx="60" cy="100" r="1.6" fill="#5C8DFF" />
                  <circle cx="100" cy="100" r="1.6" fill="#5C8DFF" />
                </g>
                <rect
                  x="230"
                  y="200"
                  width="150"
                  height="70"
                  rx="12"
                  fill="#0A1224"
                  stroke="#2952E3"
                  strokeWidth="1.5"
                />
                <rect
                  x="248"
                  y="216"
                  width="80"
                  height="8"
                  rx="4"
                  fill="#8791A6"
                />
                <rect
                  x="248"
                  y="232"
                  width="60"
                  height="16"
                  rx="6"
                  fill="#FFFFFF"
                />
                <rect
                  x="248"
                  y="252"
                  width="40"
                  height="8"
                  rx="4"
                  fill="#5C8DFF"
                />
              </svg>

              <div className="absolute -top-4 left-4 flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-700 shadow-lg sm:-left-6">
                <Rocket size={16} />
                Leads +2.4x
              </div>
            </div>
          </div>

          {/* Feature strip */}
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-start gap-3 bg-[#0A1224]/60 px-6 py-6 text-left"
              >
                <Icon size={20} className="mt-0.5 shrink-0 text-blue-300" />
                <span className="font-medium text-white">{label}</span>
              </div>
            ))}
          </div>

          {/* Trust note */}
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm">
            <p className="text-lg leading-8 text-blue-50">
              <span className="font-semibold text-white">
                Serving businesses across Coimbatore, Tiruppur, Erode, Salem,
                Pollachi, and nearby cities
              </span>{" "}
              with professional website development, SEO, Google Ads, and
              performance-driven digital marketing solutions.
            </p>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
