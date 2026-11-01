"use client";

import { useEffect, useState, useId } from "react";
import Image from "next/image";
import {
  User,
  Phone,
  Mail,
  LayoutGrid,
  Link2,
  Lock,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  website: string;
}

const initialFormData: FormData = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  website: "",
};

const serviceOptions = [
  "SEO Services",
  "Website Development",
  "Google Ads (PPC)",
  "Social Media Marketing",
  "Local SEO",
  "Branding Services",
  "Content Marketing",
  "Ecommerce Website Development",
];

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fullNameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const serviceId = useId();
  const websiteId = useId();

  // Trigger popup when website initially loads
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Dummy submission simulation
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      toast.success("Thank you! Your consultation request has been received.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset state after closing animation
    setTimeout(() => {
      setIsSuccess(false);
      setFormData(initialFormData);
      setErrors({});
    }, 400);
  };

  return (
    <>
      {/* Floating Button to Reopen Form */}
      {/* <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/35 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Open free consultation form"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400"></span>
              </span>

              <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-medium tracking-wide">Free Consultation</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Popup Modal Backdrop & Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleClose}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative w-full max-w-[960px] overflow-hidden rounded-[26px] sm:rounded-[32px] bg-white shadow-2xl shadow-slate-950/40 z-10 my-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="consultation-title"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:top-5 sm:right-5 sm:h-10 sm:w-10"
                aria-label="Close consultation modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Left Column: Flareway Brand & Growth Banner */}
                <div className="relative hidden md:block md:w-[44%] lg:w-[45%] bg-[#00173d] overflow-hidden">
                  <div className="relative h-full w-full min-h-[580px]">
                    <Image
                      src="/images/home/popup_left_banner_2x2.png"
                      alt="Flareway Technologies - Let's Grow Your Business with the Right Digital Strategy"
                      fill
                      sizes="(max-width: 1024px) 45vw, 440px"
                      className="object-cover object-top select-none pointer-events-none"
                      priority
                    />
                  </div>
                </div>

                {/* Mobile Top Header (Visible on screens < 768px) */}
                <div className="block md:hidden bg-gradient-to-r from-[#00173d] via-[#002257] to-[#002d6c] px-6 pt-6 pb-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md text-[#001f54] font-black text-sm shadow">
                      <Image
                        src=

                        "/images/logo/flareway_white_transparent.png"

                        // src="/images/logo/flareway_white.png"
                        alt="Flareway_logo"
                        width={30}
                        height={40}
                      // className="w-auto h-auto"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-wider uppercase block leading-none">
                        FLAREWAY
                      </span>
                      <span className="text-[9px] text-blue-200 tracking-widest uppercase block mt-0.5 font-medium">
                        TECHNOLOGIES
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Let's Grow Your Business
                  </p>
                  <p className="text-lg font-bold text-white mt-0.5">
                    with the Right{" "}
                    <span className="text-sky-400">Digital Strategy!</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2.5 text-[11px] text-blue-100 font-medium">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 backdrop-blur-xs">
                      ✓ Free Consultation
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 backdrop-blur-xs">
                      ✓ Online Visibility
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 backdrop-blur-xs">
                      ✓ No Obligation
                    </span>
                  </div>
                </div>

                {/* Right Column: Consultation Form */}
                <div className="flex-1 px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
                  {isSuccess ? (
                    /* Success State */
                    <div className="flex min-h-[460px] flex-col items-center justify-center text-center py-6">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 ring-8 ring-green-50/50">
                        <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Consultation Booked!
                      </h3>
                      <p className="mt-2.5 max-w-sm text-sm text-gray-600 leading-relaxed">
                        Thank you,{" "}
                        <span className="font-semibold text-gray-900">
                          {formData.fullName}
                        </span>
                        ! Our digital marketing team will reach out to you shortly
                        to discuss your growth strategy.
                      </p>
                      <button
                        type="button"
                        onClick={handleClose}
                        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
                      >
                        Done & Close
                      </button>
                    </div>
                  ) : (
                    /* Form State */
                    <div>
                      <div className="mb-5 sm:mb-6 pr-8">
                        <h2
                          id="consultation-title"
                          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
                        >
                          Get Your Free
                          <span className="block">Consultation</span>
                        </h2>
                        <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                          Fill in the details below and our team will get back to
                          you soon.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                        {/* Full Name */}
                        <div>
                          <div
                            className={`flex items-center gap-3 rounded-xl border bg-white px-3.5 py-2.5 sm:py-3 transition-colors ${errors.fullName
                              ? "border-red-400 ring-1 ring-red-200"
                              : "border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
                              }`}
                          >
                            <User className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0" />
                            <input
                              id={fullNameId}
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Full Name *"
                              className="w-full bg-transparent text-sm sm:text-[15px] text-slate-900 placeholder:text-slate-400 outline-none"
                            />
                          </div>
                          {errors.fullName && (
                            <p className="mt-1 text-xs text-red-500 pl-1">
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div>
                          <div
                            className={`flex items-center gap-3 rounded-xl border bg-white px-3.5 py-2.5 sm:py-3 transition-colors ${errors.phone
                              ? "border-red-400 ring-1 ring-red-200"
                              : "border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
                              }`}
                          >
                            <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0" />
                            <input
                              id={phoneId}
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Phone Number *"
                              className="w-full bg-transparent text-sm sm:text-[15px] text-slate-900 placeholder:text-slate-400 outline-none"
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-500 pl-1">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        {/* Business Email */}
                        <div>
                          <div
                            className={`flex items-center gap-3 rounded-xl border bg-white px-3.5 py-2.5 sm:py-3 transition-colors ${errors.email
                              ? "border-red-400 ring-1 ring-red-200"
                              : "border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
                              }`}
                          >
                            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0" />
                            <input
                              id={emailId}
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Business Email (Optional)"
                              className="w-full bg-transparent text-sm sm:text-[15px] text-slate-900 placeholder:text-slate-400 outline-none"
                            />
                          </div>
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500 pl-1">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Service Selection */}
                        <div>
                          <div
                            className={`relative flex items-center gap-3 rounded-xl border bg-white px-3.5 py-2.5 sm:py-3 transition-colors ${errors.service
                              ? "border-red-400 ring-1 ring-red-200"
                              : "border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
                              }`}
                          >
                            <LayoutGrid className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0 pointer-events-none" />
                            <select
                              id={serviceId}
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className={`w-full bg-transparent text-sm sm:text-[15px] outline-none cursor-pointer appearance-none ${formData.service
                                ? "text-slate-900 font-normal"
                                : "text-slate-400"
                                }`}
                            >
                              <option value="" disabled>
                                Which service are you interested in? *
                              </option>
                              {serviceOptions.map((svc) => (
                                <option
                                  key={svc}
                                  value={svc}
                                  className="text-slate-900 py-1"
                                >
                                  {svc}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-3.5 flex items-center text-slate-400">
                              <svg
                                className="h-4 w-4 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          {errors.service && (
                            <p className="mt-1 text-xs text-red-500 pl-1">
                              {errors.service}
                            </p>
                          )}
                        </div>

                        {/* Website URL */}
                        <div>
                          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 sm:py-3 transition-colors focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                            <Link2 className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0" />
                            <input
                              id={websiteId}
                              type="text"
                              name="website"
                              value={formData.website}
                              onChange={handleChange}
                              placeholder="Website URL (Optional)"
                              className="w-full bg-transparent text-sm sm:text-[15px] text-slate-900 placeholder:text-slate-400 outline-none"
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066FF] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:bg-[#0052cc] hover:shadow-xl hover:shadow-blue-500/35 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                <span>Submitting Request...</span>
                              </>
                            ) : (
                              <>
                                <span>Get My Free Consultation</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                              </>
                            )}
                          </button>
                        </div>

                        {/* Privacy / Safe text */}
                        <div className="flex items-center justify-center gap-1.5 pt-1 text-center text-xs text-slate-400">
                          <Lock className="h-3.5 w-3.5 text-slate-400" />
                          <span>Your information is safe with us.</span>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
