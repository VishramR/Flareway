import { Building2, Clock3, Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";

export default function ContactSection() {
  return (
    <FluidContainer className="bg-slate-50">
      <Container>
        <section id="contact-form" className="py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.35fr]">
            {/* Contact Info */}

            <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Contact Information
              </p>

              <h2 className="mb-10 text-3xl font-bold text-gray-900">
                Let's Talk About Your Next Project
              </h2>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Office Address
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      Flareway Technologies
                      <br />
                      25/1, Vellakenaru Road
                      <br />
                      Thudiyalur
                      <br />
                      Coimbatore
                      <br />
                      Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>

                    <p className="mt-2 text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>

                    <p className="mt-2 text-gray-600">hello@flareway.in</p>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Business Hours
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      Monday – Saturday
                      <br />
                      9:30 AM – 6:30 PM
                      <br />
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}

            <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Send Us a Message
              </p>

              <h2 className="mb-10 text-3xl font-bold text-gray-900">
                Get Free Consultation
              </h2>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      Company Name
                    </label>

                    <input
                      type="text"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      Service Required
                    </label>

                    <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600">
                      <option>Select a Service</option>
                      <option>Website Development</option>
                      <option>Ecommerce Website Development</option>
                      <option>SEO Services</option>
                      <option>Local SEO</option>
                      <option>Google Ads</option>
                      <option>Social Media Marketing</option>
                      <option>Branding</option>
                      <option>Content Marketing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      Project Budget
                    </label>

                    <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600">
                      <option>Select Budget</option>
                      <option>Under ₹25,000</option>
                      <option>₹25,000 - ₹50,000</option>
                      <option>₹50,000 - ₹1,00,000</option>
                      <option>Above ₹1,00,000</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                >
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
