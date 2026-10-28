"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Share2,
  BookmarkCheck,
  Search,
  TrendingUp,
  ShieldCheck,
  Building2,
  Award,
  Layers,
  HelpCircle,
  PhoneCall,
  Check,
} from "lucide-react";
import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";
import { BlogPost } from "@/lib/blogs";

interface BlogDetailProps {
  blog: BlogPost;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer: Choosing an SEO Agency" },
    { id: "why-need-seo", title: "Why Your Business Needs Professional SEO" },
    { id: "7-factors", title: "7 Factors to Consider When Choosing an SEO Agency" },
    { id: "agency-vs-freelancer", title: "SEO Company vs Freelance Consultant" },
    { id: "when-to-hire", title: "When Should You Hire an SEO Company?" },
    { id: "flareway-support", title: "How Flareway Technologies Supports Your SEO" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "conclusion", title: "Conclusion & Strategic Recommendations" },
  ];

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Header with Flareway Dark Blue Gradient */}
      <FluidContainer className="relative overflow-hidden bg-[#0A1224] text-white">
        {/* Radial glow effects */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 25%, rgba(37,99,235,0.3), transparent 45%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.18), transparent 50%)",
          }}
        />

        {/* Faint grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          }}
        />

        <Container className="relative z-10">
          <div className="pt-36 pb-16 lg:pt-40 lg:pb-24">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-blue-200"
            >
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <ChevronRight size={14} className="text-blue-400" />
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
              <ChevronRight size={14} className="text-blue-400" />
              <span className="font-medium text-white truncate max-w-xs sm:max-w-md">
                SEO Company in Coimbatore
              </span>
            </nav>

            {/* Badges & Category */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-sm">
                <Sparkles size={14} className="text-blue-400" />
                {blog.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-blue-200/80">
                <Clock size={14} className="text-blue-400" />
                {blog.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-blue-200/80">
                <Calendar size={14} className="text-blue-400" />
                {blog.publishedAt}
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="mb-8 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {blog.h1}
            </h1>

            {/* Author Attribution & Share */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-blue-400/30 bg-blue-900/60 p-2">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{blog.author.name}</p>
                  <p className="text-xs text-blue-200">{blog.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-400" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={14} />
                      <span>Share Article</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </FluidContainer>

      {/* Main Content Layout */}
      <FluidContainer className="bg-slate-50 py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Primary Content Column */}
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="mb-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-[2/1] w-full overflow-hidden bg-slate-50">
                  <Image
                    src={blog.image}
                    alt={blog.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-contain"
                  />
                </div>
                <div className="px-6 py-4 text-xs text-gray-500 border-t border-gray-100 flex items-center justify-between">
                  <span>Coimbatore SEO & Digital Strategy Framework</span>
                  <span className="font-medium text-blue-600">Flareway Research</span>
                </div>
              </div>

              {/* Keywords Bar */}
              <div className="mb-10 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Core Topics Covered:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    #{blog.primaryKeyword}
                  </span>
                  {blog.secondaryKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Introduction */}
              <div className="prose prose-lg max-w-none mb-10 text-gray-700 leading-8">
                <p className="text-xl font-medium leading-relaxed text-gray-900">
                  Choosing the right SEO company in Coimbatore can help your
                  business improve online visibility, reach relevant customers,
                  and generate more qualified enquiries. However, not every agency
                  follows the same strategy, reporting standards, or approach to
                  business growth.
                </p>
                <p className="mt-4">
                  The right SEO partner should understand your target audience,
                  assess your website, identify search opportunities, and build a
                  strategy around your business objectives. Instead of choosing an
                  agency based only on price or promises of quick rankings,
                  evaluate its process, expertise, transparency, and ability to
                  measure meaningful results.
                </p>
                <p className="mt-4">
                  This guide explains what to look for when comparing SEO agencies
                  and how to choose a partner that aligns with your business goals.
                </p>
              </div>

              {/* Quick Answer Box */}
              <section
                id="quick-answer"
                className="mb-14 scroll-mt-28 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  <BookmarkCheck size={14} />
                  <span>Quick Answer</span>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  How Do You Choose the Right SEO Company in Coimbatore?
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {blog.quickAnswer}
                </p>
              </section>

              {/* Why Business Needs Professional SEO */}
              <section
                id="why-need-seo"
                className="mb-14 scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Why Does Your Business Need Professional SEO Services?
                </h2>
                <p className="mb-6 text-lg leading-8 text-gray-700">
                  Search engines help potential customers discover businesses when
                  they research products, compare service providers, or look for
                  solutions to specific problems. If your website does not appear
                  for relevant searches, you may miss opportunities to connect
                  with people already interested in your services.
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    {
                      title: "Improve search visibility",
                      desc: "Optimize relevant pages to make them easier for search engines to understand and evaluate.",
                    },
                    {
                      title: "Attract relevant visitors",
                      desc: "Target search terms aligned with your products, services, and customer needs.",
                    },
                    {
                      title: "Strengthen local discovery",
                      desc: "Improve your website's relevance for location-based searches where appropriate.",
                    },
                    {
                      title: "Build user trust",
                      desc: "Provide clear information, useful content, and a better website experience.",
                    },
                    {
                      title: "Support lead generation",
                      desc: "Make it easier for visitors to understand your services and contact your business.",
                    },
                  ].map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 rounded-2xl border border-gray-100 bg-gray-50/70 p-4 transition hover:bg-blue-50/40 hover:border-blue-100"
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                        <p className="text-sm leading-6 text-gray-600">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50/70 p-4 text-sm leading-6 text-blue-900">
                  <p className="font-medium">
                    <strong>Please note:</strong> SEO is a long-term marketing
                    investment. Results depend on your website&apos;s current
                    condition, competition, industry, resources, and implementation
                    quality.
                  </p>
                </div>
              </section>

              {/* 7 Factors to Consider */}
              <section id="7-factors" className="mb-14 scroll-mt-28 space-y-10">
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    7 Factors to Consider When Choosing an SEO Agency in Coimbatore
                  </h2>
                  <p className="text-lg leading-8 text-gray-600">
                    To make an informed decision and safeguard your marketing
                    investment, evaluate prospective partners across these seven
                    essential criteria:
                  </p>
                </div>

                {/* Factor 1 */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">
                      1
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Evaluate Industry Knowledge and Business Understanding
                    </h3>
                  </div>
                  <p className="mb-4 leading-8 text-gray-700">
                    An effective SEO strategy starts with understanding your
                    business. Your agency should ask about your services, ideal
                    customers, target locations, competitors, and conversion goals
                    before recommending keywords or website changes.
                  </p>
                  <p className="leading-8 text-gray-700">
                    Look for a team that can explain how its recommendations
                    relate to your business objectives. An approach designed for
                    an e-commerce website may differ considerably from one
                    intended to generate enquiries for a B2B service company.
                  </p>
                </div>

                {/* Factor 2 */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">
                      2
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Review the SEO Strategy Before Signing a Contract
                    </h3>
                  </div>
                  <p className="mb-5 leading-8 text-gray-700">
                    Avoid selecting an agency based on a generic list of
                    activities. Ask for a clear explanation of how it plans to
                    assess your website, identify opportunities, prioritize
                    improvements, and measure progress.
                  </p>
                  <div className="mb-5 rounded-2xl bg-gray-50 p-5 border border-gray-100">
                    <h4 className="mb-3 font-semibold text-gray-900">
                      A practical SEO strategy typically includes:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                      {[
                        "Keyword research and search-intent analysis",
                        "Technical SEO audits and website improvements",
                        "On-page optimization and content planning",
                        "Internal linking and site structure improvements",
                        "Relevant authority-building activities",
                        "Local SEO where location-based searches matter",
                        "Performance monitoring and ongoing refinement",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm italic text-gray-600">
                    The exact scope should reflect your website&apos;s needs
                    rather than include unnecessary activities.
                  </p>
                </div>

                {/* Factor 3: Deliverables Table */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">
                      3
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Understand the Services and Deliverables
                    </h3>
                  </div>
                  <p className="mb-6 leading-8 text-gray-700">
                    Before choosing an SEO company, confirm what its package
                    includes and how work will be delivered.
                  </p>

                  {/* Responsive Table */}
                  <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                    <table className="w-full text-left text-sm text-gray-700">
                      <thead className="bg-gray-100 text-xs uppercase tracking-wider text-gray-700">
                        <tr>
                          <th scope="col" className="px-6 py-4 font-bold">
                            SEO Service
                          </th>
                          <th scope="col" className="px-6 py-4 font-bold">
                            What to Clarify
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {[
                          {
                            service: "Keyword research",
                            clarify:
                              "Target keywords, search intent, and prioritization",
                          },
                          {
                            service: "Technical SEO",
                            clarify:
                              "Crawlability, indexability, site structure, and performance issues",
                          },
                          {
                            service: "On-page SEO",
                            clarify:
                              "Page titles, headings, content, metadata, and internal links",
                          },
                          {
                            service: "Content optimization",
                            clarify:
                              "Existing page improvements and new content requirements",
                          },
                          {
                            service: "Local SEO",
                            clarify:
                              "Location relevance, Google Business Profile support, and local visibility",
                          },
                          {
                            service: "Reporting",
                            clarify:
                              "Progress updates, performance metrics, and next steps",
                          },
                        ].map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-blue-50/30 transition-colors"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-semibold text-gray-900">
                              {row.service}
                            </td>
                            <td className="px-6 py-4">{row.clarify}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-gray-600">
                    Ask which tasks the agency will execute, which require your
                    approval, and whether development or content production
                    carries additional costs.
                  </p>
                </div>

                {/* Factor 4: Pricing */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">
                      4
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Compare SEO Pricing With Expected Value
                    </h3>
                  </div>
                  <p className="mb-4 leading-8 text-gray-700">
                    SEO pricing varies depending on website size, competition,
                    technical complexity, content requirements, target locations,
                    and the amount of ongoing work.
                  </p>
                  <p className="mb-6 leading-8 text-gray-700">
                    Rather than selecting the lowest quote, compare the scope of
                    work, expertise, communication, reporting, and resources
                    included in each proposal.
                  </p>

                  <div className="rounded-2xl bg-slate-50 border border-gray-200 p-6 mb-6">
                    <h4 className="mb-3 font-semibold text-gray-900">
                      Before agreeing to a price, ask:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        "What specific deliverables are included each month?",
                        "Are website development and content creation included?",
                        "Are there additional charges for technical changes or other services?",
                        "How will progress be measured?",
                        "What contract terms and cancellation conditions apply?",
                      ].map((q, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">
                    A transparent proposal should explain the work being performed
                    and how it supports your business objectives.{" "}
                    <strong>
                      Be cautious of guaranteed rankings or promises of immediate
                      results.
                    </strong>
                  </div>
                </div>

                {/* Factor 5: Reporting */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">
                      5
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Check Reporting and Performance Measurement
                    </h3>
                  </div>
                  <p className="mb-5 leading-8 text-gray-700">
                    SEO reporting should help you understand what has changed,
                    what is improving, and what needs attention.
                  </p>

                  <div className="mb-6 rounded-2xl bg-gray-50 p-5 border border-gray-100">
                    <h4 className="mb-3 font-semibold text-gray-900">
                      Useful performance indicators include:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                      {[
                        "Organic clicks and impressions",
                        "Search queries and keyword visibility",
                        "Organic landing-page performance",
                        "Relevant enquiry and conversion trends",
                        "Technical issues identified and resolved",
                        "Progress against agreed priorities",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="leading-8 text-gray-700">
                    Google Search Console can help evaluate search impressions,
                    clicks, and query performance. Website analytics and conversion
                    tracking can provide additional insight into visitor behaviour
                    and enquiries. Rankings and traffic are useful indicators, but
                    they should be evaluated alongside lead quality and business
                    outcomes.
                  </p>
                </div>

                {/* Factor 6: Local SEO */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">
                      6
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Look for Local SEO Expertise
                    </h3>
                  </div>
                  <p className="mb-5 leading-8 text-gray-700">
                    If your business serves customers in Coimbatore, local SEO may
                    help improve visibility for relevant location-based searches.
                    Depending on your business model, local SEO activities can
                    include:
                  </p>

                  <ul className="space-y-3 mb-6 text-sm text-gray-700">
                    {[
                      "Optimizing relevant service pages for target locations",
                      "Maintaining accurate business information",
                      "Improving Google Business Profile completeness and relevance",
                      "Supporting genuine customer reviews in accordance with platform policies",
                      "Ensuring consistent business details across relevant directories",
                      "Creating useful, location-specific content",
                    ].map((activity, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-blue-600"
                        />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="leading-8 text-gray-700">
                    Local optimization should reflect the areas you actually
                    serve. Avoid publishing repetitive location pages that provide
                    little unique value. For businesses targeting customers beyond
                    Coimbatore, the strategy should also account for relevant
                    regional, national, or international search opportunities.
                  </p>
                </div>

                {/* Factor 7: Communication */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">
                      7
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Assess Communication, Accountability, and Long-Term Support
                    </h3>
                  </div>
                  <p className="mb-5 leading-8 text-gray-700">
                    SEO requires ongoing analysis and adjustments. Your agency
                    should explain its recommendations clearly, communicate
                    priorities, and provide realistic expectations.
                  </p>

                  <div className="rounded-2xl bg-gray-50 p-5 border border-gray-100 mb-5">
                    <h4 className="mb-3 font-semibold text-gray-900">
                      Before choosing a partner, establish:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        "Who will manage your account?",
                        "How often will progress be reviewed?",
                        "How are tasks prioritized and approved?",
                        "Who owns the website, analytics accounts, and content?",
                        "How will the strategy adapt to changes in performance or business goals?",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="leading-8 text-gray-700">
                    A reliable working relationship should provide transparency
                    and keep your business informed about the work being
                    performed.
                  </p>
                </div>
              </section>

              {/* Comparison: SEO Company vs. Freelancer */}
              <section
                id="agency-vs-freelancer"
                className="mb-14 scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  SEO Company vs. Freelance SEO Consultant: Which Is Better?
                </h2>
                <p className="mb-6 leading-8 text-gray-700">
                  Both an SEO agency and a freelance consultant can support your
                  search optimization goals. The right option depends on your
                  website&apos;s requirements, budget, project complexity, and
                  need for ongoing execution.
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
                  <table className="w-full text-left text-sm text-gray-700">
                    <thead className="bg-gray-100 text-xs uppercase tracking-wider text-gray-700">
                      <tr>
                        <th scope="col" className="px-5 py-4 font-bold">
                          Factor
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 font-bold text-blue-600"
                        >
                          SEO Company
                        </th>
                        <th scope="col" className="px-5 py-4 font-bold">
                          Freelance SEO Consultant
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {[
                        {
                          factor: "Team structure",
                          agency: "May provide access to multiple specialists",
                          freelancer:
                            "Usually works independently, sometimes with external support",
                        },
                        {
                          factor: "Service coverage",
                          agency:
                            "May coordinate technical SEO, content, and other activities",
                          freelancer: "Often focuses on selected SEO services",
                        },
                        {
                          factor: "Project capacity",
                          agency: "May suit broader or ongoing requirements",
                          freelancer:
                            "May suit focused projects or smaller scopes",
                        },
                        {
                          factor: "Communication",
                          agency:
                            "Depends on account management and team structure",
                          freelancer:
                            "Often involves direct communication with the consultant",
                        },
                        {
                          factor: "Best fit",
                          agency:
                            "Businesses needing coordinated, multi-area support",
                          freelancer:
                            "Businesses needing specialized advice or a defined scope",
                        },
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-blue-50/20 transition-colors"
                        >
                          <td className="whitespace-nowrap px-5 py-4 font-bold text-gray-900">
                            {row.factor}
                          </td>
                          <td className="px-5 py-4 font-medium text-blue-900 bg-blue-50/30">
                            {row.agency}
                          </td>
                          <td className="px-5 py-4 text-gray-600">
                            {row.freelancer}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm italic text-gray-600">
                  Evaluate the actual expertise, deliverables, accountability,
                  and working model instead of assuming that one option is always
                  better.
                </p>
              </section>

              {/* When Should You Hire */}
              <section
                id="when-to-hire"
                className="mb-14 scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  When Should You Hire an SEO Company?
                </h2>
                <p className="mb-6 leading-8 text-gray-700">
                  Your business may benefit from professional SEO support if:
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Your website receives little relevant organic traffic.",
                    "Your service pages do not target the searches your customers use.",
                    "Your competitors appear more prominently for important queries.",
                    "Your website has technical or content-related SEO issues.",
                    "Your business wants to improve visibility in relevant local searches.",
                    "Your website attracts visitors but generates few enquiries.",
                    "Your team needs a structured, measurable SEO plan.",
                  ].map((condition, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-3.5"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-xs">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {condition}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-sm leading-6 text-gray-600">
                  An initial audit can help identify which issues deserve
                  attention first and whether ongoing SEO support is appropriate.
                </p>
              </section>

              {/* How Flareway Technologies Can Support */}
              <section
                id="flareway-support"
                className="mb-14 scroll-mt-28 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/30 p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                  <Sparkles size={14} />
                  <span>Flareway SEO Advantage</span>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  How Flareway Technologies Can Support Your SEO Goals
                </h2>
                <p className="mb-6 leading-8 text-gray-700">
                  Flareway Technologies provides SEO and digital marketing
                  services for businesses seeking to strengthen their online
                  presence. The appropriate SEO approach depends on your website,
                  target audience, business objectives, and current search
                  performance.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  {[
                    {
                      title: "Website & Technical Assessment",
                      desc: "Review website structure, indexability, core web vitals, technical issues, and optimization opportunities.",
                    },
                    {
                      title: "Keyword & Competitor Research",
                      desc: "Identify relevant search terms, understand search intent, and assess opportunities within your target market.",
                    },
                    {
                      title: "On-Page & Content Optimization",
                      desc: "Improve page titles, headings, content structure, internal links, schema markup, and on-page signals.",
                    },
                    {
                      title: "Local Search Optimization",
                      desc: "Where relevant, improve location-specific website content and Google Business Profile visibility.",
                    },
                    {
                      title: "Performance Review & Iteration",
                      desc: "Monitor agreed indicators, assess progress, and identify continuous priorities for business growth.",
                    },
                  ].map((service, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl border border-blue-100 bg-white p-5 shadow-sm ${
                        i === 4 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <h3 className="mb-2 text-base font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-6 text-gray-600">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Inline CTA Box */}
                <div className="rounded-2xl bg-gray-900 p-6 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Looking for SEO services in Coimbatore?
                    </h3>
                    <p className="text-sm text-gray-300">
                      Discuss your website, target audience, and growth objectives
                      with Flareway Technologies.
                    </p>
                  </div>
                  <Link
                    href="/services/seo-services"
                    className="mt-4 sm:mt-0 inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
                  >
                    <span>Discuss SEO Requirements</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </section>

              {/* Frequently Asked Questions */}
              <section id="faq" className="mb-14 scroll-mt-28">
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                    <HelpCircle size={16} />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    Common Questions on Choosing an SEO Partner
                  </h2>
                  <p className="mb-8 text-gray-600 leading-7">
                    Get clear, straightforward answers about SEO timelines,
                    pricing models, lead generation expectations, and local
                    optimization.
                  </p>

                  <div className="space-y-4">
                    {blog.faqs.map((faq, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div
                          key={index}
                          className="overflow-hidden rounded-2xl border border-gray-200 transition-all duration-200 hover:border-blue-200"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-gray-50/70"
                            aria-expanded={isOpen}
                          >
                            <span className="font-semibold text-gray-900 text-base sm:text-lg">
                              {faq.question}
                            </span>
                            <div
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all ${
                                isOpen ? "rotate-180 bg-blue-100 text-blue-600" : ""
                              }`}
                            >
                              <ChevronDown size={18} />
                            </div>
                          </button>
                          {isOpen && (
                            <div className="border-t border-gray-100 bg-gray-50/50 p-5 text-sm leading-relaxed text-gray-700">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Conclusion & Final CTA */}
              <section
                id="conclusion"
                className="scroll-mt-28 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 shadow-sm"
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Conclusion: Choose an SEO Partner Based on Strategy and Transparency
                </h2>
                <p className="mb-4 text-lg leading-8 text-gray-700">
                  Choosing the right SEO company in Coimbatore requires more than
                  comparing prices or promises. Look for a provider that
                  understands your business, develops a relevant strategy,
                  explains its deliverables, and measures progress using
                  meaningful performance indicators.
                </p>
                <p className="mb-6 leading-8 text-gray-700">
                  Before committing, review the proposed scope, clarify
                  expectations, and ensure your website and conversion process
                  can support your lead-generation goals. If you want to evaluate
                  opportunities for your website, connect with Flareway
                  Technologies to discuss your SEO requirements and determine
                  the next steps for your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-blue-100">
                  <Link
                    href="/services/seo-services"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
                  >
                    <span>View SEO Services</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-800 transition hover:bg-gray-50"
                  >
                    <span>Discuss Your SEO Requirements</span>
                  </Link>
                </div>
              </section>
            </div>

            {/* Sticky Sidebar Column */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Table of Contents Card */}
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-900">
                    <Layers size={18} className="text-blue-600" />
                    <span>Table of Contents</span>
                  </h3>
                  <nav className="space-y-2 text-sm">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block rounded-lg px-3 py-2 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Free Consultation Card */}
                <div className="rounded-3xl bg-[#0A1224] p-7 text-white shadow-md">
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                    <Sparkles size={12} />
                    <span>Free Consultation</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">
                    Need Help With Your SEO?
                  </h3>
                  <p className="mb-6 text-sm leading-6 text-gray-300">
                    Get a tailored SEO roadmap and technical audit for your
                    Coimbatore business from Flareway Technologies.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full rounded-xl bg-blue-600 py-3.5 text-center font-semibold text-white shadow-lg transition hover:bg-blue-700"
                  >
                    Get Free SEO Audit
                  </Link>
                </div>

                {/* Flareway Services Quick Links */}
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-base font-bold text-gray-900">
                    Related Services
                  </h3>
                  <div className="space-y-2.5 text-sm">
                    <Link
                      href="/services/seo-services"
                      className="flex items-center justify-between rounded-xl border border-gray-100 p-3 font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600"
                    >
                      <span>SEO Services</span>
                      <ChevronRight size={16} />
                    </Link>
                    <Link
                      href="/services/local-seo"
                      className="flex items-center justify-between rounded-xl border border-gray-100 p-3 font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600"
                    >
                      <span>Local SEO</span>
                      <ChevronRight size={16} />
                    </Link>
                    <Link
                      href="/services/web-development"
                      className="flex items-center justify-between rounded-xl border border-gray-100 p-3 font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600"
                    >
                      <span>Website Development</span>
                      <ChevronRight size={16} />
                    </Link>
                    <Link
                      href="/services/google-ads"
                      className="flex items-center justify-between rounded-xl border border-gray-100 p-3 font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600"
                    >
                      <span>Google Ads Management</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </FluidContainer>
    </article>
  );
}
