"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const toHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;
  const homeHref = isHome ? "#" : "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-sans ${
        isScrolled
          ? "bg-brand-black/80 backdrop-blur-2xl py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px] flex justify-between items-center">
        <a href={homeHref} aria-label="RIVO" className="min-h-[44px] min-w-[44px] flex items-center p-2 -m-2">
          <Image src="/images/logo_clara.png" alt="RIVO" width={120} height={40} className="h-7 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.label}
              href={toHref(link.href)}
              className="text-brand-muted text-[13px] font-medium uppercase tracking-[0.08em] hover:text-brand-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.a
            href={toHref("#contato")}
            className="border border-brand-white text-brand-white px-7 py-2.5 min-h-[44px] rounded-xl font-bold text-[13px] uppercase tracking-[0.05em] hover:bg-brand-white hover:text-brand-black transition-all duration-300 active:scale-95"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Iniciar projeto
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-white min-h-[44px] min-w-[44px] flex items-center justify-center p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-brand-black z-50 flex flex-col p-6"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-between items-center mb-16">
                <Image src="/images/logo_clara.png" alt="RIVO" width={120} height={40} className="h-7 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-white min-h-[44px] min-w-[44px] flex items-center justify-center p-2"
                  aria-label="Fechar menu"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="flex flex-col gap-6 flex-grow justify-center">
                {NAVIGATION_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={toHref(link.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[36px] font-bold text-brand-white tracking-tight min-h-[44px] flex items-center active:opacity-60"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href={toHref("#contato")}
                onClick={() => setMobileMenuOpen(false)}
                className="border border-brand-white text-brand-white px-8 py-4 min-h-[56px] rounded-xl font-bold text-[14px] uppercase tracking-[0.05em] text-center hover:bg-brand-white hover:text-brand-black transition-all active:scale-95"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Iniciar projeto
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
