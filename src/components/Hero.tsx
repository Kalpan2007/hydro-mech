"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Award, Users, Building2, Shield } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";

const stats = [
  { icon: Award, value: 25, suffix: "+", label: "Years of Excellence" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Building2, value: 4, suffix: "", label: "Product Lines" },
  { icon: Shield, value: 100, suffix: "%", label: "Quality Assured" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-navy-light/50 rounded-full blur-3xl" />

      {/* Diagonal Accent Line */}
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-orange/0 via-orange/40 to-orange/0 transform rotate-12 translate-x-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5"
            >
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                Trusted Since 1995
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                Engineering
                <br />
                <span className="gradient-text">Excellence</span>
                <br />
                in Metal Forming
              </h1>
              <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                Precision hydraulic machinery solutions trusted by industry
                leaders. From busbar processing to plate rolling — we deliver
                power, accuracy, and reliability.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange/30"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#products"
                className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                View Products
              </a>
            </div>
          </motion.div>

          {/* Right - Asymmetric Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="/products/busbar-machine.jpg"
                  alt="Hydraulic Busbar Processing Machine - 3 in 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>

              {/* Small Image 1 */}
              <div className="absolute bottom-[15%] left-0 w-[50%] h-[40%] rounded-2xl overflow-hidden shadow-xl border-4 border-navy">
                <Image
                  src="/products/section-bending.jpg"
                  alt="Hydraulic Section Bending Machine"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Small Image 2 */}
              <div className="absolute bottom-0 right-[10%] w-[35%] h-[30%] rounded-xl overflow-hidden shadow-lg border-4 border-navy">
                <Image
                  src="/products/plate-rolling.jpg"
                  alt="Hydro-Mechanical Plate Rolling Machine"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 35vw, 17vw"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-orange text-white px-5 py-3 rounded-2xl shadow-xl shadow-orange/30"
              >
                <span className="block text-2xl font-bold">ISO</span>
                <span className="block text-xs font-medium">Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-orange mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-extrabold text-white">
                    <CountUp end={stat.value} duration={2.5} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Diagonal Cut */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-surface-warm" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
    </section>
  );
}
