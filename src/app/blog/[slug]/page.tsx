import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogDetail from "@/components/blog/BlogDetail";
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Flareway Technologies",
    };
  }

  const canonicalUrl = `/blog/${slug}`;

  return {
    title: {
      absolute: blog.metaTitle,
    },
    description: blog.metaDescription,
    keywords: [blog.primaryKeyword, ...blog.secondaryKeywords],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "article",
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: canonicalUrl,
      siteName: "Flareway Technologies",
      publishedTime: "2026-10-28T00:00:00.000Z",
      authors: [blog.author.name],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // JSON-LD Structured Data for Article & FAQ Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.h1,
    description: blog.metaDescription,
    image: `https://www.flarewaytechnologies.com${blog.image}`,
    author: {
      "@type": "Organization",
      name: blog.author.name,
      url: "https://www.flarewaytechnologies.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Flareway Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://www.flarewaytechnologies.com/images/logo/flareway_favicon.png",
      },
    },
    datePublished: "2026-10-28T00:00:00.000Z",
    dateModified: "2026-10-28T00:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.flarewaytechnologies.com/blog/${blog.slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blog.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogDetail blog={blog} />
    </>
  );
}
