"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Rocket,
  Users,
  Building2,
  Lock,
  AlertTriangle,
  Search,
} from "lucide-react";
import Link from "next/link";
import HeroBackground from "@/components/ui/HeroBackground";

const categories = [
  {
    id: "getting-started",
    name: "Getting Started",
    icon: Rocket,
    color: "teal",
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
    id: "therapists",
    name: "Our Therapists",
    icon: Users,
    color: "purple",
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
    id: "programs",
    name: "Programs & Eligibility",
    icon: Building2,
    color: "blue",
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
    id: "privacy",
    name: "Sessions & Privacy",
    icon: Lock,
    color: "emerald",
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
    id: "crisis",
    name: "Crisis Support",
    icon: AlertTriangle,
    color: "red",
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
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentCategory = categories.find((c) => c.id === activeCategory);

  // Filter questions based on search
  const filteredCategories = searchQuery
    ? categories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.a.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : null;

  const displayCategories = filteredCategories || (currentCategory ? [currentCategory] : []);

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
            <HelpCircle className="w-4 h-4 text-teal-light" />
            <span className="text-teal-light text-sm font-semibold">
              Help Center
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            How can we help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto mb-8"
          >
            Find answers to common questions about our mental health services.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-teal focus:bg-white/15 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      {!searchQuery && (
        <section className="bg-white border-b border-gray-100 sticky top-[72px] z-30">
          <div className="container">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-navy text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <p className="text-gray-500">
                {filteredCategories?.reduce((acc, c) => acc + c.questions.length, 0) || 0} results for &ldquo;{searchQuery}&rdquo;
              </p>
            </motion.div>
          )}

          <div className="space-y-8">
            {displayCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {searchQuery && (
                  <div className="flex items-center gap-2 mb-4">
                    <category.icon className="w-5 h-5 text-teal" />
                    <h2 className="font-semibold text-navy">{category.name}</h2>
                  </div>
                )}
                <div className="space-y-3">
                  {category.questions.map((item, index) => {
                    const itemId = `${category.id}-${index}`;
                    const isOpen = openItems.includes(itemId);
                    return (
                      <motion.div
                        key={itemId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-start justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-navy pr-4 leading-relaxed">
                            {item.q}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                              isOpen ? "bg-teal text-white" : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>
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
                              <div className="px-6 pb-6 pt-0">
                                <div className="bg-gray-50 rounded-xl p-5 text-gray-600 leading-relaxed">
                                  {item.a}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-4"
          >
            {[
              { label: "Response Time", value: "< 24 hours", desc: "For all inquiries" },
              { label: "Sessions Delivered", value: "30,000+", desc: "And counting" },
              { label: "Cost to You", value: "$0", desc: "Always free" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center border border-gray-200"
              >
                <p className="text-3xl font-bold text-teal mb-1">{stat.value}</p>
                <p className="font-semibold text-navy text-sm">{stat.label}</p>
                <p className="text-gray-500 text-xs">{stat.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-navy rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-teal-light" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
              We typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="bg-teal hover:bg-teal-light text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Contact Support
              </Link>
              <a
                href="tel:988"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors border border-white/20"
              >
                Crisis Line: 988
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
