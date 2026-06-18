"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Baltikuri Naskarpara, C.I.T. Road, Howrah, West Bengal 711402, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@hydromechengineers.com",
    link: "mailto:info@hydromechengineers.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-surface-warm py-24 lg:py-32 overflow-hidden">
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
              Contact Us
            </span>
            <div className="w-8 h-[2px] bg-orange" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-text-body max-w-xl mx-auto">
            Ready to discuss your project? Reach out to us and our team will
            get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-text-light uppercase tracking-wider mb-1">
                      {info.label}
                    </span>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-text-dark hover:text-orange transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-text-dark font-medium">
                        {info.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Embed Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 bg-surface-cool">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-orange mx-auto mb-2" />
                  <span className="text-sm text-text-body font-medium">
                    Howrah, West Bengal
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-navy/5">
              <h3 className="text-xl font-bold text-navy mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-navy mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-text-body">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-dark mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-text-dark placeholder:text-text-light"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-dark mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-text-dark placeholder:text-text-light"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-text-dark mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-text-dark placeholder:text-text-light"
                        placeholder="+91-98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="product"
                        className="block text-sm font-medium text-text-dark mb-2"
                      >
                        Product Interest
                      </label>
                      <select
                        id="product"
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-text-dark bg-white"
                      >
                        <option value="">Select a product</option>
                        <option value="busbar">Busbar Processing Machine</option>
                        <option value="clinching">Clinching Machine</option>
                        <option value="bending">Section Bending Machine</option>
                        <option value="rolling">Plate Rolling Machine</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-text-dark placeholder:text-text-light resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:shadow-lg hover:shadow-orange/25"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
