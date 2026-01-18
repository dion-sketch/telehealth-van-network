"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { stats } from "@/lib/data";

interface StatsProps {
  showHeader?: boolean;
  background?: "white" | "cream" | "navy";
}

export default function Stats({ showHeader = true, background = "cream" }: StatsProps) {
  const isDark = background === "navy";

  return (
    <Section background={background}>
      {showHeader && (
        <SectionHeader
          eyebrow="Our Impact"
          title="Making Mental Health Accessible"
          description="Since 2020, we've been breaking down barriers to mental health care."
          dark={isDark}
        />
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`text-center p-6 md:p-8 rounded-2xl ${
              isDark ? "bg-white/5" : "bg-white"
            } ${!isDark && "card-shadow"}`}
          >
            <p
              className={`text-4xl md:text-5xl font-display font-bold mb-2 ${
                isDark ? "text-teal-light" : "text-teal"
              }`}
            >
              {stat.value}
            </p>
            <p
              className={`font-medium mb-1 ${
                isDark ? "text-white" : "text-navy"
              }`}
            >
              {stat.label}
            </p>
            <p
              className={`text-sm ${
                isDark ? "text-white/60" : "text-navy/60"
              }`}
            >
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
