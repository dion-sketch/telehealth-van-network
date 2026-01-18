"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig, stats } from "@/lib/data";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";

const features = [
  { icon: Shield, text: "100% Anonymous" },
  { icon: Users, text: "Licensed Therapists" },
  { icon: Clock, text: "No Wait Times" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-teal-pale/30" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              {siteConfig.tagline}
            </span>

            <h1 className="text-navy mb-6">
              Free Mental Health Care for{" "}
              <span className="gradient-text">Everyone</span>
            </h1>

            <p className="text-xl text-navy/70 mb-8 max-w-lg">
              {siteConfig.mission}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100"
                >
                  <feature.icon className="w-4 h-4 text-teal" />
                  <span className="text-sm font-medium text-navy">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/support" size="lg">
                Get Support Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/partner" variant="outline" size="lg">
                Partner With Us
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-navy/20">
              <Image
                src="/images/video-thumbnail.png"
                alt="TeleHealth Van Fleet"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-display font-bold text-navy">30,000+</p>
                      <p className="text-sm text-navy/70">Sessions Delivered</p>
                    </div>
                    <div className="w-px h-10 bg-navy/20" />
                    <div>
                      <p className="text-2xl font-display font-bold text-navy">#1</p>
                      <p className="text-sm text-navy/70">5G Fleet Nationwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-gold text-navy px-4 py-2 rounded-full font-medium text-sm shadow-lg"
            >
              No Insurance Required
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
