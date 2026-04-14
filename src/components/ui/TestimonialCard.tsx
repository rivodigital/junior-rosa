"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/data/testimonials";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-brand-white/[0.02] backdrop-blur-xl p-5 md:p-8 lg:p-10 rounded-2xl flex flex-col justify-between border border-white/[0.06] gap-6 md:gap-8 hover:border-white/[0.1] hover:bg-brand-white/[0.04] transition-all duration-500 group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-5">
        {testimonial.metric && (
          <span className="inline-block text-xs uppercase tracking-[0.15em] font-bold text-brand-white bg-brand-white/[0.06] px-3 py-1.5 rounded-full">
            {testimonial.metric}
          </span>
        )}
        <p className="text-lg md:text-xl font-light leading-relaxed text-brand-white/90">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-brand-gray shrink-0 relative ring-2 ring-brand-white/10">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover object-center"
            sizes="44px"
          />
        </div>
        <div>
          <p className="font-bold text-sm text-brand-white">
            {testimonial.name}
          </p>
          <p className="text-xs text-brand-muted">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
