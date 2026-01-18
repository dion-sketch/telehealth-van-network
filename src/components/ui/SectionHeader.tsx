"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl"
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "inline-block text-sm font-semibold tracking-wider uppercase mb-3",
            dark ? "text-teal-light" : "text-teal"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "font-display text-balance",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-lg md:text-xl",
            dark ? "text-white/80" : "text-navy/70"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
