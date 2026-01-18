"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-light py-20 pt-32">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6"
          >
            <Shield className="w-4 h-4 text-teal-light" />
            <span className="text-teal-light text-sm font-semibold">
              Your Privacy Matters
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Privacy Policy
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
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TeleHealth Van Network (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
                protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our mental health services and website.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We understand that mental health is deeply personal. That&apos;s why we&apos;ve designed
                our services to offer anonymous access when possible, and we take extensive measures
                to protect any information you do share with us.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-navy">Information You Provide:</strong> Contact information
                (name, email, phone) if you choose to provide it, scheduling preferences, digital
                waiver acknowledgments, and eligibility verification information as required by
                specific programs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-navy">Therapy Session Information:</strong> Clinical notes
                are maintained by our licensed therapists in accordance with professional standards
                and HIPAA requirements. This information is kept strictly confidential.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-navy">Automatically Collected:</strong> Device information,
                IP address, general location data, and website usage analytics.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We use your information to provide and improve our mental health services, schedule
                and manage therapy appointments, verify eligibility for specific programs, communicate
                with you about your care, comply with legal obligations, and generate anonymized,
                aggregate data for program reporting to funders.
              </p>
            </div>

            {/* Anonymous Services */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Anonymous Services</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer 100% anonymous services. You may access therapy without providing your
                real name or identifying information. When you choose anonymous services, no personal
                identifying information is required, session notes are maintained under an anonymous
                identifier, and we do not track or store information that could identify you.
              </p>
            </div>

            {/* HIPAA Compliance */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">HIPAA Compliance</h2>
              <p className="text-gray-600 leading-relaxed">
                As a mental health service provider, we comply with HIPAA. Your protected health
                information (PHI) is stored securely using encrypted systems, accessible only to
                authorized healthcare providers involved in your care, never shared without your
                consent except as required by law, and subject to your rights to access, correct,
                and request restrictions.
              </p>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your personal information. We may share information only with your
                explicit consent, to comply with legal requirements, when required to prevent imminent
                harm, in anonymized form for program reporting, or with service providers under strict
                confidentiality agreements.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures including SSL/TLS encryption,
                encrypted data storage, secure video conferencing platforms, regular security audits,
                and staff training on privacy best practices.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to access your personal information and health records, request
                corrections to inaccurate information, request deletion of your data (subject to
                legal requirements), opt out of non-essential communications, and request restrictions
                on how your information is used.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights,
                please contact us at <strong>privacy@telehealthvan.com</strong> or visit our support page.
              </p>
              <Link
                href="/support"
                className="inline-flex bg-teal hover:bg-teal-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </Link>
            </div>

            {/* Changes */}
            <p className="text-gray-500 text-sm text-center pt-8 border-t border-gray-200">
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated &ldquo;Last updated&rdquo; date.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
