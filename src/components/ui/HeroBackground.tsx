"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0a1628] to-navy-light" />

      {/* Mesh Gradient Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-teal/30 via-teal/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-purple-600/20 via-teal/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-gradient-to-r from-gold/10 to-transparent rounded-full blur-2xl" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </>
  );
}
