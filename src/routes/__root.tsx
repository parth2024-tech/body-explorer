import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense, useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { MobileBottomNav } from "../components/MobileBottomNav";
import { useBodyStore } from "@/store/useBodyStore";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

// Lazy load ParticleBackground for performance
const ParticleBackground = lazy(() =>
  import("../components/ParticleBackground").then((m) => ({ default: m.ParticleBackground }))
);

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold gradient-text glow-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[#EAEAEA]">Lost in the body</h2>
        <p className="mt-2 text-sm text-[#8A8F98]">
          This organ hasn't been mapped yet. Head back to explore what's been charted.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#FC3D21] px-6 py-3 text-sm font-semibold text-[#030303] transition-all hover:bg-red-500"
          >
            Return to Atlas
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-xl bg-[#FC3D21]/10 text-[#FC3D21]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-[#EAEAEA]">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-[#8A8F98]">
          A component encountered an unexpected error. You can try refreshing or returning to the home page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-[#FC3D21] px-5 py-2.5 text-sm font-semibold text-[#030303] transition-all hover:bg-red-500"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-[#222222] bg-[#0F0F0F] px-5 py-2.5 text-sm font-medium text-[#EAEAEA] transition-colors hover:border-[#FC3D21]/30"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          title:
            "The Living Body Atlas: Interactive Human Anatomy & Physiology",
        },
        {
          name: "description",
          content:
            "Interactive human anatomy and clinical physiology platform. Explore 30+ organs through layered vector maps, verified medical facts, and evidence-rated remedies.",
        },
        {
          property: "og:title",
          content: "The Living Body Atlas: Interactive Human Anatomy",
        },
        {
          property: "og:description",
          content:
            "Clinically verified human anatomy and physiology reference vetted against AHA, CDC, and WHO guidelines.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "theme-color", content: "#030303" },
      ],
      links: [
        { rel: "manifest", href: "/manifest.json" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  }
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="absolute left-0 top-0 z-[100] -translate-y-full bg-[#FC3D21] px-4 py-2 text-sm font-bold text-black focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white transition-transform"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { language } = useBodyStore();

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => console.log("SW registered:", reg))
          .catch((err) => console.log("SW registration failed:", err));
      });
    }
  }, []);

  useEffect(() => {
    // 1. Define googleTranslateElementInit function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // 2. Load Google Translate script
    const id = "google-translate-script";
    if (!document.getElementById(id)) {
      const addScript = document.createElement("script");
      addScript.id = id;
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
    }
  }, []);

  useEffect(() => {
    const updateLanguage = () => {
      // Set the translation cookie googtrans
      const cookieValue = `googtrans=/en/${language}`;
      document.cookie = `${cookieValue}; path=/;`;
      document.cookie = `${cookieValue}; path=/; domain=${window.location.hostname};`;

      // Trigger the translation combobox
      const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.value = language;
        selectEl.dispatchEvent(new Event("change"));
      } else {
        // If the element is not ready yet, retry in a moment
        const timer = setTimeout(updateLanguage, 250);
        return () => clearTimeout(timer);
      }
    };

    // Delay slightly to allow element/script initialization
    const initialTimer = setTimeout(updateLanguage, 100);
    return () => clearTimeout(initialTimer);
  }, [language]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Ambient particle field: dynamic canvas backdrop */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Sticky header with navigation */}
      <Header />

      {/* Content: sits above particles */}
      <main id="main-content" className="relative z-10 pb-20 md:pb-0" tabIndex={-1}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>

      {/* Touch-optimized mobile bottom navigation */}
      <MobileBottomNav />

      {/* Hidden element for Google Translate widget */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </QueryClientProvider>
  );
}
