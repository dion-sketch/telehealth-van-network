"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/10"
            : "bg-navy"
        }`}
      >

        <div className="container">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <Image
                src="/images/telehealth-van-logo.png"
                alt="TeleHealth Van"
                width={180}
                height={52}
                className="h-11 md:h-12 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors group ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {/* Underline indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-teal rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-6"
                          : "w-0 group-hover:w-4 group-hover:bg-teal-light"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="w-px h-6 bg-white/10 mx-3" />

              {/* CTA Button */}
              <Link
                href="/support"
                className="relative overflow-hidden bg-teal hover:bg-teal-light text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] group"
              >
                <span className="relative z-10">Get Support</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-navy-light/98 backdrop-blur-lg border-t border-white/10 shadow-xl overflow-hidden"
            >
              <div className="container py-6">
                <div className="space-y-1">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-3 py-3 px-4 rounded-lg text-lg transition-colors ${
                            isActive
                              ? "bg-teal/10 text-teal-light"
                              : "text-white/80 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {isActive && (
                            <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                          )}
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-6 mt-4 border-t border-white/10"
                >
                  <Link
                    href="/support"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full bg-teal hover:bg-teal-light text-white px-6 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Get Support
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
