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
import { reportLovableError } from "../lib/lovable-error-reporting";
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
        <h2 className="mt-4 text-xl font-semibold text-[#E8E0D5]">Lost in the body</h2>
        <p className="mt-2 text-sm text-[#8B8FA3]">
          This organ hasn't been mapped yet. Head back to explore what's been charted.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#00E5C4] px-6 py-3 text-sm font-semibold text-[#0A0E1A] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,196,0.4)]"
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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-[#E54D4D]/10 text-3xl">
          ⚡
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-[#E8E0D5]">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-[#8B8FA3]">
          A cell misfired. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[#00E5C4] px-5 py-2.5 text-sm font-semibold text-[#0A0E1A] transition-all hover:scale-105"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#1E2844] bg-[#141826] px-5 py-2.5 text-sm font-medium text-[#E8E0D5] transition-colors hover:border-[#00E5C4]/30"
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
        { name: "theme-color", content: "#0A0E1A" },
      ],
      links: [
        { rel: "manifest", href: "/manifest.json" },
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Fira+Mono:wght@400;500;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap",
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
      <div className="relative z-10">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
