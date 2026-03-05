"use client";

import { useEffect, useRef } from "react";
import { Wrench, Eye, Database, GitBranch } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Agent Builder",
    description:
      "Create custom agents without writing code. Define goals, set constraints, and upload knowledge bases. Our visual builder makes agent creation as simple as describing what you need.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description:
      "Watch your agents work. Every decision, every interaction, every outcome—logged and analyzable. Identify bottlenecks, optimize performance, and maintain complete visibility.",
  },
  {
    icon: Database,
    title: "Knowledge Integration",
    description:
      "Connect your agents to your company's collective intelligence. Upload documents, connect databases, link wikis. Your agents become experts in your business in minutes, not months.",
  },
  {
    icon: GitBranch,
    title: "Collaborative Workflows",
    description:
      "Agents that work together, achieve more. Chain multiple agents into sophisticated workflows. A support agent hands off to a sales agent. A research agent feeds a reporting agent. The possibilities compound.",
  },
];

export function PlatformFeatures() {
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
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Agent{" "}
            <span className="text-gradient">Command Center</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-full p-8 lg:p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm card-hover overflow-hidden">
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-outfit text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>

                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
