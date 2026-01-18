"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Program } from "@/lib/data";

interface ProgramCardProps extends Program {
  reverse?: boolean;
}

export default function ProgramCard({
  id,
  title,
  subtitle,
  description,
  features,
  image,
  logo,
  color,
  reverse = false,
}: ProgramCardProps) {
  const colorClasses = {
    teal: "bg-teal/10 text-teal",
    gold: "bg-gold/10 text-gold-dark",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image src={image} alt={title} fill className="object-cover" />
          {/* Logo Badge */}
          <div className="absolute top-4 left-4 bg-white rounded-xl p-3 shadow-lg">
            <Image
              src={logo}
              alt={`${title} logo`}
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${colorClasses[color]}`}
        >
          {subtitle}
        </span>

        <h3 className="text-navy mb-4">{title}</h3>

        <p className="text-navy/70 text-lg mb-6">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
              <span className="text-navy/80">{feature}</span>
            </li>
          ))}
        </ul>

        <Button href="/support" variant="outline">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
