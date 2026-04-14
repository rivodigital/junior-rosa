"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/data/blog-posts";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a href={`/blog/${post.slug}`} className="group flex flex-col gap-5">
      <motion.article
        className="cursor-pointer flex flex-col gap-5"
        whileHover="hover"
      >
      <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl relative bg-brand-gray">
        <motion.div
          className="absolute inset-0 w-full h-full"
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] uppercase font-bold tracking-[0.15em] text-brand-white bg-brand-white/[0.05] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.06]">
            {post.tag}
          </span>
          <span className="text-xs text-brand-muted backdrop-blur-sm">{post.readTime}</span>
        </div>

        <h3 className="text-lg md:text-xl font-bold mb-3 text-brand-white group-hover:text-brand-accent transition-colors duration-300 leading-snug">
          {post.title}
        </h3>
        <p className="text-brand-muted line-clamp-2 text-sm md:text-base font-light flex-grow leading-relaxed">
          {post.excerpt}
        </p>

        <motion.div
          className="flex items-center gap-2 mt-5 text-sm font-bold text-brand-white"
          variants={{ hover: { gap: "12px" } }}
          transition={{ duration: 0.3 }}
        >
          Ler artigo
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      </div>
      </motion.article>
    </a>
  );
}
