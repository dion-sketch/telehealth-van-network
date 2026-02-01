"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Home,
  Globe,
  Star,
  Phone,
  Building2,
  Lock,
  Heart,
  Zap,
  AlertTriangle,
  ArrowRight,
  User,
  Users,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { supportAccessTypes, requestOptions, supportPromises } from "@/lib/data";
import HeroBackground from "@/components/ui/HeroBackground";

const accessIcons: { [key: string]: React.ElementType } = {
  graduation: GraduationCap,
  home: Home,
  globe: Globe,
  star: Star,
};

const requestIcons: { [key: string]: React.ElementType } = {
  phone: Phone,
  graduation: GraduationCap,
  building: Building2,
};

const promiseIcons: { [key: string]: React.ElementType } = {
  lock: Lock,
  heart: Heart,
  zap: Zap,
};

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", location: "", type: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/85 max-w-2xl mx-auto"
          >
            Free, anonymous mental health therapy. No insurance needed. No
            judgment. Just help when you need it.
          </motion.p>
        </div>
      </section>

      {/* How to Access Care */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              How to Access Free Therapy
            </h2>
            <p className="text-lg text-gray-500">
              Our services are available through grant-funded programs in
              specific areas. Here&apos;s how to get help if you&apos;re in a
              covered community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportAccessTypes.map((access, index) => {
              const Icon = accessIcons[access.icon] || GraduationCap;
              return (
                <motion.div
                  key={access.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl p-8 border ${
                    access.highlight
                      ? "bg-gradient-to-br from-teal-pale to-emerald-100 border-teal"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                      access.highlight ? "bg-white shadow-md" : "bg-white"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        access.highlight ? "text-teal" : "text-navy"
                      }`}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3">
                    {access.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{access.description}</p>

                  <div className="space-y-3">
                    {access.steps.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                            access.highlight
                              ? "bg-teal text-white"
                              : "bg-navy text-white"
                          }`}
                        >
                          {stepIndex + 1}
                        </div>
                        <span className="text-[15px]">{step}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not in Your Area */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-navy mb-4">
                Not in a Covered Area?
              </h2>
              <p className="text-lg text-gray-500">
                If TeleHealth Van isn&apos;t available in your community yet,
                you can help bring us there.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-navy mb-6 text-center">
                Request TeleHealth Van for Your Community
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {requestOptions.map((option) => {
                  const Icon = requestIcons[option.icon] || Phone;
                  return (
                    <div
                      key={option.title}
                      className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
                    >
                      <div className="w-12 h-12 mx-auto rounded-xl bg-teal-pale flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-teal" />
                      </div>
                      <h4 className="text-base font-bold text-gray-900 mb-2">
                        {option.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {option.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  Help bring free mental health care to your community
                </p>
                <Link
                  href="/partner"
                  className="inline-flex items-center bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn About Partnerships
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-navy mb-4">
                Need Help Finding Services?
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                Not sure if you&apos;re covered? Have questions about how to
                access care? Fill out this form and we&apos;ll help point you in
                the right direction.
              </p>

              {/* Crisis Banner */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-amber-800 mb-1">
                    In Crisis?
                  </h4>
                  <p className="text-sm text-amber-700">
                    If you&apos;re experiencing a mental health emergency,
                    please call{" "}
                    <a
                      href="tel:988"
                      className="font-bold underline hover:no-underline"
                    >
                      988
                    </a>{" "}
                    (Suicide & Crisis Lifeline) or go to your nearest emergency
                    room.
                  </p>
                </div>
              </div>

              {/* Promises */}
              <div className="space-y-4">
                {supportPromises.map((promise) => {
                  const Icon = promiseIcons[promise.icon] || Lock;
                  return (
                    <div key={promise.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-pale flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-gray-900 mb-0.5">
                          {promise.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {promise.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-teal-pale rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">We&apos;re Here to Help</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours to help connect you with services.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="text-teal font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors bg-white"
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
                      placeholder="you@email.com"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors bg-white"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors bg-white"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Where are you located?
                  </label>
                  <input
                    type="text"
                    placeholder="City, State"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors bg-white"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    I am a...
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors bg-white"
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    <option value="">Select one...</option>
                    <option value="student">Student</option>
                    <option value="resident">City Resident</option>
                    <option value="refugee">Refugee / Immigrant</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How can we help?
                  </label>
                  <textarea
                    placeholder="Tell us a bit about what you're looking for..."
                    rows={4}
                    required
                    minLength={10}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors resize-none bg-white"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-medium">Failed to send message</p>
                      <p className="text-red-600 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.type}
                  className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Your information is confidential and will only be used to help connect you to services.
                </p>
              </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
