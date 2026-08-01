import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WebDevelopmentPage from "@/components/services/webdev/Index";
import { serviceSeo } from "@/lib/serviceSeo";
import SEOServicePage from "@/components/services/seoservices/Index";
import GoogleAdsPage from "@/components/services/googleads/Index";
import SocialMediaMarketingPage from "@/components/services/socialmedia/Index";
import LocalSEOPage from "@/components/services/localseo/Index";
import Branding from "@/components/services/branding/Index";
import ContentMarketing from "@/components/services/contentmarketing/Index";
import EcommerceWebsiteDevelopment from "@/components/services/ecommerce/Index";

const serviceComponents = {
  "web-development": WebDevelopmentPage,
  "seo-services": SEOServicePage,
  "google-ads": GoogleAdsPage,
  "social-media-marketing": SocialMediaMarketingPage,
  "local-seo": LocalSEOPage,
  "branding-services": Branding,
  "content-marketing": ContentMarketing,
  "ecommerce-development": EcommerceWebsiteDevelopment,
} as const;

type ServiceSlug = keyof typeof serviceComponents;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(serviceComponents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const seo = serviceSeo[slug as keyof typeof serviceSeo];

  if (!seo) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,

    alternates: {
      canonical: `/services/${slug}`,
    },

    openGraph: {
      type: "website",
      title: seo.title,
      description: seo.description,
      url: `/services/${slug}`,
      siteName: "Flareway Technologies",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const Component = serviceComponents[slug as ServiceSlug];

  if (!Component) {
    notFound();
  }

  return <Component />;
}
