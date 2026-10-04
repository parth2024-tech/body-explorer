# Contributing to Body Explorer

Thank you for your interest in contributing to **Body Explorer**! We welcome contributions that improve anatomical accuracy, accessibility, performance, and user experience.

---

## 📋 Code of Clinical Conduct

Because this platform serves users seeking health and anatomical information, all contributions must uphold the highest standards of safety and accuracy:

1. **Evidence-Based Claims Only:** Any new health data, remedy, or nutritional advice must cite verifiable Tier 1 (WHO, CDC, NIH, Cochrane) or Tier 2 (peer-reviewed studies) sources.
2. **Never Guarantee Outcomes:** Avoid absolute claims ("cures", "guarantees") in favor of evidence-graded language ("studies indicate", "associated with").
3. **No Prescription Dosing:** Never contribute specific drug or supplement dosages for clinical treatments.
4. **Plain Language Mandate:** Explain complex terminology clearly so that readers without medical training can understand.

---

## 💻 Development Workflow

### 1. Branch Strategy
* Branch from `main` using descriptive branch names:
  * `feat/short-feature-name`
  * `fix/short-bug-description`
  * `docs/documentation-update`

### 2. Local Setup
```bash
git clone https://github.com/parth2024-tech/body-explorer.git
cd body-explorer
npm install
npm run dev
```

### 3. Code Standards
* **Strict TypeScript:** No `any` types. Provide explicit interfaces and union types.
* **Component Design:** Use named exports for components, clean modular structures, and accessible semantic HTML.
* **Styling:** Follow Tailwind CSS v4 conventions with the telemetry dark design system. Avoid arbitrary inline styles.
* **Touch Targets:** Ensure interactive mobile controls meet the minimum ≥48px boundary standard.

### 4. Mandatory Pre-Commit Checks
Before submitting a pull request, run all quality checks:

```bash
# Type check
npm run typecheck

# ESLint verification
npm run lint

# Code formatting
npm run format

# Production build verification
npm run build
```

All checks must pass with zero errors.

---

## 📝 Commit Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

* `feat(...)`: A new feature or capability
* `fix(...)`: A bug fix or type resolution
* `docs(...)`: Documentation changes
* `style(...)`: Formatting or CSS visual improvements
* `refactor(...)`: Code changes that neither fix a bug nor add a feature
* `perf(...)`: Performance optimizations
* `chore(...)`: Routine tasks, dependency updates, or repo configuration

---

## 🔒 Security & Medical Inaccuracies

If you discover a medical inaccuracy or a security vulnerability, please report it privately following the guidelines in [SECURITY.md](./SECURITY.md).
