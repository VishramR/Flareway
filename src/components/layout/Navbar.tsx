"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Container from "@/components/common/Container";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {" "}
      <Container>
        {" "}
        <nav className="flex h-24 items-center justify-between">
          {/* Logo */}{" "}
          <Link href="/" className="flex items-center gap-3">
            {" "}
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg">
              {" "}
              <span className="text-xl font-bold">F</span>{" "}
            </div>
            <div>
              <p className="text-2xl font-bold text-black">Flareway</p>
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="/"
              className="font-medium text-black transition hover:text-blue-200"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-medium text-black transition hover:text-blue-200"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 font-medium text-black transition hover:text-blue-200">
                Services
                <ChevronDown size={18} />
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

            <Link
              href="/blog"
              className="font-medium text-black transition hover:text-blue-200"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="font-medium text-black transition hover:text-blue-200"
            >
              Contact
            </Link>
          </div>
          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
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
            className="rounded-xl p-2 text-black transition hover:bg-black/5 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </Container>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-xl lg:hidden">
          <Container>
            <div className="flex flex-col py-6">
              <Link
                href="/"
                className="rounded-xl px-4 py-3 font-medium text-black transition hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <div className="mt-2 px-4 pb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Services
              </div>

              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.label}
                </Link>
              ))}

              <Link
                href="/about"
                className="mt-2 rounded-xl px-4 py-3 font-medium text-black transition hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>

              <Link
                href="/blog"
                className="rounded-xl px-4 py-3 font-medium text-black transition hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="rounded-xl px-4 py-3 font-medium text-black transition hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="mt-4 rounded-2xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
                onClick={() => setMobileOpen(false)}
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
