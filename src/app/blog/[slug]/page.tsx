import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
import { SITE_CONFIG } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogPostView } from "@/components/sections/BlogPostView";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;
  return {
    title: `${post.title} — Junior Rosa`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      locale: "pt_BR",
      siteName: "RIVO Stúdio",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_CONFIG.url}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: "RIVO Stúdio",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/images/logo_clara.png`,
      },
    },
    articleSection: post.tag,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_CONFIG.url}/#blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-grow flex flex-col w-full bg-brand-black text-brand-white selection:bg-brand-white selection:text-brand-black">
        <BlogPostView post={post} />
      </main>
      <Footer />
    </>
  );
}
