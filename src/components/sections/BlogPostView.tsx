"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BlogPost, BLOG_POSTS } from "@/data/blog-posts";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";

interface BlogPostViewProps {
  post: BlogPost;
}

export function BlogPostView({ post }: BlogPostViewProps) {
  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <article className="w-full">
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-24 border-b border-white/[0.06]">
        <div className="container mx-auto px-6 md:px-12 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-brand-muted hover:text-brand-white transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] uppercase font-bold tracking-[0.15em] text-brand-white bg-brand-white/[0.05] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.06]">
                {post.tag}
              </span>
              <span className="text-xs text-brand-muted">{post.readTime} de leitura</span>
            </div>

            <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-bold tracking-tight leading-[1.05] text-brand-white mb-8">
              {post.title}
            </h1>

            <p className="text-[17px] md:text-[19px] text-brand-muted leading-[1.6] font-light max-w-[720px] mb-10">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[13px] font-bold text-brand-white">
                JR
              </div>
              <div>
                <p className="text-[14px] font-medium text-brand-white">{post.author}</p>
                <p className="text-[12px] text-brand-muted">Fundador, RIVO Stúdio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
          <motion.div
            className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-brand-gray"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={encodeURI(post.image)}
              alt={post.title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-[720px]">
          <div className="prose-custom">
            <p className="text-[18px] md:text-[20px] leading-[1.7] text-brand-white/90 font-light mb-12">
              {post.intro}
            </p>

            {post.sections.map((section, i) => (
              <div key={i} className="mb-12">
                {section.heading && (
                  <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight text-brand-white leading-[1.2] mb-5">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-[16px] md:text-[17px] leading-[1.75] text-brand-muted mb-4"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3 my-6">
                    {section.list.map((item, j) => (
                      <li
                        key={j}
                        className="text-[16px] md:text-[17px] leading-[1.75] text-brand-muted pl-6 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-px before:bg-brand-white/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.quote && (
                  <blockquote className="border-l-2 border-brand-white/40 pl-6 my-8 text-[18px] md:text-[20px] italic text-brand-white/80 leading-[1.6]">
                    {section.quote}
                  </blockquote>
                )}
              </div>
            ))}

            <div className="mt-16 pt-10 border-t border-white/[0.06]">
              <p className="text-[16px] md:text-[17px] leading-[1.75] text-brand-white/90">
                {post.conclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-dark border-y border-white/[0.06]">
        <div className="container mx-auto px-6 md:px-12 max-w-[900px] text-center">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold tracking-tight text-brand-white leading-[1.1] mb-6">
            Seu site precisa deixar de ser folheto e virar{" "}
            <span className="text-brand-muted">ferramenta de vendas?</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg max-w-[560px] mx-auto mb-10 leading-relaxed">
            Preencha o briefing em 2 minutos e receba uma proposta personalizada em até 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={SITE_CONFIG.whatsapp} variant="outline" className="px-10 py-4">
              Falar no WhatsApp
            </Button>
            <Button href="/#contato" variant="link">
              Preencher briefing
            </Button>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
            <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-muted mb-10">
              Continuar lendo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-5"
                >
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl bg-brand-gray">
                    <Image
                      src={encodeURI(p.image)}
                      alt={p.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] uppercase font-bold tracking-[0.15em] text-brand-white bg-brand-white/[0.05] px-3 py-1.5 rounded-full border border-white/[0.06]">
                        {p.tag}
                      </span>
                      <span className="text-xs text-brand-muted">{p.readTime}</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-brand-white group-hover:text-brand-accent transition-colors leading-snug mb-3">
                      {p.title}
                    </h4>
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-white">
                      Ler artigo
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
