"use client";

import { useEffect, useRef } from "react";

export function Hero() {
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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 geometric-grid opacity-50" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-on-scroll opacity-0 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Agent as a Service</span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-on-scroll opacity-0 delay-100 font-outfit text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            The Future of Work
            <br />
            <span className="text-gradient">Doesn&apos;t Clock Out.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-on-scroll opacity-0 delay-200 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            <strong className="text-foreground">Deploy AI agents that never sleep, never hesitate, and never stop learning.</strong>
          </p>

          {/* Description */}
          <p className="animate-on-scroll opacity-0 delay-300 text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            krinAI delivers autonomous agents capable of handling complex business operations—from customer support to data analysis, from lead qualification to process orchestration. While your competitors staff up, you&apos;ll scale up.
          </p>

          {/* Emphasis */}
          <div className="animate-on-scroll opacity-0 delay-400 mb-12">
            <p className="text-xl md:text-2xl font-semibold">
              This isn&apos;t automation. This is{" "}
              <span className="text-gradient font-bold">Agent as a Service</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group relative px-8 py-4 rounded-lg bg-primary text-background font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-white/20 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-lg border-2 border-border hover:border-primary text-foreground font-bold text-lg transition-all duration-300 hover:bg-primary/5"
            >
              Book a Demo
            </a>
          </div>

          {/* Trust Badge */}
          <div className="animate-on-scroll opacity-0 delay-600 mt-12 text-sm text-muted-foreground">
            No credit card required • Deploy your first agent in under 2 minutes
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
