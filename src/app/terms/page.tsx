"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsPage() {
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
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy mt-0">
                Agreement to Terms
              </h2>
              <p className="text-gray-600">
                By accessing or using TeleHealth Van Network's services,
                website, and mobile telehealth vans, you agree to be bound by
                these Terms of Service. If you do not agree to these terms,
                please do not use our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Description of Services
              </h2>
              <p className="text-gray-600">
                TeleHealth Van Network provides free, grant-funded mental health
                therapy services through:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>
                  Mobile telehealth vans equipped with secure video conferencing
                </li>
                <li>Remote telehealth therapy sessions</li>
                <li>Walk-up mental health support in designated areas</li>
                <li>Specialized programs for specific populations</li>
              </ul>
              <p className="text-gray-600">
                Our services are provided by licensed mental health
                professionals and are completely free to clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Eligibility
              </h2>
              <p className="text-gray-600">
                Eligibility for specific programs may vary based on grant
                requirements. General eligibility includes:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>
                  Students enrolled at partner universities (Student Wellness
                  Program)
                </li>
                <li>
                  Residents of cities with active TeleHealth Van contracts
                </li>
                <li>
                  Afghan refugees through our USCRI partnership program
                </li>
                <li>
                  Jewish students at Boston-area universities (Ruderman
                  Foundation program)
                </li>
                <li>
                  Individuals accessing walk-up services at our van locations
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Not Emergency Services
              </h2>
              <p className="text-gray-600 font-semibold">
                TeleHealth Van services are NOT emergency mental health
                services.
              </p>
              <p className="text-gray-600">
                If you are experiencing a mental health emergency, please:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>Call 988 (Suicide & Crisis Lifeline)</li>
                <li>Call 911</li>
                <li>Go to your nearest emergency room</li>
              </ul>
              <p className="text-gray-600">
                Our services are designed for ongoing mental health support, not
                crisis intervention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                User Responsibilities
              </h2>
              <p className="text-gray-600">When using our services, you agree to:</p>
              <ul className="text-gray-600 space-y-2">
                <li>
                  Provide accurate eligibility information when required
                </li>
                <li>
                  Treat our staff, therapists, and other clients with respect
                </li>
                <li>
                  Attend scheduled appointments or cancel with reasonable notice
                </li>
                <li>
                  Use our services for legitimate mental health support purposes
                </li>
                <li>
                  Not engage in disruptive, threatening, or harmful behavior
                </li>
                <li>
                  Maintain the confidentiality of any access credentials
                  provided
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Confidentiality and Privacy
              </h2>
              <p className="text-gray-600">
                Your therapy sessions are confidential. However, therapists are
                legally required to break confidentiality in certain situations:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>
                  When there is imminent danger to yourself or others
                </li>
                <li>When child, elder, or dependent adult abuse is suspected</li>
                <li>When ordered by a court of law</li>
              </ul>
              <p className="text-gray-600">
                For full details on how we handle your information, please
                review our Privacy Policy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Intellectual Property
              </h2>
              <p className="text-gray-600">
                All content on the TeleHealth Van website, including text,
                graphics, logos, and images, is the property of TeleHealth Van
                Network or its content suppliers and is protected by copyright
                laws.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Limitation of Liability
              </h2>
              <p className="text-gray-600">
                TeleHealth Van Network provides mental health services in good
                faith through licensed professionals. However, we cannot
                guarantee specific outcomes from therapy. To the maximum extent
                permitted by law, TeleHealth Van Network shall not be liable for
                any indirect, incidental, special, consequential, or punitive
                damages resulting from your use of our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Service Availability
              </h2>
              <p className="text-gray-600">
                We strive to provide consistent services but cannot guarantee
                uninterrupted availability. Services may be affected by:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>Grant funding cycles and availability</li>
                <li>Therapist availability</li>
                <li>Technical issues with telehealth platforms</li>
                <li>Weather or other conditions affecting van locations</li>
                <li>Program-specific restrictions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Termination
              </h2>
              <p className="text-gray-600">
                We reserve the right to terminate or suspend access to our
                services for violations of these terms or for any behavior that
                threatens the safety of our staff, therapists, or other clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Changes to Terms
              </h2>
              <p className="text-gray-600">
                We may modify these Terms of Service at any time. Changes will
                be effective immediately upon posting to our website. Your
                continued use of our services after changes constitutes
                acceptance of the modified terms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Governing Law
              </h2>
              <p className="text-gray-600">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of California, without
                regard to its conflict of law provisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy">
                Contact Information
              </h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us
                at:
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> legal@telehealthvan.com
                <br />
                <strong>Website:</strong> telehealthvan.com/support
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
