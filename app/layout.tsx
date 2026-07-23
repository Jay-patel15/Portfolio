import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const THEME_INIT_SCRIPT = `(function() {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored === 'dark' || (stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://jaypatel.dev"),
  title: "Jay Patel — SDET & Data Analyst",
  description:
    "Jay Patel is an SDET with the powers of DA, specializing in Python, SQL, Selenium, Playwright, and automated data-validation pipelines.",
  keywords: [
    "Jay Patel",
    "SDET",
    "Data Analyst",
    "QA Automation",
    "Python",
    "SQL",
    "Locust",
    "Playwright",
    "Data Validation",
  ],
  authors: [{ name: "Jay Patel" }],
  openGraph: {
    title: "Jay Patel — SDET & Data Analyst",
    description:
      "SDET & QA Automation Engineer specializing in building robust test frameworks and automated data-validation pipelines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Patel — SDET & Data Analyst",
    description:
      "SDET & QA Automation Engineer specializing in building robust test frameworks and automated data-validation pipelines.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body className="bg-bg font-display text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
