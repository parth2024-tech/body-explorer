# 🛰️ Body Explorer: Next-Gen Interactive Anatomy & Health Platform

> **A precision interactive anatomy and health platform** — combining cutting-edge client-side graphics with advanced Generative AI to deliver a world-class educational experience. Built for students, health enthusiasts, and anyone curious about the human body.

---

## 🌟 The Vision

Body Explorer pushes the boundaries of web-based medical education. Moving beyond static textbooks and standard 2D charts, it provides an immersive, multi-layered **Living Body Atlas**. By leveraging Google Gemini AI, the platform does not just show anatomy—it helps users understand physiological mechanisms, analyze symptoms in real-time, track daily health metrics, and prepare for medical consultations.

The design philosophy combines a premium, telemetry-inspired dark aesthetic with responsive performance, ensuring critical health information is readable, accessible, and stunningly presented on any device.

---

## ✨ Flagship Features

### 1. 🧠 AI Symptom Explorer (Powered by Gemini)
* **Intelligent Physiology Mapping:** Describe physical sensations in plain language. The AI engine maps descriptions directly to the underlying organ systems and biological mechanisms.
* **Doctor Visit Summaries:** Generates a structured pre-consultation report detailing severity, duration, and potential physiological triggers, complete with smart questions to ask your physician.
* **Print-Optimized:** Custom `@media print` stylesheets hide UI layout elements, formatting a clean, ink-friendly report that you can print or save as a PDF to hand directly to your doctor.

### 2. 🌐 Multi-Language Support & Deep Localization
* **Dynamic Translation Engine:** Offers seamless website-wide translation between English and Hindi (हिंदी). Switch languages instantly in the header toolbar to translate all page elements, data structures, and map labels.
* **Clean UI Integration:** Custom CSS overrides suppress default translation frames, banners, and tooltips, ensuring a completely clean, native user interface experience.
* **Localized AI Output:** The backend symptom analyzer dynamically detects the active language, instructing the Gemini model to output clinical explanations, preventative steps, and doctor summaries directly in Hindi.

### 3. 🗺️ Interactive Human Body Map
* **Layered Biological Views:** Toggle between Skin, Muscles, Organs, and Skeletal views to explore layered human anatomy.
* **Interactive Anatomy Zones:** High-contrast SVG mapping with hover tooltips and connection lines showing system-wide biological relationships.
* **Personal Annotations:** Pin custom notes locally to specific organs to maintain a personal body diary.

### 4. 🚨 Emergency Precautions & First Aid
* **Immediate Protocols:** Step-by-step guidance for critical medical events (Cardiac Arrest, Stroke, Anaphylaxis, Choking, Severe Bleeding).
* **Visual CPR Pacer:** Integrated audio-visual metronome pulsing at exactly **105 BPM** to guide emergency chest compression timing.
* **Smart Localized Helplines:** Automatically detects browser locale to display the correct emergency contact numbers.

### 5. 🕵️‍♂️ The Grey Market Index
* **Regulatory Database:** Tracks highly consumed Indian products and supplements (e.g., *MDH & Everest Spices*, *Chyawanprash*, *Safi*, *Shilajit*, *Mustard Oil*) that face bans or restrictions globally (US, EU, UK, Canada, Singapore).
* **Consumer-First Design:** Features familiar retail brand names as primary keys and active chemical agents (e.g., *Ethylene Oxide*, *Heavy Metals*) as secondary metadata for instant recognition.
* **AI Toxicology Deep-Dives:** Generates detailed toxicology reports detailing pharmacokinetics, toxicity mechanisms, clinical signs, and action plans.

### 6. 📚 Anatomy Library & Personalization
* **Clinical Evidence Remedies:** Natural remedies categorized by studied, traditional, and anecdotal scientific evidence.
* **Fisher-Yates Randomization:** Shuffles library facts, myths, and remedies on page load to keep content discovery engaging.
* **Universal Bookmarks Hub:** Save remedies, myths, and daily facts to a unified local bookmarks tab.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Core Framework** | React 19, TypeScript, Vite 8 |
| **Server-Side Functions** | TanStack Start (SSR & server-side RPC functions) |
| **Routing** | TanStack Router (File-based, type-safe routing) |
| **Animation** | Framer Motion 12 |
| **AI Integration** | Google Gemini API (`@google/generative-ai`) |
| **State Management** | Zustand (with persistent localStorage middleware) |
| **Styling** | Custom Vanilla CSS (Fluid layouts, media overrides) |

---

## 🚀 Setup & Development

### Prerequisites
* Node.js (v18+)
* A Google Gemini API Key (set as `GEMINI_API_KEY` in your environment)

### Installation
```bash
# Clone the repository
git clone https://github.com/parth2024-tech/body-explorer.git
cd body-explorer

# Install dependencies
npm install
```

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

### Running Locally
```bash
# Start development server
npm run dev
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Building for Production
```bash
# Build the production SSR bundle
npm run build
npm run preview
```

---

## 🎨 Design System & Aesthetic

The interface utilizes a premium telemetry-inspired aesthetic with high contrast and smooth micro-animations.

*   **Deep Space Black** (`#030303`) — Main background void to elevate visual elements.
*   **Telemetry Gold** (`#F5A623`) — Used for premium alerts, tips, and AI highlights.
*   **NASA Red** (`#FC3D21`) — Reserved exclusively for critical emergency alerts, active states, and focus areas.
*   **NASA Blue** (`#0B3D91`) — Secondary accent color for system indicators and connections.
*   **Off-White** (`#EAEAEA`) — Primary high-contrast typography color.

**Typography:** *Space Grotesk* for clean, modern titles; *Inter* and *Plus Jakarta Sans* for high-readability body copy; *Fira Mono* for clinical readouts and data tables.

---

*Body Explorer © 2026 · All Systems Nominal*
