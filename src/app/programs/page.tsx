"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { programs } from "@/lib/data";

export default function ProgramsPage() {
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
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/75 max-w-2xl mx-auto"
          >
            Each program is designed to reach specific communities with tailored
            mental health support—all free, anonymous, and accessible.
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, index) => {
        const isPullUp = program.id === "pull-up-concert";
        const isReverse = index % 2 !== 0;

        return (
          <section
            key={program.id}
            id={program.id}
            className={`py-20 ${
              isPullUp
                ? "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]"
                : index % 2 === 0
                ? "bg-gray-50"
                : "bg-white"
            } ${isPullUp ? "border-none" : "border-b border-gray-200"}`}
          >
            <div className="container">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  isReverse && !isPullUp ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Logo Side */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex justify-center ${
                    isReverse && !isPullUp ? "lg:col-start-2" : ""
                  }`}
                >
                  <div
                    className={`rounded-3xl p-12 flex items-center justify-center min-h-[280px] w-full max-w-[360px] ${
                      isPullUp
                        ? "bg-white/5 border border-white/10"
                        : index % 2 === 0
                        ? "bg-white shadow-lg border border-gray-200"
                        : "bg-gray-50 shadow-lg border border-gray-200"
                    }`}
                  >
                    <Image
                      src={program.logo}
                      alt={program.title}
                      width={280}
                      height={180}
                      className="max-w-full max-h-[180px] object-contain"
                    />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={isReverse && !isPullUp ? "lg:col-start-1" : ""}
                >
                  <h2
                    className={`font-display text-3xl font-bold mb-5 ${
                      isPullUp ? "text-white" : "text-navy"
                    }`}
                  >
                    {program.title}
                  </h2>

                  <p
                    className={`text-lg leading-relaxed mb-4 ${
                      isPullUp ? "text-white/75" : "text-gray-600"
                    }`}
                  >
                    {program.description}
                  </p>

                  {program.secondDescription && (
                    <p
                      className={`text-lg leading-relaxed mb-6 ${
                        isPullUp ? "text-white/75" : "text-gray-600"
                      }`}
                    >
                      {program.secondDescription}
                    </p>
                  )}

                  {/* Artists for Pull Up */}
                  {program.artists && (
                    <div className="flex flex-wrap gap-3 my-5">
                      {program.artists.map((artist) => (
                        <span
                          key={artist.name}
                          className={`px-4 py-2.5 rounded-full text-sm font-medium ${
                            artist.grammy
                              ? "bg-gradient-to-r from-gold to-gold-dark text-white"
                              : "bg-white/10 border border-white/20 text-white"
                          }`}
                        >
                          {artist.grammy && "🏆 "}
                          {artist.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                          isPullUp
                            ? tag === "9,000 Students"
                              ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
                              : "bg-white/10 text-white"
                            : program.color === "gold" &&
                              tag.includes("First")
                            ? "bg-navy text-white"
                            : "bg-teal-pale text-teal"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {program.features.map((feature) => (
                      <div
                        key={feature}
                        className={`flex items-start gap-3 ${
                          isPullUp ? "text-white/85" : "text-gray-700"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isPullUp ? "bg-white/10" : "bg-teal-pale"
                          }`}
                        >
                          <CheckCircle
                            className={`w-4 h-4 ${
                              isPullUp ? "text-white" : "text-teal"
                            }`}
                          />
                        </div>
                        <span className="text-[15px]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
