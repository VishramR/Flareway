import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, BookOpen, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";
import { blogs } from "@/lib/blogs";

export default function BlogSection() {
  const featuredBlog = blogs[0];

  return (
    <FluidContainer className="bg-[#F8FAFC]">
      <Container>
        <section className="py-20 lg:py-28">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              <Sparkles size={14} className="text-blue-600" />
              <span>Latest Insights & Articles</span>
            </div>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Proven Strategies for Digital Growth
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Practical guides, local search optimization frameworks, and
              actionable advice to help businesses in Coimbatore and beyond
              build sustainable organic visibility.
            </p>
          </div>

          {/* Featured Blog Card */}
          {featuredBlog && (
            <div className="mx-auto max-w-4xl">
              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="group block overflow-hidden rounded-[2rem] border border-gray-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Full Uncropped Image with exact 2:1 aspect ratio */}
                <div className="relative aspect-[2/1] w-full overflow-hidden bg-slate-50 border-b border-gray-100">
                  <Image
                    src={featuredBlog.image}
                    alt={featuredBlog.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-contain"
                    priority
                  />

                  {/* Category pill on image */}
                  {/* <div className="absolute top-4 left-4 z-10 sm:top-5 sm:left-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/95 px-3.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-md">
                      <BookOpen size={12} />
                      {featuredBlog.category}
                    </span>
                  </div> */}
                </div>

                {/* Card Body */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-9">
                  <div>
                    {/* Meta stats */}
                    <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} className="text-blue-600" />
                        {featuredBlog.publishedAt}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} className="text-blue-600" />
                        {featuredBlog.readTime}
                      </span>
                      <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                        Featured Guide
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-2xl font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-blue-600 sm:text-3xl">
                      {featuredBlog.h1}
                    </h3>

                    {/* Excerpt */}
                    <p className="mb-6 line-clamp-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                      {featuredBlog.excerpt}
                    </p>

                    {/* Keywords Tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {featuredBlog.secondaryKeywords.slice(0, 3).map((kw) => (
                        <span
                          key={kw}
                          className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Author & CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-blue-100 bg-blue-50">
                        <Image
                          src={featuredBlog.author.avatar}
                          alt={featuredBlog.author.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {featuredBlog.author.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {featuredBlog.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3 group-hover:text-blue-700">
                      <span>Read Full Guide</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Bottom Callout */}
          <div className="mt-14 text-center">
            <p className="text-sm text-gray-500">
              Need personalized advice for your website?{" "}
              <Link
                href="/services/seo-services"
                className="font-semibold text-blue-600 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800"
              >
                Explore our Coimbatore SEO Services
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="font-semibold text-blue-600 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800"
              >
                Request a Free SEO Audit
              </Link>
              .
            </p>
          </div>
        </section>
      </Container>
    </FluidContainer>
  );
}
