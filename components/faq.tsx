"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to deploy an agent?",
    answer:
      "Most agents are deployed in under 2 minutes. Complex custom agents with specialized knowledge bases may take up to an hour to configure and test.",
  },
  {
    question: "Do I need technical skills to use krinAI?",
    answer:
      "No. Our visual builder is designed for business users. If you can describe what you need, you can build an agent. For advanced customizations, our solutions team is available.",
  },
  {
    question: "What happens if an agent makes a mistake?",
    answer:
      "Every agent action is logged and reviewable. You can set approval workflows for high-stakes decisions, and our guardrails prevent agents from operating outside defined boundaries.",
  },
  {
    question: "Can agents access our internal systems?",
    answer:
      "Yes, through secure integrations. You control exactly what each agent can access, and all connections are encrypted and audited.",
  },
  {
    question: "What's your uptime guarantee?",
    answer:
      "Enterprise plans include 99.99% uptime SLAs. Our infrastructure is distributed across multiple regions with automatic failover.",
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Questions?{" "}
            <span className="text-gradient">We've Got Answers.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors duration-300"
                >
                  <span className="font-outfit text-lg font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
