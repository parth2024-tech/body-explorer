# 🛰️ Body Explorer: Next-Gen Interactive Anatomy

> **A precision interactive anatomy and health platform** — combining cutting-edge WebGL graphics with advanced AI to deliver a world-class educational experience. Built for students, health enthusiasts, and anyone curious about the human body.

---

## 🌟 The Vision

Body Explorer was built to push the boundaries of what's possible in web-based medical education. We've moved beyond static textbooks and simple 2D charts to create a **Living Body Atlas**. By leveraging Gemini AI, we don't just show you anatomy—we help you understand it, analyze symptoms, and prepare for medical consultations.

Our design philosophy combines a premium, aerospace-inspired aesthetic with razor-sharp performance, ensuring that critical health information is always readable, accessible, and stunningly presented.

---

## ✨ Flagship Features

### 1. 🧠 AI Symptom Explorer (Powered by Gemini)
- **Intelligent Symptom Analysis:** Describe how you feel in plain language. Our AI engine maps your sensations directly to the underlying physiology and affected organ systems.
- **Doctor Visit Summary:** Generates a professional, structured report of your symptoms, potential triggers, and relevant questions to ask your physician.
- **Print-Ready:** Custom `@media print` CSS ensures that your Doctor Report prints cleanly, hiding UI chrome and saving ink, so you can hand it directly to your healthcare provider.

### 2. 🗺️ Interactive 3D Body Map
- **Multi-System Layers:** Seamlessly toggle between Skin, Muscles, Organs, and Skeletal views.
- **High-Fidelity 3D Viewer:** Examine selected organs in full 3D space, powered by `Three.js` and React Three Fiber.
- **Personal Annotations:** Pin private notes locally to specific body regions for a personalized health diary.

### 3. 🚨 Emergency Precautions & First Aid
- **Instant Action Protocols:** Immediate, step-by-step instructions for critical situations (Cardiac Arrest, Stroke, Anaphylaxis, Choking, Severe Bleeding).
- **CPR Compression Pacer:** Integrated audio/visual metronome pacing at exactly **105 BPM** to guide emergency chest compressions.
- **Smart Helplines:** Automatically detects and displays local emergency numbers based on the user's browser locale.

### 4. 📚 Comprehensive Anatomy Library
- **Remedies Database:** A curated list of natural remedies with clinical evidence ratings.
- **Mythbusters:** Scientific explanations debunking common physiological misconceptions.
- **Daily Facts Engine:** Curated anatomy facts organized by rarity (`COMMON`, `SURPRISING`, `MIND-BLOWING`, `RARE`).

### 5. 📓 Health & Body Diary
- **Daily Symptom Logging:** Track how different organs and systems feel over time.
- **Visual Streak Tracking:** Build healthy habits with SVG wave patterns that track your engagement.

---

## 🛠️ Technology Stack

Built for maximum performance, SEO, and user experience.

| Layer | Technology |
|---|---|
| **Core Framework** | React 19, TypeScript, Vite 8 |
| **Server-Side Rendering (SSR)** | TanStack Start |
| **Routing** | TanStack Router (File-based, Type-safe) |
| **Styling** | Tailwind CSS v4, Framer Motion 12 |
| **3D Rendering** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **AI Integration** | Google Gemini API (`@google/generative-ai`) |
| **State Management** | Zustand (with LocalStorage persistence) |

---

## 🚀 Setup & Development

### Prerequisites
- Node.js (v18+)
- A Google Gemini API Key (for the AI Symptom Explorer)

### Installation
```bash
# Clone the repository
git clone https://github.com/parth2024-tech/body-explorer.git
cd body-explorer

# Install dependencies
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

### Running Locally
```bash
npm run dev
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Building for Production
```bash
npm run build
npm run preview
```

---

## 🎨 Design System

We employ a highly considered, high-contrast color palette designed for maximum readability and a premium feel.

- **Deep Space Black** (`#030303`) — A true void backdrop that makes 3D models pop.
- **Telemetry Gold** (`#F5A623`) — Used for premium features and AI interactions.
- **NASA Red** (`#FC3D21`) — Reserved exclusively for critical emergency alerts and active states.
- **NASA Blue** (`#0B3D91`) — Secondary accent for system indicators.
- **Off-White** (`#EAEAEA`) — High-contrast foreground for text.

*Typography:* Space Grotesk for headers, Plus Jakarta Sans for extreme readability in body copy, and Fira Mono for all technical readouts and data points.

---

*Body Explorer © 2024 · All Systems Nominal*
