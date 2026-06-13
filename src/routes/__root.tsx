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
            className="inline-flex items-center gap-2 rounded-full bg-[#FC3D21] px-6 py-3 text-sm font-semibold text-[#030303] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(252,61,33,0.4)]"
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
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-[#FC3D21]/10 text-3xl">
          ⚡
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-[#EAEAEA]">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-[#8A8F98]">
          A cell misfired. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[#FC3D21] px-5 py-2.5 text-sm font-semibold text-[#030303] transition-all hover:scale-105"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#222222] bg-[#0F0F0F] px-5 py-2.5 text-sm font-medium text-[#EAEAEA] transition-colors hover:border-[#FC3D21]/30"
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
            "The Living Body Atlas — Your body has 37 trillion cells. Start understanding them.",
        },
        {
          name: "description",
          content:
            "An interactive, animated human body education platform. Explore anatomy through a living 3D-layered map, log your body experiences, complete weekly challenges, and get AI-guided clarity.",
        },
        {
          property: "og:title",
          content: "The Living Body Atlas",
        },
        {
          property: "og:description",
          content:
            "Your body has 37 trillion cells. Start understanding them. An interactive anatomy platform with 30+ organs, personal body diary, and AI-guided education.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "theme-color", content: "#030303" },
      ],
      links: [
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

  return (
    <QueryClientProvider client={queryClient}>
      {/* Ambient particle field — the site breathes */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Sticky header with navigation */}
      <Header />

      {/* Content — sits above particles */}
      <main id="main-content" className="relative z-10" tabIndex={-1}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
    </QueryClientProvider>
  );
}
