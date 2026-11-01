"use client";

import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { contactSchema, ContactFormData } from "@/lib/validations/contact";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success("Thank you! We'll contact you shortly.");

      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <FluidContainer className="bg-slate-50 overflow-hidden">
      <Container>
        <section id="contact-form" className="py-14 sm:py-20 lg:py-28">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:gap-10">
            {/* Contact Info */}

            <div className="min-w-0 rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-gray-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm">
              <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Contact Information
              </p>

              <h2 className="mb-6 sm:mb-10 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Let's Talk About Your Next Project
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-100 text-blue-600">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                      Office Address
                    </h3>

                    <p className="mt-1 sm:mt-2 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
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

                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-100 text-blue-600">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Phone</h3>

                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                      <a
                        href="tel:+917871102392"
                        className="hover:text-blue-600 transition-colors"
                      >
                        +91 78711 02392
                      </a>
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-100 text-blue-600">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Email</h3>

                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                      <a
                        href="mailto:info@flarewaytechnologies.com"
                        className="break-all hover:text-blue-600 transition-colors"
                      >
                        info@flarewaytechnologies.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-100 text-blue-600">
                    <Clock3 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                      Business Hours
                    </h3>

                    <p className="mt-1 sm:mt-2 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
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

            <div className="min-w-0 rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-gray-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm">
              <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Send Us a Message
              </p>

              <h2 className="mb-6 sm:mb-10 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Get Free Consultation
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="min-w-0">
                    <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
                      Full Name
                    </label>

                    <input
                      {...register("fullName")}
                      type="text"
                      className="w-full min-w-0 rounded-xl border border-gray-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none transition focus:border-blue-600"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs sm:text-sm text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
                      Company Name
                    </label>

                    <input
                      {...register("companyName")}
                      type="text"
                      className="w-full min-w-0 rounded-xl border border-gray-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none transition focus:border-blue-600"
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
                      Email Address
                    </label>

                    <input
                      {...register("email")}
                      type="email"
                      className="w-full min-w-0 rounded-xl border border-gray-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none transition focus:border-blue-600"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs sm:text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
                      Phone Number
                    </label>

                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full min-w-0 rounded-xl border border-gray-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none transition focus:border-blue-600"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs sm:text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
                      Service Required
                    </label>

                    <select
                      {...register("service")}
                      className="w-full min-w-0 rounded-xl border border-gray-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none transition focus:border-blue-600 bg-white"
                    >
                      <option value="">Select a Service</option>
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
                    {errors.service && (
                      <p className="mt-1.5 text-xs sm:text-sm text-red-500">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
                      Project Budget
                    </label>

                    <select
                      {...register("budget")}
                      className="w-full min-w-0 rounded-xl border border-gray-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none transition focus:border-blue-600 bg-white"
                    >
                      <option>Select Budget</option>
                      <option>Under ₹25,000</option>
                      <option>₹25,000 - ₹50,000</option>
                      <option>₹50,000 - ₹1,00,000</option>
                      <option>Above ₹1,00,000</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div className="min-w-0">
                  <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full min-w-0 rounded-xl border border-gray-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none transition focus:border-blue-600"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs sm:text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl sm:rounded-2xl bg-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Get Free Consultation"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
