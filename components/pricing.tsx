"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for teams exploring agent automation.",
    features: [
      "3 AI agents",
      "10,000 interactions/month",
      "Standard integrations",
      "Email support",
      "Basic analytics",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$899",
    period: "/month",
    description: "For growing teams ready to transform operations.",
    features: [
      "10 AI agents",
      "100,000 interactions/month",
      "Premium integrations",
      "Priority support",
      "Advanced analytics",
      "Custom agent training",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Pricing",
    description: "For organizations demanding unlimited potential.",
    features: [
      "Unlimited agents",
      "Unlimited interactions",
      "Custom integrations",
      "Dedicated success manager",
      "SLA guarantees",
      "On-premise deployment options",
      "White-label solutions",
    ],
    highlighted: false,
  },
];

export function Pricing() {
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
            Investment That Scales With Your{" "}
            <span className="text-gradient">Ambition</span>
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`relative h-full p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 overflow-hidden ${
                  plan.highlighted
                    ? 'border-primary/50 bg-gradient-to-b from-primary/10 via-card/50 to-card/30 shadow-2xl shadow-primary/20'
                    : 'border-border/50 bg-card/30 hover:border-primary/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 rounded-b-lg bg-primary text-background text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Top Glow Line */}
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}

                {/* Plan Header */}
                <div className="mb-6 pt-4">
                  <h3 className="font-outfit text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-outfit text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#"
                  className={`block w-full py-3 px-6 rounded-lg font-bold text-center transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-primary text-background hover:shadow-lg hover:shadow-primary/40'
                      : 'border-2 border-border hover:border-primary text-foreground hover:bg-primary/5'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trial Note */}
        <div className="animate-on-scroll opacity-0 delay-500 text-center mt-12">
          <p className="text-muted-foreground">
            <strong className="text-foreground">All plans include a 14-day free trial.</strong> No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
