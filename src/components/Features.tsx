"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Wrench,
  ShieldCheck,
  Factory,
  Headphones,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Precision Engineering",
    description:
      "Every machine is built with micron-level accuracy using advanced CNC machining and rigorous quality control processes.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "We understand that every production line is unique. Our engineering team designs tailored solutions for your specific requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "ISO-certified manufacturing with 100% product testing. Each machine passes through multiple quality checkpoints before delivery.",
  },
  {
    icon: Factory,
    title: "Modern Infrastructure",
    description:
      "State-of-the-art manufacturing facility equipped with latest machinery, testing labs, and skilled workforce in Howrah, West Bengal.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Comprehensive after-sales support including installation, training, maintenance, and spare parts availability across India.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description:
      "Streamlined production and logistics ensure on-time delivery. We maintain ready stock for urgent requirements.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-navy py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-light/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-orange" />
            <span className="text-sm font-semibold text-orange uppercase tracking-widest">
              Why Choose Us
            </span>
            <div className="w-8 h-[2px] bg-orange" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Engineering Excellence
            <br />
            You Can <span className="text-orange">Trust</span>
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Two decades of expertise, cutting-edge technology, and unwavering
            commitment to quality — that&apos;s the Hydro Mech difference.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-orange/5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                <feature.icon className="w-7 h-7 text-orange" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white/5 border border-white/10 rounded-full px-8 py-4">
            <span className="text-white/70 text-sm">
              Ready to discuss your requirements?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
