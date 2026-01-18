"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  FileText,
  Video,
  Truck,
  Building2,
  GraduationCap,
  Heart,
  Clipboard,
  Globe,
  Users,
  CheckCircle,
  Shield,
  Home,
  DollarSign,
  Ambulance,
} from "lucide-react";
import {
  partnershipBenefits,
  partnerTypes,
  preventativeCareItems,
  preventativeStats,
  accessSteps,
} from "@/lib/data";

const benefitIcons: { [key: string]: React.ElementType } = {
  calendar: Calendar,
  "file-text": FileText,
  video: Video,
  truck: Truck,
};

const partnerIcons: { [key: string]: React.ElementType } = {
  building: Building2,
  graduation: GraduationCap,
  heart: Heart,
  clipboard: Clipboard,
  globe: Globe,
  users: Users,
};

const preventativeIcons: { [key: string]: React.ElementType } = {
  ambulance: Ambulance,
  home: Home,
  shield: Shield,
  dollar: DollarSign,
};

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orgName: "",
    orgType: "",
    message: "",
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-light py-20 pt-32">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Partner With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/75 max-w-2xl mx-auto"
          >
            We bring the infrastructure, therapists, and technology. You bring
            the mission, the community, and the funding.
          </motion.p>
        </div>
      </section>

      {/* What We Bring */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              What We Bring
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Complete Mental Health Infrastructure
            </h2>
            <p className="text-lg text-gray-500">
              We handle the logistics, technology, and therapy—you focus on your
              community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefitIcons[benefit.icon] || Calendar;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 flex gap-5 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-teal-pale flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Access Works */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
                The Client Experience
              </p>
              <h2 className="font-display text-3xl font-bold text-navy mb-4">
                How Your Community Accesses Care
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                When you partner with TeleHealth Van, here&apos;s how your
                residents, students, or members get therapy.
              </p>

              <div className="space-y-6">
                {accessSteps.map((step, index) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <h4 className="font-bold text-gray-900 mb-6">Key Benefits</h4>
              <div className="space-y-4">
                {[
                  "100% digital—no paperwork ever",
                  "Anonymous sessions available",
                  "Walk-up or scheduled appointments",
                  "Prove eligibility instantly online",
                  "Track sessions and outcomes in real-time",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preventative Care */}
      <section className="bg-gradient-to-br from-teal to-teal-dark py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">
              Beyond Therapy
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Preventative Care & De-escalation
            </h2>
            <p className="text-lg text-white/75">
              Our model focuses on early intervention and prevention—reducing
              emergency calls, ER visits, and crisis situations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {preventativeCareItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white/90"
                >
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {preventativeStats.map((stat) => {
                const Icon = preventativeIcons[stat.icon] || Shield;
                return (
                  <div
                    key={stat.title}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                  >
                    <Icon className="w-6 h-6 text-white mb-3" />
                    <h4 className="text-sm font-bold text-white mb-1">
                      {stat.title}
                    </h4>
                    <p className="text-xs text-white/70">{stat.description}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              Use Cases
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Partnership Types
            </h2>
            <p className="text-lg text-gray-500">
              We work with cities, schools, foundations, and organizations of
              all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((type, index) => {
              const Icon = partnerIcons[type.icon] || Building2;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {type.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
                Get Started
              </p>
              <h2 className="font-display text-3xl font-bold text-navy mb-4">
                Let&apos;s Discuss a Partnership
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                Tell us about your organization and goals. We&apos;ll get back
                to you within 24 hours to discuss how we can work together.
              </p>

              <div className="space-y-4">
                {[
                  "Rapid deployment—programs can launch within weeks",
                  "Transparent reporting for all funders",
                  "Proven track record with 30,000+ sessions",
                  "Complete infrastructure provided",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="jane@organization.org"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your organization"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors"
                    value={formData.orgName}
                    onChange={(e) =>
                      setFormData({ ...formData, orgName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization Type
                  </label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors bg-white"
                    value={formData.orgType}
                    onChange={(e) =>
                      setFormData({ ...formData, orgType: e.target.value })
                    }
                  >
                    <option value="">Select one...</option>
                    <option value="city">City or County</option>
                    <option value="university">University or School</option>
                    <option value="foundation">Foundation or Funder</option>
                    <option value="agency">Government Agency</option>
                    <option value="nonprofit">Nonprofit Organization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your goals
                  </label>
                  <textarea
                    placeholder="What community do you serve? What are you hoping to achieve?"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>

                <p className="text-center text-sm text-gray-500">
                  We&apos;ll respond within 24 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
