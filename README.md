# The Living Body Atlas & Health Intelligence Platform

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/parth2024-tech/body-explorer)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://react.dev/)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-SSR-ff4154.svg)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Clinical-grade, plain-language health exploration for everyone.**  
> An open-access interactive anatomy, evidence-graded nutritional science, regulatory safety registry, and emergency triage platform built for patients, students, and health educators.

---

## 🧭 Overview

**Body Explorer** transforms complex medical and physiological data into accessible, visually intuitive, and clinically verifiable education. Rather than dry medical textbooks or speculative wellness trends, the platform combines client-side interactive graphics with rigorous evidence standards (WHO, CDC, NIH, ICMR) translated for Grade 6–8 health literacy (the "Grandma Test").

---

## ⚡ Core Modules

### 1. 🫀 Interactive Anatomy Atlas (`/explore`)
* **Layered Biological Views:** Switch fluidly between **Skin**, **Muscles**, **Organs**, and **Skeletal** systems.
* **Physiological Cross-Links:** Explore interactive SVG anatomy zones with real-time organ relationship mapping, physiological telemetry, and cellular descriptions.
* **Personalized Health Annotations:** Pin localized clinical notes and observations directly to anatomical zones via client-side encrypted state.

### 2. 🥗 Food & Nutrition Spectrum (`/food`)
* **4-Tier Evidence Hierarchy:**
  * **Superfoods & Essentials:** Clinically proven high-density staples.
  * **Daily Nutrition:** Balanced everyday macro/micronutrients.
  * **Moderation:** Foods requiring portion mindfulness and sodium/sugar vigilance.
  * **High-Risk / Ultra-Processed:** Trans-fats, synthetic emulsifiers, and carcinogenic additives.
* **Biochemical Synergies:** Actionable food pairings that maximize bioavailability (e.g., Vitamin C + Non-Heme Iron, Piperine + Curcumin).
* **Drug-Nutrient Contraindications:** Life-saving clinical alerts regarding food interactions with medications (e.g., Grapefruit with Statins, Vitamin K with Warfarin).
* **Interactive Nutrition Calculators:** Real-time BMR, TDEE, macro split, and personalized hydration requirements based on clinical formulas (Mifflin-St Jeor).

### 3. 🚨 India Safety Watch & Regulatory Registry (`/grey-market`)
* **Regulatory Discrepancy Index:** Tracks consumer foods, spices, ayurvedic formulations, and medications available in India that face severe bans or import restrictions in the US (FDA), EU (EFSA), Singapore (SFA), UK (FSA), and Hong Kong (CFS).
* **Toxicology Deep-Dives:** Identifies chemical adulterants and hazardous contaminants (e.g., Ethylene Oxide, heavy metals, undeclared steroid analogues) with biological mechanism explanations and safe whole-food alternatives.
* **Label & Ingredient Scanner:** Fast client-side keyword triage matching prescription ingredients and food packaging labels against flagged registries.

### 4. 🚑 Emergency SOS & First Aid Triage (`/emergency`)
* **Life-Saving Protocols:** Instant step-by-step guidance for high-acuity medical crises: Cardiac Arrest, Acute Stroke (FAST protocol), Anaphylaxis, Severe Choking, and Arterial Bleeding.
* **105 BPM CPR Metronome:** Integrated visual and audio pacer pulsing at the gold-standard 105 beats per minute to pace emergency chest compressions.
* **Localized Emergency Helplines:** Real-time triage directory displaying verified regional emergency services (112, 102, 108, 999, 911).

### 5. 🔍 Food Label Decoder (`/food-labels`)
* **Consumer Defense System:** Translates confusing E-numbers, chemical additives, hidden sodium names, and refined sugars into plain-language health risk assessments.
* **Clean-Label Guidance:** Practical tips for identifying whole-food substitutes and deciphering deceptive front-of-package marketing claims.

### 6. 📚 Anatomy Library & Daily Science (`/library`, `/facts`)
* **Myth-Busting Compendium:** Clinical deconstructions of widespread health fallacies (e.g., cold water myths, detox cleanses, carbohydrate misconceptions).
* **Studied Natural Remedies:** Herbal and traditional therapies classified by scientific trial evidence (Level 1: Systematically proven, Level 2: Traditional evidence, Level 3: Anecdotal).
* **Accessible Audio Synthesizer:** Native Web Speech API integration to read daily facts and physiological marvels aloud.

---

## 📱 Mobile-First Ergonomics & Accessibility

* **Thumb-Zone Navigation:** A fixed bottom navigation dock (`md:hidden`) with full safe-area inset support provides effortless one-handed control.
* **Touch Target Standards:** Every interactive element adheres strictly to ≥48px minimum touch boundaries to eliminate tap errors on mobile devices.
* **Slide-Over Health Drawer:** Fast access to language toggles, 1-tap ambulance dialing, legal policies, and safety indexes without page crowding.
* **Zero AI-Slop Aesthetic:** Crisp SVG vector icons (Lucide), system-respecting dark telemetry palette, zero fabricated metrics, and complete preservation of native OS cursors.

---

## 🛠️ Technology Stack

| Layer | Technologies | Purpose |
|:---|:---|:---|
| **Core Framework** | React 19, TypeScript 5.8, Vite 8 | Modern concurrent React with strict static typing |
| **Server & Routing** | TanStack Start (SSR), TanStack Router, Nitro | Full-stack type-safe file routing with server function primitives |
| **Styling & Motion** | Tailwind CSS v4, Framer Motion 12 | CSS-first high-performance styling and responsive fluid UI |
| **3D & Graphics** | Three.js, React Three Fiber, SVG | Hardware-accelerated anatomical models & particle fields |
| **State Management** | Zustand (with LocalStorage persist) | Client-side reactive memory with zero server-side tracking |
| **AI Integration** | Google Gemini API (`gemini-2.5-flash`) | Optional server-side toxicology & sensation analysis |
| **Data Validation** | Zod 3.24 | Runtime schema verification for APIs and stores |

---

## 🧬 Clinical Evidence Governance

All health content published within this repository follows strict clinical curation standards:

1. **Evidence Triangulation:**
   * **Tier 1 (Gold):** Systematic reviews, meta-analyses, and major regulatory guidelines (WHO, CDC, NIH, NHS, Cochrane).
   * **Tier 2 (Silver):** Peer-reviewed clinical trials and specialty medical association statements (AHA, ADA, FSSAI).
   * **Tier 3 (Bronze):** Preliminary observational data and emerging laboratory studies (clearly labeled as preliminary).
2. **Plain Language Mandate:** All clinical prose targets Grade 6–8 readability to ensure life-saving medical concepts are universally understood.
3. **Harm Prevention:** The platform never dispenses prescription dosages, makes individual medical diagnoses, or presents alternative therapies as equivalent to emergency acute medicine.

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/parth2024-tech/body-explorer.git
cd body-explorer

# Install dependencies cleanly
npm install
```

### Environment Configuration

Create a `.env` file in the project root:

```env
# Optional: Google Gemini API key for AI toxicology functions
GEMINI_API_KEY=your_gemini_api_key_here
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:8080](http://localhost:8080) to explore the application locally.

---

## 🧪 Verification & Code Quality

The repository enforces strict linting, zero `any` types, and clean formatting:

```bash
# Run TypeScript compilation check
npm run typecheck

# Run ESLint validation
npm run lint

# Run code formatter
npm run format

# Run full project validation (types + linter)
npm run validate

# Build production SSR distribution
npm run build
```

---

## 📦 Deployment

The application is optimized for zero-configuration deployment to **Vercel** via the native `@tanstack/react-start` Nitro preset:

```bash
# Build the production bundle
npm run build

# Preview the production build locally
npm run preview
```

When connected to Vercel via GitHub, pushes to `main` automatically trigger production deployments with edge-rendered SSR.

---

## 🔒 Privacy & Clinical Ethics

* **Zero Personal Tracking:** No tracking cookies, no Google Analytics, no third-party user profiling.
* **Local-First Storage:** User bookmarks, wellness preferences, and notes remain strictly on the user's local device.
* **Medical Disclaimer:** The information on this platform is for educational and informational purposes only and does not constitute formal medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional regarding any medical condition. In a medical emergency, immediately contact your local emergency services (112, 911, or 999).

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more details.
