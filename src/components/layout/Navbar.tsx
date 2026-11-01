"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import Container from "@/components/common/Container";
import Image from "next/image";

const serviceLinks = [
  {
    label: "Website Development",
    href: "/services/web-development",
  },
  {
    label: "SEO Services",
    href: "/services/seo-services",
  },
  {
    label: "Google Ads",
    href: "/services/google-ads",
  },
  {
    label: "Social Media Marketing",
    href: "/services/social-media-marketing",
  },
  {
    label: "Local SEO",
    href: "/services/local-seo",
  },
  {
    label: "Branding Services",
    href: "/services/branding-services",
  },
  {
    label: "Content Marketing",
    href: "/services/content-marketing",
  },
  {
    label: "Ecommerce Website Development",
    href: "/services/ecommerce-development",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Close mobile menu on resize to desktop or escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const isLightNav = scrolled || mobileOpen;

  const navLinkClass = isLightNav
    ? "font-medium text-gray-900 transition-colors duration-300 hover:text-blue-600"
    : "font-medium text-white transition-colors duration-300 hover:text-blue-200 [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? "bg-white shadow-md"
          : scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-24 items-center justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <Image
              src={
                isLightNav
                  ? "/images/logo/flareway_favicon.png"
                  : "/images/logo/flareway_white_transparent.png"
              }
              alt="Flareway_logo"
              width={40}
              height={50}
            />

            <p
              className={`text-2xl font-bold transition-colors duration-300 ${
                isLightNav
                  ? "text-gray-900"
                  : "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]"
              }`}
            >
              Flareway
            </p>
          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-10 lg:flex">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>

            <Link href="/about" className={navLinkClass}>
              About
            </Link>

            {/* Services */}

            <div className="group relative">
              <button className={`flex items-center gap-1 ${navLinkClass}`}>
                Services
                <ChevronDown
                  size={18}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>

              <div className="invisible absolute left-0 top-full mt-4 w-72 translate-y-2 rounded-2xl border border-gray-200 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>

            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}

          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className={`rounded-xl p-2 transition lg:hidden ${
              isLightNav
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="w-full max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain border-t border-gray-200 bg-white shadow-2xl lg:hidden">
          <Container>
            <div className="flex flex-col py-6 pb-24">
              <Link
                href="/"
                className="rounded-xl px-4 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="my-1 ml-3 flex flex-col space-y-1 rounded-xl border-l-2 border-blue-500/40 bg-slate-50/80 py-1.5 pl-3 pr-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => {
                          setMobileOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="rounded-xl px-4 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
              >
                About
              </Link>

              <Link
                href="/blog"
                className="rounded-xl px-4 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="rounded-xl px-4 py-3 font-medium text-gray-900 transition hover:bg-gray-100"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="mt-5 rounded-2xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/25"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
              >
                Get Free Quote
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
