import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ProductShowcaseSection, CTASection, FooterSection } from "@/components/landing/CTAFooterSection";
import { PricingFAQSection } from "@/components/landing/PricingFAQSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "The Living Body Atlas — Your body has 37 trillion cells. Start understanding them.",
      },
      {
        name: "description",
        content:
          "The world's most immersive human anatomy education platform. Explore 30+ organs through 5 data layers, track your body diary, complete weekly quests, and get AI-guided clarity. Free forever on the basics.",
      },
      {
        property: "og:title",
        content: "The Living Body Atlas — Know Your Body",
      },
      {
        property: "og:description",
        content:
          "Interactive anatomy platform with 30+ organs, personal body diary, daily insights, community quests, and AI symptom education. Curious humans already exploring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="relative">
      {/* ─── HERO: Cinematic full-screen opening ─── */}
      <HeroSection />

      {/* ─── TRUST: Social proof with stats & testimonials ─── */}
      <TrustSection />

      {/* ─── PRODUCT SHOWCASE: 5 data layers ─── */}
      <ProductShowcaseSection />

      {/* ─── FEATURES GRID: 6 platform features ─── */}
      <FeaturesSection />

      {/* ─── PROCESS TIMELINE: How it works ─── */}
      <ProcessSection />

      {/* ─── TESTIMONIALS: Auto-advancing carousel ─── */}
      <TestimonialsSection />

      {/* ─── PRICING + FAQ ─── */}
      <PricingFAQSection />

      {/* ─── FINAL CTA: Cinematic conversion section ─── */}
      <CTASection />

      {/* ─── FOOTER: Elegant branded footer ─── */}
      <FooterSection />
    </div>
  );
}
