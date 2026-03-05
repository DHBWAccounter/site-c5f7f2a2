import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PlatformHero } from "@/components/platform-hero";
import { PlatformFeatures } from "@/components/platform-features";
import { AgentTypes } from "@/components/agent-types";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { PlatformCTA } from "@/components/platform-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform | krinAI Agent Architecture",
  description: "Explore the krinAI agent platform. Learn how our autonomous agents work, configure custom workflows, and see pricing options for your business.",
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main>
        <PlatformHero />
        <PlatformFeatures />
        <AgentTypes />
        <Pricing />
        <FAQ />
        <PlatformCTA />
      </main>
      <Footer />
    </>
  );
}
