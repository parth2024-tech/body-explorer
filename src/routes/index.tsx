import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import {
  ProductShowcaseSection,
  CTASection,
  FooterSection,
} from "@/components/landing/CTAFooterSection";
import { PricingFAQSection } from "@/components/landing/PricingFAQSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "The Living Body Atlas: Interactive Human Anatomy & Physiology",
      },
      {
        name: "description",
        content:
          "Clinically verified human anatomy and physiology platform. Explore 30+ anatomical structures, 290+ peer-reviewed physiological mechanisms, and evidence-rated remedies.",
      },
      {
        property: "og:title",
        content: "The Living Body Atlas: Interactive Human Anatomy",
      },
      {
        property: "og:description",
        content:
          "Interactive human anatomy and physiological reference vetted against gold-standard clinical guidelines from the AHA, CDC, and WHO.",
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

      {/* ─── EDITORIAL PROTOCOL: Core clinical tenets ─── */}
      <TestimonialsSection />

      {/* ─── OPEN STANDARDS & FAQ: Guarantees & questions ─── */}
      <PricingFAQSection />

      {/* ─── FINAL CTA: Cinematic conversion section ─── */}
      <CTASection />

      {/* ─── FOOTER: Elegant branded footer ─── */}
      <FooterSection />
    </div>
  );
}
