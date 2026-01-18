"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface ContactFormProps {
  variant?: "default" | "partner" | "support";
  dark?: boolean;
}

export default function ContactForm({
  variant = "default",
  dark = false,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal ${
    dark
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-teal-light"
      : "bg-white border-gray-200 text-navy placeholder:text-navy/40 focus:border-teal"
  }`;

  const labelClasses = `block text-sm font-medium mb-2 ${
    dark ? "text-white/90" : "text-navy"
  }`;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center py-12 px-6 rounded-2xl ${
          dark ? "bg-white/5" : "bg-teal-pale/30"
        }`}
      >
        <CheckCircle
          className={`w-16 h-16 mx-auto mb-4 ${
            dark ? "text-teal-light" : "text-teal"
          }`}
        />
        <h3 className={`text-2xl font-display mb-2 ${dark ? "text-white" : "text-navy"}`}>
          Thank You!
        </h3>
        <p className={dark ? "text-white/70" : "text-navy/70"}>
          We&apos;ve received your message and will respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={inputClasses}
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={inputClasses}
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClasses}
          placeholder="john@example.com"
        />
      </div>

      {variant === "partner" && (
        <div>
          <label htmlFor="organization" className={labelClasses}>
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className={inputClasses}
            placeholder="Your organization name"
          />
        </div>
      )}

      {variant === "support" && (
        <div>
          <label htmlFor="type" className={labelClasses}>
            I am a...
          </label>
          <select
            id="type"
            name="type"
            required
            className={inputClasses}
          >
            <option value="">Select one</option>
            <option value="individual">Individual seeking support</option>
            <option value="student">Student</option>
            <option value="organization">Organization representative</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={inputClasses}
          placeholder={
            variant === "partner"
              ? "Tell us about your partnership interests..."
              : variant === "support"
              ? "How can we help you?"
              : "Your message..."
          }
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>

      <p className={`text-sm ${dark ? "text-white/50" : "text-navy/50"}`}>
        All inquiries are confidential. We respond within 24 hours.
      </p>
    </form>
  );
}
