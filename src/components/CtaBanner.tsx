"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative bg-orange py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-orange-dark/30 rounded-full blur-3xl" />
      </div>

      {/* Diagonal Top Cut */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-navy"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
            Driving Innovation to
            <br />
            Build the Future of
            <br />
            Metal Forming
          </h2>

          <p className="text-lg text-white/80 max-w-xl mx-auto">
            From concept to commissioning — partner with us for precision
            hydraulic machinery that delivers results.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-white text-orange hover:bg-surface-warm px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:shadow-xl"
            >
              Get a Quote Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919876543210"
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Diagonal Bottom Cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-surface-warm"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
