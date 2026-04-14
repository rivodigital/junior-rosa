"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <img
            src={encodeURI(images[currentIndex])}
            alt={`Gallery image ${currentIndex + 1}`}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "grayscale-0" : "grayscale"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        aria-label="Imagem anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-40 hover:opacity-100 hover:bg-black/50 transition-all duration-300 active:scale-90"
      >
        <ChevronLeft className="w-5 h-5 text-white/80" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Próxima imagem"
        className="absolute right-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-40 hover:opacity-100 hover:bg-black/50 transition-all duration-300 active:scale-90"
      >
        <ChevronRight className="w-5 h-5 text-white/80" />
      </button>
    </div>
  );
}
