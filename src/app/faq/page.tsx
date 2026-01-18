"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I access TeleHealth Van services?",
        a: "You can access our services in several ways: walk up to one of our mobile vans when it's in your area, scan the QR code on the van to schedule a future session, or contact us through our website. If you're a student or resident in a covered area, check with your school or city for specific access instructions.",
      },
      {
        q: "Is there really no cost for therapy sessions?",
        a: "Yes, all TeleHealth Van services are 100% free to clients. We are entirely funded through grants and contracts with government agencies, foundations, and partner organizations. We never collect insurance information or charge clients.",
      },
      {
        q: "Do I need insurance to use your services?",
        a: "No. We never collect or require insurance. Our services are funded by grants and partnerships, making them completely free for all clients regardless of insurance status.",
      },
      {
        q: "Can I remain anonymous?",
        a: "Yes. We offer 100% anonymous services. You don't need to provide your real name, ID, or any personal information if you prefer to remain anonymous. Your privacy is our priority.",
      },
    ],
  },
  {
    category: "About Our Therapists",
    questions: [
      {
        q: "Are your therapists licensed?",
        a: "Yes, all TeleHealth Van therapists are fully licensed mental health professionals. We work with licensed clinical social workers (LCSWs), licensed marriage and family therapists (LMFTs), licensed professional clinical counselors (LPCCs), and psychologists.",
      },
      {
        q: "Can I request a specific type of therapist?",
        a: "We do our best to match you with a therapist who meets your needs. If you have specific preferences regarding language, cultural background, or therapeutic approach, let us know when scheduling and we'll try to accommodate your request.",
      },
      {
        q: "What languages are available?",
        a: "We offer services in multiple languages including English, Spanish, and Dari/Pashto for our Afghan refugee programs. Availability varies by location and program.",
      },
    ],
  },
  {
    category: "Programs & Eligibility",
    questions: [
      {
        q: "Who is eligible for TeleHealth Van services?",
        a: "Eligibility depends on the specific program. Our services are available to: students at partner universities, residents of cities with TeleHealth Van contracts (like Hawthorne), Afghan refugees through our USCRI partnership, Jewish students at Boston-area universities, and anyone who walks up to our vans in covered service areas.",
      },
      {
        q: "I'm not in a covered area. Can I still get help?",
        a: "While our grant-funded services are limited to specific areas and populations, we can help point you toward other resources. Contact us and we'll do our best to connect you with mental health services in your area.",
      },
      {
        q: "What is the Hawthorne Cares program?",
        a: "Hawthorne Cares was our award-winning city-wide mental health program that made Hawthorne, California the first city in the nation with universal free telehealth mental health access for all residents. The program included police de-escalation partnerships and homeless outreach.",
      },
      {
        q: "How does the Student Wellness Program work?",
        a: "Partner universities receive scheduled van visits on campus. Students can walk up for sessions when available, or schedule appointments in advance. All sessions are free, private, and completely anonymous through our digital waiver system.",
      },
    ],
  },
  {
    category: "Sessions & Privacy",
    questions: [
      {
        q: "How long is a therapy session?",
        a: "Standard sessions are typically 50 minutes, though this may vary based on availability and your specific needs. Walk-up sessions may be shorter depending on demand.",
      },
      {
        q: "Is my information kept confidential?",
        a: "Absolutely. We follow all HIPAA guidelines and maintain strict confidentiality. Your session information is private and protected. We never share your information with schools, employers, or anyone else without your explicit consent (except in cases required by law, such as immediate danger to yourself or others).",
      },
      {
        q: "What happens during a session at the van?",
        a: "When you arrive at the van, you'll be greeted by our staff and provided with private, disposable headphones. You'll connect with a licensed therapist via our secure video platform for your session. The van provides a private space for your conversation.",
      },
      {
        q: "Can I have remote sessions instead of coming to the van?",
        a: "Yes! Many of our programs offer remote therapy options. You can connect with a therapist from anywhere using your own device. Contact us or check with your specific program for remote session availability.",
      },
    ],
  },
  {
    category: "Crisis Support",
    questions: [
      {
        q: "What if I'm in a mental health crisis?",
        a: "If you're experiencing a mental health emergency, please call 988 (the Suicide & Crisis Lifeline) or go to your nearest emergency room immediately. Our services are designed for ongoing support, not emergency crisis intervention.",
      },
      {
        q: "Do you work with police for crisis situations?",
        a: "Yes, through programs like Hawthorne Cares, we've partnered with local police departments to provide mental health de-escalation support. Officers can connect individuals in crisis with our therapists as an alternative to emergency room visits.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
            <MessageCircle className="w-4 h-4 text-teal-light" />
            <span className="text-teal-light text-sm font-semibold">
              Common Questions
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Find answers to common questions about our mental health services,
            eligibility, and how to get started.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-navy mb-6 pb-3 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((item, index) => {
                  const itemId = `${categoryIndex}-${index}`;
                  const isOpen = openItems.includes(itemId);
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-navy pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-teal-pale to-emerald-100 rounded-2xl p-10 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-navy mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We're here to help. Reach out and we'll get back to you within 24
              hours.
            </p>
            <Link
              href="/support"
              className="inline-flex items-center bg-teal hover:bg-teal-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
