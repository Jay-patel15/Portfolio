import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/JsonLd";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-jay-patel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jay Patel — Data Analyst & Software Developer",
    template: "%s | Jay Patel",
  },
  description:
    "Jay Patel is a Data Analyst & Software Developer specializing in Python, SQL, Data Analytics, ETL Pipelines, Machine Learning, and Web Development. Explore projects, experience, and skills.",
  keywords: [
    "Jay Patel",
    "Data Analyst",
    "Software Developer",
    "Software Engineer",
    "Data Scientist",
    "Python Developer",
    "SQL Developer",
    "Full-Stack Developer",
    "Data Engineering",
    "ETL Pipelines",
    "Pandas",
    "Next.js",
    "React",
    "Power BI",
    "Portfolio",
    "Jay Patel Portfolio",
    "Thane Developer",
  ],
  authors: [{ name: "Jay Patel", url: siteUrl }],
  creator: "Jay Patel",
  publisher: "Jay Patel",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jay Patel — Data Analyst & Software Developer",
    description:
      "Data Analyst & Software Developer specializing in data engineering pipelines, analytics dashboards, SQL database architecture, and full-stack web solutions.",
    url: siteUrl,
    siteName: "Jay Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Patel — Data Analyst & Software Developer",
    description:
      "Data Analyst & Software Developer specializing in data engineering pipelines, analytics dashboards, SQL database architecture, and full-stack web solutions.",
    creator: "@JayPatel",
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
        <JsonLd />
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
