"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { partners } from "@/lib/data";

interface PartnersProps {
  showHeader?: boolean;
  background?: "white" | "cream";
}

export default function Partners({
  showHeader = true,
  background = "white",
}: PartnersProps) {
  return (
    <Section background={background}>
      {showHeader && (
        <SectionHeader
          eyebrow="Trusted Partners"
          title="Working Together for Mental Health"
          description="We're proud to partner with leading organizations committed to accessible mental health care."
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:border-teal/30 hover:shadow-lg transition-all duration-300 group"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={160}
              height={80}
              className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
