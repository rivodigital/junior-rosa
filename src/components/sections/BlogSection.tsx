"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlogCard } from "@/components/ui/BlogCard";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Button } from "@/components/ui/Button";

export function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-40 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <SectionLabel>08 — Conteúdo</SectionLabel>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-brand-white leading-[1.05]">
              Antes de contratar,
              <br />
              <span className="text-brand-muted">entenda o jogo.</span>
            </h2>
          </div>
          <Button variant="link" href="#">
            Todos os artigos
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
