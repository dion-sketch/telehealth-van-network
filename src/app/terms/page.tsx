"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";
import HeroBackground from "@/components/ui/HeroBackground";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6"
          >
            <FileText className="w-4 h-4 text-teal-light" />
            <span className="text-teal-light text-sm font-semibold">
              Legal Terms
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Last updated: January 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Agreement */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using TeleHealth Van Network&apos;s services, website, and mobile
                telehealth vans, you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our services.
              </p>
            </div>

            {/* Description of Services */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Description of Services</h2>
              <p className="text-gray-600 leading-relaxed">
                TeleHealth Van Network provides free, grant-funded mental health therapy services
                through mobile telehealth vans equipped with secure video conferencing, remote
                telehealth therapy sessions, walk-up mental health support in designated areas,
                and specialized programs for specific populations. Our services are provided by
                licensed mental health professionals and are completely free to clients.
              </p>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-red-900 mb-3">Not Emergency Services</h2>
              <p className="text-red-800 font-medium mb-3">
                TeleHealth Van services are NOT emergency mental health services.
              </p>
              <p className="text-red-700 mb-2">
                If you are experiencing a mental health emergency, please:
              </p>
              <ul className="text-red-700 space-y-1 ml-4 list-disc">
                <li>Call 988 (Suicide & Crisis Lifeline)</li>
                <li>Call 911</li>
                <li>Go to your nearest emergency room</li>
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Eligibility</h2>
              <p className="text-gray-600 leading-relaxed">
                Eligibility for specific programs may vary based on grant requirements. General
                eligibility includes students enrolled at partner universities, residents of cities
                with active TeleHealth Van contracts, Afghan refugees through our USCRI partnership,
                Jewish students at Boston-area universities (Ruderman Foundation program), and
                individuals accessing walk-up services at our van locations.
              </p>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed">
                When using our services, you agree to provide accurate eligibility information when
                required, treat our staff, therapists, and other clients with respect, attend
                scheduled appointments or cancel with reasonable notice, use our services for
                legitimate mental health support purposes, and maintain the confidentiality of any
                access credentials provided.
              </p>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Confidentiality and Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your therapy sessions are confidential. However, therapists are legally required
                to break confidentiality when there is imminent danger to yourself or others, when
                child, elder, or dependent adult abuse is suspected, or when ordered by a court of law.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For full details on how we handle your information, please review our{" "}
                <Link href="/privacy" className="text-teal hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                TeleHealth Van Network provides mental health services in good faith through licensed
                professionals. However, we cannot guarantee specific outcomes from therapy. To the
                maximum extent permitted by law, TeleHealth Van Network shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages resulting from
                your use of our services.
              </p>
            </div>

            {/* Service Availability */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Service Availability</h2>
              <p className="text-gray-600 leading-relaxed">
                We strive to provide consistent services but cannot guarantee uninterrupted
                availability. Services may be affected by grant funding cycles, therapist availability,
                technical issues with telehealth platforms, weather or other conditions affecting
                van locations, and program-specific restrictions.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to terminate or suspend access to our services for violations
                of these terms or for any behavior that threatens the safety of our staff, therapists,
                or other clients.
              </p>
            </div>

            {/* Changes & Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may modify these Terms of Service at any time. Changes will be effective
                immediately upon posting to our website. Your continued use of our services after
                changes constitutes acceptance of the modified terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the State of California.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us at{" "}
                <strong>legal@telehealthvan.com</strong> or visit our support page.
              </p>
              <Link
                href="/support"
                className="inline-flex bg-teal hover:bg-teal-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
