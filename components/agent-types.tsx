"use client";

import { useEffect, useRef } from "react";
import { HeadphonesIcon, TrendingUp, Settings, BarChart3, Search } from "lucide-react";

const agentTypes = [
  {
    icon: HeadphonesIcon,
    title: "Customer Support Agents",
    description:
      "Resolve 80% of inquiries without human intervention. Multi-language, empathetic, and brand-aligned. Your customers get instant answers, your team focuses on complex issues.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: TrendingUp,
    title: "Sales Development Agents",
    description:
      "Qualify leads, book meetings, and nurture prospects 24/7. Never miss an opportunity. Never let a hot lead go cold.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Settings,
    title: "Operations Agents",
    description:
      "Automate scheduling, inventory management, and vendor communications. Turn operational chaos into clockwork precision.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: BarChart3,
    title: "Data Analysis Agents",
    description:
      "Transform raw data into actionable insights. Monitor KPIs, generate reports, and surface anomalies before they become problems.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Search,
    title: "Research Agents",
    description:
      "Market intelligence, competitive analysis, trend monitoring. Your agents never stop gathering the intelligence you need to stay ahead.",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
];

export function AgentTypes() {
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
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Agent Types That{" "}
            <span className="text-gradient">Transform Industries</span>
          </h2>
        </div>

        {/* Agent Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {agentTypes.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group relative h-full p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-outfit text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                      {agent.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {agent.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
