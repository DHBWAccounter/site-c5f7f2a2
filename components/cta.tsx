"use client";

import { useEffect, useRef } from "react";

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-on-scroll opacity-0 max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative p-12 md:p-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl overflow-hidden">
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Content */}
            <div className="text-center">
              <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to Deploy Your
                <br />
                <span className="text-gradient">First Agent?</span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Stop imagining what AI could do. Start experiencing what krinAI agents{" "}
                <strong className="text-foreground">are doing</strong> for businesses like yours right now.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="#"
                  className="group relative px-10 py-4 rounded-lg bg-primary text-background font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 animate-pulse-glow"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-white/20 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
                </a>
                <span className="text-muted-foreground text-2xl">•</span>
                <a
                  href="#"
                  className="px-10 py-4 rounded-lg border-2 border-border hover:border-primary text-foreground font-bold text-lg transition-all duration-300 hover:bg-primary/5"
                >
                  Book a Demo
                </a>
              </div>

              {/* Trust Badge */}
              <p className="text-sm text-muted-foreground">
                No credit card required. Deploy your first agent in under 2 minutes.
              </p>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
