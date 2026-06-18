"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Company", href: "#about" },
  { name: "Machines", href: "#products" },
  { name: "Capabilities", href: "#features" },
  { name: "Industries", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* ═══════════════════════════════════════════════════════
            HERO STATE — Transparent, Full-Width, Part of Hero
           ═══════════════════════════════════════════════════════ */}
        <div
          className={`transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? /* ─── SCROLLED: Floating Pill ─── */
                "max-w-[1320px] mt-2.5 mx-3 sm:mx-5 lg:mx-auto bg-navy/[0.95] backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border border-white/[0.06] rounded-xl px-3 sm:px-5 lg:px-6"
              : /* ─── HERO: Full-Width Transparent ─── */
                "w-full bg-gradient-to-b from-black/25 via-black/8 to-transparent"
          }`}
        >
          {/* Top Accent Line — Always visible, thin orange */}
          <div className={`transition-all duration-500 ${scrolled ? "opacity-0 h-0" : "opacity-60 h-[2px]"} bg-gradient-to-r from-orange/0 via-orange to-orange/0`} />

          <div className={`flex items-center justify-between transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] mx-auto ${
            scrolled ? "max-w-[1280px] h-[54px] px-0" : "max-w-[1400px] h-[76px] px-6 sm:px-10 lg:px-14"
          }`}>
            {/* ─── LOGO ─── */}
            <a href="#" onClick={(e) => handleNavClick(e, "#")} className="relative flex items-center gap-3.5 group shrink-0">
              {/* Logo mark — prominent on hero */}
              <div className={`relative shrink-0 transition-all duration-[600ms] ${scrolled ? "h-[30px] w-[100px] sm:w-[115px] lg:w-[125px]" : "h-[46px] w-[150px] sm:w-[175px] lg:w-[195px]"}`}>
                <Image
                  src="/logo/ethics-logo.png"
                  alt="ETHICS Metal Forming Machineries India"
                  fill
                  className="object-contain object-left [filter:brightness(1.5)_contrast(1.15)]"
                  sizes="195px"
                  priority
                />
              </div>

              {/* Technical divider — vertical line after logo (hero only) */}
              <div className={`transition-all duration-[600ms] ${scrolled ? "w-0 opacity-0" : "w-px h-8 bg-white/10 opacity-100"}`} />
            </a>

            {/* ─── NAV LINKS ─── */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative transition-all duration-[600ms] group ${
                    scrolled
                      ? "px-3 py-1.5 text-[12px] first:pl-0"
                      : "px-5 py-2 text-[13.5px] first:pl-0"
                  } font-medium tracking-[0.01em] text-white/60 hover:text-white`}
                >
                  {link.name}
                  {/* Orange dot indicator on hover */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-orange transition-all duration-300 ease-out ${
                    scrolled ? "w-0 h-[1.5px] group-hover:w-4" : "w-0 h-[2px] group-hover:w-5"
                  }`} />
                </a>
              ))}
            </nav>

            {/* ─── RIGHT ACTIONS ─── */}
            <div className="hidden lg:flex items-center shrink-0">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className={`flex items-center gap-2 text-white/40 hover:text-white/75 tracking-wide transition-all duration-[600ms] ${
                  scrolled ? "px-2 py-1.5 text-[11px]" : "px-4 py-2 text-[13px]"
                } font-medium`}
              >
                <Phone className={`transition-all duration-[600ms] ${scrolled ? "w-3 h-3" : "w-4 h-4"}`} />
                <span className="hidden xl:inline whitespace-nowrap">+91-98765 43210</span>
              </a>

              {/* Technical divider */}
              <div className={`bg-white/[0.08] shrink-0 transition-all duration-[600ms] ${scrolled ? "w-px h-4 mx-1" : "w-px h-6 mx-2"}`} />

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className={`group relative flex items-center gap-2 font-semibold tracking-wide transition-all duration-[600ms] overflow-hidden whitespace-nowrap shrink-0 ${
                  scrolled
                    ? "h-8 px-4 text-[11px] rounded-lg bg-orange/90 hover:bg-orange border border-orange/20 hover:border-orange shadow-[0_0_15px_rgba(232,97,26,0.12)] hover:shadow-[0_0_25px_rgba(232,97,26,0.25)]"
                    : "h-10 px-6 text-[12.5px] rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/25 shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                } text-white`}
              >
                <span className="relative z-10">Get Custom Quote</span>
                <ChevronRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden flex items-center justify-center rounded-lg text-white/75 hover:text-white hover:bg-white/[0.08] transition-all duration-[600ms] shrink-0 ${
                scrolled ? "w-8 h-8" : "w-10 h-10"
              }`}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Bottom Divider — subtle gradient line (hero only) */}
          <div className={`transition-all duration-[600ms] ${scrolled ? "opacity-0 h-0" : "opacity-100 h-px"} bg-gradient-to-r from-transparent via-white/[0.06] to-transparent max-w-[1400px] mx-auto`} />
        </div>
      </motion.header>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE NAVIGATION
         ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(340px,85vw)] bg-navy border-l border-white/[0.06] lg:hidden"
            >
              <div className="h-[2px] bg-gradient-to-r from-orange/0 via-orange to-orange/0 opacity-50" />
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.06]">
                <div className="relative h-[28px] w-[110px] shrink-0 [filter:brightness(1.4)_contrast(1.1)]">
                  <Image src="/logo/ethics-logo.png" alt="ETHICS" fill className="object-contain object-left" sizes="110px" />
                </div>
                <button onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.1] transition-all" aria-label="Close menu">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <nav className="px-3 py-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.035 }}
                    className="flex items-center justify-between px-4 py-3 text-[14px] font-medium text-white/65 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-200"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/15" />
                  </motion.a>
                ))}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 pt-5 bg-gradient-to-t from-navy via-navy to-transparent">
                <a href="tel:+919876543210" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/55 text-[12px] font-medium mb-2.5 hover:bg-white/[0.07] transition-all">
                  <Phone className="w-3.5 h-3.5" />
                  +91-98765 43210
                </a>
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange text-white text-[12px] font-semibold hover:bg-orange-dark transition-all shadow-lg shadow-orange/20">
                  Get Custom Quote
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
