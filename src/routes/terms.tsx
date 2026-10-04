import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, AlertTriangle, BookOpen, ShieldAlert, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | The Living Body Atlas" },
      {
        name: "description",
        content:
          "Terms of Service and Clinical Medical Disclaimer for The Living Body Atlas educational platform.",
      },
      { property: "og:title", content: "Terms of Service | The Living Body Atlas" },
      {
        property: "og:description",
        content:
          "Clear, transparent terms regarding educational use, medical disclaimers, and user responsibilities.",
      },
    ],
  }),
  component: TermsPage,
});

export function TermsPage() {
  const lastUpdated = "September 2026";

  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-12 md:pt-20">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7B8199] hover:text-[#00E5C4] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Atlas
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00E5C4]/30 bg-[#00E5C4]/10 text-[#00E5C4]">
          <Scale className="h-5 w-5" />
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#00E5C4]">
            Legal Agreement
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-[#E8E0D5] md:text-4xl">
            Terms of Service
          </h1>
        </div>
      </div>

      <p className="text-xs font-mono text-[#7B8199] mb-10">
        Effective Date: {lastUpdated} · Version 2.1
      </p>

      {/* Critical Medical Disclaimer Banner */}
      <div className="mb-12 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6 text-amber-200">
        <div className="flex items-start gap-3.5">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
          <div>
            <h2 className="text-base font-bold text-amber-300 mb-1">
              Important Clinical and Medical Disclaimer
            </h2>
            <p className="text-xs leading-relaxed text-amber-200/90">
              The Living Body Atlas is an educational, interactive anatomical reference tool. It
              does not offer clinical diagnoses, treatment prescriptions, or individualized medical
              consultation. The content here is designed to improve scientific literacy and help
              patients communicate more clearly with their healthcare team. If you are experiencing
              an acute medical emergency, severe chest pain, sudden difficulty breathing, or stroke
              symptoms, immediately contact 911, 112, or your local emergency medical provider.
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <section className="space-y-8 text-sm leading-relaxed text-[#9DA3BA]">
        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or utilizing The Living Body Atlas, you agree to be bound by these Terms of
            Service and all applicable laws and regulations. If you do not agree with any of these
            terms, you are prohibited from using or accessing this application.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">2. Permitted Educational Use</h2>
          <p>
            The software, interactive body visualizations, curated medical facts, and educational
            guides are provided for personal, non-commercial, and classroom instructional use. You
            may utilize the reference material to learn, prepare doctor discussion questions, and
            teach biological concepts.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">
            3. No Doctor-Patient Relationship
          </h2>
          <p>
            Interaction with this application, including using search tools, viewing remedies, or
            exploring symptom education cards, does not create a doctor-patient, therapist-patient,
            or confidential healthcare provider relationship.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">
            4. Scientific Accuracy and Sourcing
          </h2>
          <p>
            We curate facts and health information from recognized peer-reviewed sources, including
            the American Heart Association (AHA), World Health Organization (WHO), and the National
            Institutes of Health (NIH). However, medical consensus continually evolves. We make no
            warranties regarding absolute completeness or ongoing applicability of any specific
            finding to an individual's unique genetics or clinical profile.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">5. Intellectual Property</h2>
          <p>
            The visual layout, user interface designs, custom SVG anatomical assets, and proprietary
            software code are the intellectual property of The Living Body Atlas. Standard medical
            terminology and public domain research findings remain the property of their respective
            authors and public scientific repositories.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">6. Limitation of Liability</h2>
          <p>
            In no event shall The Living Body Atlas, its developers, or medical contributors be
            liable for any damages (including direct, indirect, incidental, or consequential
            damages) arising from the use or inability to use the educational materials provided on
            this platform.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#E8E0D5] mb-2">7. Updates and Modifications</h2>
          <p>
            We reserve the right to revise these Terms of Service at any time without prior notice.
            By continuing to use this website, you agree to be bound by the then-current version of
            these Terms of Service.
          </p>
        </div>
      </section>
    </main>
  );
}
