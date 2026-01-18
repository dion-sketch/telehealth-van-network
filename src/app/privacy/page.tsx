"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

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
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy mt-0">
                Introduction
              </h2>
              <p className="text-gray-600">
                TeleHealth Van Network ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our mental health services and website.
              </p>
              <p className="text-gray-600">
                We understand that mental health is deeply personal. That's why
                we've designed our services to offer anonymous access when
                possible, and we take extensive measures to protect any
                information you do share with us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Information We Collect
              </h2>
              <h3 className="text-lg font-semibold text-navy">
                Information You Provide
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  Contact information (name, email, phone) if you choose to
                  provide it
                </li>
                <li>Scheduling preferences and appointment information</li>
                <li>
                  Digital waiver acknowledgments and consent forms
                </li>
                <li>
                  Communications you send to us through our website or during
                  sessions
                </li>
                <li>
                  Eligibility verification information (student status,
                  residency) as required by specific programs
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-navy">
                Therapy Session Information
              </h3>
              <p className="text-gray-600">
                Clinical notes and session information are maintained by our
                licensed therapists in accordance with professional standards
                and HIPAA requirements. This information is kept strictly
                confidential and is separate from general website data.
              </p>

              <h3 className="text-lg font-semibold text-navy">
                Automatically Collected Information
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  Device information (browser type, operating system)
                </li>
                <li>IP address and general location data</li>
                <li>Website usage data and analytics</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                How We Use Your Information
              </h2>
              <ul className="text-gray-600 space-y-2">
                <li>To provide and improve our mental health services</li>
                <li>To schedule and manage therapy appointments</li>
                <li>To verify eligibility for specific programs</li>
                <li>To communicate with you about your care</li>
                <li>
                  To comply with legal obligations and professional
                  requirements
                </li>
                <li>
                  To generate anonymized, aggregate data for program reporting
                  to funders
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Anonymous Services
              </h2>
              <p className="text-gray-600">
                We offer 100% anonymous services. You may access therapy without
                providing your real name or identifying information. When you
                choose anonymous services:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>No personal identifying information is required</li>
                <li>
                  Session notes are maintained under an anonymous identifier
                </li>
                <li>
                  We do not track or store information that could identify you
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                HIPAA Compliance
              </h2>
              <p className="text-gray-600">
                As a mental health service provider, we comply with the Health
                Insurance Portability and Accountability Act (HIPAA). Your
                protected health information (PHI) is:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>
                  Stored securely using encrypted systems
                </li>
                <li>
                  Accessible only to authorized healthcare providers involved in
                  your care
                </li>
                <li>
                  Never shared without your consent except as required by law
                </li>
                <li>
                  Subject to your rights to access, correct, and request
                  restrictions
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Information Sharing
              </h2>
              <p className="text-gray-600">
                We do not sell your personal information. We may share
                information only in the following circumstances:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>With your explicit consent</li>
                <li>
                  To comply with legal requirements (court orders, subpoenas)
                </li>
                <li>
                  When required to prevent imminent harm to you or others
                </li>
                <li>
                  In anonymized, aggregate form for program reporting to funders
                </li>
                <li>
                  With service providers who assist our operations (under strict
                  confidentiality agreements)
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Data Security
              </h2>
              <p className="text-gray-600">
                We implement industry-standard security measures including:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Encrypted data storage</li>
                <li>
                  Secure video conferencing platforms for telehealth sessions
                </li>
                <li>Regular security audits and updates</li>
                <li>
                  Staff training on privacy and security best practices
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Your Rights
              </h2>
              <p className="text-gray-600">You have the right to:</p>
              <ul className="text-gray-600 space-y-2">
                <li>Access your personal information and health records</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt out of non-essential communications</li>
                <li>Request restrictions on how your information is used</li>
                <li>Receive a copy of this privacy policy</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy or wish to
                exercise your rights, please contact us at:
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> privacy@telehealthvan.com
                <br />
                <strong>Phone:</strong> Contact through our website
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Changes to This Policy
              </h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
