"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setSubmitStatus("success");
      setEmail("");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Fleet Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/van-fleet.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority={false}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/95 to-navy/90" />
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(13,148,136,0.08)_0%,transparent_70%)] pointer-events-none z-10" />

      {/* Main Footer Content */}
      <div className="container relative z-10 pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/telehealth-van-logo.png"
                alt="TeleHealth Van"
                width={200}
                height={56}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              Free, anonymous mental health therapy for everyone. Licensed
              therapists. No insurance required. No one turned away.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:988"
                className="flex items-center gap-3 text-white/60 hover:text-teal-light transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">Crisis Line: 988</span>
              </a>
              <a
                href="mailto:info@telehealthvan.com"
                className="flex items-center gap-3 text-white/60 hover:text-teal-light transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@telehealthvan.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Los Angeles, CA & Boston, MA</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Programs */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Programs
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.programs.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-teal-light text-sm transition-colors inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-teal-light text-sm transition-colors inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Resources
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-teal-light text-sm transition-colors inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Legal
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-teal-light text-sm transition-colors inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Stay Updated</h4>
              <p className="text-white/50 text-sm">
                Get updates on new programs and mental health resources.
              </p>
            </div>
            {submitStatus === "success" ? (
              <div className="flex items-center gap-2 text-teal-light">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 md:w-64 px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                    submitStatus === "error" ? "border-red-400" : "border-white/10 focus:border-teal/50"
                  }`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="px-5 py-3 bg-teal hover:bg-teal-light text-white font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          {submitStatus === "error" && (
            <p className="text-red-400 text-sm mt-2 md:text-right">
              Failed to subscribe. Please try again.
            </p>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {currentYear} TeleHealth Van Network. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {/* Social Links - Placeholder */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal/20 flex items-center justify-center text-white/50 hover:text-teal-light transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal/20 flex items-center justify-center text-white/50 hover:text-teal-light transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal/20 flex items-center justify-center text-white/50 hover:text-teal-light transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              <p className="text-white/40 text-sm flex items-center gap-1.5">
                Made with <Heart className="w-3.5 h-3.5 text-red-400" /> in
                California
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
