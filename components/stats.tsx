"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10M+", label: "tasks completed autonomously" },
  { value: "340%", label: "average ROI within 90 days" },
  { value: "24/7", label: "operation with zero downtime" },
  { value: "<2min", label: "average agent deployment time" },
];

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 geometric-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-4">
            Numbers That Speak{" "}
            <span className="text-gradient">Louder Than Promises</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                relative group
                ${isVisible ? "animate-scale-in" : "opacity-0"}
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="font-outfit text-5xl md:text-6xl font-bold text-gradient mb-3 glow-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
