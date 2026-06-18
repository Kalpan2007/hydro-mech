"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const productLinks = [
  "Busbar Processing Machine",
  "Clinching Machine",
  "Section Bending Machine",
  "Plate Rolling Machine",
];

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Why Choose Us", href: "#features" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="relative h-[42px] w-[165px]">
                <Image
                  src="/logo/ethics-logo.png"
                  alt="ETHICS Metal Forming Machineries India"
                  fill
                  className="object-contain object-left"
                  sizes="165px"
                />
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Leading manufacturer of hydraulic metal forming machinery.
              Trusted by industry leaders since 1995.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-white/70">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                ISO Certified
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-white/70">
                Since 1995
              </span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-orange transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((name) => (
                <li key={name}>
                  <a
                    href="#products"
                    className="text-sm text-white/50 hover:text-orange transition-colors inline-flex items-center gap-1 group"
                  >
                    {name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">
                  Baltikuri Naskarpara, C.I.T. Road, Howrah, West Bengal
                  711402, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange shrink-0" />
                  +91-98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hydromechengineers.com"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-orange transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange shrink-0" />
                  info@hydromechengineers.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Hydro Mech Engineers. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
