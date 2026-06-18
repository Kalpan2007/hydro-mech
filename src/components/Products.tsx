"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cog, Zap, Wrench, CircleDot } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: "busbar",
    name: "Hydraulic Busbar Processing Machine",
    subtitle: "3 in 1 Multi-Function",
    icon: Zap,
    image: "/products/busbar-machine.jpg",
    description:
      "Advanced multi-function hydraulic busbar processing machine integrated with punching, bending, and shearing stations. Designed for electrical panel manufacturers requiring precision and efficiency.",
    features: [
      "Punching Station — High-speed precision punching",
      "Bending Station — Adjustable angle bending",
      "Shearing Station — Clean, burr-free cuts",
      "Foot pedal operation for hands-free control",
      "Mobile design with caster wheels",
    ],
    specs: "Capacity: Up to 12mm thick copper/aluminum busbar",
  },
  {
    id: "clinching",
    name: "Hydraulic Clinching Machine",
    subtitle: "Sheet Metal Joining",
    icon: CircleDot,
    image: "/products/clinching-machine.jpg",
    description:
      "Precision hydraulic clinching machine for joining sheet metal without fasteners or adhesives. Ideal for automotive, HVAC, and electrical enclosure manufacturing.",
    features: [
      "No fasteners required — cold forming join",
      "High-strength mechanical interlock",
      "Suitable for multi-layer sheet joining",
      "Adjustable die sets for various thicknesses",
      "Low noise, low vibration operation",
    ],
    specs: "Joining force: Up to 40 kN",
  },
  {
    id: "bending",
    name: "Hydraulic Section Bending Machine",
    subtitle: "Precision Profile Bending",
    icon: Wrench,
    image: "/products/section-bending.jpg",
    description:
      "Heavy-duty hydraulic section bending machine for rolling angles, channels, beams, and flat bars into precise curves and rings. Essential for structural fabrication.",
    features: [
      "Three-roll pyramidal bending system",
      "Hydraulic roll adjustment for precision",
      "Suitable for angles, channels, T-bars",
      "Digital position indicators",
      "Heavy-duty steel frame construction",
    ],
    specs: "Bending capacity: Up to 150mm wide sections",
  },
  {
    id: "rolling",
    name: "Hydro-Mechanical Plate Rolling Machine",
    subtitle: "Heavy-Duty Plate Rolling",
    icon: Cog,
    image: "/products/plate-rolling.jpg",
    description:
      "Robust hydro-mechanical plate rolling machine for forming metal plates into cylindrical and conical shapes. Built for shipbuilding, pressure vessel, and tank fabrication.",
    features: [
      "Three-roller symmetrical design",
      "Pre-bending capability for flat ends",
      "Hydraulic upper roll adjustment",
      "Drop-end mechanism for finished cylinders",
      "Industrial-grade motor and gearbox",
    ],
    specs: "Plate width: Up to 2000mm",
  },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section id="products" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-orange" />
            <span className="text-sm font-semibold text-orange uppercase tracking-widest">
              Our Products
            </span>
            <div className="w-8 h-[2px] bg-orange" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            Precision Machinery
            <br />
            for Every Need
          </h2>
          <p className="mt-4 text-lg text-text-body max-w-2xl mx-auto">
            Four specialized product lines engineered to deliver unmatched
            performance, accuracy, and durability in metal forming operations.
          </p>
        </motion.div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? "bg-navy text-white shadow-lg shadow-navy/20"
                  : "bg-surface-cool text-text-body hover:bg-navy/10"
              }`}
            >
              <p.icon className="w-4 h-4" />
              <span className="hidden sm:inline">
                {p.id === "busbar"
                  ? "Busbar"
                  : p.id === "clinching"
                  ? "Clinching"
                  : p.id === "bending"
                  ? "Bending"
                  : "Rolling"}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Product Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Image */}
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>
              {/* Floating Spec Badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-8 bg-orange text-white px-5 py-3 rounded-2xl shadow-xl">
                <span className="text-xs font-medium opacity-80">Spec</span>
                <span className="block text-sm font-bold">{product.specs}</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange/10 px-4 py-2 rounded-full">
                <product.icon className="w-4 h-4 text-orange" />
                <span className="text-sm font-semibold text-orange">
                  {product.subtitle}
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
                {product.name}
              </h3>

              <p className="text-text-body leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="space-y-3">
                {product.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" />
                    <span className="text-sm text-text-body">{f}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-navy/20 mt-4"
              >
                Request Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
