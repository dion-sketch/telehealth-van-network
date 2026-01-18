"use client";

import { motion } from "framer-motion";
import { Accessibility, Check } from "lucide-react";
import Link from "next/link";

export default function AccessibilityPage() {
  const commitments = [
    {
      title: "Perceivable Content",
      items: [
        "Text alternatives for non-text content",
        "Captions and transcripts for multimedia",
        "Content that can be presented in different ways",
        "Sufficient color contrast for text",
      ],
    },
    {
      title: "Operable Interface",
      items: [
        "Full keyboard navigation support",
        "Sufficient time to read and use content",
        "No content that could cause seizures",
        "Clear navigation and wayfinding",
      ],
    },
    {
      title: "Understandable Information",
      items: [
        "Readable and understandable text",
        "Predictable web page operation",
        "Input assistance and error prevention",
        "Clear instructions and labels",
      ],
    },
    {
      title: "Robust Technology",
      items: [
        "Compatible with current and future tools",
        "Valid and clean HTML markup",
        "Support for assistive technologies",
        "Regular testing and updates",
      ],
    },
  ];

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
            <Accessibility className="w-4 h-4 text-teal-light" />
            <span className="text-teal-light text-sm font-semibold">
              Inclusive Design
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Accessibility Statement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            We are committed to ensuring our mental health services are
            accessible to everyone.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-navy mt-0">
              Our Commitment
            </h2>
            <p className="text-gray-600">
              TeleHealth Van Network is committed to ensuring digital
              accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the
              relevant accessibility standards.
            </p>
            <p className="text-gray-600">
              Mental health care should be accessible to all, regardless of
              ability. This commitment extends to our website, mobile
              applications, and our physical telehealth van services.
            </p>
          </motion.div>

          {/* WCAG Commitments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-navy mb-8">
              WCAG 2.1 Guidelines
            </h2>
            <p className="text-gray-600 mb-8">
              We strive to conform to the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA standards. These guidelines are organized
              around four principles:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-navy mb-4">
                    {commitment.title}
                  </h3>
                  <ul className="space-y-2">
                    {commitment.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specific Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-navy">
              Accessibility Features
            </h2>
            <h3 className="text-lg font-semibold text-navy">
              Website Accessibility
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                Keyboard navigation throughout the entire website
              </li>
              <li>
                Skip navigation links to bypass repetitive content
              </li>
              <li>
                Descriptive alt text for all meaningful images
              </li>
              <li>
                Proper heading hierarchy for screen reader navigation
              </li>
              <li>
                Sufficient color contrast ratios (minimum 4.5:1)
              </li>
              <li>
                Resizable text without loss of functionality
              </li>
              <li>
                Focus indicators for keyboard users
              </li>
              <li>
                Form labels and error messages for screen readers
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-navy">
              Telehealth Van Accessibility
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                Wheelchair-accessible van entry at most locations
              </li>
              <li>
                Disposable headphones for private audio
              </li>
              <li>
                Large, high-contrast screens for video sessions
              </li>
              <li>
                Staff trained in accessibility accommodations
              </li>
              <li>
                Alternative session formats available upon request
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-navy">
              Therapy Session Accessibility
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                Video platform with closed captioning support
              </li>
              <li>
                Audio-only session options available
              </li>
              <li>
                Therapists trained in accessible communication
              </li>
              <li>
                Flexible scheduling to accommodate needs
              </li>
            </ul>
          </motion.div>

          {/* Feedback */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-pale to-emerald-100 rounded-2xl p-10"
          >
            <h2 className="font-display text-2xl font-bold text-navy mb-4">
              Feedback & Assistance
            </h2>
            <p className="text-gray-600 mb-6">
              We welcome your feedback on the accessibility of TeleHealth Van
              Network. If you encounter accessibility barriers or need
              assistance, please contact us:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>
                <strong>Email:</strong> accessibility@telehealthvan.com
              </li>
              <li>
                <strong>Response time:</strong> Within 2 business days
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              When contacting us, please include:
            </p>
            <ul className="text-gray-600 space-y-1 mb-6">
              <li>The web page or service you were trying to access</li>
              <li>The problem you encountered</li>
              <li>Any assistive technology you were using</li>
            </ul>
            <Link
              href="/support"
              className="inline-flex items-center bg-teal hover:bg-teal-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Continuous Improvement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none mt-16"
          >
            <h2 className="font-display text-2xl font-bold text-navy">
              Continuous Improvement
            </h2>
            <p className="text-gray-600">
              We are committed to ongoing accessibility improvements. Our
              efforts include:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Regular accessibility audits and testing</li>
              <li>User testing with people who have disabilities</li>
              <li>Staff training on accessibility best practices</li>
              <li>Prompt response to accessibility feedback</li>
              <li>Staying current with evolving accessibility standards</li>
            </ul>
            <p className="text-gray-600">
              This accessibility statement was last updated in January 2025.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
