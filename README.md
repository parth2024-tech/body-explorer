# 🛰️ Human Body Atlas

> **A precision aerospace-grade interactive anatomy platform** — built like mission-critical software, styled like NASA's data dashboards. Explore the human body across 30+ organ systems with engineering precision.

---

## 🔴 Design Philosophy — NASA Aerospace Aesthetic

This platform has been entirely rebuilt to embody the visual language of premium aerospace engineering software:

- **Deep Space Black** (`#030303`) — a void backdrop, not a painted wall
- **NASA Red** (`#FC3D21`) — the iconic accent for all critical data and active states
- **NASA Blue** (`#0B3D91`) — secondary accent for system indicators and highlights  
- **Off-White** (`#EAEAEA`) — high-contrast foreground for readable data readouts
- **Zero-radius UI** — razor-sharp rectangular panels, like physical instrument consoles
- **Precision grid background** — a subtle 30×30px engineering schematic overlay
- **Monospace technical labels** — all metadata rendered in `Fira Mono` with wide letter-spacing
- **Corner crosshairs** — `+` marks injected on UI cards via CSS pseudo-elements
- **Live clock & system status** in the header — real-time UTC readout + `NOMINAL / OPERATIONAL` indicators

---

## ✨ Features Overview

### 1. 🗺️ Interactive Body Map & Anatomy Layers
- **System Switcher:** Toggle visual layers between Skin & Sensation, Muscles & Movement, Organs & Digestion, and Bones & Structure
- **Personal Notes Pinner:** Click any organ to log private notes locally
- **Text-to-Speech (TTS):** Accessibility-friendly audio summaries
- **3D Viewer:** WebGL renders of selected organs using Three.js / React Three Fiber

### 2. 📚 Anatomy Library
- **Remedies Database:** Traditional and clinically studied natural remedies with evidence ratings
- **Anatomical Hacks:** Acupressure guides, breathing techniques, daily tuning advice
- **Myths Debunked:** Common physiological misconceptions paired with scientific truth
- **Sensory Facts:** Explanations for everyday body responses

### 3. 💡 Body Facts Engine
- **Daily Facts:** Curated fascinating anatomy facts organized by rarity (`COMMON`, `SURPRISING`, `MIND-BLOWING`, `RARE`)
- **Filter & Search:** Browse by category, rarity, or body system
- **Fact Cards:** Shareable, detailed fact panels with supporting context

### 4. 🩺 Symptoms & Conditions Library
- **A–Z Directory:** Clinical conditions in plain-language overviews with symptom frequencies
- **Symptom Explorer:** Discover causes, overlooked triggers, and misconceptions
- **Red-Flag Checker:** Know exactly when to seek immediate medical attention

### 5. 🚨 Emergency Precautions & First Aid
- **Scenario Cards:** Instant steps for cardiac arrest, stroke (FAST check), anaphylaxis, choking, bleeding
- **CPR Compression Pacer:** Audio/visual pacing at exactly **105 BPM**
- **Printable Instructions:** Clean print-optimized CSS layout
- **Smart Emergency Numbers:** Auto-detects local helpline based on browser locale

### 6. 📓 Body Diary
- **Daily Log:** Track how organs and body systems feel each day
- **Streak Waveform:** Visual SVG wave pattern tracking daily visits
- **Personal annotations** linked to body map zones

### 7. ⚡ Daily Insight
- One fact, one 30-second action, every day — curated to keep anatomy education effortless

### 8. 🏆 Weekly Quest
- Community challenges, habit building, and certificate milestones

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Core** | React 19, TypeScript, Tailwind CSS v4 |
| **Routing** | TanStack Start (SSR) + TanStack Router (File-based) |
| **State** | Zustand with LocalStorage persistence |
| **Animation** | Framer Motion 12 |
| **3D Engine** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Typography** | Space Grotesk (Display), Plus Jakarta Sans (Body), Fira Mono (Code/Data) |
| **Offline** | PWA Manifest + Custom Service Worker |
| **i18n** | Built-in EN / हिन्दी translations |

---

## 🚀 Setup & Installation

### Prerequisites
Node.js (v18+) installed on your machine.

### Installation
```bash
# Clone the repository
git clone https://github.com/parth2024-tech/body-explorer.git
cd body-explorer

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Building for Production
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## 🧭 Navigation Structure

| Route | Module Code | Description |
|---|---|---|
| `/explore` | `XPL-01` | Interactive body map with 3D organ viewer |
| `/library` | `LIB-02` | Anatomy library — remedies, hacks, myths |
| `/symptoms` | `SYM-03` | Symptoms & conditions A–Z directory |
| `/emergency` | `EMG-04` | First aid protocols & CPR pacer |
| `/facts` | `FCT-05` | Body facts engine with rarity ratings |
| `/diary` | `DRY-06` | Personal body diary & streak tracker |
| `/daily` | `DLY-07` | Daily insight & 30-second wellness action |
| `/quest` | `QST-08` | Weekly community challenges |

---

## 🎨 Color System

```
Background ........... #030303  (Deep Space Black)
Foreground ........... #EAEAEA  (Off-White)
Card / Panel ......... #0F0F0F  (Near Black)
Border ............... #222222  (Precision Gray)
Primary Accent ....... #FC3D21  (NASA Red)
Secondary Accent ..... #0B3D91  (NASA Blue)
Gold Accent .......... #F5A623  (Telemetry Gold)
Muted Text ........... #8A8F98  (Slate Gray)
```

---

*Human Body Atlas © 2024 · All Systems Nominal · v2.0.1 · Build 042*
