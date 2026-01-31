"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Lock,
  Zap,
  BarChart3,
  Globe,
  GraduationCap,
  Send,
  User,
  Building2,
  Handshake,
  ClipboardList,
  Heart,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { partners, programs } from "@/lib/data";
import HeroBackground from "@/components/ui/HeroBackground";

export default function HomePage() {
  const [inquiryType, setInquiryType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType,
          ...formData,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", organization: "", message: "" });
      setInquiryType("");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryOptions = [
    { value: "individual", label: "Seeking Support", Icon: User },
    { value: "foundation", label: "Foundation / Funder", Icon: Building2 },
    { value: "partnership", label: "Partnership Interest", Icon: Handshake },
    { value: "agency", label: "Government Agency", Icon: ClipboardList },
    { value: "school", label: "School / University", Icon: GraduationCap },
    { value: "nonprofit", label: "Nonprofit Org", Icon: Heart },
  ];

  const impactStats = [
    {
      value: "20,000+",
      label: "Therapy Sessions",
      sublabel: "Delivered since March 2020",
    },
    {
      value: "5,000+",
      label: "First-Year Sessions",
      sublabel: "Rapid community response",
    },
    {
      value: "$0",
      label: "Cost to Clients",
      sublabel: "No insurance ever collected",
      highlight: true,
    },
    {
      value: "#1",
      label: "Largest 5G Fleet",
      sublabel: "Mobile telehealth nationwide",
    },
  ];

  const sessionTypes = [
    {
      id: 1,
      image: "/images/carousal-images/1.png",
      title: "Sit-Inside Sessions",
      description: "Step inside our climate-controlled vans for private, comfortable therapy sessions with noise-canceling headphones.",
      highlight: "Private & Comfortable",
    },
    {
      id: 2,
      image: "/images/carousal-images/2.png",
      title: "Housing & Shelter Support",
      description: "We bring mental health services directly to housing facilities, shelters, and transitional living spaces.",
      highlight: "Community Outreach",
    },
    {
      id: 3,
      image: "/images/carousal-images/3.png",
      title: "Walk-Up Sessions",
      description: "No appointment needed. Walk up to any van location and connect with a licensed therapist immediately.",
      highlight: "No Appointment Needed",
    },
    {
      id: 4,
      image: "/images/carousal-images/4.png",
      title: "Campus Parking",
      description: "Stationed at universities and colleges, providing convenient access for students between classes.",
      highlight: "Student Accessibility",
    },
    {
      id: 5,
      image: "/images/carousal-images/5.png",
      title: "Trained Technicians",
      description: "Our friendly technicians guide you through the process and ensure a seamless therapy experience.",
      highlight: "Expert Support",
    },
    {
      id: 6,
      image: "/images/carousal-images/6.png",
      title: "Licensed Clinical Social Workers",
      description: "Connect with LCSWs who specialize in trauma, anxiety, depression, and culturally-competent care.",
      highlight: "Professional Care",
    },
  ];

  const whyFundCards = [
    {
      icon: BarChart3,
      title: "Data-Driven Outcomes",
      text: "Every session tracked. Transparent reporting for funders. We measure what matters and share outcomes openly.",
    },
    {
      icon: Globe,
      title: "First-of-Kind Programs",
      text: "Only provider serving Afghan refugees. Only telehealth network with an entire city (Hawthorne) as a client. Pioneering models others replicate.",
    },
    {
      icon: Zap,
      title: "Proven Scale",
      text: "5,000+ sessions in year one. 20,000+ total. The longest-running telehealth mental health network launched during COVID-19.",
    },
    {
      icon: GraduationCap,
      title: "Boston Campus Coverage",
      text: "Funded by Ruderman Family Foundation to support Jewish students facing antisemitism at Harvard, MIT, Northeastern, and Boston University.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <HeroBackground />

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal/20 to-teal/5 border border-teal/30 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal"></span>
                </span>
                <span className="text-teal-light text-sm font-semibold tracking-wide">
                  Contract & Grant Funded Mental Health Care
                </span>
              </motion.div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Care Without{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-teal-light via-teal to-teal-light bg-clip-text text-transparent">
                    Borders
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#14b8a6" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="#14b8a6"/>
                        <stop offset="1" stopColor="#14b8a6" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
                Free, anonymous mental health therapy for everyone. Licensed
                therapists. No insurance required. No one turned away.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4 mb-10">
                {["No Insurance Ever", "100% Anonymous", "Licensed Therapists"].map(
                  (feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-full"
                    >
                      <div className="w-5 h-5 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/90 font-medium text-sm">{feature}</span>
                    </motion.div>
                  )
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal to-teal-light text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(13,148,136,0.4)] hover:scale-[1.02]"
                >
                  <span className="relative z-10">Start a Session</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Funding Partnership
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Hero Video Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -5 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Glow behind video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal/20 via-purple-500/10 to-teal/20 rounded-3xl blur-2xl opacity-60" />

              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
                <div className="bg-navy rounded-xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-video">
                    <video
                      src="https://telehealthvan.com/wp-content/uploads/2025/01/telehealth_van_overview_video_update_7-12-24-1080p.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      className="w-full h-full object-cover"
                      poster="/images/van-fleet.jpg"
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-r from-navy-light to-navy">
                    <h4 className="font-bold text-white mb-1">See Our Impact</h4>
                    <p className="text-sm text-white/60">
                      Watch how we&apos;re transforming mental health access across California
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Bar */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center ${
                  stat.highlight
                    ? "bg-teal-pale -my-6 py-6 -mx-4 px-4 rounded-xl"
                    : ""
                }`}
              >
                <div
                  className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 ${
                    stat.highlight ? "text-teal" : "text-navy"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Auto-looping Marquee */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.03)_0%,transparent_70%)]" />

        <div className="container relative z-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs font-bold text-teal uppercase tracking-[0.2em] mb-3">
              Our Partners
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-navy">
              Trusted by Leading Organizations
            </h3>
          </motion.div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-16 py-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-white rounded-2xl px-8 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-teal/20 transition-all duration-300 hover:-translate-y-1">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={180}
                      height={70}
                      className="h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`${partner.name}-duplicate`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-white rounded-2xl px-8 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-teal/20 transition-all duration-300 hover:-translate-y-1">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={180}
                      height={70}
                      className="h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Government agencies, foundations, and nonprofits trust TeleHealth Van Network
        </motion.p>
      </section>

      {/* How Sessions Work - Horizontal Showcase */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230c1f35\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="container relative z-10">
          {/* Section Header - Left Aligned Editorial Style */}
          <div className="max-w-4xl mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-teal" />
              <span className="text-teal text-sm font-bold uppercase tracking-[0.2em]">
                Multiple Ways to Connect
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-[1.1]"
            >
              How Therapy
              <br />
              <span className="text-teal">Sessions Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 max-w-2xl"
            >
              From walk-up sessions to campus visits, we meet you where you are with flexible, accessible mental health care.
            </motion.p>
          </div>
        </div>

        {/* Full-Width Horizontal Scroll Showcase */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {sessionTypes.map((session) => (
                <div
                  key={session.id}
                  className="flex-shrink-0 w-[500px] md:w-[600px] group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    {/* Banner Image - Natural 3:1 Ratio */}
                    <div className="relative aspect-[3/1] overflow-hidden">
                      <Image
                        src={session.image}
                        alt={session.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-teal transition-colors">
                            {session.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                            {session.description}
                          </p>
                        </div>
                        <span className="flex-shrink-0 px-3 py-1.5 bg-teal/10 text-teal text-xs font-bold rounded-full whitespace-nowrap">
                          {session.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {sessionTypes.map((session) => (
                <div
                  key={`${session.id}-dup`}
                  className="flex-shrink-0 w-[500px] md:w-[600px] group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="relative aspect-[3/1] overflow-hidden">
                      <Image
                        src={session.image}
                        alt={session.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-teal transition-colors">
                            {session.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                            {session.description}
                          </p>
                        </div>
                        <span className="flex-shrink-0 px-3 py-1.5 bg-teal/10 text-teal text-xs font-bold rounded-full whitespace-nowrap">
                          {session.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="container relative z-10 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <p className="text-gray-500 text-center sm:text-left">
              Ready to connect with a licensed therapist?
            </p>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-light text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal/25"
            >
              Start a Session
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fleet Gallery Section */}
      <section id="fleet" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          {/* Header with badge */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 px-4 py-2 rounded-full mb-4"
              >
                <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                <span className="text-navy text-sm font-semibold">
                  Nation&apos;s Largest 5G-Enabled Fleet
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4"
              >
                Bringing Therapy to{" "}
                <span className="text-teal">Communities</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-500"
              >
                When remote sessions aren&apos;t possible, our mobile vans bring
                licensed therapists directly to communities, shelters, military
                bases, and underserved neighborhoods.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
              >
                Explore Our Fleet
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Main large image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/telehealth-van-main.jpeg"
                  alt="TeleHealth Van Mobile Unit"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        We Go Where Clients Live
                      </h3>
                      <p className="text-white/70 text-sm">
                        Los Angeles, Boston, and expanding
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["5G Connected", "Private Sessions", "Walk-Up Ready"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Military Support image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/van-military-thumbs-up.jpg"
                  alt="TeleHealth Van at military base"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Military Support
                      </h3>
                      <p className="text-white/70 text-sm">
                        Serving veterans & military families
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Coast Guard", "Veterans", "Active Duty"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats and Features Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { number: "#1", label: "Largest Fleet", sublabel: "Nationwide" },
              { number: "5G", label: "Connected", sublabel: "Always Online" },
              { number: "100%", label: "Free Sessions", sublabel: "No Insurance" },
              { number: "24/7", label: "Availability", sublabel: "When You Need Us" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-teal/30 transition-all text-center"
              >
                <div className="text-3xl font-extrabold text-teal mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-navy">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fund Us Section */}
      <section id="impact" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              For Funders & Partners
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Support Care Without Borders
            </h2>
            <p className="text-lg text-gray-500">
              We deliver measurable, scalable mental health impact with complete
              cost transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy rounded-2xl p-8 md:row-span-2 flex flex-col"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                <Lock className="w-6 h-6 text-teal-light" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Zero-Barrier Model
              </h3>
              <p className="text-white/75 leading-relaxed mb-8">
                No insurance. No ID. No forms. Complete anonymity for clients who
                need it. This removes every barrier that typically prevents
                vulnerable populations from accessing mental health care.
              </p>
              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="text-4xl font-extrabold text-teal-light mb-1">
                  100%
                </div>
                <div className="text-sm text-white/60">
                  Free to all clients, always
                </div>
              </div>
            </motion.div>

            {/* Other Cards */}
            {whyFundCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-teal-pale rounded-xl flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-10 left-[10%] text-[300px] font-serif text-white/[0.03] leading-none select-none">
          &ldquo;
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-display text-2xl md:text-[28px] font-semibold text-white leading-relaxed italic mb-8">
              &ldquo;They showed up when no one else would. I didn&apos;t have
              insurance, I didn&apos;t have anywhere to go. They gave me someone
              to talk to—no questions asked.&rdquo;
            </p>
            <p className="text-white/60">
              <strong className="text-white font-semibold">
                Anonymous Client
              </strong>{" "}
              · Hawthorne Cares Program
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              Our Programs
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Specialized Mental Health Initiatives
            </h2>
            <p className="text-lg text-gray-500">
              Each program is designed to reach specific communities with
              tailored support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-teal hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <div className="h-14 flex items-center mb-5">
                  {program.id === "jewish-student" ? (
                    <div className="h-14 px-4 bg-navy rounded-lg flex items-center gap-2 text-white font-bold text-sm">
                      ✡️ Jewish Student Support
                    </div>
                  ) : (
                    <Image
                      src={program.logo}
                      alt={program.title}
                      width={160}
                      height={56}
                      className="max-h-14 w-auto object-contain"
                    />
                  )}
                </div>
                <h3 className="text-[17px] font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-grow">
                  {program.id === "jewish-student"
                    ? "Ruderman Family Foundation funded program providing mental health support for Jewish students facing antisemitism at Harvard, MIT, Northeastern, and BU."
                    : program.description}
                </p>
                <span className="inline-block self-start bg-teal-pale text-teal px-3 py-1.5 rounded-md text-xs font-semibold">
                  {program.id === "jewish-student"
                    ? "Ruderman Foundation Funded"
                    : program.subtitle}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-5 leading-tight">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Whether you need mental health support, want to bring our
                services to your community, or are interested in funding our
                mission—we&apos;re here to help.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Confidential
                    </h4>
                    <p className="text-sm text-gray-500">All inquiries are private and secure</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Fast Response
                    </h4>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      No Obligation
                    </h4>
                    <p className="text-sm text-gray-500">Explore partnership options freely</p>
                  </div>
                </div>
              </div>

              {/* Van Image */}
              <div className="mt-10 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/tvh-program-ha.jpg"
                    alt="TeleHealth Van Fleet at Hawthorne City Hall"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">
                      Our 5G-enabled vans bring therapy directly to you
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200"
            >
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-teal-pale rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    We&apos;ve received your message and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="text-teal font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit}>
                {/* Inquiry Type */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    I am...
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {inquiryOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-2.5 px-4 py-3.5 border-2 rounded-lg cursor-pointer transition-all text-sm font-medium ${
                          inquiryType === option.value
                            ? "border-teal bg-teal-pale text-teal"
                            : "border-gray-200 text-gray-700 hover:border-teal"
                        }`}
                      >
                        <input
                          type="radio"
                          name="inquiry_type"
                          value={option.value}
                          checked={inquiryType === option.value}
                          onChange={(e) => setInquiryType(e.target.value)}
                          className="hidden"
                        />
                        <option.Icon className="w-4 h-4" />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors bg-white"
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
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors bg-white"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Organization */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization (if applicable)
                  </label>
                  <input
                    type="text"
                    placeholder="Organization name"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors bg-white"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors resize-none bg-white"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-medium">Failed to send message</p>
                      <p className="text-red-600 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || !inquiryType}
                  className="w-full py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal-light transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Footer */}
                <div className="flex justify-center gap-6 mt-5 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" /> Confidential
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> Response &lt; 24hrs
                  </span>
                </div>
              </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
