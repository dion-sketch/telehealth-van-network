"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  Medal,
  Globe,
  Lightbulb,
  Tv,
  Newspaper,
  BookOpen,
} from "lucide-react";
import { stats, awards, techPartners, mediaFeatures } from "@/lib/data";
import HeroBackground from "@/components/ui/HeroBackground";

const awardIcons: { [key: string]: React.ElementType } = {
  trophy: Trophy,
  medal: Medal,
  globe: Globe,
  lightbulb: Lightbulb,
};

export default function ImpactPage() {
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
            Impact & Recognition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/75 max-w-2xl mx-auto"
          >
            Measurable outcomes, national recognition, and the data behind our
            mission to make mental health care accessible to all.
          </motion.p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p
                  className={`text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight ${
                    stat.value === "$0" ? "text-teal" : "text-navy"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-base font-semibold text-gray-700 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              Recognition
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Awards & Honors
            </h2>
            <p className="text-lg text-gray-500">
              Recognized by cities, military, and industry leaders for mental
              health innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = awardIcons[award.icon] || Trophy;
              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 flex gap-5 items-start hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {award.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="bg-navy py-16">
        <div className="container">
          <p className="text-center text-xs font-bold text-white/50 uppercase tracking-widest mb-8">
            Technology Partners
          </p>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            {techPartners.map((partner) => (
              <div key={partner.name} className="text-center text-white">
                <span className="block text-2xl font-extrabold mb-1">
                  {partner.name}
                </span>
                <p className="text-xs text-white/50">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              In The News
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Media Coverage
            </h2>
            <p className="text-lg text-gray-500">
              Featured across Los Angeles and Boston media outlets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={feature.outlet}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="h-12 flex items-center justify-center mb-5">
                  {feature.outlet === "Spectrum News" ? (
                    <div className="flex items-center gap-2 text-2xl font-extrabold text-navy">
                      <Tv className="w-6 h-6" />
                      {feature.outlet}
                    </div>
                  ) : feature.outlet === "Boston Media" ? (
                    <div className="flex items-center gap-2 text-2xl font-extrabold text-navy">
                      <Newspaper className="w-6 h-6" />
                      {feature.outlet}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-2xl font-extrabold text-navy">
                      <BookOpen className="w-6 h-6" />
                      {feature.outlet}
                    </div>
                  )}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500 mb-3">
                  {feature.description}
                </p>
                <span className="inline-block bg-teal-pale text-teal text-xs font-semibold px-2.5 py-1 rounded">
                  {feature.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hawthorne Case Study */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              Case Study
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              City of Hawthorne Partnership
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-pale to-emerald-200 rounded-3xl p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold text-navy mb-4">
                  First City-Wide Telehealth Mental Health Program
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From 2022 to 2024, we partnered with the City of Hawthorne and
                  local police to provide de-escalation support, helping
                  homeless residents get off the streets and into care. This
                  first-of-its-kind program demonstrated how mobile telehealth
                  can transform city-level mental health response.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-3xl font-extrabold text-teal mb-1">
                    2 Years
                  </p>
                  <p className="text-sm text-gray-600">Active Partnership</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-3xl font-extrabold text-teal mb-1">1st</p>
                  <p className="text-sm text-gray-600">Entire City as Client</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-3xl font-extrabold text-teal mb-1">24/7</p>
                  <p className="text-sm text-gray-600">
                    Police De-escalation Support
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-3xl font-extrabold text-teal mb-1">
                    Award
                  </p>
                  <p className="text-sm text-gray-600">City Recognition</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
