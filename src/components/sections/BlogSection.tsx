import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlogCard } from "@/components/ui/BlogCard";
import { BLOG_POSTS } from "@/data/blog-posts";

export function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 lg:py-40 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <Reveal
          variant="fadeUp"
          margin="-80px"
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8"
        >
          <div>
            <SectionLabel>08 — Conteúdo</SectionLabel>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-brand-white leading-[1.05]">
              Antes de contratar,
              <br />
              <span className="text-brand-muted">entenda o jogo.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {BLOG_POSTS.map((post, index) => (
            <Reveal
              key={post.id}
              variant="fadeUp"
              delay={index * 100}
              margin="-50px"
            >
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
