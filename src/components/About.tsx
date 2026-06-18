"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Over 25 years of manufacturing excellence",
  "ISO-certified quality management systems",
  "Custom-engineered solutions for every client",
  "State-of-the-art manufacturing facility in Howrah, West Bengal",
];

export default function About() {
  return (
    <section id="about" className="relative bg-surface-warm py-24 lg:py-32 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-dots" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-[80%] h-[70%] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/products/clinching-machine.jpg"
                  alt="Hydraulic Clinching Machine at Hydro Mech Engineers factory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Overlapping Small Image */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-xl border-4 border-surface-warm">
                <Image
                  src="/products/shearing-station.jpg"
                  alt="Precision shearing station - quality control"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 55vw, 22vw"
                />
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="absolute -right-6 top-12 bg-navy text-white px-6 py-5 rounded-2xl shadow-xl"
              >
                <span className="block text-4xl font-extrabold text-orange">25+</span>
                <span className="block text-xs font-medium text-white/70 mt-1">
                  Years of
                  <br />
                  Excellence
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-[2px] bg-orange" />
              <span className="text-sm font-semibold text-orange uppercase tracking-widest">
                About Us
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              Powering Global
              <br />
              <span className="text-orange">Innovation</span> in
              <br />
              Metal Forming
            </h2>

            <p className="text-lg text-text-body leading-relaxed">
              Established in 1995, Hydro Mech Engineers has been at the forefront
              of hydraulic metal forming machinery. Based in Howrah, West Bengal,
              we combine precision engineering with innovative design to deliver
              machines that power industries worldwide.
            </p>

            <p className="text-base text-text-body leading-relaxed">
              Our comprehensive range of hydraulic machines — from busbar
              processing to plate rolling — is engineered to meet the most
              demanding production requirements. Every machine undergoes rigorous
              quality testing to ensure exceptional performance and durability.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-orange mt-0.5 shrink-0" />
                  <span className="text-text-body">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#products"
              className="group inline-flex items-center gap-2 text-navy font-semibold hover:text-orange transition-colors"
            >
              Discover Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
