"use client";

import { useEffect, useRef } from "react";

export function PlatformHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-on-scroll opacity-0 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Platform Overview</span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-on-scroll opacity-0 delay-100 font-outfit text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            One Platform.
            <br />
            <span className="text-gradient">Infinite Possibilities.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-on-scroll opacity-0 delay-200 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            <strong className="text-foreground">Build, deploy, and manage AI agents at any scale.</strong>
          </p>

          {/* Description */}
          <p className="animate-on-scroll opacity-0 delay-300 text-lg text-muted-foreground max-w-2xl mx-auto">
            The krinAI Platform gives you complete control over your agent workforce. Configure behaviors, monitor performance, and iterate in real-time—all from a single, powerful dashboard.
          </p>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
