# 🌍 The Living Body Atlas

An interactive, animated human body education platform where users explore anatomy through a living 3D-layered map, log their own body experiences, complete weekly challenges, and get AI-guided clarity. Designed with a premium, museum-exhibit visual style.

---

## ✨ Features Overview

### 1. 🗺️ Interactive Body Map & Anatomy Layers
- **System Switcher:** Toggle visual layers between **Skin & Sensation**, **Muscles & Movement**, **Organs & Digestion**, and **Bones & Structure** directly on the interactive map.
- **Personal Notes Pinner:** Click any organ to log private notes locally (e.g., *"knee clicks when squatting"*).
- **Text-to-Speech (TTS):** Accessibility-friendly audio summaries read by the browser's speech synthesis engine.
- **3D Viewer:** Responsive WebGL renders of selected organs using Three.js/React Three Fiber.

### 2. 🧪 Core Content Engine
- **Remedies Database:** Search traditional, anecdotal, and clinically studied natural remedies, complete with evidence ratings and scientific backing details.
- **Anatomical Hacks:** Splashing cold water for vagus nerve stimulation, acupressure guides for headaches, and daily seasonal tuning advices.
- **Myths Debunked:** Curated list of common physiological misconceptions paired with scientific truth toggles.
- **Sensory Facts:** Fascinating explanations for everyday body responses (e.g., eye twitches, stomach gurgles).

### 3. 🩺 Symptoms & Conditions Library
- **A–Z Directory:** Clinical conditions simplified into plain-language overviews, symptom frequencies (always, often, sometimes), and misconceptions.
- **Symptom Explorer:** Pick a symptom to discover common causes and overlooked triggers.
- **Red-Flag Checker:** Sourced checklists specifying exactly when to seek immediate medical attention.

### 4. 🚨 Emergency Precautions & First Aid
- **Scenario Cards:** Instant emergency action steps for cardiac arrest, strokes (with FAST check guides), anaphylaxis, choking, and bleeding.
- **CPR Compression Pacer:** Audio/visual chest compression guide flashing and clicking at exactly **105 BPM** (optimized to match modern medical guidelines).
- **Printable Emergency Instructions:** CSS-optimized styles that format clean and clear for printing.
- **Smart Call Display:** Auto-detects local emergency helpline numbers based on browser location.

### 5. ⚙️ Stand-alone Interactive Tools
- **Breathing Pacer:** Pulsing visual guide for Box Breathing (4-4-4-4) and Relaxing (4-7-8) methods.
- **Lifetime Heartbeat Simulator:** Input your age and resting heart rate to calculate total estimated heartbeats since birth.
- **Hydration Tracker:** Visual daily log linked with anatomical facts about fluid absorption.
- **Sleep Cycle Calculator:** Computes bedtimes based on natural 90-minute sleep cycles.
- **Posture Alerts:** Opt-in background reminders using the browser's native Notification API.

### 6. 👤 Onboarding & Personalization
- **Topic Interests:** Select specific fields of anatomy to curate your feed.
- **Mood Check-ins:** Log how your body feels daily to receive customized educational highlights.
- **Streak Waveform:** Visually tracks daily visits with a custom SVG wave pattern.

---

## 🎨 Visual Identity

- **Base Theme:** Deep space navy (`#0A0E1A`) for a premium digital dark-mode backdrop.
- **Primary Accent:** Bioluminescent teal (`#00E5C4`) mirroring medical imaging and MRI glows.
- **Personal Accent:** Warm amber (`#F5A623`) for diary entries, streaks, and personal logs.
- **Community Accent:** Muted purple (`#6B4FA0`) for weekly challenges and quest indicators.
- **Typography:** Display headlines use Clash Display (futuristic, clinical aesthetic) and body text uses Inter.

---

## 🛠️ Technology Stack

- **Core:** React 19, TypeScript, Tailwind CSS v4, HTML5
- **Routing & Framework:** TanStack Start (SSR) + TanStack Router (File-based routing)
- **State Management:** Zustand (with LocalStorage state persistence middleware)
- **Animation:** Framer Motion 12, GSAP 3
- **3D Engine:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Offline Capabilities:** PWA Manifest, custom Caching Service Worker
- **Translations:** Built-in client-side translations dictionary supporting English & Hindi (EN / हिन्दी)

---

## 🚀 Setup & Installation

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
1. Clone this repository to your local system.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To launch the dev server on port 8080:
```bash
npm run dev
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Building for Production
To build the client and server assets for SSR environments:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```
