# The Living Body Atlas & Health Intelligence Platform

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/parth2024-tech/body-explorer)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://react.dev/)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-SSR-ff4154.svg)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Tests: Vitest](https://img.shields.io/badge/Tests-Vitest_Passing-success.svg)](https://vitest.dev/)
[![License: MIT](https://img.shields.io/badge/Code_License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Evidence-grounded, plain-language physiological education for everyone.**  
> An open-access interactive anatomy, evidence-graded nutritional science, cross-border regulatory observatory, and emergency first-aid triage platform built for learners, patients, and health educators.

---

## 🧭 Overview

**Body Explorer** translates complex physiological, nutritional, and pharmacovigilance data into accessible, visually intuitive, and verifiable educational resources. Designed for Grade 6–8 health literacy (the "Grandma Test"), the platform pairs interactive client-side vector graphics with clinical evidence frameworks from statutory bodies (WHO, CDC, NIH, ICMR, AHA, ERC).

---

## ⚡ Core Modules

### 1. 🫀 Interactive Anatomy Atlas (`/explore`)

- **Layered Biological Views:** Switch fluidly between **Skin**, **Muscles**, **Organs**, and **Skeletal** systems.
- **Physiological Systems Mapping:** Explore interactive SVG anatomy zones with organ relationship mapping, physiological telemetry, and cellular descriptions.
- **Local Bookmarking & Notes:** Save educational notes and bookmarks client-side via browser `localStorage` without remote telemetry.

### 2. 🥗 Clinical Nutrition & Food Spectrum (`/food`)

- **NOVA & WHO Food Classification Hierarchy:**
  - **Group 1: Foundational Whole Foods:** Minimally processed grains, pulses, legumes, vegetables, and seeds with established epidemiological benefits.
  - **Group 2: Processed Culinary Ingredients:** Oils, unrefined fats, and seasonings used in culinary preparation.
  - **Group 3: Processed Foods:** Simple combinations of Group 1 and Group 2 with minimal additives.
  - **Group 4: Ultra-Processed Formulations:** Industrial formulations with cosmetic additives, emulsifiers, and hydrogenated lipids.
- **Biochemical Synergies:** Evidence-based food pairings that enhance nutrient bioavailability (e.g., Non-Heme Iron with Ascorbic Acid, Curcumin with Piperine).
- **Drug-Nutrient Contraindications:** Clinical alerts regarding food interactions with common prescription medications (e.g., Grapefruit with CYP3A4-metabolized Statins, Vitamin K with Warfarin).
- **Evidence-Ranged Calculators:** Basal Metabolic Rate (Mifflin-St Jeor), Daily Energy Expenditure, activity-adjusted protein ranges (0.8–1.8 g/kg), hydration ranges (30–45 ml/kg), and dietary fiber goals (25–38 g/day).
- **Clinical Boundary Notice:** Explicit exclusions for pediatric patients, pregnancy, lactation, active eating disorders, and stage 3–5 chronic kidney disease (CKD).

### 3. 🚨 Cross-Border Regulatory & Quality Watch (`/grey-market`)

- **Regulatory Discrepancy Observatory:** Compiles official administrative notices, import alerts, and safety advisories published by international statutory agencies (US FDA, EFSA, Health Canada, Singapore SFA, Hong Kong CFS, India CDSCO, and FSSAI).
- **Toxicological & Pharmacological Mechanisms:** Summarizes cellular mechanisms and evidence tiers for monitored substances (e.g., Ethylene Oxide residue limits, heavy metal impurities, potassium bromate, and withdrawn active pharmaceutical ingredients).
- **Watchlist Search:** Keyword search matching ingredient and generic names against public regulatory advisories, with explicit non-diagnostic disclaimers.

### 4. 🚑 Emergency First Aid & CPR Protocol (`/emergency`)

- **High-Acuity First Aid Guides:** Step-by-step triage actions for immediate medical emergencies: Adult Cardiac Arrest, Acute Stroke (FAST criteria), Anaphylaxis, Severe Choking, and Severe External Bleeding.
- **AHA/ERC Guideline-Aligned CPR Metronome:** Web Audio API hardware-synthesized acoustic and visual metronome calibrated to 105 CPM (within the gold-standard 100–120 compressions/minute range specified by AHA 2020 & ERC 2021). Operates 100% offline with zero external audio assets.
- **Country-Aware Emergency Dispatch:** Instant direct-dial configuration for national emergency lines across India (112 / 108), the United States (911), the United Kingdom (999), the European Union (112), Canada (911), and Australia (000).
- **Pediatric Boundaries:** Prominent warnings indicating that adult CPR protocols do not apply to infants (<1 year) or young children.

### 5. 🔍 Food Label Decoder (`/food-labels`)

- **Statutory Labeling Translation:** Translates confusing additive codes (INS / E-numbers), synthetic sweeteners, and sodium variants into plain-language health descriptions.
- **Deceptive Claim Analysis:** Evaluates front-of-package marketing conventions against statutory regulatory thresholds (Codex Alimentarius, US FDA 21 CFR 101, FSSAI).

### 6. 📚 Anatomy Library & Scientific Inquiries (`/library`, `/facts`, `/explain`)

- **Medical Myth-Busting:** Clinical deconstructions of widespread health misconceptions backed by empirical literature.
- **Remedies & Oxford CEBM Grading:** Natural and traditional botanicals classified against Oxford Centre for Evidence-Based Medicine (CEBM) and GRADE hierarchies.
- **Accessible Speech Synthesis:** Native browser Web Speech API integration to narrate educational summaries hands-free.
- **Physiological Query Translation (`/explain`):** Plain-language sensation mapping into organ systems and clinician discussion points with explicit non-diagnostic boundaries.

---

## 📱 Mobile-First Ergonomics & Accessibility

- **Thumb-Zone Navigation:** Fixed docked bottom navigation (`md:hidden`) with safe-area inset accommodation for one-handed operation.
- **Touch Target Compliance:** Minimum ≥48px touch boundaries across all buttons, inputs, and interactive targets.
- **Slide-Over Emergency Drawer:** Single-tap access to localized emergency dispatch, language switching, and regulatory directories without layout shift.
- **Accessible Vector Architecture:** High-contrast color scales, crisp SVG vector icons (Lucide), native OS cursor preservation, and screen-reader semantic landmarks.

---

## 🛠️ Technology Stack

| Layer                | Technologies                                 | Purpose                                                         |
| :------------------- | :------------------------------------------- | :-------------------------------------------------------------- |
| **Core Framework**   | React 19.2, TypeScript 5.8, Vite 8           | Concurrent React UI with strict static typing                   |
| **Server & Routing** | TanStack Start (SSR), TanStack Router, Nitro | Full-stack type-safe file-based routing and SSR execution       |
| **Styling & Motion** | Tailwind CSS v4, Framer Motion 12            | High-performance CSS-first styling and accessible fluid motion  |
| **Graphics & Audio** | Hardware-Accelerated SVG, Web Audio API      | Client-side vector anatomy and offline CPR oscillator synthesis |
| **State Management** | Zustand (with `localStorage` persistence)    | Local-first reactive state with zero server tracking            |
| **Testing**          | Vitest 5.0                                   | High-speed unit and integration test suite                      |
| **AI Integration**   | Google Generative AI (`gemini-2.5-flash`)    | Server-side physiological inquiry contextualizer                |
| **Data Validation**  | Zod 3.24                                     | Runtime schema verification                                     |

---

## 🧬 Clinical Evidence Governance

All health content published within this repository follows established evidence hierarchies:

1. **Oxford Centre for Evidence-Based Medicine (CEBM) & GRADE Framework:**
   - **Level 1 (High):** Systematic reviews of randomized trials, meta-analyses, and statutory consensus guidelines (WHO, CDC, NIH, Cochrane, AHA).
   - **Level 2 (Moderate):** Individual randomized controlled trials and large prospective cohort studies.
   - **Level 3 (Low / Emerging):** Case-control studies, retrospective cohorts, and mechanistic laboratory research.
   - **Level 4 (Traditional / Anecdotal):** Historical pharmacognosy and empirical observations (clearly designated as non-systematic).
2. **Plain-Language Translation:** Clinical prose is engineered for Grade 6–8 readability to ensure accessible comprehension during acute and educational contexts.
3. **Safety & Liability Guardrails:**
   - Never provides individualized clinical diagnoses or replaces a licensed medical practitioner.
   - Never prescribes proprietary pharmaceutical or botanical dosages.
   - Prominently displays red flag alerts and emergency dispatch directives on all high-stakes screens.

---

## 🧪 Verification & Code Quality

The repository maintains an automated validation pipeline:

```bash
# Run unit test suite (Vitest)
npm run test

# Run TypeScript static type check
npm run typecheck

# Run ESLint validation
npm run lint

# Run full project validation (types + lint + tests)
npm run validate

# Build production SSR distribution
npm run build
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/parth2024-tech/body-explorer.git
cd body-explorer

# Install dependencies cleanly
npm install

# Start the local development server
npm run dev
```

Visit [http://localhost:8080](http://localhost:8080) to run the application locally.

---

## 🔒 Privacy & Local-First Philosophy

- **Zero Third-Party Tracking:** No advertising cookies, tracking pixels, or third-party profiling scripts.
- **Local-Only Storage:** User bookmarks, calculator inputs, and application state persist exclusively in browser `localStorage`.
- **Medical Disclaimer:** Content provided on this platform is for educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified physician or other licensed healthcare provider regarding any medical condition. In a medical emergency, immediately contact your local emergency services (112, 911, or 999).

---

## 📄 License & Attribution

- **Source Code:** Distributed under the [MIT License](./LICENSE).
- **Educational Health Content:** Textual syntheses and clinical frameworks are licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).
