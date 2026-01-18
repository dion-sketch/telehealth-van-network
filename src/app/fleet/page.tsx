"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Palmtree,
  GraduationCap,
  Star,
  Wifi,
  Headphones,
  AlertTriangle,
  Home,
  QrCode,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { serviceLocations, accessSteps, fleetFeatures } from "@/lib/data";

const locationIcons: { [key: string]: React.ElementType } = {
  palm: Palmtree,
  graduation: GraduationCap,
  star: Star,
};

const featureIcons: { [key: string]: React.ElementType } = {
  signal: Wifi,
  headphones: Headphones,
  alert: AlertTriangle,
  home: Home,
  "qr-code": QrCode,
  "user-check": UserCheck,
};

export default function FleetPage() {
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
            Our Mobile Fleet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/75 max-w-2xl mx-auto"
          >
            The nation&apos;s largest 5G-enabled telehealth van fleet, bringing
            licensed therapists directly to communities across the country.
          </motion.p>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-gray-50 py-20" id="locations">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              Where We Operate
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Serving Communities Nationwide
            </h2>
            <p className="text-lg text-gray-500">
              Our fleet operates through contracts and grants with cities,
              counties, universities, and agencies to serve their residents and
              populations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceLocations.map((location, index) => {
              const Icon = locationIcons[location.icon] || Star;
              return (
                <motion.div
                  key={location.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-10 border border-gray-200 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-pale flex items-center justify-center text-3xl mb-5">
                    <Icon className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {location.region}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {location.description}
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-md">
                    {location.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20" id="how-it-works">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              The Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-500">
              Whether you&apos;re a student, city resident, or part of a
              grant-funded program, accessing care is simple.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-12 h-12 mx-auto bg-navy text-white rounded-full flex items-center justify-center text-xl font-bold mb-5">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold text-teal uppercase tracking-widest mb-4">
              Fleet Capabilities
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              What Our Vans Provide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fleetFeatures.map((feature, index) => {
              const Icon = featureIcons[feature.icon] || Wifi;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 flex gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-teal-pale flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Bring the Fleet to Your Community
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Interested in deploying TeleHealth Vans for your city, campus, or
              organization?
            </p>
            <Link
              href="/partner"
              className="inline-flex items-center bg-white text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
