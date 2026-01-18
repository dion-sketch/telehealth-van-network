"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Play,
  Lock,
  Zap,
  BarChart3,
  Globe,
  GraduationCap,
  Send,
} from "lucide-react";
import { partners, programs } from "@/lib/data";

export default function HomePage() {
  const [inquiryType, setInquiryType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const inquiryOptions = [
    { value: "individual", label: "Seeking Support", icon: "🙋" },
    { value: "foundation", label: "Foundation / Funder", icon: "🏛️" },
    { value: "partnership", label: "Partnership Interest", icon: "🤝" },
    { value: "agency", label: "Government Agency", icon: "📋" },
    { value: "school", label: "School / University", icon: "🎓" },
    { value: "nonprofit", label: "Nonprofit Org", icon: "💚" },
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
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-light pt-8 pb-20 lg:pt-12 lg:pb-28 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[200%] bg-[radial-gradient(ellipse,rgba(13,148,136,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                <span className="text-teal-light text-sm font-semibold">
                  Contract & Grant Funded Mental Health Care
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6">
                Care Without <span className="text-teal-light">Borders</span>
              </h1>

              <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
                Free, anonymous mental health therapy for everyone. Licensed
                therapists. No insurance required. No one turned away. Operating
                the nation&apos;s largest 5G-enabled mobile telehealth fleet
                since 2020.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-6 mb-10">
                {["No Insurance Ever", "100% Anonymous", "Licensed Therapists"].map(
                  (feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-white font-medium"
                    >
                      <div className="w-6 h-6 bg-teal rounded-full flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      {feature}
                    </div>
                  )
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start a Session
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white transition-colors"
                >
                  Funding Partnership →
                </Link>
              </div>
            </motion.div>

            {/* Hero Video Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-video">
                  <Image
                    src="/images/van-fleet.jpg"
                    alt="TeleHealth Van Mental Health Services"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors">
                    <div className="w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform">
                      <Play
                        className="w-7 h-7 text-navy ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <h4 className="font-bold text-gray-900 mb-1">See Our Impact</h4>
                  <p className="text-sm text-gray-500">
                    Watch how we&apos;re transforming mental health access across
                    California
                  </p>
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
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main large image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/telehealth-van-main.jpeg"
                  alt="TeleHealth Van Mobile Unit"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                      <h3 className="text-2xl font-bold text-white">
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

            {/* Right side content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Stats cards row */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "#1", label: "Largest Fleet", sublabel: "Nationwide" },
                  { number: "5G", label: "Connected", sublabel: "Always Online" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-teal/30 transition-all"
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

              {/* Secondary images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group flex-1 min-h-[200px]"
              >
                <Image
                  src="/images/van-military-thumbs-up.jpg"
                  alt="TeleHealth Van at military base"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h5 className="font-bold text-lg mb-1">Military Support</h5>
                  <p className="text-sm opacity-80">
                    Serving veterans & military families
                  </p>
                </div>
              </motion.div>

              {/* Feature list card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-navy rounded-2xl p-6"
              >
                <h4 className="text-white font-bold mb-4">
                  Every Van Includes
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Licensed Therapists",
                    "Private Headphones",
                    "Secure Video",
                    "QR Scheduling",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-white/80 text-sm"
                    >
                      <div className="w-5 h-5 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-teal-light" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
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
                {[
                  {
                    icon: "🔒",
                    title: "Confidential",
                    text: "All inquiries are private and secure",
                  },
                  {
                    icon: "⚡",
                    title: "Fast Response",
                    text: "We respond within 24 hours",
                  },
                  {
                    icon: "💚",
                    title: "No Obligation",
                    text: "Explore partnership options freely",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-teal-pale rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200"
            >
              <form>
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
                        <span>{option.icon}</span>
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

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal-light transition-colors flex items-center justify-center gap-2"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4" />
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
