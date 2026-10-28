import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, BookOpen, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";
import { getAllBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Insights & Blog | Digital Marketing & SEO Guides | Flareway Technologies",
  description:
    "Explore actionable guides, SEO strategies, and web development insights from Flareway Technologies in Coimbatore to help your business grow online.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "Insights & Blog | Flareway Technologies",
    description:
      "Explore actionable guides, SEO strategies, and web development insights from Flareway Technologies in Coimbatore.",
    url: "/blog",
    siteName: "Flareway Technologies",
  },
};

export default function BlogIndexPage() {
  const blogs = getAllBlogs();

  return (
    <>
      {/* Blog Hero Header */}
      <FluidContainer className="relative overflow-hidden bg-[#0A1224] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 25%, rgba(37,99,235,0.35), transparent 45%), radial-gradient(circle at 82% 70%, rgba(59,130,246,0.2), transparent 50%)",
          }}
        />

        <Container className="relative z-10">
          <section className="pt-36 pb-20 lg:pt-40 lg:pb-28 text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-sm">
              <Sparkles size={14} className="text-blue-400" />
              <span>Flareway Insights</span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Blog & Digital Growth Guides
            </h1>

            <p className="text-lg leading-8 text-blue-100">
              In-depth research, SEO best practices, web design frameworks, and
              practical tips to help businesses in Coimbatore and beyond scale
              their digital presence.
            </p>
          </section>
        </Container>
      </FluidContainer>

      {/* Blog Cards Grid */}
      <FluidContainer className="bg-[#F8FAFC] py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <Link
                  href={`/blog/${blog.slug}`}
                  className="relative aspect-[2/1] w-full overflow-hidden bg-slate-50 border-b border-gray-100"
                >
                  <Image
                    src={blog.image}
                    alt={blog.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/95 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
                      <BookOpen size={12} />
                      {blog.category}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={13} className="text-blue-600" />
                        {blog.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={13} className="text-blue-600" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="mb-3 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600">
                      <Link href={`/blog/${blog.slug}`}>{blog.h1}</Link>
                    </h2>

                    <p className="line-clamp-3 text-sm leading-6 text-gray-600 mb-6">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                    <div className="flex items-center gap-2.5">
                      <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-blue-100 bg-blue-50">
                        <Image
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-900">
                        {blog.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition group-hover:gap-2 group-hover:text-blue-700"
                    >
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-20 rounded-3xl bg-gray-900 p-8 sm:p-12 text-center text-white">
            <h2 className="mb-3 text-2xl sm:text-3xl font-bold">
              Want to Outrank Competitors in Coimbatore?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-300 leading-7">
              Our search specialists conduct comprehensive audits to identify
              keyword gaps, technical roadblocks, and high-ROI opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/services/seo-services"
                className="rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore SEO Services
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Request Free Audit
              </Link>
            </div>
          </div>
        </Container>
      </FluidContainer>
    </>
  );
}
