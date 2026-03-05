"use client";

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We replaced a 12-person support team with krinAI agents. Response time dropped from 4 hours to 8 seconds. Customer satisfaction went up 47%. This is the future.",
    author: "Sarah Chen",
    role: "VP of Operations, Nexus Financial",
  },
  {
    quote:
      "Our sales agents now qualify 400% more leads while our human team closes deals. krinAI didn't replace our people—it made them unstoppable.",
    author: "Marcus Webb",
    role: "Chief Revenue Officer, Velocity Tech",
  },
  {
    quote:
      "I was skeptical. Then I watched a krinAI agent resolve a complex supply chain issue in 6 minutes that would've taken our team 3 days. I'm not skeptical anymore.",
    author: "Dr. Ananya Patel",
    role: "COO, MediLogistics Global",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 geometric-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            They Bet on Agents.{" "}
            <span className="text-gradient">They Won.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-full p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Quote className="w-5 h-5 text-background" />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg leading-relaxed mb-8 pt-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-auto">
                  <div className="font-outfit font-bold text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    <em>{testimonial.role}</em>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
