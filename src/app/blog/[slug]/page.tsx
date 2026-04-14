import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
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
  return {
    title: `${post.title} — Junior Rosa`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
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

  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col w-full bg-brand-black text-brand-white selection:bg-brand-white selection:text-brand-black">
        <BlogPostView post={post} />
      </main>
      <Footer />
    </>
  );
}
