"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      className={clsx(
        "bg-white rounded-2xl card-shadow",
        hover && "transition-shadow duration-300 hover:card-shadow-hover",
        paddings[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
